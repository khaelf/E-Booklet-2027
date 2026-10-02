import React, { useState } from 'react';
import { TABLE_OF_CONTENTS, TocItem } from '../data/bookletData';
import { X, Search, ChevronRight, BookOpen } from 'lucide-react';

interface TableOfContentsModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectPage: (pageNumber: number) => void;
  currentPage: number;
}

export const TableOfContentsModal: React.FC<TableOfContentsModalProps> = ({
  isOpen,
  onClose,
  onSelectPage,
  currentPage
}) => {
  const [tocFilter, setTocFilter] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('Semua');

  if (!isOpen) return null;

  const categories = ['Semua', 'MTs', 'MA', 'PDF', "Ma'had Aly", 'Asrama', 'Ketentuan', 'Kontak'];

  const filteredItems = TABLE_OF_CONTENTS.filter((item) => {
    const matchesCategory = selectedCategory === 'Semua' || item.category === selectedCategory;
    const matchesSearch = item.title.toLowerCase().includes(tocFilter.toLowerCase()) || item.number.includes(tocFilter);
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/80 backdrop-blur-sm animate-fade-in">
      <div className="bg-slate-900 border border-slate-700 w-full max-w-xl rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[85vh]">
        
        {/* Header */}
        <div className="p-4 bg-slate-800 border-b border-slate-700 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-amber-400" />
            <h3 className="text-base font-bold text-white font-serif">
              DAFTAR ISI BOOKLET
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Search & Category Filter Bar */}
        <div className="p-3 bg-slate-800/50 border-b border-slate-800 space-y-2">
          <div className="relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
            <input
              type="text"
              value={tocFilter}
              onChange={(e) => setTocFilter(e.target.value)}
              placeholder="Cari bagian (misal: MTs, Biaya, Asrama)..."
              className="w-full bg-slate-950 border border-slate-700 rounded-lg pl-9 pr-3 py-2 text-xs text-slate-100 focus:outline-none focus:border-emerald-500"
            />
          </div>

          <div className="flex items-center gap-1 overflow-x-auto pb-1 text-xs no-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-2.5 py-1 rounded-md whitespace-nowrap transition-colors font-medium ${
                  selectedCategory === cat
                    ? 'bg-emerald-700 text-white shadow'
                    : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* TOC List Items */}
        <div className="p-3 overflow-y-auto flex-1 space-y-1">
          {filteredItems.length === 0 ? (
            <div className="text-center py-8 text-slate-400 text-xs">
              Tidak ada item daftar isi yang cocok dengan pencarian.
            </div>
          ) : (
            filteredItems.map((item: TocItem) => {
              const isCurrent = currentPage === item.pageNumber;
              return (
                <button
                  key={item.number + item.title}
                  onClick={() => {
                    onSelectPage(item.pageNumber);
                    onClose();
                  }}
                  className={`w-full flex items-center justify-between p-2.5 rounded-xl text-left text-xs transition-all ${
                    isCurrent
                      ? 'bg-gradient-to-r from-emerald-800 to-teal-900 text-white font-bold border border-emerald-500 shadow-md'
                      : 'bg-slate-800/60 hover:bg-slate-800 text-slate-200 border border-slate-800'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="bg-slate-950 text-amber-300 font-mono font-bold px-2 py-0.5 rounded border border-slate-700 text-[11px]">
                      {item.number}
                    </span>
                    <span className="font-medium text-slate-100">{item.title}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-mono font-semibold bg-slate-950 text-emerald-400 px-2 py-0.5 rounded border border-slate-800">
                      Hal {item.pageNumber}
                    </span>
                    <ChevronRight className="w-4 h-4 text-slate-400" />
                  </div>
                </button>
              );
            })
          )}
        </div>

        {/* Footer */}
        <div className="p-3 bg-slate-800 border-t border-slate-700 text-[11px] text-slate-400 text-center">
          Pilih salah satu bab untuk menuju langsung ke halaman terkait
        </div>
      </div>
    </div>
  );
};
