/**
 * Auto-Started Badge Component
 * 
 * Displays a badge indicating that a bot was automatically started by the Auto Strategy Controller.
 * Provides visual feedback to users about which bots are under automated control.
 * 
 * Requirements: 26.4
 */

import React from 'react';
import { observer } from 'mobx-react-lite';
import { useIsAutoStarted } from '../../hooks/useBotController';
import './AutoStartedBadge.scss';

interface AutoStartedBadgeProps {
    botId: string;
    className?: string;
}

/**
 * Badge component that shows when a bot is auto-started
 */
export const AutoStartedBadge: React.FC<AutoStartedBadgeProps> = observer(({ botId, className }) => {
    const isAutoStarted = useIsAutoStarted(botId);

    if (!isAutoStarted) {
        return null;
    }

    return (
        <div className={`auto-started-badge ${className || ''}`}>
            <span className="auto-started-badge__icon">🤖</span>
            <span className="auto-started-badge__text">Auto</span>
        </div>
    );
});

export default AutoStartedBadge;
