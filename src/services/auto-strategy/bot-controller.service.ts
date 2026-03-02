/**
 * Bot Controller Service
 * 
 * Manages bot lifecycle (start, stop, switch) and integrates with existing Bot Builder system.
 * Enforces concurrent bot limits, validates account balance, and implements cooldown periods.
 * 
 * Key Features:
 * - Bot start/stop/switch operations
 * - Concurrent bot limit enforcement with priority queue
 * - Account balance validation before starting bots
 * - Cooldown period enforcement between actions
 * - Integration with existing Bot Builder via run_panel store
 * - Comprehensive action logging
 * 
 * Requirements: 9.1-9.6, 10.1-10.5, 11.1-11.5, 16.1-16.5
 */

import {
    BotStartConfig,
    BotControlResult,
    RunningBot,
    BotStatus,
    QueuedAction,
    PriorityQueue,
    StakeAdjustmentMethod,
    StakeLimits,
} from '../../types/auto-strategy.types';
import { TStrategy } from '../../types/strategy.types';
import type { RootStore } from '../../stores/root-store';
import type { LoadModalStore } from '../../stores/load-modal-store';
import type { RunPanelStore } from '../../stores/run-panel-store';
import { getAccountIntegrationService, AccountIntegrationService, AccountTypeRestriction } from './account-integration.service';

/**
 * Interface for Bot Controller
 */
export interface IBotController {
    // Bot control
    startBot(config: BotStartConfig): Promise<BotControlResult>;
    stopBot(botId: string, reason: string): Promise<BotControlResult>;
    switchBot(fromBotId: string, toConfig: BotStartConfig): Promise<BotControlResult>;
    stopAllBots(reason: string): Promise<void>;
    
    // Bot status
    getRunningBots(): RunningBot[];
    isBotRunning(botId: string): boolean;
    getBotStatus(botId: string): BotStatus | null;
    
    // Queue management
    queueBotStart(config: BotStartConfig): void;
    getQueuedActions(): QueuedAction[];
    clearQueue(): void;
    
    // Configuration
    setMaxConcurrentBots(limit: number): void;
    getMaxConcurrentBots(): number;
    
    // Stake management
    adjustStake(botId: string, newStake: number): Promise<BotControlResult>;
    setStakeLimits(limits: StakeLimits): void;
    getStakeLimits(): StakeLimits;
    calculateDynamicStake(method: StakeAdjustmentMethod, value: number, baseStake?: number): Promise<number>;
    validateStake(stake: number): Promise<{ valid: boolean; reason?: string }>;
    
    // Bot Builder integration
    setRootStore(store: RootStore): void;
    getAvailableBots(): Promise<TStrategy[]>;
    getBotConfiguration(botId: string): Promise<TStrategy | null>;
    isAutoStarted(botId: string): boolean;
}

/**
 * Bot Controller Service Implementation
 */
export class BotController implements IBotController {
    private runningBots: Map<string, RunningBot>;
    private actionQueue: PriorityQueue<QueuedAction>;
    private maxConcurrentBots: number = 5;
    private lastActionTimestamp: number = 0;
    private readonly MIN_COOLDOWN_MS = 5000; // 5 seconds minimum cooldown
    
    // Stake limits
    private stakeLimits: StakeLimits = {
        minStake: 0.35,
        maxStake: 10000,
    };
    
    // Audit log callback
    private auditLogCallback?: (entry: any) => void;
    
    // Store references for Bot Builder integration
    private rootStore: RootStore | null = null;
    private runPanelStore: RunPanelStore | null = null;
    private loadModalStore: LoadModalStore | null = null;
    
    // Track auto-started bots (bots started by Auto Strategy Controller)
    private autoStartedBots: Set<string> = new Set();
    
    // Account integration service
    private accountService: AccountIntegrationService;

