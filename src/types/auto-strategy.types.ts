/**
 * Type definitions for Auto Strategy Controller
 */

// ============================================================================
// Market Data Types
// ============================================================================

/**
 * Tick data from Deriv WebSocket API
 */
export interface Tick {
    /** Unix timestamp in seconds */
    epoch: number;
    /** Current price quote */
    quote: number;
    /** Trading symbol (e.g., "R_100", "frxEURUSD") */
    symbol: string;
    /** Ask price */
    ask: number;
    /** Bid price */
    bid: number;
    /** Unique tick identifier */
    id: string;
    /** Number of decimal places for the symbol */
    pip_size: number;
}

/**
 * WebSocket connection status
 */
export enum ConnectionStatus {
    Connected = 'connected',
    Connecting = 'connecting',
    Disconnected = 'disconnected',
    Reconnecting = 'reconnecting',
    Error = 'error',
}

/**
 * Tick subscription information
 */
export interface TickSubscription {
    /** Trading symbol */
    symbol: string;
    /** Subscription ID from Deriv API */
    subscriptionId: string;
    /** Timestamp when subscription was created */
    subscribedAt: number;
}

// ============================================================================
// Circular Buffer Implementation
// ============================================================================

/**
 * Circular buffer for storing fixed number of items with O(1) operations
 * Automatically overwrites oldest items when capacity is reached
 */
export class CircularBuffer<T> {
    private buffer: T[];
    private capacity: number;
    private head: number = 0;
    private tail: number = 0;
    private size: number = 0;

    constructor(capacity: number) {
        if (capacity <= 0) {
            throw new Error('Capacity must be greater than 0');
        }
        this.capacity = capacity;
        this.buffer = new Array(capacity);
    }

    /**
     * Add item to buffer (overwrites oldest if full)
     */
    push(item: T): void {
        this.buffer[this.tail] = item;
        this.tail = (this.tail + 1) % this.capacity;

        if (this.size < this.capacity) {
            this.size++;
        } else {
            // Buffer is full, move head forward
            this.head = (this.head + 1) % this.capacity;
        }
    }

    /**
     * Get the most recent N items (or all if N > size)
     */
    getLast(count: number): T[] {
        if (count <= 0) return [];
        if (count >= this.size) return this.toArray();

        const result: T[] = [];
        let index = (this.tail - count + this.capacity) % this.capacity;

        for (let i = 0; i < count; i++) {
            result.push(this.buffer[index]);
            index = (index + 1) % this.capacity;
        }

        return result;
    }

    /**
     * Get all items in chronological order
     */
    toArray(): T[] {
        if (this.size === 0) return [];

        const result: T[] = [];
        let index = this.head;

        for (let i = 0; i < this.size; i++) {
            result.push(this.buffer[index]);
            index = (index + 1) % this.capacity;
        }

        return result;
    }

    /**
     * Get the most recent item
     */
    getLatest(): T | null {
        if (this.size === 0) return null;
        const latestIndex = (this.tail - 1 + this.capacity) % this.capacity;
        return this.buffer[latestIndex];
    }

    /**
     * Get current number of items in buffer
     */
    getSize(): number {
        return this.size;
    }

    /**
     * Get buffer capacity
     */
    getCapacity(): number {
        return this.capacity;
    }

    /**
     * Check if buffer is empty
     */
    isEmpty(): boolean {
        return this.size === 0;
    }

    /**
     * Check if buffer is full
     */
    isFull(): boolean {
        return this.size === this.capacity;
    }

    /**
     * Clear all items from buffer
     */
    clear(): void {
        this.head = 0;
        this.tail = 0;
        this.size = 0;
        this.buffer = new Array(this.capacity);
    }
}

// ============================================================================
// Event Emitter Types
// ============================================================================

/**
 * Callback for tick events
 */
export type TickCallback = (tick: Tick) => void;

/**
 * Callback for connection status changes
 */
export type ConnectionStatusCallback = (status: ConnectionStatus) => void;

/**
 * Callback for errors
 */
export type ErrorCallback = (error: Error) => void;

// ============================================================================
// Strategy and Condition Types
// ============================================================================

