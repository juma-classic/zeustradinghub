/**
 * Debounced Updates Hook for Auto Strategy Controller
 * 
 * This hook provides debounced state updates to reduce unnecessary re-renders
 * in high-frequency update scenarios like real-time market data.
 */

import { useState, useEffect, useRef, useCallback } from 'react';

interface UseDebouncedUpdatesOptions {
    delay: number;
    maxWait?: number; // Maximum time to wait before forcing an update
    leading?: boolean; // Update immediately on first call
    trailing?: boolean; // Update after delay (default: true)
}

interface UseDebouncedUpdatesReturn<T> {
    debouncedValue: T;
    immediateValue: T;
    updateValue: (newValue: T) => void;
    forceUpdate: () => void;
    cancel: () => void;
    flush: () => void;
}

export function useDebouncedUpdates<T>(
    initialValue: T,
    options: UseDebouncedUpdatesOptions
): UseDebouncedUpdatesReturn<T> {
    const {
        delay,
        maxWait,
        leading = false,
        trailing = true
    } = options;

    const [debouncedValue, setDebouncedValue] = useState<T>(initialValue);
    const [immediateValue, setImmediateValue] = useState<T>(initialValue);
    
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);
    const maxWaitTimeoutRef = useRef<NodeJS.Timeout | null>(null);
    const lastCallTime = useRef<number>(0);
    const lastInvokeTime = useRef<number>(0);
    const pendingValue = useRef<T>(initialValue);
    const hasPendingUpdate = useRef<boolean>(false);

    const clearTimeouts = useCallback(() => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
            timeoutRef.current = null;
        }
        if (maxWaitTimeoutRef.current) {
            clearTimeout(maxWaitTimeoutRef.current);
            maxWaitTimeoutRef.current = null;
        }
    }, []);

    const invokeUpdate = useCallback(() => {
        if (hasPendingUpdate.current) {
            setDebouncedValue(pendingValue.current);
            lastInvokeTime.current = Date.now();
            hasPendingUpdate.current = false;
        }
        clearTimeouts();
    }, [clearTimeouts]);

    const updateValue = useCallback((newValue: T) => {
        const now = Date.now();
        lastCallTime.current = now;
        pendingValue.current = newValue;
        hasPendingUpdate.current = true;

        // Update immediate value right away
        setImmediateValue(newValue);

        // Handle leading edge
        if (leading && lastInvokeTime.current === 0) {
            invokeUpdate();
            return;
        }

        // Clear existing timeout
        clearTimeouts();

        // Handle trailing edge
        if (trailing) {
            timeoutRef.current = setTimeout(() => {
                invokeUpdate();
            }, delay);
        }

        // Handle maxWait
        if (maxWait && lastInvokeTime.current > 0) {
            const timeSinceLastInvoke = now - lastInvokeTime.current;
            if (timeSinceLastInvoke >= maxWait) {
                invokeUpdate();
            } else {
                maxWaitTimeoutRef.current = setTimeout(() => {
                    invokeUpdate();
                }, maxWait - timeSinceLastInvoke);
            }
        }
    }, [delay, maxWait, leading, trailing, invokeUpdate, clearTimeouts]);

    const forceUpdate = useCallback(() => {
        invokeUpdate();
    }, [invokeUpdate]);

    const cancel = useCallback(() => {
        clearTimeouts();
        hasPendingUpdate.current = false;
    }, [clearTimeouts]);

    const flush = useCallback(() => {
        if (hasPendingUpdate.current) {
            invokeUpdate();
        }
    }, [invokeUpdate]);

    // Cleanup on unmount
    useEffect(() => {
        return () => {
            clearTimeouts();
        };
    }, [clearTimeouts]);

    return {
        debouncedValue,
        immediateValue,
        updateValue,
        forceUpdate,
        cancel,
        flush,
    };
}

/**
 * Hook for debouncing multiple values together
 */
