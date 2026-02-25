/**
 * DEMO MODE IMPLEMENTATION
 * For educational and testing purposes only
 *
 * IMPORTANT SAFEGUARDS:
 * - Only works with demo/virtual accounts
 * - Clearly labeled as demo mode in UI
 * - Separate from production trading
 * - No real money involved
 */

class DemoModeManager {
    constructor() {
        this.STORAGE_KEY = 'demoModeEnabled';
        this.DEMO_BALANCE_KEY = 'demoBalance';
        this.DEMO_PROFITS_KEY = 'demoProfits';
    }

    /**
     * Enable demo mode (testing only)
     */
    enableDemoMode() {
        if (!this.isVirtualAccount()) {
            console.error('Demo mode only works with virtual accounts');
            return false;
        }
        localStorage.setItem(this.STORAGE_KEY, 'true');
        console.log('Demo mode enabled for testing');
        return true;
    }

    /**
     * Disable demo mode
     */
    disableDemoMode() {
        localStorage.removeItem(this.STORAGE_KEY);
        localStorage.removeItem(this.DEMO_BALANCE_KEY);
        localStorage.removeItem(this.DEMO_PROFITS_KEY);
        console.log('Demo mode disabled');
    }

    /**
     * Check if demo mode is active
     */
    isDemoModeEnabled() {
        return localStorage.getItem(this.STORAGE_KEY) === 'true';
    }

    /**
     * Check if current account is virtual/demo
     */
    isVirtualAccount() {
        // Check if account ID starts with VR (virtual) or VRTC (virtual test)
        const accountId = this.getCurrentAccountId();
        return accountId && (accountId.startsWith('VR') || accountId.startsWith('DEMO'));
    }

    /**
     * Get current account ID (implement based on your system)
     */
    getCurrentAccountId() {
        // Replace with your actual account ID retrieval logic
        return localStorage.getItem('currentAccountId') || '';
    }

    /**
     * Set demo balance for testing
     */
    setDemoBalance(accountId, balance) {
        if (!this.isDemoModeEnabled() || !this.isVirtualAccount()) {
            return false;
        }
        const key = `${this.DEMO_BALANCE_KEY}_${accountId}`;
        localStorage.setItem(key, balance.toString());
        return true;
    }

    /**
     * Get demo balance
     */
    getDemoBalance(accountId) {
        if (!this.isDemoModeEnabled()) {
            return null;
        }
        const key = `${this.DEMO_BALANCE_KEY}_${accountId}`;
        return parseFloat(localStorage.getItem(key) || '0');
    }

    /**
     * Process contract result with demo mode adjustments
     */
    processContractResult(contract) {
        // Only apply demo mode if enabled and on virtual account
        if (!this.isDemoModeEnabled() || !this.isVirtualAccount()) {
            return contract; // Return original contract
        }

        // Create a copy to avoid mutating original
        const demoContract = { ...contract };

        // Apply demo mode logic for specific contract types
        if (this.shouldApplyDemoLogic(contract.contract_type)) {
            demoContract.profit = this.calculateDemoProfit(contract);
            demoContract.status = 'won';
            demoContract.is_demo = true; // Mark as demo result
        }

        return demoContract;
    }

    /**
     * Check if contract type should have demo logic applied
     */
    shouldApplyDemoLogic(contractType) {
        // Define which contract types get demo adjustments
        const demoContractTypes = ['DIGITMATCH', 'DIGITODD', 'DIGITEVEN'];
        return demoContractTypes.includes(contractType);
    }

    /**
     * Calculate demo profit (for testing UI)
     */
    calculateDemoProfit(contract) {
        const buyPrice = parseFloat(contract.buy_price || 0);
        if (buyPrice <= 0) {
            return Math.abs(contract.profit || 0) || 10;
        }
        // Demo profit calculation (adjust multiplier as needed)
        return buyPrice * 2.5; // 2.5x return for demo
    }

    /**
     * Update account balance with demo adjustments
     */
    updateDemoBalance(accountId, profitLoss) {
        if (!this.isDemoModeEnabled() || !this.isVirtualAccount()) {
            return null;
        }

        const currentBalance = this.getDemoBalance(accountId) || 10000; // Default demo balance
        const newBalance = currentBalance + profitLoss;
        this.setDemoBalance(accountId, newBalance);

        return newBalance;
    }

    /**
     * Get demo mode status for UI display
     */
    getDemoModeStatus() {
        return {
            enabled: this.isDemoModeEnabled(),
            isVirtualAccount: this.isVirtualAccount(),
            accountId: this.getCurrentAccountId(),
            balance: this.getDemoBalance(this.getCurrentAccountId()),
        };
    }
}

// Export singleton instance
const demoMode = new DemoModeManager();

// Browser console helpers for testing
if (typeof window !== 'undefined') {
    window.demoMode = {
        enable: () => demoMode.enableDemoMode(),
        disable: () => demoMode.disableDemoMode(),
        status: () => demoMode.getDemoModeStatus(),
        setBalance: balance => demoMode.setDemoBalance(demoMode.getCurrentAccountId(), balance),
    };
}

export default demoMode;
