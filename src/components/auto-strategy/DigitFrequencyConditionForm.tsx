/**
 * Digit Frequency Condition Form
 * 
 * Form for configuring digit frequency conditions.
 */

import React, { useState, useEffect } from 'react';
import {
    DigitFrequencyCondition,
    ConditionType,
    ComparisonOperator,
} from '../../types/auto-strategy.types';
import Input from '../shared_ui/input/input';
import Button from '../shared_ui/button/button';
import Checkbox from '../shared_ui/checkbox/checkbox';
import './ConditionForms.scss';

interface DigitFrequencyConditionFormProps {
    condition?: DigitFrequencyCondition;
    onSave: (condition: DigitFrequencyCondition) => void;
    onCancel: () => void;
}

const DigitFrequencyConditionForm: React.FC<DigitFrequencyConditionFormProps> = ({
    condition,
    onSave,
    onCancel,
}) => {
    const [digits, setDigits] = useState<number[]>(condition?.digits || []);
    const [tickCount, setTickCount] = useState(condition?.tickCount || 100);
    const [operator, setOperator] = useState<ComparisonOperator>(
        condition?.operator || ComparisonOperator.GreaterThan
    );
    const [threshold, setThreshold] = useState(condition?.threshold || 30);

    const handleDigitToggle = (digit: number) => {
        if (digits.includes(digit)) {
            setDigits(digits.filter(d => d !== digit));
        } else {
            setDigits([...digits, digit].sort());
        }
    };

    const handleSave = () => {
        const newCondition: DigitFrequencyCondition = {
            type: ConditionType.DigitFrequency,
            digits,
            tickCount,
            operator,
            threshold,
        };
        onSave(newCondition);
    };

    const isValid = digits.length > 0 && tickCount >= 10 && tickCount <= 1000 && threshold >= 0;

    return (
        <div className="condition-form">
            <div className="condition-form__field">
                <label className="condition-form__label">Select Digits</label>
                <div className="condition-form__digit-grid">
                    {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(digit => (
                        <button
                            key={digit}
                            type="button"
                            className={`condition-form__digit-button ${
                                digits.includes(digit) ? 'condition-form__digit-button--active' : ''
                            }`}
                            onClick={() => handleDigitToggle(digit)}
                        >
                            {digit}
                        </button>
                    ))}
                </div>
                <p className="condition-form__hint">
                    Selected: {digits.length > 0 ? digits.join(', ') : 'None'}
                </p>
            </div>

            <div className="condition-form__field">
                <Input
                    label="Tick Count (10-1000)"
                    type="number"
                    value={tickCount.toString()}
                    onChange={(e) => setTickCount(Number(e.target.value))}
                    hint="Number of recent ticks to analyze"
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
                    label="Threshold (%)"
                    type="number"
                    value={threshold.toString()}
                    onChange={(e) => setThreshold(Number(e.target.value))}
                    hint="Percentage of occurrence (0-100)"
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

export default DigitFrequencyConditionForm;
