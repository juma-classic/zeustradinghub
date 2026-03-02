/**
 * Strategy Builder Component
 * 
 * Main component for creating and editing auto-trading strategies.
 * Provides a form-based interface for configuring strategy conditions, actions, and limits.
 * 
 * Requirements: 2.1, 2.2, 2.5, 31.1, 31.2, 31.3, 31.4, 31.5, 39.1, 39.2, 39.3, 39.4, 39.5, 40.1, 40.2, 40.3, 40.4, 40.5
 */

import React, { useState, useEffect } from 'react';
import { useAutoStrategyController } from '../../hooks/useAutoStrategyController';
import {
    Strategy,
    LogicOperator,
    StrategyPriority,
    ActionType,
    Condition,
    StrategyAction,
} from '../../types/auto-strategy.types';
import Input from '../shared_ui/input/input';
import Button from '../shared_ui/button/button';
import ConditionBuilder from './ConditionBuilder';
import ActionBuilder from './ActionBuilder';
import LimitsBuilder from './LimitsBuilder';
import StrategyValidation from './StrategyValidation';
import AlertConfigBuilder from './AlertConfigBuilder';
import { alertManager, AlertConfig } from '../../services/auto-strategy/alert-manager.service';
import './StrategyBuilder.scss';

interface StrategyBuilderProps {
    strategyId?: string;
    onSave?: (strategyId: string) => void;
    onCancel?: () => void;
}

