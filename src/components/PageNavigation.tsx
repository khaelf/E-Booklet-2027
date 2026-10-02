import React from 'react';
import { ChevronLeft, ChevronRight, List } from 'lucide-react';

interface PageNavigationProps {
  currentPage: number; // 1 to 24
  totalPages: number;  // 24
  onPageChange: (page: number) => void;
  onOpenToc: () => void;
}

export const PageNavigation: React.FC<PageNavigationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
  onOpenToc
}) => {
  const progressPercent = Math.round((currentPage / totalPages) * 100);

  return (
    <div className="w-full bg-slate-900 border-t border-slate-800 text-white py-2 px-3 sm:px-6 sticky bottom-0 z-30 shadow-lg">
      
      {/* Top Progress Line */}
      <div className="w-full bg-slate-800 h-1 rounded-full overflow-hidden mb-2">
        <div
          className="bg-gradient-to-r from-emerald-500 to-amber-400 h-full transition-all duration-300"
          style={{ width: `${progressPercent}%` }}
        />
      </div>

      <div className="max-w-2xl mx-auto flex items-center justify-between gap-2 text-xs">
        
        {/* Prev Button */}
        <button
          onClick={() => currentPage > 1 && onPageChange(currentPage - 1)}
          disabled={currentPage <= 1}
          className={`flex items-center gap-1 px-3 py-1.5 rounded-lg font-semibold transition-colors ${
            currentPage <= 1
              ? 'opacity-40 text-slate-500 cursor-not-allowed'
              : 'bg-slate-800 hover:bg-emerald-900 text-amber-300 active:scale-95 cursor-pointer'
          }`}
        >
          <ChevronLeft className="w-4 h-4" />
          <span className="hidden sm:inline">Sebelumnya</span>
        </button>

        {/* Center TOC & Page Counter */}
        <div className="flex items-center gap-2">
          <button
            onClick={onOpenToc}
            className="flex items-center gap-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 px-3 py-1.5 rounded-lg font-medium transition-colors cursor-pointer border border-slate-700"
          >
            <List className="w-3.5 h-3.5 text-amber-400" />
            <span className="hidden sm:inline">Daftar Isi</span>
          </button>

          <span className="font-mono text-emerald-300 font-bold bg-slate-950 px-2.5 py-1 rounded-lg border border-slate-800 text-xs">
            Halaman {currentPage} / {totalPages}
          </span>
        </div>

        {/* Next Button */}
        <button
          onClick={() => currentPage < totalPages && onPageChange(currentPage + 1)}
          disabled={currentPage >= totalPages}
          className={`flex items-center gap-1 px-3 py-1.5 rounded-lg font-semibold transition-colors ${
            currentPage >= totalPages
              ? 'opacity-40 text-slate-500 cursor-not-allowed'
              : 'bg-slate-800 hover:bg-emerald-900 text-amber-300 active:scale-95 cursor-pointer'
          }`}
        >
          <span className="hidden sm:inline">Berikutnya</span>
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
