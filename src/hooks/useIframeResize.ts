/**
 * useIframeResize Hook
 * 
 * Handles iframe resize events and notifies parent window of dimension changes.
 * Ensures responsive behavior within iframe environments.
 */

import { useEffect, useRef, useCallback } from 'react';
import { getIframeBridge } from '../services/auto-strategy/iframe-bridge.service';

export interface UseIframeResizeOptions {
  enabled?: boolean;
  debounceMs?: number;
  notifyOnMount?: boolean;
}

export function useIframeResize(options: UseIframeResizeOptions = {}) {
  const {
    enabled = true,
    debounceMs = 150,
    notifyOnMount = true,
  } = options;

  const iframeBridge = getIframeBridge();
  const resizeTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const lastHeightRef = useRef<number>(0);

  const notifyHeightChange = useCallback(() => {
    if (!enabled || !iframeBridge.isIframe()) {
      return;
    }

    const currentHeight = document.documentElement.scrollHeight;
    
    // Only notify if height actually changed
    if (currentHeight !== lastHeightRef.current) {
      lastHeightRef.current = currentHeight;
      iframeBridge.notifyHeightChange();
    }
  }, [enabled, iframeBridge]);

  const debouncedNotify = useCallback(() => {
    if (resizeTimeoutRef.current) {
      clearTimeout(resizeTimeoutRef.current);
    }

    resizeTimeoutRef.current = setTimeout(() => {
      notifyHeightChange();
    }, debounceMs);
  }, [notifyHeightChange, debounceMs]);

  useEffect(() => {
    if (!enabled) {
      return;
    }

    // Notify on mount if requested
    if (notifyOnMount) {
      notifyHeightChange();
    }

    // Set up ResizeObserver for content changes
    const resizeObserver = new ResizeObserver(() => {
      debouncedNotify();
    });

    resizeObserver.observe(document.body);

    // Also listen to window resize events
    window.addEventListener('resize', debouncedNotify);

    // Cleanup
    return () => {
      resizeObserver.disconnect();
      window.removeEventListener('resize', debouncedNotify);
      
      if (resizeTimeoutRef.current) {
        clearTimeout(resizeTimeoutRef.current);
      }
    };
  }, [enabled, notifyOnMount, notifyHeightChange, debouncedNotify]);

  return {
    notifyHeightChange,
    isInIframe: iframeBridge.isIframe(),
  };
}
