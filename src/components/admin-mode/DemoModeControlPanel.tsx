/**
 * Demo Mode Control Panel
 * Admin interface for controlling demo mode settings
 */

import React, { useState, useEffect } from 'react';
import { demoModeManager } from './DemoModeManager';

export const DemoModeControlPanel: React.FC = () => {
    const [status, setStatus] = useState(demoModeManager.getDemoModeStatus());
    const [customBalance, setCustomBalance] = useState('10000');
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Check if admin mode is enabled
        const checkAdminMode = () => {
            const adminEnabled = localStorage.getItem('admin_demo_mode') === 'true';
            setIsVisible(adminEnabled);
        };

        checkAdminMode();

        const handleAdminModeChange = () => {
            checkAdminMode();
            refreshStatus();
        };

        const handleDemoModeChange = () => {
            refreshStatus();
        };

        window.addEventListener('admin-mode-changed', handleAdminModeChange);
        window.addEventListener('demo-mode-changed', handleDemoModeChange);
        window.addEventListener('demo-balance-changed', handleDemoModeChange);

        return () => {
            window.removeEventListener('admin-mode-changed', handleAdminModeChange);
            window.removeEventListener('demo-mode-changed', handleDemoModeChange);
            window.removeEventListener('demo-balance-changed', handleDemoModeChange);
        };
    }, []);

    const refreshStatus = () => {
        setStatus(demoModeManager.getDemoModeStatus());
    };

    const handleToggle = () => {
        if (status.enabled) {
            demoModeManager.disableDemoMode();
        } else {
            demoModeManager.enableDemoMode();
        }
        refreshStatus();
    };

    const handleSetBalance = () => {
        const balance = parseFloat(customBalance);
        if (!isNaN(balance) && balance >= 0) {
            demoModeManager.setDemoBalance(status.accountId, balance);
            refreshStatus();
        } else {
            alert('Please enter a valid balance amount');
        }
    };

    if (!isVisible) {
        return null;
    }

    return (
        <div
            style={{
                position: 'fixed',
                bottom: '20px',
                right: '20px',
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                color: 'white',
                borderRadius: '16px',
                padding: '20px',
                boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
                minWidth: '320px',
                zIndex: 9998,
                fontFamily: "'Inter', sans-serif",
                backdropFilter: 'blur(10px)',
            }}
        >
            <div
                style={{
                    fontSize: '18px',
                    fontWeight: 'bold',
                    marginBottom: '16px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                }}
            >
                <span>🔧</span>
                <span>Admin Demo Control</span>
            </div>

            <div
                style={{
                    background: 'rgba(255,255,255,0.1)',
                    borderRadius: '8px',
                    padding: '12px',
                    marginBottom: '12px',
                }}
            >
                <div style={{ marginBottom: '8px', fontSize: '14px' }}>
                    <strong>Status:</strong> {status.enabled ? '✅ Enabled' : '❌ Disabled'}
                </div>

                <div style={{ marginBottom: '8px', fontSize: '14px' }}>
                    <strong>Account Type:</strong> {status.isVirtualAccount ? '✓ Virtual' : '⚠️ Real'}
                </div>

                {status.enabled && (
                    <>
                        <div style={{ marginBottom: '8px', fontSize: '14px' }}>
                            <strong>Account:</strong> {status.accountId}
                        </div>
                        <div style={{ fontSize: '14px' }}>
                            <strong>Balance:</strong> ${status.balance?.toFixed(2) || '0.00'}
                        </div>
                    </>
                )}
            </div>

            <button
                onClick={handleToggle}
                style={{
                    width: '100%',
                    padding: '12px',
                    marginBottom: '12px',
                    background: status.enabled
                        ? 'linear-gradient(135deg, #f44336 0%, #d32f2f 100%)'
                        : 'linear-gradient(135deg, #4CAF50 0%, #388E3C 100%)',
                    color: 'white',
                    border: 'none',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    fontWeight: 'bold',
                    fontSize: '14px',
                    transition: 'transform 0.2s',
                }}
                onMouseEnter={e => {
                    e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={e => {
                    e.currentTarget.style.transform = 'translateY(0)';
                }}
            >
                {status.enabled ? '🛑 Disable Demo Mode' : '▶️ Enable Demo Mode'}
            </button>

            {status.enabled && (
                <div
                    style={{
                        background: 'rgba(255,255,255,0.1)',
                        borderRadius: '8px',
                        padding: '12px',
                    }}
                >
                    <label
                        style={{
                            display: 'block',
                            marginBottom: '8px',
                            fontSize: '13px',
                            fontWeight: '600',
                        }}
                    >
                        Set Custom Balance:
                    </label>
                    <input
                        type='number'
                        value={customBalance}
                        onChange={e => setCustomBalance(e.target.value)}
                        placeholder='Enter balance'
                        style={{
                            width: '100%',
                            padding: '10px',
                            marginBottom: '8px',
                            border: 'none',
                            borderRadius: '6px',
                            fontSize: '14px',
                            boxSizing: 'border-box',
                        }}
                    />
                    <button
                        onClick={handleSetBalance}
                        style={{
                            width: '100%',
                            padding: '10px',
                            background: 'linear-gradient(135deg, #2196F3 0%, #1976D2 100%)',
                            color: 'white',
                            border: 'none',
                            borderRadius: '6px',
                            cursor: 'pointer',
                            fontWeight: '600',
                            fontSize: '14px',
                            transition: 'transform 0.2s',
                        }}
                        onMouseEnter={e => {
                            e.currentTarget.style.transform = 'translateY(-1px)';
                        }}
                        onMouseLeave={e => {
                            e.currentTarget.style.transform = 'translateY(0)';
                        }}
                    >
                        💰 Update Balance
                    </button>
                </div>
            )}

            <div
                style={{
                    marginTop: '12px',
                    fontSize: '11px',
                    opacity: 0.8,
                    borderTop: '1px solid rgba(255,255,255,0.2)',
                    paddingTop: '12px',
                    lineHeight: '1.4',
                }}
            >
                ⚠️ Admin testing only. Works with virtual accounts only.
            </div>
        </div>
    );
};
