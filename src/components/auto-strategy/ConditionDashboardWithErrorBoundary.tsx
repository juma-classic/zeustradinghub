/**
 * Condition Dashboard with Error Boundary
 * 
 * Wraps the ConditionDashboard component with error handling and graceful degradation.
 */

import React from 'react';
import ErrorBoundary from './ErrorBoundary';
import FeatureFallback from './FeatureFallback';
import ConditionDashboard from './ConditionDashboard';
import { ErrorHandler } from '../../utils/error-handler';

interface ConditionDashboardWithErrorBoundaryProps {
    className?: string;
}

const ConditionDashboardWithErrorBoundary: React.FC<ConditionDashboardWithErrorBoundaryProps> = (props) => {
    const [retryKey, setRetryKey] = React.useState(0);

    const handleError = (error: Error, errorInfo: React.ErrorInfo) => {
        const errorDetails = ErrorHandler.handle(error, 'ConditionDashboard');
        console.error('Condition Dashboard Error:', errorDetails);
    };

    const handleRetry = () => {
        setRetryKey(prev => prev + 1);
    };

    return (
        <ErrorBoundary
            key={retryKey}
            componentName="Condition Dashboard"
            onError={handleError}
            showDetails={process.env.NODE_ENV === 'development'}
            fallback={
                <FeatureFallback
                    featureName="Condition Dashboard"
                    onRetry={handleRetry}
                >
                    <p>
                        The monitoring dashboard is temporarily unavailable.
                        Your strategies are still running in the background.
                        Try refreshing the page to restore the dashboard.
                    </p>
                </FeatureFallback>
            }
        >
            <ConditionDashboard {...props} />
        </ErrorBoundary>
    );
};

export default ConditionDashboardWithErrorBoundary;
