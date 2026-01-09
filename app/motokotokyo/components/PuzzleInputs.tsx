'use client';

import React from 'react';
import { MapPin, Hash, Code } from 'lucide-react';

export interface InputConfig {
    id: string;
    label: string;
    placeholder?: string;
    type?: 'text' | 'number';
    icon?: 'code' | 'hash' | 'location';
    hint?: string;
}

interface PuzzleInputsProps {
    inputs: InputConfig[];
    values: Record<string, string>;
    onChange: (id: string, value: string) => void;
}

export default function PuzzleInputs({ inputs, values, onChange }: PuzzleInputsProps) {
    const getIcon = (type?: string) => {
        switch (type) {
            case 'location': return <MapPin size={16} className="text-pink-500" />;
            case 'hash': return <Hash size={16} className="text-cyan-500" />;
            default: return <Code size={16} className="text-slate-400" />;
        }
    };

    return (
        <div className="space-y-6">
            {inputs.map((input) => (
                <div key={input.id} className="bg-slate-900/40 border border-slate-800 rounded-lg p-4 hover:border-cyan-500/30 transition-colors group">
                    <div className="flex items-center gap-2 mb-3">
                        <div className="p-1.5 rounded bg-slate-800 text-cyan-400">
                            {getIcon(input.icon)}
                        </div>
                        <label className="text-xs font-bold text-slate-300 uppercase tracking-wider">
                            {input.label}
                        </label>
                    </div>

                    <div className="relative">
                        <input
                            type={input.type || 'text'}
                            value={values[input.id] || ''}
                            onChange={(e) => onChange(input.id, e.target.value)}
                            placeholder={input.placeholder}
                            className="w-full bg-black/50 border border-slate-700 rounded-md px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all font-mono text-sm"
                        />
                    </div>

                    {input.hint && (
                        <div className="mt-2 text-[11px] font-mono text-slate-500 flex items-center gap-2">
                            <span className="w-1 h-1 rounded-full bg-slate-600" />
                            {input.hint}
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
}
