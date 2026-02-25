/**
 * Admin Mode Detector
 * Detects secret gestures to activate Demo Mode (admin testing feature)
 *
 * Requirements:
 * 1. Must be in Fake Real Mode first
 * 2. Mobile: Swipe left 2 times, then right 2 times
 * 3. Desktop: Type "admin" then press Enter twice
 */

class AdminModeDetector {
    private swipeCount = { left: 0, right: 0 };
    private keySequence: string[] = [];
    private enterPressCount = 0;
    private lastSwipeTime = 0;
    private lastKeyTime = 0;
    private readonly SWIPE_TIMEOUT = 3000; // 3 seconds
    private readonly KEY_TIMEOUT = 2000; // 2 seconds
    private readonly TARGET_SEQUENCE = 'admin';
    private touchStartX = 0;
    private touchStartY = 0;

    constructor() {
        this.init();
    }

    private init() {
        // Mobile touch events
        document.addEventListener('touchstart', this.handleTouchStart.bind(this), { passive: true });
        document.addEventListener('touchend', this.handleTouchEnd.bind(this), { passive: true });

        // Desktop keyboard events
        document.addEventListener('keydown', this.handleKeyDown.bind(this));
    }

    private handleTouchStart(e: TouchEvent) {
        this.touchStartX = e.touches[0].clientX;
        this.touchStartY = e.touches[0].clientY;
    }

