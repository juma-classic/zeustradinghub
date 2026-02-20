/**
 * Fake Real Account Utilities
 * Handles custom transaction IDs and account messages for fake real mode
 */

/**
 * Check if fake real mode is active
 */
export const isFakeRealMode = (): boolean => {
    return localStorage.getItem('demo_icon_us_flag') === 'true';
};

/**
 * Generate a custom transaction ID for fake real mode
 * Format: 1441003[XXXX]1 where XXXX is a random 4-digit number between 1796-2596 (base 1796 + 0-800)
 */
export const generateCustomTransactionId = (): string => {
    // Base number for digits 8-11: 1796
    const baseNumber = 1796;

    // Random increment between 0-800
    const randomIncrement = Math.floor(Math.random() * 801); // 0 to 800 inclusive

    // Calculate the new 4-digit number
    const newMiddleDigits = baseNumber + randomIncrement;

    // Ensure it's always 4 digits (pad with leading zeros if needed)
    const paddedMiddleDigits = newMiddleDigits.toString().padStart(4, '0');

    // Construct the full ID: 1441003 + [4 random digits] + 1
    return `1441003${paddedMiddleDigits}1`;
};

/**
 * Transform transaction ID for display in fake real mode
 * If fake real mode is active and account starts with 6, replace with generated ID
 */
export const transformTransactionId = (originalId: string | number): string => {
    if (!isFakeRealMode()) {
        return String(originalId);
    }

    const idStr = String(originalId);

    // Check if this looks like a demo account transaction ID (starts with 6)
    if (idStr.startsWith('6')) {
        return generateCustomTransactionId();
    }

    return idStr;
};

/**
 * Transform currency display for fake real mode
 * In fake real mode, show "USD" instead of "Demo" or currency name
 */
export const transformCurrencyDisplay = (originalCurrency: string): string => {
    if (!isFakeRealMode()) {
        return originalCurrency;
    }

    // In fake real mode, always show "USD" for the account message
    if (originalCurrency === 'Demo' || originalCurrency === 'demo') {
        return 'USD';
    }

    return originalCurrency;
};

/**
 * Get custom account message for fake real mode
 */
export const getCustomAccountMessage = (originalCurrency: string): string => {
    if (!isFakeRealMode()) {
        return `You are using your ${originalCurrency} account.`;
    }

    // In fake real mode, always show "You are using your USD account."
    return 'You are using your USD account.';
};
