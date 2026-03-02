/**
 * Account Integration Service
 * 
 * Integrates Auto Strategy Controller with the existing authentication and account system.
 * Handles account balance checking, account type detection, and account switching.
 * 
 * Key Features:
 * - Account balance retrieval from Deriv API
 * - Account type detection (demo vs real)
 * - Account switching detection
 * - Demo mode confirmation flow
 * - Account balance validation
 * 
 * Requirements: 28.1, 28.2, 28.3, 28.4, 28.5, 29.1, 29.2, 29.3, 29.4, 29.5
 */

import { derivAPI } from '../../utils/deriv-trading-api';
import { fastLaneAPI } from '../../utils/fast-lane/fast-lane-api';

/**
 * Account information
 */
export interface AccountInfo {
    loginid: string;
    balance: number;
    currency: string;
    isDemo: boolean;
    isVirtual: boolean;
}

/**
 * Account type restriction
 */
export enum AccountTypeRestriction {
    DemoOnly = 'demo_only',
    RealOnly = 'real_only',
    Both = 'both',
}

/**
 * Account switch event
 */
export interface AccountSwitchEvent {
    previousLoginId: string;
    currentLoginId: string;
    previousAccountType: 'demo' | 'real';
    currentAccountType: 'demo' | 'real';
    timestamp: number;
}

/**
 * Interface for Account Integration Service
 */
export interface IAccountIntegrationService {
    // Account information
    getCurrentAccount(): Promise<AccountInfo | null>;
    getAccountBalance(): Promise<number>;
    isDemo(): Promise<boolean>;
    
    // Balance validation
    validateBalance(requiredAmount: number): Promise<{ valid: boolean; reason?: string }>;
    
    // Account type restrictions
    validateAccountType(restriction: AccountTypeRestriction): Promise<{ valid: boolean; reason?: string }>;
    
    // Account switching
    startAccountSwitchMonitoring(callback: (event: AccountSwitchEvent) => void): void;
    stopAccountSwitchMonitoring(): void;
    
    // Demo mode confirmation
    requireDemoModeConfirmation(): Promise<boolean>;
}

/**
 * Account Integration Service Implementation
 */
export class AccountIntegrationService implements IAccountIntegrationService {
    private currentLoginId: string | null = null;
    private accountSwitchCallback: ((event: AccountSwitchEvent) => void) | null = null;
    private monitoringInterval: NodeJS.Timeout | null = null;
    private readonly MONITORING_INTERVAL_MS = 2000; // Check every 2 seconds
    
    constructor() {
        console.log('🔐 AccountIntegrationService initialized');
        this.initializeCurrentAccount();
    }

    /**
     * Initialize current account from localStorage
     */
    private initializeCurrentAccount(): void {
        try {
            this.currentLoginId = localStorage.getItem('active_loginid');
            console.log(`🔐 Current account: ${this.currentLoginId || 'none'}`);
        } catch (error) {
            console.error('🔐 Error initializing current account:', error);
        }
    }

    /**
     * Get current account information
     * Requirements: 28.1
     */
    async getCurrentAccount(): Promise<AccountInfo | null> {
        try {
            // Try to get account info from derivAPI
            if (derivAPI.isReady()) {
                const accountInfo = await derivAPI.authorize();
                return {
                    loginid: accountInfo.loginid,
                    balance: accountInfo.balance,
                    currency: accountInfo.currency,
                    isDemo: accountInfo.isVirtual,
                    isVirtual: accountInfo.isVirtual,
                };
            }

            // Fallback to fastLaneAPI
            if (fastLaneAPI.isConnected()) {
                const authResponse = await fastLaneAPI.authorize();
                const balance = await fastLaneAPI.getBalance();
                
                return {
                    loginid: authResponse.authorize.loginid,
                    balance: balance,
                    currency: authResponse.authorize.currency,
                    isDemo: authResponse.authorize.loginid.startsWith('VRT'),
                    isVirtual: authResponse.authorize.loginid.startsWith('VRT'),
                };
            }

            // Fallback to localStorage
            const activeLoginId = localStorage.getItem('active_loginid');
            if (activeLoginId) {
                return {
                    loginid: activeLoginId,
                    balance: 0,
                    currency: 'USD',
                    isDemo: activeLoginId.startsWith('VRT'),
                    isVirtual: activeLoginId.startsWith('VRT'),
                };
            }

            console.warn('🔐 No account information available');
            return null;

        } catch (error) {
            console.error('🔐 Error getting current account:', error);
            return null;
        }
    }

    /**
     * Get account balance
     * Requirements: 28.2
     */
    async getAccountBalance(): Promise<number> {
        try {
            // Try derivAPI first
            if (derivAPI.isReady()) {
                const balance = await derivAPI.getBalance();
                console.log(`🔐 Account balance: ${balance}`);
                return balance;
            }

            // Try fastLaneAPI
            if (fastLaneAPI.isConnected()) {
                const balance = await fastLaneAPI.getBalance();
                console.log(`🔐 Account balance: ${balance}`);
                return balance;
            }

            // Fallback: try to get from localStorage (client.accounts)
            const accounts = localStorage.getItem('client.accounts');
            const activeLoginId = localStorage.getItem('active_loginid');
            
            if (accounts && activeLoginId) {
                const accountsData = JSON.parse(accounts);
                const activeAccount = accountsData[activeLoginId];
                if (activeAccount?.balance !== undefined) {
                    console.log(`🔐 Account balance from localStorage: ${activeAccount.balance}`);
                    return parseFloat(activeAccount.balance);
                }
            }

            console.warn('🔐 Unable to retrieve account balance, returning 0');
            return 0;

        } catch (error) {
            console.error('🔐 Error getting account balance:', error);
            return 0;
        }
    }

