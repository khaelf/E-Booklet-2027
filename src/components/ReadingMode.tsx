import React, { useState } from 'react';
import { BOOKLET_PAGES_DATA, REGISTRATION_URL } from '../data/bookletData';
import { BookPageRenderer } from './BookPageRenderer';
import { 
  Type, 
  ExternalLink, 
  Bookmark, 
  Search, 
  List, 
  ArrowUp
} from 'lucide-react';

interface ReadingModeProps {
  currentPage: number;
  onPageChange: (page: number) => void;
  onOpenToc: () => void;
  onOpenSearch: () => void;
  bookmarkedPages: number[];
  onToggleBookmarkPage: (page: number) => void;
}

export const ReadingMode: React.FC<ReadingModeProps> = ({
  currentPage,
  onPageChange,
  onOpenToc,
  onOpenSearch,
  bookmarkedPages,
  onToggleBookmarkPage
}) => {
  const [fontSize, setFontSize] = useState<'sm' | 'md' | 'lg'>('md');

  const getFontSizeClass = () => {
    switch (fontSize) {
      case 'sm': return 'text-xs sm:text-sm';
      case 'lg': return 'text-base sm:text-lg';
      default: return 'text-sm sm:text-base';
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="w-full max-w-3xl mx-auto py-4 px-3 sm:px-6 space-y-6">
      
      {/* Top Reading Toolbar */}
      <div className="sticky top-14 z-20 bg-slate-800/95 backdrop-blur p-3 rounded-xl border border-slate-700 shadow-md flex items-center justify-between text-xs gap-2">
        <div className="flex items-center gap-1.5">
          <button
            onClick={onOpenToc}
            className="flex items-center gap-1 bg-slate-700 hover:bg-slate-600 text-slate-200 px-2.5 py-1.5 rounded transition-colors font-medium"
          >
            <List className="w-3.5 h-3.5 text-amber-400" />
            <span className="hidden sm:inline">Daftar Isi</span>
          </button>

          <button
            onClick={onOpenSearch}
            className="flex items-center gap-1 bg-slate-700 hover:bg-slate-600 text-slate-200 px-2.5 py-1.5 rounded transition-colors"
          >
            <Search className="w-3.5 h-3.5 text-emerald-400" />
            <span className="hidden sm:inline">Cari Text</span>
          </button>
        </div>

        {/* Font Size Selector */}
        <div className="flex items-center gap-1 bg-slate-900/80 p-1 rounded border border-slate-700">
          <Type className="w-3.5 h-3.5 text-slate-400 ml-1" />
          <button
            onClick={() => setFontSize('sm')}
            className={`px-2 py-0.5 rounded font-mono font-bold transition-colors ${
              fontSize === 'sm' ? 'bg-emerald-700 text-white' : 'text-slate-400 hover:text-white'
            }`}
          >
            A-
          </button>
          <button
            onClick={() => setFontSize('md')}
            className={`px-2 py-0.5 rounded font-mono font-bold transition-colors ${
              fontSize === 'md' ? 'bg-emerald-700 text-white' : 'text-slate-400 hover:text-white'
            }`}
          >
            A
          </button>
          <button
            onClick={() => setFontSize('lg')}
            className={`px-2 py-0.5 rounded font-mono font-bold transition-colors ${
              fontSize === 'lg' ? 'bg-emerald-700 text-white' : 'text-slate-400 hover:text-white'
            }`}
          >
            A+
          </button>
        </div>
      </div>

      {/* Main Continuous Document View */}
      <div className={`space-y-8 ${getFontSizeClass()}`}>
        {BOOKLET_PAGES_DATA.map((page) => {
          const isBookmarked = bookmarkedPages.includes(page.pdfPageNumber);
          const isSelected = page.pdfPageNumber === currentPage;

          return (
            <div 
              key={page.id}
              id={`page-${page.pdfPageNumber}`}
              className={`bg-white text-slate-900 rounded-xl p-4 sm:p-6 shadow-xl border transition-all ${
                isSelected 
                  ? 'ring-2 ring-emerald-500 border-emerald-400' 
                  : 'border-slate-200'
              }`}
            >
              {/* Top Card Navigation Bar */}
              <div className="flex justify-between items-center border-b border-slate-200 pb-2 mb-4 text-xs">
                <div className="flex items-center gap-2">
                  <span className="bg-emerald-800 text-amber-300 font-mono font-bold px-2 py-0.5 rounded text-[11px]">
                    Halaman {page.pdfPageNumber}
                  </span>
                  <span className="text-slate-500 font-medium hidden sm:inline">
                    {page.category}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => onToggleBookmarkPage(page.pdfPageNumber)}
                    className={`flex items-center gap-1 text-xs px-2 py-1 rounded transition-colors ${
                      isBookmarked ? 'bg-amber-100 text-amber-900 font-bold' : 'text-slate-500 hover:bg-slate-100'
                    }`}
                  >
                    <Bookmark className={`w-3.5 h-3.5 ${isBookmarked ? 'fill-current text-amber-600' : ''}`} />
                    <span>{isBookmarked ? 'Tersimpan' : 'Bookmark'}</span>
                  </button>

                  <button
                    onClick={() => onPageChange(page.pdfPageNumber)}
                    className="text-xs bg-emerald-50 hover:bg-emerald-100 text-emerald-900 font-medium px-2 py-1 rounded"
                  >
                    Buka di Flipbook
                  </button>
                </div>
              </div>

              {/* Render Page Content */}
              <div className="min-h-[280px]">
                <BookPageRenderer pageNumber={page.pdfPageNumber} />
              </div>
            </div>
          );
        })}
      </div>

      {/* Scroll to Top Button */}
      <div className="text-center pt-6 pb-12">
        <button
          onClick={scrollToTop}
          className="inline-flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-amber-300 font-semibold px-4 py-2 rounded-lg transition-colors border border-slate-700 text-xs"
        >
          <ArrowUp className="w-4 h-4" />
          <span>Kembali ke Atas</span>
        </button>
      </div>
    </div>
  );
};
