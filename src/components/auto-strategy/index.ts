/**
 * Auto Strategy Components Export
 * 
 * Exports all auto-strategy components with error boundaries applied
 * and mobile responsiveness support.
 */

// Main components with error boundaries
export { default as StrategyBuilder } from './StrategyBuilderWithErrorBoundary';
export { default as ConditionDashboard } from './ConditionDashboardWithErrorBoundary';

// Error handling components
export { default as ErrorBoundary } from './ErrorBoundary';
export { default as FeatureFallback } from './FeatureFallback';

// Mobile responsiveness components
export { default as MobileResponsiveWrapper } from './MobileResponsiveWrapper';
export { default as AutoStrategyControllerWrapper } from './AutoStrategyControllerWrapper';

// Mobile gesture hooks
export { 
  default as useMobileGestures,
  useIsMobile,
  useMobileUI,
  useEmergencyStopMobile
} from './hooks/useMobileGestures';

// Sub-components (without error boundaries - parent handles errors)
export { default as ConditionBuilder } from './ConditionBuilder';
export { default as ActionBuilder } from './ActionBuilder';
export { default as LimitsBuilder } from './LimitsBuilder';
export { default as StrategyValidation } from './StrategyValidation';
export { default as AlertConfigBuilder } from './AlertConfigBuilder';
export { default as TemplateSelector } from './TemplateSelector';
export { default as ImportExportButtons } from './ImportExportButtons';
export { default as AuditLogViewer } from './AuditLogViewer';

// Example components
export { default as StrategyBuilderExample } from './StrategyBuilderExample';
export { default as ConditionDashboardExample } from './ConditionDashboardExample';
