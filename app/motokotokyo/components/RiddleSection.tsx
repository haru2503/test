'use client';

import React, { useState } from 'react';
import TypewriterText from './TypewriterText';
import VisualClue from './VisualClue';
import PuzzleInputs, { InputConfig } from './PuzzleInputs';
import StatusMessage from './StatusMessage';

export interface RiddleData {
    id: string;
    title: string;
    description: string;
    visualClue: string;
    inputs: InputConfig[];
}

interface RiddleSectionProps {
    riddle: RiddleData;
}

export default function RiddleSection({ riddle }: RiddleSectionProps) {
    const [inputValues, setInputValues] = useState<Record<string, string>>({});
    const [status, setStatus] = useState<'success' | 'error' | null>(null);
    const [statusMessage, setStatusMessage] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleInputChange = (id: string, value: string) => {
        setInputValues((prev) => ({ ...prev, [id]: value }));
    };

    const handleSubmit = async () => {
        setIsSubmitting(true);
        setStatus(null);

        // Mock validation logic
        setTimeout(() => {
            const isCorrect = Math.random() > 0.5;

            if (isCorrect) {
                setStatus('success');
                setStatusMessage('Solved');
            } else {
                setStatus('error');
                setStatusMessage('Invalid code: 3');
            }

            setIsSubmitting(false);
        }, 1500);
    };

    return (
        <div className="flex flex-col relative z-10">
            {/* Header */}
            <div className="mb-6">
                <div className="flex flex-col gap-2 mb-6 border-b border-slate-800 pb-4">
                    <div className="flex items-center justify-between">
                        <span className="text-sm font-mono text-cyan-400 font-bold tracking-widest uppercase">Riddle 5 of 8</span>
                        <span className="text-xs font-mono text-slate-500">50% Complete</span>
                    </div>
                    <div className="flex items-center gap-2">
                        {/* Progress Dots Mockup */}
                        {[1, 2, 3, 4].map(i => (
                            <div key={i} className="w-3 h-3 rounded-full bg-cyan-600 shadow-[0_0_8px_rgba(8,145,178,0.4)]" />
                        ))}
                        <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.6)]" />
                        {[6, 7, 8].map(i => (
                            <div key={i} className="w-3 h-3 rounded-full bg-slate-800" />
                        ))}
                    </div>
                </div>

                <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]">
                    {riddle.title}
                </h1>

                {/* Description with Typing Effect */}
                <div className="p-4 bg-slate-900/50 border-l-2 border-yellow-500 backdrop-blur-sm rounded-r-lg">
                    <TypewriterText
                        text={riddle.description}
                        speed={50}
                        className="text-sm md:text-base leading-relaxed"
                    />
                </div>
            </div>

            {/* Visual Clue */}
            <VisualClue src={riddle.visualClue} alt="Visual Clue" />

            {/* Status Message Area */}
            <div className="h-14 mb-4 flex items-center justify-center">
                <StatusMessage
                    status={status}
                    message={statusMessage}
                    onHide={() => setStatus(null)}
                />
            </div>

            {/* Inputs */}
            <div className="mb-6">
                <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-b border-gray-800 pb-2">
                    Solve the Combination
                </h3>
                <PuzzleInputs
                    inputs={riddle.inputs}
                    values={inputValues}
                    onChange={handleInputChange}
                />
            </div>

            {/* Submit Button */}
            <button
                onClick={handleSubmit}
                disabled={isSubmitting}
                className={`
          w-full py-4 rounded-lg font-bold text-lg tracking-widest uppercase transition-all duration-300
          bg-gradient-to-r from-pink-600 via-purple-600 to-cyan-600
          hover:shadow-[0_0_20px_rgba(236,72,153,0.5)] hover:scale-[1.02]
          disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer
          text-white
        `}
            >
                {isSubmitting ? 'Verifying...' : 'Submit'}
            </button>
        </div>
    );
}
