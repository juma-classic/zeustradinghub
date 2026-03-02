/**
 * Demo Mode Indicator Component
 * 
 * Displays a prominent indicator when the user is in demo mode.
 * Requirements: 29.3
 */

import React, { useState, useEffect } from 'react';
import { getAccountIntegrationService } from '../../services/auto-strategy/account-integration.service';
import './DemoModeIndicator.scss';

const DemoModeIndicator: React.FC = () => {
    const [isDemo, setIsDemo] = useState<boolean>(false);
    const [accountInfo, setAccountInfo] = useState<{ loginid: string; balance: number } | null>(null);
    const accountService = getAccountIntegrationService();

    useEffect(() => {
        // Check demo mode status on mount
        checkDemoMode();

        // Check periodically for account changes
        const interval = setInterval(checkDemoMode, 5000);

        return () => clearInterval(interval);
    }, []);

    const checkDemoMode = async () => {
        try {
            const isDemoMode = await accountService.isDemo();
            setIsDemo(isDemoMode);

            // Get account info
            const account = await accountService.getCurrentAccount();
            if (account) {
                setAccountInfo({
                    loginid: account.loginid,
                    balance: account.balance,
                });
            }
        } catch (error) {
            console.error('Error checking demo mode:', error);
        }
    };

    if (!isDemo) {
        return null;
    }

    return (
        <div className="demo-mode-indicator">
            <div className="demo-mode-indicator__icon">🎮</div>
            <div className="demo-mode-indicator__content">
                <div className="demo-mode-indicator__title">DEMO MODE</div>
                <div className="demo-mode-indicator__subtitle">Virtual Money Only</div>
                {accountInfo && (
                    <div className="demo-mode-indicator__details">
                        <span className="demo-mode-indicator__account">{accountInfo.loginid}</span>
                        <span className="demo-mode-indicator__balance">
                            Balance: ${accountInfo.balance.toFixed(2)}
                        </span>
                    </div>
                )}
            </div>
        </div>
    );
};

export default DemoModeIndicator;
