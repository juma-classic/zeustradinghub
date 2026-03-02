/**
 * React hook for accessing Bot Controller
 * Provides access to bot auto-start status and manual override functionality
 * 
 * Requirements: 26.4, 26.5
 */

import { useState, useEffect } from 'react';
import { getBotController } from '../services/auto-strategy/bot-controller.service';

/**
 * Hook to check if a bot is auto-started by Auto Strategy Controller
 */
export function useIsAutoStarted(botId: string | undefined): boolean {
    const [isAutoStarted, setIsAutoStarted] = useState(false);

    useEffect(() => {
        if (!botId) {
            setIsAutoStarted(false);
            return;
        }

        const controller = getBotController();
        const checkAutoStarted = () => {
            setIsAutoStarted(controller.isAutoStarted(botId));
        };

        // Check initially
        checkAutoStarted();

        // Set up polling to check for changes
        const interval = setInterval(checkAutoStarted, 1000);

        return () => clearInterval(interval);
    }, [botId]);

    return isAutoStarted;
}

/**
 * Hook to get all auto-started bot IDs
 */
export function useAutoStartedBots(): string[] {
    const [autoStartedBots, setAutoStartedBots] = useState<string[]>([]);

    useEffect(() => {
        const controller = getBotController();
        
        const updateAutoStartedBots = () => {
            setAutoStartedBots(controller.getAutoStartedBots());
        };

        // Check initially
        updateAutoStartedBots();

        // Set up polling to check for changes
        const interval = setInterval(updateAutoStartedBots, 1000);

        return () => clearInterval(interval);
    }, []);

    return autoStartedBots;
}

/**
 * Hook to access bot controller methods
 */
export function useBotController() {
    const controller = getBotController();

    return {
        isAutoStarted: (botId: string) => controller.isAutoStarted(botId),
        clearAutoStartedFlag: (botId: string) => controller.clearAutoStartedFlag(botId),
        getAutoStartedBots: () => controller.getAutoStartedBots(),
        getAvailableBots: () => controller.getAvailableBots(),
        getBotConfiguration: (botId: string) => controller.getBotConfiguration(botId),
    };
}
