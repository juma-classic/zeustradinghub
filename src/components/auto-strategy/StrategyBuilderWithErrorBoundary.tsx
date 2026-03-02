/**
 * Strategy Builder with Error Boundary
 * 
 * Wraps the StrategyBuilder component with error handling and graceful degradation.
 */

import React from 'react';
import ErrorBoundary from './ErrorBoundary';
import FeatureFallback from './FeatureFallback';
import StrategyBuilder from './StrategyBuilder';
import { ErrorHandler } from '../../utils/error-handler';

interface StrategyBuilderWithErrorBoundaryProps {
    strategyId?: string;
    onSave?: (strategyId: string) => void;
    onCancel?: () => void;
}

const StrategyBuilderWithErrorBoundary: React.FC<StrategyBuilderWithErrorBoundaryProps> = (props) => {
    const [retryKey, setRetryKey] = React.useState(0);

    const handleError = (error: Error, errorInfo: React.ErrorInfo) => {
        const errorDetails = ErrorHandler.handle(error, 'StrategyBuilder');
        console.error('Strategy Builder Error:', errorDetails);
    };

    const handleRetry = () => {
        setRetryKey(prev => prev + 1);
    };

    return (
        <ErrorBoundary
            key={retryKey}
            componentName="Strategy Builder"
            onError={handleError}
            showDetails={process.env.NODE_ENV === 'development'}
            fallback={
                <FeatureFallback
                    featureName="Strategy Builder"
                    onRetry={handleRetry}
                    onDismiss={props.onCancel}
                >
                    <p>
                        You can still view and manage existing strategies from the dashboard.
                        Try refreshing the page or contact support if the problem persists.
                    </p>
                </FeatureFallback>
            }
        >
            <StrategyBuilder {...props} />
        </ErrorBoundary>
    );
};

export default StrategyBuilderWithErrorBoundary;
