/**
 * Bot Controller - Bot Builder Integration Tests
 * 
 * Tests for Bot Builder system integration functionality
 * Requirements: 26.1, 26.2, 26.3, 26.4, 26.5
 */

import { BotController, getBotController, resetBotController } from '../bot-controller.service';
import { BotStartConfig } from '../../../types/auto-strategy.types';
import { TStrategy } from '../../../types/strategy.types';

describe('BotController - Bot Builder Integration', () => {
    let controller: BotController;
    let mockRootStore: any;
    let mockRunPanelStore: any;
    let mockLoadModalStore: any;

    beforeEach(() => {
        resetBotController();
        controller = getBotController();

        // Mock stores
        mockRunPanelStore = {
            onRunButtonClick: jest.fn().mockResolvedValue(undefined),
            onStopButtonClick: jest.fn(),
            is_running: false,
        };

        mockLoadModalStore = {
            getDashboardStrategies: jest.fn().mockResolvedValue(undefined),
            dashboard_strategies: [
                {
                    id: 'bot_1',
                    name: 'Test Bot 1',
                    save_type: 'local',
                    timestamp: Date.now(),
                    xml: '<xml>test bot 1</xml>',
                },
                {
                    id: 'bot_2',
                    name: 'Test Bot 2',
                    save_type: 'google_drive',
                    timestamp: Date.now(),
                    xml: '<xml>test bot 2</xml>',
                },
            ],
            loadStrategyToBuilder: jest.fn().mockResolvedValue(undefined),
        };

        mockRootStore = {
            run_panel: mockRunPanelStore,
            load_modal: mockLoadModalStore,
        };

        controller.setRootStore(mockRootStore);
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    describe('getAvailableBots', () => {
        it('should retrieve available bots from Bot Builder', async () => {
            const bots = await controller.getAvailableBots();

            expect(mockLoadModalStore.getDashboardStrategies).toHaveBeenCalled();
            expect(bots).toHaveLength(2);
            expect(bots[0].id).toBe('bot_1');
            expect(bots[0].name).toBe('Test Bot 1');
            expect(bots[1].id).toBe('bot_2');
            expect(bots[1].name).toBe('Test Bot 2');
        });

        it('should return empty array when load modal store is not available', async () => {
            resetBotController();
            const newController = getBotController();

            const bots = await newController.getAvailableBots();

            expect(bots).toEqual([]);
        });

        it('should handle errors gracefully', async () => {
            mockLoadModalStore.getDashboardStrategies.mockRejectedValue(new Error('API error'));

            const bots = await controller.getAvailableBots();

            expect(bots).toEqual([]);
        });
    });

    describe('getBotConfiguration', () => {
        it('should retrieve bot configuration by ID', async () => {
            const config = await controller.getBotConfiguration('bot_1');

            expect(config).not.toBeNull();
            expect(config?.id).toBe('bot_1');
            expect(config?.name).toBe('Test Bot 1');
            expect(config?.xml).toBe('<xml>test bot 1</xml>');
        });

        it('should return null for non-existent bot', async () => {
            const config = await controller.getBotConfiguration('non_existent');

            expect(config).toBeNull();
        });

        it('should handle errors gracefully', async () => {
            mockLoadModalStore.getDashboardStrategies.mockRejectedValue(new Error('API error'));

            const config = await controller.getBotConfiguration('bot_1');

            expect(config).toBeNull();
        });
    });

    describe('Auto-started bot tracking', () => {
        it('should mark bot as auto-started when started', async () => {
            const config: BotStartConfig = {
                botId: 'bot_1',
                strategyId: 'strategy_1',
                stake: 10,
                priority: 1,
            };

            await controller.startBot(config);

            expect(controller.isAutoStarted('bot_1')).toBe(true);
        });

        it('should return false for non-auto-started bots', () => {
            expect(controller.isAutoStarted('bot_1')).toBe(false);
        });

        it('should clear auto-started flag when bot is stopped', async () => {
            const config: BotStartConfig = {
                botId: 'bot_1',
                strategyId: 'strategy_1',
                stake: 10,
                priority: 1,
            };

            await controller.startBot(config);
            expect(controller.isAutoStarted('bot_1')).toBe(true);

            await controller.stopBot('bot_1', 'test_stop');
            expect(controller.isAutoStarted('bot_1')).toBe(false);
        });

        it('should get all auto-started bot IDs', async () => {
            const config1: BotStartConfig = {
                botId: 'bot_1',
                strategyId: 'strategy_1',
                stake: 10,
                priority: 1,
            };

            const config2: BotStartConfig = {
                botId: 'bot_2',
                strategyId: 'strategy_1',
                stake: 10,
                priority: 1,
            };

            await controller.startBot(config1);
            await controller.startBot(config2);

            const autoStartedBots = controller.getAutoStartedBots();
            expect(autoStartedBots).toContain('bot_1');
            expect(autoStartedBots).toContain('bot_2');
            expect(autoStartedBots).toHaveLength(2);
        });
    });

    describe('Manual override support', () => {
        it('should clear auto-started flag for manual override', async () => {
            const config: BotStartConfig = {
                botId: 'bot_1',
                strategyId: 'strategy_1',
                stake: 10,
                priority: 1,
            };

            await controller.startBot(config);
            expect(controller.isAutoStarted('bot_1')).toBe(true);

            controller.clearAutoStartedFlag('bot_1');
            expect(controller.isAutoStarted('bot_1')).toBe(false);
        });

        it('should not error when clearing flag for non-auto-started bot', () => {
            expect(() => {
                controller.clearAutoStartedFlag('bot_1');
            }).not.toThrow();
        });
    });

    describe('Bot validation with Bot Builder', () => {
        it('should validate bot exists in Bot Builder', async () => {
            const config: BotStartConfig = {
                botId: 'bot_1',
                strategyId: 'strategy_1',
                stake: 10,
                priority: 1,
            };

            const result = await controller.startBot(config);

            expect(result.success).toBe(true);
        });

        it('should fail to start non-existent bot', async () => {
            const config: BotStartConfig = {
                botId: 'non_existent',
                strategyId: 'strategy_1',
                stake: 10,
                priority: 1,
            };

            const result = await controller.startBot(config);

            expect(result.success).toBe(false);
            expect(result.reason).toBe('bot_not_found');
        });

        it('should fail to start bot with invalid configuration', async () => {
            // Add a bot with empty XML
            mockLoadModalStore.dashboard_strategies.push({
                id: 'invalid_bot',
                name: 'Invalid Bot',
                save_type: 'local',
                timestamp: Date.now(),
                xml: '',
            });

            const config: BotStartConfig = {
                botId: 'invalid_bot',
                strategyId: 'strategy_1',
                stake: 10,
                priority: 1,
            };

            const result = await controller.startBot(config);

            expect(result.success).toBe(false);
            expect(result.reason).toBe('bot_not_found');
        });
    });

    describe('Integration with run_panel store', () => {
        it('should load bot to workspace and start via run panel', async () => {
            const config: BotStartConfig = {
                botId: 'bot_1',
                strategyId: 'strategy_1',
                stake: 10,
                priority: 1,
            };

            await controller.startBot(config);

            expect(mockLoadModalStore.loadStrategyToBuilder).toHaveBeenCalledWith(
                expect.objectContaining({
                    id: 'bot_1',
                    name: 'Test Bot 1',
                })
            );
            expect(mockRunPanelStore.onRunButtonClick).toHaveBeenCalled();
        });

        it('should stop bot via run panel', async () => {
            const config: BotStartConfig = {
                botId: 'bot_1',
                strategyId: 'strategy_1',
                stake: 10,
                priority: 1,
            };

            await controller.startBot(config);
            await controller.stopBot('bot_1', 'test_stop');

            expect(mockRunPanelStore.onStopButtonClick).toHaveBeenCalled();
        });

        it('should handle missing run panel store gracefully', async () => {
            resetBotController();
            const newController = getBotController();
            
            // Set root store without run panel
            newController.setRootStore({
                run_panel: null,
                load_modal: mockLoadModalStore,
            } as any);

            const config: BotStartConfig = {
                botId: 'bot_1',
                strategyId: 'strategy_1',
                stake: 10,
                priority: 1,
            };

            const result = await newController.startBot(config);

            expect(result.success).toBe(false);
        });
    });

    describe('Audit logging for Bot Builder integration', () => {
        it('should log auto-started flag in bot start event', async () => {
            const auditLog: any[] = [];
            controller.setAuditLogCallback((entry) => auditLog.push(entry));

            const config: BotStartConfig = {
                botId: 'bot_1',
                strategyId: 'strategy_1',
                stake: 10,
                priority: 1,
            };

            await controller.startBot(config);

            const startEvent = auditLog.find(e => e.type === 'bot_started');
            expect(startEvent).toBeDefined();
            expect(startEvent.autoStarted).toBe(true);
        });

        it('should log manual override event', async () => {
            const auditLog: any[] = [];
            controller.setAuditLogCallback((entry) => auditLog.push(entry));

            const config: BotStartConfig = {
                botId: 'bot_1',
                strategyId: 'strategy_1',
                stake: 10,
                priority: 1,
            };

            await controller.startBot(config);
            controller.clearAutoStartedFlag('bot_1');

            const overrideEvent = auditLog.find(e => e.type === 'manual_override');
            expect(overrideEvent).toBeDefined();
            expect(overrideEvent.botId).toBe('bot_1');
            expect(overrideEvent.action).toBe('cleared_auto_started_flag');
        });

        it('should log wasAutoStarted flag in bot stop event', async () => {
            const auditLog: any[] = [];
            controller.setAuditLogCallback((entry) => auditLog.push(entry));

            const config: BotStartConfig = {
                botId: 'bot_1',
                strategyId: 'strategy_1',
                stake: 10,
                priority: 1,
            };

            await controller.startBot(config);
            await controller.stopBot('bot_1', 'test_stop');

            const stopEvent = auditLog.find(e => e.type === 'bot_stopped');
            expect(stopEvent).toBeDefined();
            expect(stopEvent.wasAutoStarted).toBe(true);
        });
    });
});
