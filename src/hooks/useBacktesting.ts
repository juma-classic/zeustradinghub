/**
 * React hook for backtesting functionality
 */

import { useState, useEffect, useCallback } from 'react';
import {
    BacktestingMode,
    BacktestingProgress,
    BacktestingReport,
    BacktestingConfig,
} from '../types/auto-strategy.types';
import { BacktestingService } from '../services/auto-strategy/backtesting.service';

export interface UseBacktestingReturn {
    mode: BacktestingMode;
    isRunning: boolean;
    progress: BacktestingProgress | null;
    report: BacktestingReport | null;
    enableBacktestingMode: () => void;
    disableBacktestingMode: () => void;
    runBacktest: (config: BacktestingConfig) => Promise<BacktestingReport>;
    stopBacktest: () => void;
    exportReport: () => void;
}

/**
 * Hook for accessing backtesting functionality
 */
export function useBacktesting(backtestingService: BacktestingService): UseBacktestingReturn {
    const [mode, setMode] = useState<BacktestingMode>(backtestingService.getMode());
    const [isRunning, setIsRunning] = useState(backtestingService.isBacktesting());
    const [progress, setProgress] = useState<BacktestingProgress | null>(null);
    const [report, setReport] = useState<BacktestingReport | null>(backtestingService.getLastReport());

    useEffect(() => {
        // Subscribe to progress updates
        const unsubscribeProgress = backtestingService.onProgress(setProgress);

        // Subscribe to completion
        const unsubscribeComplete = backtestingService.onComplete((newReport) => {
            setReport(newReport);
            setIsRunning(false);
            setProgress(null);
        });

        // Update mode and running state
        const interval = setInterval(() => {
            setMode(backtestingService.getMode());
            setIsRunning(backtestingService.isBacktesting());
        }, 1000);

        return () => {
            unsubscribeProgress();
            unsubscribeComplete();
            clearInterval(interval);
        };
    }, [backtestingService]);

    const enableBacktestingMode = useCallback(() => {
        backtestingService.enableBacktestingMode();
        setMode(BacktestingMode.Backtesting);
    }, [backtestingService]);

    const disableBacktestingMode = useCallback(() => {
        backtestingService.disableBacktestingMode();
        setMode(BacktestingMode.Live);
    }, [backtestingService]);

    const runBacktest = useCallback(async (config: BacktestingConfig) => {
        setIsRunning(true);
        setProgress(null);
        try {
            const result = await backtestingService.runBacktest(config);
            return result;
        } catch (error) {
            setIsRunning(false);
            throw error;
        }
    }, [backtestingService]);

    const stopBacktest = useCallback(() => {
        backtestingService.stopBacktest();
        setIsRunning(false);
    }, [backtestingService]);

    const exportReport = useCallback(() => {
        if (!report) return;

        const json = backtestingService.exportReport(report);
        const blob = new Blob([json], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `backtest-report-${Date.now()}.json`;
        a.click();
        URL.revokeObjectURL(url);
    }, [backtestingService, report]);

    return {
        mode,
        isRunning,
        progress,
        report,
        enableBacktestingMode,
        disableBacktestingMode,
        runBacktest,
        stopBacktest,
        exportReport,
    };
}
