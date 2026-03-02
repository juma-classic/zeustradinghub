/**
 * Action Builder Component
 * 
 * Configures the bot action (start/stop/switch) for a strategy.
 * 
 * Requirements: 2.1, 9.1, 10.1, 11.1
 */

import React from 'react';
import { StrategyAction, ActionType } from '../../types/auto-strategy.types';
import Input from '../shared_ui/input/input';
import './ActionBuilder.scss';

interface ActionBuilderProps {
    action: StrategyAction;
    onChange: (action: StrategyAction) => void;
}

const ActionBuilder: React.FC<ActionBuilderProps> = ({ action, onChange }) => {
    const handleTypeChange = (type: ActionType) => {
        onChange({
            ...action,
            type,
            targetBotId: type === ActionType.SwitchBot ? action.targetBotId || '' : undefined,
        });
    };

    return (
        <div className="action-builder">
            <div className="action-builder__field">
                <label className="action-builder__label">Action Type</label>
                <select
                    className="action-builder__select"
                    value={action.type}
                    onChange={(e) => handleTypeChange(e.target.value as ActionType)}
                >
                    <option value={ActionType.StartBot}>Start Bot</option>
                    <option value={ActionType.StopBot}>Stop Bot</option>
                    <option value={ActionType.SwitchBot}>Switch Bot</option>
                </select>
            </div>

            <div className="action-builder__field">
                <Input
                    label="Bot ID"
                    value={action.botId}
                    onChange={(e) => onChange({ ...action, botId: e.target.value })}
                    placeholder="Enter bot ID"
                    hint={action.type === ActionType.SwitchBot ? 'Bot to switch from' : 'Bot to control'}
                />
            </div>

            {action.type === ActionType.SwitchBot && (
                <div className="action-builder__field">
                    <Input
                        label="Target Bot ID"
                        value={action.targetBotId || ''}
                        onChange={(e) => onChange({ ...action, targetBotId: e.target.value })}
                        placeholder="Enter target bot ID"
                        hint="Bot to switch to"
                    />
                </div>
            )}

            {action.type === ActionType.StartBot && (
                <div className="action-builder__field">
                    <Input
                        label="Stake Amount"
                        type="number"
                        step="0.01"
                        value={action.stake?.toString() || '1'}
                        onChange={(e) => onChange({ ...action, stake: Number(e.target.value) })}
                        placeholder="1.00"
                        hint="Initial stake amount for the bot"
                    />
                </div>
            )}
        </div>
    );
};

export default ActionBuilder;
