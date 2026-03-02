/**
 * Confirmation Dialog Component
 * 
 * Displays confirmation dialogs for destructive actions.
 * 
 * Requirements: 33.1, 33.2, 33.3, 33.4, 33.5
 */

import React from 'react';
import Dialog from '../shared_ui/dialog/dialog';

interface ConfirmationDialogProps {
    isVisible: boolean;
    title: string;
    message: string;
    confirmText?: string;
    cancelText?: string;
    onConfirm: () => void;
    onCancel: () => void;
}

const ConfirmationDialog: React.FC<ConfirmationDialogProps> = ({
    isVisible,
    title,
    message,
    confirmText = 'Confirm',
    cancelText = 'Cancel',
    onConfirm,
    onCancel,
}) => {
    return (
        <Dialog
            is_visible={isVisible}
            title={title}
            confirm_button_text={confirmText}
            cancel_button_text={cancelText}
            onConfirm={onConfirm}
            onCancel={onCancel}
            is_content_centered
        >
            <p>{message}</p>
        </Dialog>
    );
};

export default ConfirmationDialog;
