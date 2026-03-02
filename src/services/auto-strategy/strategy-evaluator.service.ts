/**
 * Strategy Evaluator Service
 * 
 * Evaluates strategy conditions against current market data and determines when to trigger actions.
 * Supports multiple condition types: digit frequency, volatility, time-based, performance, and signals.
 * 
 * Key Features:
 * - Multi-condition evaluation with AND/OR logic
 * - Sub-second evaluation performance (<1s for all active strategies)
 * - Cooldown period enforcement
 * - "Not evaluable" condition handling
 * - Comprehensive evaluation logging
 * 
 * Requirements: 3.1-3.5, 4.1-4.4, 5.1-5.5, 6.1-6.4, 7.1-7.5, 8.1-8.6
 */

import {
    Strategy,
    Condition,
    ConditionType,
    ConditionResult,
    EvaluationResult,
    EvaluationContext,
    DigitFrequencyCondition,
    VolatilityCondition,
    TimeRangeCondition,
    PerformanceCondition,
    SignalCondition,
    ComparisonOperator,
    LogicOperator,
    Tick,
    BotStats,
    SignalData,
    SignalProvider,
    SignalCriteria,
    SignalDirection,
    PerformanceMetric,
} from '../../types/auto-strategy.types';
import { getPerformanceOptimizer } from './performance-optimizer.service';

/**
 * Interface for Strategy Evaluator
 */
export interface IStrategyEvaluator {
    evaluateStrategy(strategy: Strategy, context: EvaluationContext): EvaluationResult;
    evaluateCondition(condition: Condition, context: EvaluationContext): ConditionResult;
    evaluateAllStrategies(strategies: Strategy[], context: EvaluationContext): Map<string, EvaluationResult>;
}

/**
 * Strategy Evaluator Service Implementation
 */
export class StrategyEvaluator implements IStrategyEvaluator {
    private readonly SIGNAL_TIMEOUT_MS = 60000; // 60 seconds

    constructor() {
        console.log('🎯 StrategyEvaluator initialized');
    }

    /**
     * Evaluate a single strategy
     * Requirements: 8.1, 8.2, 8.3, 8.4, 8.5, 8.6, 38.3
     */
    evaluateStrategy(strategy: Strategy, context: EvaluationContext): EvaluationResult {
        const startTime = performance.now();

        try {
            // Check if strategy is in cooldown
            if (this.isInCooldown(strategy, context.timestamp)) {
                const remainingCooldown = this.getRemainingCooldown(strategy, context.timestamp);
                return {
                    triggered: false,
                    reason: `cooldown (${remainingCooldown}s remaining)`,
                    timestamp: context.timestamp,
                };
            }

            // Evaluate all conditions
            const conditionResults = strategy.conditions.map(condition =>
                this.evaluateCondition(condition, context)
            );

            // Check if any condition is not evaluable
            const notEvaluableConditions = conditionResults.filter(r => r.status === 'not_evaluable');
            if (notEvaluableConditions.length > 0) {
                const reasons = notEvaluableConditions
                    .map(r => r.metadata?.reason || 'unknown')
                    .join(', ');
                return {
                    triggered: false,
                    reason: `insufficient_data: ${reasons}`,
                    conditionResults,
                    timestamp: context.timestamp,
                };
            }

            // Check if any condition has error
            const errorConditions = conditionResults.filter(r => r.status === 'error');
            if (errorConditions.length > 0) {
                const errors = errorConditions
                    .map(r => r.error || 'unknown error')
                    .join(', ');
                return {
                    triggered: false,
                    reason: `evaluation_error: ${errors}`,
                    conditionResults,
                    timestamp: context.timestamp,
                };
            }

            // Apply logic operator (AND/OR)
            const triggered = strategy.logicOperator === LogicOperator.AND
                ? conditionResults.every(r => r.value === true)
                : conditionResults.some(r => r.value === true);

            const evaluationTime = performance.now() - startTime;
            if (evaluationTime > 100) {
                console.warn(`⚠️ Strategy evaluation took ${evaluationTime.toFixed(2)}ms`);
            }

            return {
                triggered,
                conditionResults,
                timestamp: context.timestamp,
            };

        } catch (error) {
            console.error('🎯 Error evaluating strategy:', error);
            return {
                triggered: false,
                reason: `exception: ${error instanceof Error ? error.message : String(error)}`,
                timestamp: context.timestamp,
            };
        }
    }

