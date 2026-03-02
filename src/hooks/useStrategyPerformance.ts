import { useState, useEffect, useCallback, useMemo } from 'react';
import { getAutoStrategyController } from '../services/auto-strategy/auto-strategy-controller.service';
import type { StrategyPerformance } from '../services/auto-strategy/auto-strategy-controller.service';

/**
 * Time period for performance filtering
 */
export enum PerformanceTimePeriod {
    Today = 'today',
    Week = 'week',
    Month = 'month',
    AllTime = 'all_time',
}

/**
 * Performance metrics with time period filtering
 */
export interface PerformanceMetrics {
    strategyId: string;
    strategyName: string;
    timePeriod: PerformanceTimePeriod;
    
    // Trigger metrics
    totalTriggers: number;
    successfulTriggers: number;
    failedTriggers: number;
    successRate: number;
    
    // Financial metrics
    totalProfit: number;
    totalLoss: number;
    netProfitLoss: number;
    winRate: number;
    averageProfitPerTrigger: number;
    
    // Timing metrics
    lastTriggeredAt?: number;
    firstTriggeredAt?: number;
    
    // Comparison with other periods
    comparisonWithPreviousPeriod?: {
        netProfitLossChange: number;
        winRateChange: number;
        triggersChange: number;
    };
}

/**
 * Aggregated performance across all strategies
 */
export interface AggregatedPerformance {
    timePeriod: PerformanceTimePeriod;
    totalStrategies: number;
    activeStrategies: number;
    
    // Aggregate metrics
    totalTriggers: number;
    totalProfit: number;
    totalLoss: number;
    netProfitLoss: number;
    overallWinRate: number;
    
    // Top performers
    topProfitableStrategy?: PerformanceMetrics;
    mostActiveStrategy?: PerformanceMetrics;
    highestWinRateStrategy?: PerformanceMetrics;
}

/**
 * Hook state interface
 */
interface UseStrategyPerformanceState {
    // Performance data
    performanceData: Map<string, PerformanceMetrics>;
    aggregatedPerformance: AggregatedPerformance | null;
    
    // Loading and error states
    isLoading: boolean;
    error: Error | null;
    
    // Current filter
    timePeriod: PerformanceTimePeriod;
}

/**
 * Hook return interface
 */
export interface UseStrategyPerformanceReturn extends UseStrategyPerformanceState {
    // Query methods
    getPerformanceForStrategy: (strategyId: string) => PerformanceMetrics | undefined;
    getTopPerformers: (limit?: number) => PerformanceMetrics[];
    getWorstPerformers: (limit?: number) => PerformanceMetrics[];
    
    // Filter methods
    setTimePeriod: (period: PerformanceTimePeriod) => void;
    
    // Utility
    refresh: () => void;
}

/**
 * React hook for fetching and tracking strategy performance
 * 
 * This hook provides:
 * - Performance data fetching and tracking
 * - Time period filtering (today, week, month, all time)
 * - Performance metrics calculation
 * - Aggregated performance across all strategies
 * 
 * Requirements: 21.1, 21.2, 21.3, 21.4, 21.5
 * 
 * @param initialTimePeriod - Initial time period filter (default: AllTime)
 * 
 * @example
 * ```tsx
 * const {
 *   performanceData,
 *   aggregatedPerformance,
 *   timePeriod,
 *   setTimePeriod,
 *   getTopPerformers
 * } = useStrategyPerformance();
 * 
 * // Change time period
 * const handlePeriodChange = (period: PerformanceTimePeriod) => {
 *   setTimePeriod(period);
 * };
 * 
 * // Get top 5 performers
 * const topStrategies = getTopPerformers(5);
 * ```
 */