/**
 * Comparison operators for condition evaluation
 */
export enum ComparisonOperator {
    LessThan = '<',
    GreaterThan = '>',
    Equal = '=',
    LessThanOrEqual = '<=',
    GreaterThanOrEqual = '>=',
    NotEqual = '!=',
}

/**
 * Logic operators for combining multiple conditions
 */
export enum LogicOperator {
    AND = 'AND',
    OR = 'OR',
}

/**
 * Condition types
 */
export enum ConditionType {
    DigitFrequency = 'digit_frequency',
    Volatility = 'volatility',
    TimeRange = 'time_range',
    Performance = 'performance',
    Signal = 'signal',
}

/**
 * Digit frequency condition configuration
 */
export interface DigitFrequencyCondition {
    type: ConditionType.DigitFrequency;
    /** Symbol to evaluate (optional - uses strategy symbol if not specified) */
    symbol?: string;
    /** Digits to count (e.g., [0, 1, 2, 3] for digits 0-3) */
    digits: number[];
    /** Number of ticks to analyze (10-1000) */
    tickCount: number;
    /** Comparison operator */
    operator: ComparisonOperator;
    /** Threshold value to compare against */
    threshold: number;
    /** Cross-symbol comparison (optional) */
    crossSymbol?: {
        /** Symbol to compare against */
        compareSymbol: string;
        /** Comparison operator for cross-symbol */
        operator: ComparisonOperator;
    };
}

/**
 * Volatility condition configuration
 */
export interface VolatilityCondition {
    type: ConditionType.Volatility;
    /** Symbol to evaluate (optional - uses strategy symbol if not specified) */
    symbol?: string;
    /** Number of ticks to analyze (10-500) */
    tickCount: number;
    /** Comparison operator */
    operator: ComparisonOperator;
    /** Threshold value to compare against */
    threshold: number;
    /** Cross-symbol comparison (optional) */
    crossSymbol?: {
        /** Symbol to compare against */
        compareSymbol: string;
        /** Comparison operator for cross-symbol */
        operator: ComparisonOperator;
    };
}

/**
 * Time range for time-based conditions
 */
export interface TimeRange {
    /** Start time in HH:MM format (24-hour) */
    startTime: string;
    /** End time in HH:MM format (24-hour) */
    endTime: string;
    /** Days of week (0=Sunday, 6=Saturday). Empty array means all days */
    daysOfWeek: number[];
}

/**
 * Time-based condition configuration
 */
export interface TimeRangeCondition {
    type: ConditionType.TimeRange;
    /** Time ranges (OR logic between ranges) */
    timeRanges: TimeRange[];
    /** Timezone (IANA timezone string, e.g., "America/New_York") */
    timezone: string;
}

/**
 * Performance metric types
 */
export enum PerformanceMetric {
    ConsecutiveWins = 'consecutive_wins',
    ConsecutiveLosses = 'consecutive_losses',
    WinRate = 'win_rate',
    TotalProfit = 'total_profit',
    TotalLoss = 'total_loss',
}

/**
 * Performance condition configuration
 */
export interface PerformanceCondition {
    type: ConditionType.Performance;
    /** Bot ID to track performance for */
    botId: string;
    /** Performance metric to evaluate */
    metric: PerformanceMetric;
    /** Comparison operator */
    operator: ComparisonOperator;
    /** Threshold value to compare against */
    threshold: number;
}

/**
 * Signal provider types
 */
export enum SignalProvider {
    ZeusAI = 'zeus_ai',
    CFX = 'cfx',
}

/**
 * Signal criteria types
 */
export enum SignalCriteria {
    Direction = 'direction',
    Strength = 'strength',
    Confidence = 'confidence',
}

/**
 * Signal direction values
 */
export enum SignalDirection {
    Up = 'up',
    Down = 'down',
    Neutral = 'neutral',
}

/**
 * Signal-based condition configuration
 */
export interface SignalCondition {
    type: ConditionType.Signal;
    /** Signal provider */
    provider: SignalProvider;
    /** Signal criteria to evaluate */
    criteria: SignalCriteria;
    /** Expected value or comparison threshold */
    value: string | number;
    /** Comparison operator (for strength/confidence) */
    operator?: ComparisonOperator;
}

