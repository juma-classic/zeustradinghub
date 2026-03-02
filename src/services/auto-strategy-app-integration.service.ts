/**
 * Auto Strategy Controller Application Integration Service
 * 
 * This service handles the integration of the Auto Strategy Controller
 * with the main application, including initialization, cleanup, and
 * lifecycle management.
 */

import { getAutoStrategyController } from './auto-strategy/auto-strategy-controller.service';
import type { IAutoStrategyController } from './auto-strategy/auto-strategy-controller.service';

class AutoStrategyAppIntegration {
    private controller: IAutoStrategyController | null = null;
    private isInitialized = false;
    private isStarted = false;

    /**
     * Initialize the Auto Strategy Controller
     */
    async initialize(): Promise<void> {
        if (this.isInitialized) {
            console.log('Auto Strategy Controller already initialized');
            return;
        }

        try {
            console.log('🚀 Initializing Auto Strategy Controller...');
            
            // Get the controller instance
            this.controller = getAutoStrategyController();
            
            // Initialize the controller
            await this.controller.initialize();
            
            this.isInitialized = true;
            console.log('✅ Auto Strategy Controller initialized successfully');
        } catch (error) {
            console.error('❌ Failed to initialize Auto Strategy Controller:', error);
            throw error;
        }
    }

    /**
     * Start the Auto Strategy Controller
     */
    async start(): Promise<void> {
        if (!this.isInitialized) {
            await this.initialize();
        }

        if (this.isStarted) {
            console.log('Auto Strategy Controller already started');
            return;
        }

        try {
            console.log('▶️ Starting Auto Strategy Controller...');
            
            if (!this.controller) {
                throw new Error('Controller not initialized');
            }

            await this.controller.start();
            
            this.isStarted = true;
            console.log('✅ Auto Strategy Controller started successfully');
        } catch (error) {
            console.error('❌ Failed to start Auto Strategy Controller:', error);
            throw error;
        }
    }

    /**
     * Stop the Auto Strategy Controller
     */
    async stop(): Promise<void> {
        if (!this.isStarted) {
            console.log('Auto Strategy Controller not started');
            return;
        }

        try {
            console.log('⏹️ Stopping Auto Strategy Controller...');
            
            if (!this.controller) {
                throw new Error('Controller not initialized');
            }

            await this.controller.stop();
            
            this.isStarted = false;
            console.log('✅ Auto Strategy Controller stopped successfully');
        } catch (error) {
            console.error('❌ Failed to stop Auto Strategy Controller:', error);
            throw error;
        }
    }

    /**
     * Emergency stop - immediately halt all operations
     */
    async emergencyStop(): Promise<void> {
        try {
            console.log('🛑 Emergency stopping Auto Strategy Controller...');
            
            if (this.controller) {
                await this.controller.emergencyStop();
            }
            
            this.isStarted = false;
            console.log('✅ Auto Strategy Controller emergency stopped');
        } catch (error) {
            console.error('❌ Failed to emergency stop Auto Strategy Controller:', error);
            throw error;
        }
    }

    /**
     * Cleanup resources on app shutdown
     */
    async cleanup(): Promise<void> {
        try {
            console.log('🧹 Cleaning up Auto Strategy Controller...');
            
            if (this.isStarted) {
                await this.stop();
            }
            
            this.controller = null;
            this.isInitialized = false;
            
            console.log('✅ Auto Strategy Controller cleanup completed');
        } catch (error) {
            console.error('❌ Failed to cleanup Auto Strategy Controller:', error);
        }
    }

    /**
     * Get the controller instance
     */
    getController(): IAutoStrategyController | null {
        return this.controller;
    }

    /**
     * Check if the controller is initialized
     */
    isControllerInitialized(): boolean {
        return this.isInitialized;
    }

    /**
     * Check if the controller is started
     */
    isControllerStarted(): boolean {
        return this.isStarted;
    }
}

// Singleton instance
let autoStrategyAppIntegration: AutoStrategyAppIntegration | null = null;

/**
 * Get the Auto Strategy App Integration singleton instance
 */
export function getAutoStrategyAppIntegration(): AutoStrategyAppIntegration {
    if (!autoStrategyAppIntegration) {
        autoStrategyAppIntegration = new AutoStrategyAppIntegration();
    }
    return autoStrategyAppIntegration;
}

/**
 * Initialize Auto Strategy Controller on app startup
 */
export async function initializeAutoStrategyController(): Promise<void> {
    const integration = getAutoStrategyAppIntegration();
    await integration.initialize();
}

/**
 * Start Auto Strategy Controller
 */
export async function startAutoStrategyController(): Promise<void> {
    const integration = getAutoStrategyAppIntegration();
    await integration.start();
}

/**
 * Stop Auto Strategy Controller on app shutdown
 */
export async function stopAutoStrategyController(): Promise<void> {
    const integration = getAutoStrategyAppIntegration();
    await integration.stop();
}

/**
 * Emergency stop Auto Strategy Controller
 */
export async function emergencyStopAutoStrategyController(): Promise<void> {
    const integration = getAutoStrategyAppIntegration();
    await integration.emergencyStop();
}

/**
 * Cleanup Auto Strategy Controller resources
 */
export async function cleanupAutoStrategyController(): Promise<void> {
    const integration = getAutoStrategyAppIntegration();
    await integration.cleanup();
}

export default AutoStrategyAppIntegration;