    constructor() {
        this.runningBots = new Map();
        this.actionQueue = new PriorityQueue<QueuedAction>();
        this.accountService = getAccountIntegrationService();
        
        console.log('🤖 BotController initialized');
    }

    /**
     * Set root store reference for Bot Builder integration
     * Requirements: 26.1, 26.2, 26.3
     */
    setRootStore(store: RootStore): void {
        this.rootStore = store;
        this.runPanelStore = store.run_panel;
        this.loadModalStore = store.load_modal;
        console.log('🤖 Root store connected for Bot Builder integration');
    }

    /**
     * Set run panel store reference for bot control
     * @deprecated Use setRootStore instead
     */
    setRunPanelStore(store: any): void {
        this.runPanelStore = store;
        console.log('🤖 Run panel store connected');
    }

    /**
     * Set audit log callback
     */
    setAuditLogCallback(callback: (entry: any) => void): void {
        this.auditLogCallback = callback;
    }

    /**
     * Set maximum concurrent bots limit
     * Requirements: 16.1
     */
    setMaxConcurrentBots(limit: number): void {
        if (limit < 1) {
            throw new Error('Max concurrent bots must be at least 1');
        }
        this.maxConcurrentBots = limit;
        console.log(`🤖 Max concurrent bots set to ${limit}`);
    }

    /**
     * Get maximum concurrent bots limit
     */
    getMaxConcurrentBots(): number {
        return this.maxConcurrentBots;
    }

    /**
     * Start a bot
     * Requirements: 9.1, 9.2, 9.3, 9.4, 9.5, 9.6, 38.5
     */
    async startBot(config: BotStartConfig): Promise<BotControlResult> {
        try {
            console.log(`🤖 Starting bot ${config.botId} for strategy ${config.strategyId}${config.symbol ? ` with symbol ${config.symbol}` : ''}...`);

            // Check if bot is already running
            if (this.isBotRunning(config.botId)) {
                console.log(`🤖 Bot ${config.botId} is already running`);
                return {
                    success: false,
                    reason: 'bot_already_running',
                };
            }

            // Check concurrent bot limit
            if (this.runningBots.size >= this.maxConcurrentBots) {
                console.log(`🤖 Concurrent bot limit reached (${this.maxConcurrentBots}), queueing action`);
                this.queueBotStart(config);
                return {
                    success: false,
                    reason: 'concurrent_limit_reached',
                    queued: true,
                };
            }

            // Validate bot exists (placeholder - would integrate with Bot Builder)
            const botExists = await this.validateBotExists(config.botId);
            if (!botExists) {
                console.error(`🤖 Bot ${config.botId} not found`);
                return {
                    success: false,
                    reason: 'bot_not_found',
                };
            }

            // Check account balance
            const hasBalance = await this.validateAccountBalance(config.stake);
            if (!hasBalance) {
                console.error(`🤖 Insufficient balance for stake ${config.stake}`);
                return {
                    success: false,
                    reason: 'insufficient_balance',
                };
            }

            // Start the bot using run panel store
            const started = await this.executeStartBot(config);
            
            if (!started) {
                return {
                    success: false,
                    reason: 'start_failed',
                };
            }

            // Track running bot
            const runningBot: RunningBot = {
                botId: config.botId,
                strategyId: config.strategyId,
                startedAt: Date.now(),
                stake: config.stake,
                symbol: config.symbol,
            };
            
            this.runningBots.set(config.botId, runningBot);
            this.lastActionTimestamp = Date.now();
            
            // Mark as auto-started
            this.autoStartedBots.add(config.botId);

            // Log to audit
            this.logAudit({
                type: 'bot_started',
                botId: config.botId,
                strategyId: config.strategyId,
                stake: config.stake,
                symbol: config.symbol,
                autoStarted: true,
                timestamp: Date.now(),
            });

            console.log(`✅ Bot ${config.botId} started successfully (auto-started${config.symbol ? ` on ${config.symbol}` : ''})`);
            
            return {
                success: true,
            };

        } catch (error) {
            console.error(`🤖 Error starting bot ${config.botId}:`, error);
            return {
                success: false,
                reason: 'exception',
                error: error instanceof Error ? error : new Error(String(error)),
            };
        }
    }

