/**
 * Condition Builder Component
 * 
 * Manages the list of conditions for a strategy.
 * Allows adding, editing, and removing conditions.
 * 
 * Requirements: 2.1, 2.5, 3.1, 3.2, 3.3, 4.1, 5.1, 5.2, 5.3, 5.4, 6.1, 6.2, 7.1, 7.2, 7.3
 */

import React, { useState } from 'react';
import { Condition, ConditionType } from '../../types/auto-strategy.types';
import Button from '../shared_ui/button/button';
import DigitFrequencyConditionForm from './DigitFrequencyConditionForm';
import VolatilityConditionForm from './VolatilityConditionForm';
import TimeRangeConditionForm from './TimeRangeConditionForm';
import PerformanceConditionForm from './PerformanceConditionForm';
import SignalConditionForm from './SignalConditionForm';
import './ConditionBuilder.scss';

interface ConditionBuilderProps {
    conditions: Condition[];
    onChange: (conditions: Condition[]) => void;
}

const ConditionBuilder: React.FC<ConditionBuilderProps> = ({ conditions, onChange }) => {
    const [selectedType, setSelectedType] = useState<ConditionType | ''>('');
    const [editingIndex, setEditingIndex] = useState<number | null>(null);

    const handleAddCondition = (condition: Condition) => {
        if (editingIndex !== null) {
            // Update existing condition
            const updated = [...conditions];
            updated[editingIndex] = condition;
            onChange(updated);
            setEditingIndex(null);
        } else {
            // Add new condition
            onChange([...conditions, condition]);
        }
        setSelectedType('');
    };

    const handleEditCondition = (index: number) => {
        setEditingIndex(index);
        setSelectedType(conditions[index].type);
    };

    const handleRemoveCondition = (index: number) => {
        onChange(conditions.filter((_, i) => i !== index));
    };

    const handleCancelEdit = () => {
        setSelectedType('');
        setEditingIndex(null);
    };

    const getConditionDescription = (condition: Condition): string => {
        switch (condition.type) {
            case ConditionType.DigitFrequency:
                return `Digits ${condition.digits.join(', ')} ${condition.operator} ${condition.threshold}% in last ${condition.tickCount} ticks`;
            case ConditionType.Volatility:
                return `Volatility ${condition.operator} ${condition.threshold} over ${condition.tickCount} ticks`;
            case ConditionType.TimeRange:
                return `Time range: ${condition.timeRanges.length} range(s) in ${condition.timezone}`;
            case ConditionType.Performance:
                return `Bot ${condition.botId}: ${condition.metric} ${condition.operator} ${condition.threshold}`;
            case ConditionType.Signal:
                return `${condition.provider} signal: ${condition.criteria} ${condition.operator || '='} ${condition.value}`;
            default:
                return 'Unknown condition';
        }
    };

    return (
        <div className="condition-builder">
            {/* Condition List */}
            {conditions.length > 0 && (
                <div className="condition-builder__list">
                    {conditions.map((condition, index) => (
                        <div key={index} className="condition-builder__item">
                            <div className="condition-builder__item-content">
                                <span className="condition-builder__item-number">{index + 1}</span>
                                <span className="condition-builder__item-description">
                                    {getConditionDescription(condition)}
                                </span>
                            </div>
                            <div className="condition-builder__item-actions">
                                <Button
                                    text="Edit"
                                    onClick={() => handleEditCondition(index)}
                                    small
                                    secondary
                                />
                                <Button
                                    text="Remove"
                                    onClick={() => handleRemoveCondition(index)}
                                    small
                                    secondary
                                />
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {/* Add/Edit Condition Form */}
            {selectedType === '' ? (
                <div className="condition-builder__add">
                    <label className="condition-builder__label">Add Condition</label>
                    <select
                        className="condition-builder__select"
                        value={selectedType}
                        onChange={(e) => setSelectedType(e.target.value as ConditionType)}
                    >
                        <option value="">Select condition type...</option>
                        <option value={ConditionType.DigitFrequency}>Digit Frequency</option>
                        <option value={ConditionType.Volatility}>Volatility</option>
                        <option value={ConditionType.TimeRange}>Time Range</option>
                        <option value={ConditionType.Performance}>Bot Performance</option>
                        <option value={ConditionType.Signal}>External Signal</option>
                    </select>
                </div>
            ) : (
                <div className="condition-builder__form">
                    <h4 className="condition-builder__form-title">
                        {editingIndex !== null ? 'Edit' : 'Add'} {selectedType.replace('_', ' ')} Condition
                    </h4>

                    {selectedType === ConditionType.DigitFrequency && (
                        <DigitFrequencyConditionForm
                            condition={editingIndex !== null ? conditions[editingIndex] as any : undefined}
                            onSave={handleAddCondition}
                            onCancel={handleCancelEdit}
                        />
                    )}

                    {selectedType === ConditionType.Volatility && (
                        <VolatilityConditionForm
                            condition={editingIndex !== null ? conditions[editingIndex] as any : undefined}
                            onSave={handleAddCondition}
                            onCancel={handleCancelEdit}
                        />
                    )}

                    {selectedType === ConditionType.TimeRange && (
                        <TimeRangeConditionForm
                            condition={editingIndex !== null ? conditions[editingIndex] as any : undefined}
                            onSave={handleAddCondition}
                            onCancel={handleCancelEdit}
                        />
                    )}

                    {selectedType === ConditionType.Performance && (
                        <PerformanceConditionForm
                            condition={editingIndex !== null ? conditions[editingIndex] as any : undefined}
                            onSave={handleAddCondition}
                            onCancel={handleCancelEdit}
                        />
                    )}

                    {selectedType === ConditionType.Signal && (
                        <SignalConditionForm
                            condition={editingIndex !== null ? conditions[editingIndex] as any : undefined}
                            onSave={handleAddCondition}
                            onCancel={handleCancelEdit}
                        />
                    )}
                </div>
            )}

            {conditions.length === 0 && selectedType === '' && (
                <div className="condition-builder__empty">
                    <p>No conditions added yet. Add at least one condition to continue.</p>
                </div>
            )}
        </div>
    );
};

export default ConditionBuilder;
