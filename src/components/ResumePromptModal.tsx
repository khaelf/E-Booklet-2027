import React from 'react';
import { BookOpen, RefreshCw } from 'lucide-react';

interface ResumePromptModalProps {
  isOpen: boolean;
  savedPage: number;
  onResume: () => void;
  onRestart: () => void;
}

export const ResumePromptModal: React.FC<ResumePromptModalProps> = ({
  isOpen,
  savedPage,
  onResume,
  onRestart
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md animate-fade-in">
      <div className="bg-gradient-to-b from-slate-900 to-slate-950 border border-amber-400/40 w-full max-w-sm rounded-2xl shadow-2xl p-6 text-center space-y-4">
        
        <div className="w-12 h-12 rounded-full bg-emerald-900/80 border border-amber-400/60 text-amber-300 mx-auto flex items-center justify-center shadow-lg">
          <BookOpen className="w-6 h-6" />
        </div>

        <div className="space-y-1">
          <h3 className="text-lg font-bold text-white font-serif">
            Lanjutkan Membaca?
          </h3>
          <p className="text-xs text-slate-300 leading-relaxed">
            Anda terakhir membaca hingga <strong className="text-amber-300 font-mono">Halaman {savedPage}</strong> dalam booklet.
          </p>
        </div>

        <div className="space-y-2 pt-2">
          <button
            onClick={onResume}
            className="w-full bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold px-4 py-2.5 rounded-xl shadow-lg transition-transform active:scale-95 text-xs sm:text-sm flex items-center justify-center gap-2 cursor-pointer"
          >
            <BookOpen className="w-4 h-4" />
            <span>Lanjutkan Halaman {savedPage}</span>
          </button>

          <button
            onClick={onRestart}
            className="w-full bg-slate-800 hover:bg-slate-700 text-slate-300 font-semibold px-4 py-2 rounded-xl transition-colors text-xs flex items-center justify-center gap-2 cursor-pointer"
          >
            <RefreshCw className="w-3.5 h-3.5 text-slate-400" />
            <span>Mulai Dari Awal</span>
          </button>
        </div>
      </div>
    </div>
  );
};
