/**
 * Auto Strategy Controller Performance Optimizer
 * 
 * This service handles performance optimizations for the Auto Strategy Controller,
 * including strategy evaluation performance, tick buffer operations, and UI optimizations.
 */

import type { Strategy, Tick } from '../../types/auto-strategy.types';

interface PerformanceMetrics {
    evaluationTime: number;
    tickProcessingTime: number;
    memoryUsage: number;
    activeStrategies: number;
    tickBufferSize: number;
    lastOptimization: number;
}

interface OptimizationConfig {
    maxEvaluationTime: number; // Maximum time allowed for strategy evaluation (ms)
    tickBufferOptimizationThreshold: number; // When to optimize tick buffer
    memoryOptimizationThreshold: number; // Memory usage threshold for optimization
    evaluationBatchSize: number; // Number of strategies to evaluate in parallel
    debounceInterval: number; // Debounce interval for rapid evaluations
}

class PerformanceOptimizer {
    private metrics: PerformanceMetrics = {
        evaluationTime: 0,
        tickProcessingTime: 0,
        memoryUsage: 0,
        activeStrategies: 0,
        tickBufferSize: 0,
        lastOptimization: Date.now(),
    };

    private config: OptimizationConfig = {
        maxEvaluationTime: 1000, // 1 second max evaluation time
        tickBufferOptimizationThreshold: 5000, // Optimize when buffer > 5000 ticks
        memoryOptimizationThreshold: 100 * 1024 * 1024, // 100MB threshold
        evaluationBatchSize: 5, // Evaluate 5 strategies at once
        debounceInterval: 100, // 100ms debounce
    };

    private evaluationQueue: Map<string, Strategy> = new Map();
    private debounceTimer: NodeJS.Timeout | null = null;
    private memoizedResults: Map<string, { result: any; timestamp: number }> = new Map();
    private readonly MEMOIZATION_TTL = 5000; // 5 seconds

    /**
     * Profile strategy evaluation performance
     */
    async profileStrategyEvaluation<T>(
        operation: () => Promise<T>,
        strategyId: string
    ): Promise<{ result: T; metrics: { duration: number; memoryDelta: number } }> {
        const startTime = performance.now();
        const startMemory = this.getMemoryUsage();

        try {
            const result = await operation();
            
            const endTime = performance.now();
            const endMemory = this.getMemoryUsage();
            
            const duration = endTime - startTime;
            const memoryDelta = endMemory - startMemory;

            // Update metrics
            this.metrics.evaluationTime = duration;
            this.metrics.memoryUsage = endMemory;

            // Log performance warnings
            if (duration > this.config.maxEvaluationTime) {
                console.warn(`⚠️ Strategy ${strategyId} evaluation took ${duration.toFixed(2)}ms (threshold: ${this.config.maxEvaluationTime}ms)`);
            }

            return {
                result,
                metrics: { duration, memoryDelta }
            };
        } catch (error) {
            const endTime = performance.now();
            const duration = endTime - startTime;
            
            console.error(`❌ Strategy ${strategyId} evaluation failed after ${duration.toFixed(2)}ms:`, error);
            throw error;
        }
    }

    /**
     * Optimize tick buffer operations using circular buffer and batch processing
     */
    optimizeTickBuffer(ticks: Tick[], maxSize: number = 1000): Tick[] {
        const startTime = performance.now();

        // If buffer is within limits, return as-is
        if (ticks.length <= maxSize) {
            return ticks;
        }

        // Use efficient array slicing to maintain most recent ticks
        const optimizedTicks = ticks.slice(-maxSize);
        
        const duration = performance.now() - startTime;
        this.metrics.tickProcessingTime = duration;
        this.metrics.tickBufferSize = optimizedTicks.length;

        console.log(`🔧 Optimized tick buffer: ${ticks.length} → ${optimizedTicks.length} ticks in ${duration.toFixed(2)}ms`);
        
        return optimizedTicks;
    }

    /**
     * Implement memoization for expensive calculations
     */
    memoize<T>(key: string, calculation: () => T): T {
        const cached = this.memoizedResults.get(key);
        const now = Date.now();

        // Return cached result if still valid
        if (cached && (now - cached.timestamp) < this.MEMOIZATION_TTL) {
            return cached.result as T;
        }

        // Calculate new result
        const result = calculation();
        
        // Cache the result
        this.memoizedResults.set(key, {
            result,
            timestamp: now
        });

        // Clean up old cache entries
        this.cleanupMemoizationCache();

        return result;
    }

    /**
     * Batch strategy evaluations to reduce overhead
     */
    async batchEvaluateStrategies(
        strategies: Strategy[],
        evaluationFn: (strategy: Strategy) => Promise<any>
    ): Promise<Map<string, any>> {
        const results = new Map<string, any>();
        const batches = this.createBatches(strategies, this.config.evaluationBatchSize);

        for (const batch of batches) {
            // Process batch in parallel
            const batchPromises = batch.map(async (strategy) => {
                try {
                    const result = await evaluationFn(strategy);
                    return { strategyId: strategy.id, result };
                } catch (error) {
                    console.error(`❌ Failed to evaluate strategy ${strategy.id}:`, error);
                    return { strategyId: strategy.id, result: null, error };
                }
            });

            const batchResults = await Promise.all(batchPromises);
            
            // Collect results
            batchResults.forEach(({ strategyId, result }) => {
                if (result !== null) {
                    results.set(strategyId, result);
                }
            });
        }

        return results;
    }

