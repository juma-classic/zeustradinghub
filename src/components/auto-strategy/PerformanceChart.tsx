import React, { useMemo } from 'react';
import { useStrategyPerformance, PerformanceTimePeriod } from '../../hooks/useStrategyPerformance';
import type { PerformanceMetrics } from '../../hooks/useStrategyPerformance';
import './PerformanceChart.scss';

interface PerformanceChartProps {
    strategyId?: string; // If provided, show chart for specific strategy; otherwise show aggregated
    height?: number; // Chart height in pixels (default: 300)
}

/**
 * PerformanceChart Component
 * 
 * Visual display of strategy performance over time using a simple bar chart.
 * Shows profit/loss distribution and win rate visualization.
 * 
 * Requirements: 21.1, 21.2, 21.3, 21.4, 21.5
 */
const PerformanceChart: React.FC<PerformanceChartProps> = ({
    strategyId,
    height = 300,
}) => {
    const {
        performanceData,
        aggregatedPerformance,
        timePeriod,
        isLoading,
        error,
        getPerformanceForStrategy,
        getTopPerformers,
    } = useStrategyPerformance();

    // Get metrics to display
    const metrics: PerformanceMetrics | null = strategyId
        ? getPerformanceForStrategy(strategyId) || null
        : null;

    // For aggregated view, show top performers
    const topPerformers = !strategyId ? getTopPerformers(5) : [];

    // Calculate chart data
    const chartData = useMemo(() => {
        if (strategyId && metrics) {
            // Single strategy view - show profit vs loss
            return [
                {
                    label: 'Profit',
                    value: metrics.totalProfit,
                    color: '#00ff00',
                    percentage: 100,
                },
                {
                    label: 'Loss',
                    value: Math.abs(metrics.totalLoss),
                    color: '#ff4444',
                    percentage: 100,
                },
            ];
        } else if (!strategyId && topPerformers.length > 0) {
            // Aggregated view - show top performers
            const maxValue = Math.max(...topPerformers.map(p => Math.abs(p.netProfitLoss)));
            
            return topPerformers.map(performer => ({
                label: performer.strategyName,
                value: performer.netProfitLoss,
                color: performer.netProfitLoss >= 0 ? '#00ff00' : '#ff4444',
                percentage: maxValue > 0 ? (Math.abs(performer.netProfitLoss) / maxValue) * 100 : 0,
            }));
        }

        return [];
    }, [strategyId, metrics, topPerformers]);

    // Format currency
    const formatCurrency = (amount: number): string => {
        const sign = amount >= 0 ? '+' : '';
        return `${sign}$${amount.toFixed(2)}`;
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

    if (isLoading) {
        return (
            <div className="performance-chart performance-chart--loading" style={{ height }}>
                <div className="performance-chart__loader">
                    <div className="performance-chart__loader-spinner"></div>
                    <p className="performance-chart__loader-text">Loading chart data...</p>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="performance-chart performance-chart--error" style={{ height }}>
                <div className="performance-chart__error">
                    <span className="performance-chart__error-icon">⚠️</span>
                    <p className="performance-chart__error-text">Failed to load chart data</p>
                </div>
            </div>
        );
    }

    if (chartData.length === 0) {
        return (
            <div className="performance-chart performance-chart--empty" style={{ height }}>
                <div className="performance-chart__empty">
                    <span className="performance-chart__empty-icon">📊</span>
                    <p className="performance-chart__empty-text">No data to display</p>
                    <p className="performance-chart__empty-subtext">
                        {strategyId
                            ? 'This strategy has not been triggered yet'
                            : 'Activate strategies to see performance visualization'}
                    </p>
                </div>
            </div>
        );
    }

    return (
        <div className="performance-chart" style={{ height }}>
            {/* Chart Header */}
            <div className="performance-chart__header">
                <h3 className="performance-chart__title">
                    {strategyId ? 'Profit vs Loss' : 'Top Performers'}
                </h3>
                <span className="performance-chart__period">
                    {getTimePeriodLabel(timePeriod)}
                </span>
            </div>

            {/* Chart Container */}
            <div className="performance-chart__container">
                {chartData.map((item, index) => (
                    <div key={index} className="performance-chart__bar-group">
                        {/* Bar Label */}
                        <div className="performance-chart__bar-label">
                            <span className="performance-chart__bar-label-text">
                                {item.label}
                            </span>
                        </div>

                        {/* Bar Container */}
                        <div className="performance-chart__bar-container">
                            <div
                                className="performance-chart__bar"
                                style={{
                                    width: `${item.percentage}%`,
                                    backgroundColor: item.color,
                                    boxShadow: `0 0 10px ${item.color}80`,
                                }}
                            >
                                <div className="performance-chart__bar-shine"></div>
                            </div>
                        </div>

                        {/* Bar Value */}
                        <div
                            className="performance-chart__bar-value"
                            style={{ color: item.color }}
                        >
                            {formatCurrency(item.value)}
                        </div>
                    </div>
                ))}
            </div>

            {/* Win Rate Indicator (for single strategy) */}
            {strategyId && metrics && (
                <div className="performance-chart__win-rate">
                    <div className="performance-chart__win-rate-label">
                        <span className="performance-chart__win-rate-icon">🎯</span>
                        <span className="performance-chart__win-rate-text">Win Rate</span>
                    </div>
                    <div className="performance-chart__win-rate-bar">
                        <div
                            className="performance-chart__win-rate-fill"
                            style={{ width: `${Math.min(metrics.winRate, 100)}%` }}
                        >
                            <span className="performance-chart__win-rate-percentage">
                                {metrics.winRate.toFixed(1)}%
                            </span>
                        </div>
                    </div>
                </div>
            )}

            {/* Summary Stats */}
            {strategyId && metrics && (
                <div className="performance-chart__summary">
                    <div className="performance-chart__summary-item">
                        <span className="performance-chart__summary-label">Successful:</span>
                        <span className="performance-chart__summary-value performance-chart__summary-value--success">
                            {metrics.successfulTriggers}
                        </span>
                    </div>
                    <div className="performance-chart__summary-item">
                        <span className="performance-chart__summary-label">Failed:</span>
                        <span className="performance-chart__summary-value performance-chart__summary-value--failed">
                            {metrics.failedTriggers}
                        </span>
                    </div>
                    <div className="performance-chart__summary-item">
                        <span className="performance-chart__summary-label">Total:</span>
                        <span className="performance-chart__summary-value">
                            {metrics.totalTriggers}
                        </span>
                    </div>
                </div>
            )}

            {/* Aggregated Summary */}
            {!strategyId && aggregatedPerformance && (
                <div className="performance-chart__summary">
                    <div className="performance-chart__summary-item">
                        <span className="performance-chart__summary-label">Total Profit:</span>
                        <span className="performance-chart__summary-value performance-chart__summary-value--success">
                            {formatCurrency(aggregatedPerformance.totalProfit)}
                        </span>
                    </div>
                    <div className="performance-chart__summary-item">
                        <span className="performance-chart__summary-label">Total Loss:</span>
                        <span className="performance-chart__summary-value performance-chart__summary-value--failed">
                            {formatCurrency(Math.abs(aggregatedPerformance.totalLoss))}
                        </span>
                    </div>
                    <div className="performance-chart__summary-item">
                        <span className="performance-chart__summary-label">Net:</span>
                        <span
                            className={`performance-chart__summary-value ${
                                aggregatedPerformance.netProfitLoss >= 0
                                    ? 'performance-chart__summary-value--success'
                                    : 'performance-chart__summary-value--failed'
                            }`}
                        >
                            {formatCurrency(aggregatedPerformance.netProfitLoss)}
                        </span>
                    </div>
                </div>
            )}
        </div>
    );
};

export default PerformanceChart;