export function useDebouncedMultipleUpdates<T extends Record<string, any>>(
    initialValues: T,
    options: UseDebouncedUpdatesOptions
): {
    debouncedValues: T;
    immediateValues: T;
    updateValues: (updates: Partial<T>) => void;
    updateValue: <K extends keyof T>(key: K, value: T[K]) => void;
    forceUpdate: () => void;
    cancel: () => void;
    flush: () => void;
} {
    const [debouncedValues, setDebouncedValues] = useState<T>(initialValues);
    const [immediateValues, setImmediateValues] = useState<T>(initialValues);
    
    const pendingUpdates = useRef<Partial<T>>({});
    const hasPendingUpdates = useRef<boolean>(false);
    
    const {
        updateValue: debouncedUpdate,
        forceUpdate,
        cancel,
        flush,
    } = useDebouncedUpdates(null, {
        ...options,
        delay: options.delay,
    });

    const applyUpdates = useCallback(() => {
        if (hasPendingUpdates.current) {
            const updates = { ...pendingUpdates.current };
            setDebouncedValues(prev => ({ ...prev, ...updates }));
            pendingUpdates.current = {};
            hasPendingUpdates.current = false;
        }
    }, []);

    const updateValues = useCallback((updates: Partial<T>) => {
        // Update immediate values
        setImmediateValues(prev => ({ ...prev, ...updates }));
        
        // Queue debounced updates
        pendingUpdates.current = { ...pendingUpdates.current, ...updates };
        hasPendingUpdates.current = true;
        
        // Trigger debounced update
        debouncedUpdate(null);
    }, [debouncedUpdate]);

    const updateValue = useCallback(<K extends keyof T>(key: K, value: T[K]) => {
        updateValues({ [key]: value } as Partial<T>);
    }, [updateValues]);

    // Apply pending updates when debounced update triggers
    useEffect(() => {
        if (hasPendingUpdates.current) {
            applyUpdates();
        }
    }, [applyUpdates]);

    return {
        debouncedValues,
        immediateValues,
        updateValues,
        updateValue,
        forceUpdate,
        cancel,
        flush,
    };
}

/**
 * Hook for debouncing array updates (useful for lists that update frequently)
 */
export function useDebouncedArrayUpdates<T>(
    initialArray: T[],
    options: UseDebouncedUpdatesOptions & {
        compareBy?: (item: T) => any; // Function to compare items for deduplication
        maxItems?: number; // Maximum number of items to keep
    }
): {
    debouncedArray: T[];
    immediateArray: T[];
    addItem: (item: T) => void;
    addItems: (items: T[]) => void;
    removeItem: (item: T) => void;
    updateItem: (index: number, item: T) => void;
    clearArray: () => void;
    forceUpdate: () => void;
    cancel: () => void;
    flush: () => void;
} {
    const { compareBy, maxItems, ...debouncedOptions } = options;
    
    const {
        debouncedValue: debouncedArray,
        immediateValue: immediateArray,
        updateValue,
        forceUpdate,
        cancel,
        flush,
    } = useDebouncedUpdates(initialArray, debouncedOptions);

    const addItem = useCallback((item: T) => {
        updateValue(prev => {
            let newArray = [...prev, item];
            
            // Remove duplicates if compareBy is provided
            if (compareBy) {
                const seen = new Set();
                newArray = newArray.filter(i => {
                    const key = compareBy(i);
                    if (seen.has(key)) {
                        return false;
                    }
                    seen.add(key);
                    return true;
                });
            }
            
            // Limit array size if maxItems is provided
            if (maxItems && newArray.length > maxItems) {
                newArray = newArray.slice(-maxItems);
            }
            
            return newArray;
        });
    }, [updateValue, compareBy, maxItems]);

    const addItems = useCallback((items: T[]) => {
        updateValue(prev => {
            let newArray = [...prev, ...items];
            
            // Remove duplicates if compareBy is provided
            if (compareBy) {
                const seen = new Set();
                newArray = newArray.filter(i => {
                    const key = compareBy(i);
                    if (seen.has(key)) {
                        return false;
                    }
                    seen.add(key);
                    return true;
                });
            }
            
            // Limit array size if maxItems is provided
            if (maxItems && newArray.length > maxItems) {
                newArray = newArray.slice(-maxItems);
            }
            
            return newArray;
        });
    }, [updateValue, compareBy, maxItems]);

    const removeItem = useCallback((item: T) => {
        updateValue(prev => prev.filter(i => i !== item));
    }, [updateValue]);

    const updateItem = useCallback((index: number, item: T) => {
        updateValue(prev => {
            const newArray = [...prev];
            if (index >= 0 && index < newArray.length) {
                newArray[index] = item;
            }
            return newArray;
        });
    }, [updateValue]);

    const clearArray = useCallback(() => {
        updateValue([]);
    }, [updateValue]);

    return {
        debouncedArray,
        immediateArray,
        addItem,
        addItems,
        removeItem,
        updateItem,
        clearArray,
        forceUpdate,
        cancel,
        flush,
    };
}

export default useDebouncedUpdates;