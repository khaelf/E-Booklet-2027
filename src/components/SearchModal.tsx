import React, { useState } from 'react';
import { BOOKLET_PAGES_DATA, BookletPage } from '../data/bookletData';
import { X, Search, ChevronRight, FileText } from 'lucide-react';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectPage: (pageNumber: number) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  onSelectPage
}) => {
  const [query, setQuery] = useState<string>('');

  if (!isOpen) return null;

  const quickKeywords = ['MTs', 'MA', 'PDF', 'Ma\'had Aly', 'Biaya', 'Tahfizh', 'Prestasi', 'Asrama', 'Syarat', 'Jadwal', 'Parabek', 'Banuhampu'];

  const results = query.trim() === ''
    ? []
    : BOOKLET_PAGES_DATA.filter((p: BookletPage) => {
        const q = query.toLowerCase();
        return (
          p.title.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q) ||
          p.contentSummary.toLowerCase().includes(q) ||
          p.keywords.some(k => k.toLowerCase().includes(q))
        );
      });

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/80 backdrop-blur-sm animate-fade-in">
      <div className="bg-slate-900 border border-slate-700 w-full max-w-xl rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[85vh]">
        
        {/* Header */}
        <div className="p-4 bg-slate-800 border-b border-slate-700 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Search className="w-5 h-5 text-emerald-400" />
            <h3 className="text-base font-bold text-white font-serif">
              PENCARIAN CEPAT BOOKLET
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Search Input Bar */}
        <div className="p-4 bg-slate-800/60 border-b border-slate-800 space-y-3">
          <div className="relative">
            <Search className="w-4 h-4 text-emerald-400 absolute left-3 top-3" />
            <input
              type="text"
              autoFocus
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Ketik kata kunci (contoh: MTs, Biaya, Asrama, Tahfizh)..."
              className="w-full bg-slate-950 border border-slate-700 rounded-xl pl-9 pr-3 py-2.5 text-xs sm:text-sm text-slate-100 focus:outline-none focus:border-emerald-500 shadow-inner"
            />
            {query && (
              <button
                onClick={() => setQuery('')}
                className="absolute right-3 top-2.5 text-slate-400 hover:text-white text-xs bg-slate-800 px-1.5 py-0.5 rounded"
              >
                Reset
              </button>
            )}
          </div>

          {/* Quick Keywords Cloud */}
          <div className="flex flex-wrap items-center gap-1.5 text-[11px]">
            <span className="text-slate-400 font-medium">Saran Pencarian:</span>
            {quickKeywords.map((kw) => (
              <button
                key={kw}
                onClick={() => setQuery(kw)}
                className="bg-slate-800 hover:bg-emerald-900/60 text-slate-300 hover:text-amber-300 border border-slate-700 px-2 py-0.5 rounded transition-colors"
              >
                {kw}
              </button>
            ))}
          </div>
        </div>

        {/* Results List */}
        <div className="p-3 overflow-y-auto flex-1 space-y-2">
          {query.trim() === '' ? (
            <div className="text-center py-10 text-slate-400 text-xs space-y-2">
              <FileText className="w-8 h-8 text-slate-600 mx-auto" />
              <p>Ketik kata kunci untuk mencari seluruh informasi dalam booklet.</p>
            </div>
          ) : results.length === 0 ? (
            <div className="text-center py-10 text-slate-400 text-xs space-y-1">
              <p className="text-amber-400 font-semibold">Tidak ada hasil untuk "{query}"</p>
              <p>Coba kata kunci lain seperti: MTs, MA, Biaya, Tahfizh, atau Asrama.</p>
            </div>
          ) : (
            results.map((item: BookletPage) => (
              <button
                key={item.id}
                onClick={() => {
                  onSelectPage(item.pdfPageNumber);
                  onClose();
                }}
                className="w-full flex items-start justify-between p-3 rounded-xl bg-slate-800/80 hover:bg-slate-800 border border-slate-700/80 hover:border-emerald-500 text-left transition-all group"
              >
                <div className="space-y-1 pr-2">
                  <div className="flex items-center gap-2">
                    <span className="bg-emerald-900 text-amber-300 font-mono font-bold text-[10px] px-2 py-0.5 rounded">
                      Halaman {item.pdfPageNumber}
                    </span>
                    <span className="text-[10px] text-emerald-400 font-semibold bg-slate-950 px-2 py-0.5 rounded border border-slate-800">
                      {item.category}
                    </span>
                  </div>
                  <h4 className="text-xs sm:text-sm font-bold text-white group-hover:text-amber-300 transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-[11px] text-slate-300 line-clamp-2">
                    {item.contentSummary}
                  </p>
                </div>

                <div className="self-center shrink-0 p-1.5 rounded-lg bg-slate-950 border border-slate-800 group-hover:border-emerald-500">
                  <ChevronRight className="w-4 h-4 text-emerald-400" />
                </div>
              </button>
            ))
          )}
        </div>

        {/* Footer Result Counter */}
        <div className="p-3 bg-slate-800 border-t border-slate-700 text-[11px] text-slate-400 text-center font-mono">
          {query.trim() !== '' && `${results.length} Halaman ditemukan untuk "${query}"`}
        </div>
      </div>
    </div>
  );
};