/**
 * Union type for all condition types
 */
export type Condition =
    | DigitFrequencyCondition
    | VolatilityCondition
    | TimeRangeCondition
    | PerformanceCondition
    | SignalCondition;

/**
 * Condition evaluation result
 */
export interface ConditionResult {
    /** Whether the condition evaluated to true */
    value: boolean;
    /** Evaluation status */
    status: 'evaluated' | 'not_evaluable' | 'error';
    /** Error message if status is 'error' */
    error?: string;
    /** Additional metadata about the evaluation */
    metadata?: {
        /** Actual value that was evaluated */
        actualValue?: any;
        /** Expected value or threshold */
        expectedValue?: any;
        /** Reason for not_evaluable status */
        reason?: string;
    };
}

/**
 * Strategy evaluation result
 */
export interface EvaluationResult {
    /** Whether the strategy should trigger */
    triggered: boolean;
    /** Reason for not triggering */
    reason?: string;
    /** Individual condition results */
    conditionResults?: ConditionResult[];
    /** Timestamp of evaluation */
    timestamp: number;
}

/**
 * Bot statistics for performance evaluation
 */
export interface BotStats {
    /** Bot ID */
    botId: string;
    /** Number of wins */
    winCount: number;
    /** Number of losses */
    lossCount: number;
    /** Current win streak */
    winStreak: number;
    /** Current loss streak */
    lossStreak: number;
    /** Total profit */
    totalProfit: number;
    /** Total loss */
    totalLoss: number;
    /** Win rate percentage (0-100) */
    winRate: number;
    /** Total number of trades */
    totalTrades: number;
}

/**
 * Signal data from external providers
 */
export interface SignalData {
    /** Signal provider */
    provider: SignalProvider;
    /** Signal direction */
    direction: SignalDirection;
    /** Signal strength (0-100) */
    strength: number;
    /** Signal confidence (0-100) */
    confidence: number;
    /** Timestamp when signal was generated */
    timestamp: number;
    /** Whether signal is stale (>60 seconds old) */
    isStale: boolean;
}

/**
 * Evaluation context containing all data needed for evaluation
 */
export interface EvaluationContext {
    /** Current tick data */
    currentTick: Tick;
    /** Tick buffer for the symbol */
    tickBuffer: Tick[];
    /** Tick buffers for all symbols (multi-symbol support) */
    tickBuffers?: Map<string, Tick[]>;
    /** Symbol being evaluated */
    symbol: string;
    /** Bot statistics (if available) */
    botStats?: Map<string, BotStats>;
    /** Signal data (if available) */
    signalData?: Map<SignalProvider, SignalData>;
    /** Current timestamp */
    timestamp: number;
}

/**
 * Strategy action types
 */
export enum ActionType {
    StartBot = 'start_bot',
    StopBot = 'stop_bot',
    SwitchBot = 'switch_bot',
}

/**
 * Strategy action configuration
 */
export interface StrategyAction {
    /** Action type */
    type: ActionType;
    /** Bot ID to start/stop */
    botId: string;
    /** Target bot ID (for switch action) */
    targetBotId?: string;
    /** Stake amount */
    stake?: number;
}

/**
 * Strategy priority levels
 */
export enum StrategyPriority {
    High = 'high',
    Medium = 'medium',
    Low = 'low',
}

/**
 * Strategy configuration
 */
export interface Strategy {
    /** Unique strategy ID */
    id: string;
    /** Strategy name */
    name: string;
    /** Strategy description */
    description?: string;
    /** Trading symbol (deprecated - use symbols array) */
    symbol: string;
    /** Trading symbols (multi-symbol support) */
    symbols?: string[];
    /** Symbol that triggered the last action (for multi-symbol strategies) */
    triggeringSymbol?: string;
    /** Conditions to evaluate */
    conditions: Condition[];
    /** Logic operator for combining conditions */
    logicOperator: LogicOperator;
    /** Action to execute when conditions are met */
    action: StrategyAction;
    /** Strategy priority */
    priority: StrategyPriority;
    /** Cooldown period in seconds */
    cooldownPeriod: number;
    /** Last trigger timestamp */
    lastTriggeredAt?: number;
    /** Whether strategy is active */
    isActive: boolean;
    /** Whether strategy is paused */
    isPaused: boolean;
    /** Profit limit for this strategy */
    profitLimit?: number;
    /** Loss limit for this strategy */
    lossLimit?: number;
    /** Created timestamp */
    createdAt: number;
    /** Updated timestamp */
    updatedAt: number;
}

