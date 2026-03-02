/**
 * Iframe Bridge Service Tests
 */

import { IframeBridgeService } from '../iframe-bridge.service';

describe('IframeBridgeService', () => {
  let service: IframeBridgeService;

  beforeEach(() => {
    service = new IframeBridgeService({
      allowedOrigins: ['https://example.com'],
      targetOrigin: 'https://example.com',
      enableLogging: false,
    });
  });

  afterEach(() => {
    service.destroy();
  });

  describe('detectIframeEnvironment', () => {
    it('should detect non-iframe environment', () => {
      expect(service.isIframe()).toBe(false);
    });
  });

  describe('message handling', () => {
    it('should register and trigger message handlers', (done) => {
      const handler = jest.fn((payload) => {
        expect(payload).toEqual({ test: 'data' });
        done();
      });

      service.on('test-message', handler);

      // Simulate message event
      const message = {
        type: 'test-message',
        payload: { test: 'data' },
        source: 'auto-strategy-controller',
        timestamp: Date.now(),
      };

      window.dispatchEvent(
        new MessageEvent('message', {
          data: message,
          origin: 'https://example.com',
        })
      );
    });

    it('should ignore messages from unauthorized origins', () => {
      const handler = jest.fn();

      service.on('test-message', handler);

      const message = {
        type: 'test-message',
        payload: { test: 'data' },
        source: 'auto-strategy-controller',
        timestamp: Date.now(),
      };

      window.dispatchEvent(
        new MessageEvent('message', {
          data: message,
          origin: 'https://unauthorized.com',
        })
      );

      expect(handler).not.toHaveBeenCalled();
    });

    it('should ignore messages without correct source', () => {
      const handler = jest.fn();

      service.on('test-message', handler);

      const message = {
        type: 'test-message',
        payload: { test: 'data' },
        source: 'other-source',
        timestamp: Date.now(),
      };

      window.dispatchEvent(
        new MessageEvent('message', {
          data: message,
          origin: 'https://example.com',
        })
      );

      expect(handler).not.toHaveBeenCalled();
    });

    it('should unsubscribe handlers', () => {
      const handler = jest.fn();

      const unsubscribe = service.on('test-message', handler);
      unsubscribe();

      const message = {
        type: 'test-message',
        payload: { test: 'data' },
        source: 'auto-strategy-controller',
        timestamp: Date.now(),
      };

      window.dispatchEvent(
        new MessageEvent('message', {
          data: message,
          origin: 'https://example.com',
        })
      );

      expect(handler).not.toHaveBeenCalled();
    });

    it('should remove all handlers for a message type', () => {
      const handler1 = jest.fn();
      const handler2 = jest.fn();

      service.on('test-message', handler1);
      service.on('test-message', handler2);

      service.off('test-message');

      const message = {
        type: 'test-message',
        payload: { test: 'data' },
        source: 'auto-strategy-controller',
        timestamp: Date.now(),
      };

      window.dispatchEvent(
        new MessageEvent('message', {
          data: message,
          origin: 'https://example.com',
        })
      );

      expect(handler1).not.toHaveBeenCalled();
      expect(handler2).not.toHaveBeenCalled();
    });
  });

  describe('sendToIframe', () => {
    it('should send message to iframe', () => {
      const mockIframe = {
        contentWindow: {
          postMessage: jest.fn(),
        },
      } as any;

      const result = service.sendToIframe(mockIframe, 'test-message', { test: 'data' });

      expect(result).toBe(true);
      expect(mockIframe.contentWindow.postMessage).toHaveBeenCalledWith(
        expect.objectContaining({
          type: 'test-message',
          payload: { test: 'data' },
          source: 'auto-strategy-controller',
        }),
        'https://example.com'
      );
    });

    it('should handle invalid iframe', () => {
      const result = service.sendToIframe(null as any, 'test-message', { test: 'data' });

      expect(result).toBe(false);
    });
  });

  describe('getIframeDimensions', () => {
    it('should return null in non-iframe environment', () => {
      const dimensions = service.getIframeDimensions();

      expect(dimensions).toBeNull();
    });
  });

  describe('checkCSPCompliance', () => {
    it('should check CSP compliance', () => {
      const result = service.checkCSPCompliance();

      expect(result).toHaveProperty('compliant');
      expect(result).toHaveProperty('issues');
      expect(Array.isArray(result.issues)).toBe(true);
    });
  });

  describe('requestResize', () => {
    it('should return false in non-iframe environment', () => {
      const result = service.requestResize(800, 600);

      expect(result).toBe(false);
    });
  });

  describe('notifyHeightChange', () => {
    it('should return false in non-iframe environment', () => {
      const result = service.notifyHeightChange();

      expect(result).toBe(false);
    });
  });
});
