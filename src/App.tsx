import React, { useState, useEffect } from 'react';
import { HeaderNav } from './components/HeaderNav';
import { Cover } from './components/Cover';
import { FlipBook } from './components/FlipBook';
import { ReadingMode } from './components/ReadingMode';
import { TableOfContentsModal } from './components/TableOfContentsModal';
import { SearchModal } from './components/SearchModal';
import { BookmarkModal } from './components/BookmarkModal';
import { ResumePromptModal } from './components/ResumePromptModal';
import { PageNavigation } from './components/PageNavigation';
import { FloatingCTA } from './components/FloatingCTA';
import { soundEngine } from './utils/audio';

export default function App() {
  const [viewMode, setViewMode] = useState<'cover' | 'flipbook' | 'reading'>('cover');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [savedLastPage, setSavedLastPage] = useState<number>(1);

  // Modals state
  const [isTocOpen, setIsTocOpen] = useState<boolean>(false);
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);
  const [isBookmarkOpen, setIsBookmarkOpen] = useState<boolean>(false);
  const [isResumePromptOpen, setIsResumePromptOpen] = useState<boolean>(false);

  // Audio mute state
  const [isMuted, setIsMuted] = useState<boolean>(soundEngine.getMuted());

  // Bookmarks state
  const [bookmarkedPages, setBookmarkedPages] = useState<number[]>(() => {
    try {
      const saved = localStorage.getItem("parabek_bookmarks");
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Check saved last page on initial mount
  useEffect(() => {
    try {
      const savedPage = localStorage.getItem("parabek_last_page");
      if (savedPage) {
        const pageNum = parseInt(savedPage, 10);
        if (pageNum > 1 && pageNum <= 24) {
          setSavedLastPage(pageNum);
          setIsResumePromptOpen(true);
        }
      }
    } catch {
      // Ignore localStorage errors
    }
  }, []);

  // Save last read page when currentPage changes
  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
    try {
      localStorage.setItem("parabek_last_page", String(newPage));
    } catch {
      // Ignore
    }
  };

  // Toggle bookmark for a page
  const handleToggleBookmarkPage = (pageNumber: number) => {
    setBookmarkedPages((prev) => {
      let updated: number[];
      if (prev.includes(pageNumber)) {
        updated = prev.filter((p) => p !== pageNumber);
      } else {
        updated = [...prev, pageNumber].sort((a, b) => a - b);
      }
      try {
        localStorage.setItem("parabek_bookmarks", JSON.stringify(updated));
      } catch {
        // Ignore
      }
      return updated;
    });
  };

  const handleClearAllBookmarks = () => {
    setBookmarkedPages([]);
    try {
      localStorage.removeItem("parabek_bookmarks");
    } catch {
      // Ignore
    }
  };

  const handleMuteToggle = () => {
    const newMuted = soundEngine.toggleMute();
    setIsMuted(newMuted);
  };

  const handleStartReading = () => {
    setViewMode('flipbook');
    setIsTocOpen(true); // Open TOC panel right after pressing "Mulai Membaca"
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans antialiased selection:bg-emerald-500 selection:text-white relative">
      
      {/* Top Bar Header */}
      <HeaderNav
        viewMode={viewMode}
        onModeChange={(mode) => setViewMode(mode)}
        onOpenToc={() => setIsTocOpen(true)}
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenBookmark={() => setIsBookmarkOpen(true)}
        bookmarkCount={bookmarkedPages.length}
        isMuted={isMuted}
        onMuteToggle={handleMuteToggle}
      />

      {/* Main View Area */}
      <main className="flex-1 flex flex-col justify-center items-center relative w-full overflow-x-hidden pb-12">
        {viewMode === 'cover' && (
          <Cover
            onStartReading={handleStartReading}
            onOpenToc={() => {
              setViewMode('flipbook');
              setIsTocOpen(true);
            }}
            onOpenSearch={() => setIsSearchOpen(true)}
          />
        )}

        {viewMode === 'flipbook' && (
          <FlipBook
            currentPage={currentPage}
            onPageChange={handlePageChange}
            onOpenToc={() => setIsTocOpen(true)}
            onOpenSearch={() => setIsSearchOpen(true)}
            onOpenBookmark={() => setIsBookmarkOpen(true)}
            isBookmarked={bookmarkedPages.includes(currentPage)}
            onToggleBookmark={() => handleToggleBookmarkPage(currentPage)}
            onMuteToggle={handleMuteToggle}
            isMuted={isMuted}
          />
        )}

        {viewMode === 'reading' && (
          <ReadingMode
            currentPage={currentPage}
            onPageChange={(p) => {
              handlePageChange(p);
              setViewMode('flipbook');
            }}
            onOpenToc={() => setIsTocOpen(true)}
            onOpenSearch={() => setIsSearchOpen(true)}
            bookmarkedPages={bookmarkedPages}
            onToggleBookmarkPage={handleToggleBookmarkPage}
          />
        )}
      </main>

      {/* Floating Registration CTA */}
      <FloatingCTA />

      {/* Bottom Navigation Bar when in flipbook or reading mode */}
      {viewMode !== 'cover' && (
        <PageNavigation
          currentPage={currentPage}
          totalPages={24}
          onPageChange={handlePageChange}
          onOpenToc={() => setIsTocOpen(true)}
        />
      )}

      {/* Modals */}
      <TableOfContentsModal
        isOpen={isTocOpen}
        onClose={() => setIsTocOpen(false)}
        onSelectPage={(pageNum) => {
          handlePageChange(pageNum);
          setViewMode('flipbook');
        }}
        currentPage={currentPage}
      />

      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectPage={(pageNum) => {
          handlePageChange(pageNum);
          setViewMode('flipbook');
        }}
      />

      <BookmarkModal
        isOpen={isBookmarkOpen}
        onClose={() => setIsBookmarkOpen(false)}
        bookmarkedPages={bookmarkedPages}
        onSelectPage={(pageNum) => {
          handlePageChange(pageNum);
          setViewMode('flipbook');
        }}
        onRemoveBookmark={handleToggleBookmarkPage}
        onClearAllBookmarks={handleClearAllBookmarks}
      />

      <ResumePromptModal
        isOpen={isResumePromptOpen}
        savedPage={savedLastPage}
        onResume={() => {
          setCurrentPage(savedLastPage);
          setViewMode('flipbook');
          setIsResumePromptOpen(false);
        }}
        onRestart={() => {
          setCurrentPage(1);
          setViewMode('cover');
          setIsResumePromptOpen(false);
        }}
      />
    </div>
  );
}
