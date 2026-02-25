/**
 * DEMO MODE MANAGER
 * For admin testing purposes only
 *
 * IMPORTANT SAFEGUARDS:
 * - Only works with demo/virtual accounts
 * - Clearly labeled as demo mode in UI
 * - Separate from production trading
 * - No real money involved
 */

interface ContractResult {
    contract_type?: string;
    buy_price?: number | string;
    profit?: number;
    status?: string;
    is_demo?: boolean;
    [key: string]: any;
}

interface DemoModeStatus {
    enabled: boolean;
    isVirtualAccount: boolean;
    accountId: string;
    balance: number | null;
}

class DemoModeManager {
    private readonly STORAGE_KEY = 'admin_demo_mode';
    private readonly DEMO_BALANCE_KEY = 'demoBalance';

    /**
     * Enable demo mode (testing only)
     */
    enableDemoMode(): boolean {
        if (!this.isVirtualAccount()) {
            console.error('Demo mode only works with virtual accounts');
            return false;
        }
        localStorage.setItem(this.STORAGE_KEY, 'true');
        console.log('✅ Demo mode enabled for testing');

        // Dispatch event
        window.dispatchEvent(
            new CustomEvent('demo-mode-changed', {
                detail: { enabled: true },
            })
        );

        return true;
    }

    /**
     * Disable demo mode
     */
    disableDemoMode(): void {
        localStorage.setItem(this.STORAGE_KEY, 'false');
        console.log('✅ Demo mode disabled');

        // Dispatch event
        window.dispatchEvent(
            new CustomEvent('demo-mode-changed', {
                detail: { enabled: false },
            })
        );
    }

    /**
     * Check if demo mode is active
     */
    isDemoModeEnabled(): boolean {
        return localStorage.getItem(this.STORAGE_KEY) === 'true';
    }

    /**
     * Check if current account is virtual/demo
     */
    isVirtualAccount(): boolean {
        const accountId = this.getCurrentAccountId();
        const isVirtual =
            accountId && (accountId.startsWith('VR') || accountId.startsWith('VRTC') || accountId.startsWith('DEMO'));
        return Boolean(isVirtual);
    }

    /**
     * Get current account ID
     */
    getCurrentAccountId(): string {
        return localStorage.getItem('active_loginid') || localStorage.getItem('currentAccountId') || '';
    }

    /**
     * Set demo balance for testing
     */
    setDemoBalance(accountId: string, balance: number): boolean {
        if (!this.isDemoModeEnabled() || !this.isVirtualAccount()) {
            return false;
        }
        const key = `${this.DEMO_BALANCE_KEY}_${accountId}`;
        localStorage.setItem(key, balance.toString());

        // Dispatch event
        window.dispatchEvent(
            new CustomEvent('demo-balance-changed', {
                detail: { accountId, balance },
            })
        );

        return true;
    }

    /**
     * Get demo balance
     */
    getDemoBalance(accountId: string): number | null {
        if (!this.isDemoModeEnabled()) {
            return null;
        }
        const key = `${this.DEMO_BALANCE_KEY}_${accountId}`;
        const balance = localStorage.getItem(key);
        return balance ? parseFloat(balance) : 10000; // Default demo balance
    }

    /**
     * Process contract result with demo mode adjustments
     */
    processContractResult(contract: ContractResult): ContractResult {
        // Only apply demo mode if enabled and on virtual account
        if (!this.isDemoModeEnabled() || !this.isVirtualAccount()) {
            return contract; // Return original contract
        }

        // Create a copy to avoid mutating original
        const demoContract = { ...contract };

        // Apply demo mode logic for specific contract types
        if (this.shouldApplyDemoLogic(contract.contract_type || '')) {
            demoContract.profit = this.calculateDemoProfit(contract);
            demoContract.status = 'won';
            demoContract.is_demo = true; // Mark as demo result

            console.log('🎭 Demo mode adjusted contract:', {
                original: contract.profit,
                adjusted: demoContract.profit,
                type: contract.contract_type,
            });
        }

        return demoContract;
    }

    /**
     * Check if contract type should have demo logic applied
     */
    private shouldApplyDemoLogic(contractType: string): boolean {
        const demoContractTypes = ['DIGITMATCH', 'DIGITODD', 'DIGITEVEN', 'DIGITOVER', 'DIGITUNDER', 'CALL', 'PUT'];
        return demoContractTypes.includes(contractType);
    }

    /**
     * Calculate demo profit (for testing UI)
     */
    private calculateDemoProfit(contract: ContractResult): number {
        const buyPrice = parseFloat(String(contract.buy_price || 0));
        if (buyPrice <= 0) {
            return Math.abs(contract.profit || 0) || 10;
        }
        // Demo profit calculation (2.5x return for demo)
        return buyPrice * 2.5;
    }

    /**
     * Update account balance with demo adjustments
     */
    updateDemoBalance(accountId: string, profitLoss: number): number | null {
        if (!this.isDemoModeEnabled() || !this.isVirtualAccount()) {
            return null;
        }

        const currentBalance = this.getDemoBalance(accountId) || 10000;
        const newBalance = currentBalance + profitLoss;
        this.setDemoBalance(accountId, newBalance);

        return newBalance;
    }

    /**
     * Get demo mode status for UI display
     */
    getDemoModeStatus(): DemoModeStatus {
        const accountId = this.getCurrentAccountId();
        return {
            enabled: this.isDemoModeEnabled(),
            isVirtualAccount: this.isVirtualAccount(),
            accountId,
            balance: this.getDemoBalance(accountId),
        };
    }
}

// Export singleton instance
export const demoModeManager = new DemoModeManager();

// Browser console helpers for testing
if (typeof window !== 'undefined') {
    (window as any).demoMode = {
        enable: () => demoModeManager.enableDemoMode(),
        disable: () => demoModeManager.disableDemoMode(),
        status: () => demoModeManager.getDemoModeStatus(),
        setBalance: (balance: number) => {
            const accountId = demoModeManager.getCurrentAccountId();
            return demoModeManager.setDemoBalance(accountId, balance);
        },
    };
}
