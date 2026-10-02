import React from 'react';
import { BOOKLET_PAGES_DATA, BookletPage } from '../data/bookletData';
import { X, Bookmark, ChevronRight, Trash2 } from 'lucide-react';

interface BookmarkModalProps {
  isOpen: boolean;
  onClose: () => void;
  bookmarkedPages: number[];
  onSelectPage: (pageNumber: number) => void;
  onRemoveBookmark: (pageNumber: number) => void;
  onClearAllBookmarks: () => void;
}

export const BookmarkModal: React.FC<BookmarkModalProps> = ({
  isOpen,
  onClose,
  bookmarkedPages,
  onSelectPage,
  onRemoveBookmark,
  onClearAllBookmarks
}) => {
  if (!isOpen) return null;

  const bookmarkedItems = BOOKLET_PAGES_DATA.filter((p: BookletPage) =>
    bookmarkedPages.includes(p.pdfPageNumber)
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/80 backdrop-blur-sm animate-fade-in">
      <div className="bg-slate-900 border border-slate-700 w-full max-w-md rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[85vh]">
        
        {/* Header */}
        <div className="p-4 bg-slate-800 border-b border-slate-700 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Bookmark className="w-5 h-5 text-amber-400 fill-current" />
            <h3 className="text-base font-bold text-white font-serif">
              HALAMAN TERSIMPAN
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content List */}
        <div className="p-3 overflow-y-auto flex-1 space-y-2">
          {bookmarkedItems.length === 0 ? (
            <div className="text-center py-10 text-slate-400 text-xs space-y-2">
              <Bookmark className="w-8 h-8 text-slate-600 mx-auto" />
              <p>Belum ada halaman yang ditandai (bookmark).</p>
              <p className="text-[11px] text-slate-500">
                Tekan tombol ikon Bookmark di bagian atas flipbook untuk menandai halaman favorit.
              </p>
            </div>
          ) : (
            bookmarkedItems.map((item: BookletPage) => (
              <div
                key={item.id}
                className="flex items-center justify-between p-3 rounded-xl bg-slate-800/80 border border-slate-700 hover:border-amber-400/60 transition-all group"
              >
                <button
                  onClick={() => {
                    onSelectPage(item.pdfPageNumber);
                    onClose();
                  }}
                  className="flex-1 text-left space-y-1 pr-2"
                >
                  <div className="flex items-center gap-2">
                    <span className="bg-amber-400 text-slate-950 font-mono font-extrabold text-[10px] px-2 py-0.5 rounded">
                      Halaman {item.pdfPageNumber}
                    </span>
                    <span className="text-[10px] text-emerald-400 font-semibold">
                      {item.category}
                    </span>
                  </div>
                  <h4 className="text-xs font-bold text-white group-hover:text-amber-300 transition-colors">
                    {item.title}
                  </h4>
                </button>

                <div className="flex items-center gap-1">
                  <button
                    onClick={() => onRemoveBookmark(item.pdfPageNumber)}
                    className="p-1.5 rounded-lg text-slate-400 hover:text-red-400 hover:bg-slate-950 transition-colors"
                    title="Hapus Bookmark"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>

                  <button
                    onClick={() => {
                      onSelectPage(item.pdfPageNumber);
                      onClose();
                    }}
                    className="p-1.5 rounded-lg bg-emerald-800 hover:bg-emerald-700 text-amber-300 transition-colors"
                    title="Buka Halaman"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {bookmarkedItems.length > 0 && (
          <div className="p-3 bg-slate-800 border-t border-slate-700 flex justify-between items-center text-xs">
            <span className="text-slate-400 text-[11px] font-mono">
              {bookmarkedItems.length} Halaman ditandai
            </span>
            <button
              onClick={onClearAllBookmarks}
              className="text-red-400 hover:text-red-300 font-medium text-[11px] underline"
            >
              Hapus Semua
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
