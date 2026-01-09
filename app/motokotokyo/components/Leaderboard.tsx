'use client';

import React from 'react';
import { Trophy, User } from 'lucide-react';

// Mock data for the leaderboard
const MOCK_LEADERBOARD = [
    { id: 1, name: 'godvengance', score: 22842, riddles: 5, avatar: null },
    { id: 2, name: 'sans_tutoriel', score: 21942, riddles: 5, avatar: null },
    { id: 3, name: 'x292841', score: 21842, riddles: 5, avatar: null },
    { id: 4, name: 'networksun2077', score: 21242, riddles: 5, avatar: null },
    { id: 5, name: 'motoko.1101', score: 21042, riddles: 5, avatar: null },
    { id: 6, name: 'cipher_', score: 21042, riddles: 5, avatar: null },
    { id: 7, name: 't0xic_city', score: 21042, riddles: 5, avatar: null },
    { id: 8, name: 'saroukan76321', score: 21042, riddles: 5, avatar: null },
    { id: 9, name: 'satoshi_nakamoto', score: 21042, riddles: 5, avatar: null },
    { id: 10, name: 'unityrunner_2027', score: 21042, riddles: 5, avatar: null },
    { id: 11, name: 'hunter_be_here', score: 11942, riddles: 3 },
    { id: 12, name: 'therainmanresur', score: 11942, riddles: 3 },
    { id: 13, name: 'shell110176359', score: 11942, riddles: 3 },
    { id: 14, name: 'rootaccess', score: 11942, riddles: 3 },
    { id: 15, name: 'survival_instinct', score: 11942, riddles: 3 },
];

export default function Leaderboard() {
    return (
        <div className="h-full flex flex-col bg-slate-900/80 backdrop-blur-md border border-slate-800 rounded-xl overflow-hidden shadow-[0_0_20px_rgba(0,0,0,0.5)]">
            <div className="p-4 border-b border-slate-800 bg-black/40">
                <h2 className="text-xl font-bold text-white flex items-center gap-2">
                    <Trophy className="text-yellow-400" size={20} />
                    Leaderboard
                </h2>
            </div>

            <div className="flex-1 overflow-hidden relative">
                <div className="absolute inset-0 overflow-y-auto no-scrollbar">
                    <table className="w-full text-left text-sm">
                        <thead className="sticky top-0 bg-slate-900/95 text-xs uppercase text-slate-400 font-medium z-10">
                            <tr>
                                <th className="p-3 pl-4">Avatar</th>
                                <th className="p-3">Rank</th>
                                <th className="p-3 w-full">Player</th>
                                <th className="p-3 text-right">Score</th>
                                <th className="p-3 text-right pr-4">Riddles</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-800/50">
                            {MOCK_LEADERBOARD.map((player, index) => (
                                <tr
                                    key={player.id}
                                    className="hover:bg-white/5 transition-colors group"
                                >
                                    <td className="p-3 pl-4">
                                        <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center border border-slate-700 group-hover:border-cyan-500/50 transition-colors">
                                            <User size={14} className="text-slate-400" />
                                        </div>
                                    </td>
                                    <td className="p-3 font-mono text-slate-500">
                                        {index + 1 < 10 ? `0${index + 1}` : index + 1}
                                    </td>
                                    <td className="p-3 font-medium text-slate-200 group-hover:text-cyan-400 transition-colors">
                                        {player.name}
                                    </td>
                                    <td className="p-3 text-right font-mono text-slate-400">
                                        {player.score.toLocaleString()}
                                    </td>
                                    <td className="p-3 text-right pr-4 font-mono text-slate-400">
                                        {player.riddles}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Footer stats */}
            <div className="p-3 bg-black/60 border-t border-slate-800 text-xs text-slate-500 flex justify-between font-mono">
                <span>Total Players: 742</span>
                <span>Updated: Just now</span>
            </div>
        </div>
    );
}