    /**
     * Stop a bot
     * Requirements: 10.1, 10.2, 10.3, 10.4, 10.5
     */
    async stopBot(botId: string, reason: string): Promise<BotControlResult> {
        try {
            console.log(`🤖 Stopping bot ${botId} (reason: ${reason})...`);

            // Check if bot is running
            if (!this.isBotRunning(botId)) {
                console.log(`🤖 Bot ${botId} is not running`);
                // Log the attempt but don't treat as error
                this.logAudit({
                    type: 'bot_stop_attempt',
                    botId,
                    reason,
                    result: 'not_running',
                    timestamp: Date.now(),
                });
                
                return {
                    success: true,
                    reason: 'not_running',
                };
            }

            // Stop the bot using run panel store
            const stopped = await this.executeStopBot(botId);
            
            if (!stopped) {
                return {
                    success: false,
                    reason: 'stop_failed',
                };
            }

            // Remove from running bots
            const runningBot = this.runningBots.get(botId);
            this.runningBots.delete(botId);
            this.lastActionTimestamp = Date.now();
            
            // Clear auto-started flag if it was auto-started
            const wasAutoStarted = this.autoStartedBots.has(botId);
            if (wasAutoStarted) {
                this.autoStartedBots.delete(botId);
            }

            // Log to audit
            this.logAudit({
                type: 'bot_stopped',
                botId,
                strategyId: runningBot?.strategyId,
                reason,
                wasAutoStarted,
                timestamp: Date.now(),
            });

            console.log(`✅ Bot ${botId} stopped successfully`);

            // Process queued actions if any
            await this.processQueue();

            return {
                success: true,
            };

        } catch (error) {
            console.error(`🤖 Error stopping bot ${botId}:`, error);
            return {
                success: false,
                reason: 'exception',
                error: error instanceof Error ? error : new Error(String(error)),
            };
        }
    }

    /**
     * Switch from one bot to another
     * Requirements: 11.1, 11.2, 11.3, 11.4, 11.5
     */
    async switchBot(fromBotId: string, toConfig: BotStartConfig): Promise<BotControlResult> {
        try {
            console.log(`🤖 Switching from bot ${fromBotId} to ${toConfig.botId}...`);

            // Check cooldown period
            const timeSinceLastAction = Date.now() - this.lastActionTimestamp;
            if (timeSinceLastAction < this.MIN_COOLDOWN_MS) {
                const remainingCooldown = Math.ceil((this.MIN_COOLDOWN_MS - timeSinceLastAction) / 1000);
                console.log(`🤖 Cooldown active, queueing switch action (${remainingCooldown}s remaining)`);
                
                // Queue the switch action
                this.queueBotStart(toConfig);
                
                return {
                    success: false,
                    reason: `cooldown_active (${remainingCooldown}s remaining)`,
                    queued: true,
                };
            }

            // Stop the current bot
            const stopResult = await this.stopBot(fromBotId, 'bot_switch');
            if (!stopResult.success) {
                console.error(`🤖 Failed to stop bot ${fromBotId} during switch`);
                return {
                    success: false,
                    reason: `stop_failed: ${stopResult.reason}`,
                };
            }

            // Wait for cooldown
            await this.waitForCooldown();

            // Start the new bot
            const startResult = await this.startBot(toConfig);
            if (!startResult.success) {
                console.error(`🤖 Failed to start bot ${toConfig.botId} during switch`);
                return {
                    success: false,
                    reason: `start_failed: ${startResult.reason}`,
                };
            }

            // Log to audit
            this.logAudit({
                type: 'bot_switched',
                fromBotId,
                toBotId: toConfig.botId,
                strategyId: toConfig.strategyId,
                timestamp: Date.now(),
            });

            console.log(`✅ Bot switched successfully from ${fromBotId} to ${toConfig.botId}`);

            return {
                success: true,
            };

        } catch (error) {
            console.error(`🤖 Error switching bots:`, error);
            return {
                success: false,
                reason: 'exception',
                error: error instanceof Error ? error : new Error(String(error)),
            };
        }
    }

