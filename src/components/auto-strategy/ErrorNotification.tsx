/**
 * Error Notification Component
 * 
 * Displays user-friendly error notifications with recovery status.
 * Listens to error events and shows toast-style notifications.
 */

import React, { useState, useEffect, useCallback } from 'react';
import './ErrorNotification.scss';

export interface Notification {
  id: string;
  message: string;
  type: 'error' | 'warning' | 'info' | 'success';
  duration?: number;
  action?: {
    label: string;
    onClick: () => void;
  };
}

export const ErrorNotification: React.FC = () => {
  const [notifications, setNotifications] = useState<Notification[]>([]);

  const addNotification = useCallback((notification: Omit<Notification, 'id'>) => {
    const id = `notification-${Date.now()}-${Math.random()}`;
    const newNotification: Notification = {
      ...notification,
      id,
      duration: notification.duration ?? 5000,
    };

    setNotifications(prev => [...prev, newNotification]);

    // Auto-remove after duration
    if (newNotification.duration > 0) {
      setTimeout(() => {
        removeNotification(id);
      }, newNotification.duration);
    }
  }, []);

  const removeNotification = useCallback((id: string) => {
    setNotifications(prev => prev.filter(n => n.id !== id));
  }, []);

  useEffect(() => {
    // Listen for custom notification events
    const handleNotification = (event: CustomEvent) => {
      const { message, type, action } = event.detail;
      addNotification({
        message,
        type: type || 'info',
        action,
      });
    };

    window.addEventListener('auto-strategy-notification' as any, handleNotification);

    return () => {
      window.removeEventListener('auto-strategy-notification' as any, handleNotification);
    };
  }, [addNotification]);

  if (notifications.length === 0) {
    return null;
  }

  return (
    <div className="error-notification-container">
      {notifications.map(notification => (
        <div
          key={notification.id}
          className={`error-notification error-notification--${notification.type}`}
        >
          <div className="error-notification__icon">
            {notification.type === 'error' && '❌'}
            {notification.type === 'warning' && '⚠️'}
            {notification.type === 'info' && 'ℹ️'}
            {notification.type === 'success' && '✅'}
          </div>
          
          <div className="error-notification__content">
            <p className="error-notification__message">{notification.message}</p>
            
            {notification.action && (
              <button
                className="error-notification__action"
                onClick={() => {
                  notification.action!.onClick();
                  removeNotification(notification.id);
                }}
              >
                {notification.action.label}
              </button>
            )}
          </div>
          
          <button
            className="error-notification__close"
            onClick={() => removeNotification(notification.id)}
            aria-label="Close notification"
          >
            ×
          </button>
        </div>
      ))}
    </div>
  );
};

export default ErrorNotification;
