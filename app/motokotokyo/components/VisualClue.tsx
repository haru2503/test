'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { X, Download, Maximize2 } from 'lucide-react';

interface VisualClueProps {
    src: string;
    alt: string;
}

export default function VisualClue({ src, alt }: VisualClueProps) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="my-6">
            <div className="flex items-center justify-between mb-2">
                <h3 className="text-sm font-bold text-white uppercase tracking-wider">Visual Clue</h3>
                <span className="text-xs text-gray-500">Click to enlarge</span>
            </div>

            {/* Thumbnail */}
            <div
                className="relative group cursor-pointer border border-gray-800 rounded-lg overflow-hidden hover:border-cyan-500 transition-colors"
                onClick={() => setIsOpen(true)}
            >
                <div className="relative w-full">
                    <Image
                        src={src}
                        alt={alt}
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{ width: '100%', height: 'auto' }}
                        className="transition-transform duration-500 group-hover:scale-105"
                        unoptimized // Ensure no compression
                    />
                </div>
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <Maximize2 className="text-white w-8 h-8" />
                </div>
            </div>

            {/* Modal */}
            {isOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                    {/* Backdrop */}
                    <div
                        className="absolute inset-0 bg-black/90 backdrop-blur-sm"
                        onClick={() => setIsOpen(false)}
                    />

                    {/* Content */}
                    <div className="relative z-10 max-w-5xl w-full max-h-[90vh] flex flex-col items-center">
                        <div className="relative w-full h-[80vh] mb-4">
                            <Image
                                src={src}
                                alt={alt}
                                fill
                                className="object-contain"
                                unoptimized // Ensure no compression
                            />
                        </div>

                        <div className="flex gap-4">
                            <button
                                onClick={() => setIsOpen(false)}
                                className="flex items-center gap-2 px-6 py-2 bg-gray-800 hover:bg-gray-700 text-white rounded-full transition-colors"
                            >
                                <X size={18} /> Close
                            </button>

                            <a
                                href={src}
                                download
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 px-6 py-2 bg-cyan-600 hover:bg-cyan-500 text-white rounded-full transition-colors"
                            >
                                <Download size={18} /> Open Original / Download
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
