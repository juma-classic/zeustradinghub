/**
 * Action Builder Component
 * 
 * Configures the bot action (start/stop/switch) for a strategy.
 * 
 * Requirements: 2.1, 9.1, 10.1, 11.1
 */

import React, { useState, useEffect } from 'react';
import { StrategyAction, ActionType } from '../../types/auto-strategy.types';
import Input from '../shared_ui/input/input';
import './ActionBuilder.scss';

interface ActionBuilderProps {
    action: StrategyAction;
    onChange: (action: StrategyAction) => void;
}

interface BotInfo {
    title: string;
    filePath: string;
}

const ActionBuilder: React.FC<ActionBuilderProps> = ({ action, onChange }) => {
    const [availableBots, setAvailableBots] = useState<BotInfo[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    // Load available bots from the free bots section
    useEffect(() => {
        const loadBots = async () => {
            const botFiles = [
                '_Over 1 under 8 Recovery Even & Odd 2026 💵💯 (5).xml',
                '$Dollar printer .xml',
                'AUTO C4 VOLT 🇬🇧 2 🇬🇧 AI PREMIUM ROBOT  (2) (1).xml',
                'Auto Zeus Bot.xml',
                'Flipping-Tool-2026 - Elvis Trades (1).xml',
                'ZEUS AI PRO v1.xml',
                'Zeus Digit Switcher.xml',
                'Zeus Over.xml',
                'Over 3 Delirium by Elvis Trades.xml',
                'Over-Killer by Zeus.xml',
                'Over-Pro by Zeus.xml',
                'PATEL (with Entry).xml',
                'Random LDP Differ - Elvis Trades.xml',
                'Raziel Over Under.xml',
                'Speed Auto Bot🦷.xml',
                'States Digit Switcher.xml',
                'Under 8 promax by Zeus.xml',
                'Under Killer 2026.xml',
            ];

            const bots: BotInfo[] = botFiles.map(file => ({
                title: file.replace('.xml', ''),
                filePath: file,
            }));

            setAvailableBots(bots);
            setIsLoading(false);
        };

        loadBots();
    }, []);

    const handleTypeChange = (type: ActionType) => {
        onChange({
            ...action,
            type,
            targetBotId: type === ActionType.SwitchBot ? action.targetBotId || '' : undefined,
        });
    };

    const handleBotChange = (filePath: string) => {
        onChange({ ...action, botId: filePath });
    };

    const handleTargetBotChange = (filePath: string) => {
        onChange({ ...action, targetBotId: filePath });
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
                <label className="action-builder__label">
                    {action.type === ActionType.SwitchBot ? 'Bot to Switch From' : 'Select Bot'}
                </label>
                <select
                    className="action-builder__select"
                    value={action.botId}
                    onChange={(e) => handleBotChange(e.target.value)}
                    disabled={isLoading}
                >
                    <option value="">
                        {isLoading ? 'Loading bots...' : '-- Select a bot --'}
                    </option>
                    {availableBots.map((bot) => (
                        <option key={bot.filePath} value={bot.filePath}>
                            {bot.title}
                        </option>
                    ))}
                </select>
                <p className="action-builder__hint">
                    {action.type === ActionType.SwitchBot 
                        ? 'Select the bot to switch from' 
                        : 'Choose a bot from the free bots library'}
                </p>
            </div>

            {action.type === ActionType.SwitchBot && (
                <div className="action-builder__field">
                    <label className="action-builder__label">Target Bot (Switch To)</label>
                    <select
                        className="action-builder__select"
                        value={action.targetBotId || ''}
                        onChange={(e) => handleTargetBotChange(e.target.value)}
                        disabled={isLoading}
                    >
                        <option value="">
                            {isLoading ? 'Loading bots...' : '-- Select target bot --'}
                        </option>
                        {availableBots.map((bot) => (
                            <option key={bot.filePath} value={bot.filePath}>
                                {bot.title}
                            </option>
                        ))}
                    </select>
                    <p className="action-builder__hint">
                        Select the bot to switch to when conditions are met
                    </p>
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
