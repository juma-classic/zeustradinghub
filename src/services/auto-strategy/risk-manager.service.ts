/**
 * Risk Manager Service
 * 
 * Manages risk limits and safety controls for the Auto Strategy Controller.
 * Tracks profit/loss across all bots and per-strategy, enforces limits,
 * and triggers interventions when limits are breached.
 * 
 * Requirements: 13.1-13.5, 14.1-14.5, 15.1-15.5
 */

import { RunningBot } from '../../types/auto-strategy.types';

// ============================================================================
// Types and Interfaces
// ============================================================================

/**
 * Risk check result
 */
export interface RiskCheckResult {
    /** Action to take */
    action: 'none' | 'stop_all' | 'stop_strategy';
    /** Reason for the action */
    reason?: string;
    /** Strategy ID (if action is 'stop_strategy') */
    strategyId?: string;
    /** Additional details */
    details?: {
        currentProfit?: number;
        currentLoss?: number;
        limit?: number;
    };
}

/**
 * Strategy limits configuration
 */
export interface StrategyLimits {
    /** Profit limit for the strategy */
    profitLimit?: number;
    /** Loss limit for the strategy */
    lossLimit?: number;
}

/**
 * Risk intervention event
 */
export interface RiskIntervention {
    /** Event type */
    type: 'global_profit_target' | 'global_loss_limit' | 'strategy_profit_limit' | 'strategy_loss_limit';
    /** Timestamp */
    timestamp: number;
    /** Strategy ID (if applicable) */
    strategyId?: string;
    /** Current value that triggered the intervention */
    currentValue: number;
    /** Limit that was breached */
    limit: number;
    /** Bots that were stopped */
    botsStopped: string[];
}

/**
 * Profit/Loss tracking entry
 */
interface ProfitLossEntry {
    /** Bot ID */
    botId: string;
    /** Strategy ID that started the bot */
    strategyId: string;
    /** Profit or loss amount (positive for profit, negative for loss) */
    amount: number;
    /** Timestamp */
    timestamp: number;
}

/**
 * Daily counters
 */
interface DailyCounters {
    /** Total profit across all bots */
    totalProfit: number;
    /** Total loss across all bots */
    totalLoss: number;
    /** Profit per strategy */
    strategyProfit: Map<string, number>;
    /** Loss per strategy */
    strategyLoss: Map<string, number>;
    /** Last reset timestamp */
    lastResetAt: number;
}

// ============================================================================
// Risk Manager Interface
// ============================================================================

/**
 * Interface for Risk Manager
 */
export interface IRiskManager {
    // Limit management
    setGlobalProfitTarget(amount: number): void;
    setGlobalLossLimit(amount: number): void;
    setStrategyProfitLimit(strategyId: string, amount: number): void;
    setStrategyLossLimit(strategyId: string, amount: number): void;
    setMaxConcurrentBots(limit: number): void;

    // Monitoring
    checkLimits(): Promise<RiskCheckResult>;
    getCurrentProfit(): number;
    getCurrentLoss(): number;
    getStrategyProfit(strategyId: string): number;
    getStrategyLoss(strategyId: string): number;

    // Actions
    enforceGlobalLimits(): Promise<void>;
    enforceStrategyLimits(strategyId: string): Promise<void>;
    resetDailyCounters(): void;

    // Tracking
    recordBotProfit(botId: string, strategyId: string, amount: number): void;
    recordBotLoss(botId: string, strategyId: string, amount: number): void;
}

// ============================================================================
// Risk Manager Implementation
// ============================================================================

/**
 * Risk Manager Service
 * 
 * Tracks profit/loss and enforces risk limits across all strategies and bots.
 */
export class RiskManager implements IRiskManager {
    // Global limits
    private globalProfitTarget?: number;
    private globalLossLimit?: number;
    private maxConcurrentBots: number = 5;

    // Per-strategy limits
    private strategyLimits: Map<string, StrategyLimits> = new Map();

    // Daily counters
    private dailyCounters: DailyCounters = {
        totalProfit: 0,
        totalLoss: 0,
        strategyProfit: new Map(),
        strategyLoss: new Map(),
        lastResetAt: Date.now(),
    };

    // Profit/Loss history
    private profitLossHistory: ProfitLossEntry[] = [];

    // Callbacks
    private auditLogCallback?: (entry: any) => void;
    private notificationCallback?: (message: string, type: 'info' | 'warning' | 'error') => void;
    private stopAllBotsCallback?: (reason: string) => Promise<void>;
    private deactivateStrategyCallback?: (strategyId: string, reason: string) => Promise<void>;

    constructor() {
        // Check if we need to reset daily counters on initialization
        this.checkDailyReset();
    }

