/**
 * Mobile Responsive Wrapper for Auto Strategy Controller
 * 
 * Provides mobile-optimized layout and gesture support for all
 * Auto Strategy Controller components.
 */

import React, { useEffect, useState } from 'react';
import { useMobileUI } from './hooks/useMobileGestures';
import './mobile-styles.scss';

interface MobileResponsiveWrapperProps {
  children: React.ReactNode;
  className?: string;
  enableSwipeGestures?: boolean;
  prioritizeCriticalInfo?: boolean;
  stickyEmergencyStop?: boolean;
}

const MobileResponsiveWrapper: React.FC<MobileResponsiveWrapperProps> = ({
  children,
  className = '',
  enableSwipeGestures = true,
  prioritizeCriticalInfo = true,
  stickyEmergencyStop = true
}) => {
  const { isMobile, isTouch } = useMobileUI();
  const [orientation, setOrientation] = useState<'portrait' | 'landscape'>('portrait');

  useEffect(() => {
    const handleOrientationChange = () => {
      setOrientation(window.innerWidth > window.innerHeight ? 'landscape' : 'portrait');
    };

    handleOrientationChange();
    window.addEventListener('resize', handleOrientationChange);
    window.addEventListener('orientationchange', handleOrientationChange);

    return () => {
      window.removeEventListener('resize', handleOrientationChange);
      window.removeEventListener('orientationchange', handleOrientationChange);
    };
  }, []);

  const wrapperClasses = [
    'auto-strategy-controller',
    'mobile-responsive-wrapper',
    className,
    isMobile ? 'mobile-device' : 'desktop-device',
    isTouch ? 'touch-device' : 'mouse-device',
    `orientation-${orientation}`,
    enableSwipeGestures ? 'swipe-enhanced' : '',
    prioritizeCriticalInfo ? 'mobile-priority-info' : '',
    stickyEmergencyStop ? 'emergency-stop-mobile-enhanced' : '',
    'mobile-loading-optimized',
    'mobile-error-optimized',
    'mobile-a11y-enhanced',
    'mobile-performance-optimized'
  ].filter(Boolean).join(' ');

  return (
    <div className={wrapperClasses}>
      {children}
    </div>
  );
};

export default MobileResponsiveWrapper;