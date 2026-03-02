import React, { useState } from 'react';
import PerformanceMetrics from './PerformanceMetrics';
import PerformanceChart from './PerformanceChart';
import './PerformanceTrackingExample.scss';

/**
 * PerformanceTrackingExample Component
 * 
 * Example implementation showing how to use PerformanceMetrics and PerformanceChart
 * components together for comprehensive performance tracking.
 * 
 * This component demonstrates:
 * - Aggregated performance view (all strategies)
 * - Individual strategy performance view
 * - Side-by-side metrics and chart display
 * - Strategy selection for detailed view
 * 
 * Requirements: 21.1, 21.2, 21.3, 21.4, 21.5
 */
const PerformanceTrackingExample: React.FC = () => {
    const [selectedStrategyId, setSelectedStrategyId] = useState<string | undefined>(undefined);
    const [viewMode, setViewMode] = useState<'aggregated' | 'individual'>('aggregated');

    // Toggle between aggregated and individual views
    const handleViewModeToggle = () => {
        if (viewMode === 'aggregated') {
            setViewMode('individual');
        } else {
            setViewMode('aggregated');
            setSelectedStrategyId(undefined);
        }
    };

    return (
        <div className="performance-tracking-example">
            {/* Header */}
            <div className="performance-tracking-example__header">
                <h2 className="performance-tracking-example__title">
                    Performance Tracking
                </h2>
                
                <div className="performance-tracking-example__controls">
                    <button
                        className={`performance-tracking-example__view-btn ${
                            viewMode === 'aggregated' ? 'performance-tracking-example__view-btn--active' : ''
                        }`}
                        onClick={() => {
                            setViewMode('aggregated');
                            setSelectedStrategyId(undefined);
                        }}
                    >
                        <span className="performance-tracking-example__view-icon">📊</span>
                        <span className="performance-tracking-example__view-text">All Strategies</span>
                    </button>
                    
                    <button
                        className={`performance-tracking-example__view-btn ${
                            viewMode === 'individual' ? 'performance-tracking-example__view-btn--active' : ''
                        }`}
                        onClick={() => setViewMode('individual')}
                    >
                        <span className="performance-tracking-example__view-icon">🎯</span>
                        <span className="performance-tracking-example__view-text">Individual Strategy</span>
                    </button>
                </div>
            </div>

            {/* Strategy Selector (for individual view) */}
            {viewMode === 'individual' && (
                <div className="performance-tracking-example__selector">
                    <label className="performance-tracking-example__selector-label">
                        Select Strategy:
                    </label>
                    <input
                        type="text"
                        className="performance-tracking-example__selector-input"
                        placeholder="Enter strategy ID..."
                        value={selectedStrategyId || ''}
                        onChange={(e) => setSelectedStrategyId(e.target.value || undefined)}
                    />
                    <p className="performance-tracking-example__selector-hint">
                        Enter a strategy ID to view its performance metrics
                    </p>
                </div>
            )}

            {/* Performance Display */}
            <div className="performance-tracking-example__content">
                {/* Metrics Section */}
                <div className="performance-tracking-example__section">
                    <PerformanceMetrics
                        strategyId={viewMode === 'individual' ? selectedStrategyId : undefined}
                    />
                </div>

                {/* Chart Section */}
                <div className="performance-tracking-example__section">
                    <PerformanceChart
                        strategyId={viewMode === 'individual' ? selectedStrategyId : undefined}
                        height={400}
                    />
                </div>
            </div>

            {/* Usage Instructions */}
            <div className="performance-tracking-example__instructions">
                <h3 className="performance-tracking-example__instructions-title">
                    How to Use
                </h3>
                <ul className="performance-tracking-example__instructions-list">
                    <li>
                        <strong>All Strategies View:</strong> Shows aggregated performance across all active strategies
                    </li>
                    <li>
                        <strong>Individual Strategy View:</strong> Shows detailed performance for a specific strategy
                    </li>
                    <li>
                        <strong>Time Period Selector:</strong> Filter metrics by Today, This Week, This Month, or All Time
                    </li>
                    <li>
                        <strong>Performance Metrics:</strong> Displays total profit, loss, win rate, and activation count
                    </li>
                    <li>
                        <strong>Performance Chart:</strong> Visual representation of profit/loss distribution
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default PerformanceTrackingExample;
