/**
 * Iframe Bridge Service
 * 
 * Handles communication between the Auto Strategy Controller and iframe environments.
 * Provides postMessage API communication, cross-origin handling, and CSP compliance.
 */

export interface IframeBridgeMessage {
  type: string;
  payload: any;
  source: 'auto-strategy-controller';
  timestamp: number;
}

export interface IframeBridgeConfig {
  allowedOrigins: string[];
  targetOrigin: string;
  enableLogging: boolean;
}

export type MessageHandler = (payload: any) => void;

export class IframeBridgeService {
  private messageHandlers: Map<string, Set<MessageHandler>> = new Map();
  private config: IframeBridgeConfig;
  private isInIframe: boolean;
  private parentWindow: Window | null = null;

  constructor(config?: Partial<IframeBridgeConfig>) {
    this.config = {
      allowedOrigins: config?.allowedOrigins || ['*'],
      targetOrigin: config?.targetOrigin || '*',
      enableLogging: config?.enableLogging ?? false,
    };

    this.isInIframe = this.detectIframeEnvironment();
    this.parentWindow = this.isInIframe ? window.parent : null;

    this.initializeMessageListener();
  }

  /**
   * Detect if running in iframe environment
   */
  private detectIframeEnvironment(): boolean {
    try {
      return window.self !== window.top;
    } catch (e) {
      // Cross-origin restriction - we're definitely in an iframe
      return true;
    }
  }

  /**
   * Check if origin is allowed
   */
  private isOriginAllowed(origin: string): boolean {
    if (this.config.allowedOrigins.includes('*')) {
      return true;
    }
    return this.config.allowedOrigins.includes(origin);
  }

  /**
   * Initialize message listener for postMessage API
   */
  private initializeMessageListener(): void {
    window.addEventListener('message', (event: MessageEvent) => {
      // Validate origin
      if (!this.isOriginAllowed(event.origin)) {
        if (this.config.enableLogging) {
          console.warn('[IframeBridge] Message from unauthorized origin:', event.origin);
        }
        return;
      }

      // Validate message structure
      const message = event.data as IframeBridgeMessage;
      if (!message || typeof message !== 'object' || !message.type) {
        return;
      }

      // Only process messages from our system
      if (message.source !== 'auto-strategy-controller') {
        return;
      }

      if (this.config.enableLogging) {
        console.log('[IframeBridge] Received message:', message.type, message.payload);
      }

      // Dispatch to handlers
      this.dispatchMessage(message.type, message.payload);
    });
  }

  /**
   * Dispatch message to registered handlers
   */
  private dispatchMessage(type: string, payload: any): void {
    const handlers = this.messageHandlers.get(type);
    if (handlers) {
      handlers.forEach(handler => {
        try {
          handler(payload);
        } catch (error) {
          console.error('[IframeBridge] Handler error:', error);
        }
      });
    }
  }

  /**
   * Send message to parent window (if in iframe)
   */
  public sendToParent(type: string, payload: any): boolean {
    if (!this.isInIframe || !this.parentWindow) {
      if (this.config.enableLogging) {
        console.warn('[IframeBridge] Not in iframe, cannot send to parent');
      }
      return false;
    }

    const message: IframeBridgeMessage = {
      type,
      payload,
      source: 'auto-strategy-controller',
      timestamp: Date.now(),
    };

    try {
      this.parentWindow.postMessage(message, this.config.targetOrigin);
      
      if (this.config.enableLogging) {
        console.log('[IframeBridge] Sent to parent:', type, payload);
      }
      
      return true;
    } catch (error) {
      console.error('[IframeBridge] Failed to send message to parent:', error);
      return false;
    }
  }

  /**
   * Send message to iframe child
   */
  public sendToIframe(iframe: HTMLIFrameElement, type: string, payload: any): boolean {
    if (!iframe || !iframe.contentWindow) {
      console.error('[IframeBridge] Invalid iframe element');
      return false;
    }

    const message: IframeBridgeMessage = {
      type,
      payload,
      source: 'auto-strategy-controller',
      timestamp: Date.now(),
    };

    try {
      iframe.contentWindow.postMessage(message, this.config.targetOrigin);
      
      if (this.config.enableLogging) {
        console.log('[IframeBridge] Sent to iframe:', type, payload);
      }
      
      return true;
    } catch (error) {
      console.error('[IframeBridge] Failed to send message to iframe:', error);
      return false;
    }
  }

  /**
   * Register message handler
   */
  public on(type: string, handler: MessageHandler): () => void {
    if (!this.messageHandlers.has(type)) {
      this.messageHandlers.set(type, new Set());
    }

    this.messageHandlers.get(type)!.add(handler);

    // Return unsubscribe function
    return () => {
      const handlers = this.messageHandlers.get(type);
      if (handlers) {
        handlers.delete(handler);
        if (handlers.size === 0) {
          this.messageHandlers.delete(type);
        }
      }
    };
  }

  /**
   * Remove all handlers for a message type
   */
  public off(type: string): void {
    this.messageHandlers.delete(type);
  }

  /**
   * Check if running in iframe
   */
  public isIframe(): boolean {
    return this.isInIframe;
  }

  /**
   * Get iframe dimensions
   */
  public getIframeDimensions(): { width: number; height: number } | null {
    if (!this.isInIframe) {
      return null;
    }

    return {
      width: window.innerWidth,
      height: window.innerHeight,
    };
  }

  /**
   * Request parent to resize iframe
   */
  public requestResize(width: number, height: number): boolean {
    return this.sendToParent('resize-request', { width, height });
  }

  /**
   * Notify parent of content height change
   */
  public notifyHeightChange(): boolean {
    const height = document.documentElement.scrollHeight;
    return this.sendToParent('height-change', { height });
  }

  /**
   * Check CSP compliance
   */
  public checkCSPCompliance(): {
    compliant: boolean;
    issues: string[];
  } {
    const issues: string[] = [];

    // Check if we can access localStorage
    try {
      localStorage.getItem('test');
    } catch (e) {
      issues.push('localStorage access blocked by CSP');
    }

    // Check if we can make fetch requests
    try {
      // This is just a check, not an actual request
      if (typeof fetch === 'undefined') {
        issues.push('fetch API not available');
      }
    } catch (e) {
      issues.push('fetch API blocked by CSP');
    }

    // Check if we can use WebSocket
    try {
      if (typeof WebSocket === 'undefined') {
        issues.push('WebSocket not available');
      }
    } catch (e) {
      issues.push('WebSocket blocked by CSP');
    }

    return {
      compliant: issues.length === 0,
      issues,
    };
  }

  /**
   * Cleanup
   */
  public destroy(): void {
    this.messageHandlers.clear();
  }
}

// Singleton instance
let iframeBridgeInstance: IframeBridgeService | null = null;

export function getIframeBridge(config?: Partial<IframeBridgeConfig>): IframeBridgeService {
  if (!iframeBridgeInstance) {
    iframeBridgeInstance = new IframeBridgeService(config);
  }
  return iframeBridgeInstance;
}
