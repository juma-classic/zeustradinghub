/**
 * Performance Monitor Hook for Auto Strategy Controller
 * 
 * This hook provides performance monitoring capabilities for React components
 * in the Auto Strategy Controller, including render time tracking, memory usage,
 * and optimization suggestions.
 */

import { useEffect, useRef, useState, useCallback } from 'react';
import { getPerformanceOptimizer } from '../../services/auto-strategy/performance-optimizer.service';

interface PerformanceMetrics {
    renderTime: number;
    renderCount: number;
    averageRenderTime: number;
    memoryUsage: number;
    lastRender: number;
}

interface UsePerformanceMonitorOptions {
    componentName: string;
    enableLogging?: boolean;
    renderTimeThreshold?: number; // Warn if render time exceeds this (ms)
    maxRenderCount?: number; // Track last N renders for average
}

interface UsePerformanceMonitorReturn {
    metrics: PerformanceMetrics;
    startRender: () => void;
    endRender: () => void;
    logMetrics: () => void;
    resetMetrics: () => void;
}

export function usePerformanceMonitor(
    options: UsePerformanceMonitorOptions
): UsePerformanceMonitorReturn {
    const {
        componentName,
        enableLogging = process.env.NODE_ENV === 'development',
        renderTimeThreshold = 16, // 60fps = 16.67ms per frame
        maxRenderCount = 10
    } = options;

    const renderStartTime = useRef<number>(0);
    const renderTimes = useRef<number[]>([]);
    const performanceOptimizer = getPerformanceOptimizer();

    const [metrics, setMetrics] = useState<PerformanceMetrics>({
        renderTime: 0,
        renderCount: 0,
        averageRenderTime: 0,
        memoryUsage: 0,
        lastRender: 0,
    });

    const startRender = useCallback(() => {
        renderStartTime.current = performance.now();
    }, []);

    const endRender = useCallback(() => {
        const endTime = performance.now();
        const renderTime = endTime - renderStartTime.current;
        
        // Update render times array
        renderTimes.current.push(renderTime);
        if (renderTimes.current.length > maxRenderCount) {
            renderTimes.current.shift();
        }

        // Calculate average
        const averageRenderTime = renderTimes.current.reduce((sum, time) => sum + time, 0) / renderTimes.current.length;

        // Get memory usage
        const memoryUsage = (performance as any).memory?.usedJSHeapSize || 0;

        // Update metrics
        const newMetrics: PerformanceMetrics = {
            renderTime,
            renderCount: renderTimes.current.length,
            averageRenderTime,
            memoryUsage,
            lastRender: endTime,
        };

        setMetrics(newMetrics);

        // Log performance warnings
        if (enableLogging) {
            if (renderTime > renderTimeThreshold) {
                console.warn(
                    `⚠️ ${componentName} render took ${renderTime.toFixed(2)}ms ` +
                    `(threshold: ${renderTimeThreshold}ms)`
                );
            }

            // Log every 10th render in development
            if (renderTimes.current.length % 10 === 0) {
                console.log(
                    `📊 ${componentName} performance: ` +
                    `avg ${averageRenderTime.toFixed(2)}ms, ` +
                    `last ${renderTime.toFixed(2)}ms, ` +
                    `renders: ${renderTimes.current.length}`
                );
            }
        }
    }, [componentName, enableLogging, renderTimeThreshold, maxRenderCount]);

    const logMetrics = useCallback(() => {
        console.log(`📊 ${componentName} Performance Metrics:`, {
            renderTime: `${metrics.renderTime.toFixed(2)}ms`,
            averageRenderTime: `${metrics.averageRenderTime.toFixed(2)}ms`,
            renderCount: metrics.renderCount,
            memoryUsage: `${(metrics.memoryUsage / 1024 / 1024).toFixed(2)}MB`,
            lastRender: new Date(metrics.lastRender).toISOString(),
        });
    }, [componentName, metrics]);

    const resetMetrics = useCallback(() => {
        renderTimes.current = [];
        setMetrics({
            renderTime: 0,
            renderCount: 0,
            averageRenderTime: 0,
            memoryUsage: 0,
            lastRender: 0,
        });
    }, []);

    // Auto-start render timing on component mount/update
    useEffect(() => {
        startRender();
        return () => {
            endRender();
        };
    });

    // Run performance optimization checks periodically
    useEffect(() => {
        const interval = setInterval(() => {
            if (performanceOptimizer.shouldOptimize()) {
                performanceOptimizer.runOptimization().catch(console.error);
            }
        }, 30000); // Check every 30 seconds

        return () => clearInterval(interval);
    }, [performanceOptimizer]);

    return {
        metrics,
        startRender,
        endRender,
        logMetrics,
        resetMetrics,
    };
}

/**
 * Higher-order component for automatic performance monitoring
 */
export function withPerformanceMonitor<P extends object>(
    WrappedComponent: React.ComponentType<P>,
    componentName: string,
    options?: Partial<UsePerformanceMonitorOptions>
) {
    const MemoizedComponent = React.memo(WrappedComponent);
    
    const PerformanceMonitoredComponent: React.FC<P> = (props) => {
        const { startRender, endRender, logMetrics } = usePerformanceMonitor({
            componentName,
            ...options,
        });

        useEffect(() => {
            startRender();
            return endRender;
        });

        // Expose logMetrics for debugging
        useEffect(() => {
            if (process.env.NODE_ENV === 'development') {
                (window as any)[`log${componentName}Metrics`] = logMetrics;
            }
        }, [logMetrics]);

        return <MemoizedComponent {...props} />;
    };

    PerformanceMonitoredComponent.displayName = `withPerformanceMonitor(${componentName})`;
    
    return PerformanceMonitoredComponent;
}

export default usePerformanceMonitor;