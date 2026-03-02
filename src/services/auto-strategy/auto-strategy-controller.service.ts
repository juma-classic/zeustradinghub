/**
 * Auto Strategy Controller Service
 * 
 * Central orchestrator that manages strategy lifecycle and coordinates all subsystems.
 * Handles tick events, strategy evaluation, bot control, risk management, and audit logging.
 * 
 * Key Features:
 * - Strategy lifecycle management (create, update, delete, activate, deactivate, pause, resume)
 * - Real-time tick processing and strategy evaluation
 * - Connection failure handling with automatic strategy pause
 * - Emergency stop functionality
 * - Strategy validation and warnings
 * - Import/Export capabilities
 * 
 * Requirements: 1.5, 2.1-2.6, 17.1-17.6, 24.1-24.5, 25.1-25.5, 32.1-32.5, 35.1-35.5
 */

import {
    Strategy,
    ConnectionStatus,
    Tick,
    EvaluationContext,
    EvaluationResult,
    BotStats,
    SignalData,
    SignalProvider,
    StrategyPriority,
} from '../../types/auto-strategy.types';

import { MarketDataMonitor, getMarketDataMonitor } from './market-data-monitor.service';
import { StrategyEvaluator, getStrategyEvaluator } from './strategy-evaluator.service';
import { BotController, getBotController } from './bot-controller.service';
import { RiskManager, getRiskManager } from './risk-manager.service';
import { AuditLog, getAuditLog } from './audit-log.service';
import { StrategyStorage, getStrategyStorage, ValidationError } from './strategy-storage.service';
import { alertManager } from './alert-manager.service';
import { getAccountIntegrationService, AccountIntegrationService, AccountSwitchEvent } from './account-integration.service';
import { SignalProviderManager, getSignalProviderManager } from './signal-provider.service';
import { BacktestingService } from './backtesting.service';
import { BacktestingMode } from '../../types/auto-strategy.types';

// ============================================================================
// Types and Interfaces
// ============================================================================

/**
 * Controller status
 */
export enum ControllerStatus {
    Stopped = 'stopped',
    Starting = 'starting',
    Running = 'running',
    Paused = 'paused',
    Error = 'error',
}

/**
 * Strategy performance metrics
 */
export interface StrategyPerformance {
    strategyId: string;
    totalTriggers: number;
    successfulTriggers: number;
    failedTriggers: number;
    totalProfit: number;
    totalLoss: number;
    netProfitLoss: number;
    winRate: number;
    lastTriggeredAt?: number;
}

/**
 * Controller state update
 */
export interface ControllerUpdate {
    status: ControllerStatus;
    strategies: Strategy[];
    runningBots: any[];
    conditionStates: Map<string, any>;
    connectionStatus: ConnectionStatus;
}

/**
 * Strategy warning types
 */
export enum StrategyWarningType {
    NoLossLimit = 'no_loss_limit',
    HighStake = 'high_stake',
    NoTimeRestriction = 'no_time_restriction',
    NoProfitLimit = 'no_profit_limit',
}

/**
 * Strategy warning
 */
export interface StrategyWarning {
    type: StrategyWarningType;
    message: string;
    severity: 'info' | 'warning' | 'critical';
}

// ============================================================================
// Auto Strategy Controller Interface
// ============================================================================

/**
 * Interface for Auto Strategy Controller
 */
export interface IAutoStrategyController {
    // Lifecycle management
    initialize(): Promise<void>;
    start(): Promise<void>;
    stop(): Promise<void>;
    emergencyStop(): Promise<void>;

    // Strategy management
    createStrategy(strategy: Omit<Strategy, 'id' | 'createdAt' | 'updatedAt'>): Promise<string>;
    updateStrategy(id: string, updates: Partial<Strategy>): Promise<void>;
    deleteStrategy(id: string): Promise<void>;
    activateStrategy(id: string): Promise<void>;
    deactivateStrategy(id: string): Promise<void>;
    pauseStrategy(id: string): Promise<void>;
    resumeStrategy(id: string): Promise<void>;

    // Status and monitoring
    getStatus(): ControllerStatus;
    getActiveStrategies(): Strategy[];
    getStrategyPerformance(id: string): StrategyPerformance | null;

    // Validation
    validateStrategy(strategy: Partial<Strategy>): { isValid: boolean; errors: ValidationError[] };
    getStrategyWarnings(strategy: Strategy): StrategyWarning[];