// ============================================================================
// Bot Controller Types
// ============================================================================

/**
 * Stake adjustment method types
 */
export enum StakeAdjustmentMethod {
    Fixed = 'fixed',
    PercentageOfBalance = 'percentage_of_balance',
    Multiplier = 'multiplier',
}

/**
 * Stake limits configuration
 */
export interface StakeLimits {
    /** Minimum stake amount */
    minStake: number;
    /** Maximum stake amount */
    maxStake: number;
}

/**
 * Bot start configuration
 */
export interface BotStartConfig {
    /** Bot ID to start */
    botId: string;
    /** Strategy ID that triggered the start */
    strategyId: string;
    /** Stake amount */
    stake: number;
    /** Priority level for queue */
    priority: number;
    /** Symbol that triggered the action (for multi-symbol strategies) */
    symbol?: string;
}

/**
 * Bot control result
 */
export interface BotControlResult {
    /** Whether the operation was successful */
    success: boolean;
    /** Reason for failure */
    reason?: string;
    /** Whether the action was queued */
    queued?: boolean;
    /** Error details */
    error?: Error;
}

/**
 * Running bot information
 */
export interface RunningBot {
    /** Bot ID */
    botId: string;
    /** Strategy ID that started the bot */
    strategyId: string;
    /** Timestamp when bot was started */
    startedAt: number;
    /** Current stake amount */
    stake: number;
    /** Symbol the bot is trading (for multi-symbol strategies) */
    symbol?: string;
    /** Current profit/loss */
    profitLoss?: number;
}

/**
 * Bot status information
 */
export interface BotStatus {
    /** Bot ID */
    botId: string;
    /** Whether bot is currently running */
    isRunning: boolean;
    /** Strategy ID that started the bot */
    startedBy?: string;
    /** Timestamp when bot was started */
    startedAt?: number;
    /** Current stake amount */
    stake?: number;
}

/**
 * Queued bot action
 */
export interface QueuedAction {
    /** Action ID */
    id: string;
    /** Bot ID */
    botId: string;
    /** Bot start configuration */
    config: BotStartConfig;
    /** Priority level */
    priority: number;
    /** Timestamp when action was queued */
    queuedAt: number;
}

/**
 * Priority queue for bot actions
 */
export class PriorityQueue<T extends { priority: number }> {
    private items: T[] = [];

    /**
     * Add item to queue
     */
    enqueue(item: T): void {
        // Insert item in priority order (higher priority first)
        let inserted = false;
        for (let i = 0; i < this.items.length; i++) {
            if (item.priority > this.items[i].priority) {
                this.items.splice(i, 0, item);
                inserted = true;
                break;
            }
        }
        if (!inserted) {
            this.items.push(item);
        }
    }

    /**
     * Remove and return highest priority item
     */
    dequeue(): T | undefined {
        return this.items.shift();
    }

    /**
     * Get highest priority item without removing
     */
    peek(): T | undefined {
        return this.items[0];
    }

    /**
     * Get all items in priority order
     */
    getAll(): T[] {
        return [...this.items];
    }

    /**
     * Get queue size
     */
    size(): number {
        return this.items.length;
    }

    /**
     * Check if queue is empty
     */
    isEmpty(): boolean {
        return this.items.length === 0;
    }

    /**
     * Clear all items
     */
    clear(): void {
        this.items = [];
    }

    /**
     * Remove specific item by predicate
     */
    remove(predicate: (item: T) => boolean): T | undefined {
        const index = this.items.findIndex(predicate);
        if (index !== -1) {
            return this.items.splice(index, 1)[0];
        }
        return undefined;
    }
}

