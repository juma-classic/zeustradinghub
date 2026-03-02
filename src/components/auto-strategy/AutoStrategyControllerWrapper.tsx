/**
 * Auto Strategy Controller Wrapper
 * 
 * Example wrapper component demonstrating proper error boundary usage,
 * iframe compatibility, mobile responsiveness, and graceful degradation 
 * for the Auto Strategy Controller.
 */

import React, { useEffect } from 'react';
import ErrorBoundary from './ErrorBoundary';
import ErrorNotification from './ErrorNotification';
import MobileResponsiveWrapper from './MobileResponsiveWrapper';
import { useIframeResize } from '../../hooks/useIframeResize';
import { useErrorRecovery } from '../../hooks/useErrorRecovery';
import { applyDegradationStrategies, getDegradationReport } from '../../utils/graceful-degradation';
import { getIframeBridge } from '../../services/auto-strategy/iframe-bridge.service';

interface AutoStrategyControllerWrapperProps {
  children: React.ReactNode;
  enableMobileGestures?: boolean;
  prioritizeCriticalInfo?: boolean;
  stickyEmergencyStop?: boolean;
}

export const AutoStrategyControllerWrapper: React.FC<AutoStrategyControllerWrapperProps> = ({
  children,
  enableMobileGestures = true,
  prioritizeCriticalInfo = true,
  stickyEmergencyStop = true,
}) => {
  const iframeBridge = getIframeBridge({
    enableLogging: process.env.NODE_ENV === 'development',
  });

  // Handle iframe resize
  useIframeResize({
    enabled: true,
    debounceMs: 150,
    notifyOnMount: true,
  });

  // Error recovery
  const { errorState, handleError, checkHealth } = useErrorRecovery({
    component: 'AutoStrategyController',
    showNotifications: true,
  });

  useEffect(() => {
    // Apply graceful degradation strategies on mount
    applyDegradationStrategies();

    // Check feature support
    const report = getDegradationReport();
    
    if (report.criticalIssues.length > 0) {
      console.error('[AutoStrategyController] Critical issues detected:', report.criticalIssues);
    }

    // Check CSP compliance if in iframe
    if (iframeBridge.isIframe()) {
      const cspCheck = iframeBridge.checkCSPCompliance();
      
      if (!cspCheck.compliant) {
        console.warn('[AutoStrategyController] CSP issues:', cspCheck.issues);
      }
    }

    // Perform health check
    checkHealth().then(health => {
      if (!health.healthy) {
        console.warn('[AutoStrategyController] Health check failed:', health.issues);
      }
    });

    // Set up iframe message handlers
    if (iframeBridge.isIframe()) {
      const unsubscribe = iframeBridge.on('parent-command', (payload) => {
        console.log('[AutoStrategyController] Received parent command:', payload);
        // Handle commands from parent window
      });

      return () => {
        unsubscribe();
      };
    }
  }, [iframeBridge, checkHealth]);

  // Handle critical errors
  const handleCriticalError = (error: Error, errorInfo: React.ErrorInfo) => {
    console.error('[AutoStrategyController] Critical error:', error, errorInfo);
    
    // Notify parent if in iframe
    if (iframeBridge.isIframe()) {
      iframeBridge.sendToParent('critical-error', {
        message: error.message,
        stack: error.stack,
      });
    }

    // Attempt recovery
    handleError(error, 'critical-error', 'strategy-evaluation');
  };

  return (
    <>
      {/* Global error notification system */}
      <ErrorNotification />

      {/* Mobile responsive wrapper with gesture support */}
      <MobileResponsiveWrapper
        enableSwipeGestures={enableMobileGestures}
        prioritizeCriticalInfo={prioritizeCriticalInfo}
        stickyEmergencyStop={stickyEmergencyStop}
      >
        {/* Critical level error boundary for entire controller */}
        <ErrorBoundary
          level="critical"
          onError={handleCriticalError}
          resetKeys={[errorState.recoveryAttempts]}
        >
          {/* Feature level error boundary for main functionality */}
          <ErrorBoundary level="feature">
            {children}
          </ErrorBoundary>
        </ErrorBoundary>
      </MobileResponsiveWrapper>
    </>
  );
};

export default AutoStrategyControllerWrapper;