    // Import/Export
    exportStrategy(id: string): string | null;
    importStrategy(json: string): Promise<string>;

    // Backtesting
    getBacktestingService(): BacktestingService;
}

// ============================================================================
// Auto Strategy Controller Implementation
// ============================================================================

/**
 * Auto Strategy Controller Service
 * 
 * Central orchestrator for the Auto Strategy system.
 */
export class AutoStrategyController implements IAutoStrategyController {
    // Subsystems
    private marketDataMonitor: MarketDataMonitor;
    private strategyEvaluator: StrategyEvaluator;
    private botController: BotController;
    private riskManager: RiskManager;
    private auditLog: AuditLog;
    private strategyStorage: StrategyStorage;
    private accountService: AccountIntegrationService;
    private signalProviderManager: SignalProviderManager;
    private backtestingService: BacktestingService;

    // State
    private status: ControllerStatus = ControllerStatus.Stopped;
    private isInitialized: boolean = false;
    private connectionLostAt?: number;
    private readonly CONNECTION_TIMEOUT_MS = 30000; // 30 seconds

    // Performance tracking
    private strategyPerformance: Map<string, StrategyPerformance> = new Map();

    // Event listeners
    private updateListeners: Set<(update: ControllerUpdate) => void> = new Set();

    // Unsubscribe functions
    private unsubscribeFunctions: Array<() => void> = [];

    constructor() {
        // Initialize subsystems
        this.marketDataMonitor = getMarketDataMonitor();
        this.strategyEvaluator = getStrategyEvaluator();
        this.botController = getBotController();
        this.riskManager = getRiskManager();
        this.auditLog = getAuditLog();
        this.strategyStorage = getStrategyStorage();
        this.accountService = getAccountIntegrationService();
        this.signalProviderManager = getSignalProviderManager();
        this.backtestingService = new BacktestingService(this.strategyEvaluator, this.auditLog);

        console.log('🎮 AutoStrategyController created');
    }

    // ========================================================================
    // Lifecycle Management
    // ========================================================================

    /**
     * Initialize the controller and all subsystems
     * Requirements: 2.1
     */
    async initialize(): Promise<void> {
        if (this.isInitialized) {
            console.log('🎮 Controller already initialized');
            return;
        }

        console.log('🎮 Initializing AutoStrategyController...');
        this.status = ControllerStatus.Starting;

        try {
            // Load alert configurations
            alertManager.loadAlertConfigs();
            alertManager.loadAlertHistory();

            // Set up callbacks between subsystems
            this.setupSubsystemCallbacks();

            // Connect to market data
            await this.marketDataMonitor.connect();

            // Subscribe to market data events
            this.subscribeToMarketData();
            
            // Start account switch monitoring
            // Requirements: 28.5
            this.accountService.startAccountSwitchMonitoring(this.handleAccountSwitch.bind(this));
            console.log('🔐 Account switch monitoring enabled');

            this.isInitialized = true;
            console.log('✅ AutoStrategyController initialized successfully');

        } catch (error) {
            console.error('❌ Failed to initialize AutoStrategyController:', error);
            this.status = ControllerStatus.Error;
            throw error;
        }
    }

    /**
     * Start the controller and activate strategies
     * Requirements: 2.1, 29.5
     */
    async start(): Promise<void> {
        if (!this.isInitialized) {
            await this.initialize();
        }

        if (this.status === ControllerStatus.Running) {
            console.log('🎮 Controller already running');
            return;
        }

        console.log('🎮 Starting AutoStrategyController...');
        
        // Check if in demo mode and require confirmation
        // Requirements: 29.5
        const confirmed = await this.accountService.requireDemoModeConfirmation();
        if (!confirmed) {
            console.log('🎮 Demo mode confirmation declined, not starting controller');
            this.auditLog.logError({
                errorMessage: 'AutoStrategyController start cancelled - demo mode confirmation declined',
                context: 'controller_lifecycle',
            });
            return;
        }
        
        this.status = ControllerStatus.Running;

        // Subscribe to symbols for active strategies
        await this.subscribeToActiveStrategySymbols();

        // Log start event
        this.auditLog.logError({
            errorMessage: 'AutoStrategyController started',
            context: 'controller_lifecycle',
        });

        // Notify listeners
        this.notifyUpdateListeners();

        console.log('✅ AutoStrategyController started');
    }

