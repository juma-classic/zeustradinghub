import React from 'react';
import RunningBotCard from './RunningBotCard';
import type { RunningBotInfo } from '../../hooks/useAutoStrategyController';
import './RunningBotsList.scss';

interface RunningBotsListProps {
    bots: RunningBotInfo[];
    onStopBot: (botId: string) => void;
    className?: string;
}

/**
 * RunningBotsList Component
 * 
 * Displays a list of currently running bots with their details.
 * Shows which strategy started each bot, current P&L, and provides
 * manual stop controls.
 * 
 * Requirements: 20.1, 20.2, 20.3, 20.4, 20.5, 26.4
 * 
 * @param bots - Array of running bot information
 * @param onStopBot - Callback when user manually stops a bot
 * @param className - Optional additional CSS class
 */
const RunningBotsList: React.FC<RunningBotsListProps> = ({
    bots,
    onStopBot,
    className = '',
}) => {
    if (bots.length === 0) {
        return (
            <div className={`running-bots-list running-bots-list--empty ${className}`}>
                <div className="empty-state">
                    <span className="empty-state__icon">🔌</span>
                    <p className="empty-state__text">No bots running</p>
                    <p className="empty-state__subtext">
                        Bots will appear here when strategies trigger
                    </p>
                </div>
            </div>
        );
    }

    return (
        <div className={`running-bots-list ${className}`}>
            <div className="running-bots-list__grid">
                {bots.map((bot) => (
                    <RunningBotCard
                        key={bot.botId}
                        bot={bot}
                        onStop={() => onStopBot(bot.botId)}
                    />
                ))}
            </div>
        </div>
    );
};

export default RunningBotsList;
