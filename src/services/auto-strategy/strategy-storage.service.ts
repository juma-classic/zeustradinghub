/**
 * Strategy Storage Service
 * 
 * Manages strategy persistence, CRUD operations, validation, and template library.
 * Provides import/export functionality and pre-configured strategy templates.
 * 
 * Requirements: 2.3, 2.4, 18.1, 18.2, 18.3, 18.4, 18.5, 36.1, 36.2, 36.3, 36.4, 36.5
 */

import {
    Strategy,
    StrategyAction,
    ActionType,
    StrategyPriority,
    LogicOperator,
    ConditionType,
    ComparisonOperator,
    DigitFrequencyCondition,
    VolatilityCondition,
    TimeRangeCondition,
} from '../../types/auto-strategy.types';

// ============================================================================
// Types and Interfaces
// ============================================================================

/**
 * Validation error
 */
export interface ValidationError {
    field: string;
    message: string;
}

/**
 * Validation result
 */
export interface ValidationResult {
    isValid: boolean;
    errors: ValidationError[];
}

/**
 * Strategy template
 */
export interface StrategyTemplate {
    id: string;
    name: string;
    description: string;
    category: 'digit_frequency' | 'volatility' | 'time_based' | 'performance' | 'signal' | 'combined';
    recommendedUseCase: string;
    template: Omit<Strategy, 'id' | 'createdAt' | 'updatedAt'>;
}

/**
 * Storage statistics
 */
export interface StorageStats {
    totalStrategies: number;
    activeStrategies: number;
    pausedStrategies: number;
    storageSize: number;
}

// ============================================================================
// Strategy Storage Interface
// ============================================================================

/**
 * Interface for Strategy Storage service
 */
export interface IStrategyStorage {
    // CRUD operations
    create(strategy: Omit<Strategy, 'id' | 'createdAt' | 'updatedAt'>): Strategy;
    read(id: string): Strategy | null;
    readAll(): Strategy[];
    update(id: string, updates: Partial<Strategy>): Strategy | null;
    delete(id: string): boolean;

    // Validation
    validate(strategy: Partial<Strategy>): ValidationResult;

    // Import/Export
    exportStrategy(id: string): string | null;
    importStrategy(json: string): Strategy;

    // Templates
    getTemplates(): StrategyTemplate[];
    getTemplate(id: string): StrategyTemplate | null;
    createFromTemplate(templateId: string, customizations?: Partial<Strategy>): Strategy;

    // Utilities
    getStats(): StorageStats;
    clear(): void;
}

// ============================================================================
// Strategy Storage Implementation
// ============================================================================

/**
 * Strategy Storage Service
 * 
 * Provides strategy persistence and management with localStorage.
 */
export class StrategyStorage implements IStrategyStorage {
    private static readonly STORAGE_KEY = 'auto_strategy_storage';
    private static readonly MAX_STRATEGIES = 100;

    private strategies: Map<string, Strategy> = new Map();

    constructor() {
        this.loadFromStorage();
    }

    // ========================================================================
    // CRUD Operations
    // ========================================================================

    /**
     * Create a new strategy
     */
    create(strategy: Omit<Strategy, 'id' | 'createdAt' | 'updatedAt'>): Strategy {
        // Check max strategies limit
        if (this.strategies.size >= StrategyStorage.MAX_STRATEGIES) {
            throw new Error(`Maximum number of strategies (${StrategyStorage.MAX_STRATEGIES}) reached`);
        }

        // Validate strategy
        const validation = this.validate(strategy);
        if (!validation.isValid) {
            throw new Error(`Invalid strategy: ${validation.errors.map(e => e.message).join(', ')}`);
        }

        // Create full strategy with generated fields
        const now = Date.now();
        const fullStrategy: Strategy = {
            ...strategy,
            id: this.generateId(),
            createdAt: now,
            updatedAt: now,
        };

        // Store strategy
        this.strategies.set(fullStrategy.id, fullStrategy);
        this.saveToStorage();

        return fullStrategy;
    }

    /**
     * Read a strategy by ID
     */
    read(id: string): Strategy | null {
        return this.strategies.get(id) || null;
    }

    /**
     * Read all strategies
     */
    readAll(): Strategy[] {
        return Array.from(this.strategies.values());
    }

