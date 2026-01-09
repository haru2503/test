'use client';

import React, { useEffect, useState } from 'react';
import { CheckCircle, AlertCircle } from 'lucide-react';

interface StatusMessageProps {
    status: 'success' | 'error' | null;
    message: string;
    onHide?: () => void;
}

export default function StatusMessage({ status, message, onHide }: StatusMessageProps) {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        if (status) {
            setVisible(true);
            const timer = setTimeout(() => {
                setVisible(false);
                if (onHide) onHide();
            }, 10000); // 10 seconds

            return () => clearTimeout(timer);
        } else {
            setVisible(false);
        }
    }, [status, onHide]);

    if (!visible || !status) return null;

    const isSuccess = status === 'success';

    return (
        <div
            className={`
        flex items-center gap-2 p-3 rounded-md border backdrop-blur-md transition-all duration-500
        ${isSuccess
                    ? 'bg-green-900/50 border-green-500 text-green-400'
                    : 'bg-red-900/50 border-red-500 text-red-400'}
      `}
        >
            {isSuccess ? <CheckCircle size={20} /> : <AlertCircle size={20} />}
            <span className="font-mono font-bold">{message}</span>
        </div>
    );
}