    /**
     * Stop all running bots
     * Requirements: 10.5
     */
    async stopAllBots(reason: string): Promise<void> {
        console.log(`🤖 Stopping all bots (reason: ${reason})...`);

        const botIds = Array.from(this.runningBots.keys());
        
        // Stop all bots in parallel
        const stopPromises = botIds.map(botId => this.stopBot(botId, reason));
        await Promise.all(stopPromises);

        console.log(`✅ All bots stopped`);
    }

    /**
     * Get list of running bots
     */
    getRunningBots(): RunningBot[] {
        return Array.from(this.runningBots.values());
    }

    /**
     * Check if a bot is running
     */
    isBotRunning(botId: string): boolean {
        return this.runningBots.has(botId);
    }

    /**
     * Get bot status
     */
    getBotStatus(botId: string): BotStatus | null {
        const runningBot = this.runningBots.get(botId);
        
        if (!runningBot) {
            return {
                botId,
                isRunning: false,
            };
        }

        return {
            botId,
            isRunning: true,
            startedBy: runningBot.strategyId,
            startedAt: runningBot.startedAt,
            stake: runningBot.stake,
        };
    }

    /**
     * Queue a bot start action
     * Requirements: 16.2, 16.3, 16.4
     */
    queueBotStart(config: BotStartConfig): void {
        const action: QueuedAction = {
            id: `action-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
            botId: config.botId,
            config,
            priority: config.priority,
            queuedAt: Date.now(),
        };

        this.actionQueue.enqueue(action);
        
        console.log(`🤖 Bot start action queued (priority: ${config.priority}, queue size: ${this.actionQueue.size()})`);

        // Log to audit
        this.logAudit({
            type: 'bot_action_queued',
            botId: config.botId,
            strategyId: config.strategyId,
            priority: config.priority,
            queueSize: this.actionQueue.size(),
            timestamp: Date.now(),
        });
    }

    /**
     * Get queued actions
     */
    getQueuedActions(): QueuedAction[] {
        return this.actionQueue.getAll();
    }

    /**
     * Clear action queue
     */
    clearQueue(): void {
        this.actionQueue.clear();
        console.log(`🤖 Action queue cleared`);
    }

    /**
     * Reset cooldown timestamp (for testing)
     */
    resetCooldown(): void {
        this.lastActionTimestamp = 0;
    }

    // ========================================================================
    // Bot Builder Integration Methods
    // ========================================================================

    /**
     * Get list of available bots from Bot Builder
     * Requirements: 26.1, 26.2
     */
    async getAvailableBots(): Promise<TStrategy[]> {
        try {
            if (!this.loadModalStore) {
                console.warn('🤖 Load modal store not available, returning empty bot list');
                return [];
            }

            // Get dashboard strategies (saved bots) from Bot Builder
            await this.loadModalStore.getDashboardStrategies();
            const strategies = this.loadModalStore.dashboard_strategies || [];

            console.log(`🤖 Retrieved ${strategies.length} available bots from Bot Builder`);
            
            return strategies;

        } catch (error) {
            console.error('🤖 Error retrieving available bots:', error);
            return [];
        }
    }

    /**
     * Get bot configuration from Bot Builder
     * Requirements: 26.3
     */
    async getBotConfiguration(botId: string): Promise<TStrategy | null> {
        try {
            const availableBots = await this.getAvailableBots();
            const bot = availableBots.find(b => b.id === botId);

            if (!bot) {
                console.warn(`🤖 Bot ${botId} not found in Bot Builder`);
                return null;
            }

            console.log(`🤖 Retrieved configuration for bot ${botId}: ${bot.name}`);
            return bot;

        } catch (error) {
            console.error(`🤖 Error retrieving bot configuration for ${botId}:`, error);
            return null;
        }
    }

    /**
     * Check if a bot was auto-started by Auto Strategy Controller
     * Requirements: 26.4
     */
    isAutoStarted(botId: string): boolean {
        return this.autoStartedBots.has(botId);
    }

    /**
     * Get all auto-started bot IDs
     */
    getAutoStartedBots(): string[] {
        return Array.from(this.autoStartedBots);
    }

    /**
     * Clear auto-started flag for a bot (for manual override)
     * Requirements: 26.5
     */
    clearAutoStartedFlag(botId: string): void {
        if (this.autoStartedBots.has(botId)) {
            this.autoStartedBots.delete(botId);
            console.log(`🤖 Cleared auto-started flag for bot ${botId} (manual override)`);
            
            // Log to audit
            this.logAudit({
                type: 'manual_override',
                botId,
                action: 'cleared_auto_started_flag',
                timestamp: Date.now(),
            });
        }
    }

    // ========================================================================
    // Stake Management Methods
    // ========================================================================

    /**
     * Adjust stake for a running bot
     * Requirements: 12.1, 12.2, 12.3
     */
    async adjustStake(botId: string, newStake: number): Promise<BotControlResult> {
        try {
            console.log(`🤖 Adjusting stake for bot ${botId} to ${newStake}...`);

            // Check if bot is running
            if (!this.isBotRunning(botId)) {
                return {
                    success: false,
                    reason: 'bot_not_running',
                };
            }

            // Validate new stake
            const validation = await this.validateStake(newStake);
            if (!validation.valid) {
                console.error(`🤖 Invalid stake: ${validation.reason}`);
                return {
                    success: false,
                    reason: validation.reason,
                };
            }

            // Update running bot stake
            const runningBot = this.runningBots.get(botId);
            if (runningBot) {
                const oldStake = runningBot.stake;
                runningBot.stake = newStake;

                // Log to audit
                this.logAudit({
                    type: 'stake_adjusted',
                    botId,
                    strategyId: runningBot.strategyId,
                    oldStake,
                    newStake,
                    timestamp: Date.now(),
                });

                console.log(`✅ Stake adjusted from ${oldStake} to ${newStake}`);
            }

            return {
                success: true,
            };

        } catch (error) {
            console.error(`🤖 Error adjusting stake:`, error);
            return {
                success: false,
                reason: 'exception',
                error: error instanceof Error ? error : new Error(String(error)),
            };
        }
    }

    /**
     * Set stake limits
     * Requirements: 12.3
     */
    setStakeLimits(limits: StakeLimits): void {
        if (limits.minStake < 0) {
            throw new Error('Minimum stake cannot be negative');
        }
        if (limits.maxStake < limits.minStake) {
            throw new Error('Maximum stake must be greater than or equal to minimum stake');
        }

        this.stakeLimits = limits;
        console.log(`🤖 Stake limits set: min=${limits.minStake}, max=${limits.maxStake}`);
    }

    /**
     * Get stake limits
     */
    getStakeLimits(): StakeLimits {
        return { ...this.stakeLimits };
    }

    /**
     * Calculate dynamic stake based on method
     * Requirements: 12.1, 12.4
     */
    async calculateDynamicStake(
        method: StakeAdjustmentMethod,
        value: number,
        baseStake?: number
    ): Promise<number> {
        try {
            let calculatedStake: number;

            switch (method) {
                case StakeAdjustmentMethod.Fixed:
                    // Fixed amount
                    calculatedStake = value;
                    break;

                case StakeAdjustmentMethod.PercentageOfBalance: {
                    // Percentage of account balance
                    const balance = await this.getAccountBalance();
                    calculatedStake = (balance * value) / 100;
                    break;
                }

                case StakeAdjustmentMethod.Multiplier: {
                    // Multiplier of base stake
                    if (!baseStake) {
                        throw new Error('Base stake required for multiplier method');
                    }
                    calculatedStake = baseStake * value;
                    break;
                }

                default:
                    throw new Error(`Unknown stake adjustment method: ${method}`);
            }

            // Enforce limits
            calculatedStake = Math.max(this.stakeLimits.minStake, calculatedStake);
            calculatedStake = Math.min(this.stakeLimits.maxStake, calculatedStake);

            // Round to 2 decimal places
            calculatedStake = Math.round(calculatedStake * 100) / 100;

            console.log(`🤖 Calculated stake: ${calculatedStake} (method: ${method}, value: ${value})`);

            return calculatedStake;

        } catch (error) {
            console.error('🤖 Error calculating dynamic stake:', error);
            throw error;
        }
    }

    /**
     * Validate stake amount
     * Requirements: 12.2, 12.3
     */
    async validateStake(stake: number): Promise<{ valid: boolean; reason?: string }> {
        // Check if stake is a valid number
        if (isNaN(stake) || !isFinite(stake)) {
            return {
                valid: false,
                reason: 'invalid_number',
            };
        }

        // Check minimum stake
        if (stake < this.stakeLimits.minStake) {
            return {
                valid: false,
                reason: `stake_below_minimum (min: ${this.stakeLimits.minStake})`,
            };
        }

        // Check maximum stake
        if (stake > this.stakeLimits.maxStake) {
            return {
                valid: false,
                reason: `stake_above_maximum (max: ${this.stakeLimits.maxStake})`,
            };
        }

        // Check account balance
        const hasBalance = await this.validateAccountBalance(stake);
        if (!hasBalance) {
            return {
                valid: false,
                reason: 'insufficient_balance',
            };
        }

        return {
            valid: true,
        };
    }

    // ========================================================================
    // Private Methods
    // ========================================================================

    /**
     * Validate that a bot exists in the Bot Builder system
     * Requirements: 26.2
     */
    private async validateBotExists(botId: string): Promise<boolean> {
        try {
            // Check if bot exists in Bot Builder
            const bot = await this.getBotConfiguration(botId);
            
            if (!bot) {
                console.warn(`🤖 Bot ${botId} not found in Bot Builder`);
                return false;
            }

            // Validate bot has required configuration
            if (!bot.xml || bot.xml.trim() === '') {
                console.warn(`🤖 Bot ${botId} has invalid or empty configuration`);
                return false;
            }

            console.log(`🤖 Bot ${botId} validated successfully: ${bot.name}`);
            return true;

        } catch (error) {
            console.error(`🤖 Error validating bot ${botId}:`, error);
            return false;
        }
    }

    /**
     * Validate account has sufficient balance
     * Requirements: 28.2, 28.3
     */
    private async validateAccountBalance(stake: number): Promise<boolean> {
        try {
            const validation = await this.accountService.validateBalance(stake);
            
            if (!validation.valid) {
                console.warn(`🤖 Balance validation failed: ${validation.reason}`);
                return false;
            }
            
            return true;
        } catch (error) {
            console.error('🤖 Error validating account balance:', error);
            return false;
        }
    }

    /**
     * Get current account balance
     * Requirements: 28.2
     */
    private async getAccountBalance(): Promise<number> {
        try {
            return await this.accountService.getAccountBalance();
        } catch (error) {
            console.error('🤖 Error getting account balance:', error);
            return 0;
        }
    }

    /**
     * Execute bot start using run panel store
     * Requirements: 26.1, 26.3
     */
    private async executeStartBot(config: BotStartConfig): Promise<boolean> {
        try {
            if (!this.runPanelStore || !this.loadModalStore || !this.rootStore) {
                console.warn('🤖 Bot Builder stores not available, cannot start bot');
                return false;
            }

            // Get bot configuration
            const bot = await this.getBotConfiguration(config.botId);
            if (!bot) {
                console.error(`🤖 Bot ${config.botId} not found`);
                return false;
            }

            console.log(`🤖 Loading bot ${config.botId} (${bot.name}) to workspace...`);

            // Load the bot strategy to the workspace
            await this.loadModalStore.loadStrategyToBuilder(bot);

            // TODO: Set stake amount if different from bot's default
            // This would require accessing the bot's configuration and modifying it
            // For now, we respect the bot's configured stake amount (Requirement 26.3)

            console.log(`🤖 Executing bot start via run panel...`);

            // Start the bot using run panel
            await this.runPanelStore.onRunButtonClick();

            console.log(`🤖 Bot ${config.botId} execution initiated`);
            
            return true;

        } catch (error) {
            console.error('🤖 Error executing bot start:', error);
            return false;
        }
    }

    /**
     * Execute bot stop using run panel store
     * Requirements: 26.1, 26.5
     */
    private async executeStopBot(botId: string): Promise<boolean> {
        try {
            if (!this.runPanelStore) {
                console.warn('🤖 Run panel store not available, cannot stop bot');
                return false;
            }

            console.log(`🤖 Stopping bot ${botId} via run panel...`);

            // Stop the bot using run panel
            // This will allow the current trade to complete before stopping (Requirement 10.2)
            this.runPanelStore.onStopButtonClick();

            console.log(`🤖 Bot ${botId} stop initiated`);
            
            return true;

        } catch (error) {
            console.error('🤖 Error executing bot stop:', error);
            return false;
        }
    }

    /**
     * Wait for cooldown period
     */
    private async waitForCooldown(): Promise<void> {
        const timeSinceLastAction = Date.now() - this.lastActionTimestamp;
        const remainingCooldown = Math.max(0, this.MIN_COOLDOWN_MS - timeSinceLastAction);
        
        if (remainingCooldown > 0) {
            console.log(`🤖 Waiting ${remainingCooldown}ms for cooldown...`);
            await new Promise(resolve => setTimeout(resolve, remainingCooldown));
        }
    }

    /**
     * Process queued actions
     * Requirements: 16.3
     */
    private async processQueue(): Promise<void> {
        // Check if we can process more actions
        if (this.runningBots.size >= this.maxConcurrentBots) {
            return;
        }

        // Get next action from queue
        const action = this.actionQueue.dequeue();
        if (!action) {
            return;
        }

        console.log(`🤖 Processing queued action for bot ${action.botId}`);

        // Execute the action
        const result = await this.startBot(action.config);
        
        if (result.success) {
            console.log(`✅ Queued action executed successfully`);
        } else if (!result.queued) {
            // If it failed and wasn't re-queued, log the failure
            console.error(`❌ Queued action failed: ${result.reason}`);
            this.logAudit({
                type: 'queued_action_failed',
                botId: action.botId,
                strategyId: action.config.strategyId,
                reason: result.reason,
                timestamp: Date.now(),
            });
        }

        // Try to process more actions if space available
        if (this.runningBots.size < this.maxConcurrentBots && !this.actionQueue.isEmpty()) {
            // Use setTimeout to avoid deep recursion
            setTimeout(() => this.processQueue(), 100);
        }
    }

    /**
     * Log to audit log
     */
    private logAudit(entry: any): void {
        if (this.auditLogCallback) {
            this.auditLogCallback(entry);
        }
    }
}

// Export singleton instance
let instance: BotController | null = null;

/**
 * Get singleton instance of BotController
 */
export function getBotController(): BotController {
    if (!instance) {
        instance = new BotController();
    }
    return instance;
}

/**
 * Reset singleton instance (for testing)
 */
export function resetBotController(): void {
    instance = null;
}