    /**
     * Stop the controller and deactivate all strategies
     * Requirements: 2.1
     */
    async stop(): Promise<void> {
        console.log('🎮 Stopping AutoStrategyController...');

        // Stop all running bots
        await this.botController.stopAllBots('controller_stopped');

        // Unsubscribe from all events
        this.unsubscribeFromEvents();

        // Disconnect from market data
        this.marketDataMonitor.disconnect();
        
        // Stop account switch monitoring
        this.accountService.stopAccountSwitchMonitoring();
        console.log('🔐 Account switch monitoring stopped');

        this.status = ControllerStatus.Stopped;

        // Log stop event
        this.auditLog.logError({
            errorMessage: 'AutoStrategyController stopped',
            context: 'controller_lifecycle',
        });

        // Notify listeners
        this.notifyUpdateListeners();

        console.log('✅ AutoStrategyController stopped');
    }

    /**
     * Emergency stop - immediately halt all activity
     * Requirements: 17.1, 17.2, 17.3, 17.4, 17.5, 17.6
     */
    async emergencyStop(): Promise<void> {
        console.log('🚨 EMERGENCY STOP TRIGGERED');

        try {
            // Stop all running bots immediately
            await this.botController.stopAllBots('emergency_stop');

            // Deactivate all strategies
            const strategies = this.strategyStorage.readAll();
            for (const strategy of strategies) {
                if (strategy.isActive) {
                    await this.deactivateStrategy(strategy.id);
                }
            }

            // Clear bot action queue
            this.botController.clearQueue();

            // Disconnect from market data
            this.marketDataMonitor.disconnect();
            
            // Stop account switch monitoring
            this.accountService.stopAccountSwitchMonitoring();

            // Update status
            this.status = ControllerStatus.Stopped;

            // Log emergency stop
            this.auditLog.logError({
                errorMessage: 'Emergency stop executed',
                context: 'emergency_stop',
            });

            // Notify listeners
            this.notifyUpdateListeners();

            console.log('✅ Emergency stop completed');

        } catch (error) {
            console.error('❌ Error during emergency stop:', error);
            throw error;
        }
    }

    // ========================================================================
    // Strategy Management
    // ========================================================================

    /**
     * Create a new strategy
     * Requirements: 2.1, 2.2, 2.6
     */
    async createStrategy(strategy: Omit<Strategy, 'id' | 'createdAt' | 'updatedAt'>): Promise<string> {
        console.log(`🎮 Creating strategy: ${strategy.name}`);

        try {
            // Validate strategy
            const validation = this.strategyStorage.validate(strategy);
            if (!validation.isValid) {
                throw new Error(`Strategy validation failed: ${validation.errors.map(e => e.message).join(', ')}`);
            }

            // Create strategy
            const created = this.strategyStorage.create(strategy);

            // Initialize performance tracking
            this.strategyPerformance.set(created.id, {
                strategyId: created.id,
                totalTriggers: 0,
                successfulTriggers: 0,
                failedTriggers: 0,
                totalProfit: 0,
                totalLoss: 0,
                netProfitLoss: 0,
                winRate: 0,
            });

            // Notify listeners
            this.notifyUpdateListeners();

            console.log(`✅ Strategy created: ${created.id}`);
            return created.id;

        } catch (error) {
            console.error('❌ Failed to create strategy:', error);
            throw error;
        }
    }

    /**
     * Update an existing strategy
     * Requirements: 2.1
     */
    async updateStrategy(id: string, updates: Partial<Strategy>): Promise<void> {
        console.log(`🎮 Updating strategy: ${id}`);

        try {
            const updated = this.strategyStorage.update(id, updates);
            if (!updated) {
                throw new Error(`Strategy not found: ${id}`);
            }

            // If strategy was activated, subscribe to its symbol
            if (updates.isActive && !updates.isPaused) {
                await this.marketDataMonitor.subscribeToSymbol(updated.symbol);
            }

            // Notify listeners
            this.notifyUpdateListeners();

            console.log(`✅ Strategy updated: ${id}`);

        } catch (error) {
            console.error('❌ Failed to update strategy:', error);
            throw error;
        }
    }

