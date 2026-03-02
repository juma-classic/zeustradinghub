/**
 * Backtesting Mode Indicator Component
 * 
 * Displays a prominent indicator when the system is in backtesting mode
 * Requirements: 37.5
 */

import React from 'react';
import { BacktestingMode } from '../../types/auto-strategy.types';
import './BacktestingModeIndicator.scss';

interface BacktestingModeIndicatorProps {
    mode: BacktestingMode;
    className?: string;
}

export const BacktestingModeIndicator: React.FC<BacktestingModeIndicatorProps> = ({
    mode,
    className = '',
}) => {
    if (mode === BacktestingMode.Live) {
        return null;
    }

    return (
        <div className={`backtesting-mode-indicator ${className}`}>
            <div className="indicator-content">
                <span className="indicator-icon">🧪</span>
                <div className="indicator-text">
                    <strong>BACKTESTING MODE</strong>
                    <span className="indicator-subtitle">No real trades will be executed</span>
                </div>
            </div>
        </div>
    );
};
