/**
 * Signal Condition Form
 */

import React, { useState } from 'react';
import {
    SignalCondition,
    ConditionType,
    ComparisonOperator,
    SignalProvider,
    SignalCriteria,
    SignalDirection,
} from '../../types/auto-strategy.types';
import Input from '../shared_ui/input/input';
import Button from '../shared_ui/button/button';
import './ConditionForms.scss';

interface SignalConditionFormProps {
    condition?: SignalCondition;
    onSave: (condition: SignalCondition) => void;
    onCancel: () => void;
}

const SignalConditionForm: React.FC<SignalConditionFormProps> = ({
    condition,
    onSave,
    onCancel,
}) => {
    const [provider, setProvider] = useState<SignalProvider>(
        condition?.provider || SignalProvider.ZeusAI
    );
    const [criteria, setCriteria] = useState<SignalCriteria>(
        condition?.criteria || SignalCriteria.Direction
    );
    const [value, setValue] = useState<string | number>(
        condition?.value || SignalDirection.Up
    );
    const [operator, setOperator] = useState<ComparisonOperator | undefined>(
        condition?.operator
    );

    const handleSave = () => {
        const newCondition: SignalCondition = {
            type: ConditionType.Signal,
            provider,
            criteria,
            value,
            operator,
        };
        onSave(newCondition);
    };

    const isValid = value !== undefined && value !== '';

    return (
        <div className="condition-form">
            <div className="condition-form__field">
                <label className="condition-form__label">Signal Provider</label>
                <select
                    className="condition-form__select"
                    value={provider}
                    onChange={(e) => setProvider(e.target.value as SignalProvider)}
                >
                    <option value={SignalProvider.ZeusAI}>Zeus AI</option>
                    <option value={SignalProvider.CFX}>CFX</option>
                </select>
            </div>

            <div className="condition-form__field">
                <label className="condition-form__label">Signal Criteria</label>
                <select
                    className="condition-form__select"
                    value={criteria}
                    onChange={(e) => {
                        const newCriteria = e.target.value as SignalCriteria;
                        setCriteria(newCriteria);
                        // Reset value based on criteria
                        if (newCriteria === SignalCriteria.Direction) {
                            setValue(SignalDirection.Up);
                            setOperator(undefined);
                        } else {
                            setValue(50);
                            setOperator(ComparisonOperator.GreaterThan);
                        }
                    }}
                >
                    <option value={SignalCriteria.Direction}>Direction</option>
                    <option value={SignalCriteria.Strength}>Strength</option>
                    <option value={SignalCriteria.Confidence}>Confidence</option>
                </select>
            </div>

            {criteria === SignalCriteria.Direction ? (
                <div className="condition-form__field">
                    <label className="condition-form__label">Expected Direction</label>
                    <select
                        className="condition-form__select"
                        value={value as string}
                        onChange={(e) => setValue(e.target.value)}
                    >
                        <option value={SignalDirection.Up}>Up</option>
                        <option value={SignalDirection.Down}>Down</option>
                    </select>
                </div>
            ) : (
                <>
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
                            label="Threshold (0-100)"
                            type="number"
                            value={value.toString()}
                            onChange={(e) => setValue(Number(e.target.value))}
                            hint="Signal strength or confidence level"
                        />
                    </div>
                </>
            )}

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

export default SignalConditionForm;