    // ========================================================================
    // Callback Setters
    // ========================================================================

    /**
     * Set audit log callback
     */
    setAuditLogCallback(callback: (entry: any) => void): void {
        this.auditLogCallback = callback;
    }

    /**
     * Set notification callback
     */
    setNotificationCallback(callback: (message: string, type: 'info' | 'warning' | 'error') => void): void {
        this.notificationCallback = callback;
    }

    /**
     * Set stop all bots callback
     */
    setStopAllBotsCallback(callback: (reason: string) => Promise<void>): void {
        this.stopAllBotsCallback = callback;
    }

    /**
     * Set deactivate strategy callback
     */
    setDeactivateStrategyCallback(callback: (strategyId: string, reason: string) => Promise<void>): void {
        this.deactivateStrategyCallback = callback;
    }

    // ========================================================================
    // Limit Management
    // ========================================================================

    /**
     * Set global profit target
     * When cumulative profit reaches this amount, all bots will be stopped
     */
    setGlobalProfitTarget(amount: number): void {
        if (amount <= 0) {
            throw new Error('Global profit target must be greater than 0');
        }
        this.globalProfitTarget = amount;
        this.logAudit({
            type: 'risk_config_changed',
            action: 'set_global_profit_target',
            value: amount,
            timestamp: Date.now(),
        });
    }

    /**
     * Set global loss limit
     * When cumulative loss reaches this amount, all bots will be stopped
     */
    setGlobalLossLimit(amount: number): void {
        if (amount <= 0) {
            throw new Error('Global loss limit must be greater than 0');
        }
        this.globalLossLimit = amount;
        this.logAudit({
            type: 'risk_config_changed',
            action: 'set_global_loss_limit',
            value: amount,
            timestamp: Date.now(),
        });
    }

    /**
     * Set profit limit for a specific strategy
     */
    setStrategyProfitLimit(strategyId: string, amount: number): void {
        if (amount <= 0) {
            throw new Error('Strategy profit limit must be greater than 0');
        }

        const limits = this.strategyLimits.get(strategyId) || {};
        limits.profitLimit = amount;
        this.strategyLimits.set(strategyId, limits);

        this.logAudit({
            type: 'risk_config_changed',
            action: 'set_strategy_profit_limit',
            strategyId,
            value: amount,
            timestamp: Date.now(),
        });
    }

    /**
     * Set loss limit for a specific strategy
     */
    setStrategyLossLimit(strategyId: string, amount: number): void {
        if (amount <= 0) {
            throw new Error('Strategy loss limit must be greater than 0');
        }

        const limits = this.strategyLimits.get(strategyId) || {};
        limits.lossLimit = amount;
        this.strategyLimits.set(strategyId, limits);

        this.logAudit({
            type: 'risk_config_changed',
            action: 'set_strategy_loss_limit',
            strategyId,
            value: amount,
            timestamp: Date.now(),
        });
    }

    /**
     * Set maximum concurrent bots limit
     */
    setMaxConcurrentBots(limit: number): void {
        if (limit <= 0) {
            throw new Error('Max concurrent bots must be greater than 0');
        }
        this.maxConcurrentBots = limit;
        this.logAudit({
            type: 'risk_config_changed',
            action: 'set_max_concurrent_bots',
            value: limit,
            timestamp: Date.now(),
        });
    }

    /**
     * Get maximum concurrent bots limit
     */
    getMaxConcurrentBots(): number {
        return this.maxConcurrentBots;
    }

    // ========================================================================
    // Monitoring
    // ========================================================================

    /**
     * Check all risk limits and return action to take
     */
    async checkLimits(): Promise<RiskCheckResult> {
        // Check if daily reset is needed
        this.checkDailyReset();

        const currentProfit = this.getCurrentProfit();
        const currentLoss = this.getCurrentLoss();

        // Check global profit target
        if (this.globalProfitTarget && currentProfit >= this.globalProfitTarget) {
            return {
                action: 'stop_all',
                reason: 'profit_target_reached',
                details: {
                    currentProfit,
                    limit: this.globalProfitTarget,
                },
            };
        }

        // Check global loss limit
        if (this.globalLossLimit && currentLoss >= this.globalLossLimit) {
            return {
                action: 'stop_all',
                reason: 'loss_limit_reached',
                details: {
                    currentLoss,
                    limit: this.globalLossLimit,
                },
            };
        }

        // Check per-strategy limits
        for (const [strategyId, limits] of this.strategyLimits) {
            const strategyProfit = this.getStrategyProfit(strategyId);
            const strategyLoss = this.getStrategyLoss(strategyId);

            if (limits.profitLimit && strategyProfit >= limits.profitLimit) {
                return {
                    action: 'stop_strategy',
                    reason: 'strategy_profit_limit_reached',
                    strategyId,
                    details: {
                        currentProfit: strategyProfit,
                        limit: limits.profitLimit,
                    },
                };
            }

            if (limits.lossLimit && strategyLoss >= limits.lossLimit) {
                return {
                    action: 'stop_strategy',
                    reason: 'strategy_loss_limit_reached',
                    strategyId,
                    details: {
                        currentLoss: strategyLoss,
                        limit: limits.lossLimit,
                    },
                };
            }
        }

        return { action: 'none' };
    }

