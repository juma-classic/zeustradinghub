/**
 * Error Boundary Component for Auto Strategy Controller
 * 
 * Catches React errors in child components and provides graceful degradation
 * with user-friendly error messages and recovery options.
 */

import React, { Component, ErrorInfo, ReactNode } from 'react';
import Button from '../shared_ui/button/button';
import './ErrorBoundary.scss';

interface ErrorBoundaryProps {
    children: ReactNode;
    fallback?: ReactNode;
    onError?: (error: Error, errorInfo: ErrorInfo) => void;
    componentName?: string;
    showDetails?: boolean;
}

interface ErrorBoundaryState {
    hasError: boolean;
    error: Error | null;
    errorInfo: ErrorInfo | null;
    errorCount: number;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
    constructor(props: ErrorBoundaryProps) {
        super(props);
        this.state = {
            hasError: false,
            error: null,
            errorInfo: null,
            errorCount: 0,
        };
    }

    static getDerivedStateFromError(error: Error): Partial<ErrorBoundaryState> {
        return {
            hasError: true,
            error,
        };
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
        const { onError, componentName } = this.props;
        
        // Log error to console
        console.error(`Error in ${componentName || 'component'}:`, error, errorInfo);
        
        // Update state with error details
        this.setState(prevState => ({
            errorInfo,
            errorCount: prevState.errorCount + 1,
        }));
        
        // Call custom error handler if provided
        if (onError) {
            onError(error, errorInfo);
        }
        
        // Log to audit log if available
        this.logToAuditLog(error, errorInfo);
    }

    private logToAuditLog(error: Error, errorInfo: ErrorInfo): void {
        try {
            // Attempt to log to audit log service
            const auditLog = (window as any).autoStrategyAuditLog;
            if (auditLog && typeof auditLog.logError === 'function') {
                auditLog.logError({
                    component: this.props.componentName || 'Unknown',
                    error: error.message,
                    stack: error.stack,
                    componentStack: errorInfo.componentStack,
                    timestamp: Date.now(),
                });
            }
        } catch (logError) {
            console.error('Failed to log error to audit log:', logError);
        }
    }

    private handleReset = (): void => {
        this.setState({
            hasError: false,
            error: null,
            errorInfo: null,
        });
    };

    private handleReload = (): void => {
        window.location.reload();
    };

    render(): ReactNode {
        const { hasError, error, errorInfo, errorCount } = this.state;
        const { children, fallback, componentName, showDetails = false } = this.props;

        if (hasError) {
            // Use custom fallback if provided
            if (fallback) {
                return fallback;
            }

            // Show critical error if too many errors
            if (errorCount > 3) {
                return (
                    <div className="error-boundary error-boundary--critical">
                        <div className="error-boundary__icon">⚠️</div>
                        <h2 className="error-boundary__title">Critical Error</h2>
                        <p className="error-boundary__message">
                            Multiple errors occurred in {componentName || 'this component'}. 
                            Please reload the page to continue.
                        </p>
                        <div className="error-boundary__actions">
                            <Button onClick={this.handleReload} variant="primary">
                                Reload Page
                            </Button>
                        </div>
                    </div>
                );
            }

            // Show standard error UI
            return (
                <div className="error-boundary">
                    <div className="error-boundary__icon">⚠️</div>
                    <h2 className="error-boundary__title">Something went wrong</h2>
                    <p className="error-boundary__message">
                        {componentName 
                            ? `An error occurred in ${componentName}. You can try to recover or reload the page.`
                            : 'An unexpected error occurred. You can try to recover or reload the page.'
                        }
                    </p>
                    
                    {showDetails && error && (
                        <details className="error-boundary__details">
                            <summary>Error Details</summary>
                            <div className="error-boundary__error-info">
                                <p><strong>Error:</strong> {error.message}</p>
                                {error.stack && (
                                    <pre className="error-boundary__stack">
                                        {error.stack}
                                    </pre>
                                )}
                                {errorInfo?.componentStack && (
                                    <pre className="error-boundary__stack">
                                        {errorInfo.componentStack}
                                    </pre>
                                )}
                            </div>
                        </details>
                    )}
                    
                    <div className="error-boundary__actions">
                        <Button onClick={this.handleReset} variant="primary">
                            Try Again
                        </Button>
                        <Button onClick={this.handleReload} variant="secondary">
                            Reload Page
                        </Button>
                    </div>
                </div>
            );
        }

        return children;
    }
}

export default ErrorBoundary;
