import React from 'react';
import { REGISTRATION_URL } from '../data/bookletData';
import { ExternalLink, Sparkles } from 'lucide-react';

export const FloatingCTA: React.FC = () => {
  return (
    <div className="fixed bottom-14 right-4 z-40 sm:bottom-16 sm:right-6">
      <a
        href={REGISTRATION_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-extrabold px-4 py-2.5 rounded-full shadow-2xl border-2 border-slate-900 transition-all hover:scale-105 active:scale-95 text-xs sm:text-sm group"
        title="Buka Website Pendaftaran Online"
      >
        <Sparkles className="w-4 h-4 text-emerald-950 animate-pulse" />
        <span>DAFTAR SEKARANG</span>
        <ExternalLink className="w-4 h-4 text-slate-900 group-hover:translate-x-0.5 transition-transform" />
      </a>
    </div>
  );
};
