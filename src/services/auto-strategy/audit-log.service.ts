/**
 * Audit Log Service
 * 
 * Manages comprehensive event logging for the Auto Strategy Controller.
 * Records strategy triggers, bot actions, risk interventions, and errors
 * with structured data and timestamps. Provides search, filter, and
 * persistence capabilities with 90-day retention.
 * 
 * Requirements: 23.1, 23.2, 23.3, 23.4, 23.5, 23.6
 */

// ============================================================================
// Types and Interfaces
// ============================================================================

/**
 * Audit log event types
 */
export enum AuditEventType {
    StrategyTrigger = 'strategy_trigger',
    BotStarted = 'bot_started',
    BotStopped = 'bot_stopped',
    BotSwitched = 'bot_switched',
    RiskIntervention = 'risk_intervention',
    Error = 'error',
}

/**
 * Base audit log entry
 */
export interface BaseAuditEntry {
    /** Unique entry ID */
    id: string;
    /** Event type */
    type: AuditEventType;
    /** Timestamp in milliseconds */
    timestamp: number;
    /** Human-readable message */
    message: string;
}

/**
 * Strategy trigger event
 */
export interface StrategyTriggerEntry extends BaseAuditEntry {
    type: AuditEventType.StrategyTrigger;
    /** Strategy ID */
    strategyId: string;
    /** Strategy name */
    strategyName: string;
    /** Conditions that were met */
    conditionsMet: string[];
    /** Action taken */
    action: string;
    /** Bot ID involved */
    botId?: string;
}

/**
 * Bot started event
 */
export interface BotStartedEntry extends BaseAuditEntry {
    type: AuditEventType.BotStarted;
    /** Bot ID */
    botId: string;
    /** Bot name */
    botName: string;
    /** Strategy ID that initiated the start */
    strategyId: string;
    /** Strategy name */
    strategyName: string;
    /** Stake amount */
    stake: number;
}

/**
 * Bot stopped event
 */
export interface BotStoppedEntry extends BaseAuditEntry {
    type: AuditEventType.BotStopped;
    /** Bot ID */
    botId: string;
    /** Bot name */
    botName: string;
    /** Reason for stopping */
    reason: string;
    /** Strategy ID that initiated the stop (if applicable) */
    strategyId?: string;
    /** Duration in milliseconds */
    duration?: number;
}

/**
 * Bot switched event
 */
export interface BotSwitchedEntry extends BaseAuditEntry {
    type: AuditEventType.BotSwitched;
    /** Previous bot ID */
    fromBotId: string;
    /** New bot ID */
    toBotId: string;
    /** Strategy ID that initiated the switch */
    strategyId: string;
    /** Strategy name */
    strategyName: string;
}

/**
 * Risk intervention event
 */
export interface RiskInterventionEntry extends BaseAuditEntry {
    type: AuditEventType.RiskIntervention;
    /** Intervention type */
    interventionType: 'profit_target' | 'loss_limit' | 'strategy_profit_limit' | 'strategy_loss_limit';
    /** Current value that triggered intervention */
    currentValue: number;
    /** Limit that was breached */
    limit: number;
    /** Strategy ID (if applicable) */
    strategyId?: string;
    /** Bots that were stopped */
    botsStopped?: string[];
}

/**
 * Error event
 */
export interface ErrorEntry extends BaseAuditEntry {
    type: AuditEventType.Error;
    /** Error message */
    errorMessage: string;
    /** Stack trace */
    stackTrace?: string;
    /** Context where error occurred */
    context?: string;
    /** Strategy ID (if applicable) */
    strategyId?: string;
    /** Bot ID (if applicable) */
    botId?: string;
}

/**
 * Union type for all audit entry types
 */
export type AuditEntry =
    | StrategyTriggerEntry
    | BotStartedEntry
    | BotStoppedEntry
    | BotSwitchedEntry
    | RiskInterventionEntry
    | ErrorEntry;

/**
 * Search criteria for filtering audit log entries
 */
export interface AuditSearchCriteria {
    /** Text search (searches in message, strategyName, botName, etc.) */
    text?: string;
    /** Filter by event type */
    eventType?: AuditEventType;
    /** Filter by strategy ID */
    strategyId?: string;
    /** Filter by bot ID */
    botId?: string;
    /** Start date (timestamp in milliseconds) */
    startDate?: number;
    /** End date (timestamp in milliseconds) */
    endDate?: number;
    /** Maximum number of results */
    limit?: number;
}

/**
 * Audit log statistics
 */
export interface AuditLogStats {
    /** Total number of entries */
    totalEntries: number;
    /** Entries by type */
    entriesByType: Record<AuditEventType, number>;
    /** Oldest entry timestamp */
    oldestEntry?: number;
    /** Newest entry timestamp */
    newestEntry?: number;
    /** Total storage size in bytes */
    storageSize: number;
}

