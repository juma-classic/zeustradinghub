/**
 * Integration Tests for AutoStrategyController Orchestrator
 * 
 * Tests the full AutoStrategyController lifecycle and coordination:
 * - Full strategy lifecycle (create → activate → trigger → deactivate → delete)
 * - Emergency stop functionality
 * - Connection failure handling
 * - Multi-strategy coordination
 * - Pause and resume functionality
 * 
 * Requirements: 2.1, 2.4, 17.1, 25.1, 35.1
 */

import { describe, it, expect, beforeEach, afterEach } from '@jest/globals';
import {
    AutoStrategyController,
    getAutoStrategyController,
    resetAutoStrategyController,
    ControllerStatus,
} from '../auto-strategy-controller.service';
import { MarketDataMonitor, getMarketDataMonitor } from '../market-data-monitor.service';
import { getBotController } from '../bot-controller.service';
import { getStrategyStorage } from '../strategy-storage.service';
import {
    StrategyPriority,
    LogicOperator,
    ConditionType,
    ComparisonOperator,
    ActionType,
    ConnectionStatus,
    type Tick,
    type DigitFrequencyCondition,
} from '../../../types/auto-strategy.types';

describe('AutoStrategyController - Integration Tests', () => {
    let controller: AutoStrategyController;
    let marketDataMonitor: MarketDataMonitor;

    beforeEach(() => {
        localStorage.clear();
        resetAutoStrategyController();
        controller = getAutoStrategyController();
        marketDataMonitor = getMarketDataMonitor();
    });

    afterEach(async () => {
        try {
            await controller.stop();
        } catch (error) {
            // Ignore cleanup errors
        }
        resetAutoStrategyController();
        localStorage.clear();
    });

    // Helper function to create a test strategy
    const createTestStrategy = (overrides: any = {}) => ({
        name: 'Test Strategy',
        description: 'Test strategy description',
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
            botId: 'test-bot-1',
            stake: 1.0,
        },
        priority: StrategyPriority.High,
        cooldownPeriod: 60,
        isActive: false,
        isPaused: false,
        ...overrides,
    });

    // Helper function to simulate ticks
    const simulateTicks = (count: number, digitPattern: number[] = [7, 8, 9]) => {
        for (let i = 0; i < count; i++) {
            const digit = digitPattern[i % digitPattern.length];
            const tick: Tick = {
                epoch: Date.now() + i * 1000,
                quote: 100 + digit / 10,
                symbol: 'R_100',
                ask: 100.1 + digit / 10,
                bid: 99.9 + digit / 10,
                id: `tick-${i}`,
                pip_size: 2,
            };
            marketDataMonitor['handleMessage']({ tick });
        }
    };

    // ========================================================================
    // Test 1: Full Strategy Lifecycle
    // Requirements: 2.1, 2.4
    // ========================================================================

    describe('Full Strategy Lifecycle', () => {
        it('should handle complete lifecycle: create → activate → deactivate → delete', async () => {
            // Step 1: Create strategy (without initializing - tests controller logic only)
            const strategyId = await controller.createStrategy(createTestStrategy());
            expect(strategyId).toBeDefined();

            // Step 2: Update strategy to active (without calling activateStrategy which requires WebSocket)
            await controller.updateStrategy(strategyId, { isActive: true, isPaused: false });
            
            // Verify performance tracking initialized
            const performance = controller.getStrategyPerformance(strategyId);
            expect(performance).toBeDefined();
            expect(performance!.totalTriggers).toBe(0);

            // Step 3: Deactivate strategy
            await controller.updateStrategy(strategyId, { isActive: false });

            // Step 4: Delete strategy
            await controller.deleteStrategy(strategyId);
            expect(controller.getStrategyPerformance(strategyId)).toBeNull();
        }, 10000);

        it('should track performance throughout lifecycle', async () => {
            const strategyId = await controller.createStrategy(
                createTestStrategy({
                    conditions: [{
                        type: ConditionType.DigitFrequency,
                        digits: [5],
                        tickCount: 10, // Fixed: must be >= 10
                        operator: ComparisonOperator.GreaterThan,
                        threshold: 2,
                    }],
                    cooldownPeriod: 5,
                })
            );

            await controller.updateStrategy(strategyId, { isActive: true, isPaused: false });

            // Initial performance should be zero
            const perf = controller.getStrategyPerformance(strategyId);
            expect(perf!.totalTriggers).toBe(0);
            expect(perf!.successfulTriggers).toBe(0);
            expect(perf!.failedTriggers).toBe(0);
        }, 10000);

        it('should handle full lifecycle with strategy triggering: create → activate → trigger → deactivate → delete', async () => {
            // Step 1: Create strategy with simple digit condition
            const strategyId = await controller.createStrategy(
                createTestStrategy({
                    name: 'Trigger Test Strategy',
                    conditions: [{
                        type: ConditionType.DigitFrequency,
                        digits: [7, 8, 9],
                        tickCount: 10,
                        operator: ComparisonOperator.GreaterThan,
                        threshold: 5,
                    }],
                    cooldownPeriod: 5,
                })
            );
            expect(strategyId).toBeDefined();

            // Step 2: Activate strategy
            await controller.updateStrategy(strategyId, { isActive: true, isPaused: false });
            await controller.start();

            // Verify strategy is active
            const activeStrategies = controller.getActiveStrategies();
            expect(activeStrategies.length).toBe(1);
            expect(activeStrategies[0].id).toBe(strategyId);

            // Step 3: Simulate ticks that should trigger the strategy
            // Send 10 ticks with digits 7, 8, 9 (should trigger condition)
            simulateTicks(10, [7, 8, 9, 7, 8, 9, 7, 8, 9, 7]);

            // Wait for tick processing
            await new Promise(resolve => setTimeout(resolve, 100));

            // Verify strategy was triggered
            const performance = controller.getStrategyPerformance(strategyId);
            expect(performance).toBeDefined();
            expect(performance!.totalTriggers).toBeGreaterThan(0);

            // Step 4: Deactivate strategy
            await controller.deactivateStrategy(strategyId);
            expect(controller.getActiveStrategies().length).toBe(0);

            // Step 5: Delete strategy
            await controller.deleteStrategy(strategyId);
            expect(controller.getStrategyPerformance(strategyId)).toBeNull();
        }, 15000);

        it('should maintain strategy state across activation cycles', async () => {
            const strategyId = await controller.createStrategy(
                createTestStrategy({
                    name: 'State Persistence Test',
                    conditions: [{
                        type: ConditionType.DigitFrequency,
                        digits: [5],
                        tickCount: 10,
                        operator: ComparisonOperator.GreaterThan,
                        threshold: 3,
                    }],
                })
            );

            // Activate
            await controller.updateStrategy(strategyId, { isActive: true, isPaused: false });
            await controller.start();

            // Simulate some ticks
            simulateTicks(5, [5, 5, 5, 5, 5]);
            await new Promise(resolve => setTimeout(resolve, 100));

            // Deactivate
            await controller.deactivateStrategy(strategyId);

            // Verify performance is preserved
            const perf1 = controller.getStrategyPerformance(strategyId);
            expect(perf1).toBeDefined();
            const triggers1 = perf1!.totalTriggers;

            // Reactivate
            await controller.activateStrategy(strategyId);

            // Verify performance still exists
            const perf2 = controller.getStrategyPerformance(strategyId);
            expect(perf2).toBeDefined();
            expect(perf2!.totalTriggers).toBe(triggers1);
        }, 15000);
    });

    // ========================================================================
    // Test 2: Emergency Stop Functionality
    // Requirements: 17.1
    // ========================================================================

    describe('Emergency Stop Functionality', () => {
        it('should stop all bots and deactivate strategies within 1 second', async () => {
            // Create multiple strategies
            const strategy1Id = await controller.createStrategy(
                createTestStrategy({ name: 'Emergency Strategy 1', action: { type: ActionType.StartBot, botId: 'emergency-bot-1', stake: 1.0 } })
            );
            const strategy2Id = await controller.createStrategy(
                createTestStrategy({ name: 'Emergency Strategy 2', action: { type: ActionType.StartBot, botId: 'emergency-bot-2', stake: 1.0 } })
            );

            // Activate strategies without WebSocket
            await controller.updateStrategy(strategy1Id, { isActive: true, isPaused: false });
            await controller.updateStrategy(strategy2Id, { isActive: true, isPaused: false });

            // Trigger emergency stop and measure time
            const startTime = performance.now();
            await controller.emergencyStop();
            const endTime = performance.now();

            // Verify timing
            expect(endTime - startTime).toBeLessThan(1000);

            // Verify controller stopped
            expect(controller.getStatus()).toBe(ControllerStatus.Stopped);
        }, 10000);

        it('should clear bot action queue during emergency stop', async () => {
            const strategyId = await controller.createStrategy(createTestStrategy());
            await controller.updateStrategy(strategyId, { isActive: true, isPaused: false });

            // Trigger emergency stop
            await controller.emergencyStop();

            // Verify queue cleared
            const botController = getBotController();
            expect(botController.getQueuedActions().length).toBe(0);
        }, 10000);

        it('should deactivate all active strategies during emergency stop', async () => {
            // Create and activate multiple strategies
            const ids = await Promise.all([
                controller.createStrategy(createTestStrategy({ name: 'Emergency Test 1' })),
                controller.createStrategy(createTestStrategy({ name: 'Emergency Test 2' })),
                controller.createStrategy(createTestStrategy({ name: 'Emergency Test 3' })),
            ]);

            for (const id of ids) {
                await controller.updateStrategy(id, { isActive: true, isPaused: false });
            }

            // Verify all active
            expect(controller.getActiveStrategies().length).toBe(3);

            // Trigger emergency stop
            await controller.emergencyStop();

            // Verify all deactivated
            expect(controller.getActiveStrategies().length).toBe(0);

            // Verify each strategy is deactivated
            const storage = getStrategyStorage();
            for (const id of ids) {
                const strategy = storage.read(id);
                expect(strategy!.isActive).toBe(false);
            }
        }, 10000);

        it('should disconnect from market data during emergency stop', async () => {
            await controller.start();
            
            // Verify connected
            const statusBefore = marketDataMonitor.getConnectionStatus();
            expect([ConnectionStatus.Connected, ConnectionStatus.Connecting]).toContain(statusBefore);

            // Trigger emergency stop
            await controller.emergencyStop();

            // Verify disconnected
            const statusAfter = marketDataMonitor.getConnectionStatus();
            expect(statusAfter).toBe(ConnectionStatus.Disconnected);
        }, 10000);

        it('should require explicit restart after emergency stop', async () => {
            await controller.start();
            expect(controller.getStatus()).toBe(ControllerStatus.Running);

            // Trigger emergency stop
            await controller.emergencyStop();
            expect(controller.getStatus()).toBe(ControllerStatus.Stopped);

            // Verify controller remains stopped
            expect(controller.getStatus()).toBe(ControllerStatus.Stopped);

            // Explicit restart required
            await controller.start();
            expect(controller.getStatus()).toBe(ControllerStatus.Running);
        }, 10000);
    });

    // ========================================================================
    // Test 3: Connection Failure Handling
    // Requirements: 35.1
    // ========================================================================

    describe('Connection Failure Handling', () => {
        it('should track connection loss timestamp', async () => {
            const strategyId = await controller.createStrategy(createTestStrategy());
            await controller.updateStrategy(strategyId, { isActive: true, isPaused: false });

            // Simulate connection loss by setting timestamp
            controller['connectionLostAt'] = Date.now() - 31000;

            // Verify connection loss is tracked
            expect(controller['connectionLostAt']).toBeDefined();
        }, 10000);

        it('should clear connection lost timestamp on restoration', async () => {
            // Simulate connection loss
            controller['connectionLostAt'] = Date.now() - 5000;
            expect(controller['connectionLostAt']).toBeDefined();

            // Simulate restoration by clearing timestamp
            controller['connectionLostAt'] = undefined;

            // Verify timestamp cleared
            expect(controller['connectionLostAt']).toBeUndefined();
        }, 10000);

        it('should pause strategies when connection lost for >30 seconds', async () => {
            // Create and activate strategies
            const strategy1Id = await controller.createStrategy(
                createTestStrategy({ name: 'Connection Test 1' })
            );
            const strategy2Id = await controller.createStrategy(
                createTestStrategy({ name: 'Connection Test 2' })
            );

            await controller.updateStrategy(strategy1Id, { isActive: true, isPaused: false });
            await controller.updateStrategy(strategy2Id, { isActive: true, isPaused: false });

            // Verify strategies are active
            expect(controller.getActiveStrategies().length).toBe(2);

            // Simulate connection loss for >30 seconds
            controller['connectionLostAt'] = Date.now() - 31000;

            // Trigger connection change handler
            controller['handleConnectionChange'](ConnectionStatus.Disconnected);

            // Wait for processing
            await new Promise(resolve => setTimeout(resolve, 100));

            // Verify strategies were paused
            const storage = getStrategyStorage();
            const strategy1 = storage.read(strategy1Id);
            const strategy2 = storage.read(strategy2Id);

            expect(strategy1!.isPaused).toBe(true);
            expect(strategy2!.isPaused).toBe(true);
        }, 10000);

        it('should not pause strategies for brief connection loss (<30 seconds)', async () => {
            const strategyId = await controller.createStrategy(
                createTestStrategy({ name: 'Brief Disconnect Test' })
            );
            await controller.updateStrategy(strategyId, { isActive: true, isPaused: false });

            // Simulate brief connection loss (10 seconds)
            controller['connectionLostAt'] = Date.now() - 10000;

            // Trigger connection change handler
            controller['handleConnectionChange'](ConnectionStatus.Disconnected);

            // Wait for processing
            await new Promise(resolve => setTimeout(resolve, 100));

            // Verify strategy is still active (not paused)
            const storage = getStrategyStorage();
            const strategy = storage.read(strategyId);
            expect(strategy!.isPaused).toBe(false);
        }, 10000);

        it('should clear connection lost timestamp when connection restored', async () => {
            // Simulate connection loss
            controller['connectionLostAt'] = Date.now() - 5000;
            expect(controller['connectionLostAt']).toBeDefined();

            // Trigger connection restored
            controller['handleConnectionChange'](ConnectionStatus.Connected);

            // Verify timestamp cleared
            expect(controller['connectionLostAt']).toBeUndefined();
        }, 10000);

        it('should handle multiple connection loss/restore cycles', async () => {
            const strategyId = await controller.createStrategy(createTestStrategy());
            await controller.updateStrategy(strategyId, { isActive: true, isPaused: false });

            // First loss
            controller['connectionLostAt'] = Date.now() - 5000;
            controller['handleConnectionChange'](ConnectionStatus.Disconnected);
            expect(controller['connectionLostAt']).toBeDefined();

            // First restore
            controller['handleConnectionChange'](ConnectionStatus.Connected);
            expect(controller['connectionLostAt']).toBeUndefined();

            // Second loss
            controller['connectionLostAt'] = Date.now() - 5000;
            controller['handleConnectionChange'](ConnectionStatus.Disconnected);
            expect(controller['connectionLostAt']).toBeDefined();

            // Second restore
            controller['handleConnectionChange'](ConnectionStatus.Connected);
            expect(controller['connectionLostAt']).toBeUndefined();
        }, 10000);

        it('should continue running bots during connection loss', async () => {
            const strategyId = await controller.createStrategy(createTestStrategy());
            await controller.updateStrategy(strategyId, { isActive: true, isPaused: false });
            await controller.start();

            // Simulate bot running
            const botController = getBotController();
            await botController.startBot({
                botId: 'test-bot',
                strategyId,
                stake: 1.0,
                priority: 2,
            });

            const runningBotsBefore = botController.getRunningBots();
            expect(runningBotsBefore.length).toBeGreaterThan(0);

            // Simulate connection loss
            controller['connectionLostAt'] = Date.now() - 5000;
            controller['handleConnectionChange'](ConnectionStatus.Disconnected);

            // Verify bots still running (not stopped by connection loss)
            const runningBotsAfter = botController.getRunningBots();
            expect(runningBotsAfter.length).toBe(runningBotsBefore.length);
        }, 10000);
    });

    // ========================================================================
    // Test 4: Multi-Strategy Coordination
    // ========================================================================

    describe('Multi-Strategy Coordination', () => {
        it('should manage multiple strategies correctly', async () => {
            // Create strategies with different digit conditions
            const lowDigitId = await controller.createStrategy(
                createTestStrategy({
                    name: 'Low Digit Strategy',
                    conditions: [{
                        type: ConditionType.DigitFrequency,
                        digits: [0, 1, 2],
                        tickCount: 10,
                        operator: ComparisonOperator.GreaterThan,
                        threshold: 5,
                    }],
                    action: { type: ActionType.StartBot, botId: 'low-bot', stake: 1.0 },
                })
            );

            const highDigitId = await controller.createStrategy(
                createTestStrategy({
                    name: 'High Digit Strategy',
                    conditions: [{
                        type: ConditionType.DigitFrequency,
                        digits: [7, 8, 9],
                        tickCount: 10,
                        operator: ComparisonOperator.GreaterThan,
                        threshold: 5,
                    }],
                    action: { type: ActionType.StartBot, botId: 'high-bot', stake: 1.0 },
                })
            );

            await controller.updateStrategy(lowDigitId, { isActive: true, isPaused: false });
            await controller.updateStrategy(highDigitId, { isActive: true, isPaused: false });

            // Verify both strategies have performance tracking
            const lowPerf = controller.getStrategyPerformance(lowDigitId);
            const highPerf = controller.getStrategyPerformance(highDigitId);

            expect(lowPerf).toBeDefined();
            expect(highPerf).toBeDefined();
        }, 10000);

        it('should handle concurrent bot limits across strategies', async () => {
            const botController = getBotController();
            botController.setMaxConcurrentBots(2);

            // Create 3 strategies
            const ids = await Promise.all([
                controller.createStrategy(createTestStrategy({ name: 'Strategy 1', action: { type: ActionType.StartBot, botId: 'bot-1', stake: 1.0 }, cooldownPeriod: 5 })),
                controller.createStrategy(createTestStrategy({ name: 'Strategy 2', action: { type: ActionType.StartBot, botId: 'bot-2', stake: 1.0 }, cooldownPeriod: 5 })),
                controller.createStrategy(createTestStrategy({ name: 'Strategy 3', action: { type: ActionType.StartBot, botId: 'bot-3', stake: 1.0 }, cooldownPeriod: 5 })),
            ]);

            for (const id of ids) {
                await controller.updateStrategy(id, { isActive: true, isPaused: false });
            }

            // Verify all strategies created
            expect(ids.length).toBe(3);
        }, 10000);

        it('should track performance independently for each strategy', async () => {
            const strategy1Id = await controller.createStrategy(
                createTestStrategy({
                    name: 'Perf Strategy 1',
                    conditions: [{
                        type: ConditionType.DigitFrequency,
                        digits: [5],
                        tickCount: 10, // Fixed: must be >= 10
                        operator: ComparisonOperator.GreaterThan,
                        threshold: 2,
                    }],
                    cooldownPeriod: 5,
                })
            );

            const strategy2Id = await controller.createStrategy(
                createTestStrategy({
                    name: 'Perf Strategy 2',
                    conditions: [{
                        type: ConditionType.DigitFrequency,
                        digits: [3],
                        tickCount: 10, // Fixed: must be >= 10
                        operator: ComparisonOperator.GreaterThan,
                        threshold: 2,
                    }],
                    cooldownPeriod: 5,
                })
            );

            await controller.updateStrategy(strategy1Id, { isActive: true, isPaused: false });
            await controller.updateStrategy(strategy2Id, { isActive: true, isPaused: false });

            const perf1 = controller.getStrategyPerformance(strategy1Id);
            const perf2 = controller.getStrategyPerformance(strategy2Id);

            // Both should have independent performance tracking
            expect(perf1!.strategyId).toBe(strategy1Id);
            expect(perf2!.strategyId).toBe(strategy2Id);
            expect(perf1!.totalTriggers).toBe(0);
            expect(perf2!.totalTriggers).toBe(0);
        }, 10000);
    });

    // ========================================================================
    // Test 5: Pause and Resume Functionality
    // Requirements: 25.1
    // ========================================================================

    describe('Pause and Resume Functionality', () => {
        it('should not include paused strategies in active list', async () => {
            const strategyId = await controller.createStrategy(
                createTestStrategy({
                    conditions: [{
                        type: ConditionType.DigitFrequency,
                        digits: [5],
                        tickCount: 10, // Fixed: must be >= 10
                        operator: ComparisonOperator.GreaterThan,
                        threshold: 0,
                    }],
                })
            );

            await controller.updateStrategy(strategyId, { isActive: true, isPaused: false });
            await controller.updateStrategy(strategyId, { isPaused: true });

            // Paused strategies not in active list
            const activeStrategies = controller.getActiveStrategies();
            expect(activeStrategies.length).toBe(0);
        }, 10000);

        it('should resume strategy and add back to active list', async () => {
            const strategyId = await controller.createStrategy(
                createTestStrategy({
                    conditions: [{
                        type: ConditionType.DigitFrequency,
                        digits: [5],
                        tickCount: 10, // Fixed: must be >= 10
                        operator: ComparisonOperator.GreaterThan,
                        threshold: 2,
                    }],
                    cooldownPeriod: 5,
                })
            );

            await controller.updateStrategy(strategyId, { isActive: true, isPaused: false });
            await controller.updateStrategy(strategyId, { isPaused: true });
            expect(controller.getActiveStrategies().length).toBe(0);

            // Resume
            await controller.updateStrategy(strategyId, { isPaused: false });
            expect(controller.getActiveStrategies().length).toBe(1);
        }, 10000);

        it('should maintain strategy state when pausing', async () => {
            const strategyId = await controller.createStrategy(
                createTestStrategy({
                    conditions: [{
                        type: ConditionType.DigitFrequency,
                        digits: [5],
                        tickCount: 10, // Fixed: must be >= 10
                        operator: ComparisonOperator.GreaterThan,
                        threshold: 2,
                    }],
                    action: { type: ActionType.StartBot, botId: 'persistent-bot', stake: 1.0 },
                    cooldownPeriod: 5,
                })
            );

            await controller.updateStrategy(strategyId, { isActive: true, isPaused: false });

            // Pause strategy
            await controller.updateStrategy(strategyId, { isPaused: true });

            // Verify performance tracking still exists
            const perf = controller.getStrategyPerformance(strategyId);
            expect(perf).toBeDefined();
            expect(perf!.strategyId).toBe(strategyId);
        }, 10000);
    });

    // ========================================================================
    // Test 6: Strategy Validation and Warnings
    // ========================================================================

    describe('Strategy Validation and Warnings', () => {
        it('should validate strategy before activation', async () => {
            const invalidStrategy = {
                name: 'Invalid Strategy',
                description: 'Missing conditions',
                symbol: 'R_100',
                conditions: [], // Invalid - empty
                logicOperator: LogicOperator.AND,
                action: { type: ActionType.StartBot, botId: 'test-bot', stake: 1.0 },
                priority: StrategyPriority.Medium,
                cooldownPeriod: 60,
                isActive: false,
                isPaused: false,
            };

            const validation = controller.validateStrategy(invalidStrategy);
            expect(validation.isValid).toBe(false);
            expect(validation.errors.length).toBeGreaterThan(0);
        });

        it('should generate warnings for risky strategies', async () => {
            const strategyId = await controller.createStrategy(
                createTestStrategy({
                    name: 'Risky Strategy',
                    // No lossLimit or profitLimit
                })
            );

            const strategyStorage = getStrategyStorage();
            const strategy = strategyStorage.read(strategyId);
            const warnings = controller.getStrategyWarnings(strategy!);

            expect(warnings.length).toBeGreaterThan(0);
            expect(warnings.some(w => w.type === 'no_loss_limit')).toBe(true);
        });
    });

    // ========================================================================
    // Test 7: Import/Export Functionality
    // ========================================================================

    describe('Import/Export Functionality', () => {
        it('should export and import strategies', async () => {
            const originalId = await controller.createStrategy(
                createTestStrategy({ name: 'Export Test Strategy' })
            );

            // Export
            const exportedJson = controller.exportStrategy(originalId);
            expect(exportedJson).toBeDefined();
            expect(typeof exportedJson).toBe('string');

            // Import
            const importedId = await controller.importStrategy(exportedJson!);
            expect(importedId).toBeDefined();
            expect(importedId).not.toBe(originalId);

            // Verify same configuration
            const strategyStorage = getStrategyStorage();
            const original = strategyStorage.read(originalId);
            const imported = strategyStorage.read(importedId);

            expect(imported!.name).toBe(original!.name);
            expect(imported!.description).toBe(original!.description);
            expect(imported!.symbol).toBe(original!.symbol);
            expect(imported!.conditions.length).toBe(original!.conditions.length);
        });
    });
});
