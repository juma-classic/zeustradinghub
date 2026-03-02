/**
 * Graceful Degradation Utilities
 * 
 * Provides fallback mechanisms and feature detection for the Auto Strategy Controller.
 * Ensures the system continues to function even when certain features are unavailable.
 */

export interface FeatureSupport {
  websocket: boolean;
  localStorage: boolean;
  notifications: boolean;
  serviceWorker: boolean;
  webWorker: boolean;
  indexedDB: boolean;
}

export interface DegradationStrategy {
  feature: keyof FeatureSupport;
  fallback: () => void;
  message: string;
}

/**
 * Detect browser feature support
 */
export function detectFeatureSupport(): FeatureSupport {
  return {
    websocket: typeof WebSocket !== 'undefined',
    localStorage: checkLocalStorage(),
    notifications: 'Notification' in window,
    serviceWorker: 'serviceWorker' in navigator,
    webWorker: typeof Worker !== 'undefined',
    indexedDB: 'indexedDB' in window,
  };
}

/**
 * Check localStorage availability
 */
function checkLocalStorage(): boolean {
  try {
    const test = '__storage_test__';
    localStorage.setItem(test, test);
    localStorage.removeItem(test);
    return true;
  } catch (e) {
    return false;
  }
}

/**
 * Get fallback storage when localStorage is unavailable
 */
export class MemoryStorage implements Storage {
  private storage: Map<string, string> = new Map();

  get length(): number {
    return this.storage.size;
  }

  clear(): void {
    this.storage.clear();
  }

  getItem(key: string): string | null {
    return this.storage.get(key) ?? null;
  }

  key(index: number): string | null {
    const keys = Array.from(this.storage.keys());
    return keys[index] ?? null;
  }

  removeItem(key: string): void {
    this.storage.delete(key);
  }

  setItem(key: string, value: string): void {
    this.storage.set(key, value);
  }
}

/**
 * Get storage implementation (localStorage or fallback)
 */
export function getStorage(): Storage {
  if (checkLocalStorage()) {
    return localStorage;
  }
  
  console.warn('[GracefulDegradation] localStorage unavailable, using memory storage');
  return new MemoryStorage();
}

/**
 * Safe WebSocket wrapper with fallback
 */
export class SafeWebSocket {
  private ws: WebSocket | null = null;
  private url: string;
  private protocols?: string | string[];
  private reconnectAttempts = 0;
  private maxReconnectAttempts = 5;
  private reconnectDelay = 1000;

  public onopen: ((event: Event) => void) | null = null;
  public onclose: ((event: CloseEvent) => void) | null = null;
  public onerror: ((event: Event) => void) | null = null;
  public onmessage: ((event: MessageEvent) => void) | null = null;

  constructor(url: string, protocols?: string | string[]) {
    this.url = url;
    this.protocols = protocols;
    
    if (typeof WebSocket === 'undefined') {
      console.error('[SafeWebSocket] WebSocket not supported');
      this.triggerFallback();
      return;
    }

    this.connect();
  }

  private connect(): void {
    try {
      this.ws = new WebSocket(this.url, this.protocols);
      
      this.ws.onopen = (event) => {
        this.reconnectAttempts = 0;
        if (this.onopen) this.onopen(event);
      };

      this.ws.onclose = (event) => {
        if (this.onclose) this.onclose(event);
        this.handleReconnect();
      };

      this.ws.onerror = (event) => {
        if (this.onerror) this.onerror(event);
      };

      this.ws.onmessage = (event) => {
        if (this.onmessage) this.onmessage(event);
      };
    } catch (error) {
      console.error('[SafeWebSocket] Connection error:', error);
      this.triggerFallback();
    }
  }

  private handleReconnect(): void {
    if (this.reconnectAttempts >= this.maxReconnectAttempts) {
      console.error('[SafeWebSocket] Max reconnection attempts reached');
      this.triggerFallback();
      return;
    }

    this.reconnectAttempts++;
    const delay = this.reconnectDelay * Math.pow(2, this.reconnectAttempts - 1);
    
    console.log(`[SafeWebSocket] Reconnecting in ${delay}ms (attempt ${this.reconnectAttempts})`);
    
    setTimeout(() => {
      this.connect();
    }, delay);
  }

  private triggerFallback(): void {
    window.dispatchEvent(
      new CustomEvent('auto-strategy-notification', {
        detail: {
          message: 'WebSocket connection unavailable. Real-time updates disabled.',
          type: 'warning',
        },
      })
    );
  }

  public send(data: string | ArrayBufferLike | Blob | ArrayBufferView): void {
    if (this.ws && this.ws.readyState === WebSocket.OPEN) {
      this.ws.send(data);
    } else {
      console.warn('[SafeWebSocket] Cannot send, connection not open');
    }
  }

  public close(code?: number, reason?: string): void {
    if (this.ws) {
      this.ws.close(code, reason);
    }
  }

  public get readyState(): number {
    return this.ws?.readyState ?? WebSocket.CLOSED;
  }
}

/**
 * Safe notification with fallback
 */
export function showNotification(title: string, options?: NotificationOptions): void {
  if ('Notification' in window && Notification.permission === 'granted') {
    try {
      new Notification(title, options);
      return;
    } catch (error) {
      console.warn('[GracefulDegradation] Notification failed:', error);
    }
  }

  // Fallback to custom event
  window.dispatchEvent(
    new CustomEvent('auto-strategy-notification', {
      detail: {
        message: options?.body || title,
        type: 'info',
      },
    })
  );
}

/**
 * Request notification permission safely
 */
export async function requestNotificationPermission(): Promise<NotificationPermission> {
  if (!('Notification' in window)) {
    console.warn('[GracefulDegradation] Notifications not supported');
    return 'denied';
  }

  try {
    return await Notification.requestPermission();
  } catch (error) {
    console.error('[GracefulDegradation] Failed to request notification permission:', error);
    return 'denied';
  }
}

/**
 * Check if running in secure context (required for some features)
 */
export function isSecureContext(): boolean {
  return window.isSecureContext ?? false;
}

/**
 * Get degradation report
 */
export function getDegradationReport(): {
  support: FeatureSupport;
  warnings: string[];
  criticalIssues: string[];
} {
  const support = detectFeatureSupport();
  const warnings: string[] = [];
  const criticalIssues: string[] = [];

  if (!support.websocket) {
    criticalIssues.push('WebSocket not supported - real-time updates unavailable');
  }

  if (!support.localStorage) {
    warnings.push('localStorage not available - settings will not persist');
  }

  if (!support.notifications) {
    warnings.push('Notifications not supported - alerts will be shown in-app only');
  }

  if (!isSecureContext()) {
    warnings.push('Not running in secure context - some features may be limited');
  }

  return {
    support,
    warnings,
    criticalIssues,
  };
}

/**
 * Apply degradation strategies
 */
export function applyDegradationStrategies(): void {
  const report = getDegradationReport();

  // Show warnings to user
  if (report.warnings.length > 0) {
    console.warn('[GracefulDegradation] Warnings:', report.warnings);
  }

  // Show critical issues
  if (report.criticalIssues.length > 0) {
    console.error('[GracefulDegradation] Critical issues:', report.criticalIssues);
    
    window.dispatchEvent(
      new CustomEvent('auto-strategy-notification', {
        detail: {
          message: 'Some features are unavailable due to browser limitations.',
          type: 'warning',
        },
      })
    );
  }
}
