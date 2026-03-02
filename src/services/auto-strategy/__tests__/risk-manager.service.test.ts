/**
 * Unit tests for RiskManager service
 * 
 * Tests cover:
 * - Profit/loss tracking accuracy
 * - Limit enforcement triggers
 * - Daily counter reset
 * - Strategy deactivation logic
 * 
 * Requirements: 13.1, 13.2, 14.1, 14.2, 15.1, 15.2
 */

import {
    RiskManager,
    resetRiskManager,
    RiskCheckResult,
    StrategyLimits,
} from '../risk-manager.service';

describe('RiskManager', () => {
    let riskManager: RiskManager;
    let auditLogEntries: any[];
    let notifications: Array<{ message: string; type: 'info' | 'warning' | 'error' }>;
    let stopAllBotsCalled: boolean;
    let deactivatedStrategies: Array<{ strategyId: string; reason: string }>;

    beforeEach(() => {
        // Reset singleton
        resetRiskManager();
        
        // Create new risk manager instance
        riskManager = new RiskManager();
        
        // Set up callbacks
        auditLogEntries = [];
        notifications = [];
        stopAllBotsCalled = false;
        deactivatedStrategies = [];
        
        riskManager.setAuditLogCallback((entry) => {
            auditLogEntries.push(entry);
        });
        
        riskManager.setNotificationCallback((message, type) => {
            notifications.push({ message, type });
        });
        
        riskManager.setStopAllBotsCallback(async (reason: string) => {
            stopAllBotsCalled = true;
        });
        
        riskManager.setDeactivateStrategyCallback(async (strategyId: string, reason: string) => {
            deactivatedStrategies.push({ strategyId, reason });
        });
    });

    afterEach(() => {
        resetRiskManager();
    });

    // ========================================================================
    // Limit Management Tests
    // ========================================================================

    describe('Limit Management', () => {
        it('should set global profit target', () => {
            riskManager.setGlobalProfitTarget(100);
            
            expect(auditLogEntries).toContainEqual(
                expect.objectContaining({
                    type: 'risk_config_changed',
                    action: 'set_global_profit_target',
                    value: 100,
                })
            );
        });

        it('should throw error for invalid global profit target', () => {
            expect(() => riskManager.setGlobalProfitTarget(0)).toThrow('Global profit target must be greater than 0');
            expect(() => riskManager.setGlobalProfitTarget(-10)).toThrow('Global profit target must be greater than 0');
        });

        it('should set global loss limit', () => {
            riskManager.setGlobalLossLimit(50);
            
            expect(auditLogEntries).toContainEqual(
                expect.objectContaining({
                    type: 'risk_config_changed',
                    action: 'set_global_loss_limit',
                    value: 50,
                })
            );
        });

        it('should throw error for invalid global loss limit', () => {
            expect(() => riskManager.setGlobalLossLimit(0)).toThrow('Global loss limit must be greater than 0');
            expect(() => riskManager.setGlobalLossLimit(-10)).toThrow('Global loss limit must be greater than 0');
        });

        it('should set strategy profit limit', () => {
            riskManager.setStrategyProfitLimit('strategy_1', 75);
            
            expect(auditLogEntries).toContainEqual(
                expect.objectContaining({
                    type: 'risk_config_changed',
                    action: 'set_strategy_profit_limit',
                    strategyId: 'strategy_1',
                    value: 75,
                })
            );
        });

        it('should throw error for invalid strategy profit limit', () => {
            expect(() => riskManager.setStrategyProfitLimit('strategy_1', 0)).toThrow('Strategy profit limit must be greater than 0');
            expect(() => riskManager.setStrategyProfitLimit('strategy_1', -10)).toThrow('Strategy profit limit must be greater than 0');
        });

        it('should set strategy loss limit', () => {
            riskManager.setStrategyLossLimit('strategy_1', 25);
            
            expect(auditLogEntries).toContainEqual(
                expect.objectContaining({
                    type: 'risk_config_changed',
                    action: 'set_strategy_loss_limit',
                    strategyId: 'strategy_1',
                    value: 25,
                })
            );
        });

        it('should throw error for invalid strategy loss limit', () => {
            expect(() => riskManager.setStrategyLossLimit('strategy_1', 0)).toThrow('Strategy loss limit must be greater than 0');
            expect(() => riskManager.setStrategyLossLimit('strategy_1', -10)).toThrow('Strategy loss limit must be greater than 0');
        });

        it('should set max concurrent bots', () => {
            riskManager.setMaxConcurrentBots(10);
            
            expect(riskManager.getMaxConcurrentBots()).toBe(10);
            expect(auditLogEntries).toContainEqual(
                expect.objectContaining({
                    type: 'risk_config_changed',
                    action: 'set_max_concurrent_bots',
                    value: 10,
                })
            );
        });

        it('should throw error for invalid max concurrent bots', () => {
            expect(() => riskManager.setMaxConcurrentBots(0)).toThrow('Max concurrent bots must be greater than 0');
            expect(() => riskManager.setMaxConcurrentBots(-5)).toThrow('Max concurrent bots must be greater than 0');
        });
    });

    // ========================================================================
    // Profit/Loss Tracking Tests (Requirement 13.1, 14.1, 15.1)
    // ========================================================================

    describe('Profit/Loss Tracking', () => {
        it('should track global profit correctly', () => {
            riskManager.recordBotProfit('bot_1', 'strategy_1', 50);
            riskManager.recordBotProfit('bot_2', 'strategy_2', 30);
            
            expect(riskManager.getCurrentProfit()).toBe(80);
        });

        it('should track global loss correctly', () => {
            riskManager.recordBotLoss('bot_1', 'strategy_1', 20);
            riskManager.recordBotLoss('bot_2', 'strategy_2', 15);
            
            expect(riskManager.getCurrentLoss()).toBe(35);
        });

        it('should track strategy profit correctly', () => {
            riskManager.recordBotProfit('bot_1', 'strategy_1', 50);
            riskManager.recordBotProfit('bot_2', 'strategy_1', 30);
            riskManager.recordBotProfit('bot_3', 'strategy_2', 20);
            
            expect(riskManager.getStrategyProfit('strategy_1')).toBe(80);
            expect(riskManager.getStrategyProfit('strategy_2')).toBe(20);
        });

        it('should track strategy loss correctly', () => {
            riskManager.recordBotLoss('bot_1', 'strategy_1', 25);
            riskManager.recordBotLoss('bot_2', 'strategy_1', 15);
            riskManager.recordBotLoss('bot_3', 'strategy_2', 10);
            
            expect(riskManager.getStrategyLoss('strategy_1')).toBe(40);
            expect(riskManager.getStrategyLoss('strategy_2')).toBe(10);
        });

        it('should return 0 for strategy with no profit', () => {
            expect(riskManager.getStrategyProfit('strategy_999')).toBe(0);
        });

        it('should return 0 for strategy with no loss', () => {
            expect(riskManager.getStrategyLoss('strategy_999')).toBe(0);
        });

        it('should calculate net profit/loss correctly', () => {
            riskManager.recordBotProfit('bot_1', 'strategy_1', 100);
            riskManager.recordBotLoss('bot_2', 'strategy_1', 30);
            
            expect(riskManager.getNetProfitLoss()).toBe(70);
        });

        it('should calculate strategy net profit/loss correctly', () => {
            riskManager.recordBotProfit('bot_1', 'strategy_1', 100);
            riskManager.recordBotLoss('bot_2', 'strategy_1', 30);
            
            expect(riskManager.getStrategyNetProfitLoss('strategy_1')).toBe(70);
        });

        it('should throw error for invalid profit amount', () => {
            expect(() => riskManager.recordBotProfit('bot_1', 'strategy_1', 0)).toThrow('Profit amount must be greater than 0');
            expect(() => riskManager.recordBotProfit('bot_1', 'strategy_1', -10)).toThrow('Profit amount must be greater than 0');
        });

        it('should throw error for invalid loss amount', () => {
            expect(() => riskManager.recordBotLoss('bot_1', 'strategy_1', 0)).toThrow('Loss amount must be greater than 0');
            expect(() => riskManager.recordBotLoss('bot_1', 'strategy_1', -10)).toThrow('Loss amount must be greater than 0');
        });

        it('should log profit recording to audit log', () => {
            riskManager.recordBotProfit('bot_1', 'strategy_1', 50);
            
            expect(auditLogEntries).toContainEqual(
                expect.objectContaining({
                    type: 'profit_recorded',
                    botId: 'bot_1',
                    strategyId: 'strategy_1',
                    amount: 50,
                    totalProfit: 50,
                    strategyProfit: 50,
                })
            );
        });

        it('should log loss recording to audit log', () => {
            riskManager.recordBotLoss('bot_1', 'strategy_1', 25);
            
            expect(auditLogEntries).toContainEqual(
                expect.objectContaining({
                    type: 'loss_recorded',
                    botId: 'bot_1',
                    strategyId: 'strategy_1',
                    amount: 25,
                    totalLoss: 25,
                    strategyLoss: 25,
                })
            );
        });

        it('should track cumulative profit across multiple bots', () => {
            riskManager.recordBotProfit('bot_1', 'strategy_1', 10);
            riskManager.recordBotProfit('bot_2', 'strategy_2', 20);
            riskManager.recordBotProfit('bot_3', 'strategy_3', 30);
            riskManager.recordBotProfit('bot_1', 'strategy_1', 15);
            
            expect(riskManager.getCurrentProfit()).toBe(75);
        });

        it('should track cumulative loss across multiple bots', () => {
            riskManager.recordBotLoss('bot_1', 'strategy_1', 5);
            riskManager.recordBotLoss('bot_2', 'strategy_2', 10);
            riskManager.recordBotLoss('bot_3', 'strategy_3', 15);
            riskManager.recordBotLoss('bot_1', 'strategy_1', 8);
            
            expect(riskManager.getCurrentLoss()).toBe(38);
        });
    });

    // ========================================================================
    // Limit Enforcement Tests (Requirement 13.2, 14.2, 15.2)
    // ========================================================================

    describe('Limit Enforcement', () => {
        it('should detect when global profit target is reached', async () => {
            riskManager.setGlobalProfitTarget(100);
            riskManager.recordBotProfit('bot_1', 'strategy_1', 60);
            riskManager.recordBotProfit('bot_2', 'strategy_2', 50);
            
            const result = await riskManager.checkLimits();
            
            expect(result.action).toBe('stop_all');
            expect(result.reason).toBe('profit_target_reached');
            expect(result.details?.currentProfit).toBe(110);
            expect(result.details?.limit).toBe(100);
        });

        it('should detect when global loss limit is reached', async () => {
            riskManager.setGlobalLossLimit(50);
            riskManager.recordBotLoss('bot_1', 'strategy_1', 30);
            riskManager.recordBotLoss('bot_2', 'strategy_2', 25);
            
            const result = await riskManager.checkLimits();
            
            expect(result.action).toBe('stop_all');
            expect(result.reason).toBe('loss_limit_reached');
            expect(result.details?.currentLoss).toBe(55);
            expect(result.details?.limit).toBe(50);
        });

        it('should detect when strategy profit limit is reached', async () => {
            riskManager.setStrategyProfitLimit('strategy_1', 75);
            riskManager.recordBotProfit('bot_1', 'strategy_1', 50);
            riskManager.recordBotProfit('bot_2', 'strategy_1', 30);
            
            const result = await riskManager.checkLimits();
            
            expect(result.action).toBe('stop_strategy');
            expect(result.reason).toBe('strategy_profit_limit_reached');
            expect(result.strategyId).toBe('strategy_1');
            expect(result.details?.currentProfit).toBe(80);
            expect(result.details?.limit).toBe(75);
        });

        it('should detect when strategy loss limit is reached', async () => {
            riskManager.setStrategyLossLimit('strategy_1', 40);
            riskManager.recordBotLoss('bot_1', 'strategy_1', 25);
            riskManager.recordBotLoss('bot_2', 'strategy_1', 20);
            
            const result = await riskManager.checkLimits();
            
            expect(result.action).toBe('stop_strategy');
            expect(result.reason).toBe('strategy_loss_limit_reached');
            expect(result.strategyId).toBe('strategy_1');
            expect(result.details?.currentLoss).toBe(45);
            expect(result.details?.limit).toBe(40);
        });

        it('should return no action when no limits are breached', async () => {
            riskManager.setGlobalProfitTarget(100);
            riskManager.setGlobalLossLimit(50);
            riskManager.recordBotProfit('bot_1', 'strategy_1', 30);
            riskManager.recordBotLoss('bot_2', 'strategy_2', 10);
            
            const result = await riskManager.checkLimits();
            
            expect(result.action).toBe('none');
        });

        it('should prioritize global limits over strategy limits', async () => {
            riskManager.setGlobalProfitTarget(100);
            riskManager.setStrategyProfitLimit('strategy_1', 50);
            riskManager.recordBotProfit('bot_1', 'strategy_1', 110);
            
            const result = await riskManager.checkLimits();
            
            // Global limit should be checked first
            expect(result.action).toBe('stop_all');
            expect(result.reason).toBe('profit_target_reached');
        });

        it('should enforce global profit target by stopping all bots', async () => {
            riskManager.setGlobalProfitTarget(100);
            riskManager.recordBotProfit('bot_1', 'strategy_1', 110);
            
            await riskManager.enforceGlobalLimits();
            
            expect(stopAllBotsCalled).toBe(true);
            expect(auditLogEntries).toContainEqual(
                expect.objectContaining({
                    type: 'risk_intervention',
                    interventionType: 'global_profit_target',
                    action: 'stopped_all_bots',
                })
            );
            expect(notifications).toContainEqual(
                expect.objectContaining({
                    type: 'warning',
                    message: expect.stringContaining('Global profit target reached'),
                })
            );
        });

        it('should enforce global loss limit by stopping all bots', async () => {
            riskManager.setGlobalLossLimit(50);
            riskManager.recordBotLoss('bot_1', 'strategy_1', 60);
            
            await riskManager.enforceGlobalLimits();
            
            expect(stopAllBotsCalled).toBe(true);
            expect(auditLogEntries).toContainEqual(
                expect.objectContaining({
                    type: 'risk_intervention',
                    interventionType: 'global_loss_limit',
                    action: 'stopped_all_bots',
                })
            );
            expect(notifications).toContainEqual(
                expect.objectContaining({
                    type: 'warning',
                    message: expect.stringContaining('Global loss limit reached'),
                })
            );
        });

        it('should enforce strategy profit limit by deactivating strategy', async () => {
            riskManager.setStrategyProfitLimit('strategy_1', 75);
            riskManager.recordBotProfit('bot_1', 'strategy_1', 80);
            
            await riskManager.enforceStrategyLimits('strategy_1');
            
            expect(deactivatedStrategies).toContainEqual({
                strategyId: 'strategy_1',
                reason: 'Profit limit reached',
            });
            expect(auditLogEntries).toContainEqual(
                expect.objectContaining({
                    type: 'risk_intervention',
                    interventionType: 'strategy_profit_limit',
                    strategyId: 'strategy_1',
                    action: 'deactivated_strategy',
                })
            );
        });

        it('should enforce strategy loss limit by deactivating strategy', async () => {
            riskManager.setStrategyLossLimit('strategy_1', 40);
            riskManager.recordBotLoss('bot_1', 'strategy_1', 45);
            
            await riskManager.enforceStrategyLimits('strategy_1');
            
            expect(deactivatedStrategies).toContainEqual({
                strategyId: 'strategy_1',
                reason: 'Loss limit reached',
            });
            expect(auditLogEntries).toContainEqual(
                expect.objectContaining({
                    type: 'risk_intervention',
                    interventionType: 'strategy_loss_limit',
                    strategyId: 'strategy_1',
                    action: 'deactivated_strategy',
                })
            );
        });

        it('should not enforce limits when strategy has no limits configured', async () => {
            riskManager.recordBotProfit('bot_1', 'strategy_1', 100);
            
            await riskManager.enforceStrategyLimits('strategy_1');
            
            expect(deactivatedStrategies).toHaveLength(0);
        });

        it('should handle exact limit values correctly', async () => {
            riskManager.setGlobalProfitTarget(100);
            riskManager.recordBotProfit('bot_1', 'strategy_1', 100);
            
            const result = await riskManager.checkLimits();
            
            expect(result.action).toBe('stop_all');
            expect(result.reason).toBe('profit_target_reached');
        });

        it('should not trigger when just below limit', async () => {
            riskManager.setGlobalProfitTarget(100);
            riskManager.recordBotProfit('bot_1', 'strategy_1', 99.99);
            
            const result = await riskManager.checkLimits();
            
            expect(result.action).toBe('none');
        });
    });

    // ========================================================================
    // Daily Counter Reset Tests (Requirement 13.4, 14.4, 15.5)
    // ========================================================================

    describe('Daily Counter Reset', () => {
        it('should reset all counters when resetDailyCounters is called', () => {
            riskManager.recordBotProfit('bot_1', 'strategy_1', 50);
            riskManager.recordBotLoss('bot_2', 'strategy_2', 30);
            
            expect(riskManager.getCurrentProfit()).toBe(50);
            expect(riskManager.getCurrentLoss()).toBe(30);
            
            riskManager.resetDailyCounters();
            
            expect(riskManager.getCurrentProfit()).toBe(0);
            expect(riskManager.getCurrentLoss()).toBe(0);
            expect(riskManager.getStrategyProfit('strategy_1')).toBe(0);
            expect(riskManager.getStrategyLoss('strategy_2')).toBe(0);
        });

        it('should log daily reset to audit log', () => {
            riskManager.resetDailyCounters();
            
            expect(auditLogEntries).toContainEqual(
                expect.objectContaining({
                    type: 'daily_reset',
                })
            );
        });

        it('should notify user when daily counters are reset', () => {
            riskManager.resetDailyCounters();
            
            expect(notifications).toContainEqual(
                expect.objectContaining({
                    type: 'info',
                    message: expect.stringContaining('Daily profit/loss counters have been reset'),
                })
            );
        });

        it('should reset strategy-specific counters', () => {
            riskManager.recordBotProfit('bot_1', 'strategy_1', 50);
            riskManager.recordBotProfit('bot_2', 'strategy_2', 30);
            riskManager.recordBotLoss('bot_3', 'strategy_1', 20);
            
            riskManager.resetDailyCounters();
            
            expect(riskManager.getStrategyProfit('strategy_1')).toBe(0);
            expect(riskManager.getStrategyProfit('strategy_2')).toBe(0);
            expect(riskManager.getStrategyLoss('strategy_1')).toBe(0);
        });

        it('should allow tracking after reset', () => {
            riskManager.recordBotProfit('bot_1', 'strategy_1', 50);
            riskManager.resetDailyCounters();
            riskManager.recordBotProfit('bot_2', 'strategy_2', 30);
            
            expect(riskManager.getCurrentProfit()).toBe(30);
            expect(riskManager.getStrategyProfit('strategy_2')).toBe(30);
        });

        it('should automatically reset counters at start of new day', async () => {
            // Record some profit/loss
            riskManager.recordBotProfit('bot_1', 'strategy_1', 50);
            
            // Manually trigger the daily reset check by creating a new instance
            // (simulating a new day)
            const originalDate = Date.now;
            const mockDate = new Date('2024-01-16T00:00:00Z');
            Date.now = jest.fn(() => mockDate.getTime());
            
            // Create a new instance which will check for daily reset
            resetRiskManager();
            const newRiskManager = new RiskManager();
            
            // The new instance should have reset counters
            expect(newRiskManager.getCurrentProfit()).toBe(0);
            
            // Restore original Date.now
            Date.now = originalDate;
        });
    });

    // ========================================================================
    // Strategy Deactivation Tests (Requirement 15.2, 15.4)
    // ========================================================================

    describe('Strategy Deactivation', () => {
        it('should deactivate strategy when profit limit is reached', async () => {
            riskManager.setStrategyProfitLimit('strategy_1', 100);
            riskManager.recordBotProfit('bot_1', 'strategy_1', 110);
            
            const result = await riskManager.checkLimits();
            
            expect(result.action).toBe('stop_strategy');
            expect(result.strategyId).toBe('strategy_1');
        });

        it('should deactivate strategy when loss limit is reached', async () => {
            riskManager.setStrategyLossLimit('strategy_1', 50);
            riskManager.recordBotLoss('bot_1', 'strategy_1', 60);
            
            const result = await riskManager.checkLimits();
            
            expect(result.action).toBe('stop_strategy');
            expect(result.strategyId).toBe('strategy_1');
        });

        it('should deactivate only the strategy that breached limit', async () => {
            riskManager.setStrategyProfitLimit('strategy_1', 50);
            riskManager.setStrategyProfitLimit('strategy_2', 100);
            
            riskManager.recordBotProfit('bot_1', 'strategy_1', 60);
            riskManager.recordBotProfit('bot_2', 'strategy_2', 40);
            
            const result = await riskManager.checkLimits();
            
            expect(result.action).toBe('stop_strategy');
            expect(result.strategyId).toBe('strategy_1');
        });

        it('should handle multiple strategies with different limits', async () => {
            riskManager.setStrategyProfitLimit('strategy_1', 50);
            riskManager.setStrategyLossLimit('strategy_2', 30);
            
            riskManager.recordBotProfit('bot_1', 'strategy_1', 40);
            riskManager.recordBotLoss('bot_2', 'strategy_2', 35);
            
            const result = await riskManager.checkLimits();
            
            // Should detect strategy_2 loss limit breach
            expect(result.action).toBe('stop_strategy');
            expect(result.strategyId).toBe('strategy_2');
        });

        it('should notify user when strategy is deactivated due to profit limit', async () => {
            riskManager.setStrategyProfitLimit('strategy_1', 75);
            riskManager.recordBotProfit('bot_1', 'strategy_1', 80);
            
            await riskManager.enforceStrategyLimits('strategy_1');
            
            expect(notifications).toContainEqual(
                expect.objectContaining({
                    type: 'info',
                    message: expect.stringContaining('strategy_1 profit limit reached'),
                })
            );
        });

        it('should notify user when strategy is deactivated due to loss limit', async () => {
            riskManager.setStrategyLossLimit('strategy_1', 40);
            riskManager.recordBotLoss('bot_1', 'strategy_1', 45);
            
            await riskManager.enforceStrategyLimits('strategy_1');
            
            expect(notifications).toContainEqual(
                expect.objectContaining({
                    type: 'warning',
                    message: expect.stringContaining('strategy_1 loss limit reached'),
                })
            );
        });
    });

    // ========================================================================
    // Edge Cases and Error Handling
    // ========================================================================

    describe('Edge Cases', () => {
        it('should handle zero profit and loss correctly', () => {
            expect(riskManager.getCurrentProfit()).toBe(0);
            expect(riskManager.getCurrentLoss()).toBe(0);
            expect(riskManager.getNetProfitLoss()).toBe(0);
        });

        it('should handle very small profit amounts', () => {
            riskManager.recordBotProfit('bot_1', 'strategy_1', 0.01);
            
            expect(riskManager.getCurrentProfit()).toBe(0.01);
        });

        it('should handle very large profit amounts', () => {
            riskManager.recordBotProfit('bot_1', 'strategy_1', 1000000);
            
            expect(riskManager.getCurrentProfit()).toBe(1000000);
        });

        it('should handle decimal profit/loss values accurately', () => {
            riskManager.recordBotProfit('bot_1', 'strategy_1', 12.34);
            riskManager.recordBotLoss('bot_2', 'strategy_2', 5.67);
            
            expect(riskManager.getCurrentProfit()).toBeCloseTo(12.34, 2);
            expect(riskManager.getCurrentLoss()).toBeCloseTo(5.67, 2);
            expect(riskManager.getNetProfitLoss()).toBeCloseTo(6.67, 2);
        });

        it('should handle multiple limit checks without side effects', async () => {
            riskManager.setGlobalProfitTarget(100);
            riskManager.recordBotProfit('bot_1', 'strategy_1', 50);
            
            await riskManager.checkLimits();
            await riskManager.checkLimits();
            await riskManager.checkLimits();
            
            // Should still have the same profit
            expect(riskManager.getCurrentProfit()).toBe(50);
        });

        it('should handle concurrent profit and loss tracking', () => {
            riskManager.recordBotProfit('bot_1', 'strategy_1', 50);
            riskManager.recordBotLoss('bot_2', 'strategy_1', 20);
            riskManager.recordBotProfit('bot_3', 'strategy_1', 30);
            
            expect(riskManager.getStrategyProfit('strategy_1')).toBe(80);
            expect(riskManager.getStrategyLoss('strategy_1')).toBe(20);
            expect(riskManager.getStrategyNetProfitLoss('strategy_1')).toBe(60);
        });

        it('should handle strategy with only profit limit', async () => {
            riskManager.setStrategyProfitLimit('strategy_1', 100);
            riskManager.recordBotLoss('bot_1', 'strategy_1', 200);
            
            const result = await riskManager.checkLimits();
            
            // Should not trigger since only profit limit is set
            expect(result.action).toBe('none');
        });

        it('should handle strategy with only loss limit', async () => {
            riskManager.setStrategyLossLimit('strategy_1', 50);
            riskManager.recordBotProfit('bot_1', 'strategy_1', 200);
            
            const result = await riskManager.checkLimits();
            
            // Should not trigger since only loss limit is set
            expect(result.action).toBe('none');
        });

        it('should handle no callbacks set gracefully', async () => {
            resetRiskManager();
            const newRiskManager = new RiskManager();
            
            newRiskManager.setGlobalProfitTarget(100);
            newRiskManager.recordBotProfit('bot_1', 'strategy_1', 110);
            
            // Should not throw even without callbacks
            await expect(newRiskManager.enforceGlobalLimits()).resolves.not.toThrow();
        });

        it('should handle empty strategy ID', () => {
            expect(() => riskManager.setStrategyProfitLimit('', 100)).not.toThrow();
            expect(() => riskManager.recordBotProfit('bot_1', '', 50)).not.toThrow();
        });
    });

    // ========================================================================
    // Integration Tests
    // ========================================================================

    describe('Integration Scenarios', () => {
        it('should handle complete profit target scenario', async () => {
            // Set up limits
            riskManager.setGlobalProfitTarget(100);
            
            // Record profits from multiple bots
            riskManager.recordBotProfit('bot_1', 'strategy_1', 40);
            riskManager.recordBotProfit('bot_2', 'strategy_2', 35);
            riskManager.recordBotProfit('bot_3', 'strategy_1', 30);
            
            // Check limits
            const result = await riskManager.checkLimits();
            expect(result.action).toBe('stop_all');
            
            // Enforce limits
            await riskManager.enforceGlobalLimits();
            expect(stopAllBotsCalled).toBe(true);
            
            // Verify audit log
            expect(auditLogEntries).toContainEqual(
                expect.objectContaining({
                    type: 'risk_intervention',
                    interventionType: 'global_profit_target',
                })
            );
        });

        it('should handle complete loss limit scenario', async () => {
            // Set up limits
            riskManager.setGlobalLossLimit(50);
            
            // Record losses from multiple bots
            riskManager.recordBotLoss('bot_1', 'strategy_1', 20);
            riskManager.recordBotLoss('bot_2', 'strategy_2', 18);
            riskManager.recordBotLoss('bot_3', 'strategy_1', 15);
            
            // Check limits
            const result = await riskManager.checkLimits();
            expect(result.action).toBe('stop_all');
            
            // Enforce limits
            await riskManager.enforceGlobalLimits();
            expect(stopAllBotsCalled).toBe(true);
            
            // Verify notification
            expect(notifications).toContainEqual(
                expect.objectContaining({
                    type: 'warning',
                    message: expect.stringContaining('Global loss limit reached'),
                })
            );
        });

        it('should handle strategy limit with multiple bots', async () => {
            // Set strategy limit
            riskManager.setStrategyProfitLimit('strategy_1', 80);
            
            // Multiple bots contribute to strategy profit
            riskManager.recordBotProfit('bot_1', 'strategy_1', 30);
            riskManager.recordBotProfit('bot_2', 'strategy_1', 25);
            riskManager.recordBotProfit('bot_3', 'strategy_1', 30);
            
            // Check and enforce
            const result = await riskManager.checkLimits();
            expect(result.action).toBe('stop_strategy');
            expect(result.strategyId).toBe('strategy_1');
            
            await riskManager.enforceStrategyLimits('strategy_1');
            expect(deactivatedStrategies).toContainEqual({
                strategyId: 'strategy_1',
                reason: 'Profit limit reached',
            });
        });

        it('should handle mixed profit and loss tracking', async () => {
            riskManager.setGlobalProfitTarget(100);
            riskManager.setGlobalLossLimit(50);
            
            // Record mixed results
            riskManager.recordBotProfit('bot_1', 'strategy_1', 60);
            riskManager.recordBotLoss('bot_2', 'strategy_2', 20);
            riskManager.recordBotProfit('bot_3', 'strategy_1', 50);
            riskManager.recordBotLoss('bot_4', 'strategy_2', 15);
            
            // Should trigger profit target
            const result = await riskManager.checkLimits();
            expect(result.action).toBe('stop_all');
            expect(result.reason).toBe('profit_target_reached');
            expect(result.details?.currentProfit).toBe(110);
        });

        it('should handle daily reset and continue tracking', () => {
            // Day 1
            riskManager.recordBotProfit('bot_1', 'strategy_1', 50);
            expect(riskManager.getCurrentProfit()).toBe(50);
            
            // Reset for new day
            riskManager.resetDailyCounters();
            expect(riskManager.getCurrentProfit()).toBe(0);
            
            // Day 2
            riskManager.recordBotProfit('bot_2', 'strategy_2', 30);
            expect(riskManager.getCurrentProfit()).toBe(30);
            expect(riskManager.getStrategyProfit('strategy_1')).toBe(0);
            expect(riskManager.getStrategyProfit('strategy_2')).toBe(30);
        });
    });
});