    /**
     * Delete a strategy
     * Requirements: 2.4
     */
    async deleteStrategy(id: string): Promise<void> {
        console.log(`🎮 Deleting strategy: ${id}`);

        try {
            const strategy = this.strategyStorage.read(id);
            if (!strategy) {
                throw new Error(`Strategy not found: ${id}`);
            }

            // Deactivate if active
            if (strategy.isActive) {
                await this.deactivateStrategy(id);
            }

            // Delete from storage
            const deleted = this.strategyStorage.delete(id);
            if (!deleted) {
                throw new Error(`Failed to delete strategy: ${id}`);
            }

            // Remove performance tracking
            this.strategyPerformance.delete(id);

            // Notify listeners
            this.notifyUpdateListeners();

            console.log(`✅ Strategy deleted: ${id}`);

        } catch (error) {
            console.error('❌ Failed to delete strategy:', error);
            throw error;
        }
    }

    /**
     * Activate a strategy
     * Requirements: 2.1, 24.1, 24.2, 24.3, 24.4, 24.5
     */
    async activateStrategy(id: string): Promise<void> {
        console.log(`🎮 Activating strategy: ${id}`);

        try {
            const strategy = this.strategyStorage.read(id);
            if (!strategy) {
                throw new Error(`Strategy not found: ${id}`);
            }

            // Validate strategy before activation
            const validation = this.strategyStorage.validate(strategy);
            if (!validation.isValid) {
                throw new Error(`Cannot activate invalid strategy: ${validation.errors.map(e => e.message).join(', ')}`);
            }

            // Update strategy
            await this.updateStrategy(id, { isActive: true, isPaused: false });

            // Subscribe to symbol
            await this.marketDataMonitor.subscribeToSymbol(strategy.symbol);

            // Log activation
            this.auditLog.logError({
                errorMessage: `Strategy activated: ${strategy.name}`,
                context: 'strategy_management',
                strategyId: id,
            });

            console.log(`✅ Strategy activated: ${id}`);

        } catch (error) {
            console.error('❌ Failed to activate strategy:', error);
            throw error;
        }
    }

    /**
     * Deactivate a strategy
     * Requirements: 2.1
     */
    async deactivateStrategy(id: string): Promise<void> {
        console.log(`🎮 Deactivating strategy: ${id}`);

        try {
            const strategy = this.strategyStorage.read(id);
            if (!strategy) {
                throw new Error(`Strategy not found: ${id}`);
            }

            // Stop any bots started by this strategy
            const runningBots = this.botController.getRunningBots();
            for (const bot of runningBots) {
                if (bot.strategyId === id) {
                    await this.botController.stopBot(bot.botId, 'strategy_deactivated');
                }
            }

            // Update strategy
            await this.updateStrategy(id, { isActive: false });

            // Log deactivation
            this.auditLog.logError({
                errorMessage: `Strategy deactivated: ${strategy.name}`,
                context: 'strategy_management',
                strategyId: id,
            });

            console.log(`✅ Strategy deactivated: ${id}`);

        } catch (error) {
            console.error('❌ Failed to deactivate strategy:', error);
            throw error;
        }
    }

    /**
     * Pause a strategy
     * Requirements: 25.1, 25.2, 25.3, 25.4, 25.5
     */
    async pauseStrategy(id: string): Promise<void> {
        console.log(`🎮 Pausing strategy: ${id}`);

        try {
            const strategy = this.strategyStorage.read(id);
            if (!strategy) {
                throw new Error(`Strategy not found: ${id}`);
            }

            // Update strategy
            await this.updateStrategy(id, { isPaused: true });

            // Note: We don't stop running bots when pausing (per requirement 25.2)

            // Log pause
            this.auditLog.logError({
                errorMessage: `Strategy paused: ${strategy.name}`,
                context: 'strategy_management',
                strategyId: id,
            });

            console.log(`✅ Strategy paused: ${id}`);

        } catch (error) {
            console.error('❌ Failed to pause strategy:', error);
            throw error;
        }
    }

    /**
     * Resume a paused strategy
     * Requirements: 25.3, 25.4
     */
    async resumeStrategy(id: string): Promise<void> {
        console.log(`🎮 Resuming strategy: ${id}`);

        try {
            const strategy = this.strategyStorage.read(id);
            if (!strategy) {
                throw new Error(`Strategy not found: ${id}`);
            }

            // Update strategy
            await this.updateStrategy(id, { isPaused: false });

            // Log resume
            this.auditLog.logError({
                errorMessage: `Strategy resumed: ${strategy.name}`,
                context: 'strategy_management',
                strategyId: id,
            });

            console.log(`✅ Strategy resumed: ${id}`);

        } catch (error) {
            console.error('❌ Failed to resume strategy:', error);
            throw error;
        }
    }

    // ========================================================================
    // Status and Monitoring
    // ========================================================================