export function useStrategyPerformance(
    initialTimePeriod: PerformanceTimePeriod = PerformanceTimePeriod.AllTime
): UseStrategyPerformanceReturn {
    const [state, setState] = useState<UseStrategyPerformanceState>({
        performanceData: new Map(),
        aggregatedPerformance: null,
        isLoading: true,
        error: null,
        timePeriod: initialTimePeriod,
    });

    /**
     * Calculate time range boundaries based on period
     */
    const getTimeRange = useCallback((period: PerformanceTimePeriod): { start: number; end: number } => {
        const now = Date.now();
        const end = now;
        let start: number;

        switch (period) {
            case PerformanceTimePeriod.Today:
                // Start of today (midnight)
                const today = new Date();
                today.setHours(0, 0, 0, 0);
                start = today.getTime();
                break;

            case PerformanceTimePeriod.Week:
                // 7 days ago
                start = now - 7 * 24 * 60 * 60 * 1000;
                break;

            case PerformanceTimePeriod.Month:
                // 30 days ago
                start = now - 30 * 24 * 60 * 60 * 1000;
                break;

            case PerformanceTimePeriod.AllTime:
            default:
                // Beginning of time
                start = 0;
                break;
        }

        return { start, end };
    }, []);

    /**
     * Filter performance data by time period
     * Note: This is a simplified implementation. In a real system, you would
     * need to track individual trigger timestamps in the audit log and filter them.
     */
    const filterPerformanceByTimePeriod = useCallback(
        (rawPerformance: StrategyPerformance, period: PerformanceTimePeriod): StrategyPerformance => {
            const { start, end } = getTimeRange(period);

            // If we have lastTriggeredAt and it's outside the range, return empty metrics
            if (rawPerformance.lastTriggeredAt && rawPerformance.lastTriggeredAt < start) {
                return {
                    ...rawPerformance,
                    totalTriggers: 0,
                    successfulTriggers: 0,
                    failedTriggers: 0,
                    totalProfit: 0,
                    totalLoss: 0,
                    netProfitLoss: 0,
                    winRate: 0,
                };
            }

            // For now, return the raw performance
            // In a production system, you would query the audit log for triggers
            // within the time range and recalculate metrics
            return rawPerformance;
        },
        [getTimeRange]
    );

    /**
     * Convert raw performance to metrics with additional calculations
     */
    const calculateMetrics = useCallback(
        (strategyId: string, strategyName: string, rawPerformance: StrategyPerformance, period: PerformanceTimePeriod): PerformanceMetrics => {
            const filtered = filterPerformanceByTimePeriod(rawPerformance, period);

            const successRate = filtered.totalTriggers > 0
                ? (filtered.successfulTriggers / filtered.totalTriggers) * 100
                : 0;

            const averageProfitPerTrigger = filtered.successfulTriggers > 0
                ? filtered.netProfitLoss / filtered.successfulTriggers
                : 0;

            return {
                strategyId,
                strategyName,
                timePeriod: period,
                totalTriggers: filtered.totalTriggers,
                successfulTriggers: filtered.successfulTriggers,
                failedTriggers: filtered.failedTriggers,
                successRate,
                totalProfit: filtered.totalProfit,
                totalLoss: filtered.totalLoss,
                netProfitLoss: filtered.netProfitLoss,
                winRate: filtered.winRate,
                averageProfitPerTrigger,
                lastTriggeredAt: filtered.lastTriggeredAt,
            };
        },
        [filterPerformanceByTimePeriod]
    );

    /**
     * Calculate aggregated performance across all strategies
     */
    const calculateAggregatedPerformance = useCallback(
        (metricsMap: Map<string, PerformanceMetrics>, period: PerformanceTimePeriod): AggregatedPerformance => {
            const allMetrics = Array.from(metricsMap.values());

            const totalTriggers = allMetrics.reduce((sum, m) => sum + m.totalTriggers, 0);
            const totalProfit = allMetrics.reduce((sum, m) => sum + m.totalProfit, 0);
            const totalLoss = allMetrics.reduce((sum, m) => sum + m.totalLoss, 0);
            const netProfitLoss = totalProfit - totalLoss;

            // Calculate overall win rate (weighted by triggers)
            const totalSuccessful = allMetrics.reduce((sum, m) => sum + m.successfulTriggers, 0);
            const overallWinRate = totalTriggers > 0 ? (totalSuccessful / totalTriggers) * 100 : 0;

            // Find top performers
            const topProfitableStrategy = allMetrics.length > 0
                ? allMetrics.reduce((top, current) =>
                    current.netProfitLoss > top.netProfitLoss ? current : top
                )
                : undefined;

            const mostActiveStrategy = allMetrics.length > 0
                ? allMetrics.reduce((top, current) =>
                    current.totalTriggers > top.totalTriggers ? current : top
                )
                : undefined;

            const highestWinRateStrategy = allMetrics.length > 0
                ? allMetrics.reduce((top, current) =>
                    current.winRate > top.winRate ? current : top
                )
                : undefined;

            return {
                timePeriod: period,
                totalStrategies: allMetrics.length,
                activeStrategies: allMetrics.filter(m => m.totalTriggers > 0).length,
                totalTriggers,
                totalProfit,
                totalLoss,
                netProfitLoss,
                overallWinRate,
                topProfitableStrategy,
                mostActiveStrategy,
                highestWinRateStrategy,
            };
        },
        []
    );

    /**
     * Fetch and calculate performance data
     */
    const fetchPerformanceData = useCallback(async () => {
        setState(prev => ({ ...prev, isLoading: true, error: null }));

        try {
            const controller = getAutoStrategyController();
            const strategies = controller['strategyStorage'].getAllStrategies();

            const metricsMap = new Map<string, PerformanceMetrics>();

            // Calculate metrics for each strategy
            for (const strategy of strategies) {
                const rawPerformance = controller.getStrategyPerformance(strategy.id);
                if (rawPerformance) {
                    const metrics = calculateMetrics(
                        strategy.id,
                        strategy.name,
                        rawPerformance,
                        state.timePeriod
                    );
                    metricsMap.set(strategy.id, metrics);
                }
            }

            // Calculate aggregated performance
            const aggregated = calculateAggregatedPerformance(metricsMap, state.timePeriod);

            setState(prev => ({
                ...prev,
                performanceData: metricsMap,
                aggregatedPerformance: aggregated,
                isLoading: false,
            }));
        } catch (error) {
            setState(prev => ({
                ...prev,
                error: error as Error,
                isLoading: false,
            }));
        }
    }, [state.timePeriod, calculateMetrics, calculateAggregatedPerformance]);

    // Fetch data on mount and when time period changes
    useEffect(() => {
        fetchPerformanceData();
    }, [fetchPerformanceData]);

    // Query methods
    const getPerformanceForStrategy = useCallback(
        (strategyId: string) => {
            return state.performanceData.get(strategyId);
        },
        [state.performanceData]
    );

    const getTopPerformers = useCallback(
        (limit: number = 5) => {
            const allMetrics = Array.from(state.performanceData.values());
            return allMetrics
                .sort((a, b) => b.netProfitLoss - a.netProfitLoss)
                .slice(0, limit);
        },
        [state.performanceData]
    );

    const getWorstPerformers = useCallback(
        (limit: number = 5) => {
            const allMetrics = Array.from(state.performanceData.values());
            return allMetrics
                .sort((a, b) => a.netProfitLoss - b.netProfitLoss)
                .slice(0, limit);
        },
        [state.performanceData]
    );

    // Filter methods
    const setTimePeriod = useCallback((period: PerformanceTimePeriod) => {
        setState(prev => ({ ...prev, timePeriod: period }));
    }, []);

    // Utility
    const refresh = useCallback(() => {
        fetchPerformanceData();
    }, [fetchPerformanceData]);

    return {
        // State
        ...state,

        // Query methods
        getPerformanceForStrategy,
        getTopPerformers,
        getWorstPerformers,

        // Filter methods
        setTimePeriod,

        // Utility
        refresh,
    };
}
