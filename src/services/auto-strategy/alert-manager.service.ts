/**
 * AlertManager Service
 * 
 * Manages alerts and notifications for strategy triggers.
 * Supports browser notifications, sound alerts, and visual indicators.
 * 
 * Requirements: 22.1, 22.2, 22.3, 22.4, 22.5
 */

import { Strategy, ActionType } from '../../types/auto-strategy.types';

/**
 * Alert types supported by the system
 */
export enum AlertType {
    BrowserNotification = 'browser_notification',
    SoundAlert = 'sound_alert',
    VisualIndicator = 'visual_indicator',
}

/**
 * Alert filter options to reduce notification fatigue
 */
export enum AlertFilter {
    All = 'all',
    BotStartsOnly = 'bot_starts_only',
    BotStopsOnly = 'bot_stops_only',
    None = 'none',
}

/**
 * Per-strategy alert configuration
 */
export interface AlertConfig {
    /** Strategy ID */
    strategyId: string;
    /** Enabled alert types */
    enabledAlerts: AlertType[];
    /** Alert filter */
    filter: AlertFilter;
    /** Custom sound URL (optional) */
    customSoundUrl?: string;
}

/**
 * Alert event data
 */
export interface AlertEvent {
    /** Unique alert ID */
    id: string;
    /** Strategy that triggered the alert */
    strategyId: string;
    /** Strategy name */
    strategyName: string;
    /** Action that was taken */
    action: ActionType;
    /** Bot ID involved */
    botId: string;
    /** Timestamp */
    timestamp: number;
    /** Additional message */
    message?: string;
}

/**
 * Alert history entry
 */
export interface AlertHistoryEntry extends AlertEvent {
    /** Whether the alert was shown */
    wasShown: boolean;
    /** Alert types that were triggered */
    triggeredAlerts: AlertType[];
}

/**
 * Notification permission status
 */
export enum NotificationPermission {
    Granted = 'granted',
    Denied = 'denied',
    Default = 'default',
}

/**
 * Visual alert callback
 */
export type VisualAlertCallback = (event: AlertEvent) => void;

/**
 * AlertManager Service
 * 
 * Manages all alert and notification functionality for the Auto Strategy Controller.
 */
export class AlertManager {
    private alertConfigs: Map<string, AlertConfig> = new Map();
    private alertHistory: AlertHistoryEntry[] = [];
    private maxHistorySize: number = 100;
    private visualAlertCallbacks: Set<VisualAlertCallback> = new Set();
    private audioContext: AudioContext | null = null;
    private defaultSoundUrl: string = '/sounds/alert.mp3';
    private notificationPermission: NotificationPermission = NotificationPermission.Default;

    constructor() {
        this.initializeAudioContext();
        this.checkNotificationPermission();
    }

    /**
     * Initialize Web Audio API context
     */
    private initializeAudioContext(): void {
        try {
            const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
            if (AudioContextClass) {
                this.audioContext = new AudioContextClass();
            }
        } catch (error) {
            console.warn('Web Audio API not supported:', error);
        }
    }

    /**
     * Check current notification permission status
     */
    private checkNotificationPermission(): void {
        if ('Notification' in window) {
            this.notificationPermission = Notification.permission as NotificationPermission;
        }
    }

    /**
     * Request browser notification permission
     * @returns Promise resolving to permission status
     */
    async requestNotificationPermission(): Promise<NotificationPermission> {
        if (!('Notification' in window)) {
            console.warn('Browser notifications not supported');
            return NotificationPermission.Denied;
        }

        if (this.notificationPermission === NotificationPermission.Granted) {
            return NotificationPermission.Granted;
        }

        try {
            const permission = await Notification.requestPermission();
            this.notificationPermission = permission as NotificationPermission;
            return this.notificationPermission;
        } catch (error) {
            console.error('Error requesting notification permission:', error);
            return NotificationPermission.Denied;
        }
    }

    /**
     * Get current notification permission status
     */
    getNotificationPermission(): NotificationPermission {
        return this.notificationPermission;
    }

    /**
     * Set alert configuration for a strategy
     */
    setAlertConfig(config: AlertConfig): void {
        this.alertConfigs.set(config.strategyId, config);
        this.saveAlertConfigs();
    }

    /**
     * Get alert configuration for a strategy
     */
    getAlertConfig(strategyId: string): AlertConfig | undefined {
        return this.alertConfigs.get(strategyId);
    }

    /**
     * Get all alert configurations
     */
    getAllAlertConfigs(): AlertConfig[] {
        return Array.from(this.alertConfigs.values());
    }