// ============================================================================
// Backtesting Types
// ============================================================================

/**
 * Backtesting mode status
 */
export enum BacktestingMode {
    Live = 'live',
    Backtesting = 'backtesting',
}

/**
 * Historical tick data source
 */
export interface HistoricalTickData {
    /** Trading symbol */
    symbol: string;
    /** Array of historical ticks */
    ticks: Tick[];
    /** Start timestamp */
    startTime: number;
    /** End timestamp */
    endTime: number;
}

/**
 * Simulated bot execution result
 */
export interface SimulatedBotExecution {
    /** Execution ID */
    id: string;
    /** Bot ID */
    botId: string;
    /** Strategy ID that triggered the bot */
    strategyId: string;
    /** Timestamp when bot was started */
    startedAt: number;
    /** Timestamp when bot was stopped */
    stoppedAt?: number;
    /** Stake amount */
    stake: number;
    /** Symbol traded */
    symbol: string;
    /** Simulated profit/loss */
    profitLoss: number;
    /** Whether the trade was a win */
    isWin: boolean;
    /** Entry price */
    entryPrice: number;
    /** Exit price */
    exitPrice?: number;
    /** Trade duration in seconds */
    duration?: number;
}

/**
 * Backtesting report for a single strategy
 */
export interface StrategyBacktestReport {
    /** Strategy ID */
    strategyId: string;
    /** Strategy name */
    strategyName: string;
    /** Number of times strategy triggered */
    triggerCount: number;
    /** Number of bot executions */
    executionCount: number;
    /** Total simulated profit */
    totalProfit: number;
    /** Total simulated loss */
    totalLoss: number;
    /** Net profit/loss */
    netProfitLoss: number;
    /** Win count */
    winCount: number;
    /** Loss count */
    lossCount: number;
    /** Win rate percentage (0-100) */
    winRate: number;
    /** Average profit per winning trade */
    avgProfit: number;
    /** Average loss per losing trade */
    avgLoss: number;
    /** Profit factor (total profit / total loss) */
    profitFactor: number;
    /** Maximum drawdown */
    maxDrawdown: number;
    /** All simulated executions */
    executions: SimulatedBotExecution[];
}

/**
 * Overall backtesting report
 */
export interface BacktestingReport {
    /** Backtesting mode */
    mode: BacktestingMode;
    /** Start timestamp */
    startTime: number;
    /** End timestamp */
    endTime: number;
    /** Duration in seconds */
    duration: number;
    /** Number of ticks processed */
    ticksProcessed: number;
    /** Symbols tested */
    symbols: string[];
    /** Strategy reports */
    strategyReports: StrategyBacktestReport[];
    /** Overall statistics */
    overall: {
        /** Total triggers across all strategies */
        totalTriggers: number;
        /** Total executions across all strategies */
        totalExecutions: number;
        /** Total profit across all strategies */
        totalProfit: number;
        /** Total loss across all strategies */
        totalLoss: number;
        /** Net profit/loss across all strategies */
        netProfitLoss: number;
        /** Overall win rate */
        overallWinRate: number;
    };
}

/**
 * Backtesting configuration
 */
export interface BacktestingConfig {
    /** Historical tick data sources */
    historicalData: HistoricalTickData[];
    /** Strategies to test */
    strategies: Strategy[];
    /** Initial balance for simulation */
    initialBalance: number;
    /** Simulated trade duration in seconds (for profit/loss calculation) */
    tradeDuration: number;
    /** Simulated win rate (0-1) for random outcome generation */
    simulatedWinRate: number;
    /** Simulated profit percentage per winning trade */
    profitPercentage: number;
    /** Simulated loss percentage per losing trade */
    lossPercentage: number;
}

/**
 * Backtesting progress update
 */
export interface BacktestingProgress {
    /** Current tick index */
    currentTick: number;
    /** Total ticks to process */
    totalTicks: number;
    /** Progress percentage (0-100) */
    progressPercentage: number;
    /** Current timestamp being processed */
    currentTimestamp: number;
    /** Estimated time remaining in seconds */
    estimatedTimeRemaining?: number;
}