    /**
     * Get current total profit across all bots
     */
    getCurrentProfit(): number {
        return this.dailyCounters.totalProfit;
    }

    /**
     * Get current total loss across all bots
     */
    getCurrentLoss(): number {
        return this.dailyCounters.totalLoss;
    }

    /**
     * Get current profit for a specific strategy
     */
    getStrategyProfit(strategyId: string): number {
        return this.dailyCounters.strategyProfit.get(strategyId) || 0;
    }

    /**
     * Get current loss for a specific strategy
     */
    getStrategyLoss(strategyId: string): number {
        return this.dailyCounters.strategyLoss.get(strategyId) || 0;
    }

    /**
     * Get net profit/loss (profit - loss)
     */
    getNetProfitLoss(): number {
        return this.getCurrentProfit() - this.getCurrentLoss();
    }

    /**
     * Get strategy net profit/loss
     */
    getStrategyNetProfitLoss(strategyId: string): number {
        return this.getStrategyProfit(strategyId) - this.getStrategyLoss(strategyId);
    }

    // ========================================================================
    // Actions
    // ========================================================================

    /**
     * Enforce global limits (stop all bots if limits reached)
     */
    async enforceGlobalLimits(): Promise<void> {
        const checkResult = await this.checkLimits();

        if (checkResult.action === 'stop_all') {
            await this.handleGlobalLimitBreach(checkResult);
        }
    }

    /**
     * Enforce limits for a specific strategy
     */
    async enforceStrategyLimits(strategyId: string): Promise<void> {
        const limits = this.strategyLimits.get(strategyId);
        if (!limits) {
            return;
        }

        const strategyProfit = this.getStrategyProfit(strategyId);
        const strategyLoss = this.getStrategyLoss(strategyId);

        // Check profit limit
        if (limits.profitLimit && strategyProfit >= limits.profitLimit) {
            await this.handleStrategyProfitLimit(strategyId, strategyProfit, limits.profitLimit);
        }

        // Check loss limit
        if (limits.lossLimit && strategyLoss >= limits.lossLimit) {
            await this.handleStrategyLossLimit(strategyId, strategyLoss, limits.lossLimit);
        }
    }

    /**
     * Reset daily counters (called at start of trading day)
     */
    resetDailyCounters(): void {
        this.dailyCounters = {
            totalProfit: 0,
            totalLoss: 0,
            strategyProfit: new Map(),
            strategyLoss: new Map(),
            lastResetAt: Date.now(),
        };

        this.logAudit({
            type: 'daily_reset',
            timestamp: Date.now(),
        });

        this.notify('Daily profit/loss counters have been reset', 'info');
    }

    // ========================================================================
    // Tracking
    // ========================================================================

    /**
     * Record profit from a bot
     */
    recordBotProfit(botId: string, strategyId: string, amount: number): void {
        if (amount <= 0) {
            throw new Error('Profit amount must be greater than 0');
        }

        // Update daily counters
        this.dailyCounters.totalProfit += amount;

        const currentStrategyProfit = this.dailyCounters.strategyProfit.get(strategyId) || 0;
        this.dailyCounters.strategyProfit.set(strategyId, currentStrategyProfit + amount);

        // Add to history
        this.profitLossHistory.push({
            botId,
            strategyId,
            amount,
            timestamp: Date.now(),
        });

        this.logAudit({
            type: 'profit_recorded',
            botId,
            strategyId,
            amount,
            totalProfit: this.dailyCounters.totalProfit,
            strategyProfit: this.getStrategyProfit(strategyId),
            timestamp: Date.now(),
        });
    }