    /**
     * Get controller status
     */
    getStatus(): ControllerStatus {
        return this.status;
    }

    /**
     * Get all active strategies
     */
    getActiveStrategies(): Strategy[] {
        return this.strategyStorage.readAll().filter(s => s.isActive && !s.isPaused);
    }

    /**
     * Get performance metrics for a strategy
     * Requirements: 21.1, 21.2, 21.3
     */
    getStrategyPerformance(id: string): StrategyPerformance | null {
        return this.strategyPerformance.get(id) || null;
    }

    // ========================================================================
    // Validation
    // ========================================================================

    /**
     * Validate a strategy
     * Requirements: 24.1, 24.2, 24.3, 24.4
     */
    validateStrategy(strategy: Partial<Strategy>): { isValid: boolean; errors: ValidationError[] } {
        return this.strategyStorage.validate(strategy);
    }

    /**
     * Get warnings for a strategy
     * Requirements: 32.1, 32.2, 32.3, 32.4, 32.5
     */
    getStrategyWarnings(strategy: Strategy): StrategyWarning[] {
        const warnings: StrategyWarning[] = [];

        // Check for no loss limit
        if (!strategy.lossLimit) {
            warnings.push({
                type: StrategyWarningType.NoLossLimit,
                message: 'No loss limit configured. Strategy could result in unlimited losses.',
                severity: 'critical',
            });
        }

        // Check for high stake (>5% of balance - placeholder, would need actual balance)
        // This is a simplified check - in production would check against actual account balance
        if (strategy.action.stake && strategy.action.stake > 50) {
            warnings.push({
                type: StrategyWarningType.HighStake,
                message: 'Stake amount may be high relative to account balance.',
                severity: 'warning',
            });
        }

        // Check for no time restrictions
        const hasTimeRestriction = strategy.conditions.some(c => c.type === 'time_range');
        if (!hasTimeRestriction) {
            warnings.push({
                type: StrategyWarningType.NoTimeRestriction,
                message: 'No time restrictions configured. Strategy will operate 24/7.',
                severity: 'info',
            });
        }

        // Check for no profit limit
        if (!strategy.profitLimit) {
            warnings.push({
                type: StrategyWarningType.NoProfitLimit,
                message: 'No profit limit configured. Consider setting a profit target.',
                severity: 'info',
            });
        }

        return warnings;
    }

    // ========================================================================
    // Import/Export
    // ========================================================================

    /**
     * Export a strategy as JSON
     * Requirements: 36.1, 36.4
     */
    exportStrategy(id: string): string | null {
        return this.strategyStorage.exportStrategy(id);
    }

    /**
     * Import a strategy from JSON
     * Requirements: 36.2, 36.3, 36.5
     */
    async importStrategy(json: string): Promise<string> {
        try {
            const strategy = this.strategyStorage.importStrategy(json);
            
            // Initialize performance tracking
            this.strategyPerformance.set(strategy.id, {
                strategyId: strategy.id,
                totalTriggers: 0,
                successfulTriggers: 0,
                failedTriggers: 0,
                totalProfit: 0,
                totalLoss: 0,
                netProfitLoss: 0,
                winRate: 0,
            });

            // Notify listeners
            this.notifyUpdateListeners();

            return strategy.id;

        } catch (error) {
            console.error('❌ Failed to import strategy:', error);
            throw error;
        }
    }

    // ========================================================================
    // Event Handling
    // ========================================================================

    /**
     * Subscribe to update events
     */
    onUpdate(callback: (update: ControllerUpdate) => void): () => void {
        this.updateListeners.add(callback);
        
        // Return unsubscribe function
        return () => {
            this.updateListeners.delete(callback);
        };
    }

    // ========================================================================
    // Private Methods - Subsystem Setup
    // ========================================================================

