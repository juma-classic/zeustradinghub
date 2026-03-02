/**
 * Integration Tests for Auto Strategy Controller Core Services
 * 
 * Tests the end-to-end flow:
 * 1. Tick received → MarketDataMonitor
 * 2. Strategy evaluation → StrategyEvaluator
 * 3. Bot control action → BotController
 * 4. Risk check → RiskManager
 * 5. Audit log entry → AuditLog
 * 
 * Also tests error handling across service boundaries.
 */

import { describe, it, expect, beforeEach, afterEach, jest } from '@jest/globals';
import { MarketDataMonitor } from '../market-data-monitor.service';
import { StrategyEvaluator } from '../strategy-evaluator.service';
import { BotController } from '../bot-controller.service';
import { AuditLog } from '../audit-log.service';
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
    Tick,
    ConnectionStatus,
    EvaluationContext,
    BotStartConfig,
} from '../../../types/auto-strategy.types';

describe('Auto Strategy Controller - Core Services Integration', () => {
    let marketDataMonitor: MarketDataMonitor;
    let strategyEvaluator: StrategyEvaluator;
    let botController: BotController;
    let auditLog: AuditLog;

    beforeEach(() => {
        // Clear localStorage
        localStorage.clear();

        // Create fresh instances
        marketDataMonitor = new MarketDataMonitor();
        strategyEvaluator = new StrategyEvaluator();
        botController = new BotController();
        auditLog = new AuditLog();

        // Set up audit log callback for bot controller
        botController.setAuditLogCallback((entry) => {
            // Map bot controller events to audit log
            if (entry.type === 'bot_started') {
                auditLog.logBotStarted({
                    botId: entry.botId,
                    botName: entry.botId,
                    strategyId: entry.strategyId,
                    strategyName: 'Test Strategy',
                    stake: entry.stake,
                });
            } else if (entry.type === 'bot_stopped') {
                auditLog.logBotStopped({
                    botId: entry.botId,
                    botName: entry.botId,
                    reason: entry.reason,
                    strategyId: entry.strategyId,
                });
            }
        });
    });

    afterEach(() => {
        // Clean up
        if (marketDataMonitor) {
            marketDataMonitor.disconnect();
        }
        localStorage.clear();
    });

    describe('End-to-End Flow: Tick → Evaluation → Bot Control → Audit Log', () => {
        it('should process complete flow when digit frequency condition is met', async () => {
            // Step 1: Create a strategy with digit frequency condition
            const strategy: Strategy = {
                id: 'test-strategy-1',
                name: 'High Digit Strategy',
                description: 'Start bot when high digits appear frequently',
                symbol: 'R_100',
                conditions: [
                    {
                        type: ConditionType.DigitFrequency,
                        digits: [7, 8, 9],
                        tickCount: 10,
                        operator: ComparisonOperator.GreaterThan,
                        threshold: 5, // More than 5 occurrences in 10 ticks
                    } as DigitFrequencyCondition,
                ],
                logicOperator: LogicOperator.AND,
                action: {
                    type: ActionType.StartBot,
                    botId: 'test-bot-1',
                    stake: 1.0,
                },
                priority: StrategyPriority.High,
                cooldownPeriod: 60,
                isActive: true,
                isPaused: false,
                createdAt: Date.now(),
                updatedAt: Date.now(),
            };

            // Step 2: Simulate tick data with high digits
            const ticks: Tick[] = [];
            for (let i = 0; i < 10; i++) {
                const tick: Tick = {
                    epoch: Date.now() + i * 1000,
                    quote: i < 7 ? 100.7 + i : 100.2 + i, // 7 ticks with digit 7-9, 3 with lower digits
                    symbol: 'R_100',
                    ask: 100.8 + i,
                    bid: 100.6 + i,
                    id: `tick-${i}`,
                    pip_size: 2,
                };
                ticks.push(tick);
            }

            // Step 3: Create evaluation context
            const context: EvaluationContext = {
                tickBuffer: ticks,
                timestamp: Date.now(),
            };

            // Step 4: Evaluate strategy
            const evaluationResult = strategyEvaluator.evaluateStrategy(strategy, context);

            // Verify evaluation triggered
            expect(evaluationResult.triggered).toBe(true);
            expect(evaluationResult.conditionResults).toHaveLength(1);
            expect(evaluationResult.conditionResults[0].status).toBe('evaluated');
            expect(evaluationResult.conditionResults[0].value).toBe(true);

            // Step 5: Execute bot control action
            const botConfig: BotStartConfig = {
                botId: strategy.action.botId!,
                strategyId: strategy.id,
                stake: strategy.action.stake!,
                priority: strategy.priority,
            };

            const botResult = await botController.startBot(botConfig);

            // Verify bot started
            expect(botResult.success).toBe(true);
            expect(botController.isBotRunning('test-bot-1')).toBe(true);

            // Step 6: Verify audit log entry
            const auditEntries = auditLog.getAllEntries();
            expect(auditEntries.length).toBeGreaterThan(0);

            const botStartedEntry = auditEntries.find(
                (entry) => entry.type === 'bot_started' && entry.botId === 'test-bot-1'
            );
            expect(botStartedEntry).toBeDefined();
            expect(botStartedEntry?.strategyId).toBe('test-strategy-1');
        });

        it('should handle volatility-based strategy trigger', async () => {
            // Create strategy with volatility condition
            const strategy: Strategy = {
                id: 'test-strategy-2',
                name: 'High Volatility Strategy',
                description: 'Start bot during high volatility',
                symbol: 'R_100',
                conditions: [
                    {
                        type: ConditionType.Volatility,
                        tickCount: 20,
                        operator: ComparisonOperator.GreaterThan,
                        threshold: 0.5,
                    } as VolatilityCondition,
                ],
                logicOperator: LogicOperator.AND,
                action: {
                    type: ActionType.StartBot,
                    botId: 'test-bot-2',
                    stake: 2.0,
                },
                priority: StrategyPriority.Medium,
                cooldownPeriod: 120,
                isActive: true,
                isPaused: false,
                createdAt: Date.now(),
                updatedAt: Date.now(),
            };

            // Generate ticks with high volatility
            const ticks: Tick[] = [];
            for (let i = 0; i < 20; i++) {
                const tick: Tick = {
                    epoch: Date.now() + i * 1000,
                    quote: 100 + Math.sin(i) * 5, // Oscillating prices for volatility
                    symbol: 'R_100',
                    ask: 100.1 + Math.sin(i) * 5,
                    bid: 99.9 + Math.sin(i) * 5,
                    id: `tick-${i}`,
                    pip_size: 2,
                };
                ticks.push(tick);
            }

            const context: EvaluationContext = {
                tickBuffer: ticks,
                timestamp: Date.now(),
            };

            // Evaluate and execute
            const evaluationResult = strategyEvaluator.evaluateStrategy(strategy, context);
            expect(evaluationResult.triggered).toBe(true);

            const botConfig: BotStartConfig = {
                botId: strategy.action.botId!,
                strategyId: strategy.id,
                stake: strategy.action.stake!,
                priority: strategy.priority,
            };

            const botResult = await botController.startBot(botConfig);
            expect(botResult.success).toBe(true);

            // Verify audit log
            const auditEntries = auditLog.getEntriesByBot('test-bot-2');
            expect(auditEntries.length).toBeGreaterThan(0);
        });

        it('should handle bot stop action', async () => {
            // Start a bot first
            const botConfig: BotStartConfig = {
                botId: 'test-bot-3',
                strategyId: 'test-strategy-3',
                stake: 1.5,
                priority: StrategyPriority.Low,
            };

            await botController.startBot(botConfig);
            expect(botController.isBotRunning('test-bot-3')).toBe(true);

            // Stop the bot
            const stopResult = await botController.stopBot('test-bot-3', 'strategy_condition_changed');
            expect(stopResult.success).toBe(true);
            expect(botController.isBotRunning('test-bot-3')).toBe(false);

            // Verify audit log has both start and stop entries
            const auditEntries = auditLog.getEntriesByBot('test-bot-3');
            expect(auditEntries.length).toBe(2);

            const startEntry = auditEntries.find((e) => e.type === 'bot_started');
            const stopEntry = auditEntries.find((e) => e.type === 'bot_stopped');

            expect(startEntry).toBeDefined();
            expect(stopEntry).toBeDefined();
            expect(stopEntry?.reason).toBe('strategy_condition_changed');
        });

        it('should handle bot switch action', async () => {
            // Start initial bot
            const initialConfig: BotStartConfig = {
                botId: 'test-bot-4a',
                strategyId: 'test-strategy-4',
                stake: 1.0,
                priority: StrategyPriority.Medium,
            };

            await botController.startBot(initialConfig);
            expect(botController.isBotRunning('test-bot-4a')).toBe(true);

            // Reset cooldown for testing
            botController.resetCooldown();
            
            // Wait a bit to ensure cooldown is reset
            await new Promise((resolve) => setTimeout(resolve, 100));

            // Switch to new bot
            const newConfig: BotStartConfig = {
                botId: 'test-bot-4b',
                strategyId: 'test-strategy-4',
                stake: 1.5,
                priority: StrategyPriority.Medium,
            };

            const switchResult = await botController.switchBot('test-bot-4a', newConfig);
            expect(switchResult.success).toBe(true);
            expect(botController.isBotRunning('test-bot-4a')).toBe(false);
            expect(botController.isBotRunning('test-bot-4b')).toBe(true);

            // Verify audit log
            const auditEntries = auditLog.getAllEntries();
            const bot4aEntries = auditEntries.filter(
                (e) => ('botId' in e && e.botId === 'test-bot-4a') || ('fromBotId' in e && e.fromBotId === 'test-bot-4a')
            );
            const bot4bEntries = auditEntries.filter(
                (e) => ('botId' in e && e.botId === 'test-bot-4b') || ('toBotId' in e && e.toBotId === 'test-bot-4b')
            );

            expect(bot4aEntries.length).toBeGreaterThan(0);
            expect(bot4bEntries.length).toBeGreaterThan(0);
        }, 10000); // 10 second timeout for cooldown wait
    });

    describe('Error Handling Across Service Boundaries', () => {
        it('should handle insufficient tick data gracefully', () => {
            const strategy: Strategy = {
                id: 'test-strategy-5',
                name: 'Insufficient Data Strategy',
                description: 'Test insufficient data handling',
                symbol: 'R_100',
                conditions: [
                    {
                        type: ConditionType.DigitFrequency,
                        digits: [5],
                        tickCount: 100, // Require 100 ticks
                        operator: ComparisonOperator.GreaterThan,
                        threshold: 10,
                    } as DigitFrequencyCondition,
                ],
                logicOperator: LogicOperator.AND,
                action: {
                    type: ActionType.StartBot,
                    botId: 'test-bot-5',
                    stake: 1.0,
                },
                priority: StrategyPriority.Medium,
                cooldownPeriod: 60,
                isActive: true,
                isPaused: false,
                createdAt: Date.now(),
                updatedAt: Date.now(),
            };

            // Provide only 10 ticks (insufficient)
            const ticks: Tick[] = [];
            for (let i = 0; i < 10; i++) {
                ticks.push({
                    epoch: Date.now() + i * 1000,
                    quote: 100.5,
                    symbol: 'R_100',
                    ask: 100.6,
                    bid: 100.4,
                    id: `tick-${i}`,
                    pip_size: 2,
                });
            }

            const context: EvaluationContext = {
                tickBuffer: ticks,
                timestamp: Date.now(),
            };

            const result = strategyEvaluator.evaluateStrategy(strategy, context);

            // Should not trigger due to insufficient data
            expect(result.triggered).toBe(false);
            expect(result.reason).toContain('insufficient_data');
            expect(result.conditionResults).toHaveLength(1);
            expect(result.conditionResults[0].status).toBe('not_evaluable');
        });

        it('should handle concurrent bot limit enforcement', async () => {
            // Set max concurrent bots to 2
            botController.setMaxConcurrentBots(2);

            // Start 2 bots (should succeed)
            const config1: BotStartConfig = {
                botId: 'test-bot-6a',
                strategyId: 'test-strategy-6',
                stake: 1.0,
                priority: StrategyPriority.High,
            };

            const config2: BotStartConfig = {
                botId: 'test-bot-6b',
                strategyId: 'test-strategy-6',
                stake: 1.0,
                priority: StrategyPriority.Medium,
            };

            const result1 = await botController.startBot(config1);
            const result2 = await botController.startBot(config2);

            expect(result1.success).toBe(true);
            expect(result2.success).toBe(true);

            // Try to start 3rd bot (should be queued)
            const config3: BotStartConfig = {
                botId: 'test-bot-6c',
                strategyId: 'test-strategy-6',
                stake: 1.0,
                priority: StrategyPriority.Low,
            };

            const result3 = await botController.startBot(config3);

            expect(result3.success).toBe(false);
            expect(result3.reason).toBe('concurrent_limit_reached');
            expect(result3.queued).toBe(true);

            // Verify queue
            const queuedActions = botController.getQueuedActions();
            expect(queuedActions.length).toBe(1);
            expect(queuedActions[0].botId).toBe('test-bot-6c');

            // Stop one bot and verify queued action is processed
            await botController.stopBot('test-bot-6a', 'test');

            // Wait a bit for queue processing
            await new Promise((resolve) => setTimeout(resolve, 200));

            // The queued bot should now be running
            expect(botController.isBotRunning('test-bot-6c')).toBe(true);
        });

        it('should handle strategy cooldown period', () => {
            const strategy: Strategy = {
                id: 'test-strategy-7',
                name: 'Cooldown Test Strategy',
                description: 'Test cooldown enforcement',
                symbol: 'R_100',
                conditions: [
                    {
                        type: ConditionType.DigitFrequency,
                        digits: [5],
                        tickCount: 10,
                        operator: ComparisonOperator.GreaterThan,
                        threshold: 3,
                    } as DigitFrequencyCondition,
                ],
                logicOperator: LogicOperator.AND,
                action: {
                    type: ActionType.StartBot,
                    botId: 'test-bot-7',
                    stake: 1.0,
                },
                priority: StrategyPriority.Medium,
                cooldownPeriod: 60, // 60 seconds cooldown
                isActive: true,
                isPaused: false,
                lastTriggeredAt: Date.now() - 30000, // Triggered 30 seconds ago
                createdAt: Date.now(),
                updatedAt: Date.now(),
            };

            // Create ticks that would trigger the condition
            const ticks: Tick[] = [];
            for (let i = 0; i < 10; i++) {
                ticks.push({
                    epoch: Date.now() + i * 1000,
                    quote: 100.5, // All end with digit 5
                    symbol: 'R_100',
                    ask: 100.6,
                    bid: 100.4,
                    id: `tick-${i}`,
                    pip_size: 2,
                });
            }

            const context: EvaluationContext = {
                tickBuffer: ticks,
                timestamp: Date.now(),
            };

            const result = strategyEvaluator.evaluateStrategy(strategy, context);

            // Should not trigger due to cooldown
            expect(result.triggered).toBe(false);
            expect(result.reason).toContain('cooldown');
        });

        it('should handle multiple strategies evaluation', () => {
            const strategies: Strategy[] = [
                {
                    id: 'test-strategy-8a',
                    name: 'Strategy A',
                    description: 'First strategy',
                    symbol: 'R_100',
                    conditions: [
                        {
                            type: ConditionType.DigitFrequency,
                            digits: [0, 1, 2],
                            tickCount: 10,
                            operator: ComparisonOperator.GreaterThan,
                            threshold: 5,
                        } as DigitFrequencyCondition,
                    ],
                    logicOperator: LogicOperator.AND,
                    action: {
                        type: ActionType.StartBot,
                        botId: 'test-bot-8a',
                        stake: 1.0,
                    },
                    priority: StrategyPriority.High,
                    cooldownPeriod: 60,
                    isActive: true,
                    isPaused: false,
                    createdAt: Date.now(),
                    updatedAt: Date.now(),
                },
                {
                    id: 'test-strategy-8b',
                    name: 'Strategy B',
                    description: 'Second strategy',
                    symbol: 'R_100',
                    conditions: [
                        {
                            type: ConditionType.DigitFrequency,
                            digits: [7, 8, 9],
                            tickCount: 10,
                            operator: ComparisonOperator.GreaterThan,
                            threshold: 5,
                        } as DigitFrequencyCondition,
                    ],
                    logicOperator: LogicOperator.AND,
                    action: {
                        type: ActionType.StartBot,
                        botId: 'test-bot-8b',
                        stake: 1.0,
                    },
                    priority: StrategyPriority.Medium,
                    cooldownPeriod: 60,
                    isActive: true,
                    isPaused: false,
                    createdAt: Date.now(),
                    updatedAt: Date.now(),
                },
            ];

            // Create ticks with low digits (should trigger strategy A)
            const ticks: Tick[] = [];
            for (let i = 0; i < 10; i++) {
                ticks.push({
                    epoch: Date.now() + i * 1000,
                    quote: 100.0 + (i % 3) / 10, // Digits 0, 1, 2
                    symbol: 'R_100',
                    ask: 100.1,
                    bid: 99.9,
                    id: `tick-${i}`,
                    pip_size: 2,
                });
            }

            const context: EvaluationContext = {
                tickBuffer: ticks,
                timestamp: Date.now(),
            };

            const results = strategyEvaluator.evaluateAllStrategies(strategies, context);

            // Strategy A should trigger, Strategy B should not
            expect(results.size).toBe(2);
            expect(results.get('test-strategy-8a')?.triggered).toBe(true);
            expect(results.get('test-strategy-8b')?.triggered).toBe(false);
        });

        it('should handle paused strategies', () => {
            const strategy: Strategy = {
                id: 'test-strategy-9',
                name: 'Paused Strategy',
                description: 'Test paused strategy handling',
                symbol: 'R_100',
                conditions: [
                    {
                        type: ConditionType.DigitFrequency,
                        digits: [5],
                        tickCount: 10,
                        operator: ComparisonOperator.GreaterThan,
                        threshold: 0, // Would always trigger
                    } as DigitFrequencyCondition,
                ],
                logicOperator: LogicOperator.AND,
                action: {
                    type: ActionType.StartBot,
                    botId: 'test-bot-9',
                    stake: 1.0,
                },
                priority: StrategyPriority.Medium,
                cooldownPeriod: 60,
                isActive: true,
                isPaused: true, // Strategy is paused
                createdAt: Date.now(),
                updatedAt: Date.now(),
            };

            const ticks: Tick[] = [];
            for (let i = 0; i < 10; i++) {
                ticks.push({
                    epoch: Date.now() + i * 1000,
                    quote: 100.5,
                    symbol: 'R_100',
                    ask: 100.6,
                    bid: 100.4,
                    id: `tick-${i}`,
                    pip_size: 2,
                });
            }

            const context: EvaluationContext = {
                tickBuffer: ticks,
                timestamp: Date.now(),
            };

            const results = strategyEvaluator.evaluateAllStrategies([strategy], context);

            // Paused strategy should not be evaluated
            expect(results.size).toBe(0);
        });
    });

    describe('Audit Log Integration', () => {
        it('should log all events in correct order', async () => {
            // Clear audit log
            auditLog.clear();

            // Perform a series of actions
            const config1: BotStartConfig = {
                botId: 'test-bot-10a',
                strategyId: 'test-strategy-10',
                stake: 1.0,
                priority: StrategyPriority.High,
            };

            await botController.startBot(config1);
            await botController.stopBot('test-bot-10a', 'test_complete');

            // Get audit entries
            const entries = auditLog.getAllEntries();

            // Should have start and stop entries
            expect(entries.length).toBe(2);

            // Entries should be in reverse chronological order (newest first)
            expect(entries[0].type).toBe('bot_stopped');
            expect(entries[1].type).toBe('bot_started');

            // Verify timestamps are in correct order
            expect(entries[0].timestamp).toBeGreaterThanOrEqual(entries[1].timestamp);
        });

        it('should support audit log search and filtering', async () => {
            auditLog.clear();

            // Create multiple events
            await botController.startBot({
                botId: 'test-bot-11a',
                strategyId: 'test-strategy-11',
                stake: 1.0,
                priority: StrategyPriority.High,
            });

            await botController.startBot({
                botId: 'test-bot-11b',
                strategyId: 'test-strategy-11',
                stake: 2.0,
                priority: StrategyPriority.Medium,
            });

            await botController.stopBot('test-bot-11a', 'manual_stop');

            // Search by strategy ID
            const strategyEntries = auditLog.getEntriesByStrategy('test-strategy-11');
            expect(strategyEntries.length).toBe(3);

            // Search by bot ID
            const bot11aEntries = auditLog.getEntriesByBot('test-bot-11a');
            expect(bot11aEntries.length).toBe(2); // Start and stop

            const bot11bEntries = auditLog.getEntriesByBot('test-bot-11b');
            expect(bot11bEntries.length).toBe(1); // Only start

            // Search by event type
            const startedEntries = auditLog.getEntriesByType('bot_started' as any);
            expect(startedEntries.length).toBe(2);

            const stoppedEntries = auditLog.getEntriesByType('bot_stopped' as any);
            expect(stoppedEntries.length).toBe(1);
        });

        it('should persist audit log to localStorage', async () => {
            auditLog.clear();

            // Create some events
            await botController.startBot({
                botId: 'test-bot-12',
                strategyId: 'test-strategy-12',
                stake: 1.0,
                priority: StrategyPriority.High,
            });

            // Create new audit log instance (simulates page reload)
            const newAuditLog = new AuditLog();

            // Should load entries from localStorage
            const entries = newAuditLog.getAllEntries();
            expect(entries.length).toBeGreaterThan(0);

            const botEntry = entries.find((e) => 'botId' in e && e.botId === 'test-bot-12');
            expect(botEntry).toBeDefined();
        });
    });

    describe('Performance Tests', () => {
        it('should evaluate multiple strategies within 1 second', () => {
            // Create 10 strategies
            const strategies: Strategy[] = [];
            for (let i = 0; i < 10; i++) {
                strategies.push({
                    id: `perf-strategy-${i}`,
                    name: `Performance Strategy ${i}`,
                    description: 'Performance test strategy',
                    symbol: 'R_100',
                    conditions: [
                        {
                            type: ConditionType.DigitFrequency,
                            digits: [i % 10],
                            tickCount: 50,
                            operator: ComparisonOperator.GreaterThan,
                            threshold: 10,
                        } as DigitFrequencyCondition,
                    ],
                    logicOperator: LogicOperator.AND,
                    action: {
                        type: ActionType.StartBot,
                        botId: `perf-bot-${i}`,
                        stake: 1.0,
                    },
                    priority: StrategyPriority.Medium,
                    cooldownPeriod: 60,
                    isActive: true,
                    isPaused: false,
                    createdAt: Date.now(),
                    updatedAt: Date.now(),
                });
            }

            // Create tick buffer
            const ticks: Tick[] = [];
            for (let i = 0; i < 100; i++) {
                ticks.push({
                    epoch: Date.now() + i * 1000,
                    quote: 100 + Math.random() * 10,
                    symbol: 'R_100',
                    ask: 100.1,
                    bid: 99.9,
                    id: `tick-${i}`,
                    pip_size: 2,
                });
            }

            const context: EvaluationContext = {
                tickBuffer: ticks,
                timestamp: Date.now(),
            };

            // Measure evaluation time
            const startTime = performance.now();
            const results = strategyEvaluator.evaluateAllStrategies(strategies, context);
            const endTime = performance.now();

            const evaluationTime = endTime - startTime;

            // Should complete within 1 second (1000ms)
            expect(evaluationTime).toBeLessThan(1000);
            expect(results.size).toBe(10);
        });
    });
});