// ============================================================================
// Audit Log Interface
// ============================================================================

/**
 * Interface for Audit Log service
 */
export interface IAuditLog {
    // Event logging
    logStrategyTrigger(entry: Omit<StrategyTriggerEntry, 'id' | 'timestamp' | 'type' | 'message'>): void;
    logBotStarted(entry: Omit<BotStartedEntry, 'id' | 'timestamp' | 'type' | 'message'>): void;
    logBotStopped(entry: Omit<BotStoppedEntry, 'id' | 'timestamp' | 'type' | 'message'>): void;
    logBotSwitched(entry: Omit<BotSwitchedEntry, 'id' | 'timestamp' | 'type' | 'message'>): void;
    logRiskIntervention(entry: Omit<RiskInterventionEntry, 'id' | 'timestamp' | 'type' | 'message'>): void;
    logError(entry: Omit<ErrorEntry, 'id' | 'timestamp' | 'type' | 'message'>): void;

    // Retrieval
    getAllEntries(): AuditEntry[];
    getEntriesByType(type: AuditEventType): AuditEntry[];
    getEntriesByStrategy(strategyId: string): AuditEntry[];
    getEntriesByBot(botId: string): AuditEntry[];
    getEntriesByDateRange(startDate: number, endDate: number): AuditEntry[];

    // Search and filter
    search(criteria: AuditSearchCriteria): AuditEntry[];

    // Maintenance
    cleanup(): number;
    clear(): void;
    getStats(): AuditLogStats;
}

// ============================================================================
// Audit Log Implementation
// ============================================================================

/**
 * Audit Log Service
 * 
 * Provides comprehensive event logging with persistence and search capabilities.
 */
export class AuditLog implements IAuditLog {
    private static readonly STORAGE_KEY = 'auto_strategy_audit_log';
    private static readonly RETENTION_DAYS = 90;
    private static readonly MAX_ENTRIES = 10000; // Prevent unbounded growth

    private entries: AuditEntry[] = [];

    constructor() {
        this.loadFromStorage();
        this.cleanup();
    }

    // ========================================================================
    // Event Logging Methods
    // ========================================================================

    /**
     * Log a strategy trigger event
     */
    logStrategyTrigger(entry: Omit<StrategyTriggerEntry, 'id' | 'timestamp' | 'type' | 'message'>): void {
        const message = `Strategy "${entry.strategyName}" triggered: ${entry.action}${entry.botId ? ` (Bot: ${entry.botId})` : ''}`;
        
        const fullEntry: StrategyTriggerEntry = {
            ...entry,
            id: this.generateId(),
            type: AuditEventType.StrategyTrigger,
            timestamp: Date.now(),
            message,
        };

        this.addEntry(fullEntry);
    }

    /**
     * Log a bot started event
     */
    logBotStarted(entry: Omit<BotStartedEntry, 'id' | 'timestamp' | 'type' | 'message'>): void {
        const message = `Bot "${entry.botName}" started by strategy "${entry.strategyName}" with stake ${entry.stake}`;
        
        const fullEntry: BotStartedEntry = {
            ...entry,
            id: this.generateId(),
            type: AuditEventType.BotStarted,
            timestamp: Date.now(),
            message,
        };

        this.addEntry(fullEntry);
    }

    /**
     * Log a bot stopped event
     */
    logBotStopped(entry: Omit<BotStoppedEntry, 'id' | 'timestamp' | 'type' | 'message'>): void {
        const durationText = entry.duration ? ` after ${this.formatDuration(entry.duration)}` : '';
        const message = `Bot "${entry.botName}" stopped: ${entry.reason}${durationText}`;
        
        const fullEntry: BotStoppedEntry = {
            ...entry,
            id: this.generateId(),
            type: AuditEventType.BotStopped,
            timestamp: Date.now(),
            message,
        };

        this.addEntry(fullEntry);
    }

    /**
     * Log a bot switched event
     */
    logBotSwitched(entry: Omit<BotSwitchedEntry, 'id' | 'timestamp' | 'type' | 'message'>): void {
        const message = `Strategy "${entry.strategyName}" switched from bot ${entry.fromBotId} to ${entry.toBotId}`;
        
        const fullEntry: BotSwitchedEntry = {
            ...entry,
            id: this.generateId(),
            type: AuditEventType.BotSwitched,
            timestamp: Date.now(),
            message,
        };

        this.addEntry(fullEntry);
    }

