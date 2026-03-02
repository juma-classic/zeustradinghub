/**
 * Time Range Condition Form
 */

import React, { useState } from 'react';
import {
    TimeRangeCondition,
    TimeRange,
    ConditionType,
} from '../../types/auto-strategy.types';
import Input from '../shared_ui/input/input';
import Button from '../shared_ui/button/button';
import Checkbox from '../shared_ui/checkbox/checkbox';
import './ConditionForms.scss';

interface TimeRangeConditionFormProps {
    condition?: TimeRangeCondition;
    onSave: (condition: TimeRangeCondition) => void;
    onCancel: () => void;
}

const DAYS_OF_WEEK = [
    { value: 0, label: 'Sunday' },
    { value: 1, label: 'Monday' },
    { value: 2, label: 'Tuesday' },
    { value: 3, label: 'Wednesday' },
    { value: 4, label: 'Thursday' },
    { value: 5, label: 'Friday' },
    { value: 6, label: 'Saturday' },
];

const TimeRangeConditionForm: React.FC<TimeRangeConditionFormProps> = ({
    condition,
    onSave,
    onCancel,
}) => {
    const [startTime, setStartTime] = useState(
        condition?.timeRanges[0]?.startTime || '09:00'
    );
    const [endTime, setEndTime] = useState(
        condition?.timeRanges[0]?.endTime || '17:00'
    );
    const [daysOfWeek, setDaysOfWeek] = useState<number[]>(
        condition?.timeRanges[0]?.daysOfWeek || [1, 2, 3, 4, 5]
    );
    const [timezone, setTimezone] = useState(condition?.timezone || 'UTC');

    const handleDayToggle = (day: number) => {
        if (daysOfWeek.includes(day)) {
            setDaysOfWeek(daysOfWeek.filter(d => d !== day));
        } else {
            setDaysOfWeek([...daysOfWeek, day].sort());
        }
    };

    const handleSave = () => {
        const timeRange: TimeRange = {
            startTime,
            endTime,
            daysOfWeek,
        };

        const newCondition: TimeRangeCondition = {
            type: ConditionType.TimeRange,
            timeRanges: [timeRange],
            timezone,
        };
        onSave(newCondition);
    };

    const isValid = startTime && endTime && timezone;

    return (
        <div className="condition-form">
            <div className="condition-form__field">
                <Input
                    label="Start Time (HH:MM)"
                    type="time"
                    value={startTime}
                    onChange={(e) => setStartTime(e.target.value)}
                />
            </div>

            <div className="condition-form__field">
                <Input
                    label="End Time (HH:MM)"
                    type="time"
                    value={endTime}
                    onChange={(e) => setEndTime(e.target.value)}
                />
            </div>

            <div className="condition-form__field">
                <label className="condition-form__label">Days of Week</label>
                <div className="condition-form__checkbox-grid">
                    {DAYS_OF_WEEK.map(day => (
                        <Checkbox
                            key={day.value}
                            id={`day-${day.value}`}
                            label={day.label}
                            value={daysOfWeek.includes(day.value)}
                            onChange={() => handleDayToggle(day.value)}
                        />
                    ))}
                </div>
            </div>

            <div className="condition-form__field">
                <Input
                    label="Timezone"
                    value={timezone}
                    onChange={(e) => setTimezone(e.target.value)}
                    hint="IANA timezone (e.g., UTC, America/New_York)"
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

export default TimeRangeConditionForm;