    /**
     * Record loss from a bot
     */
    recordBotLoss(botId: string, strategyId: string, amount: number): void {
        if (amount <= 0) {
            throw new Error('Loss amount must be greater than 0');
        }

        // Update daily counters
        this.dailyCounters.totalLoss += amount;

        const currentStrategyLoss = this.dailyCounters.strategyLoss.get(strategyId) || 0;
        this.dailyCounters.strategyLoss.set(strategyId, currentStrategyLoss + amount);

        // Add to history
        this.profitLossHistory.push({
            botId,
            strategyId,
            amount: -amount, // Negative for loss
            timestamp: Date.now(),
        });

        this.logAudit({
            type: 'loss_recorded',
            botId,
            strategyId,
            amount,
            totalLoss: this.dailyCounters.totalLoss,
            strategyLoss: this.getStrategyLoss(strategyId),
            timestamp: Date.now(),
        });
    }

    // ========================================================================
    // Private Methods
    // ========================================================================

    /**
     * Check if daily reset is needed (at start of trading day)
     */
    private checkDailyReset(): void {
        const now = new Date();
        const lastReset = new Date(this.dailyCounters.lastResetAt);

        // Reset if it's a new day
        if (
            now.getFullYear() !== lastReset.getFullYear() ||
            now.getMonth() !== lastReset.getMonth() ||
            now.getDate() !== lastReset.getDate()
        ) {
            this.resetDailyCounters();
        }
    }

    /**
     * Handle global limit breach (profit target or loss limit)
     */
    private async handleGlobalLimitBreach(checkResult: RiskCheckResult): Promise<void> {
        const isProfit = checkResult.reason === 'profit_target_reached';
        const limitType = isProfit ? 'profit target' : 'loss limit';
        const currentValue = isProfit ? checkResult.details?.currentProfit : checkResult.details?.currentLoss;
        const limit = checkResult.details?.limit;

        // Stop all bots
        if (this.stopAllBotsCallback) {
            await this.stopAllBotsCallback(`Global ${limitType} reached`);
        }

        // Log intervention
        this.logAudit({
            type: 'risk_intervention',
            interventionType: isProfit ? 'global_profit_target' : 'global_loss_limit',
            currentValue,
            limit,
            action: 'stopped_all_bots',
            timestamp: Date.now(),
        });

        // Notify user
        const message = `Global ${limitType} reached! Current: ${currentValue?.toFixed(2)}, Limit: ${limit?.toFixed(2)}. All bots have been stopped.`;
        this.notify(message, 'warning');
    }

    /**
     * Handle strategy profit limit breach
     */
    private async handleStrategyProfitLimit(strategyId: string, currentProfit: number, limit: number): Promise<void> {
        // Deactivate strategy
        if (this.deactivateStrategyCallback) {
            await this.deactivateStrategyCallback(strategyId, 'Profit limit reached');
        }

        // Log intervention
        this.logAudit({
            type: 'risk_intervention',
            interventionType: 'strategy_profit_limit',
            strategyId,
            currentValue: currentProfit,
            limit,
            action: 'deactivated_strategy',
            timestamp: Date.now(),
        });

        // Notify user
        const message = `Strategy ${strategyId} profit limit reached! Current: ${currentProfit.toFixed(2)}, Limit: ${limit.toFixed(2)}. Strategy has been deactivated.`;
        this.notify(message, 'info');
    }

    /**
     * Handle strategy loss limit breach
     */
    private async handleStrategyLossLimit(strategyId: string, currentLoss: number, limit: number): Promise<void> {
        // Deactivate strategy
        if (this.deactivateStrategyCallback) {
            await this.deactivateStrategyCallback(strategyId, 'Loss limit reached');
        }

        // Log intervention
        this.logAudit({
            type: 'risk_intervention',
            interventionType: 'strategy_loss_limit',
            strategyId,
            currentValue: currentLoss,
            limit,
            action: 'deactivated_strategy',
            timestamp: Date.now(),
        });

        // Notify user
        const message = `Strategy ${strategyId} loss limit reached! Current: ${currentLoss.toFixed(2)}, Limit: ${limit.toFixed(2)}. Strategy has been deactivated.`;
        this.notify(message, 'warning');
    }

    /**
     * Log audit entry
     */
    private logAudit(entry: any): void {
        if (this.auditLogCallback) {
            this.auditLogCallback(entry);
        }
    }

    /**
     * Send notification
     */
    private notify(message: string, type: 'info' | 'warning' | 'error'): void {
        if (this.notificationCallback) {
            this.notificationCallback(message, type);
        }
    }
}

// ============================================================================
// Singleton Instance
// ============================================================================

let riskManagerInstance: RiskManager | null = null;

/**
 * Get singleton instance of RiskManager
 */
export function getRiskManager(): RiskManager {
    if (!riskManagerInstance) {
        riskManagerInstance = new RiskManager();
    }
    return riskManagerInstance;
}

/**
 * Reset singleton instance (for testing)
 */
export function resetRiskManager(): void {
    riskManagerInstance = null;
}
