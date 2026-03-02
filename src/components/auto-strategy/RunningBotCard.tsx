import React, { useState, useEffect } from 'react';
import type { RunningBotInfo } from '../../hooks/useAutoStrategyController';
import './RunningBotCard.scss';

interface RunningBotCardProps {
    bot: RunningBotInfo;
    onStop: () => void;
    className?: string;
}

/**
 * RunningBotCard Component
 * 
 * Displays detailed information about a single running bot including:
 * - Bot name and ID
 * - Strategy that started the bot
 * - Start time and duration
 * - Current profit/loss
 * - Auto-started indicator
 * - Manual stop button
 * 
 * Requirements: 20.1, 20.2, 20.3, 20.4, 20.5, 26.4
 * 
 * @param bot - Running bot information
 * @param onStop - Callback when user clicks stop button
 * @param className - Optional additional CSS class
 */
const RunningBotCard: React.FC<RunningBotCardProps> = ({
    bot,
    onStop,
    className = '',
}) => {
    const [duration, setDuration] = useState<string>('');
    const [showStopConfirm, setShowStopConfirm] = useState(false);

    // Calculate running duration
    useEffect(() => {
        const updateDuration = () => {
            const now = Date.now();
            const elapsed = now - bot.startedAt;
            
            const hours = Math.floor(elapsed / (1000 * 60 * 60));
            const minutes = Math.floor((elapsed % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((elapsed % (1000 * 60)) / 1000);
            
            if (hours > 0) {
                setDuration(`${hours}h ${minutes}m ${seconds}s`);
            } else if (minutes > 0) {
                setDuration(`${minutes}m ${seconds}s`);
            } else {
                setDuration(`${seconds}s`);
            }
        };

        updateDuration();
        const interval = setInterval(updateDuration, 1000);

        return () => clearInterval(interval);
    }, [bot.startedAt]);

    // Calculate net P&L
    const netProfitLoss = bot.currentProfit - bot.currentLoss;
    const isProfit = netProfitLoss > 0;
    const isLoss = netProfitLoss < 0;

    // Format P&L display
    const formatProfitLoss = (value: number): string => {
        const sign = value > 0 ? '+' : '';
        return `${sign}${value.toFixed(2)}`;
    };

    // Format timestamp
    const formatStartTime = (timestamp: number): string => {
        const date = new Date(timestamp);
        return date.toLocaleTimeString('en-US', {
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
        });
    };

    const handleStopClick = () => {
        setShowStopConfirm(true);
    };

    const handleConfirmStop = () => {
        onStop();
        setShowStopConfirm(false);
    };

    const handleCancelStop = () => {
        setShowStopConfirm(false);
    };

    return (
        <div className={`running-bot-card ${className}`}>
            {/* Auto-started indicator badge */}
            <div className="running-bot-card__badge">
                <span className="running-bot-card__badge-icon">⚡</span>
                <span className="running-bot-card__badge-text">Auto-Started</span>
            </div>

            {/* Bot header with name and status */}
            <div className="running-bot-card__header">
                <div className="running-bot-card__title">
                    <span className="running-bot-card__icon">🤖</span>
                    <div className="running-bot-card__title-text">
                        <h3 className="running-bot-card__name">{bot.botName}</h3>
                        <span className="running-bot-card__id">ID: {bot.botId}</span>
                    </div>
                </div>
                <div className="running-bot-card__status">
                    <div className="running-bot-card__status-indicator">
                        <div className="running-bot-card__status-pulse"></div>
                    </div>
                    <span className="running-bot-card__status-text">Running</span>
                </div>
            </div>

            {/* Strategy information */}
            <div className="running-bot-card__section">
                <div className="running-bot-card__label">
                    <span className="running-bot-card__label-icon">📊</span>
                    <span className="running-bot-card__label-text">Started By Strategy</span>
                </div>
                <div className="running-bot-card__value running-bot-card__value--strategy">
                    {bot.strategyName}
                </div>
            </div>

            {/* Time information */}
            <div className="running-bot-card__section running-bot-card__section--time">
                <div className="running-bot-card__time-item">
                    <div className="running-bot-card__label">
                        <span className="running-bot-card__label-icon">🕐</span>
                        <span className="running-bot-card__label-text">Started At</span>
                    </div>
                    <div className="running-bot-card__value">
                        {formatStartTime(bot.startedAt)}
                    </div>
                </div>
                <div className="running-bot-card__time-item">
                    <div className="running-bot-card__label">
                        <span className="running-bot-card__label-icon">⏱️</span>
                        <span className="running-bot-card__label-text">Duration</span>
                    </div>
                    <div className="running-bot-card__value running-bot-card__value--duration">
                        {duration}
                    </div>
                </div>
            </div>

            {/* Profit/Loss display */}
            <div className="running-bot-card__section running-bot-card__section--pnl">
                <div className="running-bot-card__pnl-grid">
                    <div className="running-bot-card__pnl-item">
                        <div className="running-bot-card__label">
                            <span className="running-bot-card__label-icon">💰</span>
                            <span className="running-bot-card__label-text">Profit</span>
                        </div>
                        <div className="running-bot-card__value running-bot-card__value--profit">
                            +{bot.currentProfit.toFixed(2)}
                        </div>
                    </div>
                    <div className="running-bot-card__pnl-item">
                        <div className="running-bot-card__label">
                            <span className="running-bot-card__label-icon">📉</span>
                            <span className="running-bot-card__label-text">Loss</span>
                        </div>
                        <div className="running-bot-card__value running-bot-card__value--loss">
                            -{bot.currentLoss.toFixed(2)}
                        </div>
                    </div>
                </div>
                <div className="running-bot-card__net-pnl">
                    <div className="running-bot-card__label running-bot-card__label--net">
                        <span className="running-bot-card__label-icon">📊</span>
                        <span className="running-bot-card__label-text">Net P&L</span>
                    </div>
                    <div
                        className={`running-bot-card__value running-bot-card__value--net ${
                            isProfit
                                ? 'running-bot-card__value--net-profit'
                                : isLoss
                                ? 'running-bot-card__value--net-loss'
                                : 'running-bot-card__value--net-neutral'
                        }`}
                    >
                        {formatProfitLoss(netProfitLoss)}
                    </div>
                </div>
            </div>

            {/* Manual stop button */}
            <div className="running-bot-card__actions">
                <button
                    className="running-bot-card__stop-button"
                    onClick={handleStopClick}
                    title="Manually stop this bot"
                >
                    <span className="running-bot-card__stop-icon">⏹️</span>
                    <span className="running-bot-card__stop-text">Stop Bot</span>
                </button>
            </div>

            {/* Stop confirmation dialog */}
            {showStopConfirm && (
                <div className="running-bot-card__confirm-overlay" onClick={handleCancelStop}>
                    <div
                        className="running-bot-card__confirm-dialog"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="running-bot-card__confirm-icon">⚠️</div>
                        <h4 className="running-bot-card__confirm-title">Stop Bot?</h4>
                        <p className="running-bot-card__confirm-message">
                            Are you sure you want to manually stop <strong>{bot.botName}</strong>?
                            The current trade will complete before stopping.
                        </p>
                        <div className="running-bot-card__confirm-actions">
                            <button
                                className="running-bot-card__confirm-button running-bot-card__confirm-button--cancel"
                                onClick={handleCancelStop}
                            >
                                Cancel
                            </button>
                            <button
                                className="running-bot-card__confirm-button running-bot-card__confirm-button--confirm"
                                onClick={handleConfirmStop}
                            >
                                Stop Bot
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default RunningBotCard;
