/**
 * Mobile Gestures Hook for Auto Strategy Controller
 * 
 * Provides touch gesture support for mobile devices including:
 * - Swipe to delete/pause strategies
 * - Tap to pause/resume
 * - Touch feedback
 */

import { useEffect, useRef, useCallback } from 'react';

interface SwipeGestureOptions {
  onSwipeLeft?: () => void;
  onSwipeRight?: () => void;
  onTap?: () => void;
  threshold?: number;
  restraint?: number;
  allowedTime?: number;
}

interface TouchCoordinates {
  x: number;
  y: number;
  time: number;
}

export const useMobileGestures = (options: SwipeGestureOptions = {}) => {
  const {
    onSwipeLeft,
    onSwipeRight,
    onTap,
    threshold = 100,
    restraint = 100,
    allowedTime = 300
  } = options;

  const elementRef = useRef<HTMLElement>(null);
  const startTouch = useRef<TouchCoordinates | null>(null);
  const isSwipeInProgress = useRef(false);

  const handleTouchStart = useCallback((e: TouchEvent) => {
    const touch = e.touches[0];
    startTouch.current = {
      x: touch.clientX,
      y: touch.clientY,
      time: Date.now()
    };
    isSwipeInProgress.current = false;
  }, []);

  const handleTouchMove = useCallback((e: TouchEvent) => {
    if (!startTouch.current) return;

    const touch = e.touches[0];
    const deltaX = Math.abs(touch.clientX - startTouch.current.x);
    const deltaY = Math.abs(touch.clientY - startTouch.current.y);

    // If horizontal movement is significant, prevent scrolling
    if (deltaX > 30 && deltaX > deltaY) {
      e.preventDefault();
      isSwipeInProgress.current = true;
    }
  }, []);

  const handleTouchEnd = useCallback((e: TouchEvent) => {
    if (!startTouch.current) return;

    const touch = e.changedTouches[0];
    const deltaX = touch.clientX - startTouch.current.x;
    const deltaY = touch.clientY - startTouch.current.y;
    const deltaTime = Date.now() - startTouch.current.time;

    // Check if it's a valid swipe
    if (deltaTime <= allowedTime) {
      if (Math.abs(deltaX) >= threshold && Math.abs(deltaY) <= restraint) {
        // It's a swipe
        if (deltaX > 0 && onSwipeRight) {
          onSwipeRight();
        } else if (deltaX < 0 && onSwipeLeft) {
          onSwipeLeft();
        }
      } else if (Math.abs(deltaX) < 10 && Math.abs(deltaY) < 10 && !isSwipeInProgress.current) {
        // It's a tap
        if (onTap) {
          onTap();
        }
      }
    }

    startTouch.current = null;
    isSwipeInProgress.current = false;
  }, [onSwipeLeft, onSwipeRight, onTap, threshold, restraint, allowedTime]);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    // Add touch event listeners
    element.addEventListener('touchstart', handleTouchStart, { passive: false });
    element.addEventListener('touchmove', handleTouchMove, { passive: false });
    element.addEventListener('touchend', handleTouchEnd, { passive: true });

    return () => {
      element.removeEventListener('touchstart', handleTouchStart);
      element.removeEventListener('touchmove', handleTouchMove);
      element.removeEventListener('touchend', handleTouchEnd);
    };
  }, [handleTouchStart, handleTouchMove, handleTouchEnd]);

  return elementRef;
};

/**
 * Hook for detecting mobile device and touch capabilities
 */
