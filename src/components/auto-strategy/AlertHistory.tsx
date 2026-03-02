/**
 * Alert History Component
 * 
 * Displays a history of all strategy alerts.
 * Shows strategy name, action, timestamp, and alert types triggered.
 * 
 * Requirements: 22.3
 */

import React, { useState, useEffect } from 'react';
import { AlertHistoryEntry, alertManager, AlertType } from '../../services/auto-strategy/alert-manager.service';
import { ActionType } from '../../types/auto-strategy.types';
import Button from '../shared_ui/button/button';
import './AlertHistory.scss';

interface AlertHistoryProps {
    limit?: number;
}

const AlertHistory: React.FC<AlertHistoryProps> = ({ limit = 50 }) => {
    const [history, setHistory] = useState<AlertHistoryEntry[]>([]);
    const [isExpanded, setIsExpanded] = useState(false);

    useEffect(() => {
        loadHistory();
    }, [limit]);

    const loadHistory = () => {
        const entries = alertManager.getAlertHistory(limit);
        setHistory(entries);
    };

    const handleClearHistory = () => {
        if (confirm('Are you sure you want to clear all alert history?')) {
            alertManager.clearAlertHistory();
            setHistory([]);
        }
    };

    const getActionIcon = (action: ActionType): string => {
        switch (action) {
            case ActionType.StartBot:
                return '▶️';
            case ActionType.StopBot:
                return '⏹️';
            case ActionType.SwitchBot:
                return '🔄';
            default:
                return '📢';
        }
    };

    const getActionText = (action: ActionType): string => {
        switch (action) {
            case ActionType.StartBot:
                return 'Started';
            case ActionType.StopBot:
                return 'Stopped';
            case ActionType.SwitchBot:
                return 'Switched to';
            default:
                return 'Action on';
        }
    };

    const getAlertTypeIcon = (alertType: AlertType): string => {
        switch (alertType) {
            case AlertType.BrowserNotification:
                return '🔔';
            case AlertType.SoundAlert:
                return '🔊';
            case AlertType.VisualIndicator:
                return '👁️';
            default:
                return '📢';
        }
    };

    const formatTimestamp = (timestamp: number): string => {
        const date = new Date(timestamp);
        const now = new Date();
        const diffMs = now.getTime() - date.getTime();
        const diffMins = Math.floor(diffMs / 60000);
        const diffHours = Math.floor(diffMs / 3600000);
        const diffDays = Math.floor(diffMs / 86400000);

        if (diffMins < 1) {
            return 'Just now';
        } else if (diffMins < 60) {
            return `${diffMins}m ago`;
        } else if (diffHours < 24) {
            return `${diffHours}h ago`;
        } else if (diffDays < 7) {
            return `${diffDays}d ago`;
        } else {
            return date.toLocaleDateString();
        }
    };

    const displayedHistory = isExpanded ? history : history.slice(0, 10);

    if (history.length === 0) {
        return (
            <div className="alert-history alert-history--empty">
                <div className="alert-history__empty-icon">📭</div>
                <p className="alert-history__empty-text">No alerts yet</p>
            </div>
        );
    }

    return (
        <div className="alert-history">
            <div className="alert-history__header">
                <h4 className="alert-history__title">Alert History</h4>
                <Button
                    text="Clear History"
                    onClick={handleClearHistory}
                    secondary
                    small
                />
            </div>

            <div className="alert-history__list">
                {displayedHistory.map(entry => (
                    <div key={entry.id} className="alert-history__item">
                        <div className="alert-history__item-icon">
                            {getActionIcon(entry.action)}
                        </div>
                        <div className="alert-history__item-content">
                            <div className="alert-history__item-header">
                                <span className="alert-history__item-strategy">
                                    {entry.strategyName}
                                </span>
                                <span className="alert-history__item-time">
                                    {formatTimestamp(entry.timestamp)}
                                </span>
                            </div>
                            <div className="alert-history__item-message">
                                {entry.message || `${getActionText(entry.action)} bot ${entry.botId}`}
                            </div>
                            {entry.triggeredAlerts.length > 0 && (
                                <div className="alert-history__item-alerts">
                                    {entry.triggeredAlerts.map(alertType => (
                                        <span
                                            key={alertType}
                                            className="alert-history__item-alert-badge"
                                            title={alertType}
                                        >
                                            {getAlertTypeIcon(alertType)}
                                        </span>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>

            {history.length > 10 && (
                <div className="alert-history__footer">
                    <Button
                        text={isExpanded ? 'Show Less' : `Show All (${history.length})`}
                        onClick={() => setIsExpanded(!isExpanded)}
                        secondary
                        small
                    />
                </div>
            )}
        </div>
    );
};

export default AlertHistory;
