import React, { useState, useEffect } from 'react';
import type { Strategy, ConditionType } from '../../types/auto-strategy.types';
import type { ConditionState } from '../../hooks/useAutoStrategyController';
import './StrategyList.scss';

interface StrategyCardProps {
    strategy: Strategy;
    conditionStates: Map<string, ConditionState>;
    onPause: (strategyId: string) => void;
    onResume: (strategyId: string) => void;
}

/**
 * StrategyCard Component
 * 
 * Displays a single strategy with:
 * - Strategy name and description
 * - Real-time condition status indicators
 * - Condition values and evaluation timestamps
 * - Cooldown timer when in cooldown
 * - Pause/Resume controls
 * 
 * Requirements: 19.1, 19.2, 19.3, 19.4, 19.5, 25.1, 25.2, 25.3, 25.4, 25.5, 40.3, 40.4
 */
const StrategyCard: React.FC<StrategyCardProps> = ({
    strategy,
    conditionStates,
    onPause,
    onResume,
}) => {
    const [cooldownRemaining, setCooldownRemaining] = useState<number>(0);
    const [isInCooldown, setIsInCooldown] = useState<boolean>(false);

    // Calculate cooldown remaining time
    useEffect(() => {
        const updateCooldown = () => {
            if (!strategy.lastTriggeredAt || !strategy.cooldownPeriod) {
                setIsInCooldown(false);
                setCooldownRemaining(0);
                return;
            }

            const now = Date.now();
            const cooldownEnd = strategy.lastTriggeredAt + (strategy.cooldownPeriod * 1000);
            const remaining = Math.max(0, cooldownEnd - now);

            setIsInCooldown(remaining > 0);
            setCooldownRemaining(Math.ceil(remaining / 1000));
        };

        updateCooldown();
        const interval = setInterval(updateCooldown, 1000);

        return () => clearInterval(interval);
    }, [strategy.lastTriggeredAt, strategy.cooldownPeriod]);

    // Get condition states for this strategy
    const getConditionStatesForStrategy = (): ConditionState[] => {
        const states: ConditionState[] = [];
        
        strategy.conditions.forEach((condition, index) => {
            const conditionId = `${strategy.id}-condition-${index}`;
            const state = conditionStates.get(conditionId);
            
            if (state) {
                states.push(state);
            } else {
                // Create placeholder state if not available
                states.push({
                    conditionId,
                    strategyId: strategy.id,
                    type: condition.type,
                    status: 'not_evaluable',
                    currentValue: null,
                    lastEvaluatedAt: 0,
                    description: getConditionDescription(condition.type),
                });
            }
        });

        return states;
    };

    // Get human-readable condition description
    const getConditionDescription = (type: ConditionType): string => {
        switch (type) {
            case 'digit_frequency':
                return 'Digit Frequency';
            case 'volatility':
                return 'Volatility';
            case 'time_range':
                return 'Time Range';
            case 'performance':
                return 'Performance';
            case 'signal':
                return 'Signal';
            default:
                return 'Unknown';
        }
    };

    // Get status indicator class
    const getStatusClass = (status: 'true' | 'false' | 'not_evaluable'): string => {
        switch (status) {
            case 'true':
                return 'condition-indicator--true';
            case 'false':
                return 'condition-indicator--false';
            case 'not_evaluable':
                return 'condition-indicator--not-evaluable';
            default:
                return '';
        }
    };

    // Get status icon
    const getStatusIcon = (status: 'true' | 'false' | 'not_evaluable'): string => {
        switch (status) {
            case 'true':
                return '✓';
            case 'false':
                return '✗';
            case 'not_evaluable':
                return '?';
            default:
                return '?';
        }
    };

    // Format timestamp
    const formatTimestamp = (timestamp: number): string => {
        if (!timestamp) return 'Never';
        
        const now = Date.now();
        const diff = now - timestamp;
        
        if (diff < 1000) return 'Just now';
        if (diff < 60000) return `${Math.floor(diff / 1000)}s ago`;
        if (diff < 3600000) return `${Math.floor(diff / 60000)}m ago`;
        
        return new Date(timestamp).toLocaleTimeString();
    };

    // Format cooldown timer
    const formatCooldown = (seconds: number): string => {
        if (seconds < 60) return `${seconds}s`;
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${minutes}m ${remainingSeconds}s`;
    };

    const conditionStatesList = getConditionStatesForStrategy();
    const isPaused = strategy.isPaused;

    return (
        <div className={`strategy-card ${isPaused ? 'strategy-card--paused' : ''} ${isInCooldown ? 'strategy-card--cooldown' : ''}`}>
            {/* Strategy Header */}
            <div className="strategy-card__header">
                <div className="strategy-card__title-section">
                    <h3 className="strategy-card__name">{strategy.name}</h3>
                    {strategy.description && (
                        <p className="strategy-card__description">{strategy.description}</p>
                    )}
                </div>
                
                <div className="strategy-card__controls">
                    {isPaused ? (
                        <button
                            className="strategy-card__control-btn strategy-card__control-btn--resume"
                            onClick={() => onResume(strategy.id)}
                            title="Resume strategy"
                        >
                            <span className="strategy-card__control-icon">▶</span>
                            <span className="strategy-card__control-text">Resume</span>
                        </button>
                    ) : (
                        <button
                            className="strategy-card__control-btn strategy-card__control-btn--pause"
                            onClick={() => onPause(strategy.id)}
                            title="Pause strategy"
                        >
                            <span className="strategy-card__control-icon">⏸</span>
                            <span className="strategy-card__control-text">Pause</span>
                        </button>
                    )}
                </div>
            </div>

            {/* Strategy Info */}
            <div className="strategy-card__info">
                <div className="strategy-card__info-item">
                    <span className="strategy-card__info-label">Symbol:</span>
                    <span className="strategy-card__info-value">{strategy.symbol}</span>
                </div>
                <div className="strategy-card__info-item">
                    <span className="strategy-card__info-label">Logic:</span>
                    <span className="strategy-card__info-value">{strategy.logicOperator}</span>
                </div>
                <div className="strategy-card__info-item">
                    <span className="strategy-card__info-label">Priority:</span>
                    <span className={`strategy-card__priority strategy-card__priority--${strategy.priority}`}>
                        {strategy.priority.toUpperCase()}
                    </span>
                </div>
            </div>

            {/* Cooldown Timer */}
            {isInCooldown && (
                <div className="strategy-card__cooldown">
                    <span className="strategy-card__cooldown-icon">⏱</span>
                    <span className="strategy-card__cooldown-text">
                        Cooldown: {formatCooldown(cooldownRemaining)}
                    </span>
                </div>
            )}

            {/* Paused Indicator */}
            {isPaused && (
                <div className="strategy-card__paused-indicator">
                    <span className="strategy-card__paused-icon">⏸</span>
                    <span className="strategy-card__paused-text">Strategy Paused</span>
                </div>
            )}

            {/* Conditions List */}
            <div className="strategy-card__conditions">
                <div className="strategy-card__conditions-header">
                    <span className="strategy-card__conditions-title">Conditions</span>
                    <span className="strategy-card__conditions-count">
                        {conditionStatesList.length}
                    </span>
                </div>

                <div className="strategy-card__conditions-list">
                    {conditionStatesList.map((conditionState, index) => (
                        <div key={conditionState.conditionId} className="condition-item">
                            <div className="condition-item__header">
                                <div className="condition-item__title">
                                    <span className={`condition-indicator ${getStatusClass(conditionState.status)}`}>
                                        {getStatusIcon(conditionState.status)}
                                    </span>
                                    <span className="condition-item__name">
                                        {conditionState.description}
                                    </span>
                                </div>
                                <span className="condition-item__status-text">
                                    {conditionState.status === 'true' && 'Met'}
                                    {conditionState.status === 'false' && 'Not Met'}
                                    {conditionState.status === 'not_evaluable' && 'N/A'}
                                </span>
                            </div>

                            {/* Condition Value */}
                            {conditionState.currentValue !== null && conditionState.currentValue !== undefined && (
                                <div className="condition-item__value">
                                    <span className="condition-item__value-label">Current:</span>
                                    <span className="condition-item__value-text">
                                        {typeof conditionState.currentValue === 'object'
                                            ? JSON.stringify(conditionState.currentValue)
                                            : String(conditionState.currentValue)}
                                    </span>
                                </div>
                            )}

                            {/* Last Evaluation Timestamp */}
                            <div className="condition-item__timestamp">
                                <span className="condition-item__timestamp-icon">🕐</span>
                                <span className="condition-item__timestamp-text">
                                    {formatTimestamp(conditionState.lastEvaluatedAt)}
                                </span>
                            </div>

                            {/* Logic Operator (between conditions) */}
                            {index < conditionStatesList.length - 1 && (
                                <div className="condition-item__operator">
                                    {strategy.logicOperator}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            {/* Strategy Action */}
            <div className="strategy-card__action">
                <div className="strategy-card__action-label">Action:</div>
                <div className="strategy-card__action-details">
                    <span className="strategy-card__action-type">
                        {strategy.action.type === 'start_bot' && '▶ Start Bot'}
                        {strategy.action.type === 'stop_bot' && '⏹ Stop Bot'}
                        {strategy.action.type === 'switch_bot' && '🔄 Switch Bot'}
                    </span>
                    <span className="strategy-card__action-bot">
                        {strategy.action.botId}
                    </span>
                    {strategy.action.stake && (
                        <span className="strategy-card__action-stake">
                            Stake: ${strategy.action.stake}
                        </span>
                    )}
                </div>
            </div>
        </div>
    );
};

export default StrategyCard;
