/**
 * Strategy Validation Component
 * 
 * Displays validation errors and warnings for strategy configuration.
 * 
 * Requirements: 24.1, 24.2, 24.3, 24.4, 24.5, 32.1, 32.2, 32.3, 32.4, 32.5, 33.1, 33.2, 33.3, 33.4, 33.5
 */

import React from 'react';
import './StrategyValidation.scss';

interface StrategyValidationProps {
    errors: string[];
    warnings: string[];
}

const StrategyValidation: React.FC<StrategyValidationProps> = ({ errors, warnings }) => {
    if (errors.length === 0 && warnings.length === 0) {
        return null;
    }

    return (
        <div className="strategy-validation">
            {errors.length > 0 && (
                <div className="strategy-validation__errors">
                    <div className="strategy-validation__header">
                        <span className="strategy-validation__icon">❌</span>
                        <h4 className="strategy-validation__title">Validation Errors</h4>
                    </div>
                    <ul className="strategy-validation__list">
                        {errors.map((error, index) => (
                            <li key={index} className="strategy-validation__item">
                                {error}
                            </li>
                        ))}
                    </ul>
                </div>
            )}

            {warnings.length > 0 && (
                <div className="strategy-validation__warnings">
                    <div className="strategy-validation__header">
                        <span className="strategy-validation__icon">⚠️</span>
                        <h4 className="strategy-validation__title">Warnings</h4>
                    </div>
                    <ul className="strategy-validation__list">
                        {warnings.map((warning, index) => (
                            <li key={index} className="strategy-validation__item">
                                {warning}
                            </li>
                        ))}
                    </ul>
                    <p className="strategy-validation__note">
                        These warnings indicate potentially risky configurations. You can still save the strategy, but consider addressing these issues.
                    </p>
                </div>
            )}
        </div>
    );
};

export default StrategyValidation;