    /**
     * Debounce rapid strategy evaluations
     */
    debounceEvaluation(strategyId: string, strategy: Strategy, evaluationFn: () => void): void {
        // Add to queue
        this.evaluationQueue.set(strategyId, strategy);

        // Clear existing timer
        if (this.debounceTimer) {
            clearTimeout(this.debounceTimer);
        }

        // Set new timer
        this.debounceTimer = setTimeout(() => {
            // Process queued evaluations
            const strategiesToEvaluate = Array.from(this.evaluationQueue.values());
            this.evaluationQueue.clear();

            if (strategiesToEvaluate.length > 0) {
                console.log(`🔄 Processing ${strategiesToEvaluate.length} debounced strategy evaluations`);
                evaluationFn();
            }
        }, this.config.debounceInterval);
    }

    /**
     * Optimize memory usage by cleaning up unused resources
     */
    optimizeMemoryUsage(): void {
        const startTime = performance.now();
        const startMemory = this.getMemoryUsage();

        // Clean up memoization cache
        this.cleanupMemoizationCache();

        // Force garbage collection if available (development only)
        if (process.env.NODE_ENV === 'development' && (global as any).gc) {
            (global as any).gc();
        }

        const endTime = performance.now();
        const endMemory = this.getMemoryUsage();
        const duration = endTime - startTime;
        const memoryFreed = startMemory - endMemory;

        console.log(`🧹 Memory optimization completed in ${duration.toFixed(2)}ms, freed ${this.formatBytes(memoryFreed)}`);
    }

    /**
     * Get current performance metrics
     */
    getMetrics(): PerformanceMetrics {
        return { ...this.metrics };
    }

    /**
     * Update optimization configuration
     */
    updateConfig(newConfig: Partial<OptimizationConfig>): void {
        this.config = { ...this.config, ...newConfig };
        console.log('🔧 Performance optimizer configuration updated:', newConfig);
    }

    /**
     * Check if optimization is needed
     */
    shouldOptimize(): boolean {
        const now = Date.now();
        const timeSinceLastOptimization = now - this.metrics.lastOptimization;
        
        return (
            this.metrics.evaluationTime > this.config.maxEvaluationTime ||
            this.metrics.tickBufferSize > this.config.tickBufferOptimizationThreshold ||
            this.metrics.memoryUsage > this.config.memoryOptimizationThreshold ||
            timeSinceLastOptimization > 60000 // Optimize every minute
        );
    }

    /**
     * Run automatic optimization
     */
    async runOptimization(): Promise<void> {
        if (!this.shouldOptimize()) {
            return;
        }

        console.log('🚀 Running automatic performance optimization...');
        
        const startTime = performance.now();
        
        // Optimize memory
        this.optimizeMemoryUsage();
        
        // Update last optimization time
        this.metrics.lastOptimization = Date.now();
        
        const duration = performance.now() - startTime;
        console.log(`✅ Performance optimization completed in ${duration.toFixed(2)}ms`);
    }

    // Private helper methods

    private getMemoryUsage(): number {
        if (typeof performance !== 'undefined' && (performance as any).memory) {
            return (performance as any).memory.usedJSHeapSize;
        }
        return 0;
    }

    private createBatches<T>(items: T[], batchSize: number): T[][] {
        const batches: T[][] = [];
        for (let i = 0; i < items.length; i += batchSize) {
            batches.push(items.slice(i, i + batchSize));
        }
        return batches;
    }

    private cleanupMemoizationCache(): void {
        const now = Date.now();
        const keysToDelete: string[] = [];

        for (const [key, cached] of this.memoizedResults.entries()) {
            if (now - cached.timestamp > this.MEMOIZATION_TTL) {
                keysToDelete.push(key);
            }
        }

        keysToDelete.forEach(key => this.memoizedResults.delete(key));
        
        if (keysToDelete.length > 0) {
            console.log(`🧹 Cleaned up ${keysToDelete.length} expired cache entries`);
        }
    }

    private formatBytes(bytes: number): string {
        if (bytes === 0) return '0 Bytes';
        const k = 1024;
        const sizes = ['Bytes', 'KB', 'MB', 'GB'];
        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
    }
}

// Singleton instance
let performanceOptimizer: PerformanceOptimizer | null = null;

/**
 * Get the Performance Optimizer singleton instance
 */
export function getPerformanceOptimizer(): PerformanceOptimizer {
    if (!performanceOptimizer) {
        performanceOptimizer = new PerformanceOptimizer();
    }
    return performanceOptimizer;
}

export default PerformanceOptimizer;