/**
 * Account Integration Service Tests
 * 
 * Tests for authentication and account integration functionality.
 * Requirements: 28.1, 28.2, 28.3, 28.4, 28.5, 29.1, 29.2, 29.3, 29.4, 29.5
 */

import {
    AccountIntegrationService,
    getAccountIntegrationService,
    resetAccountIntegrationService,
    AccountTypeRestriction,
} from '../account-integration.service';

// Mock localStorage
const localStorageMock = (() => {
    let store: Record<string, string> = {};

    return {
        getItem: (key: string) => store[key] || null,
        setItem: (key: string, value: string) => {
            store[key] = value.toString();
        },
        removeItem: (key: string) => {
            delete store[key];
        },
        clear: () => {
            store = {};
        },
    };
})();

Object.defineProperty(window, 'localStorage', {
    value: localStorageMock,
});

// Mock derivAPI
jest.mock('../../../utils/deriv-trading-api', () => ({
    derivAPI: {
        isReady: jest.fn(() => false),
        authorize: jest.fn(),
        getBalance: jest.fn(),
    },
}));

// Mock fastLaneAPI
jest.mock('../../../utils/fast-lane/fast-lane-api', () => ({
    fastLaneAPI: {
        isConnected: jest.fn(() => false),
        authorize: jest.fn(),
        getBalance: jest.fn(),
    },
}));