    /**
     * Log a risk intervention event
     */
    logRiskIntervention(entry: Omit<RiskInterventionEntry, 'id' | 'timestamp' | 'type' | 'message'>): void {
        const interventionName = entry.interventionType.replace(/_/g, ' ');
        const message = `Risk intervention: ${interventionName} - Current: ${entry.currentValue.toFixed(2)}, Limit: ${entry.limit.toFixed(2)}`;
        
        const fullEntry: RiskInterventionEntry = {
            ...entry,
            id: this.generateId(),
            type: AuditEventType.RiskIntervention,
            timestamp: Date.now(),
            message,
        };

        this.addEntry(fullEntry);
    }

    /**
     * Log an error event
     */
    logError(entry: Omit<ErrorEntry, 'id' | 'timestamp' | 'type' | 'message'>): void {
        const contextText = entry.context ? ` [${entry.context}]` : '';
        const message = `Error${contextText}: ${entry.errorMessage}`;
        
        const fullEntry: ErrorEntry = {
            ...entry,
            id: this.generateId(),
            type: AuditEventType.Error,
            timestamp: Date.now(),
            message,
        };

        this.addEntry(fullEntry);
    }

    // ========================================================================
    // Retrieval Methods
    // ========================================================================

    /**
     * Get all audit log entries
     */
    getAllEntries(): AuditEntry[] {
        return [...this.entries].sort((a, b) => b.timestamp - a.timestamp);
    }

    /**
     * Get entries by event type
     */
    getEntriesByType(type: AuditEventType): AuditEntry[] {
        return this.entries
            .filter(entry => entry.type === type)
            .sort((a, b) => b.timestamp - a.timestamp);
    }

    /**
     * Get entries by strategy ID
     */
    getEntriesByStrategy(strategyId: string): AuditEntry[] {
        return this.entries
            .filter(entry => {
                if ('strategyId' in entry) {
                    return entry.strategyId === strategyId;
                }
                return false;
            })
            .sort((a, b) => b.timestamp - a.timestamp);
    }

    /**
     * Get entries by bot ID
     */
    getEntriesByBot(botId: string): AuditEntry[] {
        return this.entries
            .filter(entry => {
                if ('botId' in entry) {
                    return entry.botId === botId;
                }
                if (entry.type === AuditEventType.BotSwitched) {
                    return entry.fromBotId === botId || entry.toBotId === botId;
                }
                return false;
            })
            .sort((a, b) => b.timestamp - a.timestamp);
    }

    /**
     * Get entries within a date range
     */
    getEntriesByDateRange(startDate: number, endDate: number): AuditEntry[] {
        return this.entries
            .filter(entry => entry.timestamp >= startDate && entry.timestamp <= endDate)
            .sort((a, b) => b.timestamp - a.timestamp);
    }

    // ========================================================================
    // Search and Filter
    // ========================================================================

    /**
     * Search audit log with multiple criteria
     */
    search(criteria: AuditSearchCriteria): AuditEntry[] {
        let results = [...this.entries];

        // Filter by event type
        if (criteria.eventType) {
            results = results.filter(entry => entry.type === criteria.eventType);
        }

        // Filter by strategy ID
        if (criteria.strategyId) {
            results = results.filter(entry => {
                if ('strategyId' in entry) {
                    return entry.strategyId === criteria.strategyId;
                }
                return false;
            });
        }

        // Filter by bot ID
        if (criteria.botId) {
            results = results.filter(entry => {
                if ('botId' in entry) {
                    return entry.botId === criteria.botId;
                }
                if (entry.type === AuditEventType.BotSwitched) {
                    return entry.fromBotId === criteria.botId || entry.toBotId === criteria.botId;
                }
                return false;
            });
        }

        // Filter by date range
        if (criteria.startDate) {
            results = results.filter(entry => entry.timestamp >= criteria.startDate!);
        }
        if (criteria.endDate) {
            results = results.filter(entry => entry.timestamp <= criteria.endDate!);
        }

        // Text search
        if (criteria.text) {
            const searchText = criteria.text.toLowerCase();
            results = results.filter(entry => {
                // Search in message
                if (entry.message.toLowerCase().includes(searchText)) {
                    return true;
                }

                // Search in strategy name
                if ('strategyName' in entry && entry.strategyName.toLowerCase().includes(searchText)) {
                    return true;
                }

                // Search in bot name
                if ('botName' in entry && entry.botName.toLowerCase().includes(searchText)) {
                    return true;
                }

                // Search in error message
                if (entry.type === AuditEventType.Error && entry.errorMessage.toLowerCase().includes(searchText)) {
                    return true;
                }

                return false;
            });
        }

        // Sort by timestamp (newest first)
        results.sort((a, b) => b.timestamp - a.timestamp);

        // Apply limit
        if (criteria.limit && criteria.limit > 0) {
            results = results.slice(0, criteria.limit);
        }

        return results;
    }

    // ========================================================================
    // Maintenance Methods
    // ========================================================================

