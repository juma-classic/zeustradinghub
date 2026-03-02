/**
 * Limits Builder Component
 * 
 * Configures profit and loss limits for a strategy.
 * 
 * Requirements: 13.1, 14.1, 15.1, 15.2, 15.3
 */

import React from 'react';
import Input from '../shared_ui/input/input';
import Checkbox from '../shared_ui/checkbox/checkbox';
import './LimitsBuilder.scss';

interface LimitsBuilderProps {
    profitLimit?: number;
    lossLimit?: number;
    onProfitLimitChange: (limit: number | undefined) => void;
    onLossLimitChange: (limit: number | undefined) => void;
}

const LimitsBuilder: React.FC<LimitsBuilderProps> = ({
    profitLimit,
    lossLimit,
    onProfitLimitChange,
    onLossLimitChange,
}) => {
    const [profitLimitEnabled, setProfitLimitEnabled] = React.useState(profitLimit !== undefined);
    const [lossLimitEnabled, setLossLimitEnabled] = React.useState(lossLimit !== undefined);

    const handleProfitLimitToggle = (enabled: boolean) => {
        setProfitLimitEnabled(enabled);
        if (!enabled) {
            onProfitLimitChange(undefined);
        } else {
            onProfitLimitChange(100);
        }
    };

    const handleLossLimitToggle = (enabled: boolean) => {
        setLossLimitEnabled(enabled);
        if (!enabled) {
            onLossLimitChange(undefined);
        } else {
            onLossLimitChange(50);
        }
    };

    return (
        <div className="limits-builder">
            <div className="limits-builder__section">
                <Checkbox
                    id="profit-limit-enabled"
                    label="Enable Profit Limit"
                    value={profitLimitEnabled}
                    onChange={(e) => handleProfitLimitToggle((e.target as HTMLInputElement).checked)}
                />

                {profitLimitEnabled && (
                    <div className="limits-builder__field">
                        <Input
                            label="Profit Limit"
                            type="number"
                            step="0.01"
                            value={profitLimit?.toString() || '100'}
                            onChange={(e) => onProfitLimitChange(Number(e.target.value))}
                            hint="Strategy will deactivate when this profit is reached"
                        />
                    </div>
                )}
            </div>

            <div className="limits-builder__section">
                <Checkbox
                    id="loss-limit-enabled"
                    label="Enable Loss Limit"
                    value={lossLimitEnabled}
                    onChange={(e) => handleLossLimitToggle((e.target as HTMLInputElement).checked)}
                />

                {lossLimitEnabled && (
                    <div className="limits-builder__field">
                        <Input
                            label="Loss Limit"
                            type="number"
                            step="0.01"
                            value={lossLimit?.toString() || '50'}
                            onChange={(e) => onLossLimitChange(Number(e.target.value))}
                            hint="Strategy will deactivate when this loss is reached"
                        />
                    </div>
                )}
            </div>

            {!profitLimitEnabled && !lossLimitEnabled && (
                <div className="limits-builder__warning">
                    <p>⚠️ No limits configured. Consider setting profit and loss limits for risk management.</p>
                </div>
            )}
        </div>
    );
};

export default LimitsBuilder;