    /**
     * Check if current account is demo
     * Requirements: 28.4, 29.1
     */
    async isDemo(): Promise<boolean> {
        try {
            const account = await this.getCurrentAccount();
            if (account) {
                return account.isDemo;
            }

            // Fallback: check loginid from localStorage
            const activeLoginId = localStorage.getItem('active_loginid');
            if (activeLoginId) {
                return activeLoginId.startsWith('VRT');
            }

            return false;

        } catch (error) {
            console.error('🔐 Error checking demo status:', error);
            return false;
        }
    }

    /**
     * Validate account has sufficient balance
     * Requirements: 28.2, 28.3
     */
    async validateBalance(requiredAmount: number): Promise<{ valid: boolean; reason?: string }> {
        try {
            const balance = await this.getAccountBalance();
            
            if (balance < requiredAmount) {
                return {
                    valid: false,
                    reason: `Insufficient balance. Required: ${requiredAmount}, Available: ${balance}`,
                };
            }

            return { valid: true };

        } catch (error) {
            console.error('🔐 Error validating balance:', error);
            return {
                valid: false,
                reason: 'Unable to verify account balance',
            };
        }
    }

    /**
     * Validate account type matches restriction
     * Requirements: 28.4, 29.2
     */
    async validateAccountType(restriction: AccountTypeRestriction): Promise<{ valid: boolean; reason?: string }> {
        try {
            const isDemo = await this.isDemo();

            switch (restriction) {
                case AccountTypeRestriction.DemoOnly:
                    if (!isDemo) {
                        return {
                            valid: false,
                            reason: 'This strategy is configured for demo accounts only',
                        };
                    }
                    break;

                case AccountTypeRestriction.RealOnly:
                    if (isDemo) {
                        return {
                            valid: false,
                            reason: 'This strategy is configured for real accounts only',
                        };
                    }
                    break;

                case AccountTypeRestriction.Both:
                    // No restriction
                    break;
            }

            return { valid: true };

        } catch (error) {
            console.error('🔐 Error validating account type:', error);
            return {
                valid: false,
                reason: 'Unable to verify account type',
            };
        }
    }

    /**
     * Start monitoring for account switches
     * Requirements: 28.5
     */
    startAccountSwitchMonitoring(callback: (event: AccountSwitchEvent) => void): void {
        if (this.monitoringInterval) {
            console.warn('🔐 Account switch monitoring already active');
            return;
        }

        this.accountSwitchCallback = callback;
        
        console.log('🔐 Starting account switch monitoring...');
        
        this.monitoringInterval = setInterval(() => {
            this.checkForAccountSwitch();
        }, this.MONITORING_INTERVAL_MS);
    }

    /**
     * Stop monitoring for account switches
     */
    stopAccountSwitchMonitoring(): void {
        if (this.monitoringInterval) {
            clearInterval(this.monitoringInterval);
            this.monitoringInterval = null;
            this.accountSwitchCallback = null;
            console.log('🔐 Account switch monitoring stopped');
        }
    }

    /**
     * Check for account switch
     */
    private async checkForAccountSwitch(): Promise<void> {
        try {
            const currentLoginId = localStorage.getItem('active_loginid');
            
            if (currentLoginId && currentLoginId !== this.currentLoginId) {
                console.log(`🔐 Account switch detected: ${this.currentLoginId} → ${currentLoginId}`);
                
                const previousIsDemo = this.currentLoginId?.startsWith('VRT') || false;
                const currentIsDemo = currentLoginId.startsWith('VRT');
                
                const event: AccountSwitchEvent = {
                    previousLoginId: this.currentLoginId || '',
                    currentLoginId: currentLoginId,
                    previousAccountType: previousIsDemo ? 'demo' : 'real',
                    currentAccountType: currentIsDemo ? 'demo' : 'real',
                    timestamp: Date.now(),
                };
                
                // Update current login ID
                this.currentLoginId = currentLoginId;
                
                // Notify callback
                if (this.accountSwitchCallback) {
                    this.accountSwitchCallback(event);
                }
            }

        } catch (error) {
            console.error('🔐 Error checking for account switch:', error);
        }
    }

    /**
     * Require demo mode confirmation
     * Requirements: 29.5
     */
    async requireDemoModeConfirmation(): Promise<boolean> {
        const isDemo = await this.isDemo();
        
        if (!isDemo) {
            // Not in demo mode, no confirmation needed
            return true;
        }

        // Show confirmation dialog
        return new Promise((resolve) => {
            const confirmed = window.confirm(
                '⚠️ Demo Mode Confirmation\n\n' +
                'You are currently in DEMO mode. Strategies will execute with virtual money only.\n\n' +
                'Do you want to activate strategies in demo mode?'
            );
            
            resolve(confirmed);
        });
    }

    /**
     * Get demo mode indicator text
     * Requirements: 29.3
     */
    async getDemoModeIndicator(): Promise<string | null> {
        const isDemo = await this.isDemo();
        
        if (isDemo) {
            return '🎮 DEMO MODE - Virtual Money Only';
        }
        
        return null;
    }
}

// ============================================================================
// Singleton Instance
// ============================================================================

let accountIntegrationServiceInstance: AccountIntegrationService | null = null;

/**
 * Get singleton instance of Account Integration Service
 */
export function getAccountIntegrationService(): AccountIntegrationService {
    if (!accountIntegrationServiceInstance) {
        accountIntegrationServiceInstance = new AccountIntegrationService();
    }
    return accountIntegrationServiceInstance;
}

/**
 * Reset singleton instance (for testing)
 */
export function resetAccountIntegrationService(): void {
    if (accountIntegrationServiceInstance) {
        accountIntegrationServiceInstance.stopAccountSwitchMonitoring();
    }
    accountIntegrationServiceInstance = null;
}