    /**
     * Set up callbacks between subsystems
     */
    private setupSubsystemCallbacks(): void {
        // Set up audit log callback for bot controller
        this.botController.setAuditLogCallback((entry) => {
            // Map bot controller events to audit log
            if (entry.type === 'bot_started') {
                this.auditLog.logBotStarted({
                    botId: entry.botId,
                    botName: entry.botId, // Would get actual name from bot system
                    strategyId: entry.strategyId,
                    strategyName: this.getStrategyName(entry.strategyId),
                    stake: entry.stake,
                });
            } else if (entry.type === 'bot_stopped') {
                this.auditLog.logBotStopped({
                    botId: entry.botId,
                    botName: entry.botId,
                    reason: entry.reason,
                    strategyId: entry.strategyId,
                });
            } else if (entry.type === 'bot_switched') {
                this.auditLog.logBotSwitched({
                    fromBotId: entry.fromBotId,
                    toBotId: entry.toBotId,
                    strategyId: entry.strategyId,
                    strategyName: this.getStrategyName(entry.strategyId),
                });
            }
        });

        // Set up risk manager callbacks
        this.riskManager.setAuditLogCallback((entry) => {
            this.auditLog.logRiskIntervention({
                interventionType: entry.interventionType,
                currentValue: entry.currentValue,
                limit: entry.limit,
                strategyId: entry.strategyId,
                botsStopped: entry.botsStopped,
            });
        });

        this.riskManager.setStopAllBotsCallback(async (reason: string) => {
            await this.botController.stopAllBots(reason);
        });

        this.riskManager.setDeactivateStrategyCallback(async (strategyId: string, reason: string) => {
            await this.deactivateStrategy(strategyId);
        });
    }

    /**
     * Subscribe to market data events
     */
    private subscribeToMarketData(): void {
        // Subscribe to tick events
        const unsubscribeTick = this.marketDataMonitor.onTick((tick) => {
            this.handleTick(tick);
        });
        this.unsubscribeFunctions.push(unsubscribeTick);

        // Subscribe to connection status changes
        const unsubscribeConnection = this.marketDataMonitor.onConnectionChange((status) => {
            this.handleConnectionChange(status);
        });
        this.unsubscribeFunctions.push(unsubscribeConnection);

        // Subscribe to errors
        const unsubscribeError = this.marketDataMonitor.onError((error) => {
            this.handleError(error);
        });
        this.unsubscribeFunctions.push(unsubscribeError);
    }

    /**
     * Unsubscribe from all events
     */
    private unsubscribeFromEvents(): void {
        this.unsubscribeFunctions.forEach(unsubscribe => unsubscribe());
        this.unsubscribeFunctions = [];
    }

    /**
     * Subscribe to symbols for active strategies
     */
    private async subscribeToActiveStrategySymbols(): Promise<void> {
        const activeStrategies = this.getActiveStrategies();
        const symbols = new Set(activeStrategies.map(s => s.symbol));

        for (const symbol of symbols) {
            try {
                await this.marketDataMonitor.subscribeToSymbol(symbol);
            } catch (error) {
                console.error(`Failed to subscribe to ${symbol}:`, error);
            }
        }
    }

    // ========================================================================
    // Private Methods - Event Handlers
    // ========================================================================

    /**
     * Handle incoming tick data
     * Requirements: 8.1, 8.2, 37.2, 37.4
     */
    private async handleTick(tick: Tick): Promise<void> {
        // Skip tick processing if in backtesting mode
        if (this.backtestingService.getMode() === BacktestingMode.Backtesting) {
            return;
        }

        // Only process ticks if controller is running
        if (this.status !== ControllerStatus.Running) {
            return;
        }

        try {
            // Get active strategies for this symbol
            const strategies = this.getActiveStrategies().filter(s => s.symbol === tick.symbol);
            
            if (strategies.length === 0) {
                return;
            }

            // Get tick buffer for evaluation
            const tickBuffer = this.marketDataMonitor.getTickBuffer(tick.symbol, 1000);

            // Fetch signal data for strategies that use signal conditions
            let signalData: Map<SignalProvider, SignalData> | undefined;
            const hasSignalConditions = strategies.some(s => 
                s.conditions.some(c => c.type === 'signal')
            );
            
            if (hasSignalConditions) {
                try {
                    signalData = await this.signalProviderManager.getSignals(tick.symbol);
                } catch (error) {
                    console.warn('Failed to fetch signal data:', error);
                    // Continue without signal data - signal conditions will be marked as not evaluable
                }
            }

            // Build evaluation context
            const context: EvaluationContext = {
                currentTick: tick,
                tickBuffer,
                timestamp: Date.now(),
                signalData,
                // TODO: Add bot stats when available
            };

            // Evaluate all strategies
            const results = this.strategyEvaluator.evaluateAllStrategies(strategies, context);

            // Process evaluation results
            for (const [strategyId, result] of results) {
                await this.processEvaluationResult(strategyId, result);
            }

            // Check risk limits after processing
            await this.riskManager.checkLimits();

        } catch (error) {
            console.error('Error handling tick:', error);
            this.auditLog.logError({
                errorMessage: `Error handling tick: ${error instanceof Error ? error.message : String(error)}`,
                context: 'tick_processing',
                stackTrace: error instanceof Error ? error.stack : undefined,
            });
        }
    }