    private handleTouchEnd(e: TouchEvent) {
        const touchEndX = e.changedTouches[0].clientX;
        const touchEndY = e.changedTouches[0].clientY;

        const deltaX = touchEndX - this.touchStartX;
        const deltaY = touchEndY - this.touchStartY;

        // Check if it's a horizontal swipe (not vertical)
        if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > 50) {
            const currentTime = Date.now();

            // Reset if timeout exceeded
            if (currentTime - this.lastSwipeTime > this.SWIPE_TIMEOUT) {
                this.resetSwipes();
            }

            this.lastSwipeTime = currentTime;

            if (deltaX < 0) {
                // Swipe left
                this.handleSwipeLeft();
            } else {
                // Swipe right
                this.handleSwipeRight();
            }
        }
    }

    private handleSwipeLeft() {
        // Only count left swipes if we haven't started right swipes yet
        if (this.swipeCount.right === 0) {
            this.swipeCount.left++;
            console.log(`👈 Admin swipe left: ${this.swipeCount.left}/2`);

            if (this.swipeCount.left === 2) {
                console.log('✅ Left swipes complete! Now swipe right 2 times...');
            }
        } else {
            // Reset if swiping left after starting right swipes
            console.log('❌ Wrong direction! Resetting admin gesture...');
            this.resetSwipes();
        }
    }

    private handleSwipeRight() {
        // Only count right swipes if we've completed 2 left swipes
        if (this.swipeCount.left === 2) {
            this.swipeCount.right++;
            console.log(`👉 Admin swipe right: ${this.swipeCount.right}/2`);

            if (this.swipeCount.right === 2) {
                console.log('🎉 Admin gesture detected!');
                this.activateAdminMode();
                this.resetSwipes();
            }
        } else {
            // Reset if swiping right before completing left swipes
            console.log('❌ Complete left swipes first! Resetting admin gesture...');
            this.resetSwipes();
        }
    }

    private resetSwipes() {
        this.swipeCount = { left: 0, right: 0 };
    }

    private handleKeyDown(e: KeyboardEvent) {
        const currentTime = Date.now();

        // Reset if timeout exceeded
        if (currentTime - this.lastKeyTime > this.KEY_TIMEOUT) {
            this.keySequence = [];
            this.enterPressCount = 0;
        }

        this.lastKeyTime = currentTime;

        if (e.key === 'Enter') {
            // Check if we've typed the correct sequence
            const typedSequence = this.keySequence.join('').toLowerCase();

            if (typedSequence === this.TARGET_SEQUENCE) {
                this.enterPressCount++;
                console.log(`⏎ Admin Enter pressed: ${this.enterPressCount}/2`);

                if (this.enterPressCount === 2) {
                    console.log('🎉 Admin keyboard sequence detected!');
                    this.activateAdminMode();
                    this.keySequence = [];
                    this.enterPressCount = 0;
                }
            } else {
                // Wrong sequence, reset
                this.keySequence = [];
                this.enterPressCount = 0;
            }
        } else if (e.key.length === 1 && /[a-z]/i.test(e.key)) {
            // Only add letter keys
            this.keySequence.push(e.key.toLowerCase());

            // Keep only the last 5 characters (length of "admin")
            if (this.keySequence.length > this.TARGET_SEQUENCE.length) {
                this.keySequence.shift();
            }

            const currentSequence = this.keySequence.join('');
            if (currentSequence === this.TARGET_SEQUENCE) {
                console.log('✅ Sequence "admin" typed! Press Enter twice...');
            }
        }
    }

    private activateAdminMode() {
        // Check if in Fake Real Mode first
        const isFakeRealMode = localStorage.getItem('demo_icon_us_flag') === 'true';

        if (!isFakeRealMode) {
            console.warn('⚠️ Admin Mode requires Fake Real Mode to be enabled first!');
            alert('Please enable Fake Real Mode first before activating Admin Mode');
            return;
        }

        const currentMode = localStorage.getItem('admin_demo_mode') === 'true';

        if (!currentMode) {
            // Enable admin demo mode
            localStorage.setItem('admin_demo_mode', 'true');
            console.log('✅ Admin Demo Mode ENABLED');

            // Dispatch event for UI to react
            window.dispatchEvent(
                new CustomEvent('admin-mode-changed', {
                    detail: { enabled: true },
                })
            );

            // Show notification
            this.showNotification('🔧 Admin Demo Mode Activated', 'Demo mode controls are now available');
        } else {
            // Disable admin demo mode
            localStorage.setItem('admin_demo_mode', 'false');
            console.log('✅ Admin Demo Mode DISABLED');

            // Dispatch event for UI to react
            window.dispatchEvent(
                new CustomEvent('admin-mode-changed', {
                    detail: { enabled: false },
                })
            );

            // Show notification
            this.showNotification('🔧 Admin Demo Mode Deactivated', 'Demo mode controls are now hidden');
        }
    }

    private showNotification(title: string, message: string) {
        // Create notification element
        const notification = document.createElement('div');
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 16px 24px;
            border-radius: 12px;
            box-shadow: 0 8px 24px rgba(0,0,0,0.3);
            z-index: 10000;
            font-family: 'Inter', sans-serif;
            max-width: 350px;
            animation: slideIn 0.3s ease-out;
        `;

        notification.innerHTML = `
            <div style="font-weight: 700; font-size: 16px; margin-bottom: 4px;">${title}</div>
            <div style="font-size: 14px; opacity: 0.9;">${message}</div>
        `;

        // Add animation
        const style = document.createElement('style');
        style.textContent = `
            @keyframes slideIn {
                from {
                    transform: translateX(400px);
                    opacity: 0;
                }
                to {
                    transform: translateX(0);
                    opacity: 1;
                }
            }
        `;
        document.head.appendChild(style);

        document.body.appendChild(notification);

        // Remove after 4 seconds
        setTimeout(() => {
            notification.style.animation = 'slideIn 0.3s ease-out reverse';
            setTimeout(() => {
                notification.remove();
                style.remove();
            }, 300);
        }, 4000);
    }

    public destroy() {
        document.removeEventListener('touchstart', this.handleTouchStart.bind(this));
        document.removeEventListener('touchend', this.handleTouchEnd.bind(this));
        document.removeEventListener('keydown', this.handleKeyDown.bind(this));
    }
}

// Initialize the detector
let detectorInstance: AdminModeDetector | null = null;

export const initAdminModeDetector = () => {
    if (!detectorInstance) {
        detectorInstance = new AdminModeDetector();
        console.log('🔐 Admin Mode Detector initialized');
    }
    return detectorInstance;
};

export const destroyAdminModeDetector = () => {
    if (detectorInstance) {
        detectorInstance.destroy();
        detectorInstance = null;
        console.log('🔐 Admin Mode Detector destroyed');
    }
};

export const isAdminModeEnabled = (): boolean => {
    return localStorage.getItem('admin_demo_mode') === 'true';
};