    /**
     * Update a strategy
     */
    update(id: string, updates: Partial<Strategy>): Strategy | null {
        const existing = this.strategies.get(id);
        if (!existing) {
            return null;
        }

        // Merge updates
        const updated: Strategy = {
            ...existing,
            ...updates,
            id: existing.id, // Prevent ID change
            createdAt: existing.createdAt, // Prevent createdAt change
            updatedAt: Date.now(),
        };

        // Validate updated strategy
        const validation = this.validate(updated);
        if (!validation.isValid) {
            throw new Error(`Invalid strategy update: ${validation.errors.map(e => e.message).join(', ')}`);
        }

        // Store updated strategy
        this.strategies.set(id, updated);
        this.saveToStorage();

        return updated;
    }

    /**
     * Delete a strategy
     */
    delete(id: string): boolean {
        const existed = this.strategies.has(id);
        if (existed) {
            this.strategies.delete(id);
            this.saveToStorage();
        }
        return existed;
    }

    // ========================================================================
    // Validation
    // ========================================================================

    /**
     * Validate a strategy
     */
    validate(strategy: Partial<Strategy>): ValidationResult {
        const errors: ValidationError[] = [];

        // Validate name
        if (!strategy.name || strategy.name.trim().length === 0) {
            errors.push({ field: 'name', message: 'Strategy name is required' });
        } else if (strategy.name.length > 100) {
            errors.push({ field: 'name', message: 'Strategy name must be 100 characters or less' });
        }

        // Validate symbol
        if (!strategy.symbol || strategy.symbol.trim().length === 0) {
            errors.push({ field: 'symbol', message: 'Trading symbol is required' });
        }

        // Validate conditions
        if (!strategy.conditions || strategy.conditions.length === 0) {
            errors.push({ field: 'conditions', message: 'At least one condition is required' });
        } else if (strategy.conditions.length > 10) {
            errors.push({ field: 'conditions', message: 'Maximum 10 conditions allowed' });
        } else {
            // Validate each condition
            strategy.conditions.forEach((condition, index) => {
                const conditionErrors = this.validateCondition(condition);
                conditionErrors.forEach(error => {
                    errors.push({ field: `conditions[${index}].${error.field}`, message: error.message });
                });
            });
        }

        // Validate logic operator
        if (!strategy.logicOperator || !Object.values(LogicOperator).includes(strategy.logicOperator)) {
            errors.push({ field: 'logicOperator', message: 'Valid logic operator (AND/OR) is required' });
        }

        // Validate action
        if (!strategy.action) {
            errors.push({ field: 'action', message: 'Action is required' });
        } else {
            const actionErrors = this.validateAction(strategy.action);
            actionErrors.forEach(error => {
                errors.push({ field: `action.${error.field}`, message: error.message });
            });
        }

        // Validate priority
        if (!strategy.priority || !Object.values(StrategyPriority).includes(strategy.priority)) {
            errors.push({ field: 'priority', message: 'Valid priority level is required' });
        }

        // Validate cooldown period
        if (strategy.cooldownPeriod === undefined || strategy.cooldownPeriod === null) {
            errors.push({ field: 'cooldownPeriod', message: 'Cooldown period is required' });
        } else if (strategy.cooldownPeriod < 0) {
            errors.push({ field: 'cooldownPeriod', message: 'Cooldown period must be non-negative' });
        } else if (strategy.cooldownPeriod > 3600) {
            errors.push({ field: 'cooldownPeriod', message: 'Cooldown period must be 3600 seconds or less' });
        }

        // Validate profit limit (if provided)
        if (strategy.profitLimit !== undefined && strategy.profitLimit !== null && strategy.profitLimit <= 0) {
            errors.push({ field: 'profitLimit', message: 'Profit limit must be positive' });
        }

        // Validate loss limit (if provided)
        if (strategy.lossLimit !== undefined && strategy.lossLimit !== null && strategy.lossLimit <= 0) {
            errors.push({ field: 'lossLimit', message: 'Loss limit must be positive' });
        }

        return {
            isValid: errors.length === 0,
            errors,
        };
    }