    /**
     * Evaluate all active strategies
     * Requirements: 8.1
     */
    evaluateAllStrategies(strategies: Strategy[], context: EvaluationContext): Map<string, EvaluationResult> {
        const performanceOptimizer = getPerformanceOptimizer();
        
        // Use batch evaluation for better performance
        const evaluationPromise = performanceOptimizer.batchEvaluateStrategies(
            strategies.filter(s => s.isActive && !s.isPaused),
            async (strategy) => this.evaluateStrategy(strategy, context)
        );

        // Since we need synchronous return, we'll use the original approach with profiling
        const startTime = performance.now();
        const results = new Map<string, EvaluationResult>();

        for (const strategy of strategies) {
            // Skip inactive or paused strategies
            if (!strategy.isActive || strategy.isPaused) {
                continue;
            }

            // Use memoization for expensive calculations
            const cacheKey = `strategy_${strategy.id}_${context.timestamp}`;
            const result = performanceOptimizer.memoize(cacheKey, () => 
                this.evaluateStrategy(strategy, context)
            );
            
            results.set(strategy.id, result);
        }

        const totalTime = performance.now() - startTime;
        if (totalTime > 1000) {
            console.warn(`⚠️ Evaluating ${strategies.length} strategies took ${totalTime.toFixed(2)}ms (exceeds 1s requirement)`);
        }

        // Run optimization if needed
        if (performanceOptimizer.shouldOptimize()) {
            performanceOptimizer.runOptimization().catch(console.error);
        }

        return results;
    }

    /**
     * Evaluate a single condition
     * Requirements: 3.1-3.5, 4.1-4.4, 5.1-5.5, 6.1-6.4, 7.1-7.5, 38.3
     */
    evaluateCondition(condition: Condition, context: EvaluationContext): ConditionResult {
        try {
            switch (condition.type) {
                case ConditionType.DigitFrequency:
                    return this.evaluateDigitFrequency(condition, context);

                case ConditionType.Volatility:
                    return this.evaluateVolatility(condition, context);

                case ConditionType.TimeRange:
                    return this.evaluateTimeRange(condition, context.timestamp);

                case ConditionType.Performance:
                    return this.evaluatePerformance(condition, context.botStats);

                case ConditionType.Signal:
                    return this.evaluateSignal(condition, context.signalData);

                default:
                    return {
                        value: false,
                        status: 'error',
                        error: `Unknown condition type: ${(condition as any).type}`,
                    };
            }
        } catch (error) {
            console.error('🎯 Error evaluating condition:', error);
            return {
                value: false,
                status: 'error',
                error: error instanceof Error ? error.message : String(error),
            };
        }
    }

    // ========================================================================
    // Condition Evaluators
    // ========================================================================

    /**
     * Evaluate digit frequency condition
     * Requirements: 3.1, 3.2, 3.3, 3.4, 3.5, 38.3, 38.4
     */
    private evaluateDigitFrequency(
        condition: DigitFrequencyCondition,
        context: EvaluationContext
    ): ConditionResult {
        // Determine which symbol to use for this condition
        const conditionSymbol = condition.symbol || context.symbol;
        
        // Get tick buffer for the condition's symbol
        let relevantBuffer = context.tickBuffer;
        if (condition.symbol && context.tickBuffers) {
            const symbolBuffer = context.tickBuffers.get(conditionSymbol);
            if (!symbolBuffer) {
                return {
                    value: false,
                    status: 'not_evaluable',
                    metadata: {
                        reason: `no tick data for symbol ${conditionSymbol}`,
                    },
                };
            }
            relevantBuffer = symbolBuffer;
        }

        // Check if we have enough ticks
        if (relevantBuffer.length < condition.tickCount) {
            return {
                value: false,
                status: 'not_evaluable',
                metadata: {
                    reason: `insufficient ticks (have ${relevantBuffer.length}, need ${condition.tickCount})`,
                    actualValue: relevantBuffer.length,
                    expectedValue: condition.tickCount,
                },
            };
        }

        // Get last N ticks
        const relevantTicks = relevantBuffer.slice(-condition.tickCount);

        // Count digit occurrences
        let digitCount = 0;
        for (const tick of relevantTicks) {
            const lastDigit = this.extractLastDigit(tick.quote);
            if (condition.digits.includes(lastDigit)) {
                digitCount++;
            }
        }

        // Handle cross-symbol comparison if specified
        if (condition.crossSymbol && context.tickBuffers) {
            const compareBuffer = context.tickBuffers.get(condition.crossSymbol.compareSymbol);
            if (!compareBuffer || compareBuffer.length < condition.tickCount) {
                return {
                    value: false,
                    status: 'not_evaluable',
                    metadata: {
                        reason: `insufficient ticks for cross-symbol comparison (${condition.crossSymbol.compareSymbol})`,
                    },
                };
            }

            // Count digits in comparison symbol
            const compareTicks = compareBuffer.slice(-condition.tickCount);
            let compareDigitCount = 0;
            for (const tick of compareTicks) {
                const lastDigit = this.extractLastDigit(tick.quote);
                if (condition.digits.includes(lastDigit)) {
                    compareDigitCount++;
                }
            }

            // Compare the two counts
            const crossResult = this.compareValues(digitCount, condition.crossSymbol.operator, compareDigitCount);
            
            return {
                value: crossResult,
                status: 'evaluated',
                metadata: {
                    actualValue: digitCount,
                    expectedValue: compareDigitCount,
                    crossSymbol: condition.crossSymbol.compareSymbol,
                },
            };
        }

        // Standard threshold comparison
        const result = this.compareValues(digitCount, condition.operator, condition.threshold);

        return {
            value: result,
            status: 'evaluated',
            metadata: {
                actualValue: digitCount,
                expectedValue: condition.threshold,
            },
        };
    }