    /**
     * Clean up entries older than 90 days
     * Returns the number of entries removed
     */
    cleanup(): number {
        const retentionMs = AuditLog.RETENTION_DAYS * 24 * 60 * 60 * 1000;
        const cutoffTime = Date.now() - retentionMs;

        const initialCount = this.entries.length;
        this.entries = this.entries.filter(entry => entry.timestamp >= cutoffTime);
        const removedCount = initialCount - this.entries.length;

        // Also enforce max entries limit
        if (this.entries.length > AuditLog.MAX_ENTRIES) {
            // Keep the most recent entries
            this.entries.sort((a, b) => b.timestamp - a.timestamp);
            const excessCount = this.entries.length - AuditLog.MAX_ENTRIES;
            this.entries = this.entries.slice(0, AuditLog.MAX_ENTRIES);
            
            if (removedCount > 0 || excessCount > 0) {
                this.saveToStorage();
            }
            
            return removedCount + excessCount;
        }

        if (removedCount > 0) {
            this.saveToStorage();
        }

        return removedCount;
    }

    /**
     * Clear all audit log entries
     */
    clear(): void {
        this.entries = [];
        this.saveToStorage();
    }

    /**
     * Get audit log statistics
     */
    getStats(): AuditLogStats {
        const entriesByType: Record<AuditEventType, number> = {
            [AuditEventType.StrategyTrigger]: 0,
            [AuditEventType.BotStarted]: 0,
            [AuditEventType.BotStopped]: 0,
            [AuditEventType.BotSwitched]: 0,
            [AuditEventType.RiskIntervention]: 0,
            [AuditEventType.Error]: 0,
        };

        let oldestEntry: number | undefined;
        let newestEntry: number | undefined;

        for (const entry of this.entries) {
            entriesByType[entry.type]++;

            if (!oldestEntry || entry.timestamp < oldestEntry) {
                oldestEntry = entry.timestamp;
            }
            if (!newestEntry || entry.timestamp > newestEntry) {
                newestEntry = entry.timestamp;
            }
        }

        // Estimate storage size
        const storageSize = this.estimateStorageSize();

        return {
            totalEntries: this.entries.length,
            entriesByType,
            oldestEntry,
            newestEntry,
            storageSize,
        };
    }

    // ========================================================================
    // Private Methods
    // ========================================================================

    /**
     * Add entry to log and persist
     */
    private addEntry(entry: AuditEntry): void {
        this.entries.push(entry);
        this.saveToStorage();
    }

    /**
     * Generate unique ID for entry
     */
    private generateId(): string {
        return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
    }

    /**
     * Format duration in human-readable format
     */
    private formatDuration(ms: number): string {
        const seconds = Math.floor(ms / 1000);
        const minutes = Math.floor(seconds / 60);
        const hours = Math.floor(minutes / 60);

        if (hours > 0) {
            return `${hours}h ${minutes % 60}m`;
        } else if (minutes > 0) {
            return `${minutes}m ${seconds % 60}s`;
        } else {
            return `${seconds}s`;
        }
    }

    /**
     * Estimate storage size in bytes
     */
    private estimateStorageSize(): number {
        try {
            const json = JSON.stringify(this.entries);
            return new Blob([json]).size;
        } catch {
            return 0;
        }
    }

    /**
     * Load entries from localStorage
     */
    private loadFromStorage(): void {
        try {
            const stored = localStorage.getItem(AuditLog.STORAGE_KEY);
            if (stored) {
                const parsed = JSON.parse(stored);
                if (Array.isArray(parsed)) {
                    this.entries = parsed;
                }
            }
        } catch (error) {
            console.error('Failed to load audit log from storage:', error);
            this.entries = [];
        }
    }

    /**
     * Save entries to localStorage
     */
    private saveToStorage(): void {
        try {
            localStorage.setItem(AuditLog.STORAGE_KEY, JSON.stringify(this.entries));
        } catch (error) {
            console.error('Failed to save audit log to storage:', error);
            
            // If storage is full, try to cleanup and save again
            if (error instanceof Error && error.name === 'QuotaExceededError') {
                const removed = this.cleanup();
                if (removed > 0) {
                    try {
                        localStorage.setItem(AuditLog.STORAGE_KEY, JSON.stringify(this.entries));
                    } catch {
                        console.error('Failed to save audit log even after cleanup');
                    }
                }
            }
        }
    }
}

// ============================================================================
// Singleton Instance
// ============================================================================

let auditLogInstance: AuditLog | null = null;

/**
 * Get singleton instance of AuditLog
 */
export function getAuditLog(): AuditLog {
    if (!auditLogInstance) {
        auditLogInstance = new AuditLog();
    }
    return auditLogInstance;
}

/**
 * Reset singleton instance (for testing)
 */
export function resetAuditLog(): void {
    auditLogInstance = null;
}
