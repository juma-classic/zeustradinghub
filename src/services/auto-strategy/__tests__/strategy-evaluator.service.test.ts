/**
 * Unit tests for StrategyEvaluator service
 * 
 * Tests cover:
 * - Digit frequency calculation with various tick patterns
 * - Volatility calculation accuracy
 * - Time range evaluation with different timezones
 * - Performance metric calculations
 * - Signal condition evaluation
 * 
 * Requirements: 3.1, 3.2, 3.3, 4.1, 4.2, 5.1, 6.1, 7.1
 */

import {
    StrategyEvaluator,
    resetStrategyEvaluator,
} from '../strategy-evaluator.service';
import {
    Strategy,
    Condition,
    ConditionType,
    ComparisonOperator,
    LogicOperator,
    DigitFrequencyCondition,
    VolatilityCondition,
    TimeRangeCondition,
    PerformanceCondition,
    SignalCondition,
    PerformanceMetric,
    SignalProvider,
    SignalCriteria,
    SignalDirection,
    Tick,
    BotStats,
    SignalData,
    EvaluationContext,
    StrategyPriority,
    ActionType,
} from '../../../types/auto-strategy.types';

describe('StrategyEvaluator', () => {
    let evaluator: StrategyEvaluator;

    beforeEach(() => {
        resetStrategyEvaluator();
        evaluator = new StrategyEvaluator();
    });

    afterEach(() => {
        resetStrategyEvaluator();
    });

    // ========================================================================
    // Digit Frequency Condition Tests
    // ========================================================================

    describe('Digit Frequency Evaluation', () => {
        it('should count single digit occurrences correctly', () => {
            const condition: DigitFrequencyCondition = {
                type: ConditionType.DigitFrequency,
                digits: [5],
                tickCount: 10,
                operator: ComparisonOperator.GreaterThanOrEqual,
                threshold: 3,
            };

            // Create ticks with last digits: 5, 2, 5, 8, 5, 1, 3, 5, 9, 0
            const ticks = createTicksWithDigits([5, 2, 5, 8, 5, 1, 3, 5, 9, 0]);
            const context = createEvaluationContext(ticks);

            const result = evaluator.evaluateCondition(condition, context);

            expect(result.status).toBe('evaluated');
            expect(result.value).toBe(true); // 4 occurrences of digit 5 >= 3
            expect(result.metadata?.actualValue).toBe(4);
        });

        it('should count digit range occurrences correctly', () => {
            const condition: DigitFrequencyCondition = {
                type: ConditionType.DigitFrequency,
                digits: [0, 1, 2, 3], // Digits 0-3
                tickCount: 20,
                operator: ComparisonOperator.GreaterThan,
                threshold: 10,
            };

            // Create 20 ticks with mixed digits
            const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
            const ticks = createTicksWithDigits(digits);
            const context = createEvaluationContext(ticks);

            const result = evaluator.evaluateCondition(condition, context);

            expect(result.status).toBe('evaluated');
            expect(result.value).toBe(false); // 8 occurrences of 0-3 is not > 10
            expect(result.metadata?.actualValue).toBe(8);
        });

        it('should handle insufficient ticks for digit frequency', () => {
            const condition: DigitFrequencyCondition = {
                type: ConditionType.DigitFrequency,
                digits: [5],
                tickCount: 100,
                operator: ComparisonOperator.GreaterThan,
                threshold: 10,
            };

            const ticks = createTicksWithDigits([1, 2, 3, 4, 5]); // Only 5 ticks
            const context = createEvaluationContext(ticks);

            const result = evaluator.evaluateCondition(condition, context);

            expect(result.status).toBe('not_evaluable');
            expect(result.value).toBe(false);
            expect(result.metadata?.reason).toContain('insufficient ticks');
        });

        it('should use all comparison operators correctly for digit frequency', () => {
            const digits = [5, 5, 5, 2, 8, 1, 3, 9, 0, 4]; // 3 occurrences of digit 5
            const ticks = createTicksWithDigits(digits);
            const context = createEvaluationContext(ticks);

            const testCases = [
                { operator: ComparisonOperator.Equal, threshold: 3, expected: true },
                { operator: ComparisonOperator.NotEqual, threshold: 3, expected: false },
                { operator: ComparisonOperator.GreaterThan, threshold: 2, expected: true },
                { operator: ComparisonOperator.GreaterThan, threshold: 3, expected: false },
                { operator: ComparisonOperator.LessThan, threshold: 4, expected: true },
                { operator: ComparisonOperator.LessThan, threshold: 3, expected: false },
                { operator: ComparisonOperator.GreaterThanOrEqual, threshold: 3, expected: true },
                { operator: ComparisonOperator.LessThanOrEqual, threshold: 3, expected: true },
            ];

            testCases.forEach(({ operator, threshold, expected }) => {
                const condition: DigitFrequencyCondition = {
                    type: ConditionType.DigitFrequency,
                    digits: [5],
                    tickCount: 10,
                    operator,
                    threshold,
                };

                const result = evaluator.evaluateCondition(condition, context);
                expect(result.value).toBe(expected);
            });
        });

        it('should handle edge case with no matching digits', () => {
            const condition: DigitFrequencyCondition = {
                type: ConditionType.DigitFrequency,
                digits: [7],
                tickCount: 10,
                operator: ComparisonOperator.Equal,
                threshold: 0,
            };

            const ticks = createTicksWithDigits([1, 2, 3, 4, 5, 6, 8, 9, 0, 1]);
            const context = createEvaluationContext(ticks);

            const result = evaluator.evaluateCondition(condition, context);

            expect(result.status).toBe('evaluated');
            expect(result.value).toBe(true); // 0 occurrences = 0
            expect(result.metadata?.actualValue).toBe(0);
        });

        it('should extract last digit from decimal prices correctly', () => {
            const condition: DigitFrequencyCondition = {
                type: ConditionType.DigitFrequency,
                digits: [5],
                tickCount: 5,
                operator: ComparisonOperator.Equal,
                threshold: 3,
            };

            // Prices: 100.5, 200.25, 300.35, 400.45, 500.55
            // Last digits: 5, 5, 5, 5, 5
            const ticks = [
                createMockTick('R_100', 100.5),
                createMockTick('R_100', 200.25),
                createMockTick('R_100', 300.35),
                createMockTick('R_100', 400.45),
                createMockTick('R_100', 500.55),
            ];
            const context = createEvaluationContext(ticks);

            const result = evaluator.evaluateCondition(condition, context);

            expect(result.status).toBe('evaluated');
            expect(result.metadata?.actualValue).toBe(5); // All 5 ticks end in 5
        });
    });

    // ========================================================================
    // Volatility Condition Tests
    // ========================================================================

    describe('Volatility Evaluation', () => {
        it('should calculate standard deviation correctly', () => {
            const condition: VolatilityCondition = {
                type: ConditionType.Volatility,
                tickCount: 10,
                operator: ComparisonOperator.GreaterThan,
                threshold: 0,
            };

            // Prices with known standard deviation
            // Values: 100, 102, 98, 101, 99, 103, 97, 100, 102, 98
            // Mean = 100, StdDev ≈ 1.897
            const prices = [100, 102, 98, 101, 99, 103, 97, 100, 102, 98];
            const ticks = prices.map(price => createMockTick('R_100', price));
            const context = createEvaluationContext(ticks);

            const result = evaluator.evaluateCondition(condition, context);

            expect(result.status).toBe('evaluated');
            expect(result.value).toBe(true);
            expect(result.metadata?.actualValue).toBeCloseTo(1.897, 1);
        });

        it('should handle low volatility correctly', () => {
            const condition: VolatilityCondition = {
                type: ConditionType.Volatility,
                tickCount: 10,
                operator: ComparisonOperator.LessThan,
                threshold: 0.5,
            };

            // Very stable prices
            const prices = [100, 100.1, 100.2, 100.1, 100, 100.1, 100.2, 100.1, 100, 100.1];
            const ticks = prices.map(price => createMockTick('R_100', price));
            const context = createEvaluationContext(ticks);

            const result = evaluator.evaluateCondition(condition, context);

            expect(result.status).toBe('evaluated');
            expect(result.value).toBe(true);
            expect(result.metadata?.actualValue).toBeLessThan(0.5);
        });

        it('should handle high volatility correctly', () => {
            const condition: VolatilityCondition = {
                type: ConditionType.Volatility,
                tickCount: 10,
                operator: ComparisonOperator.GreaterThanOrEqual,
                threshold: 5.0,
            };

            // Highly volatile prices
            const prices = [100, 110, 90, 115, 85, 120, 80, 125, 75, 130];
            const ticks = prices.map(price => createMockTick('R_100', price));
            const context = createEvaluationContext(ticks);

            const result = evaluator.evaluateCondition(condition, context);

            expect(result.status).toBe('evaluated');
            expect(result.value).toBe(true);
            expect(result.metadata?.actualValue).toBeGreaterThanOrEqual(5.0);
        });

        it('should handle insufficient ticks for volatility', () => {
            const condition: VolatilityCondition = {
                type: ConditionType.Volatility,
                tickCount: 50,
                operator: ComparisonOperator.GreaterThan,
                threshold: 1.0,
            };

            const ticks = [createMockTick('R_100', 100), createMockTick('R_100', 101)];
            const context = createEvaluationContext(ticks);

            const result = evaluator.evaluateCondition(condition, context);

            expect(result.status).toBe('not_evaluable');
            expect(result.value).toBe(false);
            expect(result.metadata?.reason).toContain('insufficient ticks');
        });

        it('should enforce minimum 10 ticks for volatility calculation', () => {
            const condition: VolatilityCondition = {
                type: ConditionType.Volatility,
                tickCount: 5, // Less than minimum
                operator: ComparisonOperator.GreaterThan,
                threshold: 1.0,
            };

            const ticks = [
                createMockTick('R_100', 100),
                createMockTick('R_100', 101),
                createMockTick('R_100', 102),
            ];
            const context = createEvaluationContext(ticks);

            const result = evaluator.evaluateCondition(condition, context);

            expect(result.status).toBe('not_evaluable');
            expect(result.metadata?.expectedValue).toBe(10); // Should require minimum 10
        });

        it('should calculate volatility for exactly 10 ticks', () => {
            const condition: VolatilityCondition = {
                type: ConditionType.Volatility,
                tickCount: 10,
                operator: ComparisonOperator.GreaterThan,
                threshold: 0,
            };

            const prices = [100, 101, 102, 103, 104, 105, 106, 107, 108, 109];
            const ticks = prices.map(price => createMockTick('R_100', price));
            const context = createEvaluationContext(ticks);

            const result = evaluator.evaluateCondition(condition, context);

            expect(result.status).toBe('evaluated');
            expect(result.value).toBe(true);
            expect(result.metadata?.actualValue).toBeGreaterThan(0);
        });

        it('should handle zero volatility (all same prices)', () => {
            const condition: VolatilityCondition = {
                type: ConditionType.Volatility,
                tickCount: 10,
                operator: ComparisonOperator.Equal,
                threshold: 0,
            };

            const prices = Array(10).fill(100);
            const ticks = prices.map(price => createMockTick('R_100', price));
            const context = createEvaluationContext(ticks);

            const result = evaluator.evaluateCondition(condition, context);

            expect(result.status).toBe('evaluated');
            expect(result.value).toBe(true);
            expect(result.metadata?.actualValue).toBe(0);
        });
    });

    // ========================================================================
    // Time Range Condition Tests
    // ========================================================================

    describe('Time Range Evaluation', () => {
        it('should evaluate time within single range correctly', () => {
            const condition: TimeRangeCondition = {
                type: ConditionType.TimeRange,
                timeRanges: [
                    {
                        startTime: '09:00',
                        endTime: '17:00',
                        daysOfWeek: [], // All days
                    },
                ],
                timezone: 'UTC',
            };

            // Create timestamp for 12:00 UTC (within range)
            const date = new Date('2024-01-15T12:00:00Z');
            const context = createEvaluationContext([], date.getTime());

            const result = evaluator.evaluateCondition(condition, context);

            expect(result.status).toBe('evaluated');
            expect(result.value).toBe(true);
        });

        it('should evaluate time outside range correctly', () => {
            const condition: TimeRangeCondition = {
                type: ConditionType.TimeRange,
                timeRanges: [
                    {
                        startTime: '09:00',
                        endTime: '17:00',
                        daysOfWeek: [],
                    },
                ],
                timezone: 'UTC',
            };

            // Create timestamp for 20:00 UTC (outside range)
            const date = new Date('2024-01-15T20:00:00Z');
            const context = createEvaluationContext([], date.getTime());

            const result = evaluator.evaluateCondition(condition, context);

            expect(result.status).toBe('evaluated');
            expect(result.value).toBe(false);
        });

        it('should handle multiple time ranges with OR logic', () => {
            const condition: TimeRangeCondition = {
                type: ConditionType.TimeRange,
                timeRanges: [
                    {
                        startTime: '09:00',
                        endTime: '11:00',
                        daysOfWeek: [],
                    },
                    {
                        startTime: '14:00',
                        endTime: '16:00',
                        daysOfWeek: [],
                    },
                ],
                timezone: 'UTC',
            };

            // Test time in first range (10:00 local time)
            const date1 = new Date();
            date1.setHours(10, 0, 0, 0);
            const context1 = createEvaluationContext([], date1.getTime());
            const result1 = evaluator.evaluateCondition(condition, context1);
            expect(result1.value).toBe(true);

            // Test time in second range (15:00 local time)
            const date2 = new Date();
            date2.setHours(15, 0, 0, 0);
            const context2 = createEvaluationContext([], date2.getTime());
            const result2 = evaluator.evaluateCondition(condition, context2);
            expect(result2.value).toBe(true);

            // Test time outside both ranges (12:00 local time)
            const date3 = new Date();
            date3.setHours(12, 0, 0, 0);
            const context3 = createEvaluationContext([], date3.getTime());
            const result3 = evaluator.evaluateCondition(condition, context3);
            expect(result3.value).toBe(false);
        });

        it('should handle day of week restrictions', () => {
            const condition: TimeRangeCondition = {
                type: ConditionType.TimeRange,
                timeRanges: [
                    {
                        startTime: '00:00',
                        endTime: '23:59',
                        daysOfWeek: [1, 2, 3, 4, 5], // Monday-Friday
                    },
                ],
                timezone: 'UTC',
            };

            // Monday (day 1)
            const monday = new Date('2024-01-15T12:00:00Z'); // Jan 15, 2024 is Monday
            const contextMonday = createEvaluationContext([], monday.getTime());
            const resultMonday = evaluator.evaluateCondition(condition, contextMonday);
            expect(resultMonday.value).toBe(true);

            // Sunday (day 0)
            const sunday = new Date('2024-01-14T12:00:00Z'); // Jan 14, 2024 is Sunday
            const contextSunday = createEvaluationContext([], sunday.getTime());
            const resultSunday = evaluator.evaluateCondition(condition, contextSunday);
            expect(resultSunday.value).toBe(false);
        });

        it('should handle time range crossing midnight', () => {
            const condition: TimeRangeCondition = {
                type: ConditionType.TimeRange,
                timeRanges: [
                    {
                        startTime: '22:00',
                        endTime: '02:00',
                        daysOfWeek: [],
                    },
                ],
                timezone: 'UTC',
            };

            // 23:00 (within range)
            const date1 = new Date();
            date1.setHours(23, 0, 0, 0);
            const context1 = createEvaluationContext([], date1.getTime());
            const result1 = evaluator.evaluateCondition(condition, context1);
            expect(result1.value).toBe(true);

            // 01:00 (within range, after midnight)
            const date2 = new Date();
            date2.setHours(1, 0, 0, 0);
            const context2 = createEvaluationContext([], date2.getTime());
            const result2 = evaluator.evaluateCondition(condition, context2);
            expect(result2.value).toBe(true);

            // 12:00 (outside range)
            const date3 = new Date();
            date3.setHours(12, 0, 0, 0);
            const context3 = createEvaluationContext([], date3.getTime());
            const result3 = evaluator.evaluateCondition(condition, context3);
            expect(result3.value).toBe(false);
        });

        it('should handle edge case at exact start time', () => {
            const condition: TimeRangeCondition = {
                type: ConditionType.TimeRange,
                timeRanges: [
                    {
                        startTime: '09:00',
                        endTime: '17:00',
                        daysOfWeek: [],
                    },
                ],
                timezone: 'UTC',
            };

            const date = new Date('2024-01-15T09:00:00Z');
            const context = createEvaluationContext([], date.getTime());

            const result = evaluator.evaluateCondition(condition, context);

            expect(result.status).toBe('evaluated');
            expect(result.value).toBe(true);
        });

        it('should handle edge case at exact end time', () => {
            const condition: TimeRangeCondition = {
                type: ConditionType.TimeRange,
                timeRanges: [
                    {
                        startTime: '09:00',
                        endTime: '17:00',
                        daysOfWeek: [],
                    },
                ],
                timezone: 'UTC',
            };

            const date = new Date();
            date.setHours(17, 0, 0, 0);
            const context = createEvaluationContext([], date.getTime());

            const result = evaluator.evaluateCondition(condition, context);

            expect(result.status).toBe('evaluated');
            expect(result.value).toBe(true);
        });
    });

    // ========================================================================
    // Performance Condition Tests
    // ========================================================================

    describe('Performance Evaluation', () => {
        it('should evaluate consecutive wins correctly', () => {
            const condition: PerformanceCondition = {
                type: ConditionType.Performance,
                botId: 'bot_123',
                metric: PerformanceMetric.ConsecutiveWins,
                operator: ComparisonOperator.GreaterThanOrEqual,
                threshold: 3,
            };

            const botStats = new Map<string, BotStats>();
            botStats.set('bot_123', createMockBotStats('bot_123', { winStreak: 5 }));

            const context = createEvaluationContext([], Date.now(), botStats);

            const result = evaluator.evaluateCondition(condition, context);

            expect(result.status).toBe('evaluated');
            expect(result.value).toBe(true);
            expect(result.metadata?.actualValue).toBe(5);
        });

        it('should evaluate consecutive losses correctly', () => {
            const condition: PerformanceCondition = {
                type: ConditionType.Performance,
                botId: 'bot_123',
                metric: PerformanceMetric.ConsecutiveLosses,
                operator: ComparisonOperator.GreaterThanOrEqual,
                threshold: 3,
            };

            const botStats = new Map<string, BotStats>();
            botStats.set('bot_123', createMockBotStats('bot_123', { lossStreak: 4 }));

            const context = createEvaluationContext([], Date.now(), botStats);

            const result = evaluator.evaluateCondition(condition, context);

            expect(result.status).toBe('evaluated');
            expect(result.value).toBe(true);
            expect(result.metadata?.actualValue).toBe(4);
        });

        it('should evaluate win rate correctly', () => {
            const condition: PerformanceCondition = {
                type: ConditionType.Performance,
                botId: 'bot_123',
                metric: PerformanceMetric.WinRate,
                operator: ComparisonOperator.GreaterThanOrEqual,
                threshold: 60,
            };

            const botStats = new Map<string, BotStats>();
            botStats.set('bot_123', createMockBotStats('bot_123', { 
                winCount: 7,
                lossCount: 3,
                winRate: 70,
            }));

            const context = createEvaluationContext([], Date.now(), botStats);

            const result = evaluator.evaluateCondition(condition, context);

            expect(result.status).toBe('evaluated');
            expect(result.value).toBe(true);
            expect(result.metadata?.actualValue).toBe(70);
        });

        it('should evaluate total profit correctly', () => {
            const condition: PerformanceCondition = {
                type: ConditionType.Performance,
                botId: 'bot_123',
                metric: PerformanceMetric.TotalProfit,
                operator: ComparisonOperator.GreaterThanOrEqual,
                threshold: 100,
            };

            const botStats = new Map<string, BotStats>();
            botStats.set('bot_123', createMockBotStats('bot_123', { totalProfit: 150 }));

            const context = createEvaluationContext([], Date.now(), botStats);

            const result = evaluator.evaluateCondition(condition, context);

            expect(result.status).toBe('evaluated');
            expect(result.value).toBe(true);
            expect(result.metadata?.actualValue).toBe(150);
        });

        it('should evaluate total loss correctly', () => {
            const condition: PerformanceCondition = {
                type: ConditionType.Performance,
                botId: 'bot_123',
                metric: PerformanceMetric.TotalLoss,
                operator: ComparisonOperator.GreaterThanOrEqual,
                threshold: 50,
            };

            const botStats = new Map<string, BotStats>();
            botStats.set('bot_123', createMockBotStats('bot_123', { totalLoss: 75 }));

            const context = createEvaluationContext([], Date.now(), botStats);

            const result = evaluator.evaluateCondition(condition, context);

            expect(result.status).toBe('evaluated');
            expect(result.value).toBe(true);
            expect(result.metadata?.actualValue).toBe(75);
        });

        it('should handle missing bot stats', () => {
            const condition: PerformanceCondition = {
                type: ConditionType.Performance,
                botId: 'bot_999',
                metric: PerformanceMetric.WinRate,
                operator: ComparisonOperator.GreaterThan,
                threshold: 50,
            };

            const botStats = new Map<string, BotStats>();
            const context = createEvaluationContext([], Date.now(), botStats);

            const result = evaluator.evaluateCondition(condition, context);

            expect(result.status).toBe('not_evaluable');
            expect(result.value).toBe(false);
            expect(result.metadata?.reason).toContain('no performance data');
        });

        it('should handle bot with no trades', () => {
            const condition: PerformanceCondition = {
                type: ConditionType.Performance,
                botId: 'bot_123',
                metric: PerformanceMetric.WinRate,
                operator: ComparisonOperator.GreaterThan,
                threshold: 50,
            };

            const botStats = new Map<string, BotStats>();
            botStats.set('bot_123', createMockBotStats('bot_123', { totalTrades: 0 }));

            const context = createEvaluationContext([], Date.now(), botStats);

            const result = evaluator.evaluateCondition(condition, context);

            expect(result.status).toBe('not_evaluable');
            expect(result.value).toBe(false);
            expect(result.metadata?.reason).toContain('no trades');
        });

        it('should handle all comparison operators for performance metrics', () => {
            const botStats = new Map<string, BotStats>();
            botStats.set('bot_123', createMockBotStats('bot_123', { winStreak: 5 }));
            const context = createEvaluationContext([], Date.now(), botStats);

            const testCases = [
                { operator: ComparisonOperator.Equal, threshold: 5, expected: true },
                { operator: ComparisonOperator.NotEqual, threshold: 5, expected: false },
                { operator: ComparisonOperator.GreaterThan, threshold: 4, expected: true },
                { operator: ComparisonOperator.LessThan, threshold: 6, expected: true },
                { operator: ComparisonOperator.GreaterThanOrEqual, threshold: 5, expected: true },
                { operator: ComparisonOperator.LessThanOrEqual, threshold: 5, expected: true },
            ];

            testCases.forEach(({ operator, threshold, expected }) => {
                const condition: PerformanceCondition = {
                    type: ConditionType.Performance,
                    botId: 'bot_123',
                    metric: PerformanceMetric.ConsecutiveWins,
                    operator,
                    threshold,
                };

                const result = evaluator.evaluateCondition(condition, context);
                expect(result.value).toBe(expected);
            });
        });
    });

    // ========================================================================
    // Signal Condition Tests
    // ========================================================================

    describe('Signal Evaluation', () => {
        it('should evaluate signal direction correctly', () => {
            const condition: SignalCondition = {
                type: ConditionType.Signal,
                provider: SignalProvider.ZeusAI,
                criteria: SignalCriteria.Direction,
                value: SignalDirection.Up,
            };

            const signalData = new Map<SignalProvider, SignalData>();
            signalData.set(SignalProvider.ZeusAI, createMockSignalData(SignalProvider.ZeusAI, {
                direction: SignalDirection.Up,
            }));

            const context = createEvaluationContext([], Date.now(), undefined, signalData);

            const result = evaluator.evaluateCondition(condition, context);

            expect(result.status).toBe('evaluated');
            expect(result.value).toBe(true);
            expect(result.metadata?.actualValue).toBe(SignalDirection.Up);
        });

        it('should evaluate signal strength correctly', () => {
            const condition: SignalCondition = {
                type: ConditionType.Signal,
                provider: SignalProvider.ZeusAI,
                criteria: SignalCriteria.Strength,
                value: 70,
                operator: ComparisonOperator.GreaterThanOrEqual,
            };

            const signalData = new Map<SignalProvider, SignalData>();
            signalData.set(SignalProvider.ZeusAI, createMockSignalData(SignalProvider.ZeusAI, {
                strength: 85,
            }));

            const context = createEvaluationContext([], Date.now(), undefined, signalData);

            const result = evaluator.evaluateCondition(condition, context);

            expect(result.status).toBe('evaluated');
            expect(result.value).toBe(true);
            expect(result.metadata?.actualValue).toBe(85);
        });

        it('should evaluate signal confidence correctly', () => {
            const condition: SignalCondition = {
                type: ConditionType.Signal,
                provider: SignalProvider.CFX,
                criteria: SignalCriteria.Confidence,
                value: 80,
                operator: ComparisonOperator.GreaterThan,
            };

            const signalData = new Map<SignalProvider, SignalData>();
            signalData.set(SignalProvider.CFX, createMockSignalData(SignalProvider.CFX, {
                confidence: 90,
            }));

            const context = createEvaluationContext([], Date.now(), undefined, signalData);

            const result = evaluator.evaluateCondition(condition, context);

            expect(result.status).toBe('evaluated');
            expect(result.value).toBe(true);
            expect(result.metadata?.actualValue).toBe(90);
        });

        it('should handle missing signal data', () => {
            const condition: SignalCondition = {
                type: ConditionType.Signal,
                provider: SignalProvider.ZeusAI,
                criteria: SignalCriteria.Direction,
                value: SignalDirection.Up,
            };

            const signalData = new Map<SignalProvider, SignalData>();
            const context = createEvaluationContext([], Date.now(), undefined, signalData);

            const result = evaluator.evaluateCondition(condition, context);

            expect(result.status).toBe('not_evaluable');
            expect(result.value).toBe(false);
            expect(result.metadata?.reason).toContain('no signal data');
        });

        it('should handle stale signal data', () => {
            const condition: SignalCondition = {
                type: ConditionType.Signal,
                provider: SignalProvider.ZeusAI,
                criteria: SignalCriteria.Direction,
                value: SignalDirection.Up,
            };

            const signalData = new Map<SignalProvider, SignalData>();
            signalData.set(SignalProvider.ZeusAI, createMockSignalData(SignalProvider.ZeusAI, {
                isStale: true,
            }));

            const context = createEvaluationContext([], Date.now(), undefined, signalData);

            const result = evaluator.evaluateCondition(condition, context);

            expect(result.status).toBe('not_evaluable');
            expect(result.value).toBe(false);
            expect(result.metadata?.reason).toContain('stale');
        });

        it('should handle wrong signal direction', () => {
            const condition: SignalCondition = {
                type: ConditionType.Signal,
                provider: SignalProvider.ZeusAI,
                criteria: SignalCriteria.Direction,
                value: SignalDirection.Up,
            };

            const signalData = new Map<SignalProvider, SignalData>();
            signalData.set(SignalProvider.ZeusAI, createMockSignalData(SignalProvider.ZeusAI, {
                direction: SignalDirection.Down,
            }));

            const context = createEvaluationContext([], Date.now(), undefined, signalData);

            const result = evaluator.evaluateCondition(condition, context);

            expect(result.status).toBe('evaluated');
            expect(result.value).toBe(false);
        });

        it('should require operator for strength comparison', () => {
            const condition: SignalCondition = {
                type: ConditionType.Signal,
                provider: SignalProvider.ZeusAI,
                criteria: SignalCriteria.Strength,
                value: 70,
                // Missing operator
            };

            const signalData = new Map<SignalProvider, SignalData>();
            signalData.set(SignalProvider.ZeusAI, createMockSignalData(SignalProvider.ZeusAI, {
                strength: 85,
            }));

            const context = createEvaluationContext([], Date.now(), undefined, signalData);

            const result = evaluator.evaluateCondition(condition, context);

            expect(result.status).toBe('error');
            expect(result.error).toContain('Operator required');
        });

        it('should handle different signal providers', () => {
            const conditionZeus: SignalCondition = {
                type: ConditionType.Signal,
                provider: SignalProvider.ZeusAI,
                criteria: SignalCriteria.Direction,
                value: SignalDirection.Up,
            };

            const conditionCFX: SignalCondition = {
                type: ConditionType.Signal,
                provider: SignalProvider.CFX,
                criteria: SignalCriteria.Direction,
                value: SignalDirection.Down,
            };

            const signalData = new Map<SignalProvider, SignalData>();
            signalData.set(SignalProvider.ZeusAI, createMockSignalData(SignalProvider.ZeusAI, {
                direction: SignalDirection.Up,
            }));
            signalData.set(SignalProvider.CFX, createMockSignalData(SignalProvider.CFX, {
                direction: SignalDirection.Down,
            }));

            const context = createEvaluationContext([], Date.now(), undefined, signalData);

            const resultZeus = evaluator.evaluateCondition(conditionZeus, context);
            const resultCFX = evaluator.evaluateCondition(conditionCFX, context);

            expect(resultZeus.value).toBe(true);
            expect(resultCFX.value).toBe(true);
        });
    });

    // ========================================================================
    // Strategy Evaluation Tests (Integration)
    // ========================================================================

    describe('Strategy Evaluation', () => {
        it('should evaluate strategy with AND logic correctly', () => {
            const strategy = createMockStrategy({
                conditions: [
                    {
                        type: ConditionType.DigitFrequency,
                        digits: [5],
                        tickCount: 10,
                        operator: ComparisonOperator.GreaterThan,
                        threshold: 2,
                    },
                    {
                        type: ConditionType.Volatility,
                        tickCount: 10,
                        operator: ComparisonOperator.LessThan,
                        threshold: 5,
                    },
                ],
                logicOperator: LogicOperator.AND,
            });

            // Create ticks that satisfy both conditions
            const ticks = createTicksWithDigits([5, 5, 5, 2, 8, 1, 3, 9, 0, 4]); // 3 fives, low volatility
            const context = createEvaluationContext(ticks);

            const result = evaluator.evaluateStrategy(strategy, context);

            expect(result.triggered).toBe(true);
            expect(result.conditionResults).toHaveLength(2);
            expect(result.conditionResults![0].value).toBe(true);
            expect(result.conditionResults![1].value).toBe(true);
        });

        it('should evaluate strategy with OR logic correctly', () => {
            const strategy = createMockStrategy({
                conditions: [
                    {
                        type: ConditionType.DigitFrequency,
                        digits: [9],
                        tickCount: 10,
                        operator: ComparisonOperator.GreaterThan,
                        threshold: 5,
                    },
                    {
                        type: ConditionType.Volatility,
                        tickCount: 10,
                        operator: ComparisonOperator.LessThan,
                        threshold: 5,
                    },
                ],
                logicOperator: LogicOperator.OR,
            });

            // Create ticks that satisfy only volatility condition
            const ticks = createTicksWithDigits([1, 2, 3, 4, 5, 6, 7, 8, 0, 1]); // No 9s, low volatility
            const context = createEvaluationContext(ticks);

            const result = evaluator.evaluateStrategy(strategy, context);

            expect(result.triggered).toBe(true);
            expect(result.conditionResults![0].value).toBe(false);
            expect(result.conditionResults![1].value).toBe(true);
        });

        it('should not trigger when AND logic has one false condition', () => {
            const strategy = createMockStrategy({
                conditions: [
                    {
                        type: ConditionType.DigitFrequency,
                        digits: [5],
                        tickCount: 10,
                        operator: ComparisonOperator.GreaterThan,
                        threshold: 2,
                    },
                    {
                        type: ConditionType.Volatility,
                        tickCount: 10,
                        operator: ComparisonOperator.GreaterThan,
                        threshold: 100, // Impossible threshold
                    },
                ],
                logicOperator: LogicOperator.AND,
            });

            const ticks = createTicksWithDigits([5, 5, 5, 2, 8, 1, 3, 9, 0, 4]);
            const context = createEvaluationContext(ticks);

            const result = evaluator.evaluateStrategy(strategy, context);

            expect(result.triggered).toBe(false);
        });

        it('should handle cooldown period correctly', () => {
            const strategy = createMockStrategy({
                cooldownPeriod: 60, // 60 seconds
                lastTriggeredAt: Date.now() - 30000, // 30 seconds ago
                conditions: [
                    {
                        type: ConditionType.DigitFrequency,
                        digits: [5],
                        tickCount: 10,
                        operator: ComparisonOperator.GreaterThan,
                        threshold: 0,
                    },
                ],
            });

            const ticks = createTicksWithDigits([5, 5, 5, 5, 5, 5, 5, 5, 5, 5]);
            const context = createEvaluationContext(ticks);

            const result = evaluator.evaluateStrategy(strategy, context);

            expect(result.triggered).toBe(false);
            expect(result.reason).toContain('cooldown');
        });

        it('should trigger after cooldown expires', () => {
            const strategy = createMockStrategy({
                cooldownPeriod: 60,
                lastTriggeredAt: Date.now() - 70000, // 70 seconds ago
                conditions: [
                    {
                        type: ConditionType.DigitFrequency,
                        digits: [5],
                        tickCount: 10,
                        operator: ComparisonOperator.GreaterThan,
                        threshold: 0,
                    },
                ],
            });

            const ticks = createTicksWithDigits([5, 5, 5, 5, 5, 5, 5, 5, 5, 5]);
            const context = createEvaluationContext(ticks);

            const result = evaluator.evaluateStrategy(strategy, context);

            expect(result.triggered).toBe(true);
        });

        it('should not trigger when condition is not evaluable', () => {
            const strategy = createMockStrategy({
                conditions: [
                    {
                        type: ConditionType.DigitFrequency,
                        digits: [5],
                        tickCount: 100, // Need 100 ticks
                        operator: ComparisonOperator.GreaterThan,
                        threshold: 0,
                    },
                ],
            });

            const ticks = createTicksWithDigits([5, 5, 5]); // Only 3 ticks
            const context = createEvaluationContext(ticks);

            const result = evaluator.evaluateStrategy(strategy, context);

            expect(result.triggered).toBe(false);
            expect(result.reason).toContain('insufficient_data');
        });

        it('should handle evaluation errors gracefully', () => {
            const strategy = createMockStrategy({
                conditions: [
                    {
                        type: 'invalid_type' as any,
                    } as any,
                ],
            });

            const context = createEvaluationContext([]);

            const result = evaluator.evaluateStrategy(strategy, context);

            expect(result.triggered).toBe(false);
            expect(result.reason).toContain('evaluation_error');
        });

        it('should evaluate multiple strategies efficiently', () => {
            const strategies = Array.from({ length: 10 }, (_, i) =>
                createMockStrategy({
                    id: `strategy_${i}`,
                    conditions: [
                        {
                            type: ConditionType.DigitFrequency,
                            digits: [i],
                            tickCount: 10,
                            operator: ComparisonOperator.GreaterThan,
                            threshold: 0,
                        },
                    ],
                })
            );

            const ticks = createTicksWithDigits([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
            const context = createEvaluationContext(ticks);

            const startTime = performance.now();
            const results = evaluator.evaluateAllStrategies(strategies, context);
            const evaluationTime = performance.now() - startTime;

            expect(results.size).toBe(10);
            expect(evaluationTime).toBeLessThan(1000); // Should complete within 1 second
        });

        it('should skip inactive strategies', () => {
            const strategy = createMockStrategy({
                isActive: false,
                conditions: [
                    {
                        type: ConditionType.DigitFrequency,
                        digits: [5],
                        tickCount: 10,
                        operator: ComparisonOperator.GreaterThan,
                        threshold: 0,
                    },
                ],
            });

            const ticks = createTicksWithDigits([5, 5, 5, 5, 5, 5, 5, 5, 5, 5]);
            const context = createEvaluationContext(ticks);

            const results = evaluator.evaluateAllStrategies([strategy], context);

            expect(results.size).toBe(0);
        });

        it('should skip paused strategies', () => {
            const strategy = createMockStrategy({
                isPaused: true,
                conditions: [
                    {
                        type: ConditionType.DigitFrequency,
                        digits: [5],
                        tickCount: 10,
                        operator: ComparisonOperator.GreaterThan,
                        threshold: 0,
                    },
                ],
            });

            const ticks = createTicksWithDigits([5, 5, 5, 5, 5, 5, 5, 5, 5, 5]);
            const context = createEvaluationContext(ticks);

            const results = evaluator.evaluateAllStrategies([strategy], context);

            expect(results.size).toBe(0);
        });
    });
});


// ============================================================================
// Helper Functions
// ============================================================================

/**
 * Create a mock tick for testing
 */
function createMockTick(symbol: string, quote: number, epoch?: number): Tick {
    return {
        epoch: epoch || Math.floor(Date.now() / 1000),
        quote,
        symbol,
        ask: quote + 0.001,
        bid: quote - 0.001,
        id: `tick_${Date.now()}_${Math.random()}`,
        pip_size: 2,
    };
}

/**
 * Create ticks with specific last digits
 */
function createTicksWithDigits(digits: number[]): Tick[] {
    return digits.map((digit, index) => {
        // Create price that ends with the specified digit
        const price = 100 + index + (digit / 10);
        return createMockTick('R_100', price);
    });
}

/**
 * Create evaluation context for testing
 */
function createEvaluationContext(
    ticks: Tick[],
    timestamp?: number,
    botStats?: Map<string, BotStats>,
    signalData?: Map<SignalProvider, SignalData>
): EvaluationContext {
    const currentTick = ticks.length > 0 ? ticks[ticks.length - 1] : createMockTick('R_100', 100);
    
    return {
        currentTick,
        tickBuffer: ticks,
        botStats,
        signalData,
        timestamp: timestamp || Date.now(),
    };
}

/**
 * Create mock bot statistics
 */
function createMockBotStats(
    botId: string,
    overrides?: Partial<BotStats>
): BotStats {
    return {
        botId,
        winCount: 0,
        lossCount: 0,
        winStreak: 0,
        lossStreak: 0,
        totalProfit: 0,
        totalLoss: 0,
        winRate: 0,
        totalTrades: 10,
        ...overrides,
    };
}

/**
 * Create mock signal data
 */
function createMockSignalData(
    provider: SignalProvider,
    overrides?: Partial<SignalData>
): SignalData {
    return {
        provider,
        direction: SignalDirection.Up,
        strength: 75,
        confidence: 80,
        timestamp: Date.now(),
        isStale: false,
        ...overrides,
    };
}

/**
 * Create mock strategy for testing
 */
function createMockStrategy(overrides?: Partial<Strategy>): Strategy {
    return {
        id: 'strategy_test',
        name: 'Test Strategy',
        description: 'Test strategy for unit tests',
        symbol: 'R_100',
        conditions: [],
        logicOperator: LogicOperator.AND,
        action: {
            type: ActionType.StartBot,
            botId: 'bot_123',
            stake: 10,
        },
        priority: StrategyPriority.Medium,
        cooldownPeriod: 5,
        isActive: true,
        isPaused: false,
        createdAt: Date.now(),
        updatedAt: Date.now(),
        ...overrides,
    };
}
