import { renderHook, act, waitFor } from '@testing-library/react';
import { useStrategyPerformance, PerformanceTimePeriod } from '../useStrategyPerformance';
import { getAutoStrategyController } from '../../services/auto-strategy/auto-strategy-controller.service';

// Mock the controller
jest.mock('../../services/auto-strategy/auto-strategy-controller.service', () => ({
    getAutoStrategyController: jest.fn(),
}));

describe('useStrategyPerformance', () => {
    let mockController: any;

    beforeEach(() => {
        jest.clearAllMocks();

        // Create mock controller
        mockController = {
            getStrategyPerformance: jest.fn(),
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
        it('initializes with correct default state', async () => {
            const { result } = renderHook(() => useStrategyPerformance());

            await waitFor(() => {
                expect(result.current.isLoading).toBe(false);
            });

            expect(result.current.timePeriod).toBe(PerformanceTimePeriod.AllTime);
            expect(result.current.performanceData.size).toBe(0);
            expect(result.current.aggregatedPerformance).not.toBeNull();
            expect(result.current.error).toBeNull();
        });

        it('initializes with custom time period', async () => {
            const { result } = renderHook(() => useStrategyPerformance(PerformanceTimePeriod.Today));

            await waitFor(() => {
                expect(result.current.isLoading).toBe(false);
            });

            expect(result.current.timePeriod).toBe(PerformanceTimePeriod.Today);
        });

        it('fetches performance data on mount', async () => {
            const mockStrategies = [
                { id: 'strategy-1', name: 'Strategy 1' },
                { id: 'strategy-2', name: 'Strategy 2' },
            ];

            mockController.strategyStorage.getAllStrategies.mockReturnValue(mockStrategies);
            mockController.getStrategyPerformance.mockReturnValue({
                strategyId: 'strategy-1',
                totalTriggers: 10,
                successfulTriggers: 8,
                failedTriggers: 2,
                totalProfit: 100,
                totalLoss: 20,
                netProfitLoss: 80,
                winRate: 80,
            });

            const { result } = renderHook(() => useStrategyPerformance());

            await waitFor(() => {
                expect(result.current.isLoading).toBe(false);
            });

            expect(mockController.strategyStorage.getAllStrategies).toHaveBeenCalled();
            expect(result.current.performanceData.size).toBeGreaterThan(0);
        });
    });

    describe('Performance Metrics Calculation', () => {
        it('calculates metrics correctly', async () => {
            const mockStrategies = [
                { id: 'strategy-1', name: 'Strategy 1' },
            ];

            const mockPerformance = {
                strategyId: 'strategy-1',
                totalTriggers: 10,
                successfulTriggers: 8,
                failedTriggers: 2,
                totalProfit: 160,
                totalLoss: 40,
                netProfitLoss: 120,
                winRate: 80,
                lastTriggeredAt: Date.now(),
            };

            mockController.strategyStorage.getAllStrategies.mockReturnValue(mockStrategies);
            mockController.getStrategyPerformance.mockReturnValue(mockPerformance);

            const { result } = renderHook(() => useStrategyPerformance());

            await waitFor(() => {
                expect(result.current.isLoading).toBe(false);
            });

            const metrics = result.current.getPerformanceForStrategy('strategy-1');
            expect(metrics).toBeDefined();
            expect(metrics?.strategyId).toBe('strategy-1');
            expect(metrics?.strategyName).toBe('Strategy 1');
            expect(metrics?.totalTriggers).toBe(10);
            expect(metrics?.successfulTriggers).toBe(8);
            expect(metrics?.failedTriggers).toBe(2);
            expect(metrics?.successRate).toBe(80);
            expect(metrics?.totalProfit).toBe(160);
            expect(metrics?.totalLoss).toBe(40);
            expect(metrics?.netProfitLoss).toBe(120);
            expect(metrics?.winRate).toBe(80);
            expect(metrics?.averageProfitPerTrigger).toBe(15); // 120 / 8
        });

        it('handles zero triggers correctly', async () => {
            const mockStrategies = [
                { id: 'strategy-1', name: 'Strategy 1' },
            ];

            const mockPerformance = {
                strategyId: 'strategy-1',
                totalTriggers: 0,
                successfulTriggers: 0,
                failedTriggers: 0,
                totalProfit: 0,
                totalLoss: 0,
                netProfitLoss: 0,
                winRate: 0,
            };

            mockController.strategyStorage.getAllStrategies.mockReturnValue(mockStrategies);
            mockController.getStrategyPerformance.mockReturnValue(mockPerformance);

            const { result } = renderHook(() => useStrategyPerformance());

            await waitFor(() => {
                expect(result.current.isLoading).toBe(false);
            });

            const metrics = result.current.getPerformanceForStrategy('strategy-1');
            expect(metrics?.successRate).toBe(0);
            expect(metrics?.averageProfitPerTrigger).toBe(0);
        });
    });

    describe('Aggregated Performance', () => {
        it('calculates aggregated performance correctly', async () => {
            const mockStrategies = [
                { id: 'strategy-1', name: 'Strategy 1' },
                { id: 'strategy-2', name: 'Strategy 2' },
            ];

            mockController.strategyStorage.getAllStrategies.mockReturnValue(mockStrategies);
            mockController.getStrategyPerformance
                .mockReturnValueOnce({
                    strategyId: 'strategy-1',
                    totalTriggers: 10,
                    successfulTriggers: 8,
                    failedTriggers: 2,
                    totalProfit: 100,
                    totalLoss: 20,
                    netProfitLoss: 80,
                    winRate: 80,
                })
                .mockReturnValueOnce({
                    strategyId: 'strategy-2',
                    totalTriggers: 5,
                    successfulTriggers: 3,
                    failedTriggers: 2,
                    totalProfit: 60,
                    totalLoss: 40,
                    netProfitLoss: 20,
                    winRate: 60,
                });

            const { result } = renderHook(() => useStrategyPerformance());

            await waitFor(() => {
                expect(result.current.isLoading).toBe(false);
            });

            const aggregated = result.current.aggregatedPerformance;
            expect(aggregated).not.toBeNull();
            expect(aggregated?.totalStrategies).toBe(2);
            expect(aggregated?.activeStrategies).toBe(2);
            expect(aggregated?.totalTriggers).toBe(15);
            expect(aggregated?.totalProfit).toBe(160);
            expect(aggregated?.totalLoss).toBe(60);
            expect(aggregated?.netProfitLoss).toBe(100);
            expect(aggregated?.overallWinRate).toBeCloseTo(73.33, 1); // (8+3)/(10+5) * 100
        });

        it('identifies top performers correctly', async () => {
            const mockStrategies = [
                { id: 'strategy-1', name: 'Best Profit' },
                { id: 'strategy-2', name: 'Most Active' },
                { id: 'strategy-3', name: 'Highest Win Rate' },
            ];

            mockController.strategyStorage.getAllStrategies.mockReturnValue(mockStrategies);
            mockController.getStrategyPerformance
                .mockReturnValueOnce({
                    strategyId: 'strategy-1',
                    totalTriggers: 5,
                    successfulTriggers: 4,
                    failedTriggers: 1,
                    totalProfit: 200,
                    totalLoss: 20,
                    netProfitLoss: 180,
                    winRate: 80,
                })
                .mockReturnValueOnce({
                    strategyId: 'strategy-2',
                    totalTriggers: 20,
                    successfulTriggers: 12,
                    failedTriggers: 8,
                    totalProfit: 120,
                    totalLoss: 80,
                    netProfitLoss: 40,
                    winRate: 60,
                })
                .mockReturnValueOnce({
                    strategyId: 'strategy-3',
                    totalTriggers: 10,
                    successfulTriggers: 9,
                    failedTriggers: 1,
                    totalProfit: 90,
                    totalLoss: 10,
                    netProfitLoss: 80,
                    winRate: 90,
                });

            const { result } = renderHook(() => useStrategyPerformance());

            await waitFor(() => {
                expect(result.current.isLoading).toBe(false);
            });

            const aggregated = result.current.aggregatedPerformance;
            expect(aggregated?.topProfitableStrategy?.strategyId).toBe('strategy-1');
            expect(aggregated?.mostActiveStrategy?.strategyId).toBe('strategy-2');
            expect(aggregated?.highestWinRateStrategy?.strategyId).toBe('strategy-3');
        });
    });

    describe('Query Methods', () => {
        beforeEach(async () => {
            const mockStrategies = [
                { id: 'strategy-1', name: 'Strategy 1' },
                { id: 'strategy-2', name: 'Strategy 2' },
                { id: 'strategy-3', name: 'Strategy 3' },
            ];

            mockController.strategyStorage.getAllStrategies.mockReturnValue(mockStrategies);
            mockController.getStrategyPerformance
                .mockReturnValueOnce({
                    strategyId: 'strategy-1',
                    totalTriggers: 10,
                    successfulTriggers: 8,
                    failedTriggers: 2,
                    totalProfit: 100,
                    totalLoss: 20,
                    netProfitLoss: 80,
                    winRate: 80,
                })
                .mockReturnValueOnce({
                    strategyId: 'strategy-2',
                    totalTriggers: 5,
                    successfulTriggers: 3,
                    failedTriggers: 2,
                    totalProfit: 60,
                    totalLoss: 40,
                    netProfitLoss: 20,
                    winRate: 60,
                })
                .mockReturnValueOnce({
                    strategyId: 'strategy-3',
                    totalTriggers: 8,
                    successfulTriggers: 2,
                    failedTriggers: 6,
                    totalProfit: 40,
                    totalLoss: 120,
                    netProfitLoss: -80,
                    winRate: 25,
                });
        });

        it('gets performance for specific strategy', async () => {
            const { result } = renderHook(() => useStrategyPerformance());

            await waitFor(() => {
                expect(result.current.isLoading).toBe(false);
            });

            const performance = result.current.getPerformanceForStrategy('strategy-1');
            expect(performance).toBeDefined();
            expect(performance?.strategyId).toBe('strategy-1');
        });

        it('returns undefined for non-existent strategy', async () => {
            const { result } = renderHook(() => useStrategyPerformance());

            await waitFor(() => {
                expect(result.current.isLoading).toBe(false);
            });

            const performance = result.current.getPerformanceForStrategy('non-existent');
            expect(performance).toBeUndefined();
        });

        it('gets top performers', async () => {
            const { result } = renderHook(() => useStrategyPerformance());

            await waitFor(() => {
                expect(result.current.isLoading).toBe(false);
            });

            const topPerformers = result.current.getTopPerformers(2);
            expect(topPerformers).toHaveLength(2);
            expect(topPerformers[0].strategyId).toBe('strategy-1'); // netProfitLoss: 80
            expect(topPerformers[1].strategyId).toBe('strategy-2'); // netProfitLoss: 20
        });

        it('gets worst performers', async () => {
            const { result } = renderHook(() => useStrategyPerformance());

            await waitFor(() => {
                expect(result.current.isLoading).toBe(false);
            });

            const worstPerformers = result.current.getWorstPerformers(2);
            expect(worstPerformers).toHaveLength(2);
            expect(worstPerformers[0].strategyId).toBe('strategy-3'); // netProfitLoss: -80
            expect(worstPerformers[1].strategyId).toBe('strategy-2'); // netProfitLoss: 20
        });
    });

    describe('Time Period Filtering', () => {
        it('changes time period', async () => {
            const { result } = renderHook(() => useStrategyPerformance());

            await waitFor(() => {
                expect(result.current.isLoading).toBe(false);
            });

            expect(result.current.timePeriod).toBe(PerformanceTimePeriod.AllTime);

            act(() => {
                result.current.setTimePeriod(PerformanceTimePeriod.Today);
            });

            await waitFor(() => {
                expect(result.current.timePeriod).toBe(PerformanceTimePeriod.Today);
            });
        });

        it('refetches data when time period changes', async () => {
            mockController.strategyStorage.getAllStrategies.mockReturnValue([
                { id: 'strategy-1', name: 'Strategy 1' },
            ]);
            mockController.getStrategyPerformance.mockReturnValue({
                strategyId: 'strategy-1',
                totalTriggers: 10,
                successfulTriggers: 8,
                failedTriggers: 2,
                totalProfit: 100,
                totalLoss: 20,
                netProfitLoss: 80,
                winRate: 80,
            });

            const { result } = renderHook(() => useStrategyPerformance());

            await waitFor(() => {
                expect(result.current.isLoading).toBe(false);
            });

            const initialCallCount = mockController.strategyStorage.getAllStrategies.mock.calls.length;

            act(() => {
                result.current.setTimePeriod(PerformanceTimePeriod.Week);
            });

            await waitFor(() => {
                expect(mockController.strategyStorage.getAllStrategies.mock.calls.length).toBeGreaterThan(initialCallCount);
            });
        });
    });

    describe('Utility Methods', () => {
        it('refreshes performance data', async () => {
            mockController.strategyStorage.getAllStrategies.mockReturnValue([
                { id: 'strategy-1', name: 'Strategy 1' },
            ]);
            mockController.getStrategyPerformance.mockReturnValue({
                strategyId: 'strategy-1',
                totalTriggers: 10,
                successfulTriggers: 8,
                failedTriggers: 2,
                totalProfit: 100,
                totalLoss: 20,
                netProfitLoss: 80,
                winRate: 80,
            });

            const { result } = renderHook(() => useStrategyPerformance());

            await waitFor(() => {
                expect(result.current.isLoading).toBe(false);
            });

            const initialCallCount = mockController.strategyStorage.getAllStrategies.mock.calls.length;

            act(() => {
                result.current.refresh();
            });

            await waitFor(() => {
                expect(mockController.strategyStorage.getAllStrategies.mock.calls.length).toBeGreaterThan(initialCallCount);
            });
        });
    });

    describe('Error Handling', () => {
        it('handles errors during data fetch', async () => {
            const error = new Error('Failed to fetch performance data');
            mockController.strategyStorage.getAllStrategies.mockImplementation(() => {
                throw error;
            });

            const { result } = renderHook(() => useStrategyPerformance());

            await waitFor(() => {
                expect(result.current.isLoading).toBe(false);
            });

            expect(result.current.error).toBe(error);
        });
    });
});