describe('AccountIntegrationService', () => {
    let service: AccountIntegrationService;

    beforeEach(() => {
        resetAccountIntegrationService();
        localStorageMock.clear();
        service = getAccountIntegrationService();
    });

    afterEach(() => {
        service.stopAccountSwitchMonitoring();
    });

    describe('getCurrentAccount', () => {
        it('should return account info from localStorage', async () => {
            // Arrange
            localStorageMock.setItem('active_loginid', 'CR1234567');

            // Act
            const account = await service.getCurrentAccount();

            // Assert
            expect(account).not.toBeNull();
            expect(account?.loginid).toBe('CR1234567');
            expect(account?.isDemo).toBe(false);
        });

        it('should detect demo account from VRT prefix', async () => {
            // Arrange
            localStorageMock.setItem('active_loginid', 'VRTC1234567');

            // Act
            const account = await service.getCurrentAccount();

            // Assert
            expect(account).not.toBeNull();
            expect(account?.loginid).toBe('VRTC1234567');
            expect(account?.isDemo).toBe(true);
            expect(account?.isVirtual).toBe(true);
        });

        it('should return null when no account is available', async () => {
            // Act
            const account = await service.getCurrentAccount();

            // Assert
            expect(account).toBeNull();
        });
    });

    describe('getAccountBalance', () => {
        it('should return balance from localStorage', async () => {
            // Arrange
            const accounts = {
                CR1234567: {
                    balance: '1000.50',
                },
            };
            localStorageMock.setItem('client.accounts', JSON.stringify(accounts));
            localStorageMock.setItem('active_loginid', 'CR1234567');

            // Act
            const balance = await service.getAccountBalance();

            // Assert
            expect(balance).toBe(1000.50);
        });

        it('should return 0 when balance is not available', async () => {
            // Act
            const balance = await service.getAccountBalance();

            // Assert
            expect(balance).toBe(0);
        });
    });

    describe('isDemo', () => {
        it('should return true for VRT accounts', async () => {
            // Arrange
            localStorageMock.setItem('active_loginid', 'VRTC1234567');

            // Act
            const isDemo = await service.isDemo();

            // Assert
            expect(isDemo).toBe(true);
        });

        it('should return false for real accounts', async () => {
            // Arrange
            localStorageMock.setItem('active_loginid', 'CR1234567');

            // Act
            const isDemo = await service.isDemo();

            // Assert
            expect(isDemo).toBe(false);
        });

        it('should return false when no account is available', async () => {
            // Act
            const isDemo = await service.isDemo();

            // Assert
            expect(isDemo).toBe(false);
        });
    });

    describe('validateBalance', () => {
        it('should return valid when balance is sufficient', async () => {
            // Arrange
            const accounts = {
                CR1234567: {
                    balance: '1000.00',
                },
            };
            localStorageMock.setItem('client.accounts', JSON.stringify(accounts));
            localStorageMock.setItem('active_loginid', 'CR1234567');

            // Act
            const result = await service.validateBalance(500);

            // Assert
            expect(result.valid).toBe(true);
        });

        it('should return invalid when balance is insufficient', async () => {
            // Arrange
            const accounts = {
                CR1234567: {
                    balance: '100.00',
                },
            };
            localStorageMock.setItem('client.accounts', JSON.stringify(accounts));
            localStorageMock.setItem('active_loginid', 'CR1234567');

            // Act
            const result = await service.validateBalance(500);

            // Assert
            expect(result.valid).toBe(false);
            expect(result.reason).toContain('Insufficient balance');
        });
    });

    describe('validateAccountType', () => {
        it('should validate demo-only restriction for demo account', async () => {
            // Arrange
            localStorageMock.setItem('active_loginid', 'VRTC1234567');

            // Act
            const result = await service.validateAccountType(AccountTypeRestriction.DemoOnly);

            // Assert
            expect(result.valid).toBe(true);
        });

        it('should reject demo-only restriction for real account', async () => {
            // Arrange
            localStorageMock.setItem('active_loginid', 'CR1234567');

            // Act
            const result = await service.validateAccountType(AccountTypeRestriction.DemoOnly);

            // Assert
            expect(result.valid).toBe(false);
            expect(result.reason).toContain('demo accounts only');
        });

        it('should validate real-only restriction for real account', async () => {
            // Arrange
            localStorageMock.setItem('active_loginid', 'CR1234567');

            // Act
            const result = await service.validateAccountType(AccountTypeRestriction.RealOnly);

            // Assert
            expect(result.valid).toBe(true);
        });

        it('should reject real-only restriction for demo account', async () => {
            // Arrange
            localStorageMock.setItem('active_loginid', 'VRTC1234567');

            // Act
            const result = await service.validateAccountType(AccountTypeRestriction.RealOnly);

            // Assert
            expect(result.valid).toBe(false);
            expect(result.reason).toContain('real accounts only');
        });

        it('should allow both account types with Both restriction', async () => {
            // Arrange - Demo account
            localStorageMock.setItem('active_loginid', 'VRTC1234567');

            // Act
            const demoResult = await service.validateAccountType(AccountTypeRestriction.Both);

            // Assert
            expect(demoResult.valid).toBe(true);

            // Arrange - Real account
            localStorageMock.setItem('active_loginid', 'CR1234567');

            // Act
            const realResult = await service.validateAccountType(AccountTypeRestriction.Both);

            // Assert
            expect(realResult.valid).toBe(true);
        });
    });

    describe('Account Switch Monitoring', () => {
        it('should detect account switch', (done) => {
            // Arrange
            localStorageMock.setItem('active_loginid', 'CR1234567');
            
            // Create a new service instance to pick up the initial account
            resetAccountIntegrationService();
            service = getAccountIntegrationService();

            const callback = jest.fn((event) => {
                try {
                    expect(event.previousLoginId).toBe('CR1234567');
                    expect(event.currentLoginId).toBe('VRTC9876543');
                    expect(event.previousAccountType).toBe('real');
                    expect(event.currentAccountType).toBe('demo');
                    done();
                } catch (error) {
                    done(error);
                }
            });

            // Act
            service.startAccountSwitchMonitoring(callback);

            // Simulate account switch after a delay
            setTimeout(() => {
                localStorageMock.setItem('active_loginid', 'VRTC9876543');
            }, 100);
        }, 10000);

        it('should stop monitoring when requested', () => {
            // Arrange
            const callback = jest.fn();
            service.startAccountSwitchMonitoring(callback);

            // Act
            service.stopAccountSwitchMonitoring();

            // Simulate account switch
            localStorageMock.setItem('active_loginid', 'VRTC9876543');

            // Wait a bit
            setTimeout(() => {
                // Assert - callback should not be called
                expect(callback).not.toHaveBeenCalled();
            }, 3000);
        });
    });

    describe('getDemoModeIndicator', () => {
        it('should return indicator text for demo account', async () => {
            // Arrange
            localStorageMock.setItem('active_loginid', 'VRTC1234567');

            // Act
            const indicator = await service.getDemoModeIndicator();

            // Assert
            expect(indicator).toContain('DEMO MODE');
            expect(indicator).toContain('Virtual Money Only');
        });

        it('should return null for real account', async () => {
            // Arrange
            localStorageMock.setItem('active_loginid', 'CR1234567');

            // Act
            const indicator = await service.getDemoModeIndicator();

            // Assert
            expect(indicator).toBeNull();
        });
    });
});
