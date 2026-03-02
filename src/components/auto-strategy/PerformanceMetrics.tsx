import React from 'react';
import { useStrategyPerformance, PerformanceTimePeriod } from '../../hooks/useStrategyPerformance';
import type { PerformanceMetrics as PerformanceMetricsType } from '../../hooks/useStrategyPerformance';
import './PerformanceMetrics.scss';

interface PerformanceMetricsProps {
    strategyId?: string; // If provided, show metrics for specific strategy; otherwise show aggregated
}

/**
 * PerformanceMetrics Component
 * 
 * Displays strategy performance metrics including:
 * - Total profit and loss
 * - Win rate
 * - Activation count
 * - Time period selector (today, week, month, all time)
 * 
 * Requirements: 21.1, 21.2, 21.3, 21.4, 21.5
 */
const PerformanceMetrics: React.FC<PerformanceMetricsProps> = ({ strategyId }) => {
    const {
        performanceData,
        aggregatedPerformance,
        timePeriod,
        setTimePeriod,
        isLoading,
        error,
        getPerformanceForStrategy,
    } = useStrategyPerformance();

    // Get metrics to display
    const metrics: PerformanceMetricsType | null = strategyId
        ? getPerformanceForStrategy(strategyId) || null
        : null;

    // Use aggregated performance if no specific strategy
    const displayData = strategyId ? metrics : aggregatedPerformance;

    // Format currency
    const formatCurrency = (amount: number): string => {
        const sign = amount >= 0 ? '+' : '';
        return `${sign}$${amount.toFixed(2)}`;
    };

    // Format percentage
    const formatPercentage = (value: number): string => {
        return `${value.toFixed(1)}%`;
    };

    // Get time period label
    const getTimePeriodLabel = (period: PerformanceTimePeriod): string => {
        switch (period) {
            case PerformanceTimePeriod.Today:
                return 'Today';
            case PerformanceTimePeriod.Week:
                return 'This Week';
            case PerformanceTimePeriod.Month:
                return 'This Month';
            case PerformanceTimePeriod.AllTime:
                return 'All Time';
            default:
                return 'All Time';
        }
    };

    // Handle time period change
    const handleTimePeriodChange = (period: PerformanceTimePeriod) => {
        setTimePeriod(period);
    };

    if (isLoading) {
        return (
            <div className="performance-metrics performance-metrics--loading">
                <div className="performance-metrics__loader">
                    <div className="performance-metrics__loader-spinner"></div>
                    <p className="performance-metrics__loader-text">Loading performance data...</p>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="performance-metrics performance-metrics--error">
                <div className="performance-metrics__error">
                    <span className="performance-metrics__error-icon">⚠️</span>
                    <p className="performance-metrics__error-text">Failed to load performance data</p>
                    <p className="performance-metrics__error-details">{error.message}</p>
                </div>
            </div>
        );
    }

    if (!displayData) {
        return (
            <div className="performance-metrics performance-metrics--empty">
                <div className="performance-metrics__empty">
                    <span className="performance-metrics__empty-icon">📊</span>
                    <p className="performance-metrics__empty-text">No performance data available</p>
                    <p className="performance-metrics__empty-subtext">
                        {strategyId
                            ? 'This strategy has not been triggered yet'
                            : 'Create and activate strategies to see performance metrics'}
                    </p>
                </div>
            </div>
        );
    }

    // Calculate net P&L
    const netProfitLoss = strategyId
        ? (metrics?.netProfitLoss || 0)
        : (aggregatedPerformance?.netProfitLoss || 0);

    const totalProfit = strategyId
        ? (metrics?.totalProfit || 0)
        : (aggregatedPerformance?.totalProfit || 0);

    const totalLoss = strategyId
        ? (metrics?.totalLoss || 0)
        : (aggregatedPerformance?.totalLoss || 0);

    const winRate = strategyId
        ? (metrics?.winRate || 0)
        : (aggregatedPerformance?.overallWinRate || 0);

    const totalTriggers = strategyId
        ? (metrics?.totalTriggers || 0)
        : (aggregatedPerformance?.totalTriggers || 0);

    // Determine net P&L class
    const netPnLClass = netProfitLoss > 0
        ? 'performance-metrics__net-value--profit'
        : netProfitLoss < 0
        ? 'performance-metrics__net-value--loss'
        : 'performance-metrics__net-value--neutral';

    return (
        <div className="performance-metrics">
            {/* Header with Time Period Selector */}
            <div className="performance-metrics__header">
                <h3 className="performance-metrics__title">
                    {strategyId ? 'Strategy Performance' : 'Overall Performance'}
                </h3>
                
                <div className="performance-metrics__period-selector">
                    {Object.values(PerformanceTimePeriod).map((period) => (
                        <button
                            key={period}
                            className={`performance-metrics__period-btn ${
                                timePeriod === period ? 'performance-metrics__period-btn--active' : ''
                            }`}
                            onClick={() => handleTimePeriodChange(period)}
                        >
                            {getTimePeriodLabel(period)}
                        </button>
                    ))}
                </div>
            </div>

            {/* Net Profit/Loss - Prominent Display */}
            <div className="performance-metrics__net-section">
                <div className="performance-metrics__net-label">Net Profit/Loss</div>
                <div className={`performance-metrics__net-value ${netPnLClass}`}>
                    {formatCurrency(netProfitLoss)}
                </div>
            </div>

            {/* Metrics Grid */}
            <div className="performance-metrics__grid">
                {/* Total Profit */}
                <div className="performance-metrics__metric">
                    <div className="performance-metrics__metric-header">
                        <span className="performance-metrics__metric-icon">💰</span>
                        <span className="performance-metrics__metric-label">Total Profit</span>
                    </div>
                    <div className="performance-metrics__metric-value performance-metrics__metric-value--profit">
                        {formatCurrency(totalProfit)}
                    </div>
                </div>

                {/* Total Loss */}
                <div className="performance-metrics__metric">
                    <div className="performance-metrics__metric-header">
                        <span className="performance-metrics__metric-icon">📉</span>
                        <span className="performance-metrics__metric-label">Total Loss</span>
                    </div>
                    <div className="performance-metrics__metric-value performance-metrics__metric-value--loss">
                        {formatCurrency(Math.abs(totalLoss))}
                    </div>
                </div>

                {/* Win Rate */}
                <div className="performance-metrics__metric">
                    <div className="performance-metrics__metric-header">
                        <span className="performance-metrics__metric-icon">🎯</span>
                        <span className="performance-metrics__metric-label">Win Rate</span>
                    </div>
                    <div className="performance-metrics__metric-value">
                        {formatPercentage(winRate)}
                    </div>
                    <div className="performance-metrics__metric-bar">
                        <div
                            className="performance-metrics__metric-bar-fill"
                            style={{ width: `${Math.min(winRate, 100)}%` }}
                        ></div>
                    </div>
                </div>

                {/* Activation Count */}
                <div className="performance-metrics__metric">
                    <div className="performance-metrics__metric-header">
                        <span className="performance-metrics__metric-icon">⚡</span>
                        <span className="performance-metrics__metric-label">Activations</span>
                    </div>
                    <div className="performance-metrics__metric-value">
                        {totalTriggers}
                    </div>
                </div>
            </div>

            {/* Additional Stats for Aggregated View */}
            {!strategyId && aggregatedPerformance && (
                <div className="performance-metrics__additional">
                    <div className="performance-metrics__stat">
                        <span className="performance-metrics__stat-label">Total Strategies:</span>
                        <span className="performance-metrics__stat-value">
                            {aggregatedPerformance.totalStrategies}
                        </span>
                    </div>
                    <div className="performance-metrics__stat">
                        <span className="performance-metrics__stat-label">Active Strategies:</span>
                        <span className="performance-metrics__stat-value">
                            {aggregatedPerformance.activeStrategies}
                        </span>
                    </div>
                </div>
            )}

            {/* Top Performers for Aggregated View */}
            {!strategyId && aggregatedPerformance && aggregatedPerformance.topProfitableStrategy && (
                <div className="performance-metrics__top-performers">
                    <h4 className="performance-metrics__top-title">Top Performer</h4>
                    <div className="performance-metrics__top-item">
                        <span className="performance-metrics__top-icon">🏆</span>
                        <div className="performance-metrics__top-details">
                            <div className="performance-metrics__top-name">
                                {aggregatedPerformance.topProfitableStrategy.strategyName}
                            </div>
                            <div className="performance-metrics__top-value">
                                {formatCurrency(aggregatedPerformance.topProfitableStrategy.netProfitLoss)}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default PerformanceMetrics;
