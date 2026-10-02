import React from 'react';
import { REGISTRATION_URL } from '../data/bookletData';
import { 
  BookOpen, 
  ExternalLink, 
  Sparkles, 
  Award, 
  Search, 
  List, 
  Phone, 
  MapPin 
} from 'lucide-react';

const PARABEK_LOGO = "/src/assets/images/parabek_logo_emblem_1790899724881.jpg";

interface CoverProps {
  onStartReading: () => void;
  onOpenToc: () => void;
  onOpenSearch: () => void;
}

export const Cover: React.FC<CoverProps> = ({
  onStartReading,
  onOpenToc,
  onOpenSearch
}) => {
  return (
    <div className="w-full max-w-xl mx-auto my-auto py-6 px-4 flex flex-col items-center justify-center min-h-[85vh] text-center space-y-6">
      
      {/* Cover Card Wrapper */}
      <div className="w-full bg-gradient-to-b from-emerald-900 via-teal-950 to-slate-950 text-white p-6 sm:p-8 rounded-2xl shadow-2xl border border-amber-400/30 relative overflow-hidden space-y-6">
        
        {/* Subtle Islamic Motif Glow */}
        <div className="absolute inset-0 bg-emerald-500/5 bg-radial pointer-events-none" />
        <div className="absolute top-0 right-0 w-32 h-32 bg-amber-400/10 rounded-full blur-3xl pointer-events-none" />

        {/* Top Tagline */}
        <div className="inline-flex items-center gap-2 bg-amber-400/20 text-amber-300 border border-amber-400/40 px-3 py-1 rounded-full text-xs font-semibold tracking-wider">
          <Award className="w-3.5 h-3.5 text-amber-300" />
          <span>E-BOOKLET DIGITAL INTERAKTIF</span>
        </div>

        {/* Logo Emblem */}
        <div className="relative mx-auto w-28 h-28 sm:w-36 sm:h-36 rounded-full border-4 border-amber-400 shadow-2xl p-1 bg-white/10 flex items-center justify-center">
          <img 
            src={PARABEK_LOGO} 
            alt="Logo Pondok Pesantren Sumatera Thawalib Parabek" 
            className="w-full h-full object-cover rounded-full"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
            }}
          />
        </div>

        {/* Main Titles */}
        <div className="space-y-2">
          <div className="inline-block bg-amber-400 text-slate-950 px-3 py-0.5 rounded text-xs font-extrabold tracking-widest uppercase">
            PSB 2027/2028
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-wide font-serif">
            BOOKLET
          </h1>

          <h2 className="text-base sm:text-lg text-emerald-200 font-medium font-serif">
            Pondok Pesantren Sumatera Thawalib Parabek
          </h2>

          <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto pt-1 font-sans">
            Penerimaan Santri & Mahasantri Baru<br />
            <span className="text-amber-300 font-bold">Tahun Ajaran 2027/2028</span>
          </p>
        </div>

        {/* Main Action Button */}
        <div className="pt-2 space-y-3">
          <button
            onClick={onStartReading}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-extrabold text-base px-8 py-3.5 rounded-xl shadow-xl transition-all transform active:scale-95 cursor-pointer group"
          >
            <BookOpen className="w-5 h-5 group-hover:scale-110 transition-transform" />
            <span>Mulai Membaca</span>
          </button>

          <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
            <button
              onClick={onOpenToc}
              className="inline-flex items-center gap-1.5 bg-slate-800/80 hover:bg-slate-800 text-emerald-300 border border-slate-700 px-3 py-1.5 rounded-lg text-xs font-medium transition-colors"
            >
              <List className="w-3.5 h-3.5" />
              <span>Daftar Isi</span>
            </button>

            <button
              onClick={onOpenSearch}
              className="inline-flex items-center gap-1.5 bg-slate-800/80 hover:bg-slate-800 text-slate-200 border border-slate-700 px-3 py-1.5 rounded-lg text-xs font-medium transition-colors"
            >
              <Search className="w-3.5 h-3.5 text-emerald-400" />
              <span>Cari Informasi</span>
            </button>

            <a
              href={REGISTRATION_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 bg-emerald-800 hover:bg-emerald-700 text-amber-300 border border-emerald-600 px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors"
            >
              <span>Daftar Sekarang</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Footnote */}
        <div className="pt-4 border-t border-white/10 text-[10px] text-slate-400 flex justify-between items-center">
          <span>SUMATERA THAWALIB PARABEK</span>
          <span className="font-mono">AGAM, SUMATERA BARAT</span>
        </div>
      </div>
    </div>
  );
};
