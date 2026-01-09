'use client';

import React from 'react';
import RiddleSection, { RiddleData } from './components/RiddleSection';
import Leaderboard from './components/Leaderboard';
// @ts-expect-error - MatrixBG is a JS file
import MatrixBG from './matrix-rain/src/MatrixBG';

// Mock Riddle Data
const MOCK_RIDDLE: RiddleData = {
  id: 'riddle-1',
  title: 'Pyramids in the Sky',
  description: 'Beneath arches where lions and legends once roared. A gladiator\'s defeat? History can\'t afford. When Nero\'s name whispered, a ruler ignored - Who fell to the daggers, ambition\'s reward?',
  visualClue: 'https://assets.motokotokyogame.net/MT_Assets/image/clues/4.jpg',
  inputs: [
    { id: 'code1', label: 'Code 1', icon: 'code', placeholder: 'Enter code...', hint: 'Caesar' },
    { id: 'code2', label: 'Code 2', icon: 'code', placeholder: 'Enter code...', hint: 'March 15' },
    { id: 'code3', label: 'Code 3', icon: 'code', placeholder: 'Enter code...' },
    { id: 'location', label: 'Location (City, Country)', icon: 'location', placeholder: 'City, Country', hint: 'Coordinates: Lat,Long' },
  ]
};

export default function MotokoTokyoPage() {
  return (
    <main className="fixed inset-0 z-[9999] min-h-screen bg-black text-white font-sans selection:bg-cyan-500/30 selection:text-cyan-200 overflow-y-auto no-scrollbar">

      {/* Matrix Rain Background Wrapper (z-0) */}
      <div className="absolute inset-0 z-0 opacity-80 pointer-events-none fixed">
        <MatrixBG />
      </div>

      {/* Vignette Overlay */}
      <div className="absolute inset-0 z-0 pointer-events-none fixed bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.6)_100%)]" />

      {/* Content Wrapper (z-10) */}
      <div className="relative z-10 container mx-auto px-4 py-8 flex flex-col min-h-screen">

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 flex-1 mt-12">

          {/* Left Column: Riddle Section (7 cols) */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="bg-black/40 backdrop-blur-md border border-slate-800 p-6 rounded-2xl shadow-[0_0_30px_rgba(0,0,0,0.5)]">
              <RiddleSection riddle={MOCK_RIDDLE} />
            </div>
          </div>

          {/* Right Column: Leaderboard (5 cols) */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="sticky top-24">
              <Leaderboard />
            </div>
          </div>
        </div>
      </div>

      {/* Global Styles for Scrollbar */}
      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(0, 0, 0, 0.1);
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(34, 211, 238, 0.2);
          border-radius: 3px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(34, 211, 238, 0.5);
        }
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </main>
  );
}