const StrategyBuilder: React.FC<StrategyBuilderProps> = ({ strategyId, onSave, onCancel }) => {
    const { getStrategyById, createStrategy, updateStrategy, getStrategyWarnings } = useAutoStrategyController();

    // Form state
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [symbol, setSymbol] = useState('R_100');
    const [symbols, setSymbols] = useState<string[]>([]);
    const [isMultiSymbol, setIsMultiSymbol] = useState(false);
    const [logicOperator, setLogicOperator] = useState<LogicOperator>(LogicOperator.AND);
    const [conditions, setConditions] = useState<Condition[]>([]);
    const [action, setAction] = useState<StrategyAction>({
        type: ActionType.StartBot,
        botId: '',
        stake: 1,
    });
    const [priority, setPriority] = useState<StrategyPriority>(StrategyPriority.Medium);
    const [cooldownPeriod, setCooldownPeriod] = useState(60);
    const [profitLimit, setProfitLimit] = useState<number | undefined>(undefined);
    const [lossLimit, setLossLimit] = useState<number | undefined>(undefined);
    const [alertConfig, setAlertConfig] = useState<AlertConfig | null>(null);

    // UI state
    const [validationErrors, setValidationErrors] = useState<string[]>([]);
    const [warnings, setWarnings] = useState<string[]>([]);
    const [isSaving, setIsSaving] = useState(false);

    // Load existing strategy if editing
    useEffect(() => {
        if (strategyId) {
            const strategy = getStrategyById(strategyId);
            if (strategy) {
                setName(strategy.name);
                setDescription(strategy.description || '');
                setSymbol(strategy.symbol);
                
                // Check if strategy has multiple symbols
                if (strategy.symbols && strategy.symbols.length > 0) {
                    setSymbols(strategy.symbols);
                    setIsMultiSymbol(true);
                } else {
                    setSymbols([strategy.symbol]);
                    setIsMultiSymbol(false);
                }
                
                setLogicOperator(strategy.logicOperator);
                setConditions(strategy.conditions);
                setAction(strategy.action);
                setPriority(strategy.priority);
                setCooldownPeriod(strategy.cooldownPeriod);
                setProfitLimit(strategy.profitLimit);
                setLossLimit(strategy.lossLimit);
            }
        }
    }, [strategyId, getStrategyById]);

    // Validate form
    const validateForm = (): boolean => {
        const errors: string[] = [];

        if (!name.trim()) {
            errors.push('Strategy name is required');
        }

        if (isMultiSymbol) {
            if (symbols.length === 0) {
                errors.push('At least one trading symbol is required');
            }
        } else {
            if (!symbol.trim()) {
                errors.push('Trading symbol is required');
            }
        }

        if (conditions.length === 0) {
            errors.push('At least one condition is required');
        }

        if (!action.botId.trim()) {
            errors.push('Bot selection is required');
        }

        if (action.stake && action.stake <= 0) {
            errors.push('Stake amount must be positive');
        }

        if (cooldownPeriod < 0 || cooldownPeriod > 3600) {
            errors.push('Cooldown period must be between 0 and 3600 seconds');
        }

        setValidationErrors(errors);
        return errors.length === 0;
    };

    // Handle save
    const handleSave = async () => {
        if (!validateForm()) {
            return;
        }

        setIsSaving(true);

        try {
            const strategyData = {
                name,
                description,
                symbol: isMultiSymbol ? (symbols[0] || 'R_100') : symbol,
                symbols: isMultiSymbol ? symbols : undefined,
                conditions,
                logicOperator,
                action,
                priority,
                cooldownPeriod,
                profitLimit,
                lossLimit,
                isActive: false,
                isPaused: false,
            };

            let savedStrategyId: string;

            if (strategyId) {
                await updateStrategy(strategyId, strategyData);
                savedStrategyId = strategyId;
            } else {
                savedStrategyId = await createStrategy(strategyData);
            }

            // Save alert configuration
            if (alertConfig) {
                alertManager.setAlertConfig({
                    ...alertConfig,
                    strategyId: savedStrategyId,
                });
            }

            onSave?.(savedStrategyId);
        } catch (error) {
            console.error('Failed to save strategy:', error);
            setValidationErrors([error instanceof Error ? error.message : 'Failed to save strategy']);
        } finally {
            setIsSaving(false);
        }
    };

    // Update warnings when strategy changes
    useEffect(() => {
        if (name && conditions.length > 0 && action.botId) {
            const tempStrategy = {
                id: strategyId || 'temp',
                name,
                description,
                symbol,
                conditions,
                logicOperator,
                action,
                priority,
                cooldownPeriod,
                profitLimit,
                lossLimit,
                isActive: false,
                isPaused: false,
                createdAt: Date.now(),
                updatedAt: Date.now(),
            };

            const strategyWarnings = getStrategyWarnings(tempStrategy);
            setWarnings(strategyWarnings.map(w => w.message));
        }
    }, [name, conditions, action, profitLimit, lossLimit, cooldownPeriod]);

    return (
        <div className="strategy-builder">
            <div className="strategy-builder__header">
                <h2 className="strategy-builder__title">
                    {strategyId ? 'Edit Strategy' : 'Create New Strategy'}
                </h2>
            </div>

            <div className="strategy-builder__content">
                {/* Basic Information */}
                <div className="strategy-builder__section">
                    <h3 className="strategy-builder__section-title">Basic Information</h3>
                    
                    <div className="strategy-builder__field">
                        <Input
                            label="Strategy Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Enter strategy name"
                            maxLength={100}
                        />
                    </div>

                    <div className="strategy-builder__field">
                        <Input
                            label="Description (Optional)"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            placeholder="Describe your strategy"
                            type="textarea"
                        />
                    </div>

                    <div className="strategy-builder__field">
                        <label className="strategy-builder__label">
                            <input
                                type="checkbox"
                                checked={isMultiSymbol}
                                onChange={(e) => {
                                    setIsMultiSymbol(e.target.checked);
                                    if (e.target.checked && symbols.length === 0) {
                                        setSymbols([symbol]);
                                    }
                                }}
                            />
                            <span style={{ marginLeft: '8px' }}>Monitor multiple symbols</span>
                        </label>
                        <p className="strategy-builder__hint">
                            Enable this to create strategies that monitor multiple trading symbols simultaneously
                        </p>
                    </div>

                    {!isMultiSymbol ? (
                        <div className="strategy-builder__field">
                            <Input
                                label="Trading Symbol"
                                value={symbol}
                                onChange={(e) => setSymbol(e.target.value)}
                                placeholder="e.g., R_100"
                            />
                        </div>
                    ) : (
                        <div className="strategy-builder__field">
                            <label className="strategy-builder__label">Trading Symbols</label>
                            <div className="strategy-builder__symbol-list">
                                {symbols.map((sym, index) => (
                                    <div key={index} className="strategy-builder__symbol-item">
                                        <Input
                                            value={sym}
                                            onChange={(e) => {
                                                const newSymbols = [...symbols];
                                                newSymbols[index] = e.target.value;
                                                setSymbols(newSymbols);
                                            }}
                                            placeholder="e.g., R_100"
                                        />
                                        <Button
                                            text="Remove"
                                            onClick={() => {
                                                const newSymbols = symbols.filter((_, i) => i !== index);
                                                setSymbols(newSymbols);
                                            }}
                                            secondary
                                            small
                                        />
                                    </div>
                                ))}
                                <Button
                                    text="Add Symbol"
                                    onClick={() => setSymbols([...symbols, ''])}
                                    secondary
                                    small
                                />
                            </div>
                            <p className="strategy-builder__hint">
                                Add multiple symbols to monitor. The bot will start with the symbol that triggered the condition.
                            </p>
                        </div>
                    )}

                    <div className="strategy-builder__field">
                        <label className="strategy-builder__label">Logic Operator</label>
                        <div className="strategy-builder__radio-group">
                            <label className="strategy-builder__radio">
                                <input
                                    type="radio"
                                    value={LogicOperator.AND}
                                    checked={logicOperator === LogicOperator.AND}
                                    onChange={(e) => setLogicOperator(e.target.value as LogicOperator)}
                                />
                                <span>AND (all conditions must be true)</span>
                            </label>
                            <label className="strategy-builder__radio">
                                <input
                                    type="radio"
                                    value={LogicOperator.OR}
                                    checked={logicOperator === LogicOperator.OR}
                                    onChange={(e) => setLogicOperator(e.target.value as LogicOperator)}
                                />
                                <span>OR (at least one condition must be true)</span>
                            </label>
                        </div>
                    </div>

                    <div className="strategy-builder__field">
                        <label className="strategy-builder__label">Priority Level</label>
                        <select
                            className="strategy-builder__select"
                            value={priority}
                            onChange={(e) => setPriority(e.target.value as StrategyPriority)}
                        >
                            <option value={StrategyPriority.High}>High</option>
                            <option value={StrategyPriority.Medium}>Medium</option>
                            <option value={StrategyPriority.Low}>Low</option>
                        </select>
                    </div>

                    <div className="strategy-builder__field">
                        <Input
                            label="Cooldown Period (seconds)"
                            type="number"
                            value={cooldownPeriod.toString()}
                            onChange={(e) => setCooldownPeriod(Number(e.target.value))}
                            placeholder="60"
                            hint="Minimum time between strategy triggers (0-3600 seconds)"
                        />
                    </div>
                </div>

                {/* Conditions */}
                <div className="strategy-builder__section">
                    <h3 className="strategy-builder__section-title">Conditions</h3>
                    <ConditionBuilder
                        conditions={conditions}
                        onChange={setConditions}
                    />
                </div>

                {/* Action */}
                <div className="strategy-builder__section">
                    <h3 className="strategy-builder__section-title">Bot Action</h3>
                    <ActionBuilder
                        action={action}
                        onChange={setAction}
                    />
                </div>

                {/* Limits */}
                <div className="strategy-builder__section">
                    <h3 className="strategy-builder__section-title">Profit & Loss Limits</h3>
                    <LimitsBuilder
                        profitLimit={profitLimit}
                        lossLimit={lossLimit}
                        onProfitLimitChange={setProfitLimit}
                        onLossLimitChange={setLossLimit}
                    />
                </div>

                {/* Alert Configuration */}
                <div className="strategy-builder__section">
                    <h3 className="strategy-builder__section-title">Alert Preferences</h3>
                    <AlertConfigBuilder
                        strategyId={strategyId || 'new'}
                        onChange={setAlertConfig}
                    />
                </div>

                {/* Validation */}
                <StrategyValidation
                    errors={validationErrors}
                    warnings={warnings}
                />
            </div>

            {/* Actions */}
            <div className="strategy-builder__footer">
                <Button
                    text="Cancel"
                    onClick={onCancel}
                    secondary
                    large
                />
                <Button
                    text={strategyId ? 'Update Strategy' : 'Create Strategy'}
                    onClick={handleSave}
                    is_loading={isSaving}
                    is_disabled={isSaving}
                    primary
                    large
                />
            </div>
        </div>
    );
};

export default StrategyBuilder;