    /**
     * Handle connection status changes
     * Requirements: 1.5, 35.1, 35.2, 35.3, 35.4, 35.5
     */
    private handleConnectionChange(status: ConnectionStatus): void {
        console.log(`🎮 Connection status changed: ${status}`);

        if (status === ConnectionStatus.Disconnected || status === ConnectionStatus.Error) {
            // Mark when connection was lost
            if (!this.connectionLostAt) {
                this.connectionLostAt = Date.now();
            }

            // Check if connection has been lost for more than 30 seconds
            const timeSinceLost = Date.now() - this.connectionLostAt;
            if (timeSinceLost > this.CONNECTION_TIMEOUT_MS) {
                console.warn('⚠️ Connection lost for >30 seconds, pausing strategies');
                this.pauseAllStrategies('connection_lost');
            }

        } else if (status === ConnectionStatus.Connected) {
            // Connection restored
            if (this.connectionLostAt) {
                console.log('✅ Connection restored');
                this.connectionLostAt = undefined;
                
                // Resume strategies that were paused due to connection loss
                // (User would need to manually resume them per requirement 35.2)
            }
        }

        // Notify listeners
        this.notifyUpdateListeners();
    }

    /**
     * Handle errors from market data monitor
     */
    private handleError(error: Error): void {
        console.error('🎮 Market data error:', error);
        
        this.auditLog.logError({
            errorMessage: error.message,
            stackTrace: error.stack,
            context: 'market_data_monitor',
        });
    }

    /**
     * Handle account switch events
     * Requirements: 28.5
     */
    private async handleAccountSwitch(event: AccountSwitchEvent): Promise<void> {
        console.log(`🔐 Account switched: ${event.previousLoginId} → ${event.currentLoginId}`);
        console.log(`🔐 Account type: ${event.previousAccountType} → ${event.currentAccountType}`);
        
        // Log the account switch
        this.auditLog.logError({
            errorMessage: `Account switched from ${event.previousLoginId} to ${event.currentLoginId}`,
            context: 'account_switch',
        });
        
        // Stop all running bots
        console.log('🔐 Stopping all bots due to account switch...');
        await this.botController.stopAllBots('account_switch');
        
        // Pause all active strategies
        console.log('🔐 Pausing all strategies due to account switch...');
        await this.pauseAllStrategies('account_switch');
        
        // Notify user
        const message = `Account switched to ${event.currentLoginId} (${event.currentAccountType}). All strategies have been paused. Please review and reactivate strategies as needed.`;
        console.warn(`⚠️ ${message}`);
        
        // Show browser notification if supported
        if ('Notification' in window && Notification.permission === 'granted') {
            new Notification('Auto Strategy Controller - Account Switch', {
                body: message,
                icon: '/favicon.ico',
            });
        }
        
        // Notify listeners
        this.notifyUpdateListeners();
    }

    /**
     * Process strategy evaluation result
     * Requirements: 8.2, 8.6
     */
    private async processEvaluationResult(strategyId: string, result: EvaluationResult): Promise<void> {
        const strategy = this.strategyStorage.read(strategyId);
        if (!strategy) {
            return;
        }

        // Update performance tracking
        const performance = this.strategyPerformance.get(strategyId);
        if (performance) {
            performance.totalTriggers++;
        }

        // If strategy triggered, execute action
        if (result.triggered) {
            console.log(`🎯 Strategy triggered: ${strategy.name}`);

            try {
                // Execute bot action
                const actionResult = await this.executeBotAction(strategy);

                // Update performance
                if (performance) {
                    if (actionResult.success) {
                        performance.successfulTriggers++;
                    } else {
                        performance.failedTriggers++;
                    }
                }

                // Update last triggered timestamp
                await this.updateStrategy(strategyId, {
                    lastTriggeredAt: Date.now(),
                });

                // Log strategy trigger
                this.auditLog.logStrategyTrigger({
                    strategyId: strategy.id,
                    strategyName: strategy.name,
                    conditionsMet: result.conditionResults?.map((r, i) => 
                        `Condition ${i + 1}: ${r.value ? 'true' : 'false'}`
                    ) || [],
                    action: `${strategy.action.type} - ${strategy.action.botId}`,
                    botId: strategy.action.botId,
                });

                // Trigger alert notification
                await alertManager.triggerAlert(
                    strategy,
                    strategy.action.type,
                    strategy.action.botId,
                    actionResult.success 
                        ? undefined 
                        : `Action failed: ${actionResult.reason}`
                );

            } catch (error) {
                console.error(`Failed to execute action for strategy ${strategyId}:`, error);
                
                if (performance) {
                    performance.failedTriggers++;
                }

                this.auditLog.logError({
                    errorMessage: `Failed to execute strategy action: ${error instanceof Error ? error.message : String(error)}`,
                    context: 'strategy_execution',
                    strategyId,
                    stackTrace: error instanceof Error ? error.stack : undefined,
                });
            }
        }
    }

