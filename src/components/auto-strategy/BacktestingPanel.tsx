/**
 * Backtesting Panel Component
 * 
 * UI for configuring and running backtests, and viewing results
 */

import React, { useState, useEffect, useCallback } from 'react';
import {
    BacktestingConfig,
    BacktestingMode,
    BacktestingProgress,
    BacktestingReport,
    HistoricalTickData,
    Strategy,
} from '../../types/auto-strategy.types';
import { BacktestingService } from '../../services/auto-strategy/backtesting.service';
import './BacktestingPanel.scss';

interface BacktestingPanelProps {
    backtestingService: BacktestingService;
    strategies: Strategy[];
}

export const BacktestingPanel: React.FC<BacktestingPanelProps> = ({
    backtestingService,
    strategies,
}) => {
    const [mode, setMode] = useState<BacktestingMode>(BacktestingMode.Live);
    const [isRunning, setIsRunning] = useState(false);
    const [progress, setProgress] = useState<BacktestingProgress | null>(null);
    const [report, setReport] = useState<BacktestingReport | null>(null);
    const [historicalData, setHistoricalData] = useState<HistoricalTickData[]>([]);
    const [selectedStrategies, setSelectedStrategies] = useState<string[]>([]);
    const [config, setConfig] = useState<Partial<BacktestingConfig>>({
        initialBalance: 10000,
        tradeDuration: 60,
        simulatedWinRate: 0.55,
        profitPercentage: 0.95,
        lossPercentage: 1.0,
    });
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        setMode(backtestingService.getMode());
        setReport(backtestingService.getLastReport());

        const unsubscribeProgress = backtestingService.onProgress(setProgress);
        const unsubscribeComplete = backtestingService.onComplete((newReport) => {
            setReport(newReport);
            setIsRunning(false);
            setProgress(null);
        });

        return () => {
            unsubscribeProgress();
            unsubscribeComplete();
        };
    }, [backtestingService]);

    const handleFileUpload = useCallback(async (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (!file) return;

        try {
            const text = await file.text();
            const data = await backtestingService.loadHistoricalData(text);
            setHistoricalData(prev => [...prev, data]);
            setError(null);
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Failed to load historical data');
        }
    }, [backtestingService]);

    const handleRemoveData = useCallback((index: number) => {
        setHistoricalData(prev => prev.filter((_, i) => i !== index));
    }, []);

    const handleToggleStrategy = useCallback((strategyId: string) => {
        setSelectedStrategies(prev =>
            prev.includes(strategyId)
                ? prev.filter(id => id !== strategyId)
                : [...prev, strategyId]
        );
    }, []);

    const handleRunBacktest = useCallback(async () => {
        if (historicalData.length === 0) {
            setError('Please upload historical data first');
            return;
        }

        if (selectedStrategies.length === 0) {
            setError('Please select at least one strategy');
            return;
        }

        const selectedStrategyObjects = strategies.filter(s => selectedStrategies.includes(s.id));

        const backtestConfig: BacktestingConfig = {
            historicalData,
            strategies: selectedStrategyObjects,
            initialBalance: config.initialBalance || 10000,
            tradeDuration: config.tradeDuration || 60,
            simulatedWinRate: config.simulatedWinRate || 0.55,
            profitPercentage: config.profitPercentage || 0.95,
            lossPercentage: config.lossPercentage || 1.0,
        };

        try {
            setIsRunning(true);
            setError(null);
            setProgress(null);
            await backtestingService.runBacktest(backtestConfig);
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Backtesting failed');
            setIsRunning(false);
        }
    }, [backtestingService, historicalData, selectedStrategies, strategies, config]);

    const handleStopBacktest = useCallback(() => {
        backtestingService.stopBacktest();
        setIsRunning(false);
    }, [backtestingService]);

    const handleToggleMode = useCallback(() => {
        if (mode === BacktestingMode.Live) {
            backtestingService.enableBacktestingMode();
            setMode(BacktestingMode.Backtesting);
        } else {
            backtestingService.disableBacktestingMode();
            setMode(BacktestingMode.Live);
        }
    }, [backtestingService, mode]);

    const handleExportReport = useCallback(() => {
        if (!report) return;

        const json = backtestingService.exportReport(report);
        const blob = new Blob([json], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `backtest-report-${Date.now()}.json`;
        a.click();
        URL.revokeObjectURL(url);
    }, [backtestingService, report]);

    return (
        <div className="backtesting-panel">
            <div className="backtesting-header">
                <h2>Backtesting</h2>
                <div className="mode-toggle">
                    <label>
                        <input
                            type="checkbox"
                            checked={mode === BacktestingMode.Backtesting}
                            onChange={handleToggleMode}
                            disabled={isRunning}
                        />
                        <span className={`mode-indicator ${mode}`}>
                            {mode === BacktestingMode.Backtesting ? 'Backtesting Mode' : 'Live Mode'}
                        </span>
                    </label>
                </div>
            </div>

            {error && (
                <div className="error-message">
                    <span className="error-icon">⚠️</span>
                    {error}
                </div>
            )}

            <div className="backtesting-content">
                {/* Configuration Section */}
                <div className="config-section">
                    <h3>Configuration</h3>

                    {/* Historical Data Upload */}
                    <div className="config-group">
                        <label>Historical Data</label>
                        <input
                            type="file"
                            accept=".json"
                            onChange={handleFileUpload}
                            disabled={isRunning}
                        />
                        {historicalData.length > 0 && (
                            <div className="data-list">
                                {historicalData.map((data, index) => (
                                    <div key={index} className="data-item">
                                        <span>{data.symbol}</span>
                                        <span>{data.ticks.length} ticks</span>
                                        <button
                                            onClick={() => handleRemoveData(index)}
                                            disabled={isRunning}
                                            className="remove-btn"
                                        >
                                            ×
                                        </button>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Strategy Selection */}
                    <div className="config-group">
                        <label>Strategies to Test</label>
                        <div className="strategy-list">
                            {strategies.map(strategy => (
                                <label key={strategy.id} className="strategy-checkbox">
                                    <input
                                        type="checkbox"
                                        checked={selectedStrategies.includes(strategy.id)}
                                        onChange={() => handleToggleStrategy(strategy.id)}
                                        disabled={isRunning}
                                    />
                                    <span>{strategy.name}</span>
                                </label>
                            ))}
                        </div>
                    </div>

                    {/* Simulation Parameters */}
                    <div className="config-group">
                        <label>Initial Balance</label>
                        <input
                            type="number"
                            value={config.initialBalance}
                            onChange={e => setConfig(prev => ({ ...prev, initialBalance: Number(e.target.value) }))}
                            disabled={isRunning}
                            min="100"
                            step="100"
                        />
                    </div>

                    <div className="config-group">
                        <label>Trade Duration (seconds)</label>
                        <input
                            type="number"
                            value={config.tradeDuration}
                            onChange={e => setConfig(prev => ({ ...prev, tradeDuration: Number(e.target.value) }))}
                            disabled={isRunning}
                            min="1"
                            max="3600"
                        />
                    </div>

                    <div className="config-group">
                        <label>Simulated Win Rate</label>
                        <input
                            type="number"
                            value={config.simulatedWinRate}
                            onChange={e => setConfig(prev => ({ ...prev, simulatedWinRate: Number(e.target.value) }))}
                            disabled={isRunning}
                            min="0"
                            max="1"
                            step="0.01"
                        />
                    </div>

                    <div className="config-group">
                        <label>Profit Percentage</label>
                        <input
                            type="number"
                            value={config.profitPercentage}
                            onChange={e => setConfig(prev => ({ ...prev, profitPercentage: Number(e.target.value) }))}
                            disabled={isRunning}
                            min="0"
                            max="10"
                            step="0.05"
                        />
                    </div>

                    <div className="config-group">
                        <label>Loss Percentage</label>
                        <input
                            type="number"
                            value={config.lossPercentage}
                            onChange={e => setConfig(prev => ({ ...prev, lossPercentage: Number(e.target.value) }))}
                            disabled={isRunning}
                            min="0"
                            max="10"
                            step="0.05"
                        />
                    </div>

                    {/* Run Button */}
                    <div className="action-buttons">
                        {!isRunning ? (
                            <button
                                onClick={handleRunBacktest}
                                className="run-btn"
                                disabled={historicalData.length === 0 || selectedStrategies.length === 0}
                            >
                                Run Backtest
                            </button>
                        ) : (
                            <button onClick={handleStopBacktest} className="stop-btn">
                                Stop Backtest
                            </button>
                        )}
                    </div>
                </div>

                {/* Progress Section */}
                {progress && (
                    <div className="progress-section">
                        <h3>Progress</h3>
                        <div className="progress-bar">
                            <div
                                className="progress-fill"
                                style={{ width: `${progress.progressPercentage}%` }}
                            />
                        </div>
                        <div className="progress-info">
                            <span>
                                {progress.currentTick.toLocaleString()} / {progress.totalTicks.toLocaleString()} ticks
                            </span>
                            <span>{progress.progressPercentage.toFixed(1)}%</span>
                        </div>
                    </div>
                )}

                {/* Results Section */}
                {report && !isRunning && (
                    <div className="results-section">
                        <div className="results-header">
                            <h3>Results</h3>
                            <button onClick={handleExportReport} className="export-btn">
                                Export Report
                            </button>
                        </div>

                        <div className="overall-stats">
                            <h4>Overall Performance</h4>
                            <div className="stats-grid">
                                <div className="stat-item">
                                    <span className="stat-label">Total Triggers</span>
                                    <span className="stat-value">{report.overall.totalTriggers}</span>
                                </div>
                                <div className="stat-item">
                                    <span className="stat-label">Total Executions</span>
                                    <span className="stat-value">{report.overall.totalExecutions}</span>
                                </div>
                                <div className="stat-item">
                                    <span className="stat-label">Net P/L</span>
                                    <span className={`stat-value ${report.overall.netProfitLoss >= 0 ? 'positive' : 'negative'}`}>
                                        {report.overall.netProfitLoss.toFixed(2)}
                                    </span>
                                </div>
                                <div className="stat-item">
                                    <span className="stat-label">Win Rate</span>
                                    <span className="stat-value">{report.overall.overallWinRate.toFixed(2)}%</span>
                                </div>
                                <div className="stat-item">
                                    <span className="stat-label">Ticks Processed</span>
                                    <span className="stat-value">{report.ticksProcessed.toLocaleString()}</span>
                                </div>
                                <div className="stat-item">
                                    <span className="stat-label">Duration</span>
                                    <span className="stat-value">{report.duration.toFixed(2)}s</span>
                                </div>
                            </div>
                        </div>

                        <div className="strategy-results">
                            <h4>Strategy Performance</h4>
                            {report.strategyReports.map(strategyReport => (
                                <div key={strategyReport.strategyId} className="strategy-result-card">
                                    <h5>{strategyReport.strategyName}</h5>
                                    <div className="stats-grid">
                                        <div className="stat-item">
                                            <span className="stat-label">Triggers</span>
                                            <span className="stat-value">{strategyReport.triggerCount}</span>
                                        </div>
                                        <div className="stat-item">
                                            <span className="stat-label">Executions</span>
                                            <span className="stat-value">{strategyReport.executionCount}</span>
                                        </div>
                                        <div className="stat-item">
                                            <span className="stat-label">Win Rate</span>
                                            <span className="stat-value">{strategyReport.winRate.toFixed(2)}%</span>
                                        </div>
                                        <div className="stat-item">
                                            <span className="stat-label">Net P/L</span>
                                            <span className={`stat-value ${strategyReport.netProfitLoss >= 0 ? 'positive' : 'negative'}`}>
                                                {strategyReport.netProfitLoss.toFixed(2)}
                                            </span>
                                        </div>
                                        <div className="stat-item">
                                            <span className="stat-label">Profit Factor</span>
                                            <span className="stat-value">
                                                {strategyReport.profitFactor === Infinity ? '∞' : strategyReport.profitFactor.toFixed(2)}
                                            </span>
                                        </div>
                                        <div className="stat-item">
                                            <span className="stat-label">Max Drawdown</span>
                                            <span className="stat-value negative">{strategyReport.maxDrawdown.toFixed(2)}</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};
