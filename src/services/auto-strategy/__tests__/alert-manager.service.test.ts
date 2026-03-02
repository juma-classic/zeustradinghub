/**
 * Unit tests for AlertManager Service
 */

import { AlertManager, AlertType, AlertFilter, AlertConfig, NotificationPermission } from '../alert-manager.service';
import { Strategy, ActionType, LogicOperator, StrategyPriority } from '../../../types/auto-strategy.types';

describe('AlertManager', () => {
    let alertManager: AlertManager;
    let mockStrategy: Strategy;

    beforeEach(() => {
        alertManager = new AlertManager();
        
        mockStrategy = {
            id: 'test-strategy-1',
            name: 'Test Strategy',
            description: 'Test strategy for alerts',
            symbol: 'R_100',
            conditions: [],
            logicOperator: LogicOperator.AND,
            action: {
                type: ActionType.StartBot,
                botId: 'test-bot-1',
                stake: 10,
            },
            priority: StrategyPriority.Medium,
            cooldownPeriod: 60,
            isActive: true,
            isPaused: false,
            createdAt: Date.now(),
            updatedAt: Date.now(),
        };

        // Clear localStorage
        localStorage.clear();
    });

    afterEach(() => {
        alertManager.destroy();
    });

    describe('Alert Configuration', () => {
        it('should set and get alert configuration', () => {
            const config: AlertConfig = {
                strategyId: 'test-strategy-1',
                enabledAlerts: [AlertType.BrowserNotification, AlertType.SoundAlert],
                filter: AlertFilter.BotStartsOnly,
            };

            alertManager.setAlertConfig(config);
            const retrieved = alertManager.getAlertConfig('test-strategy-1');

            expect(retrieved).toEqual(config);
        });

        it('should get all alert configurations', () => {
            const config1: AlertConfig = {
                strategyId: 'strategy-1',
                enabledAlerts: [AlertType.BrowserNotification],
                filter: AlertFilter.All,
            };

            const config2: AlertConfig = {
                strategyId: 'strategy-2',
                enabledAlerts: [AlertType.SoundAlert],
                filter: AlertFilter.BotStopsOnly,
            };

            alertManager.setAlertConfig(config1);
            alertManager.setAlertConfig(config2);

            const allConfigs = alertManager.getAllAlertConfigs();
            expect(allConfigs).toHaveLength(2);
            expect(allConfigs).toContainEqual(config1);
            expect(allConfigs).toContainEqual(config2);
        });

        it('should remove alert configuration', () => {
            const config: AlertConfig = {
                strategyId: 'test-strategy-1',
                enabledAlerts: [AlertType.VisualIndicator],
                filter: AlertFilter.None,
            };

            alertManager.setAlertConfig(config);
            expect(alertManager.getAlertConfig('test-strategy-1')).toEqual(config);

            alertManager.removeAlertConfig('test-strategy-1');
            expect(alertManager.getAlertConfig('test-strategy-1')).toBeUndefined();
        });

        it('should persist alert configurations to localStorage', () => {
            const config: AlertConfig = {
                strategyId: 'test-strategy-1',
                enabledAlerts: [AlertType.BrowserNotification],
                filter: AlertFilter.All,
            };

            alertManager.setAlertConfig(config);

            // Create new instance and load
            const newAlertManager = new AlertManager();
            newAlertManager.loadAlertConfigs();

            expect(newAlertManager.getAlertConfig('test-strategy-1')).toEqual(config);
            newAlertManager.destroy();
        });
    });

    describe('Alert Filtering', () => {
        it('should show all alerts when filter is All', async () => {
            const config: AlertConfig = {
                strategyId: mockStrategy.id,
                enabledAlerts: [AlertType.VisualIndicator],
                filter: AlertFilter.All,
            };

            alertManager.setAlertConfig(config);

            let alertCount = 0;
            alertManager.onVisualAlert(() => alertCount++);

            await alertManager.triggerAlert(mockStrategy, ActionType.StartBot, 'bot-1');
            await alertManager.triggerAlert(mockStrategy, ActionType.StopBot, 'bot-1');

            expect(alertCount).toBe(2);
        });

        it('should only show bot starts when filter is BotStartsOnly', async () => {
            const config: AlertConfig = {
                strategyId: mockStrategy.id,
                enabledAlerts: [AlertType.VisualIndicator],
                filter: AlertFilter.BotStartsOnly,
            };

            alertManager.setAlertConfig(config);

            let alertCount = 0;
            alertManager.onVisualAlert(() => alertCount++);

            await alertManager.triggerAlert(mockStrategy, ActionType.StartBot, 'bot-1');
            await alertManager.triggerAlert(mockStrategy, ActionType.StopBot, 'bot-1');
            await alertManager.triggerAlert(mockStrategy, ActionType.SwitchBot, 'bot-2');

            expect(alertCount).toBe(2); // StartBot and SwitchBot
        });

        it('should only show bot stops when filter is BotStopsOnly', async () => {
            const config: AlertConfig = {
                strategyId: mockStrategy.id,
                enabledAlerts: [AlertType.VisualIndicator],
                filter: AlertFilter.BotStopsOnly,
            };

            alertManager.setAlertConfig(config);

            let alertCount = 0;
            alertManager.onVisualAlert(() => alertCount++);

            await alertManager.triggerAlert(mockStrategy, ActionType.StartBot, 'bot-1');
            await alertManager.triggerAlert(mockStrategy, ActionType.StopBot, 'bot-1');
            await alertManager.triggerAlert(mockStrategy, ActionType.SwitchBot, 'bot-2');

            expect(alertCount).toBe(2); // StopBot and SwitchBot
        });

        it('should show no alerts when filter is None', async () => {
            const config: AlertConfig = {
                strategyId: mockStrategy.id,
                enabledAlerts: [AlertType.VisualIndicator],
                filter: AlertFilter.None,
            };

            alertManager.setAlertConfig(config);

            let alertCount = 0;
            alertManager.onVisualAlert(() => alertCount++);

            await alertManager.triggerAlert(mockStrategy, ActionType.StartBot, 'bot-1');
            await alertManager.triggerAlert(mockStrategy, ActionType.StopBot, 'bot-1');

            expect(alertCount).toBe(0);
        });
    });

    describe('Visual Alerts', () => {
        it('should trigger visual alert callbacks', async () => {
            const config: AlertConfig = {
                strategyId: mockStrategy.id,
                enabledAlerts: [AlertType.VisualIndicator],
                filter: AlertFilter.All,
            };

            alertManager.setAlertConfig(config);

            let receivedEvent: any = null;
            alertManager.onVisualAlert((event) => {
                receivedEvent = event;
            });

            await alertManager.triggerAlert(mockStrategy, ActionType.StartBot, 'bot-1', 'Test message');

            expect(receivedEvent).not.toBeNull();
            expect(receivedEvent.strategyId).toBe(mockStrategy.id);
            expect(receivedEvent.strategyName).toBe(mockStrategy.name);
            expect(receivedEvent.action).toBe(ActionType.StartBot);
            expect(receivedEvent.botId).toBe('bot-1');
            expect(receivedEvent.message).toBe('Test message');
        });

        it('should support multiple visual alert callbacks', async () => {
            const config: AlertConfig = {
                strategyId: mockStrategy.id,
                enabledAlerts: [AlertType.VisualIndicator],
                filter: AlertFilter.All,
            };

            alertManager.setAlertConfig(config);

            let callback1Called = false;
            let callback2Called = false;

            alertManager.onVisualAlert(() => { callback1Called = true; });
            alertManager.onVisualAlert(() => { callback2Called = true; });

            await alertManager.triggerAlert(mockStrategy, ActionType.StartBot, 'bot-1');

            expect(callback1Called).toBe(true);
            expect(callback2Called).toBe(true);
        });

        it('should unsubscribe visual alert callbacks', async () => {
            const config: AlertConfig = {
                strategyId: mockStrategy.id,
                enabledAlerts: [AlertType.VisualIndicator],
                filter: AlertFilter.All,
            };

            alertManager.setAlertConfig(config);

            let callbackCount = 0;
            const unsubscribe = alertManager.onVisualAlert(() => { callbackCount++; });

            await alertManager.triggerAlert(mockStrategy, ActionType.StartBot, 'bot-1');
            expect(callbackCount).toBe(1);

            unsubscribe();

            await alertManager.triggerAlert(mockStrategy, ActionType.StartBot, 'bot-2');
            expect(callbackCount).toBe(1); // Should not increase
        });
    });

    describe('Alert History', () => {
        it('should add alerts to history', async () => {
            const config: AlertConfig = {
                strategyId: mockStrategy.id,
                enabledAlerts: [AlertType.VisualIndicator],
                filter: AlertFilter.All,
            };

            alertManager.setAlertConfig(config);

            await alertManager.triggerAlert(mockStrategy, ActionType.StartBot, 'bot-1');
            await alertManager.triggerAlert(mockStrategy, ActionType.StopBot, 'bot-1');

            const history = alertManager.getAlertHistory();
            expect(history).toHaveLength(2);
            expect(history[0].action).toBe(ActionType.StopBot); // Most recent first
            expect(history[1].action).toBe(ActionType.StartBot);
        });

        it('should limit history size', async () => {
            alertManager.setMaxHistorySize(5);

            const config: AlertConfig = {
                strategyId: mockStrategy.id,
                enabledAlerts: [AlertType.VisualIndicator],
                filter: AlertFilter.All,
            };

            alertManager.setAlertConfig(config);

            // Trigger 10 alerts
            for (let i = 0; i < 10; i++) {
                await alertManager.triggerAlert(mockStrategy, ActionType.StartBot, `bot-${i}`);
            }

            const history = alertManager.getAlertHistory();
            expect(history).toHaveLength(5);
        });

        it('should get limited history', async () => {
            const config: AlertConfig = {
                strategyId: mockStrategy.id,
                enabledAlerts: [AlertType.VisualIndicator],
                filter: AlertFilter.All,
            };

            alertManager.setAlertConfig(config);

            for (let i = 0; i < 10; i++) {
                await alertManager.triggerAlert(mockStrategy, ActionType.StartBot, `bot-${i}`);
            }

            const history = alertManager.getAlertHistory(3);
            expect(history).toHaveLength(3);
        });

        it('should clear alert history', async () => {
            const config: AlertConfig = {
                strategyId: mockStrategy.id,
                enabledAlerts: [AlertType.VisualIndicator],
                filter: AlertFilter.All,
            };

            alertManager.setAlertConfig(config);

            await alertManager.triggerAlert(mockStrategy, ActionType.StartBot, 'bot-1');
            expect(alertManager.getAlertHistory()).toHaveLength(1);

            alertManager.clearAlertHistory();
            expect(alertManager.getAlertHistory()).toHaveLength(0);
        });

        it('should persist alert history to localStorage', async () => {
            const config: AlertConfig = {
                strategyId: mockStrategy.id,
                enabledAlerts: [AlertType.VisualIndicator],
                filter: AlertFilter.All,
            };

            alertManager.setAlertConfig(config);
            await alertManager.triggerAlert(mockStrategy, ActionType.StartBot, 'bot-1');

            // Create new instance and load
            const newAlertManager = new AlertManager();
            newAlertManager.loadAlertHistory();

            const history = newAlertManager.getAlertHistory();
            expect(history).toHaveLength(1);
            expect(history[0].botId).toBe('bot-1');
            newAlertManager.destroy();
        });
    });

    describe('Notification Permission', () => {
        it('should get notification permission status', () => {
            const permission = alertManager.getNotificationPermission();
            expect([
                NotificationPermission.Granted,
                NotificationPermission.Denied,
                NotificationPermission.Default,
            ]).toContain(permission);
        });
    });

    describe('Default Behavior', () => {
        it('should use default config when no config is set', async () => {
            let visualAlertTriggered = false;
            alertManager.onVisualAlert(() => { visualAlertTriggered = true; });

            await alertManager.triggerAlert(mockStrategy, ActionType.StartBot, 'bot-1');

            // Default should include visual indicator
            expect(visualAlertTriggered).toBe(true);
        });
    });
});
