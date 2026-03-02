/**
 * Alert Indicator Component
 * 
 * Visual indicator that displays when strategy alerts are triggered.
 * Shows a toast-style notification with strategy name and action.
 * 
 * Requirements: 22.2, 22.3
 */

import React, { useState, useEffect } from 'react';
import { AlertEvent, alertManager } from '../../services/auto-strategy/alert-manager.service';
import { ActionType } from '../../types/auto-strategy.types';
import './AlertIndicator.scss';

interface AlertToast {
    event: AlertEvent;
    id: string;
}

const AlertIndicator: React.FC = () => {
    const [toasts, setToasts] = useState<AlertToast[]>([]);

    useEffect(() => {
        // Subscribe to visual alerts
        const unsubscribe = alertManager.onVisualAlert((event) => {
            const toast: AlertToast = {
                event,
                id: event.id,
            };

            setToasts(prev => [...prev, toast]);

            // Auto-remove after 5 seconds
            setTimeout(() => {
                setToasts(prev => prev.filter(t => t.id !== toast.id));
            }, 5000);
        });

        return unsubscribe;
    }, []);

    const handleDismiss = (id: string) => {
        setToasts(prev => prev.filter(t => t.id !== id));
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

    const getActionClass = (action: ActionType): string => {
        switch (action) {
            case ActionType.StartBot:
                return 'alert-toast--start';
            case ActionType.StopBot:
                return 'alert-toast--stop';
            case ActionType.SwitchBot:
                return 'alert-toast--switch';
            default:
                return '';
        }
    };

    if (toasts.length === 0) {
        return null;
    }

    return (
        <div className="alert-indicator">
            {toasts.map(toast => (
                <div
                    key={toast.id}
                    className={`alert-toast ${getActionClass(toast.event.action)}`}
                >
                    <div className="alert-toast__icon">
                        {getActionIcon(toast.event.action)}
                    </div>
                    <div className="alert-toast__content">
                        <div className="alert-toast__title">
                            {toast.event.strategyName}
                        </div>
                        <div className="alert-toast__message">
                            {toast.event.message || `${getActionText(toast.event.action)} bot ${toast.event.botId}`}
                        </div>
                        <div className="alert-toast__time">
                            {new Date(toast.event.timestamp).toLocaleTimeString()}
                        </div>
                    </div>
                    <button
                        className="alert-toast__dismiss"
                        onClick={() => handleDismiss(toast.id)}
                        aria-label="Dismiss alert"
                    >
                        ✕
                    </button>
                </div>
            ))}
        </div>
    );
};

export default AlertIndicator;