    /**
     * Execute bot action for a strategy
     * Requirements: 9.1, 10.1, 11.1
     */
    private async executeBotAction(strategy: Strategy): Promise<{ success: boolean; reason?: string }> {
        const { action } = strategy;

        switch (action.type) {
            case 'start_bot': {
                const result = await this.botController.startBot({
                    botId: action.botId,
                    strategyId: strategy.id,
                    stake: action.stake || 1,
                    priority: this.getPriorityValue(strategy.priority),
                });
                return result;
            }

            case 'stop_bot': {
                const result = await this.botController.stopBot(action.botId, 'strategy_triggered');
                return result;
            }

            case 'switch_bot': {
                if (!action.targetBotId) {
                    return { success: false, reason: 'No target bot specified for switch action' };
                }
                const result = await this.botController.switchBot(action.botId, {
                    botId: action.targetBotId,
                    strategyId: strategy.id,
                    stake: action.stake || 1,
                    priority: this.getPriorityValue(strategy.priority),
                });
                return result;
            }

            default:
                return { success: false, reason: `Unknown action type: ${action.type}` };
        }
    }

    /**
     * Pause all active strategies
     */
    private async pauseAllStrategies(reason: string): Promise<void> {
        const activeStrategies = this.getActiveStrategies();
        
        for (const strategy of activeStrategies) {
            try {
                await this.pauseStrategy(strategy.id);
            } catch (error) {
                console.error(`Failed to pause strategy ${strategy.id}:`, error);
            }
        }

        this.auditLog.logError({
            errorMessage: `All strategies paused: ${reason}`,
            context: 'connection_management',
        });
    }

    /**
     * Notify update listeners
     */
    private notifyUpdateListeners(): void {
        const update: ControllerUpdate = {
            status: this.status,
            strategies: this.strategyStorage.readAll(),
            runningBots: this.botController.getRunningBots(),
            conditionStates: new Map(), // TODO: Implement condition state tracking
            connectionStatus: this.marketDataMonitor.getConnectionStatus(),
        };

        this.updateListeners.forEach(listener => {
            try {
                listener(update);
            } catch (error) {
                console.error('Error in update listener:', error);
            }
        });
    }

    // ========================================================================
    // Helper Methods
    // ========================================================================

    /**
     * Get strategy name by ID
     */
    private getStrategyName(strategyId: string): string {
        const strategy = this.strategyStorage.read(strategyId);
        return strategy ? strategy.name : strategyId;
    }

    /**
     * Convert priority enum to numeric value
     */
    private getPriorityValue(priority: StrategyPriority): number {
        switch (priority) {
            case StrategyPriority.High:
                return 3;
            case StrategyPriority.Medium:
                return 2;
            case StrategyPriority.Low:
                return 1;
            default:
                return 2;
        }
    }

    // ========================================================================
    // Backtesting
    // ========================================================================

    /**
     * Get the backtesting service instance
     * Requirements: 37.1, 37.2, 37.3, 37.4, 37.5
     */
    getBacktestingService(): BacktestingService {
        return this.backtestingService;
    }
}

// ============================================================================
// Singleton Instance
// ============================================================================

let controllerInstance: AutoStrategyController | null = null;

/**
 * Get singleton instance of AutoStrategyController
 */
export function getAutoStrategyController(): AutoStrategyController {
    if (!controllerInstance) {
        controllerInstance = new AutoStrategyController();
    }
    return controllerInstance;
}

/**
 * Reset singleton instance (for testing)
 */
export function resetAutoStrategyController(): void {
    if (controllerInstance) {
        controllerInstance.stop().catch(err => {
            console.error('Error stopping controller during reset:', err);
        });
        controllerInstance = null;
    }
}
