/**
 * Unit tests for Strategy Evaluator Service
 */

import { describe, it, expect, beforeEach } from '@jest/globals';
import { StrategyEvaluator } from './strategy-evaluator.service';
import {
    Strategy,
    ConditionType,
    ComparisonOperator,
    LogicOperator,
    StrategyPriority,
    ActionType,
    Tick,
    EvaluationContext,
    DigitFrequencyCondition,
    VolatilityCondition,
    TimeRangeCondition,
    PerformanceCondition,
    PerformanceMetric,
    BotStats,
} from '../../types/auto-strategy.types';

describe('StrategyEvaluator', () => {
    let evaluator: StrategyEvaluator;

    beforeEach(() => {
        evaluator = new StrategyEvaluator();
    });

    describe('Digit Frequency Evaluation', () => {
        it('should evaluate digit frequency condition correctly', () => {
            const condition: DigitFrequencyCondition = {
                type: ConditionType.DigitFrequency,
                digits: [0, 1, 2],
                tickCount: 10,
                operator: ComparisonOperator.GreaterThan,
                threshold: 5,
            };

            // Create ticks with specific last digits
            const ticks: Tick[] = Array.from({ length: 10 }, (_, i) => ({
                epoch: Date.now() / 1000,
                quote: 100.0 + i, // Last digits: 0,1,2,3,4,5,6,7,8,9
                symbol: 'R_100',
                ask: 100.0 + i,
                bid: 100.0 + i,
                id: `tick_${i}`,
                pip_size: 2,
            }));

            const context: EvaluationContext = {
                currentTick: ticks[ticks.length - 1],
                tickBuffer: ticks,
                timestamp: Date.now(),
            };

            const result = evaluator.evaluateCondition(condition, context);

            expect(result.status).toBe('evaluated');
            expect(result.value).toBe(false); // Only 3 digits (0,1,2) out of 10, not > 5
            expect(result.metadata?.actualValue).toBe(3);
        });

        it('should mark as not evaluable when insufficient ticks', () => {
            const condition: DigitFrequencyCondition = {
                type: ConditionType.DigitFrequency,
                digits: [0, 1],
                tickCount: 100,
                operator: ComparisonOperator.GreaterThan,
                threshold: 50,
            };

            const ticks: Tick[] = Array.from({ length: 10 }, (_, i) => ({
                epoch: Date.now() / 1000,
                quote: 100.0,
                symbol: 'R_100',
                ask: 100.0,
                bid: 100.0,
                id: `tick_${i}`,
                pip_size: 2,
            }));

            const context: EvaluationContext = {
                currentTick: ticks[0],
                tickBuffer: ticks,
                timestamp: Date.now(),
            };

            const result = evaluator.evaluateCondition(condition, context);

            expect(result.status).toBe('not_evaluable');
            expect(result.value).toBe(false);
        });
    });

    describe('Volatility Evaluation', () => {
        it('should calculate volatility correctly', () => {
            const condition: VolatilityCondition = {
                type: ConditionType.Volatility,
                tickCount: 10,
                operator: ComparisonOperator.GreaterThan,
                threshold: 0,
            };

            // Create ticks with varying prices
            const ticks: Tick[] = [100, 102, 98, 105, 95, 103, 97, 101, 99, 104].map((price, i) => ({
                epoch: Date.now() / 1000,
                quote: price,
                symbol: 'R_100',
                ask: price,
                bid: price,
                id: `tick_${i}`,
                pip_size: 2,
            }));

            const context: EvaluationContext = {
                currentTick: ticks[ticks.length - 1],
                tickBuffer: ticks,
                timestamp: Date.now(),
            };

            const result = evaluator.evaluateCondition(condition, context);

            expect(result.status).toBe('evaluated');
            expect(result.value).toBe(true); // Volatility should be > 0
            expect(result.metadata?.actualValue).toBeGreaterThan(0);
        });

        it('should mark as not evaluable when insufficient ticks', () => {
            const condition: VolatilityCondition = {
                type: ConditionType.Volatility,
                tickCount: 50,
                operator: ComparisonOperator.GreaterThan,
                threshold: 1,
            };

            const ticks: Tick[] = Array.from({ length: 5 }, (_, i) => ({
                epoch: Date.now() / 1000,
                quote: 100.0,
                symbol: 'R_100',
                ask: 100.0,
                bid: 100.0,
                id: `tick_${i}`,
                pip_size: 2,
            }));

            const context: EvaluationContext = {
                currentTick: ticks[0],
                tickBuffer: ticks,
                timestamp: Date.now(),
            };

            const result = evaluator.evaluateCondition(condition, context);

            expect(result.status).toBe('not_evaluable');
        });
    });

    describe('Time Range Evaluation', () => {
        it('should evaluate time range correctly', () => {
            const condition: TimeRangeCondition = {
                type: ConditionType.TimeRange,
                timeRanges: [
                    {
                        startTime: '09:00',
                        endTime: '17:00',
                        daysOfWeek: [1, 2, 3, 4, 5], // Monday-Friday
                    },
                ],
                timezone: 'UTC',
            };

            // Create a timestamp for a weekday at 12:00
            const date = new Date();
            date.setHours(12, 0, 0, 0);
            
            // Ensure it's a weekday
            while (date.getDay() === 0 || date.getDay() === 6) {
                date.setDate(date.getDate() + 1);
            }

            const context: EvaluationContext = {
                currentTick: {} as Tick,
                tickBuffer: [],
                timestamp: date.getTime(),
            };

            const result = evaluator.evaluateCondition(condition, context);

            expect(result.status).toBe('evaluated');
            expect(result.value).toBe(true);
        });
    });

    describe('Performance Evaluation', () => {
        it('should evaluate performance condition correctly', () => {
            const condition: PerformanceCondition = {
                type: ConditionType.Performance,
                botId: 'bot_1',
                metric: PerformanceMetric.ConsecutiveWins,
                operator: ComparisonOperator.GreaterThanOrEqual,
                threshold: 3,
            };

            const botStats = new Map<string, BotStats>();
            botStats.set('bot_1', {
                botId: 'bot_1',
                winCount: 5,
                lossCount: 2,
                winStreak: 3,
                lossStreak: 0,
                totalProfit: 100,
                totalLoss: 20,
                winRate: 71.43,
                totalTrades: 7,
            });

            const context: EvaluationContext = {
                currentTick: {} as Tick,
                tickBuffer: [],
                botStats,
                timestamp: Date.now(),
            };

            const result = evaluator.evaluateCondition(condition, context);

            expect(result.status).toBe('evaluated');
            expect(result.value).toBe(true);
            expect(result.metadata?.actualValue).toBe(3);
        });

        it('should mark as not evaluable when no bot stats', () => {
            const condition: PerformanceCondition = {
                type: ConditionType.Performance,
                botId: 'bot_1',
                metric: PerformanceMetric.WinRate,
                operator: ComparisonOperator.GreaterThan,
                threshold: 50,
            };

            const context: EvaluationContext = {
                currentTick: {} as Tick,
                tickBuffer: [],
                timestamp: Date.now(),
            };

            const result = evaluator.evaluateCondition(condition, context);

            expect(result.status).toBe('not_evaluable');
        });
    });

    describe('Strategy Evaluation', () => {
        it('should evaluate strategy with AND logic correctly', () => {
            const strategy: Strategy = {
                id: 'strategy_1',
                name: 'Test Strategy',
                symbol: 'R_100',
                conditions: [
                    {
                        type: ConditionType.DigitFrequency,
                        digits: [0, 1, 2, 3, 4],
                        tickCount: 10,
                        operator: ComparisonOperator.GreaterThan,
                        threshold: 3,
                    },
                    {
                        type: ConditionType.Volatility,
                        tickCount: 10,
                        operator: ComparisonOperator.GreaterThan,
                        threshold: 0,
                    },
                ],
                logicOperator: LogicOperator.AND,
                action: {
                    type: ActionType.StartBot,
                    botId: 'bot_1',
                },
                priority: StrategyPriority.Medium,
                cooldownPeriod: 60,
                isActive: true,
                isPaused: false,
                createdAt: Date.now(),
                updatedAt: Date.now(),
            };

            const ticks: Tick[] = [100, 101, 102, 103, 104, 105, 106, 107, 108, 109].map((price, i) => ({
                epoch: Date.now() / 1000,
                quote: price,
                symbol: 'R_100',
                ask: price,
                bid: price,
                id: `tick_${i}`,
                pip_size: 2,
            }));

            const context: EvaluationContext = {
                currentTick: ticks[ticks.length - 1],
                tickBuffer: ticks,
                timestamp: Date.now(),
            };

            const result = evaluator.evaluateStrategy(strategy, context);

            expect(result.triggered).toBe(true);
            expect(result.conditionResults).toHaveLength(2);
            expect(result.conditionResults![0].status).toBe('evaluated');
            expect(result.conditionResults![1].status).toBe('evaluated');
        });

        it('should not trigger when in cooldown', () => {
            const now = Date.now();
            const strategy: Strategy = {
                id: 'strategy_1',
                name: 'Test Strategy',
                symbol: 'R_100',
                conditions: [],
                logicOperator: LogicOperator.AND,
                action: {
                    type: ActionType.StartBot,
                    botId: 'bot_1',
                },
                priority: StrategyPriority.Medium,
                cooldownPeriod: 60,
                lastTriggeredAt: now - 30000, // 30 seconds ago
                isActive: true,
                isPaused: false,
                createdAt: now,
                updatedAt: now,
            };

            const context: EvaluationContext = {
                currentTick: {} as Tick,
                tickBuffer: [],
                timestamp: now,
            };

            const result = evaluator.evaluateStrategy(strategy, context);

            expect(result.triggered).toBe(false);
            expect(result.reason).toContain('cooldown');
        });

        it('should not trigger when condition is not evaluable', () => {
            const strategy: Strategy = {
                id: 'strategy_1',
                name: 'Test Strategy',
                symbol: 'R_100',
                conditions: [
                    {
                        type: ConditionType.DigitFrequency,
                        digits: [0],
                        tickCount: 100,
                        operator: ComparisonOperator.GreaterThan,
                        threshold: 50,
                    },
                ],
                logicOperator: LogicOperator.AND,
                action: {
                    type: ActionType.StartBot,
                    botId: 'bot_1',
                },
                priority: StrategyPriority.Medium,
                cooldownPeriod: 60,
                isActive: true,
                isPaused: false,
                createdAt: Date.now(),
                updatedAt: Date.now(),
            };

            const context: EvaluationContext = {
                currentTick: {} as Tick,
                tickBuffer: [], // Empty buffer
                timestamp: Date.now(),
            };

            const result = evaluator.evaluateStrategy(strategy, context);

            expect(result.triggered).toBe(false);
            expect(result.reason).toContain('insufficient_data');
        });
    });
});