    /**
     * Evaluate volatility condition
     * Requirements: 4.1, 4.2, 4.3, 4.4, 38.3, 38.4
     */
    private evaluateVolatility(
        condition: VolatilityCondition,
        context: EvaluationContext
    ): ConditionResult {
        // Determine which symbol to use for this condition
        const conditionSymbol = condition.symbol || context.symbol;
        
        // Get tick buffer for the condition's symbol
        let relevantBuffer = context.tickBuffer;
        if (condition.symbol && context.tickBuffers) {
            const symbolBuffer = context.tickBuffers.get(conditionSymbol);
            if (!symbolBuffer) {
                return {
                    value: false,
                    status: 'not_evaluable',
                    metadata: {
                        reason: `no tick data for symbol ${conditionSymbol}`,
                    },
                };
            }
            relevantBuffer = symbolBuffer;
        }

        // Check if we have enough ticks (minimum 10)
        const minTicks = Math.max(10, condition.tickCount);
        if (relevantBuffer.length < minTicks) {
            return {
                value: false,
                status: 'not_evaluable',
                metadata: {
                    reason: `insufficient ticks (have ${relevantBuffer.length}, need ${minTicks})`,
                    actualValue: relevantBuffer.length,
                    expectedValue: minTicks,
                },
            };
        }

        // Get last N ticks
        const relevantTicks = relevantBuffer.slice(-condition.tickCount);

        // Calculate volatility (standard deviation)
        const volatility = this.calculateStandardDeviation(relevantTicks.map(t => t.quote));

        // Handle cross-symbol comparison if specified
        if (condition.crossSymbol && context.tickBuffers) {
            const compareBuffer = context.tickBuffers.get(condition.crossSymbol.compareSymbol);
            if (!compareBuffer || compareBuffer.length < minTicks) {
                return {
                    value: false,
                    status: 'not_evaluable',
                    metadata: {
                        reason: `insufficient ticks for cross-symbol comparison (${condition.crossSymbol.compareSymbol})`,
                    },
                };
            }

            // Calculate volatility for comparison symbol
            const compareTicks = compareBuffer.slice(-condition.tickCount);
            const compareVolatility = this.calculateStandardDeviation(compareTicks.map(t => t.quote));

            // Compare the two volatilities
            const crossResult = this.compareValues(volatility, condition.crossSymbol.operator, compareVolatility);
            
            return {
                value: crossResult,
                status: 'evaluated',
                metadata: {
                    actualValue: volatility,
                    expectedValue: compareVolatility,
                    crossSymbol: condition.crossSymbol.compareSymbol,
                },
            };
        }

        // Standard threshold comparison
        const result = this.compareValues(volatility, condition.operator, condition.threshold);

        return {
            value: result,
            status: 'evaluated',
            metadata: {
                actualValue: volatility,
                expectedValue: condition.threshold,
            },
        };
    }