    /**
     * Remove alert configuration for a strategy
     */
    removeAlertConfig(strategyId: string): void {
        this.alertConfigs.delete(strategyId);
        this.saveAlertConfigs();
    }

    /**
     * Trigger alert for a strategy action
     */
    async triggerAlert(strategy: Strategy, action: ActionType, botId: string, message?: string): Promise<void> {
        const config = this.alertConfigs.get(strategy.id);
        
        // If no config exists, use default (all alerts enabled, all actions)
        const enabledAlerts = config?.enabledAlerts ?? [
            AlertType.BrowserNotification,
            AlertType.SoundAlert,
            AlertType.VisualIndicator,
        ];
        const filter = config?.filter ?? AlertFilter.All;

        // Apply filter
        if (!this.shouldShowAlert(action, filter)) {
            return;
        }

        // Create alert event
        const alertEvent: AlertEvent = {
            id: this.generateAlertId(),
            strategyId: strategy.id,
            strategyName: strategy.name,
            action,
            botId,
            timestamp: Date.now(),
            message,
        };

        const triggeredAlerts: AlertType[] = [];

        // Trigger enabled alerts
        for (const alertType of enabledAlerts) {
            try {
                switch (alertType) {
                    case AlertType.BrowserNotification:
                        await this.showBrowserNotification(alertEvent);
                        triggeredAlerts.push(alertType);
                        break;
                    case AlertType.SoundAlert:
                        await this.playSoundAlert(config?.customSoundUrl);
                        triggeredAlerts.push(alertType);
                        break;
                    case AlertType.VisualIndicator:
                        this.showVisualIndicator(alertEvent);
                        triggeredAlerts.push(alertType);
                        break;
                }
            } catch (error) {
                console.error(`Error triggering ${alertType}:`, error);
            }
        }

        // Add to history
        this.addToHistory({
            ...alertEvent,
            wasShown: triggeredAlerts.length > 0,
            triggeredAlerts,
        });
    }

    /**
     * Check if alert should be shown based on filter
     */
    private shouldShowAlert(action: ActionType, filter: AlertFilter): boolean {
        switch (filter) {
            case AlertFilter.All:
                return true;
            case AlertFilter.BotStartsOnly:
                return action === ActionType.StartBot || action === ActionType.SwitchBot;
            case AlertFilter.BotStopsOnly:
                return action === ActionType.StopBot || action === ActionType.SwitchBot;
            case AlertFilter.None:
                return false;
            default:
                return true;
        }
    }

    /**
     * Show browser notification
     */
    private async showBrowserNotification(event: AlertEvent): Promise<void> {
        if (!('Notification' in window)) {
            throw new Error('Browser notifications not supported');
        }

        if (this.notificationPermission !== NotificationPermission.Granted) {
            throw new Error('Notification permission not granted');
        }

        const title = `Strategy: ${event.strategyName}`;
        const body = event.message || this.getDefaultMessage(event);
        const icon = '/icons/zeus-logo.png';

        const notification = new Notification(title, {
            body,
            icon,
            badge: icon,
            timestamp: event.timestamp,
            tag: event.strategyId, // Prevents duplicate notifications
            requireInteraction: false,
        });

        // Auto-close after 5 seconds
        setTimeout(() => notification.close(), 5000);
    }

    /**
     * Get default message for alert event
     */
    private getDefaultMessage(event: AlertEvent): string {
        const actionText = this.getActionText(event.action);
        return `${actionText} bot ${event.botId} at ${new Date(event.timestamp).toLocaleTimeString()}`;
    }

    /**
     * Get human-readable action text
     */
    private getActionText(action: ActionType): string {
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
    }

    /**
     * Play sound alert
     */
    private async playSoundAlert(customSoundUrl?: string): Promise<void> {
        const soundUrl = customSoundUrl || this.defaultSoundUrl;

        // Try using HTML5 Audio first (simpler and more reliable)
        try {
            const audio = new Audio(soundUrl);
            audio.volume = 0.5;
            await audio.play();
            return;
        } catch (error) {
            console.warn('HTML5 Audio failed, trying Web Audio API:', error);
        }

        // Fallback to Web Audio API
        if (!this.audioContext) {
            throw new Error('Audio playback not supported');
        }

        try {
            const response = await fetch(soundUrl);
            const arrayBuffer = await response.arrayBuffer();
            const audioBuffer = await this.audioContext.decodeAudioData(arrayBuffer);

            const source = this.audioContext.createBufferSource();
            source.buffer = audioBuffer;
            source.connect(this.audioContext.destination);
            source.start(0);
        } catch (error) {
            console.error('Error playing sound alert:', error);
            throw error;
        }
    }

