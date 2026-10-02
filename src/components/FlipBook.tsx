import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BookPageRenderer } from './BookPageRenderer';
import { soundEngine } from '../utils/audio';
import { 
  ChevronLeft, 
  ChevronRight, 
  Maximize2, 
  Minimize2, 
  Bookmark,
  Volume2,
  VolumeX,
  Search,
  List,
  Sparkles
} from 'lucide-react';

interface FlipBookProps {
  currentPage: number; // 1 to 24
  onPageChange: (page: number) => void;
  onOpenToc: () => void;
  onOpenSearch: () => void;
  onOpenBookmark: () => void;
  isBookmarked: boolean;
  onToggleBookmark: () => void;
  onMuteToggle: () => void;
  isMuted: boolean;
}

export const FlipBook: React.FC<FlipBookProps> = ({
  currentPage,
  onPageChange,
  onOpenToc,
  onOpenSearch,
  onOpenBookmark,
  isBookmarked,
  onToggleBookmark,
  onMuteToggle,
  isMuted
}) => {
  const [direction, setDirection] = useState<'next' | 'prev'>('next');
  const [isZoomed, setIsZoomed] = useState<boolean>(false);
  const touchStartX = useRef<number | null>(null);

  const totalPages = 24;

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setDirection('next');
      soundEngine.playFlipSound();
      onPageChange(currentPage + 1);
    }
  };

  const goToPrevPage = () => {
    if (currentPage > 1) {
      setDirection('prev');
      soundEngine.playFlipSound();
      onPageChange(currentPage - 1);
    }
  };

  // Keyboard arrow shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'PageDown') {
        goToNextPage();
      } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        goToPrevPage();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentPage]);

  // Touch Swipe Gesture Handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diffX = touchStartX.current - e.changedTouches[0].clientX;
    touchStartX.current = null;

    if (diffX > 40) {
      // Swipe Left -> Next Page
      goToNextPage();
    } else if (diffX < -40) {
      // Swipe Right -> Prev Page
      goToPrevPage();
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto flex flex-col items-center justify-between flex-1 relative px-2 sm:px-4 py-2 select-none">
      
      {/* Top Floating Mini Controls for FlipBook */}
      <div className="w-full flex items-center justify-between py-1.5 px-3 bg-slate-800/90 backdrop-blur rounded-xl border border-slate-700/80 mb-2 shadow-sm text-xs">
        <div className="flex items-center gap-2">
          <button
            onClick={onOpenToc}
            className="flex items-center gap-1 text-emerald-400 hover:text-emerald-300 font-medium px-2 py-1 rounded bg-slate-700/50 hover:bg-slate-700 transition-colors"
            title="Buka Daftar Isi"
          >
            <List className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Daftar Isi</span>
          </button>

          <button
            onClick={onOpenSearch}
            className="flex items-center gap-1 text-slate-300 hover:text-white px-2 py-1 rounded bg-slate-700/50 hover:bg-slate-700 transition-colors"
            title="Cari Informasi"
          >
            <Search className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Cari</span>
          </button>
        </div>

        <div className="font-mono text-emerald-300 font-semibold text-xs tracking-wider">
          Hal {currentPage} / {totalPages}
        </div>

        <div className="flex items-center gap-1.5">
          <button
            onClick={onToggleBookmark}
            className={`p-1.5 rounded transition-colors ${
              isBookmarked ? 'bg-amber-500 text-slate-950 font-bold' : 'text-slate-400 hover:text-amber-400 bg-slate-700/50'
            }`}
            title={isBookmarked ? 'Hapus Bookmark' : 'Simpan Bookmark'}
          >
            <Bookmark className="w-3.5 h-3.5 fill-current" />
          </button>

          <button
            onClick={onMuteToggle}
            className="p-1.5 rounded text-slate-400 hover:text-white bg-slate-700/50 transition-colors"
            title={isMuted ? 'Nyalakan Suara Kertas' : 'Mute Suara Kertas'}
          >
            {isMuted ? <VolumeX className="w-3.5 h-3.5 text-red-400" /> : <Volume2 className="w-3.5 h-3.5 text-emerald-400" />}
          </button>

          <button
            onClick={() => setIsZoomed(!isZoomed)}
            className="p-1.5 rounded text-slate-400 hover:text-white bg-slate-700/50 transition-colors hidden sm:block"
            title={isZoomed ? 'Perkecil' : 'Perbesar View'}
          >
            {isZoomed ? <Minimize2 className="w-3.5 h-3.5" /> : <Maximize2 className="w-3.5 h-3.5" />}
          </button>
        </div>
      </div>

      {/* Main 3D Perspective Flipbook Container */}
      <div 
        className={`w-full flex-1 flex items-center justify-center relative my-auto perspective-1200 transition-all duration-300 ${
          isZoomed ? 'scale-105 sm:scale-110 z-30' : ''
        }`}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {/* Book Spine Center Shadow Effect */}
        <div className="relative w-full max-w-[520px] aspect-[1/1.42] max-h-[75vh] flex items-center justify-center shadow-2xl rounded-sm group">
          
          {/* Stacked Paper Edges / Thickness visual simulation */}
          <div className="absolute -bottom-1 -right-1 w-full h-full bg-slate-300 rounded-sm pointer-events-none opacity-80 border border-slate-400" />
          <div className="absolute -bottom-2 -right-2 w-full h-full bg-slate-400 rounded-sm pointer-events-none opacity-60" />

          {/* Page Animated Flip Container */}
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={currentPage}
              initial={{
                rotateY: direction === 'next' ? 45 : -45,
                opacity: 0.6,
                scale: 0.98,
              }}
              animate={{
                rotateY: 0,
                opacity: 1,
                scale: 1,
              }}
              exit={{
                rotateY: direction === 'next' ? -45 : 45,
                opacity: 0.4,
                scale: 0.98,
              }}
              transition={{
                duration: 0.35,
                ease: [0.25, 1, 0.5, 1],
              }}
              style={{ transformOrigin: direction === 'next' ? 'left center' : 'right center' }}
              className="w-full h-full bg-white rounded-sm overflow-hidden shadow-2xl relative border border-slate-200"
            >
              <BookPageRenderer pageNumber={currentPage} />

              {/* Page Spine Gradient Overlay */}
              <div className="absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-black/10 via-black/5 to-transparent pointer-events-none" />
            </motion.div>
          </AnimatePresence>

          {/* Left Side Quick Click Hotspot */}
          {currentPage > 1 && (
            <button
              onClick={goToPrevPage}
              className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-black/20 via-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-start pl-2 text-white/90 cursor-pointer"
              aria-label="Halaman Sebelumnya"
            >
              <div className="p-2 rounded-full bg-slate-900/70 backdrop-blur shadow-md hover:scale-110 transition-transform">
                <ChevronLeft className="w-5 h-5 text-amber-300" />
              </div>
            </button>
          )}

          {/* Right Side Quick Click Hotspot */}
          {currentPage < totalPages && (
            <button
              onClick={goToNextPage}
              className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-black/20 via-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-end pr-2 text-white/90 cursor-pointer"
              aria-label="Halaman Berikutnya"
            >
              <div className="p-2 rounded-full bg-slate-900/70 backdrop-blur shadow-md hover:scale-110 transition-transform">
                <ChevronRight className="w-5 h-5 text-amber-300" />
              </div>
            </button>
          )}
        </div>
      </div>

      {/* Floating Swipe Cue Hint for Mobile Users */}
      <div className="mt-2 text-center text-[11px] text-slate-400 flex items-center justify-center gap-1">
        <Sparkles className="w-3 h-3 text-amber-400" />
        <span>Geser / Swipe layar untuk balik halaman</span>
      </div>
    </div>
  );
};
