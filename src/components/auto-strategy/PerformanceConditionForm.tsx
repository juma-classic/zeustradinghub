/**
 * Performance Condition Form
 */

import React, { useState } from 'react';
import {
    PerformanceCondition,
    ConditionType,
    ComparisonOperator,
    PerformanceMetric,
} from '../../types/auto-strategy.types';
import Input from '../shared_ui/input/input';
import Button from '../shared_ui/button/button';
import './ConditionForms.scss';

interface PerformanceConditionFormProps {
    condition?: PerformanceCondition;
    onSave: (condition: PerformanceCondition) => void;
    onCancel: () => void;
}

const PerformanceConditionForm: React.FC<PerformanceConditionFormProps> = ({
    condition,
    onSave,
    onCancel,
}) => {
    const [botId, setBotId] = useState(condition?.botId || '');
    const [metric, setMetric] = useState<PerformanceMetric>(
        condition?.metric || PerformanceMetric.ConsecutiveWins
    );
    const [operator, setOperator] = useState<ComparisonOperator>(
        condition?.operator || ComparisonOperator.GreaterThanOrEqual
    );
    const [threshold, setThreshold] = useState(condition?.threshold || 3);

    const handleSave = () => {
        const newCondition: PerformanceCondition = {
            type: ConditionType.Performance,
            botId,
            metric,
            operator,
            threshold,
        };
        onSave(newCondition);
    };

    const isValid = botId.trim().length > 0;

    return (
        <div className="condition-form">
            <div className="condition-form__field">
                <Input
                    label="Bot ID"
                    value={botId}
                    onChange={(e) => setBotId(e.target.value)}
                    placeholder="Enter bot ID to track"
                    hint="The bot whose performance will be monitored"
                />
            </div>

            <div className="condition-form__field">
                <label className="condition-form__label">Performance Metric</label>
                <select
                    className="condition-form__select"
                    value={metric}
                    onChange={(e) => setMetric(e.target.value as PerformanceMetric)}
                >
                    <option value={PerformanceMetric.ConsecutiveWins}>Consecutive Wins</option>
                    <option value={PerformanceMetric.ConsecutiveLosses}>Consecutive Losses</option>
                    <option value={PerformanceMetric.WinRate}>Win Rate (%)</option>
                    <option value={PerformanceMetric.TotalProfit}>Total Profit</option>
                    <option value={PerformanceMetric.TotalLoss}>Total Loss</option>
                </select>
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
                    label="Threshold"
                    type="number"
                    value={threshold.toString()}
                    onChange={(e) => setThreshold(Number(e.target.value))}
                    hint="Value to compare against"
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

export default PerformanceConditionForm;
