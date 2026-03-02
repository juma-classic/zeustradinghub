import { renderHook, act, waitFor } from '@testing-library/react';
import { useAutoStrategyController } from '../useAutoStrategyController';
import { getAutoStrategyController, resetAutoStrategyController, ControllerStatus } from '../../services/auto-strategy/auto-strategy-controller.service';
import { ConnectionStatus, StrategyPriority, ActionType, LogicOperator } from '../../types/auto-strategy.types';

// Mock the controller
jest.mock('../../services/auto-strategy/auto-strategy-controller.service', () => ({
    getAutoStrategyController: jest.fn(),
    resetAutoStrategyController: jest.fn(),
}));

describe('useAutoStrategyController', () => {
    let mockController: any;

    beforeEach(() => {
        // Reset mocks
        jest.clearAllMocks();

        // Create mock controller
        mockController = {
            initialize: jest.fn().mockResolvedValue(undefined),
            start: jest.fn().mockResolvedValue(undefined),
            stop: jest.fn().mockResolvedValue(undefined),
            emergencyStop: jest.fn().mockResolvedValue(undefined),
            createStrategy: jest.fn().mockResolvedValue('strategy-1'),
            updateStrategy: jest.fn().mockResolvedValue(undefined),
            deleteStrategy: jest.fn().mockResolvedValue(undefined),
            activateStrategy: jest.fn().mockResolvedValue(undefined),
            deactivateStrategy: jest.fn().mockResolvedValue(undefined),
            pauseStrategy: jest.fn().mockResolvedValue(undefined),
            resumeStrategy: jest.fn().mockResolvedValue(undefined),
            getStatus: jest.fn().mockReturnValue('stopped'),
            getActiveStrategies: jest.fn().mockReturnValue([]),
            getStrategyPerformance: jest.fn().mockReturnValue(null),
            getStrategyWarnings: jest.fn().mockReturnValue([]),
            exportStrategy: jest.fn().mockReturnValue(null),
            importStrategy: jest.fn().mockResolvedValue('imported-strategy-1'),
            onUpdate: jest.fn().mockReturnValue(() => {}),
            strategyStorage: {
                getAllStrategies: jest.fn().mockReturnValue([]),
            },
        };

        (getAutoStrategyController as jest.Mock).mockReturnValue(mockController);
    });

    afterEach(() => {
        jest.restoreAllMocks();
    });

    describe('Initialization', () => {
        it('initializes with correct default state', () => {
            const { result } = renderHook(() => useAutoStrategyController());

            expect(result.current.status).toBe('stopped');
            expect(result.current.connectionStatus).toBe('disconnected');
            expect(result.current.isInitialized).toBe(false);
            expect(result.current.strategies).toEqual([]);
            expect(result.current.activeStrategies).toEqual([]);
            expect(result.current.runningBots).toEqual([]);
            expect(result.current.error).toBeNull();
        });

        it('subscribes to controller updates on mount', () => {
            renderHook(() => useAutoStrategyController());

            expect(mockController.onUpdate).toHaveBeenCalledTimes(1);
            expect(mockController.onUpdate).toHaveBeenCalledWith(expect.any(Function));
        });

        it('unsubscribes from controller updates on unmount', () => {
            const unsubscribe = jest.fn();
            mockController.onUpdate.mockReturnValue(unsubscribe);

            const { unmount } = renderHook(() => useAutoStrategyController());

            unmount();

            expect(unsubscribe).toHaveBeenCalledTimes(1);
        });
    });

    describe('Lifecycle Methods', () => {
        it('calls initialize on controller', async () => {
            const { result } = renderHook(() => useAutoStrategyController());

            await act(async () => {
                await result.current.initialize();
            });

            expect(mockController.initialize).toHaveBeenCalledTimes(1);
            expect(result.current.isInitialized).toBe(true);
            expect(result.current.error).toBeNull();
        });

        it('handles initialize error', async () => {
            const error = new Error('Initialize failed');
            mockController.initialize.mockRejectedValue(error);

            const { result } = renderHook(() => useAutoStrategyController());

            await act(async () => {
                try {
                    await result.current.initialize();
                } catch (e) {
                    // Expected error
                }
            });

            expect(result.current.error).toBe(error);
        });

        it('calls start on controller', async () => {
            const { result } = renderHook(() => useAutoStrategyController());

            await act(async () => {
                await result.current.start();
            });

            expect(mockController.start).toHaveBeenCalledTimes(1);
        });

        it('calls stop on controller', async () => {
            const { result } = renderHook(() => useAutoStrategyController());

            await act(async () => {
                await result.current.stop();
            });

            expect(mockController.stop).toHaveBeenCalledTimes(1);
        });

        it('calls emergencyStop on controller', async () => {
            const { result } = renderHook(() => useAutoStrategyController());

            await act(async () => {
                await result.current.emergencyStop();
            });

            expect(mockController.emergencyStop).toHaveBeenCalledTimes(1);
        });
    });

    describe('Strategy Management', () => {
        const mockStrategy = {
            name: 'Test Strategy',
            description: 'Test description',
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
            isActive: false,
            isPaused: false,
        };

        it('creates a strategy', async () => {
            const { result } = renderHook(() => useAutoStrategyController());

            let strategyId: string = '';
            await act(async () => {
                strategyId = await result.current.createStrategy(mockStrategy);
            });

            expect(mockController.createStrategy).toHaveBeenCalledWith(mockStrategy);
            expect(strategyId).toBe('strategy-1');
        });

        it('updates a strategy', async () => {
            const { result } = renderHook(() => useAutoStrategyController());

            await act(async () => {
                await result.current.updateStrategy('strategy-1', { name: 'Updated Name' });
            });

            expect(mockController.updateStrategy).toHaveBeenCalledWith('strategy-1', { name: 'Updated Name' });
        });

        it('deletes a strategy', async () => {
            const { result } = renderHook(() => useAutoStrategyController());

            await act(async () => {
                await result.current.deleteStrategy('strategy-1');
            });

            expect(mockController.deleteStrategy).toHaveBeenCalledWith('strategy-1');
        });

        it('activates a strategy', async () => {
            const { result } = renderHook(() => useAutoStrategyController());

            await act(async () => {
                await result.current.activateStrategy('strategy-1');
            });

            expect(mockController.activateStrategy).toHaveBeenCalledWith('strategy-1');
        });

        it('deactivates a strategy', async () => {
            const { result } = renderHook(() => useAutoStrategyController());

            await act(async () => {
                await result.current.deactivateStrategy('strategy-1');
            });

            expect(mockController.deactivateStrategy).toHaveBeenCalledWith('strategy-1');
        });

        it('pauses a strategy', async () => {
            const { result } = renderHook(() => useAutoStrategyController());

            await act(async () => {
                await result.current.pauseStrategy('strategy-1');
            });

            expect(mockController.pauseStrategy).toHaveBeenCalledWith('strategy-1');
        });

        it('resumes a strategy', async () => {
            const { result } = renderHook(() => useAutoStrategyController());

            await act(async () => {
                await result.current.resumeStrategy('strategy-1');
            });

            expect(mockController.resumeStrategy).toHaveBeenCalledWith('strategy-1');
        });
    });

    describe('Query Methods', () => {
        it('gets strategy by id', () => {
            const mockStrategies = [
                { id: 'strategy-1', name: 'Strategy 1' },
                { id: 'strategy-2', name: 'Strategy 2' },
            ];

            mockController.strategyStorage.getAllStrategies.mockReturnValue(mockStrategies);

            const { result } = renderHook(() => useAutoStrategyController());

            // Trigger update to populate strategies
            act(() => {
                const updateCallback = mockController.onUpdate.mock.calls[0][0];
                updateCallback({
                    status: 'running',
                    strategies: mockStrategies,
                    runningBots: [],
                    conditionStates: new Map(),
                    connectionStatus: 'connected',
                });
            });

            const strategy = result.current.getStrategyById('strategy-1');
            expect(strategy).toEqual(mockStrategies[0]);
        });

        it('gets strategy performance', () => {
            const mockPerformance = {
                strategyId: 'strategy-1',
                totalTriggers: 10,
                successfulTriggers: 8,
                failedTriggers: 2,
                totalProfit: 100,
                totalLoss: 20,
                netProfitLoss: 80,
                winRate: 80,
            };

            mockController.getStrategyPerformance.mockReturnValue(mockPerformance);

            const { result } = renderHook(() => useAutoStrategyController());

            const performance = result.current.getStrategyPerformance('strategy-1');
            expect(performance).toEqual(mockPerformance);
            expect(mockController.getStrategyPerformance).toHaveBeenCalledWith('strategy-1');
        });

        it('gets strategy warnings', () => {
            const mockWarnings = [
                { type: 'no_loss_limit', message: 'No loss limit set', severity: 'warning' as const },
            ];

            mockController.getStrategyWarnings.mockReturnValue(mockWarnings);

            const { result } = renderHook(() => useAutoStrategyController());

            const mockStrategy: any = { id: 'strategy-1', name: 'Test' };
            const warnings = result.current.getStrategyWarnings(mockStrategy);
            expect(warnings).toEqual(mockWarnings);
        });
    });

    describe('Import/Export', () => {
        it('exports a strategy', () => {
            const mockJson = '{"id":"strategy-1","name":"Test"}';
            mockController.exportStrategy.mockReturnValue(mockJson);

            const { result } = renderHook(() => useAutoStrategyController());

            const json = result.current.exportStrategy('strategy-1');
            expect(json).toBe(mockJson);
            expect(mockController.exportStrategy).toHaveBeenCalledWith('strategy-1');
        });

        it('imports a strategy', async () => {
            const mockJson = '{"name":"Imported Strategy"}';
            const { result } = renderHook(() => useAutoStrategyController());

            let importedId: string = '';
            await act(async () => {
                importedId = await result.current.importStrategy(mockJson);
            });

            expect(mockController.importStrategy).toHaveBeenCalledWith(mockJson);
            expect(importedId).toBe('imported-strategy-1');
        });
    });

    describe('Real-time Updates', () => {
        it('updates state when controller emits update', () => {
            const { result } = renderHook(() => useAutoStrategyController());

            const mockUpdate = {
                status: 'running',
                strategies: [{ id: 'strategy-1', name: 'Test', isActive: true }],
                runningBots: [
                    {
                        botId: 'bot-1',
                        botName: 'Test Bot',
                        strategyId: 'strategy-1',
                        strategyName: 'Test Strategy',
                        startedAt: Date.now(),
                        currentProfit: 50,
                        currentLoss: 10,
                    },
                ],
                conditionStates: new Map(),
                connectionStatus: 'connected',
            };

            act(() => {
                const updateCallback = mockController.onUpdate.mock.calls[0][0];
                updateCallback(mockUpdate);
            });

            expect(result.current.status).toBe('running');
            expect(result.current.strategies).toEqual(mockUpdate.strategies);
            expect(result.current.runningBots).toHaveLength(1);
            expect(result.current.connectionStatus).toBe('connected');
        });
    });

    describe('Utility Methods', () => {
        it('refreshes state', () => {
            const { result } = renderHook(() => useAutoStrategyController());

            act(() => {
                result.current.refresh();
            });

            expect(mockController.getStatus).toHaveBeenCalled();
            expect(mockController.strategyStorage.getAllStrategies).toHaveBeenCalled();
        });
    });
});