    /**
     * Evaluate time-based condition
     * Requirements: 5.1, 5.2, 5.3, 5.4, 5.5
     */
    private evaluateTimeRange(
        condition: TimeRangeCondition,
        timestamp: number
    ): ConditionResult {
        try {
            // Create date object in specified timezone
            const date = new Date(timestamp);
            
            // Get day of week (0=Sunday, 6=Saturday)
            const dayOfWeek = date.getDay();

            // Check each time range (OR logic)
            for (const range of condition.timeRanges) {
                // Check day of week restriction
                if (range.daysOfWeek.length > 0 && !range.daysOfWeek.includes(dayOfWeek)) {
                    continue;
                }

                // Parse time range
                const [startHour, startMinute] = range.startTime.split(':').map(Number);
                const [endHour, endMinute] = range.endTime.split(':').map(Number);

                // Get current time in minutes since midnight
                const currentMinutes = date.getHours() * 60 + date.getMinutes();
                const startMinutes = startHour * 60 + startMinute;
                const endMinutes = endHour * 60 + endMinute;

                // Check if current time is within range
                let inRange: boolean;
                if (endMinutes >= startMinutes) {
                    // Normal range (e.g., 09:00-17:00)
                    inRange = currentMinutes >= startMinutes && currentMinutes <= endMinutes;
                } else {
                    // Range crosses midnight (e.g., 22:00-02:00)
                    inRange = currentMinutes >= startMinutes || currentMinutes <= endMinutes;
                }

                if (inRange) {
                    return {
                        value: true,
                        status: 'evaluated',
                        metadata: {
                            actualValue: `${date.getHours()}:${date.getMinutes().toString().padStart(2, '0')}`,
                            expectedValue: `${range.startTime}-${range.endTime}`,
                        },
                    };
                }
            }

            // No time range matched
            return {
                value: false,
                status: 'evaluated',
                metadata: {
                    actualValue: `${date.getHours()}:${date.getMinutes().toString().padStart(2, '0')}`,
                    expectedValue: condition.timeRanges.map(r => `${r.startTime}-${r.endTime}`).join(' OR '),
                },
            };

        } catch (error) {
            return {
                value: false,
                status: 'error',
                error: `Time range evaluation error: ${error instanceof Error ? error.message : String(error)}`,
            };
        }
    }

    /**
     * Evaluate performance condition
     * Requirements: 6.1, 6.2, 6.3, 6.4
     */
    private evaluatePerformance(
        condition: PerformanceCondition,
        botStats?: Map<string, BotStats>
    ): ConditionResult {
        // Check if bot stats are available
        if (!botStats || !botStats.has(condition.botId)) {
            return {
                value: false,
                status: 'not_evaluable',
                metadata: {
                    reason: `no performance data for bot ${condition.botId}`,
                },
            };
        }

        const stats = botStats.get(condition.botId)!;

        // Check if bot has any trades
        if (stats.totalTrades === 0) {
            return {
                value: false,
                status: 'not_evaluable',
                metadata: {
                    reason: 'bot has no trades',
                },
            };
        }

        // Get metric value
        let metricValue: number;
        switch (condition.metric) {
            case PerformanceMetric.ConsecutiveWins:
                metricValue = stats.winStreak;
                break;
            case PerformanceMetric.ConsecutiveLosses:
                metricValue = stats.lossStreak;
                break;
            case PerformanceMetric.WinRate:
                metricValue = stats.winRate;
                break;
            case PerformanceMetric.TotalProfit:
                metricValue = stats.totalProfit;
                break;
            case PerformanceMetric.TotalLoss:
                metricValue = stats.totalLoss;
                break;
            default:
                return {
                    value: false,
                    status: 'error',
                    error: `Unknown performance metric: ${condition.metric}`,
                };
        }

        // Compare against threshold
        const result = this.compareValues(metricValue, condition.operator, condition.threshold);

        return {
            value: result,
            status: 'evaluated',
            metadata: {
                actualValue: metricValue,
                expectedValue: condition.threshold,
            },
        };
    }

