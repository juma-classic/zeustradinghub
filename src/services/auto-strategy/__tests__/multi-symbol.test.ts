/**
 * Multi-Symbol Strategy Support Tests
 * 
 * Tests for Requirements 38.1-38.5:
 * - Multiple symbol specification in strategies
 * - Multi-symbol subscription in MarketDataMonitor
 * - Symbol-specific condition evaluation
 * - Cross-symbol condition comparison
 * - Bot starting with triggering symbol
 */

import {
    Strategy,
    LogicOperator,
    StrategyPriority,
    ActionType,
    ConditionType,
    ComparisonOperator,
    Tick,
    EvaluationContext,
    DigitFrequencyCondition,
    VolatilityCondition,
} from '../../../types/auto-strategy.types';
import { StrategyEvaluator } from '../strategy-evaluator.service';
import { MarketDataMonitor } from '../market-data-monitor.service';
import { BotController } from '../bot-controller.service';

describe('Multi-Symbol Strategy Support', () => {
    let evaluator: StrategyEvaluator;
    let monitor: MarketDataMonitor;
    let botController: BotController;

    beforeEach(() => {
        evaluator = new StrategyEvaluator();
        monitor = new MarketDataMonitor();
        botController = new BotController();
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    describe('Requirement 38.1: Multiple Symbol Specification', () => {
        it('should allow strategies to specify multiple symbols', () => {
            const strategy: Strategy = {
                id: 'test-1',
                name: 'Multi-Symbol Test',
                symbol: 'R_100',
                symbols: ['R_100', 'R_50', 'R_25'],
                conditions: [],
                logicOperator: LogicOperator.AND,
                action: {
                    type: ActionType.StartBot,
                    botId: 'bot-1',
                    stake: 1,
                },
                priority: StrategyPriority.Medium,
                cooldownPeriod: 60,
                isActive: true,
                isPaused: false,
                createdAt: Date.now(),
                updatedAt: Date.now(),
            };

            expect(strategy.symbols).toBeDefined();
            expect(strategy.symbols).toHaveLength(3);
            expect(strategy.symbols).toContain('R_100');
            expect(strategy.symbols).toContain('R_50');
            expect(strategy.symbols).toContain('R_25');
        });

        it('should maintain backward compatibility with single symbol', () => {
            const strategy: Strategy = {
                id: 'test-2',
                name: 'Single Symbol Test',
                symbol: 'R_100',
                conditions: [],
                logicOperator: LogicOperator.AND,
                action: {
                    type: ActionType.StartBot,
                    botId: 'bot-1',
                    stake: 1,
                },
                priority: StrategyPriority.Medium,
                cooldownPeriod: 60,
                isActive: true,
                isPaused: false,
                createdAt: Date.now(),
                updatedAt: Date.now(),
            };

            expect(strategy.symbol).toBe('R_100');
            expect(strategy.symbols).toBeUndefined();
        });
    });

    describe('Requirement 38.2: Multi-Symbol Subscription', () => {
        it('should subscribe to multiple symbols', async () => {
            const symbols = ['R_100', 'R_50', 'R_25'];
            
            // Mock WebSocket manager
            const mockWsManager = {
                send: jest.fn().mockReturnValue(true),
                setCallbacks: jest.fn(),
                connect: jest.fn(),
            };
            
            (monitor as any).wsManager = mockWsManager;
            (monitor as any).isInitialized = true;
            (monitor as any).connectionStatus = 'connected';

            await monitor.subscribeToSymbols(symbols);

            expect(mockWsManager.send).toHaveBeenCalledTimes(3);
            expect(mockWsManager.send).toHaveBeenCalledWith({ ticks: 'R_100', subscribe: 1 });
            expect(mockWsManager.send).toHaveBeenCalledWith({ ticks: 'R_50', subscribe: 1 });
            expect(mockWsManager.send).toHaveBeenCalledWith({ ticks: 'R_25', subscribe: 1 });
        });

        it('should handle subscription failures gracefully', async () => {
            const symbols = ['R_100', 'INVALID', 'R_50'];
            
            const mockWsManager = {
                send: jest.fn((req) => {
                    // Fail for INVALID symbol
                    return req.ticks !== 'INVALID';
                }),
                setCallbacks: jest.fn(),
                connect: jest.fn(),
            };
            
            (monitor as any).wsManager = mockWsManager;
            (monitor as any).isInitialized = true;
            (monitor as any).connectionStatus = 'connected';

            // Should not throw even if one subscription fails
            await expect(monitor.subscribeToSymbols(symbols)).resolves.not.toThrow();
        });
    });

    describe('Requirement 38.3: Symbol-Specific Condition Evaluation', () => {
        it('should evaluate digit frequency condition for specific symbol', () => {
            const condition: DigitFrequencyCondition = {
                type: ConditionType.DigitFrequency,
                symbol: 'R_50',
                digits: [0, 1, 2],
                tickCount: 10,
                operator: ComparisonOperator.GreaterThan,
                threshold: 5,
            };

            const r100Ticks: Tick[] = Array.from({ length: 10 }, (_, i) => ({
                epoch: Date.now() - (10 - i) * 1000,
                quote: 100.0 + i,
                symbol: 'R_100',
                ask: 100.0 + i,
                bid: 100.0 + i,
                id: `tick-r100-${i}`,
                pip_size: 2,
            }));

            const r50Ticks: Tick[] = Array.from({ length: 10 }, (_, i) => ({
                epoch: Date.now() - (10 - i) * 1000,
                quote: 50.0 + i,
                symbol: 'R_50',
                ask: 50.0 + i,
                bid: 50.0 + i,
                id: `tick-r50-${i}`,
                pip_size: 2,
            }));

            const context: EvaluationContext = {
                currentTick: r100Ticks[r100Ticks.length - 1],
                tickBuffer: r100Ticks,
                tickBuffers: new Map([
                    ['R_100', r100Ticks],
                    ['R_50', r50Ticks],
                ]),
                symbol: 'R_100',
                timestamp: Date.now(),
            };

            const result = evaluator.evaluateCondition(condition, context);

            expect(result.status).toBe('evaluated');
            // Should use R_50 ticks, not R_100 ticks
        });

        it('should evaluate volatility condition for specific symbol', () => {
            const condition: VolatilityCondition = {
                type: ConditionType.Volatility,
                symbol: 'R_25',
                tickCount: 10,
                operator: ComparisonOperator.GreaterThan,
                threshold: 0.5,
            };

            const r100Ticks: Tick[] = Array.from({ length: 10 }, (_, i) => ({
                epoch: Date.now() - (10 - i) * 1000,
                quote: 100.0,
                symbol: 'R_100',
                ask: 100.0,
                bid: 100.0,
                id: `tick-r100-${i}`,
                pip_size: 2,
            }));

            const r25Ticks: Tick[] = Array.from({ length: 10 }, (_, i) => ({
                epoch: Date.now() - (10 - i) * 1000,
                quote: 25.0 + Math.random() * 2,
                symbol: 'R_25',
                ask: 25.0 + Math.random() * 2,
                bid: 25.0 + Math.random() * 2,
                id: `tick-r25-${i}`,
                pip_size: 2,
            }));

            const context: EvaluationContext = {
                currentTick: r100Ticks[r100Ticks.length - 1],
                tickBuffer: r100Ticks,
                tickBuffers: new Map([
                    ['R_100', r100Ticks],
                    ['R_25', r25Ticks],
                ]),
                symbol: 'R_100',
                timestamp: Date.now(),
            };

            const result = evaluator.evaluateCondition(condition, context);

            expect(result.status).toBe('evaluated');
            // Should use R_25 ticks, not R_100 ticks
        });

        it('should return not_evaluable when symbol data is missing', () => {
            const condition: DigitFrequencyCondition = {
                type: ConditionType.DigitFrequency,
                symbol: 'R_75',
                digits: [0, 1, 2],
                tickCount: 10,
                operator: ComparisonOperator.GreaterThan,
                threshold: 5,
            };

            const r100Ticks: Tick[] = Array.from({ length: 10 }, (_, i) => ({
                epoch: Date.now() - (10 - i) * 1000,
                quote: 100.0 + i,
                symbol: 'R_100',
                ask: 100.0 + i,
                bid: 100.0 + i,
                id: `tick-r100-${i}`,
                pip_size: 2,
            }));

            const context: EvaluationContext = {
                currentTick: r100Ticks[r100Ticks.length - 1],
                tickBuffer: r100Ticks,
                tickBuffers: new Map([
                    ['R_100', r100Ticks],
                ]),
                symbol: 'R_100',
                timestamp: Date.now(),
            };

            const result = evaluator.evaluateCondition(condition, context);

            expect(result.status).toBe('not_evaluable');
            expect(result.metadata?.reason).toContain('no tick data for symbol R_75');
        });
    });

    describe('Requirement 38.4: Cross-Symbol Condition Comparison', () => {
        it('should compare digit frequency across symbols', () => {
            const condition: DigitFrequencyCondition = {
                type: ConditionType.DigitFrequency,
                symbol: 'R_100',
                digits: [0, 1, 2],
                tickCount: 10,
                operator: ComparisonOperator.GreaterThan,
                threshold: 5,
                crossSymbol: {
                    compareSymbol: 'R_50',
                    operator: ComparisonOperator.GreaterThan,
                },
            };

            // R_100 has 7 occurrences of digits 0,1,2
            const r100Ticks: Tick[] = [
                { epoch: 1, quote: 100.0, symbol: 'R_100', ask: 100.0, bid: 100.0, id: '1', pip_size: 2 },
                { epoch: 2, quote: 100.1, symbol: 'R_100', ask: 100.1, bid: 100.1, id: '2', pip_size: 2 },
                { epoch: 3, quote: 100.2, symbol: 'R_100', ask: 100.2, bid: 100.2, id: '3', pip_size: 2 },
                { epoch: 4, quote: 100.0, symbol: 'R_100', ask: 100.0, bid: 100.0, id: '4', pip_size: 2 },
                { epoch: 5, quote: 100.1, symbol: 'R_100', ask: 100.1, bid: 100.1, id: '5', pip_size: 2 },
                { epoch: 6, quote: 100.2, symbol: 'R_100', ask: 100.2, bid: 100.2, id: '6', pip_size: 2 },
                { epoch: 7, quote: 100.0, symbol: 'R_100', ask: 100.0, bid: 100.0, id: '7', pip_size: 2 },
                { epoch: 8, quote: 100.5, symbol: 'R_100', ask: 100.5, bid: 100.5, id: '8', pip_size: 2 },
                { epoch: 9, quote: 100.6, symbol: 'R_100', ask: 100.6, bid: 100.6, id: '9', pip_size: 2 },
                { epoch: 10, quote: 100.7, symbol: 'R_100', ask: 100.7, bid: 100.7, id: '10', pip_size: 2 },
            ];

            // R_50 has 4 occurrences of digits 0,1,2
            const r50Ticks: Tick[] = [
                { epoch: 1, quote: 50.0, symbol: 'R_50', ask: 50.0, bid: 50.0, id: '1', pip_size: 2 },
                { epoch: 2, quote: 50.1, symbol: 'R_50', ask: 50.1, bid: 50.1, id: '2', pip_size: 2 },
                { epoch: 3, quote: 50.2, symbol: 'R_50', ask: 50.2, bid: 50.2, id: '3', pip_size: 2 },
                { epoch: 4, quote: 50.0, symbol: 'R_50', ask: 50.0, bid: 50.0, id: '4', pip_size: 2 },
                { epoch: 5, quote: 50.5, symbol: 'R_50', ask: 50.5, bid: 50.5, id: '5', pip_size: 2 },
                { epoch: 6, quote: 50.6, symbol: 'R_50', ask: 50.6, bid: 50.6, id: '6', pip_size: 2 },
                { epoch: 7, quote: 50.7, symbol: 'R_50', ask: 50.7, bid: 50.7, id: '7', pip_size: 2 },
                { epoch: 8, quote: 50.8, symbol: 'R_50', ask: 50.8, bid: 50.8, id: '8', pip_size: 2 },
                { epoch: 9, quote: 50.9, symbol: 'R_50', ask: 50.9, bid: 50.9, id: '9', pip_size: 2 },
                { epoch: 10, quote: 50.3, symbol: 'R_50', ask: 50.3, bid: 50.3, id: '10', pip_size: 2 },
            ];

            const context: EvaluationContext = {
                currentTick: r100Ticks[r100Ticks.length - 1],
                tickBuffer: r100Ticks,
                tickBuffers: new Map([
                    ['R_100', r100Ticks],
                    ['R_50', r50Ticks],
                ]),
                symbol: 'R_100',
                timestamp: Date.now(),
            };

            const result = evaluator.evaluateCondition(condition, context);

            expect(result.status).toBe('evaluated');
            expect(result.value).toBe(true); // 7 > 4
            expect(result.metadata?.crossSymbol).toBe('R_50');
        });

        it('should compare volatility across symbols', () => {
            const condition: VolatilityCondition = {
                type: ConditionType.Volatility,
                symbol: 'R_100',
                tickCount: 10,
                operator: ComparisonOperator.GreaterThan,
                threshold: 0.5,
                crossSymbol: {
                    compareSymbol: 'R_50',
                    operator: ComparisonOperator.LessThan,
                },
            };

            // R_100 has low volatility
            const r100Ticks: Tick[] = Array.from({ length: 10 }, (_, i) => ({
                epoch: i + 1,
                quote: 100.0 + i * 0.1,
                symbol: 'R_100',
                ask: 100.0 + i * 0.1,
                bid: 100.0 + i * 0.1,
                id: `${i + 1}`,
                pip_size: 2,
            }));

            // R_50 has high volatility
            const r50Ticks: Tick[] = Array.from({ length: 10 }, (_, i) => ({
                epoch: i + 1,
                quote: 50.0 + (i % 2 === 0 ? 5 : -5),
                symbol: 'R_50',
                ask: 50.0 + (i % 2 === 0 ? 5 : -5),
                bid: 50.0 + (i % 2 === 0 ? 5 : -5),
                id: `${i + 1}`,
                pip_size: 2,
            }));

            const context: EvaluationContext = {
                currentTick: r100Ticks[r100Ticks.length - 1],
                tickBuffer: r100Ticks,
                tickBuffers: new Map([
                    ['R_100', r100Ticks],
                    ['R_50', r50Ticks],
                ]),
                symbol: 'R_100',
                timestamp: Date.now(),
            };

            const result = evaluator.evaluateCondition(condition, context);

            expect(result.status).toBe('evaluated');
            expect(result.metadata?.crossSymbol).toBe('R_50');
        });
    });

    describe('Requirement 38.5: Bot Starting with Triggering Symbol', () => {
        it('should include symbol in bot start configuration', async () => {
            const config = {
                botId: 'bot-1',
                strategyId: 'strategy-1',
                stake: 1,
                priority: 1,
                symbol: 'R_50',
            };

            // Mock the necessary methods
            (botController as any).validateBotExists = jest.fn().mockResolvedValue(true);
            (botController as any).validateAccountBalance = jest.fn().mockResolvedValue(true);
            (botController as any).executeStartBot = jest.fn().mockResolvedValue(true);

            const result = await botController.startBot(config);

            expect(result.success).toBe(true);
            
            const runningBots = botController.getRunningBots();
            expect(runningBots).toHaveLength(1);
            expect(runningBots[0].symbol).toBe('R_50');
        });

        it('should log symbol in audit trail', async () => {
            const auditEntries: any[] = [];
            botController.setAuditLogCallback((entry) => {
                auditEntries.push(entry);
            });

            const config = {
                botId: 'bot-2',
                strategyId: 'strategy-2',
                stake: 1,
                priority: 1,
                symbol: 'R_25',
            };

            (botController as any).validateBotExists = jest.fn().mockResolvedValue(true);
            (botController as any).validateAccountBalance = jest.fn().mockResolvedValue(true);
            (botController as any).executeStartBot = jest.fn().mockResolvedValue(true);

            await botController.startBot(config);

            expect(auditEntries).toHaveLength(1);
            expect(auditEntries[0].type).toBe('bot_started');
            expect(auditEntries[0].symbol).toBe('R_25');
        });

        it('should handle bot start without symbol (backward compatibility)', async () => {
            const config = {
                botId: 'bot-3',
                strategyId: 'strategy-3',
                stake: 1,
                priority: 1,
            };

            (botController as any).validateBotExists = jest.fn().mockResolvedValue(true);
            (botController as any).validateAccountBalance = jest.fn().mockResolvedValue(true);
            (botController as any).executeStartBot = jest.fn().mockResolvedValue(true);

            const result = await botController.startBot(config);

            expect(result.success).toBe(true);
            
            const runningBots = botController.getRunningBots();
            expect(runningBots).toHaveLength(1);
            expect(runningBots[0].symbol).toBeUndefined();
        });
    });
});
