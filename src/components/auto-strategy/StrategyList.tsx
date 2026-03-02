import React from 'react';
import StrategyCard from './StrategyCard';
import type { Strategy } from '../../types/auto-strategy.types';
import type { ConditionState } from '../../hooks/useAutoStrategyController';
import './StrategyList.scss';

interface StrategyListProps {
    strategies: Strategy[];
    conditionStates: Map<string, ConditionState>;
    onPause: (strategyId: string) => void;
    onResume: (strategyId: string) => void;
    className?: string;
}

/**
 * StrategyList Component
 * 
 * Displays a list of active strategies with real-time condition monitoring.
 * Each strategy is rendered as a StrategyCard with pause/resume controls.
 * 
 * Requirements: 19.1, 19.2, 19.3, 25.1, 25.2, 25.3
 * 
 * @param strategies - Array of active strategies to display
 * @param conditionStates - Map of condition states for real-time monitoring
 * @param onPause - Callback when a strategy is paused
 * @param onResume - Callback when a strategy is resumed
 */
const StrategyList: React.FC<StrategyListProps> = ({
    strategies,
    conditionStates,
    onPause,
    onResume,
    className = '',
}) => {
    if (strategies.length === 0) {
        return (
            <div className="strategy-list-empty">
                <span className="strategy-list-empty__icon">💤</span>
                <p className="strategy-list-empty__text">No active strategies</p>
                <p className="strategy-list-empty__subtext">Create a strategy to get started</p>
            </div>
        );
    }

    return (
        <div className={`strategy-list ${className}`}>
            {strategies.map(strategy => (
                <StrategyCard
                    key={strategy.id}
                    strategy={strategy}
                    conditionStates={conditionStates}
                    onPause={onPause}
                    onResume={onResume}
                />
            ))}
        </div>
    );
};

export default StrategyList;
