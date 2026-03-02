/**
 * Unit tests for AuditLog service
 */

import {
    AuditLog,
    AuditEventType,
    getAuditLog,
    resetAuditLog,
    type AuditEntry,
    type AuditSearchCriteria,
} from '../audit-log.service';

describe('AuditLog Service', () => {
    let auditLog: AuditLog;

    beforeEach(() => {
        // Clear localStorage before each test
        localStorage.clear();
        resetAuditLog();
        auditLog = new AuditLog();
    });

    afterEach(() => {
        localStorage.clear();
        resetAuditLog();
    });

    // ========================================================================
    // Event Logging Tests
    // ========================================================================

    describe('Event Logging', () => {
        test('should log strategy trigger event', () => {
            auditLog.logStrategyTrigger({
                strategyId: 'strategy-1',
                strategyName: 'Test Strategy',
                conditionsMet: ['digit_frequency > 5', 'volatility < 0.5'],
                action: 'start_bot',
                botId: 'bot-1',
            });

            const entries = auditLog.getAllEntries();
            expect(entries).toHaveLength(1);
            expect(entries[0].type).toBe(AuditEventType.StrategyTrigger);
            expect(entries[0]).toMatchObject({
                strategyId: 'strategy-1',
                strategyName: 'Test Strategy',
                action: 'start_bot',
                botId: 'bot-1',
            });
            expect(entries[0].message).toContain('Test Strategy');
            expect(entries[0].message).toContain('start_bot');
        });

        test('should log bot started event', () => {
            auditLog.logBotStarted({
                botId: 'bot-1',
                botName: 'Martingale Bot',
                strategyId: 'strategy-1',
                strategyName: 'Test Strategy',
                stake: 10.5,
            });

            const entries = auditLog.getAllEntries();
            expect(entries).toHaveLength(1);
            expect(entries[0].type).toBe(AuditEventType.BotStarted);
            expect(entries[0]).toMatchObject({
                botId: 'bot-1',
                botName: 'Martingale Bot',
                stake: 10.5,
            });
            expect(entries[0].message).toContain('Martingale Bot');
            expect(entries[0].message).toContain('10.5');
        });

        test('should log bot stopped event', () => {
            auditLog.logBotStopped({
                botId: 'bot-1',
                botName: 'Martingale Bot',
                reason: 'Strategy deactivated',
                strategyId: 'strategy-1',
                duration: 3600000, // 1 hour
            });

            const entries = auditLog.getAllEntries();
            expect(entries).toHaveLength(1);
            expect(entries[0].type).toBe(AuditEventType.BotStopped);
            expect(entries[0]).toMatchObject({
                botId: 'bot-1',
                reason: 'Strategy deactivated',
                duration: 3600000,
            });
            expect(entries[0].message).toContain('stopped');
        });

        test('should log bot switched event', () => {
            auditLog.logBotSwitched({
                fromBotId: 'bot-1',
                toBotId: 'bot-2',
                strategyId: 'strategy-1',
                strategyName: 'Test Strategy',
            });

            const entries = auditLog.getAllEntries();
            expect(entries).toHaveLength(1);
            expect(entries[0].type).toBe(AuditEventType.BotSwitched);
            expect(entries[0]).toMatchObject({
                fromBotId: 'bot-1',
                toBotId: 'bot-2',
            });
            expect(entries[0].message).toContain('switched');
        });

        test('should log risk intervention event', () => {
            auditLog.logRiskIntervention({
                interventionType: 'profit_target',
                currentValue: 150.5,
                limit: 150,
                botsStopped: ['bot-1', 'bot-2'],
            });

            const entries = auditLog.getAllEntries();
            expect(entries).toHaveLength(1);
            expect(entries[0].type).toBe(AuditEventType.RiskIntervention);
            expect(entries[0]).toMatchObject({
                interventionType: 'profit_target',
                currentValue: 150.5,
                limit: 150,
            });
            expect(entries[0].message).toContain('Risk intervention');
        });

        test('should log error event with stack trace', () => {
            const error = new Error('Test error');
            auditLog.logError({
                errorMessage: 'Test error',
                stackTrace: error.stack,
                context: 'StrategyEvaluator',
                strategyId: 'strategy-1',
            });

            const entries = auditLog.getAllEntries();
            expect(entries).toHaveLength(1);
            expect(entries[0].type).toBe(AuditEventType.Error);
            expect(entries[0]).toMatchObject({
                errorMessage: 'Test error',
                context: 'StrategyEvaluator',
            });
            expect((entries[0] as any).stackTrace).toBeDefined();
        });

        test('should generate unique IDs for each entry', () => {
            auditLog.logBotStarted({
                botId: 'bot-1',
                botName: 'Bot 1',
                strategyId: 'strategy-1',
                strategyName: 'Strategy 1',
                stake: 10,
            });

            auditLog.logBotStarted({
                botId: 'bot-2',
                botName: 'Bot 2',
                strategyId: 'strategy-1',
                strategyName: 'Strategy 1',
                stake: 10,
            });

            const entries = auditLog.getAllEntries();
            expect(entries[0].id).not.toBe(entries[1].id);
        });

        test('should add timestamps to all entries', () => {
            const beforeTime = Date.now();
            
            auditLog.logBotStarted({
                botId: 'bot-1',
                botName: 'Bot 1',
                strategyId: 'strategy-1',
                strategyName: 'Strategy 1',
                stake: 10,
            });

            const afterTime = Date.now();
            const entries = auditLog.getAllEntries();
            
            expect(entries[0].timestamp).toBeGreaterThanOrEqual(beforeTime);
            expect(entries[0].timestamp).toBeLessThanOrEqual(afterTime);
        });
    });

    // ========================================================================
    // Retrieval Tests
    // ========================================================================

    describe('Retrieval Methods', () => {
        beforeEach(() => {
            // Add test data
            auditLog.logStrategyTrigger({
                strategyId: 'strategy-1',
                strategyName: 'Strategy 1',
                conditionsMet: ['condition1'],
                action: 'start_bot',
            });

            auditLog.logBotStarted({
                botId: 'bot-1',
                botName: 'Bot 1',
                strategyId: 'strategy-1',
                strategyName: 'Strategy 1',
                stake: 10,
            });

            auditLog.logBotStopped({
                botId: 'bot-1',
                botName: 'Bot 1',
                reason: 'Manual stop',
            });

            auditLog.logError({
                errorMessage: 'Test error',
                context: 'Test',
            });
        });

        test('should get all entries sorted by timestamp (newest first)', () => {
            const entries = auditLog.getAllEntries();
            expect(entries).toHaveLength(4);
            
            // Verify sorted by timestamp descending
            for (let i = 0; i < entries.length - 1; i++) {
                expect(entries[i].timestamp).toBeGreaterThanOrEqual(entries[i + 1].timestamp);
            }
        });

        test('should get entries by type', () => {
            const botStartedEntries = auditLog.getEntriesByType(AuditEventType.BotStarted);
            expect(botStartedEntries).toHaveLength(1);
            expect(botStartedEntries[0].type).toBe(AuditEventType.BotStarted);

            const errorEntries = auditLog.getEntriesByType(AuditEventType.Error);
            expect(errorEntries).toHaveLength(1);
            expect(errorEntries[0].type).toBe(AuditEventType.Error);
        });

        test('should get entries by strategy ID', () => {
            const strategyEntries = auditLog.getEntriesByStrategy('strategy-1');
            expect(strategyEntries).toHaveLength(2); // strategy trigger + bot started
            expect(strategyEntries.every(e => 'strategyId' in e && e.strategyId === 'strategy-1')).toBe(true);
        });

        test('should get entries by bot ID', () => {
            const botEntries = auditLog.getEntriesByBot('bot-1');
            expect(botEntries).toHaveLength(2); // bot started + bot stopped
        });

        test('should get entries by date range', () => {
            const now = Date.now();
            const oneHourAgo = now - 3600000;
            const oneHourFromNow = now + 3600000;

            const entries = auditLog.getEntriesByDateRange(oneHourAgo, oneHourFromNow);
            expect(entries.length).toBeGreaterThan(0);
            expect(entries.every(e => e.timestamp >= oneHourAgo && e.timestamp <= oneHourFromNow)).toBe(true);
        });
    });

    // ========================================================================
    // Search and Filter Tests
    // ========================================================================

    describe('Search and Filter', () => {
        beforeEach(() => {
            // Add diverse test data
            auditLog.logStrategyTrigger({
                strategyId: 'strategy-1',
                strategyName: 'Digit Strategy',
                conditionsMet: ['digit_frequency > 5'],
                action: 'start_bot',
                botId: 'bot-1',
            });

            auditLog.logBotStarted({
                botId: 'bot-1',
                botName: 'Martingale Bot',
                strategyId: 'strategy-1',
                strategyName: 'Digit Strategy',
                stake: 10,
            });

            auditLog.logStrategyTrigger({
                strategyId: 'strategy-2',
                strategyName: 'Volatility Strategy',
                conditionsMet: ['volatility < 0.5'],
                action: 'start_bot',
                botId: 'bot-2',
            });

            auditLog.logBotStarted({
                botId: 'bot-2',
                botName: 'D\'Alembert Bot',
                strategyId: 'strategy-2',
                strategyName: 'Volatility Strategy',
                stake: 20,
            });

            auditLog.logError({
                errorMessage: 'Connection failed',
                context: 'MarketDataMonitor',
            });
        });

        test('should search by text in message', () => {
            const results = auditLog.search({ text: 'Martingale' });
            expect(results).toHaveLength(1);
            expect(results[0].type).toBe(AuditEventType.BotStarted);
        });

        test('should search by text in strategy name', () => {
            const results = auditLog.search({ text: 'Volatility' });
            expect(results.length).toBeGreaterThan(0);
            expect(results.some(e => 'strategyName' in e && e.strategyName.includes('Volatility'))).toBe(true);
        });

        test('should filter by event type', () => {
            const results = auditLog.search({ eventType: AuditEventType.StrategyTrigger });
            expect(results).toHaveLength(2);
            expect(results.every(e => e.type === AuditEventType.StrategyTrigger)).toBe(true);
        });

        test('should filter by strategy ID', () => {
            const results = auditLog.search({ strategyId: 'strategy-1' });
            expect(results).toHaveLength(2);
            expect(results.every(e => 'strategyId' in e && e.strategyId === 'strategy-1')).toBe(true);
        });

        test('should filter by bot ID', () => {
            const results = auditLog.search({ botId: 'bot-2' });
            expect(results.length).toBeGreaterThan(0);
        });

        test('should filter by date range', () => {
            const now = Date.now();
            const results = auditLog.search({
                startDate: now - 1000,
                endDate: now + 1000,
            });
            expect(results.length).toBeGreaterThan(0);
        });

        test('should combine multiple search criteria', () => {
            const results = auditLog.search({
                eventType: AuditEventType.BotStarted,
                strategyId: 'strategy-1',
                text: 'Martingale',
            });
            expect(results).toHaveLength(1);
            expect(results[0].type).toBe(AuditEventType.BotStarted);
        });

        test('should limit search results', () => {
            const results = auditLog.search({ limit: 2 });
            expect(results).toHaveLength(2);
        });

        test('should return empty array when no matches found', () => {
            const results = auditLog.search({ text: 'nonexistent' });
            expect(results).toHaveLength(0);
        });
    });

    // ========================================================================
    // Persistence Tests
    // ========================================================================

    describe('Persistence', () => {
        test('should persist entries to localStorage', () => {
            auditLog.logBotStarted({
                botId: 'bot-1',
                botName: 'Bot 1',
                strategyId: 'strategy-1',
                strategyName: 'Strategy 1',
                stake: 10,
            });

            const stored = localStorage.getItem('auto_strategy_audit_log');
            expect(stored).toBeTruthy();
            
            const parsed = JSON.parse(stored!);
            expect(Array.isArray(parsed)).toBe(true);
            expect(parsed).toHaveLength(1);
        });

        test('should load entries from localStorage on initialization', () => {
            // Add entry and get stored data
            auditLog.logBotStarted({
                botId: 'bot-1',
                botName: 'Bot 1',
                strategyId: 'strategy-1',
                strategyName: 'Strategy 1',
                stake: 10,
            });

            // Create new instance (should load from storage)
            const newAuditLog = new AuditLog();
            const entries = newAuditLog.getAllEntries();
            
            expect(entries).toHaveLength(1);
            expect(entries[0].type).toBe(AuditEventType.BotStarted);
        });

        test('should handle corrupted localStorage data gracefully', () => {
            localStorage.setItem('auto_strategy_audit_log', 'invalid json');
            
            // Should not throw error
            expect(() => new AuditLog()).not.toThrow();
            
            const newAuditLog = new AuditLog();
            expect(newAuditLog.getAllEntries()).toHaveLength(0);
        });
    });

    // ========================================================================
    // Cleanup and Maintenance Tests
    // ========================================================================

    describe('Cleanup and Maintenance', () => {
        test('should remove entries older than 90 days', () => {
            // Add old entry by manipulating timestamp
            auditLog.logBotStarted({
                botId: 'bot-1',
                botName: 'Bot 1',
                strategyId: 'strategy-1',
                strategyName: 'Strategy 1',
                stake: 10,
            });

            const entries = auditLog.getAllEntries();
            const oldEntry = entries[0];
            
            // Manually set old timestamp (91 days ago)
            (oldEntry as any).timestamp = Date.now() - (91 * 24 * 60 * 60 * 1000);
            
            // Save modified entry
            localStorage.setItem('auto_strategy_audit_log', JSON.stringify([oldEntry]));
            
            // Create new instance (should cleanup on init)
            const newAuditLog = new AuditLog();
            expect(newAuditLog.getAllEntries()).toHaveLength(0);
        });

        test('should keep entries within 90 days', () => {
            auditLog.logBotStarted({
                botId: 'bot-1',
                botName: 'Bot 1',
                strategyId: 'strategy-1',
                strategyName: 'Strategy 1',
                stake: 10,
            });

            const removedCount = auditLog.cleanup();
            expect(removedCount).toBe(0);
            expect(auditLog.getAllEntries()).toHaveLength(1);
        });

        test('should clear all entries', () => {
            auditLog.logBotStarted({
                botId: 'bot-1',
                botName: 'Bot 1',
                strategyId: 'strategy-1',
                strategyName: 'Strategy 1',
                stake: 10,
            });

            auditLog.clear();
            expect(auditLog.getAllEntries()).toHaveLength(0);
            
            // Verify localStorage is also cleared
            const stored = localStorage.getItem('auto_strategy_audit_log');
            expect(JSON.parse(stored!)).toHaveLength(0);
        });

        test('should return statistics', () => {
            auditLog.logStrategyTrigger({
                strategyId: 'strategy-1',
                strategyName: 'Strategy 1',
                conditionsMet: ['condition1'],
                action: 'start_bot',
            });

            auditLog.logBotStarted({
                botId: 'bot-1',
                botName: 'Bot 1',
                strategyId: 'strategy-1',
                strategyName: 'Strategy 1',
                stake: 10,
            });

            auditLog.logError({
                errorMessage: 'Test error',
            });

            const stats = auditLog.getStats();
            expect(stats.totalEntries).toBe(3);
            expect(stats.entriesByType[AuditEventType.StrategyTrigger]).toBe(1);
            expect(stats.entriesByType[AuditEventType.BotStarted]).toBe(1);
            expect(stats.entriesByType[AuditEventType.Error]).toBe(1);
            expect(stats.oldestEntry).toBeDefined();
            expect(stats.newestEntry).toBeDefined();
            expect(stats.storageSize).toBeGreaterThan(0);
        });
    });

    // ========================================================================
    // Singleton Tests
    // ========================================================================

    describe('Singleton Pattern', () => {
        test('should return same instance', () => {
            const instance1 = getAuditLog();
            const instance2 = getAuditLog();
            expect(instance1).toBe(instance2);
        });

        test('should reset singleton instance', () => {
            const instance1 = getAuditLog();
            resetAuditLog();
            const instance2 = getAuditLog();
            expect(instance1).not.toBe(instance2);
        });
    });

    // ========================================================================
    // Edge Cases
    // ========================================================================

    describe('Edge Cases', () => {
        test('should handle empty search criteria', () => {
            auditLog.logBotStarted({
                botId: 'bot-1',
                botName: 'Bot 1',
                strategyId: 'strategy-1',
                strategyName: 'Strategy 1',
                stake: 10,
            });

            const results = auditLog.search({});
            expect(results).toHaveLength(1);
        });

        test('should handle bot switched entries in bot search', () => {
            auditLog.logBotSwitched({
                fromBotId: 'bot-1',
                toBotId: 'bot-2',
                strategyId: 'strategy-1',
                strategyName: 'Strategy 1',
            });

            const bot1Entries = auditLog.getEntriesByBot('bot-1');
            const bot2Entries = auditLog.getEntriesByBot('bot-2');
            
            expect(bot1Entries).toHaveLength(1);
            expect(bot2Entries).toHaveLength(1);
        });

        test('should handle entries without optional fields', () => {
            auditLog.logBotStopped({
                botId: 'bot-1',
                botName: 'Bot 1',
                reason: 'Manual stop',
                // No strategyId or duration
            });

            const entries = auditLog.getAllEntries();
            expect(entries).toHaveLength(1);
            expect(entries[0].message).toBeTruthy();
        });

        test('should handle very large number of entries', () => {
            // Add many entries
            for (let i = 0; i < 100; i++) {
                auditLog.logBotStarted({
                    botId: `bot-${i}`,
                    botName: `Bot ${i}`,
                    strategyId: 'strategy-1',
                    strategyName: 'Strategy 1',
                    stake: 10,
                });
            }

            const entries = auditLog.getAllEntries();
            expect(entries).toHaveLength(100);
            
            // Search should still work efficiently
            const results = auditLog.search({ limit: 10 });
            expect(results).toHaveLength(10);
        });
    });
});
