import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { useAutoStrategyController } from '../../hooks/useAutoStrategyController';
import StrategyList from './StrategyList';
import RunningBotsList from './RunningBotsList';
import AlertIndicator from './AlertIndicator';
import AlertHistory from './AlertHistory';
import DemoModeIndicator from './DemoModeIndicator';
import type { Strategy, RunningBot } from '../../types/auto-strategy.types';
import type { ConditionState } from '../../hooks/useAutoStrategyController';
import './ConditionDashboard.scss';

interface ConditionDashboardProps {
    className?: string;
}

const ConditionDashboard: React.FC<ConditionDashboardProps> = React.memo(({ className = '' }) => {
    const {
        activeStrategies,
        runningBots,
        conditionStates,
        connectionStatus,
        pauseStrategy,
        resumeStrategy,
        emergencyStop,
    } = useAutoStrategyController();

    const [showEmergencyConfirm, setShowEmergencyConfirm] = useState(false);

    // Memoize expensive calculations
    const strategiesCount = useMemo(() => activeStrategies.length, [activeStrategies.length]);
    const runningBotsCount = useMemo(() => runningBots.length, [runningBots.length]);
    
    const connectionStatusClass = useMemo(() => {
        switch (connectionStatus) {
            case 'connected':
                return 'connection-status--connected';
            case 'disconnected':
                return 'connection-status--disconnected';
            case 'connecting':
                return 'connection-status--connecting';
            default:
                return '';
        }
    }, [connectionStatus]);

    const connectionStatusText = useMemo(() => {
        switch (connectionStatus) {
            case 'connected':
                return 'Connected';
            case 'disconnected':
                return 'Disconnected';
            case 'connecting':
                return 'Connecting...';
            default:
                return 'Unknown';
        }
    }, [connectionStatus]);

    // Memoize callback functions to prevent unnecessary re-renders
    const handleEmergencyStop = useCallback(async () => {
        try {
            await emergencyStop();
            setShowEmergencyConfirm(false);
        } catch (error) {
            console.error('Emergency stop failed:', error);
        }
    }, [emergencyStop]);

    const handlePauseStrategy = useCallback(async (strategyId: string) => {
        try {
            await pauseStrategy(strategyId);
        } catch (error) {
            console.error('Failed to pause strategy:', error);
        }
    }, [pauseStrategy]);

    const handleResumeStrategy = useCallback(async (strategyId: string) => {
        try {
            await resumeStrategy(strategyId);
        } catch (error) {
            console.error('Failed to resume strategy:', error);
        }
    }, [resumeStrategy]);

    const handleStopBot = useCallback(async (botId: string) => {
        try {
            // TODO: Implement bot stop functionality via controller
            console.log('Stopping bot:', botId);
            // await botController.stopBot(botId, 'manual_stop');
        } catch (error) {
            console.error('Failed to stop bot:', error);
        }
    }, []);

    const handleShowEmergencyConfirm = useCallback(() => {
        setShowEmergencyConfirm(true);
    }, []);

    const handleHideEmergencyConfirm = useCallback(() => {
        setShowEmergencyConfirm(false);
    }, []);

    const handleEmergencyConfirmClick = useCallback((e: React.MouseEvent) => {
        e.stopPropagation();
    }, []);

    return (
        <div className={`condition-dashboard ${className}`}>
            {/* Dashboard Header */}
            <div className="condition-dashboard__header">
                <div className="condition-dashboard__title">
                    <span className="condition-dashboard__icon">⚡</span>
                    <h1>Auto Strategy Controller</h1>
                    <span className="condition-dashboard__subtitle">Zeus Command Center</span>
                </div>
                
                {/* Demo Mode Indicator */}
                <DemoModeIndicator />

                {/* Connection Status Indicator */}
                <div className={`connection-status ${connectionStatusClass}`}>
                    <div className="connection-status__indicator">
                        <div className="connection-status__pulse"></div>
                    </div>
                    <span className="connection-status__text">{connectionStatusText}</span>
                </div>
            </div>

            {/* Emergency Stop Button */}
            <div className="emergency-stop-container">
                <button
                    className="emergency-stop-button"
                    onClick={handleShowEmergencyConfirm}
                    disabled={connectionStatus === 'disconnected'}
                >
                    <span className="emergency-stop-button__icon">🛑</span>
                    <span className="emergency-stop-button__text">EMERGENCY STOP</span>
                    <span className="emergency-stop-button__subtext">Stop All Bots</span>
                </button>
            </div>

            {/* Dashboard Grid Layout */}
            <div className="dashboard-grid">
                {/* Strategy List Section */}
                <div className="dashboard-section dashboard-section--strategies">
                    <div className="dashboard-section__header">
                        <h2 className="dashboard-section__title">
                            <span className="dashboard-section__icon">📊</span>
                            Active Strategies
                        </h2>
                        <span className="dashboard-section__badge">{strategiesCount}</span>
                    </div>
                    <div className="dashboard-section__content">
                        <StrategyList
                            strategies={activeStrategies}
                            conditionStates={conditionStates}
                            onPause={handlePauseStrategy}
                            onResume={handleResumeStrategy}
                        />
                    </div>
                </div>

                {/* Running Bots Section */}
                <div className="dashboard-section dashboard-section--bots">
                    <div className="dashboard-section__header">
                        <h2 className="dashboard-section__title">
                            <span className="dashboard-section__icon">🤖</span>
                            Running Bots
                        </h2>
                        <span className="dashboard-section__badge">{runningBotsCount}</span>
                    </div>
                    <div className="dashboard-section__content">
                        <RunningBotsList
                            bots={runningBots}
                            onStopBot={handleStopBot}
                        />
                    </div>
                </div>

                {/* Performance Metrics Section */}
                <div className="dashboard-section dashboard-section--performance">
                    <div className="dashboard-section__header">
                        <h2 className="dashboard-section__title">
                            <span className="dashboard-section__icon">📈</span>
                            Performance
                        </h2>
                    </div>
                    <div className="dashboard-section__content">
                        <div className="empty-state">
                            <span className="empty-state__icon">📊</span>
                            <p className="empty-state__text">Performance tracking</p>
                            <p className="empty-state__subtext">Metrics will appear as strategies execute</p>
                        </div>
                    </div>
                </div>

                {/* Audit Log Section */}
                <div className="dashboard-section dashboard-section--audit">
                    <div className="dashboard-section__header">
                        <h2 className="dashboard-section__title">
                            <span className="dashboard-section__icon">📝</span>
                            Alert History
                        </h2>
                    </div>
                    <div className="dashboard-section__content">
                        <AlertHistory limit={50} />
                    </div>
                </div>
            </div>

            {/* Alert Indicator (Toast Notifications) */}
            <AlertIndicator />

            {/* Emergency Stop Confirmation Dialog */}
            {showEmergencyConfirm && (
                <div className="emergency-confirm-overlay" onClick={handleHideEmergencyConfirm}>
                    <div className="emergency-confirm-dialog" onClick={handleEmergencyConfirmClick}>
                        <div className="emergency-confirm-dialog__icon">⚠️</div>
                        <h3 className="emergency-confirm-dialog__title">Emergency Stop</h3>
                        <p className="emergency-confirm-dialog__message">
                            This will immediately stop all running bots and disable all active strategies.
                            Are you sure you want to proceed?
                        </p>
                        <div className="emergency-confirm-dialog__actions">
                            <button
                                className="emergency-confirm-dialog__button emergency-confirm-dialog__button--cancel"
                                onClick={handleHideEmergencyConfirm}
                            >
                                Cancel
                            </button>
                            <button
                                className="emergency-confirm-dialog__button emergency-confirm-dialog__button--confirm"
                                onClick={handleEmergencyStop}
                            >
                                Stop All Bots
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
});

ConditionDashboard.displayName = 'ConditionDashboard';

export default ConditionDashboard;