    /**
     * Validate a condition
     */
    private validateCondition(condition: any): ValidationError[] {
        const errors: ValidationError[] = [];

        if (!condition.type || !Object.values(ConditionType).includes(condition.type)) {
            errors.push({ field: 'type', message: 'Valid condition type is required' });
            return errors; // Can't validate further without type
        }

        switch (condition.type) {
            case ConditionType.DigitFrequency:
                if (!condition.digits || !Array.isArray(condition.digits) || condition.digits.length === 0) {
                    errors.push({ field: 'digits', message: 'At least one digit is required' });
                } else if (condition.digits.some((d: number) => d < 0 || d > 9)) {
                    errors.push({ field: 'digits', message: 'Digits must be between 0 and 9' });
                }
                if (!condition.tickCount || condition.tickCount < 10 || condition.tickCount > 1000) {
                    errors.push({ field: 'tickCount', message: 'Tick count must be between 10 and 1000' });
                }
                if (!condition.operator || !Object.values(ComparisonOperator).includes(condition.operator)) {
                    errors.push({ field: 'operator', message: 'Valid comparison operator is required' });
                }
                if (condition.threshold === undefined || condition.threshold === null || condition.threshold < 0) {
                    errors.push({ field: 'threshold', message: 'Threshold must be non-negative' });
                }
                break;

            case ConditionType.Volatility:
                if (!condition.tickCount || condition.tickCount < 10 || condition.tickCount > 500) {
                    errors.push({ field: 'tickCount', message: 'Tick count must be between 10 and 500' });
                }
                if (!condition.operator || !Object.values(ComparisonOperator).includes(condition.operator)) {
                    errors.push({ field: 'operator', message: 'Valid comparison operator is required' });
                }
                if (condition.threshold === undefined || condition.threshold === null || condition.threshold < 0) {
                    errors.push({ field: 'threshold', message: 'Threshold must be non-negative' });
                }
                break;

            case ConditionType.TimeRange:
                if (!condition.timeRanges || !Array.isArray(condition.timeRanges) || condition.timeRanges.length === 0) {
                    errors.push({ field: 'timeRanges', message: 'At least one time range is required' });
                }
                if (!condition.timezone || condition.timezone.trim().length === 0) {
                    errors.push({ field: 'timezone', message: 'Timezone is required' });
                }
                break;

            case ConditionType.Performance:
                if (!condition.botId || condition.botId.trim().length === 0) {
                    errors.push({ field: 'botId', message: 'Bot ID is required' });
                }
                if (!condition.metric) {
                    errors.push({ field: 'metric', message: 'Performance metric is required' });
                }
                if (!condition.operator || !Object.values(ComparisonOperator).includes(condition.operator)) {
                    errors.push({ field: 'operator', message: 'Valid comparison operator is required' });
                }
                if (condition.threshold === undefined || condition.threshold === null) {
                    errors.push({ field: 'threshold', message: 'Threshold is required' });
                }
                break;

            case ConditionType.Signal:
                if (!condition.provider) {
                    errors.push({ field: 'provider', message: 'Signal provider is required' });
                }
                if (!condition.criteria) {
                    errors.push({ field: 'criteria', message: 'Signal criteria is required' });
                }
                if (condition.value === undefined || condition.value === null) {
                    errors.push({ field: 'value', message: 'Signal value is required' });
                }
                break;
        }

        return errors;
    }

    /**
     * Validate an action
     */
    private validateAction(action: any): ValidationError[] {
        const errors: ValidationError[] = [];

        if (!action.type || !Object.values(ActionType).includes(action.type)) {
            errors.push({ field: 'type', message: 'Valid action type is required' });
            return errors;
        }

        if (!action.botId || action.botId.trim().length === 0) {
            errors.push({ field: 'botId', message: 'Bot ID is required' });
        }

        if (action.type === ActionType.SwitchBot) {
            if (!action.targetBotId || action.targetBotId.trim().length === 0) {
                errors.push({ field: 'targetBotId', message: 'Target bot ID is required for switch action' });
            }
        }

        if (action.stake !== undefined && action.stake !== null) {
            if (action.stake <= 0) {
                errors.push({ field: 'stake', message: 'Stake must be positive' });
            }
        }

        return errors;
    }

    // ========================================================================
    // Import/Export
    // ========================================================================

    /**
     * Export a strategy as JSON
     */
    exportStrategy(id: string): string | null {
        const strategy = this.strategies.get(id);
        if (!strategy) {
            return null;
        }

        try {
            return JSON.stringify(strategy, null, 2);
        } catch (error) {
            console.error('Failed to export strategy:', error);
            return null;
        }
    }

    /**
     * Import a strategy from JSON
     */
    importStrategy(json: string): Strategy {
        try {
            const parsed = JSON.parse(json);

            // Remove id, createdAt, updatedAt to create as new strategy
            const { id, createdAt, updatedAt, ...strategyData } = parsed;

            // Create new strategy
            return this.create(strategyData);
        } catch (error) {
            if (error instanceof SyntaxError) {
                throw new Error('Invalid JSON format');
            }
            throw error;
        }
    }

    // ========================================================================
    // Templates
    // ========================================================================

    /**
     * Get all strategy templates
     */
    getTemplates(): StrategyTemplate[] {
        return STRATEGY_TEMPLATES;
    }

