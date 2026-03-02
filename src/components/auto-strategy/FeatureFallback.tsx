/**
 * Feature Fallback Component
 * 
 * Provides graceful degradation when specific features fail to load or function.
 * Shows user-friendly messages and alternative actions.
 */

import React from 'react';
import Button from '../shared_ui/button/button';
import { ErrorDetails, RecoveryAction } from '../../utils/error-handler';
import './FeatureFallback.scss';

interface FeatureFallbackProps {
    featureName: string;
    error?: ErrorDetails;
    onRetry?: () => void;
    onDismiss?: () => void;
    showDetails?: boolean;
    children?: React.ReactNode;
}

const FeatureFallback: React.FC<FeatureFallbackProps> = ({
    featureName,
    error,
    onRetry,
    onDismiss,
    showDetails = false,
    children,
}) => {
    const handleRecoveryAction = (action: RecoveryAction) => {
        try {
            action.action();
        } catch (err) {
            console.error('Recovery action failed:', err);
        }
    };

    return (
        <div className="feature-fallback">
            <div className="feature-fallback__icon">
                {error?.severity === 'critical' ? '🚫' : '⚠️'}
            </div>
            
            <h3 className="feature-fallback__title">
                {featureName} Unavailable
            </h3>
            
            <p className="feature-fallback__message">
                {error?.userMessage || `${featureName} is temporarily unavailable. Please try again later.`}
            </p>

            {showDetails && error && (
                <details className="feature-fallback__details">
                    <summary>Technical Details</summary>
                    <div className="feature-fallback__error-info">
                        <p><strong>Error Code:</strong> {error.code}</p>
                        <p><strong>Category:</strong> {error.category}</p>
                        <p><strong>Severity:</strong> {error.severity}</p>
                        <p><strong>Message:</strong> {error.message}</p>
                    </div>
                </details>
            )}

            <div className="feature-fallback__actions">
                {error?.recoveryActions && error.recoveryActions.length > 0 ? (
                    error.recoveryActions.map((action, index) => (
                        <Button
                            key={index}
                            onClick={() => handleRecoveryAction(action)}
                            variant={action.primary ? 'primary' : 'secondary'}
                        >
                            {action.label}
                        </Button>
                    ))
                ) : (
                    <>
                        {onRetry && (
                            <Button onClick={onRetry} variant="primary">
                                Try Again
                            </Button>
                        )}
                        {onDismiss && (
                            <Button onClick={onDismiss} variant="secondary">
                                Dismiss
                            </Button>
                        )}
                    </>
                )}
            </div>

            {children && (
                <div className="feature-fallback__alternative">
                    {children}
                </div>
            )}
        </div>
    );
};

export default FeatureFallback;
