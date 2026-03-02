import React, { useState, useEffect, useMemo } from 'react';
import { getAuditLog } from '../../services/auto-strategy/audit-log.service';
import type {
    AuditEntry,
    AuditEventType,
    AuditSearchCriteria,
    ErrorEntry,
} from '../../services/auto-strategy/audit-log.service';
import './AuditLogViewer.scss';

interface AuditLogViewerProps {
    /** Optional strategy ID to filter by */
    strategyId?: string;
    /** Optional bot ID to filter by */
    botId?: string;
    /** Maximum number of entries to display */
    maxEntries?: number;
    /** Optional CSS class */
    className?: string;
}

/**
 * AuditLogViewer Component
 * 
 * Displays a searchable and filterable audit log of all strategy executions,
 * bot actions, risk interventions, and errors. Provides comprehensive
 * visibility into automated decisions and system events.
 * 
 * Requirements: 23.1, 23.2, 23.3, 23.4, 23.5, 23.6
 * 
 * @param strategyId - Optional strategy ID to filter entries
 * @param botId - Optional bot ID to filter entries
 * @param maxEntries - Maximum number of entries to display (default: 100)
 * @param className - Optional additional CSS class
 */
const AuditLogViewer: React.FC<AuditLogViewerProps> = ({
    strategyId,
    botId,
    maxEntries = 100,
    className = '',
}) => {
    const auditLog = getAuditLog();

    // State
    const [entries, setEntries] = useState<AuditEntry[]>([]);
    const [searchText, setSearchText] = useState('');
    const [eventTypeFilter, setEventTypeFilter] = useState<AuditEventType | ''>('');
    const [dateRangeStart, setDateRangeStart] = useState('');
    const [dateRangeEnd, setDateRangeEnd] = useState('');
    const [expandedEntryId, setExpandedEntryId] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    // Load entries
    useEffect(() => {
        loadEntries();
        setIsLoading(false);

        // Refresh every 5 seconds
        const interval = setInterval(loadEntries, 5000);
        return () => clearInterval(interval);
    }, [strategyId, botId, searchText, eventTypeFilter, dateRangeStart, dateRangeEnd]);

    // Load entries with filters
    const loadEntries = () => {
        const criteria: AuditSearchCriteria = {
            limit: maxEntries,
        };

        if (searchText) {
            criteria.text = searchText;
        }

        if (eventTypeFilter) {
            criteria.eventType = eventTypeFilter as AuditEventType;
        }

        if (strategyId) {
            criteria.strategyId = strategyId;
        }

        if (botId) {
            criteria.botId = botId;
        }

        if (dateRangeStart) {
            criteria.startDate = new Date(dateRangeStart).getTime();
        }

        if (dateRangeEnd) {
            criteria.endDate = new Date(dateRangeEnd).getTime();
        }

        const results = auditLog.search(criteria);
        setEntries(results);
    };

    // Format timestamp
    const formatTimestamp = (timestamp: number): string => {
        const date = new Date(timestamp);
        return date.toLocaleString('en-US', {
            month: 'short',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
        });
    };

    // Get event type badge class
    const getEventTypeBadgeClass = (type: AuditEventType): string => {
        switch (type) {
            case 'strategy_trigger':
                return 'audit-log-viewer__badge--trigger';
            case 'bot_started':
                return 'audit-log-viewer__badge--started';
            case 'bot_stopped':
                return 'audit-log-viewer__badge--stopped';
            case 'bot_switched':
                return 'audit-log-viewer__badge--switched';
            case 'risk_intervention':
                return 'audit-log-viewer__badge--risk';
            case 'error':
                return 'audit-log-viewer__badge--error';
            default:
                return '';
        }
    };

    // Get event type label
    const getEventTypeLabel = (type: AuditEventType): string => {
        switch (type) {
            case 'strategy_trigger':
                return 'Strategy Trigger';
            case 'bot_started':
                return 'Bot Started';
            case 'bot_stopped':
                return 'Bot Stopped';
            case 'bot_switched':
                return 'Bot Switched';
            case 'risk_intervention':
                return 'Risk Intervention';
            case 'error':
                return 'Error';
            default:
                return type;
        }
    };

    // Get event type icon
    const getEventTypeIcon = (type: AuditEventType): string => {
        switch (type) {
            case 'strategy_trigger':
                return '⚡';
            case 'bot_started':
                return '▶️';
            case 'bot_stopped':
                return '⏹️';
            case 'bot_switched':
                return '🔄';
            case 'risk_intervention':
                return '🛡️';
            case 'error':
                return '❌';
            default:
                return '📝';
        }
    };

    // Toggle entry expansion
    const toggleEntryExpansion = (entryId: string) => {
        setExpandedEntryId(expandedEntryId === entryId ? null : entryId);
    };

    // Clear all filters
    const clearFilters = () => {
        setSearchText('');
        setEventTypeFilter('');
        setDateRangeStart('');
        setDateRangeEnd('');
    };

    // Check if any filters are active
    const hasActiveFilters = searchText || eventTypeFilter || dateRangeStart || dateRangeEnd;

    if (isLoading) {
        return (
            <div className={`audit-log-viewer audit-log-viewer--loading ${className}`}>
                <div className="audit-log-viewer__loader">
                    <div className="audit-log-viewer__loader-spinner"></div>
                    <p>Loading audit log...</p>
                </div>
            </div>
        );
    }

    return (
        <div className={`audit-log-viewer ${className}`}>
            {/* Header */}
            <div className="audit-log-viewer__header">
                <h3 className="audit-log-viewer__title">
                    <span className="audit-log-viewer__title-icon">📋</span>
                    Audit Log
                </h3>
                <div className="audit-log-viewer__stats">
                    <span className="audit-log-viewer__stat">
                        {entries.length} {entries.length === 1 ? 'entry' : 'entries'}
                    </span>
                </div>
            </div>

            {/* Filters */}
            <div className="audit-log-viewer__filters">
                {/* Search */}
                <div className="audit-log-viewer__filter-group">
                    <label htmlFor="audit-search" className="audit-log-viewer__filter-label">Search</label>
                    <input
                        id="audit-search"
                        type="text"
                        className="audit-log-viewer__search-input"
                        placeholder="Search messages, strategies, bots..."
                        value={searchText}
                        onChange={(e) => setSearchText(e.target.value)}
                    />
                </div>

                {/* Event Type Filter */}
                <div className="audit-log-viewer__filter-group">
                    <label htmlFor="audit-event-type" className="audit-log-viewer__filter-label">Event Type</label>
                    <select
                        id="audit-event-type"
                        className="audit-log-viewer__select"
                        value={eventTypeFilter}
                        onChange={(e) => setEventTypeFilter(e.target.value as AuditEventType | '')}
                    >
                        <option value="">All Types</option>
                        <option value="strategy_trigger">Strategy Trigger</option>
                        <option value="bot_started">Bot Started</option>
                        <option value="bot_stopped">Bot Stopped</option>
                        <option value="bot_switched">Bot Switched</option>
                        <option value="risk_intervention">Risk Intervention</option>
                        <option value="error">Error</option>
                    </select>
                </div>

                {/* Date Range */}
                <div className="audit-log-viewer__filter-group">
                    <label htmlFor="audit-start-date" className="audit-log-viewer__filter-label">Start Date</label>
                    <input
                        id="audit-start-date"
                        type="datetime-local"
                        className="audit-log-viewer__date-input"
                        value={dateRangeStart}
                        onChange={(e) => setDateRangeStart(e.target.value)}
                    />
                </div>

                <div className="audit-log-viewer__filter-group">
                    <label htmlFor="audit-end-date" className="audit-log-viewer__filter-label">End Date</label>
                    <input
                        id="audit-end-date"
                        type="datetime-local"
                        className="audit-log-viewer__date-input"
                        value={dateRangeEnd}
                        onChange={(e) => setDateRangeEnd(e.target.value)}
                    />
                </div>

                {/* Clear Filters */}
                {hasActiveFilters && (
                    <button
                        className="audit-log-viewer__clear-btn"
                        onClick={clearFilters}
                        title="Clear all filters"
                    >
                        Clear Filters
                    </button>
                )}
            </div>

            {/* Entries Table */}
            {entries.length === 0 ? (
                <div className="audit-log-viewer__empty">
                    <span className="audit-log-viewer__empty-icon">📭</span>
                    <p className="audit-log-viewer__empty-text">
                        {hasActiveFilters ? 'No entries match your filters' : 'No audit log entries yet'}
                    </p>
                    <p className="audit-log-viewer__empty-subtext">
                        {hasActiveFilters
                            ? 'Try adjusting your search criteria'
                            : 'Events will appear here as strategies trigger and bots execute'}
                    </p>
                </div>
            ) : (
                <div className="audit-log-viewer__table-container">
                    <table className="audit-log-viewer__table">
                        <thead>
                            <tr>
                                <th className="audit-log-viewer__th audit-log-viewer__th--timestamp">Time</th>
                                <th className="audit-log-viewer__th audit-log-viewer__th--type">Type</th>
                                <th className="audit-log-viewer__th audit-log-viewer__th--message">Message</th>
                                <th className="audit-log-viewer__th audit-log-viewer__th--actions">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {entries.map((entry) => (
                                <React.Fragment key={entry.id}>
                                    <tr
                                        className={`audit-log-viewer__row ${
                                            entry.type === 'error' ? 'audit-log-viewer__row--error' : ''
                                        } ${
                                            expandedEntryId === entry.id ? 'audit-log-viewer__row--expanded' : ''
                                        }`}
                                    >
                                        <td className="audit-log-viewer__td audit-log-viewer__td--timestamp">
                                            {formatTimestamp(entry.timestamp)}
                                        </td>
                                        <td className="audit-log-viewer__td audit-log-viewer__td--type">
                                            <span
                                                className={`audit-log-viewer__badge ${getEventTypeBadgeClass(
                                                    entry.type
                                                )}`}
                                            >
                                                <span className="audit-log-viewer__badge-icon">
                                                    {getEventTypeIcon(entry.type)}
                                                </span>
                                                <span className="audit-log-viewer__badge-text">
                                                    {getEventTypeLabel(entry.type)}
                                                </span>
                                            </span>
                                        </td>
                                        <td className="audit-log-viewer__td audit-log-viewer__td--message">
                                            {entry.message}
                                        </td>
                                        <td className="audit-log-viewer__td audit-log-viewer__td--actions">
                                            <button
                                                className="audit-log-viewer__expand-btn"
                                                onClick={() => toggleEntryExpansion(entry.id)}
                                                title={expandedEntryId === entry.id ? 'Collapse' : 'Expand details'}
                                            >
                                                {expandedEntryId === entry.id ? '▼' : '▶'}
                                            </button>
                                        </td>
                                    </tr>
                                    {expandedEntryId === entry.id && (
                                        <tr className="audit-log-viewer__details-row">
                                            <td colSpan={4} className="audit-log-viewer__details-cell">
                                                <div className="audit-log-viewer__details">
                                                    <div className="audit-log-viewer__details-grid">
                                                        <div className="audit-log-viewer__detail">
                                                            <span className="audit-log-viewer__detail-label">
                                                                Entry ID:
                                                            </span>
                                                            <span className="audit-log-viewer__detail-value">
                                                                {entry.id}
                                                            </span>
                                                        </div>
                                                        <div className="audit-log-viewer__detail">
                                                            <span className="audit-log-viewer__detail-label">
                                                                Timestamp:
                                                            </span>
                                                            <span className="audit-log-viewer__detail-value">
                                                                {new Date(entry.timestamp).toISOString()}
                                                            </span>
                                                        </div>

                                                        {/* Strategy-specific details */}
                                                        {'strategyId' in entry && entry.strategyId && (
                                                            <>
                                                                <div className="audit-log-viewer__detail">
                                                                    <span className="audit-log-viewer__detail-label">
                                                                        Strategy ID:
                                                                    </span>
                                                                    <span className="audit-log-viewer__detail-value">
                                                                        {entry.strategyId}
                                                                    </span>
                                                                </div>
                                                                {'strategyName' in entry && (
                                                                    <div className="audit-log-viewer__detail">
                                                                        <span className="audit-log-viewer__detail-label">
                                                                            Strategy Name:
                                                                        </span>
                                                                        <span className="audit-log-viewer__detail-value">
                                                                            {entry.strategyName}
                                                                        </span>
                                                                    </div>
                                                                )}
                                                            </>
                                                        )}

                                                        {/* Bot-specific details */}
                                                        {'botId' in entry && entry.botId && (
                                                            <>
                                                                <div className="audit-log-viewer__detail">
                                                                    <span className="audit-log-viewer__detail-label">
                                                                        Bot ID:
                                                                    </span>
                                                                    <span className="audit-log-viewer__detail-value">
                                                                        {entry.botId}
                                                                    </span>
                                                                </div>
                                                                {'botName' in entry && (
                                                                    <div className="audit-log-viewer__detail">
                                                                        <span className="audit-log-viewer__detail-label">
                                                                            Bot Name:
                                                                        </span>
                                                                        <span className="audit-log-viewer__detail-value">
                                                                            {entry.botName}
                                                                        </span>
                                                                    </div>
                                                                )}
                                                            </>
                                                        )}

                                                        {/* Error-specific details */}
                                                        {entry.type === 'error' && (
                                                            <>
                                                                <div className="audit-log-viewer__detail audit-log-viewer__detail--full">
                                                                    <span className="audit-log-viewer__detail-label">
                                                                        Error Message:
                                                                    </span>
                                                                    <span className="audit-log-viewer__detail-value audit-log-viewer__detail-value--error">
                                                                        {(entry as ErrorEntry).errorMessage}
                                                                    </span>
                                                                </div>
                                                                {(entry as ErrorEntry).stackTrace && (
                                                                    <div className="audit-log-viewer__detail audit-log-viewer__detail--full">
                                                                        <span className="audit-log-viewer__detail-label">
                                                                            Stack Trace:
                                                                        </span>
                                                                        <pre className="audit-log-viewer__stack-trace">
                                                                            {(entry as ErrorEntry).stackTrace}
                                                                        </pre>
                                                                    </div>
                                                                )}
                                                                {(entry as ErrorEntry).context && (
                                                                    <div className="audit-log-viewer__detail">
                                                                        <span className="audit-log-viewer__detail-label">
                                                                            Context:
                                                                        </span>
                                                                        <span className="audit-log-viewer__detail-value">
                                                                            {(entry as ErrorEntry).context}
                                                                        </span>
                                                                    </div>
                                                                )}
                                                            </>
                                                        )}

                                                        {/* Additional type-specific details */}
                                                        {entry.type === 'bot_started' && 'stake' in entry && (
                                                            <div className="audit-log-viewer__detail">
                                                                <span className="audit-log-viewer__detail-label">
                                                                    Stake:
                                                                </span>
                                                                <span className="audit-log-viewer__detail-value">
                                                                    {entry.stake}
                                                                </span>
                                                            </div>
                                                        )}

                                                        {entry.type === 'bot_stopped' && 'duration' in entry && entry.duration && (
                                                            <div className="audit-log-viewer__detail">
                                                                <span className="audit-log-viewer__detail-label">
                                                                    Duration:
                                                                </span>
                                                                <span className="audit-log-viewer__detail-value">
                                                                    {Math.floor(entry.duration / 1000)}s
                                                                </span>
                                                            </div>
                                                        )}

                                                        {entry.type === 'risk_intervention' && (
                                                            <>
                                                                <div className="audit-log-viewer__detail">
                                                                    <span className="audit-log-viewer__detail-label">
                                                                        Intervention Type:
                                                                    </span>
                                                                    <span className="audit-log-viewer__detail-value">
                                                                        {entry.interventionType}
                                                                    </span>
                                                                </div>
                                                                <div className="audit-log-viewer__detail">
                                                                    <span className="audit-log-viewer__detail-label">
                                                                        Current Value:
                                                                    </span>
                                                                    <span className="audit-log-viewer__detail-value">
                                                                        {entry.currentValue}
                                                                    </span>
                                                                </div>
                                                                <div className="audit-log-viewer__detail">
                                                                    <span className="audit-log-viewer__detail-label">
                                                                        Limit:
                                                                    </span>
                                                                    <span className="audit-log-viewer__detail-value">
                                                                        {entry.limit}
                                                                    </span>
                                                                </div>
                                                            </>
                                                        )}
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                    )}
                                </React.Fragment>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default AuditLogViewer;