    /**
     * Show visual indicator by notifying registered callbacks
     */
    private showVisualIndicator(event: AlertEvent): void {
        this.visualAlertCallbacks.forEach(callback => {
            try {
                callback(event);
            } catch (error) {
                console.error('Error in visual alert callback:', error);
            }
        });
    }

    /**
     * Register callback for visual alerts
     */
    onVisualAlert(callback: VisualAlertCallback): () => void {
        this.visualAlertCallbacks.add(callback);
        
        // Return unsubscribe function
        return () => {
            this.visualAlertCallbacks.delete(callback);
        };
    }

    /**
     * Add alert to history
     */
    private addToHistory(entry: AlertHistoryEntry): void {
        this.alertHistory.unshift(entry);
        
        // Limit history size
        if (this.alertHistory.length > this.maxHistorySize) {
            this.alertHistory = this.alertHistory.slice(0, this.maxHistorySize);
        }

        this.saveAlertHistory();
    }

    /**
     * Get alert history
     */
    getAlertHistory(limit?: number): AlertHistoryEntry[] {
        if (limit) {
            return this.alertHistory.slice(0, limit);
        }
        return [...this.alertHistory];
    }

    /**
     * Clear alert history
     */
    clearAlertHistory(): void {
        this.alertHistory = [];
        this.saveAlertHistory();
    }

    /**
     * Generate unique alert ID
     */
    private generateAlertId(): string {
        return `alert_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    }

    /**
     * Save alert configurations to localStorage
     */
    private saveAlertConfigs(): void {
        try {
            const configs = Array.from(this.alertConfigs.values());
            localStorage.setItem('auto_strategy_alert_configs', JSON.stringify(configs));
        } catch (error) {
            console.error('Error saving alert configs:', error);
        }
    }

    /**
     * Load alert configurations from localStorage
     */
    loadAlertConfigs(): void {
        try {
            const stored = localStorage.getItem('auto_strategy_alert_configs');
            if (stored) {
                const configs: AlertConfig[] = JSON.parse(stored);
                configs.forEach(config => {
                    this.alertConfigs.set(config.strategyId, config);
                });
            }
        } catch (error) {
            console.error('Error loading alert configs:', error);
        }
    }

    /**
     * Save alert history to localStorage
     */
    private saveAlertHistory(): void {
        try {
            localStorage.setItem('auto_strategy_alert_history', JSON.stringify(this.alertHistory));
        } catch (error) {
            console.error('Error saving alert history:', error);
        }
    }

    /**
     * Load alert history from localStorage
     */
    loadAlertHistory(): void {
        try {
            const stored = localStorage.getItem('auto_strategy_alert_history');
            if (stored) {
                this.alertHistory = JSON.parse(stored);
            }
        } catch (error) {
            console.error('Error loading alert history:', error);
        }
    }

    /**
     * Set maximum history size
     */
    setMaxHistorySize(size: number): void {
        this.maxHistorySize = size;
        if (this.alertHistory.length > size) {
            this.alertHistory = this.alertHistory.slice(0, size);
            this.saveAlertHistory();
        }
    }

    /**
     * Test alert system
     */
    async testAlert(alertTypes: AlertType[]): Promise<void> {
        const testEvent: AlertEvent = {
            id: this.generateAlertId(),
            strategyId: 'test',
            strategyName: 'Test Strategy',
            action: ActionType.StartBot,
            botId: 'test_bot',
            timestamp: Date.now(),
            message: 'This is a test alert',
        };

        for (const alertType of alertTypes) {
            try {
                switch (alertType) {
                    case AlertType.BrowserNotification:
                        await this.showBrowserNotification(testEvent);
                        break;
                    case AlertType.SoundAlert:
                        await this.playSoundAlert();
                        break;
                    case AlertType.VisualIndicator:
                        this.showVisualIndicator(testEvent);
                        break;
                }
            } catch (error) {
                console.error(`Error testing ${alertType}:`, error);
                throw error;
            }
        }
    }

    /**
     * Cleanup resources
     */
    destroy(): void {
        this.visualAlertCallbacks.clear();
        if (this.audioContext) {
            this.audioContext.close();
            this.audioContext = null;
        }
    }
}

// Export singleton instance
export const alertManager = new AlertManager();
