/**
 * Volatility Condition Form
 */

import React, { useState } from 'react';
import {
    VolatilityCondition,
    ConditionType,
    ComparisonOperator,
} from '../../types/auto-strategy.types';
import Input from '../shared_ui/input/input';
import Button from '../shared_ui/button/button';
import './ConditionForms.scss';

interface VolatilityConditionFormProps {
    condition?: VolatilityCondition;
    onSave: (condition: VolatilityCondition) => void;
    onCancel: () => void;
}

const VolatilityConditionForm: React.FC<VolatilityConditionFormProps> = ({
    condition,
    onSave,
    onCancel,
}) => {
    const [tickCount, setTickCount] = useState(condition?.tickCount || 50);
    const [operator, setOperator] = useState<ComparisonOperator>(
        condition?.operator || ComparisonOperator.GreaterThan
    );
    const [threshold, setThreshold] = useState(condition?.threshold || 0.5);

    const handleSave = () => {
        const newCondition: VolatilityCondition = {
            type: ConditionType.Volatility,
            tickCount,
            operator,
            threshold,
        };
        onSave(newCondition);
    };

    const isValid = tickCount >= 10 && tickCount <= 500 && threshold >= 0;

    return (
        <div className="condition-form">
            <div className="condition-form__field">
                <Input
                    label="Tick Count (10-500)"
                    type="number"
                    value={tickCount.toString()}
                    onChange={(e) => setTickCount(Number(e.target.value))}
                    hint="Number of recent ticks to calculate volatility"
                />
            </div>

            <div className="condition-form__field">
                <label className="condition-form__label">Comparison Operator</label>
                <select
                    className="condition-form__select"
                    value={operator}
                    onChange={(e) => setOperator(e.target.value as ComparisonOperator)}
                >
                    <option value={ComparisonOperator.LessThan}>Less than (&lt;)</option>
                    <option value={ComparisonOperator.LessThanOrEqual}>Less than or equal (≤)</option>
                    <option value={ComparisonOperator.Equal}>Equal (=)</option>
                    <option value={ComparisonOperator.GreaterThanOrEqual}>Greater than or equal (≥)</option>
                    <option value={ComparisonOperator.GreaterThan}>Greater than (&gt;)</option>
                </select>
            </div>

            <div className="condition-form__field">
                <Input
                    label="Volatility Threshold"
                    type="number"
                    step="0.01"
                    value={threshold.toString()}
                    onChange={(e) => setThreshold(Number(e.target.value))}
                    hint="Standard deviation threshold (e.g., 0.5)"
                />
            </div>

            <div className="condition-form__actions">
                <Button text="Cancel" onClick={onCancel} secondary />
                <Button
                    text="Save Condition"
                    onClick={handleSave}
                    is_disabled={!isValid}
                    primary
                />
            </div>
        </div>
    );
};

export default VolatilityConditionForm;