    /**
     * Get a specific template by ID
     */
    getTemplate(id: string): StrategyTemplate | null {
        return STRATEGY_TEMPLATES.find(t => t.id === id) || null;
    }

    /**
     * Create a strategy from a template
     */
    createFromTemplate(templateId: string, customizations?: Partial<Strategy>): Strategy {
        const template = this.getTemplate(templateId);
        if (!template) {
            throw new Error(`Template not found: ${templateId}`);
        }

        // Merge template with customizations
        const strategyData = {
            ...template.template,
            ...customizations,
        };

        return this.create(strategyData);
    }

    // ========================================================================
    // Utilities
    // ========================================================================

    /**
     * Get storage statistics
     */
    getStats(): StorageStats {
        const strategies = Array.from(this.strategies.values());

        return {
            totalStrategies: strategies.length,
            activeStrategies: strategies.filter(s => s.isActive && !s.isPaused).length,
            pausedStrategies: strategies.filter(s => s.isPaused).length,
            storageSize: this.estimateStorageSize(),
        };
    }

    /**
     * Clear all strategies
     */
    clear(): void {
        this.strategies.clear();
        this.saveToStorage();
    }

    // ========================================================================
    // Private Methods
    // ========================================================================

    /**
     * Generate unique ID
     */
    private generateId(): string {
        return `strategy_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    }

    /**
     * Estimate storage size in bytes
     */
    private estimateStorageSize(): number {
        try {
            const json = JSON.stringify(Array.from(this.strategies.values()));
            return new Blob([json]).size;
        } catch {
            return 0;
        }
    }

    /**
     * Load strategies from localStorage
     */
    private loadFromStorage(): void {
        try {
            const stored = localStorage.getItem(StrategyStorage.STORAGE_KEY);
            if (stored) {
                const parsed = JSON.parse(stored);
                if (Array.isArray(parsed)) {
                    this.strategies = new Map(parsed.map((s: Strategy) => [s.id, s]));
                }
            }
        } catch (error) {
            console.error('Failed to load strategies from storage:', error);
            this.strategies = new Map();
        }
    }

    /**
     * Save strategies to localStorage
     */
    private saveToStorage(): void {
        try {
            const strategies = Array.from(this.strategies.values());
            localStorage.setItem(StrategyStorage.STORAGE_KEY, JSON.stringify(strategies));
        } catch (error) {
            console.error('Failed to save strategies to storage:', error);

            if (error instanceof Error && error.name === 'QuotaExceededError') {
                throw new Error('Storage quota exceeded. Please delete some strategies.');
            }
        }
    }
}

// ============================================================================
// Strategy Templates
// ============================================================================

const STRATEGY_TEMPLATES: StrategyTemplate[] = [
    {
        id: 'digit_frequency_high',
        name: 'High Digit Frequency',
        description: 'Start bot when high digits (7-9) appear frequently',
        category: 'digit_frequency',
        recommendedUseCase: 'Use when you want to trade during periods of high digit occurrence',
        template: {
            name: 'High Digit Frequency Strategy',
            description: 'Starts bot when digits 7-9 appear more than 30% of the time in last 100 ticks',
            symbol: 'R_100',
            conditions: [
                {
                    type: ConditionType.DigitFrequency,
                    digits: [7, 8, 9],
                    tickCount: 100,
                    operator: ComparisonOperator.GreaterThan,
                    threshold: 30,
                } as DigitFrequencyCondition,
            ],
            logicOperator: LogicOperator.AND,
            action: {
                type: ActionType.StartBot,
                botId: '',
                stake: 1,
            },
            priority: StrategyPriority.Medium,
            cooldownPeriod: 60,
            isActive: false,
            isPaused: false,
        },
    },
    {
        id: 'digit_frequency_low',
        name: 'Low Digit Frequency',
        description: 'Start bot when low digits (0-2) appear frequently',
        category: 'digit_frequency',
        recommendedUseCase: 'Use when you want to trade during periods of low digit occurrence',
        template: {
            name: 'Low Digit Frequency Strategy',
            description: 'Starts bot when digits 0-2 appear more than 30% of the time in last 100 ticks',
            symbol: 'R_100',
            conditions: [
                {
                    type: ConditionType.DigitFrequency,
                    digits: [0, 1, 2],
                    tickCount: 100,
                    operator: ComparisonOperator.GreaterThan,
                    threshold: 30,
                } as DigitFrequencyCondition,
            ],
            logicOperator: LogicOperator.AND,
            action: {
                type: ActionType.StartBot,
                botId: '',
                stake: 1,
            },
            priority: StrategyPriority.Medium,
            cooldownPeriod: 60,
            isActive: false,
            isPaused: false,
        },
    },
    {
        id: 'high_volatility',
        name: 'High Volatility Trading',
        description: 'Start bot during high market volatility',
        category: 'volatility',
        recommendedUseCase: 'Use when you want to trade during volatile market conditions',
        template: {
            name: 'High Volatility Strategy',
            description: 'Starts bot when volatility exceeds 0.5 over last 50 ticks',
            symbol: 'R_100',
            conditions: [
                {
                    type: ConditionType.Volatility,
                    tickCount: 50,
                    operator: ComparisonOperator.GreaterThan,
                    threshold: 0.5,
                } as VolatilityCondition,
            ],
            logicOperator: LogicOperator.AND,
            action: {
                type: ActionType.StartBot,
                botId: '',
                stake: 1,
            },
            priority: StrategyPriority.High,
            cooldownPeriod: 120,
            isActive: false,
            isPaused: false,
        },
    },
    {
        id: 'low_volatility',
        name: 'Low Volatility Trading',
        description: 'Start bot during low market volatility',
        category: 'volatility',
        recommendedUseCase: 'Use when you want to trade during calm market conditions',
        template: {
            name: 'Low Volatility Strategy',
            description: 'Starts bot when volatility is below 0.2 over last 50 ticks',
            symbol: 'R_100',
            conditions: [
                {
                    type: ConditionType.Volatility,
                    tickCount: 50,
                    operator: ComparisonOperator.LessThan,
                    threshold: 0.2,
                } as VolatilityCondition,
            ],
            logicOperator: LogicOperator.AND,
            action: {
                type: ActionType.StartBot,
                botId: '',
                stake: 1,
            },
            priority: StrategyPriority.Medium,
            cooldownPeriod: 120,
            isActive: false,
            isPaused: false,
        },
    },
    {
        id: 'trading_hours',
        name: 'Trading Hours Only',
        description: 'Trade only during specific hours',
        category: 'time_based',
        recommendedUseCase: 'Use to limit trading to specific time windows',
        template: {
            name: 'Trading Hours Strategy',
            description: 'Starts bot only between 9 AM and 5 PM on weekdays',
            symbol: 'R_100',
            conditions: [
                {
                    type: ConditionType.TimeRange,
                    timeRanges: [
                        {
                            startTime: '09:00',
                            endTime: '17:00',
                            daysOfWeek: [1, 2, 3, 4, 5], // Monday to Friday
                        },
                    ],
                    timezone: 'UTC',
                } as TimeRangeCondition,
            ],
            logicOperator: LogicOperator.AND,
            action: {
                type: ActionType.StartBot,
                botId: '',
                stake: 1,
            },
            priority: StrategyPriority.Medium,
            cooldownPeriod: 300,
            isActive: false,
            isPaused: false,
        },
    },
    {
        id: 'combined_digit_volatility',
        name: 'Combined Digit & Volatility',
        description: 'Start bot when both digit frequency and volatility conditions are met',
        category: 'combined',
        recommendedUseCase: 'Use for more precise entry conditions combining multiple factors',
        template: {
            name: 'Combined Strategy',
            description: 'Starts bot when high digits are frequent AND volatility is high',
            symbol: 'R_100',
            conditions: [
                {
                    type: ConditionType.DigitFrequency,
                    digits: [7, 8, 9],
                    tickCount: 100,
                    operator: ComparisonOperator.GreaterThan,
                    threshold: 30,
                } as DigitFrequencyCondition,
                {
                    type: ConditionType.Volatility,
                    tickCount: 50,
                    operator: ComparisonOperator.GreaterThan,
                    threshold: 0.5,
                } as VolatilityCondition,
            ],
            logicOperator: LogicOperator.AND,
            action: {
                type: ActionType.StartBot,
                botId: '',
                stake: 1,
            },
            priority: StrategyPriority.High,
            cooldownPeriod: 180,
            isActive: false,
            isPaused: false,
        },
    },
];

// ============================================================================
// Singleton Instance
// ============================================================================

let strategyStorageInstance: StrategyStorage | null = null;

/**
 * Get singleton instance of StrategyStorage
 */
export function getStrategyStorage(): StrategyStorage {
    if (!strategyStorageInstance) {
        strategyStorageInstance = new StrategyStorage();
    }
    return strategyStorageInstance;
}

/**
 * Reset singleton instance (for testing)
 */
export function resetStrategyStorage(): void {
    strategyStorageInstance = null;
}