export const useIsMobile = () => {
  const isMobile = useRef(false);
  const isTouch = useRef(false);

  useEffect(() => {
    // Check if device supports touch
    isTouch.current = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    
    // Check if device is mobile based on screen size and user agent
    const checkMobile = () => {
      const width = window.innerWidth;
      const userAgent = navigator.userAgent.toLowerCase();
      const mobileKeywords = ['mobile', 'android', 'iphone', 'ipad', 'tablet'];
      
      isMobile.current = width <= 768 || mobileKeywords.some(keyword => 
        userAgent.includes(keyword)
      );
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  return {
    isMobile: isMobile.current,
    isTouch: isTouch.current
  };
};

/**
 * Hook for handling mobile-specific UI behaviors
 */
export const useMobileUI = () => {
  const { isMobile, isTouch } = useIsMobile();

  const addTouchFeedback = useCallback((element: HTMLElement) => {
    if (!isTouch) return;

    const handleTouchStart = () => {
      element.style.transform = 'scale(0.98)';
      element.style.transition = 'transform 0.1s ease';
    };

    const handleTouchEnd = () => {
      element.style.transform = 'scale(1)';
    };

    element.addEventListener('touchstart', handleTouchStart, { passive: true });
    element.addEventListener('touchend', handleTouchEnd, { passive: true });
    element.addEventListener('touchcancel', handleTouchEnd, { passive: true });

    return () => {
      element.removeEventListener('touchstart', handleTouchStart);
      element.removeEventListener('touchend', handleTouchEnd);
      element.removeEventListener('touchcancel', handleTouchEnd);
    };
  }, [isTouch]);

  const getOptimalTouchTarget = useCallback((baseSize: number) => {
    // Ensure minimum 44px touch target on mobile
    return isMobile ? Math.max(baseSize, 44) : baseSize;
  }, [isMobile]);

  const getMobileFontSize = useCallback((baseSize: number) => {
    // Slightly larger fonts on mobile for better readability
    return isMobile ? Math.max(baseSize * 1.1, 14) : baseSize;
  }, [isMobile]);

  return {
    isMobile,
    isTouch,
    addTouchFeedback,
    getOptimalTouchTarget,
    getMobileFontSize
  };
};

/**
 * Hook for handling emergency stop with enhanced mobile support
 */
export const useEmergencyStopMobile = (onEmergencyStop: () => void) => {
  const { isTouch } = useIsMobile();
  const buttonRef = useRef<HTMLButtonElement>(null);
  const pressTimer = useRef<NodeJS.Timeout | null>(null);
  const isLongPress = useRef(false);

  const handleTouchStart = useCallback(() => {
    isLongPress.current = false;
    
    // Add haptic feedback if available
    if ('vibrate' in navigator) {
      navigator.vibrate(50);
    }

    // Long press detection for emergency stop
    pressTimer.current = setTimeout(() => {
      isLongPress.current = true;
      if ('vibrate' in navigator) {
        navigator.vibrate([100, 50, 100]); // Double vibration for confirmation
      }
    }, 500);
  }, []);

  const handleTouchEnd = useCallback(() => {
    if (pressTimer.current) {
      clearTimeout(pressTimer.current);
      pressTimer.current = null;
    }

    if (isLongPress.current) {
      onEmergencyStop();
    }
  }, [onEmergencyStop]);

  const handleClick = useCallback(() => {
    if (!isTouch) {
      onEmergencyStop();
    }
  }, [isTouch, onEmergencyStop]);

  useEffect(() => {
    const button = buttonRef.current;
    if (!button || !isTouch) return;

    button.addEventListener('touchstart', handleTouchStart, { passive: true });
    button.addEventListener('touchend', handleTouchEnd, { passive: true });
    button.addEventListener('touchcancel', handleTouchEnd, { passive: true });

    return () => {
      button.removeEventListener('touchstart', handleTouchStart);
      button.removeEventListener('touchend', handleTouchEnd);
      button.removeEventListener('touchcancel', handleTouchEnd);
      
      if (pressTimer.current) {
        clearTimeout(pressTimer.current);
      }
    };
  }, [handleTouchStart, handleTouchEnd, isTouch]);

  return {
    buttonRef,
    handleClick,
    isTouch
  };
};

export default useMobileGestures;