/**
 * Alert Configuration Builder Component
 * 
 * UI component for configuring alert preferences for a strategy.
 * Allows users to enable/disable different alert types and set filters.
 * 
 * Requirements: 22.1, 22.2, 22.3, 22.4, 22.5
 */

import React, { useState, useEffect } from 'react';
import { AlertType, AlertFilter, AlertConfig, alertManager } from '../../services/auto-strategy/alert-manager.service';
import Button from '../shared_ui/button/button';
import './AlertConfigBuilder.scss';

interface AlertConfigBuilderProps {
    strategyId: string;
    onChange?: (config: AlertConfig) => void;
}

const AlertConfigBuilder: React.FC<AlertConfigBuilderProps> = ({ strategyId, onChange }) => {
    const [enabledAlerts, setEnabledAlerts] = useState<AlertType[]>([
        AlertType.BrowserNotification,
        AlertType.SoundAlert,
        AlertType.VisualIndicator,
    ]);
    const [filter, setFilter] = useState<AlertFilter>(AlertFilter.All);
    const [customSoundUrl, setCustomSoundUrl] = useState<string>('');
    const [showPermissionRequest, setShowPermissionRequest] = useState(false);

    // Load existing config
    useEffect(() => {
        const existingConfig = alertManager.getAlertConfig(strategyId);
        if (existingConfig) {
            setEnabledAlerts(existingConfig.enabledAlerts);
            setFilter(existingConfig.filter);
            setCustomSoundUrl(existingConfig.customSoundUrl || '');
        }

        // Check notification permission
        const permission = alertManager.getNotificationPermission();
        setShowPermissionRequest(permission === 'default');
    }, [strategyId]);

    // Notify parent of changes
    useEffect(() => {
        const config: AlertConfig = {
            strategyId,
            enabledAlerts,
            filter,
            customSoundUrl: customSoundUrl || undefined,
        };
        onChange?.(config);
    }, [strategyId, enabledAlerts, filter, customSoundUrl, onChange]);

    const toggleAlertType = (alertType: AlertType) => {
        setEnabledAlerts(prev => {
            if (prev.includes(alertType)) {
                return prev.filter(t => t !== alertType);
            } else {
                return [...prev, alertType];
            }
        });
    };

    const handleRequestPermission = async () => {
        const permission = await alertManager.requestNotificationPermission();
        setShowPermissionRequest(permission === 'default');
    };

    const handleTestAlerts = async () => {
        try {
            await alertManager.testAlert(enabledAlerts);
        } catch (error) {
            console.error('Error testing alerts:', error);
        }
    };

    return (
        <div className="alert-config-builder">
            <div className="alert-config-builder__section">
                <h4 className="alert-config-builder__subtitle">Alert Types</h4>
                <p className="alert-config-builder__description">
                    Choose which types of alerts you want to receive when this strategy triggers.
                </p>

                <div className="alert-config-builder__checkboxes">
                    <label className="alert-config-builder__checkbox">
                        <input
                            type="checkbox"
                            checked={enabledAlerts.includes(AlertType.BrowserNotification)}
                            onChange={() => toggleAlertType(AlertType.BrowserNotification)}
                        />
                        <span className="alert-config-builder__checkbox-label">
                            <span className="alert-config-builder__checkbox-icon">🔔</span>
                            Browser Notification
                        </span>
                    </label>

                    <label className="alert-config-builder__checkbox">
                        <input
                            type="checkbox"
                            checked={enabledAlerts.includes(AlertType.SoundAlert)}
                            onChange={() => toggleAlertType(AlertType.SoundAlert)}
                        />
                        <span className="alert-config-builder__checkbox-label">
                            <span className="alert-config-builder__checkbox-icon">🔊</span>
                            Sound Alert
                        </span>
                    </label>

                    <label className="alert-config-builder__checkbox">
                        <input
                            type="checkbox"
                            checked={enabledAlerts.includes(AlertType.VisualIndicator)}
                            onChange={() => toggleAlertType(AlertType.VisualIndicator)}
                        />
                        <span className="alert-config-builder__checkbox-label">
                            <span className="alert-config-builder__checkbox-icon">👁️</span>
                            Visual Indicator
                        </span>
                    </label>
                </div>

                {showPermissionRequest && enabledAlerts.includes(AlertType.BrowserNotification) && (
                    <div className="alert-config-builder__permission-request">
                        <p className="alert-config-builder__permission-text">
                            Browser notifications require permission. Click below to enable.
                        </p>
                        <Button
                            text="Enable Notifications"
                            onClick={handleRequestPermission}
                            small
                        />
                    </div>
                )}
            </div>

            <div className="alert-config-builder__section">
                <h4 className="alert-config-builder__subtitle">Alert Filter</h4>
                <p className="alert-config-builder__description">
                    Reduce notification fatigue by filtering which actions trigger alerts.
                </p>

                <div className="alert-config-builder__radio-group">
                    <label className="alert-config-builder__radio">
                        <input
                            type="radio"
                            value={AlertFilter.All}
                            checked={filter === AlertFilter.All}
                            onChange={(e) => setFilter(e.target.value as AlertFilter)}
                        />
                        <span>All Actions (bot starts, stops, and switches)</span>
                    </label>

                    <label className="alert-config-builder__radio">
                        <input
                            type="radio"
                            value={AlertFilter.BotStartsOnly}
                            checked={filter === AlertFilter.BotStartsOnly}
                            onChange={(e) => setFilter(e.target.value as AlertFilter)}
                        />
                        <span>Bot Starts Only (including switches)</span>
                    </label>

                    <label className="alert-config-builder__radio">
                        <input
                            type="radio"
                            value={AlertFilter.BotStopsOnly}
                            checked={filter === AlertFilter.BotStopsOnly}
                            onChange={(e) => setFilter(e.target.value as AlertFilter)}
                        />
                        <span>Bot Stops Only (including switches)</span>
                    </label>

                    <label className="alert-config-builder__radio">
                        <input
                            type="radio"
                            value={AlertFilter.None}
                            checked={filter === AlertFilter.None}
                            onChange={(e) => setFilter(e.target.value as AlertFilter)}
                        />
                        <span>No Alerts (disable all)</span>
                    </label>
                </div>
            </div>

            {enabledAlerts.includes(AlertType.SoundAlert) && (
                <div className="alert-config-builder__section">
                    <h4 className="alert-config-builder__subtitle">Custom Sound (Optional)</h4>
                    <p className="alert-config-builder__description">
                        Provide a URL to a custom sound file (MP3, WAV, OGG).
                    </p>
                    <input
                        type="text"
                        className="alert-config-builder__input"
                        value={customSoundUrl}
                        onChange={(e) => setCustomSoundUrl(e.target.value)}
                        placeholder="https://example.com/alert.mp3"
                    />
                </div>
            )}

            <div className="alert-config-builder__actions">
                <Button
                    text="Test Alerts"
                    onClick={handleTestAlerts}
                    secondary
                    small
                    is_disabled={enabledAlerts.length === 0}
                />
            </div>
        </div>
    );
};

export default AlertConfigBuilder;
