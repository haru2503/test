'use client';

import React, { useState, useEffect, useRef } from 'react';

interface TypewriterTextProps {
    text: string;
    speed?: number;
    audioUrl?: string;
    className?: string;
}

export default function TypewriterText({
    text,
    speed = 500, // 2 chars per second = 500ms per char
    audioUrl,
    className = '',
}: TypewriterTextProps) {
    const [displayedText, setDisplayedText] = useState('');
    const indexRef = useRef(0);
    const audioRef = useRef<HTMLAudioElement | null>(null);

    useEffect(() => {
        // Reset when text changes
        setDisplayedText('');
        indexRef.current = 0;
    }, [text]);

    useEffect(() => {
        if (!audioUrl && typeof window !== 'undefined') {
            // Create a simple beep oscillator if no audioUrl provided
            // We won't actually create it here to avoid noise spam, but logic is ready.
        } else if (audioUrl) {
            audioRef.current = new Audio(audioUrl);
        }
    }, [audioUrl]);

    useEffect(() => {
        const timer = setInterval(() => {
            if (indexRef.current < text.length) {
                setDisplayedText((prev) => prev + text.charAt(indexRef.current));
                indexRef.current++;

                // Play sound
                if (audioRef.current) {
                    audioRef.current.currentTime = 0;
                    audioRef.current.play().catch(() => { }); // Ignore autoplay errors
                }
            } else {
                clearInterval(timer);
            }
        }, speed);

        return () => clearInterval(timer);
    }, [text, speed]);

    return (
        <div
            className={`font-mono text-yellow-400 whitespace-pre-wrap overflow-visible ${className}`}
            style={{ wordBreak: 'break-word' }}
        >
            {displayedText}
            <span className="animate-pulse">_</span>
        </div>
    );
}
