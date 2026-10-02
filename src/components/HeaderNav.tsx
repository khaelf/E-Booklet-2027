import React from 'react';
import { REGISTRATION_URL } from '../data/bookletData';
import { 
  BookOpen, 
  FileText, 
  Search, 
  Bookmark, 
  ExternalLink,
  Volume2,
  VolumeX,
  List
} from 'lucide-react';

interface HeaderNavProps {
  viewMode: 'cover' | 'flipbook' | 'reading';
  onModeChange: (mode: 'flipbook' | 'reading' | 'cover') => void;
  onOpenToc: () => void;
  onOpenSearch: () => void;
  onOpenBookmark: () => void;
  bookmarkCount: number;
  isMuted: boolean;
  onMuteToggle: () => void;
}

export const HeaderNav: React.FC<HeaderNavProps> = ({
  viewMode,
  onModeChange,
  onOpenToc,
  onOpenSearch,
  onOpenBookmark,
  bookmarkCount,
  isMuted,
  onMuteToggle
}) => {
  return (
    <header className="sticky top-0 z-40 bg-slate-900/95 backdrop-blur border-b border-emerald-900/40 text-white px-3 sm:px-6 py-2.5 shadow-md">
      <div className="max-w-6xl mx-auto flex items-center justify-between gap-2">
        
        {/* Zone 1: Wordmark Title */}
        <button
          onClick={() => onModeChange('cover')}
          className="text-left flex items-center gap-2 group cursor-pointer shrink-0"
        >
          <div className="w-8 h-8 rounded-full bg-emerald-800 text-amber-300 flex items-center justify-center font-serif font-bold text-sm shadow border border-amber-400/40 group-hover:scale-105 transition-transform">
            P
          </div>
          <div>
            <span className="font-serif font-bold text-xs sm:text-sm tracking-wide text-white block leading-tight">
              THAWALIB PARABEK
            </span>
            <span className="text-[10px] text-emerald-400 font-mono tracking-wider block">
              E-BOOKLET 2027/2028
            </span>
          </div>
        </button>

        {/* Zone 2: Segmented Mode Selector */}
        <div className="bg-slate-950 p-1 rounded-xl border border-slate-800 flex items-center gap-1 shrink-0">
          <button
            onClick={() => onModeChange('flipbook')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer whitespace-nowrap ${
              viewMode === 'flipbook'
                ? 'bg-emerald-700 text-white shadow'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <BookOpen className="w-3.5 h-3.5 text-amber-300" />
            <span className="hidden sm:inline">Baca Buku</span>
            <span className="sm:hidden">Buku</span>
          </button>

          <button
            onClick={() => onModeChange('reading')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer whitespace-nowrap ${
              viewMode === 'reading'
                ? 'bg-emerald-700 text-white shadow'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <FileText className="w-3.5 h-3.5 text-amber-300" />
            <span className="hidden sm:inline">Baca Teks</span>
            <span className="sm:hidden">Teks</span>
          </button>
        </div>

        {/* Zone 3: Actions & CTA */}
        <div className="flex items-center gap-1.5 shrink-0">
          <button
            onClick={onOpenSearch}
            className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
            title="Cari"
          >
            <Search className="w-4 h-4" />
          </button>

          <button
            onClick={onOpenBookmark}
            className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-amber-400 transition-colors relative"
            title="Bookmark"
          >
            <Bookmark className="w-4 h-4" />
            {bookmarkCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-amber-400 text-slate-950 font-bold font-mono text-[9px] w-4 h-4 rounded-full flex items-center justify-center">
                {bookmarkCount}
              </span>
            )}
          </button>

          <button
            onClick={onMuteToggle}
            className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors hidden sm:block"
            title={isMuted ? 'Nyalakan suara' : 'Mute suara'}
          >
            {isMuted ? <VolumeX className="w-4 h-4 text-red-400" /> : <Volume2 className="w-4 h-4 text-emerald-400" />}
          </button>

          {/* Primary CTA Button */}
          <a
            href={REGISTRATION_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold px-3 py-1.5 rounded-lg text-xs shadow transition-transform active:scale-95 cursor-pointer whitespace-nowrap"
          >
            <span>DAFTAR</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </header>
  );
};