    /**
     * Evaluate signal-based condition
     * Requirements: 7.1, 7.2, 7.3, 7.4, 7.5
     */
    private evaluateSignal(
        condition: SignalCondition,
        signalData?: Map<SignalProvider, SignalData>
    ): ConditionResult {
        // Check if signal data is available
        if (!signalData || !signalData.has(condition.provider)) {
            return {
                value: false,
                status: 'not_evaluable',
                metadata: {
                    reason: `no signal data from ${condition.provider}`,
                },
            };
        }

        const signal = signalData.get(condition.provider)!;

        // Check if signal is stale (>60 seconds old)
        if (signal.isStale) {
            return {
                value: false,
                status: 'not_evaluable',
                metadata: {
                    reason: `signal from ${condition.provider} is stale (>60s old)`,
                },
            };
        }

        // Evaluate based on criteria
        switch (condition.criteria) {
            case SignalCriteria.Direction: {
                const expectedDirection = condition.value as string;
                const result = signal.direction === expectedDirection;
                return {
                    value: result,
                    status: 'evaluated',
                    metadata: {
                        actualValue: signal.direction,
                        expectedValue: expectedDirection,
                    },
                };
            }

            case SignalCriteria.Strength: {
                if (!condition.operator) {
                    return {
                        value: false,
                        status: 'error',
                        error: 'Operator required for strength comparison',
                    };
                }
                const threshold = Number(condition.value);
                const result = this.compareValues(signal.strength, condition.operator, threshold);
                return {
                    value: result,
                    status: 'evaluated',
                    metadata: {
                        actualValue: signal.strength,
                        expectedValue: threshold,
                    },
                };
            }

            case SignalCriteria.Confidence: {
                if (!condition.operator) {
                    return {
                        value: false,
                        status: 'error',
                        error: 'Operator required for confidence comparison',
                    };
                }
                const threshold = Number(condition.value);
                const result = this.compareValues(signal.confidence, condition.operator, threshold);
                return {
                    value: result,
                    status: 'evaluated',
                    metadata: {
                        actualValue: signal.confidence,
                        expectedValue: threshold,
                    },
                };
            }

            default:
                return {
                    value: false,
                    status: 'error',
                    error: `Unknown signal criteria: ${condition.criteria}`,
                };
        }
    }

    // ========================================================================
    // Helper Methods
    // ========================================================================

    /**
     * Extract last digit from a price
     */
    private extractLastDigit(price: number): number {
        const priceStr = price.toString();
        const lastChar = priceStr.charAt(priceStr.length - 1);
        return parseInt(lastChar, 10);
    }

    /**
     * Calculate standard deviation of an array of numbers
     */
    private calculateStandardDeviation(values: number[]): number {
        if (values.length === 0) return 0;

        // Calculate mean
        const mean = values.reduce((sum, val) => sum + val, 0) / values.length;

        // Calculate variance
        const variance = values.reduce((sum, val) => {
            const diff = val - mean;
            return sum + (diff * diff);
        }, 0) / values.length;

        // Return standard deviation
        return Math.sqrt(variance);
    }

    /**
     * Compare two values using a comparison operator
     */
    private compareValues(actual: number, operator: ComparisonOperator, expected: number): boolean {
        switch (operator) {
            case ComparisonOperator.LessThan:
                return actual < expected;
            case ComparisonOperator.GreaterThan:
                return actual > expected;
            case ComparisonOperator.Equal:
                return actual === expected;
            case ComparisonOperator.LessThanOrEqual:
                return actual <= expected;
            case ComparisonOperator.GreaterThanOrEqual:
                return actual >= expected;
            case ComparisonOperator.NotEqual:
                return actual !== expected;
            default:
                console.error(`Unknown comparison operator: ${operator}`);
                return false;
        }
    }

    /**
     * Check if strategy is in cooldown period
     */
    private isInCooldown(strategy: Strategy, currentTimestamp: number): boolean {
        if (!strategy.lastTriggeredAt) {
            return false;
        }

        const timeSinceLastTrigger = currentTimestamp - strategy.lastTriggeredAt;
        const cooldownMs = strategy.cooldownPeriod * 1000;

        return timeSinceLastTrigger < cooldownMs;
    }

    /**
     * Get remaining cooldown time in seconds
     */
    private getRemainingCooldown(strategy: Strategy, currentTimestamp: number): number {
        if (!strategy.lastTriggeredAt) {
            return 0;
        }

        const timeSinceLastTrigger = currentTimestamp - strategy.lastTriggeredAt;
        const cooldownMs = strategy.cooldownPeriod * 1000;
        const remainingMs = cooldownMs - timeSinceLastTrigger;

        return Math.max(0, Math.ceil(remainingMs / 1000));
    }
}

// Export singleton instance
let instance: StrategyEvaluator | null = null;

/**
 * Get singleton instance of StrategyEvaluator
 */
export function getStrategyEvaluator(): StrategyEvaluator {
    if (!instance) {
        instance = new StrategyEvaluator();
    }
    return instance;
}

/**
 * Reset singleton instance (for testing)
 */
export function resetStrategyEvaluator(): void {
    instance = null;
}
