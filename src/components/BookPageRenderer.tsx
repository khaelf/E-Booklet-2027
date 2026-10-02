import React from 'react';
import { 
  BOOKLET_PAGES_DATA, 
  REGISTRATION_URL 
} from '../data/bookletData';
import { 
  BookOpen, 
  CheckCircle2, 
  GraduationCap, 
  MapPin, 
  Phone, 
  Award, 
  Calendar, 
  Clock, 
  ShieldAlert, 
  ExternalLink,
  ChevronRight,
  School,
  Building,
  UserCheck
} from 'lucide-react';

// Image paths generated for authentic Parabek visuals
const PARABEK_LOGO = "/src/assets/images/parabek_logo_emblem_1790899724881.jpg";
const CAMPUS_IMG = "/src/assets/images/parabek_campus_building_1790899738370.jpg";
const SANTRI_IMG = "/src/assets/images/parabek_santri_study_1790899751785.jpg";
const FOUNDER_IMG = "/src/assets/images/parabek_founder_portrait_1790899762569.jpg";

interface BookPageRendererProps {
  pageNumber: number; // 1 to 24
  highlightQuery?: string;
}

export const BookPageRenderer: React.FC<BookPageRendererProps> = ({ pageNumber }) => {
  const pageMeta = BOOKLET_PAGES_DATA.find(p => p.pdfPageNumber === pageNumber);

  return (
    <div className="w-full h-full bg-white text-slate-800 flex flex-col justify-between p-4 sm:p-6 md:p-8 select-text overflow-y-auto relative shadow-inner rounded-sm border border-slate-200">
      
      {/* Background Subtle Islamic Geometric Pattern Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none bg-repeat"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%200f5132' fill-opacity='1' fill-rule='evenodd'%3E%3Cpath d='M30 30L0 0h60L30 30zM0 60l30-30 30 30H0z'/%3E%3C/g%3E%3C/svg%3E")`
        }}
      />

      {/* Header Bar of Page */}
      {pageNumber > 1 && (
        <div className="flex justify-between items-center pb-3 border-b border-emerald-800/10 text-xs font-semibold text-emerald-900 tracking-wider mb-4 relative z-10">
          <div className="flex items-center gap-1.5 text-emerald-800">
            <span className="bg-emerald-800 text-white px-2 py-0.5 rounded text-[10px] font-bold">PSMB 2027/2028</span>
            <span className="hidden sm:inline text-slate-500 font-normal">| Sumatera Thawalib Parabek</span>
          </div>
          <div className="text-emerald-900 font-mono text-[11px]">
            thawalib-parabek.eduvista.co.id
          </div>
        </div>
      )}

      {/* Main Page Body Router */}
      <div className="flex-1 relative z-10">
        {renderPageContent(pageNumber)}
      </div>

      {/* Page Footer Footer Bar */}
      {pageNumber > 1 && (
        <div className="pt-3 mt-4 border-t border-emerald-800/10 flex justify-between items-center text-[11px] text-slate-500 relative z-10 font-sans">
          <span>Tahun Ajaran 2027/2028</span>
          <span className="font-bold text-emerald-900 font-mono text-sm">
            {pageMeta?.bookletPageNumber || (pageNumber < 10 ? `0${pageNumber - 1}` : pageNumber - 1)}
          </span>
        </div>
      )}
    </div>
  );
};

function renderPageContent(pageNum: number) {
  switch (pageNum) {
    case 1:
      // Page 1: COVER
      return (
        <div className="flex flex-col justify-between items-center h-full text-center py-4 bg-gradient-to-b from-emerald-800 via-emerald-900 to-teal-950 text-white -m-4 sm:-m-6 md:-m-8 p-6 sm:p-8 rounded-sm relative overflow-hidden">
          {/* Gold Decorative Corner Frames */}
          <div className="absolute top-3 left-3 w-8 h-8 border-t-2 border-l-2 border-amber-400 opacity-60" />
          <div className="absolute top-3 right-3 w-8 h-8 border-t-2 border-r-2 border-amber-400 opacity-60" />
          <div className="absolute bottom-3 left-3 w-8 h-8 border-b-2 border-l-2 border-amber-400 opacity-60" />
          <div className="absolute bottom-3 right-3 w-8 h-8 border-b-2 border-r-2 border-amber-400 opacity-60" />

          {/* Top Header */}
          <div className="space-y-1 mt-2">
            <div className="inline-flex items-center gap-2 bg-amber-400/20 text-amber-300 border border-amber-400/40 px-3 py-1 rounded-full text-xs font-semibold tracking-wider">
              <Award className="w-3.5 h-3.5" /> AKREDITASI A & B
            </div>
            <h3 className="text-sm font-semibold tracking-widest text-emerald-200 uppercase mt-2">
              Pondok Pesantren Sumatera Thawalib Parabek
            </h3>
          </div>

          {/* Center Emblem & Visual */}
          <div className="my-auto py-4 space-y-4 max-w-sm">
            <div className="relative mx-auto w-32 h-32 sm:w-40 sm:h-40 rounded-full border-4 border-amber-400 shadow-2xl overflow-hidden bg-white/10 p-1 flex items-center justify-center">
              <img 
                src={PARABEK_LOGO} 
                alt="Emblem Parabek" 
                className="w-full h-full object-cover rounded-full"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
            </div>

            <div className="space-y-2">
              <div className="inline-block bg-amber-400 text-slate-950 px-4 py-1 rounded-md text-xs sm:text-sm font-bold tracking-wider shadow-md">
                PSMB 2027/2028
              </div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-wide font-serif">
                BOOKLET
              </h1>
              <p className="text-emerald-100 text-xs sm:text-sm font-medium px-4">
                Penerimaan Santri & Mahasantri Baru<br />
                <span className="text-amber-300 font-semibold">Tahun Ajaran 2027/2028</span>
              </p>
            </div>
          </div>

          {/* Bottom Footer Cover */}
          <div className="w-full pt-4 border-t border-white/10 text-emerald-200 text-xs flex justify-between items-center">
            <span>2026 HUMAS PARABEK</span>
            <span className="font-mono text-[10px] text-amber-300">PARABEK BUKITTINGGI AGAM</span>
          </div>
        </div>
      );

    case 2:
      // Page 2 (01): Profil Singkat
      return (
        <div className="space-y-4">
          <div className="flex items-center gap-3 border-b-2 border-emerald-800 pb-2">
            <div className="w-8 h-8 rounded-full bg-emerald-800 text-white flex items-center justify-center font-bold text-sm">
              1
            </div>
            <h2 className="text-xl font-bold text-emerald-950 font-serif">Profil Singkat</h2>
          </div>

          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
            <strong className="text-emerald-900">Pondok Pesantren Sumatera Thawalib Parabek Bukittinggi Agam</strong> didirikan oleh <strong>Syekh Ibrahim Musa</strong>, yang dikenal sebagai <strong>Inyiak Parabek</strong> pada tanggal <span className="bg-amber-100 px-1 font-semibold text-emerald-950">20 September 1910</span>. Beliau adalah seorang ulama pembaharu dan pejuang pendidikan.
          </p>

          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
            Thawalib Parabek adalah salah satu pesantren tertua di Indonesia. Memiliki ribuan santri yang berasal dari berbagai daerah di Sumatera Barat dan dari berbagai provinsi lainnya di Indonesia.
          </p>

          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
            Sebagai <strong className="text-emerald-900">"Kampusnya Para Ulama"</strong>, Thawalib Parabek memiliki reputasi yang sangat kuat di bidang keagamaan dan telah berkontribusi besar dalam melahirkan tokoh-tokoh agama, cendekiawan, dan pemimpin masyarakat di Sumatera Barat maupun Indonesia.
          </p>

          <div className="bg-emerald-50 border-l-4 border-emerald-800 p-3 rounded-r-lg space-y-2 text-xs text-slate-800">
            <h4 className="font-bold text-emerald-900 text-sm">Karakteristik Utama:</h4>
            <ul className="space-y-1.5 list-disc list-inside">
              <li><strong className="text-emerald-900">Pendidikan Integratif:</strong> Menggabungkan pendidikan Agama dan Umum dengan memakai 3 kurikulum (Kemenag, Nasional, dan Pondok).</li>
              <li><strong className="text-emerald-900">Jenjang Pendidikan:</strong> Memiliki unit pendidikan lengkap dari MTs (Madrasah Tsanawiyah), MA (Madrasah Aliyah), PDF (Pendidikan Diniyah Formal), hingga Perguruan Tinggi S1 (Ma'had Aly).</li>
              <li><strong className="text-emerald-900">Kaderisasi Ulama:</strong> Pembelajaran Kitab Kuning terstruktur.</li>
              <li>Pusat gerakan pembaruan pemikiran Islam di Sumatera Barat yang melahirkan banyak tokoh nasional.</li>
            </ul>
          </div>

          {/* Quote & Stats Box */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            <div className="bg-gradient-to-br from-emerald-900 to-emerald-950 text-white p-3 rounded-lg flex flex-col justify-between">
              <p className="italic font-serif text-amber-300 text-xs sm:text-sm">
                "Terpuji dalam Tradisi, Terdepan dalam Prestasi"
              </p>
              <div className="mt-2 text-[10px] text-emerald-200">
                Motto Pondok Pesantren
              </div>
            </div>

            <div className="bg-amber-50 border border-amber-200 p-3 rounded-lg flex items-center justify-around text-center">
              <div>
                <div className="text-lg font-bold text-emerald-900 font-mono">1.408</div>
                <div className="text-[10px] text-slate-600 font-semibold">Jumlah Santri</div>
              </div>
              <div className="h-8 w-px bg-amber-300" />
              <div>
                <div className="text-lg font-bold text-emerald-900 font-mono">154</div>
                <div className="text-[10px] text-slate-600 font-semibold">Mahasantri</div>
              </div>
            </div>
          </div>
        </div>
      );

    case 3:
      // Page 3 (02): Visi dan Misi
      return (
        <div className="space-y-5">
          <div className="flex items-center gap-3 border-b-2 border-emerald-800 pb-2">
            <div className="w-8 h-8 rounded-full bg-emerald-800 text-white flex items-center justify-center font-bold text-sm">
              2
            </div>
            <h2 className="text-xl font-bold text-emerald-950 font-serif">Visi dan Misi</h2>
          </div>

          {/* Visi */}
          <div className="bg-emerald-900 text-white p-4 rounded-xl shadow-md border-l-8 border-amber-400 space-y-1">
            <div className="text-amber-300 text-xs font-bold uppercase tracking-wider">VISI PARABEK</div>
            <p className="text-base sm:text-lg font-serif italic text-white leading-relaxed">
              "Pusat pendidikan Islam unggulan yang membangun generasi khairu ummah"
            </p>
          </div>

          {/* Misi List */}
          <div className="space-y-3 pt-2">
            <h3 className="text-sm font-bold text-emerald-950 uppercase tracking-wider border-b border-emerald-200 pb-1">
              MISI PESANTREN
            </h3>

            <div className="grid grid-cols-1 gap-2.5">
              {[
                { num: "01", text: "Menyelenggarakan pendidikan yang berkualitas" },
                { num: "02", text: "Menciptakan kader ulama, umara, aghniya, dan intelektual" },
                { num: "03", text: "Melaksanakan dan mengemban dakwah Islam" },
                { num: "04", text: "Menjunjung tinggi nilai-nilai moral, spiritual, menuju kesejahteraan dan keselamatan dunia serta akhirat" }
              ].map((item) => (
                <div key={item.num} className="flex items-start gap-3 p-3 bg-slate-50 hover:bg-emerald-50/60 rounded-lg border border-slate-200 transition-colors">
                  <div className="bg-emerald-800 text-amber-300 text-xs font-bold font-mono px-2 py-1 rounded">
                    {item.num}
                  </div>
                  <p className="text-xs sm:text-sm text-slate-800 font-medium pt-0.5">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-lg overflow-hidden border border-emerald-200 shadow-sm max-h-36 sm:max-h-44">
            <img src={CAMPUS_IMG} alt="Gedung Parabek" className="w-full h-full object-cover" />
          </div>
        </div>
      );

    case 4:
      // Page 4 (03): Program Pendidikan - MTs
      return (
        <div className="space-y-4">
          <div className="flex items-center gap-3 border-b-2 border-emerald-800 pb-2">
            <div className="w-8 h-8 rounded-full bg-emerald-800 text-white flex items-center justify-center font-bold text-sm">
              3
            </div>
            <div>
              <h2 className="text-xl font-bold text-emerald-950 font-serif">Program Pendidikan</h2>
              <span className="inline-block bg-amber-400 text-slate-950 text-[10px] font-bold px-2 py-0.5 rounded">
                MADRASAH TSANAWIYAH (AKREDITASI A)
              </span>
            </div>
          </div>

          <p className="text-xs text-slate-700 leading-relaxed">
            Merupakan jenjang Pendidikan menengah pertama setara SMP. Madrasah Tsanawiyah memisahkan kelas antara santri putra dan putri dengan lokasi belajar yang terdiri dari 2 kampus yaitu:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
            <div className="bg-emerald-50 p-2.5 rounded-lg border border-emerald-200">
              <strong className="text-emerald-900 block font-bold text-sm">Kampus 1 ( Putra )</strong>
              <p className="text-slate-600 mt-0.5">
                Jorong Parabek, Nagari Ladang Laweh, Kecamatan Banuhampu, Kabupaten Agam
              </p>
            </div>
            <div className="bg-emerald-50 p-2.5 rounded-lg border border-emerald-200">
              <strong className="text-emerald-900 block font-bold text-sm">Kampus 3 ( Putri )</strong>
              <p className="text-slate-600 mt-0.5">
                Jorong Bangkaweh, Nagari Ladang Laweh, Kecamatan Banuhampu, Kabupaten Agam
              </p>
            </div>
          </div>

          <div className="space-y-2">
            <h4 className="text-xs font-bold text-emerald-950 uppercase tracking-wider bg-emerald-800 text-white px-2 py-1 rounded">
              Kurikulum & Program Unggulan MTs:
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-3 gap-y-1 text-xs text-slate-700">
              {[
                "1. Ruang kelas dan fasilitas representatif",
                "2. Pembelajaran agama berbasis kitab kuning",
                "3. Qawaid hebat (Nahwu dan Sharaf)",
                "4. Bimbingan Kompetensi Sains Madrasah (KSM)",
                "5. Muhadharah/Public Speaking",
                "6. Tahfizh Excellent",
                "7. Matematika hebat",
                "8. Halaqah kitab",
                "9. Program Bahasa Arab & Bahasa Inggris",
                "10. Program Almiftah",
                "11. Ekstrakurikuler",
                "12. Outbound"
              ].map((prog, i) => (
                <div key={i} className="flex items-center gap-1.5 py-0.5 border-b border-slate-100">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span className="font-medium text-[11px] sm:text-xs">{prog}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      );

    case 5:
      // Page 5 (04): Jalur Masuk MTs - Jalur Reguler
      return (
        <div className="space-y-3">
          <div className="flex justify-between items-center border-b border-emerald-800 pb-1">
            <h2 className="text-lg font-bold text-emerald-950 font-serif">Jalur Masuk Madrasah Tsanawiyah</h2>
            <span className="bg-slate-200 text-slate-800 text-[10px] font-bold px-2 py-0.5 rounded">NON BEASISWA</span>
          </div>

          <div className="bg-emerald-900 text-white p-2.5 rounded-lg flex justify-between items-center">
            <div>
              <h3 className="text-base font-bold text-amber-300">Jalur Reguler / Umum</h3>
              <p className="text-[11px] text-emerald-100">Syarat: Lulus tes yang diselenggarakan</p>
            </div>
            <div className="text-right text-[11px]">
              <span className="block font-semibold text-emerald-200">Materi Ujian:</span>
              <span>Tulis: MTK, Agama | Lisan: Baca Al-Qur'an</span>
            </div>
          </div>

          {/* Pricing Table */}
          <div className="border border-slate-300 rounded-lg overflow-hidden text-xs">
            <div className="bg-emerald-800 text-white p-1.5 font-bold text-center">
              Rincian Keuangan Santri Baru Jalur Reguler MTs
            </div>

            <div className="p-2 space-y-2 bg-slate-50">
              <div>
                <div className="font-bold text-emerald-900 border-b border-slate-200 pb-0.5 mb-1">
                  A. Pembayaran Awal
                </div>
                <div className="flex justify-between py-0.5"><span>1. Uang Masuk</span><span className="font-mono">Rp 12.500.000</span></div>
                <div className="flex justify-between py-0.5"><span>2. Uang Daurah</span><span className="font-mono">Rp 50.000</span></div>
                <div className="flex justify-between py-0.5"><span>3. Perlengkapan Asrama & Seragam</span><span className="font-mono">Rp 1.450.000</span></div>
                <div className="flex justify-between font-bold text-emerald-900 pt-1 border-t border-slate-200">
                  <span>Jumlah Pembayaran Awal</span><span className="font-mono">Rp 14.000.000</span>
                </div>
              </div>

              <div>
                <div className="font-bold text-emerald-900 border-b border-slate-200 pb-0.5 mb-1">
                  B. Pembayaran Setiap Awal Tahun
                </div>
                <div className="flex justify-between py-0.5"><span>1. Uang IPUL (IPST, Pustaka, UKS, Lab)</span><span className="font-mono">Rp 185.000</span></div>
                <div className="flex justify-between py-0.5"><span>2. Uang Dana Sosial</span><span className="font-mono">Rp 15.000</span></div>
                <div className="flex justify-between font-bold text-emerald-900 pt-1 border-t border-slate-200">
                  <span>Jumlah Awal Tahun</span><span className="font-mono">Rp 200.000</span>
                </div>
              </div>

              <div>
                <div className="font-bold text-emerald-900 border-b border-slate-200 pb-0.5 mb-1">
                  C. Pembayaran Setiap Bulan
                </div>
                <div className="flex justify-between py-0.5"><span>1. Uang SPP</span><span className="font-mono">Rp 650.000</span></div>
                <div className="flex justify-between py-0.5"><span>2. Uang Asrama</span><span className="font-mono">Rp 200.000</span></div>
                <div className="flex justify-between py-0.5"><span>3. Uang Makan Asrama</span><span className="font-mono">Rp 700.000</span></div>
                <div className="flex justify-between font-bold text-emerald-900 pt-1 border-t border-slate-200">
                  <span>Jumlah Bulanan</span><span className="font-mono">Rp 1.550.000</span>
                </div>
              </div>
            </div>

            <div className="bg-amber-400 text-slate-950 p-2 font-bold flex justify-between items-center text-sm">
              <span>Total Keuangan Santri Baru:</span>
              <span className="font-mono text-base">Rp 15.750.000</span>
            </div>
          </div>

          <div className="bg-emerald-50 border border-emerald-300 p-2 rounded text-center text-xs font-semibold text-emerald-900">
            Kewajiban yang harus dibayarkan setiap bulannya adalah <span className="text-amber-700 font-mono font-bold">Rp 1.550.000</span>
          </div>
        </div>
      );

    case 6:
      // Page 6 (05): Jalur Prestasi MTs
      return (
        <div className="space-y-3">
          <div className="flex justify-between items-center border-b border-emerald-800 pb-1">
            <h2 className="text-lg font-bold text-emerald-950 font-serif">Jalur Prestasi MTs</h2>
            <span className="bg-amber-400 text-slate-950 text-[10px] font-bold px-2 py-0.5 rounded">BEASISWA</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
            <div className="bg-emerald-50 p-2 rounded border border-emerald-200">
              <strong className="text-emerald-900 block font-bold">Syarat & Ketentuan:</strong>
              <ul className="list-disc list-inside text-[11px] text-slate-700 mt-1 space-y-0.5">
                <li>Nilai rata-rata Rapor Kelas 5 Smt 2 minimal 80, ATAU</li>
                <li>Juara 1-3 Olimpiade minimal tingkat Provinsi</li>
                <li>Mengikuti seleksi Jalur Prestasi</li>
              </ul>
            </div>
            <div className="bg-emerald-50 p-2 rounded border border-emerald-200">
              <strong className="text-emerald-900 block font-bold">Materi Ujian:</strong>
              <ul className="list-disc list-inside text-[11px] text-slate-700 mt-1 space-y-0.5">
                <li>Tes Tulis: MTK & Agama (Soal setaraf olimpiade)</li>
                <li>Tes Lisan: Baca Al-Qur'an</li>
              </ul>
            </div>
          </div>

          <div className="space-y-2">
            <h4 className="text-xs font-bold text-emerald-950 uppercase border-b border-slate-200 pb-1">
              Pengelompokan Beasiswa Hasil Tes Jalur Prestasi:
            </h4>

            <div className="space-y-1.5 text-xs">
              <div className="bg-gradient-to-r from-emerald-800 to-emerald-900 text-white p-2 rounded flex justify-between items-center">
                <div>
                  <strong className="text-amber-300 block">GRADE A (Diskon Uang Masuk 100%)</strong>
                  <span className="text-[10px] text-emerald-200">Bebas seluruh Uang Masuk</span>
                </div>
                <div className="text-right">
                  <span className="line-through text-emerald-300 text-[10px] block font-mono">Rp 15.750.000</span>
                  <span className="font-mono font-bold text-amber-300 text-sm">Rp 3.250.000</span>
                </div>
              </div>

              <div className="bg-emerald-700 text-white p-2 rounded flex justify-between items-center">
                <div>
                  <strong className="text-amber-200 block">GRADE B (Diskon Uang Masuk 68%)</strong>
                  <span className="text-[10px] text-emerald-100">Potongan Uang Masuk 68%</span>
                </div>
                <div className="text-right">
                  <span className="line-through text-emerald-200 text-[10px] block font-mono">Rp 15.750.000</span>
                  <span className="font-mono font-bold text-amber-200 text-sm">Rp 7.250.000</span>
                </div>
              </div>

              <div className="bg-emerald-600 text-white p-2 rounded flex justify-between items-center">
                <div>
                  <strong className="text-white block">GRADE C (Diskon Uang Masuk 50%)</strong>
                  <span className="text-[10px] text-emerald-100">Potongan Uang Masuk 50%</span>
                </div>
                <div className="text-right">
                  <span className="line-through text-emerald-200 text-[10px] block font-mono">Rp 15.750.000</span>
                  <span className="font-mono font-bold text-white text-sm">Rp 9.500.000</span>
                </div>
              </div>
            </div>
          </div>

          <p className="text-[11px] text-slate-500 italic">
            *Rincian pembayaran normal dasar: Uang Masuk Rp 12.500.000, Daurah Rp 50.000, Seragam Rp 1.450.000, Awal tahun Rp 200.000, Bulanan Rp 1.550.000.
          </p>
        </div>
      );

    case 7:
      // Page 7 (06): Jalur Tahfizh MTs
      return (
        <div className="space-y-3">
          <div className="flex justify-between items-center border-b border-emerald-800 pb-1">
            <h2 className="text-lg font-bold text-emerald-950 font-serif">Jalur Tahfizh MTs</h2>
            <span className="bg-amber-400 text-slate-950 text-[10px] font-bold px-2 py-0.5 rounded">BEASISWA TAHFIZH</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
            <div className="bg-emerald-50 p-2 rounded border border-emerald-200">
              <strong className="text-emerald-900 block font-bold">Syarat & Ketentuan:</strong>
              <ul className="list-disc list-inside text-[11px] text-slate-700 mt-1 space-y-0.5">
                <li>Memiliki hafalan minimal 2 juz</li>
                <li>Menyerahkan sertifikat/surat keterangan lembaga</li>
                <li>Mengikuti seleksi Jalur Tahfizh</li>
              </ul>
            </div>
            <div className="bg-emerald-50 p-2 rounded border border-emerald-200">
              <strong className="text-emerald-900 block font-bold">Materi Ujian:</strong>
              <ul className="list-disc list-inside text-[11px] text-slate-700 mt-1 space-y-0.5">
                <li>Tes Tulis: MTK & Agama</li>
                <li>Tes Lisan: Baca Al-Qur'an & Hafalan Al-Qur'an</li>
              </ul>
            </div>
          </div>

          <div className="space-y-2">
            <h4 className="text-xs font-bold text-emerald-950 uppercase border-b border-slate-200 pb-1">
              Pengelompokan Beasiswa Tahfizh Hasil Tes:
            </h4>

            <div className="space-y-1.5 text-xs">
              <div className="bg-gradient-to-r from-emerald-800 to-emerald-900 text-white p-2 rounded flex justify-between items-center">
                <div>
                  <strong className="text-amber-300 block">GRADE A (Hafalan min 4 juz dhabit)</strong>
                  <span className="text-[10px] text-emerald-200">Diskon Uang Masuk 100%</span>
                </div>
                <div className="text-right font-mono font-bold text-amber-300 text-sm">
                  Rp 3.250.000
                </div>
              </div>

              <div className="bg-emerald-700 text-white p-2 rounded flex justify-between items-center">
                <div>
                  <strong className="text-amber-200 block">GRADE B (Hafalan min 3 juz dhabit)</strong>
                  <span className="text-[10px] text-emerald-100">Diskon Uang Masuk 68%</span>
                </div>
                <div className="text-right font-mono font-bold text-amber-200 text-sm">
                  Rp 7.250.000
                </div>
              </div>

              <div className="bg-emerald-600 text-white p-2 rounded flex justify-between items-center">
                <div>
                  <strong className="text-white block">GRADE C (Hafalan min 2 juz dhabit)</strong>
                  <span className="text-[10px] text-emerald-100">Diskon Uang Masuk 50%</span>
                </div>
                <div className="text-right font-mono font-bold text-white text-sm">
                  Rp 9.500.000
                </div>
              </div>
            </div>
          </div>
        </div>
      );

    case 8:
      // Page 8 (07): Jalur Banuhampu MTs
      return (
        <div className="space-y-3">
          <div className="flex justify-between items-center border-b border-emerald-800 pb-1">
            <h2 className="text-lg font-bold text-emerald-950 font-serif">Jalur Banuhampu MTs</h2>
            <span className="bg-emerald-800 text-white text-[10px] font-bold px-2 py-0.5 rounded">BEASISWA NAGARI</span>
          </div>

          <div className="bg-emerald-900 text-white p-3 rounded-lg space-y-1">
            <h3 className="text-sm font-bold text-amber-300">Khusus Warga Kecamatan Banuhampu</h3>
            <p className="text-xs leading-relaxed text-emerald-100">
              Anak yang mendaftar dan lulus tes jalur Banuhampu otomatis mendapat beasiswa potongan uang masuk <strong className="text-amber-300">50% dari Rp 12.500.000</strong>, yaitu sebesar <strong className="text-amber-300">Rp 6.250.000</strong>.
            </p>
            <div className="bg-amber-400 text-slate-950 text-[10px] font-bold px-2 py-0.5 rounded inline-block mt-1">
              Quota hanya 4 orang untuk setiap Nagari yang ada di Kecamatan Banuhampu
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
            <div className="bg-slate-50 p-2 rounded border border-slate-200">
              <strong className="text-emerald-900 block font-bold">Syarat & Ketentuan:</strong>
              <ul className="list-disc list-inside text-[11px] text-slate-700 mt-1 space-y-0.5">
                <li>Menyerahkan SKTM dari Kecamatan/Nagari</li>
                <li>KK domisili Kecamatan Banuhampu</li>
                <li>Mengikuti seleksi Jalur Banuhampu</li>
              </ul>
            </div>
            <div className="bg-slate-50 p-2 rounded border border-slate-200">
              <strong className="text-emerald-900 block font-bold">Materi Ujian:</strong>
              <ul className="list-disc list-inside text-[11px] text-slate-700 mt-1 space-y-0.5">
                <li>Tes Tulis: MTK & Agama</li>
                <li>Tes Lisan: Baca Al-Qur'an</li>
              </ul>
            </div>
          </div>

          <div className="border border-slate-300 rounded p-2 text-xs space-y-1">
            <div className="font-bold text-emerald-900 flex justify-between">
              <span>Total Keuangan Santri Baru Jalur Banuhampu:</span>
              <span className="font-mono text-sm text-emerald-900">Rp 9.500.000</span>
            </div>
            <p className="text-[10px] text-slate-600">
              (Uang Masuk Rp 6.250.000 + Daurah Rp 50k + Seragam Rp 1.450k + Awal tahun Rp 200k + Bulanan Rp 1.550k)
            </p>
          </div>
        </div>
      );

    case 9:
      // Page 9 (08): Jalur Parabek MTs
      return (
        <div className="space-y-3">
          <div className="flex justify-between items-center border-b border-emerald-800 pb-1">
            <h2 className="text-lg font-bold text-emerald-950 font-serif">Jalur Parabek MTs</h2>
            <span className="bg-amber-400 text-slate-950 text-[10px] font-bold px-2 py-0.5 rounded">WARGA ASLI PARABEK</span>
          </div>

          <div className="bg-emerald-900 text-white p-3 rounded-lg space-y-1">
            <h3 className="text-sm font-bold text-amber-300">Potongan Uang Masuk 60% + SPP Khusus</h3>
            <p className="text-xs leading-relaxed text-emerald-100">
              Anak yang mendaftar dan lulus tes jalur Parabek otomatis mendapat beasiswa potongan uang masuk <strong className="text-amber-300">60% dari Rp 12.500.000</strong>, yaitu sebesar <strong className="text-amber-300">Rp 7.500.000</strong> (bayar Uang Masuk hanya <strong className="text-amber-300">Rp 5.000.000</strong>).
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
            <div className="bg-slate-50 p-2 rounded border border-slate-200">
              <strong className="text-emerald-900 block font-bold">Syarat & Ketentuan:</strong>
              <p className="text-[11px] text-slate-700 mt-1">
                Menyerahkan Surat Keterangan Warga Asli Parabek Kubu nan Tujuah dari Wali Jorong.
              </p>
            </div>
            <div className="bg-slate-50 p-2 rounded border border-slate-200">
              <strong className="text-emerald-900 block font-bold">Materi Ujian:</strong>
              <p className="text-[11px] text-slate-700 mt-1">
                Tes Tulis: MTK & Agama | Tes Lisan: Baca Al-Qur'an
              </p>
            </div>
          </div>

          <div className="border border-amber-300 bg-amber-50 rounded p-2 text-xs space-y-1">
            <div className="flex justify-between font-semibold">
              <span>Uang SPP Bulanan Khusus:</span>
              <span className="font-mono font-bold text-emerald-900">Rp 300.000 / bln</span>
            </div>
            <div className="flex justify-between font-semibold"><span>Uang Asrama + Makan:</span><span className="font-mono">Rp 900.000 / bln</span></div>
            <div className="flex justify-between font-bold text-emerald-900 border-t border-amber-200 pt-1">
              <span>Total Keuangan Santri Baru Jalur Parabek:</span>
              <span className="font-mono text-sm text-emerald-900">Rp 7.900.000</span>
            </div>
          </div>
        </div>
      );

    case 10:
      // Page 10 (09): MADRASAH ALIYAH (MA)
      return (
        <div className="space-y-4">
          <div className="flex items-center gap-3 border-b-2 border-emerald-800 pb-2">
            <div className="w-8 h-8 rounded-full bg-emerald-800 text-white flex items-center justify-center font-bold text-sm">
              4
            </div>
            <div>
              <h2 className="text-xl font-bold text-emerald-950 font-serif">Madrasah Aliyah</h2>
              <span className="inline-block bg-amber-400 text-slate-950 text-[10px] font-bold px-2 py-0.5 rounded">
                AKREDITASI A
              </span>
            </div>
          </div>

          <p className="text-xs text-slate-700 leading-relaxed">
            Jenjang Madrasah Aliyah (MA) di Pondok Pesantren Parabek merupakan lanjutan dari Pendidikan Tsanawiyah. Menjunjung tinggi adab dan intelektualitas dalam pembelajaran. Para santri dilatih menjadi seorang ahli ilmu yang <strong className="text-emerald-900 italic">Taffaquh Fiddin</strong>.
          </p>

          <div className="grid grid-cols-2 gap-2 text-xs text-center font-bold">
            <div className="bg-emerald-800 text-white p-2 rounded">
              3 Jurusan: Keagamaan, IPA, & IPS
            </div>
            <div className="bg-emerald-900 text-amber-300 p-2 rounded">
              3 Kurikulum: Kepondokan, Kemenag, & Kemendikbud
            </div>
          </div>

          <div className="space-y-2">
            <h4 className="text-xs font-bold text-emerald-950 uppercase border-b border-slate-200 pb-1">
              13 Program Unggulan Madrasah Aliyah:
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-2 gap-y-1 text-xs text-slate-700">
              {[
                "1. Orientasi Studi Perguruan Tinggi Favorit",
                "2. Pembelajaran Agama berbasis Kitab Kuning",
                "3. Khidmatul Ummah (Pengabdian Masyarakat)",
                "4. Program guru kader",
                "5. Paper istinbath hukum",
                "6. Jam'iyatud Diyanah, Sains Club, Soscom",
                "7. Pertukaran Pelajar antar Negara",
                "8. Studi lapangan / Goes to Campus",
                "9. Muzakarah paper",
                "10. Ekstrakurikuler",
                "11. Mukhayyam Kitab dan Tahfizh",
                "12. Program Bahasa (AESAC)",
                "13. Program Organisasi Santri"
              ].map((prog, i) => (
                <div key={i} className="flex items-center gap-1.5 py-0.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span className="font-medium text-[11px]">{prog}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      );

    case 11:
      // Page 11 (10): Jalur Masuk MA - Jalur Reguler
      return (
        <div className="space-y-3">
          <div className="flex justify-between items-center border-b border-emerald-800 pb-1">
            <h2 className="text-lg font-bold text-emerald-950 font-serif">Jalur Masuk Madrasah Aliyah</h2>
            <span className="bg-slate-200 text-slate-800 text-[10px] font-bold px-2 py-0.5 rounded">JALUR REGULER</span>
          </div>

          <div className="border border-slate-300 rounded-lg overflow-hidden text-xs">
            <div className="bg-emerald-800 text-white p-1.5 font-bold text-center">
              Rincian Keuangan Santri Baru Jalur Reguler MA
            </div>

            <div className="p-2 space-y-2 bg-slate-50">
              <div>
                <div className="font-bold text-emerald-900 border-b border-slate-200 pb-0.5 mb-1">
                  A. Pembayaran Awal
                </div>
                <div className="flex justify-between py-0.5"><span>1. Uang Masuk</span><span className="font-mono">Rp 7.000.000</span></div>
                <div className="flex justify-between py-0.5"><span>2. Uang Daurah</span><span className="font-mono">Rp 50.000</span></div>
                <div className="flex justify-between py-0.5"><span>3. Uang I'dadi</span><span className="font-mono">Rp 500.000</span></div>
                <div className="flex justify-between py-0.5"><span>4. Perlengkapan & Seragam</span><span className="font-mono">Rp 1.450.000</span></div>
                <div className="flex justify-between font-bold text-emerald-900 pt-1 border-t border-slate-200">
                  <span>Jumlah Pembayaran Awal</span><span className="font-mono">Rp 9.000.000</span>
                </div>
              </div>

              <div>
                <div className="font-bold text-emerald-900 border-b border-slate-200 pb-0.5 mb-1">
                  B. Pembayaran Setiap Awal Tahun
                </div>
                <div className="flex justify-between py-0.5"><span>1. Uang IPUL (IPST, Pustaka, UKS, Lab)</span><span className="font-mono">Rp 185.000</span></div>
                <div className="flex justify-between py-0.5"><span>2. Uang Dana Sosial</span><span className="font-mono">Rp 15.000</span></div>
                <div className="flex justify-between font-bold text-emerald-900 pt-1 border-t border-slate-200">
                  <span>Jumlah Awal Tahun</span><span className="font-mono">Rp 200.000</span>
                </div>
              </div>

              <div>
                <div className="font-bold text-emerald-900 border-b border-slate-200 pb-0.5 mb-1">
                  C. Pembayaran Setiap Bulan
                </div>
                <div className="flex justify-between py-0.5"><span>1. Uang SPP</span><span className="font-mono">Rp 650.000</span></div>
                <div className="flex justify-between py-0.5"><span>2. Uang Asrama</span><span className="font-mono">Rp 200.000</span></div>
                <div className="flex justify-between py-0.5"><span>3. Uang Makan Asrama</span><span className="font-mono">Rp 700.000</span></div>
                <div className="flex justify-between font-bold text-emerald-900 pt-1 border-t border-slate-200">
                  <span>Jumlah Bulanan</span><span className="font-mono">Rp 1.550.000</span>
                </div>
              </div>
            </div>

            <div className="bg-amber-400 text-slate-950 p-2 font-bold flex justify-between items-center text-sm">
              <span>Total Keuangan Santri Baru:</span>
              <span className="font-mono text-base">Rp 10.750.000</span>
            </div>
          </div>

          <div className="bg-emerald-50 border border-emerald-300 p-2 rounded text-center text-xs font-semibold text-emerald-900">
            Kewajiban bulanan: <span className="text-amber-800 font-mono font-bold">Rp 1.550.000</span>
          </div>
        </div>
      );

    case 12:
      // Page 12 (11): Jalur Tahfizh MA
      return (
        <div className="space-y-3">
          <div className="flex justify-between items-center border-b border-emerald-800 pb-1">
            <h2 className="text-lg font-bold text-emerald-950 font-serif">Jalur Tahfizh MA</h2>
            <span className="bg-amber-400 text-slate-950 text-[10px] font-bold px-2 py-0.5 rounded">BEASISWA MA</span>
          </div>

          <div className="bg-emerald-900 text-white p-3 rounded-lg space-y-1">
            <h3 className="text-sm font-bold text-amber-300">Potongan Uang Masuk 60% (Bebas Uang Masuk)</h3>
            <p className="text-xs leading-relaxed text-emerald-100">
              Anak yang mendaftar dan lulus tes jalur Tahfizh MA (minimal 10 juz) otomatis mendapat beasiswa potongan uang masuk <strong className="text-amber-300">sebesar 60% dari Rp 12.500.000</strong> (Uang masuk <strong className="text-amber-300">Rp 0</strong>).
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
            <div className="bg-slate-50 p-2 rounded border border-slate-200">
              <strong className="text-emerald-900 block font-bold">Syarat & Ketentuan:</strong>
              <ul className="list-disc list-inside text-[11px] text-slate-700 mt-1 space-y-0.5">
                <li>Memiliki hafalan minimal 10 juz</li>
                <li>Menyerahkan sertifikat/surat keterangan hafalan</li>
                <li>Mengikuti seleksi Jalur Tahfizh</li>
              </ul>
            </div>
            <div className="bg-slate-50 p-2 rounded border border-slate-200">
              <strong className="text-emerald-900 block font-bold">Materi Ujian:</strong>
              <ul className="list-disc list-inside text-[11px] text-slate-700 mt-1 space-y-0.5">
                <li>Tes Tulis: MTK, Agama, & Ilmu umum</li>
                <li>Tes Lisan: Baca Al-Qur'an</li>
              </ul>
            </div>
          </div>

          <div className="border border-emerald-300 bg-emerald-50 rounded p-2 text-xs space-y-1">
            <div className="flex justify-between font-semibold"><span>Pembayaran Awal (Daurah, I'dadi, Seragam):</span><span className="font-mono">Rp 2.000.000</span></div>
            <div className="flex justify-between font-semibold"><span>Pembayaran Setiap Awal Tahun:</span><span className="font-mono">Rp 200.000</span></div>
            <div className="flex justify-between font-semibold"><span>Pembayaran Setiap Bulan:</span><span className="font-mono">Rp 1.550.000</span></div>
            <div className="flex justify-between font-bold text-emerald-900 border-t border-emerald-200 pt-1">
              <span>Total Keuangan Santri Baru Jalur Tahfizh MA:</span>
              <span className="font-mono text-sm text-emerald-900">Rp 3.750.000</span>
            </div>
          </div>
        </div>
      );

    case 13:
      // Page 13 (12): PENDIDIKAN DINIYAH FORMAL (PDF)
      return (
        <div className="space-y-4">
          <div className="flex items-center gap-3 border-b-2 border-emerald-800 pb-2">
            <div className="w-8 h-8 rounded-full bg-emerald-800 text-white flex items-center justify-center font-bold text-sm">
              5
            </div>
            <div>
              <h2 className="text-xl font-bold text-emerald-950 font-serif">Pendidikan Diniyah Formal (PDF)</h2>
              <span className="inline-block bg-amber-400 text-slate-950 text-[10px] font-bold px-2 py-0.5 rounded">
                TINGKAT ULYA (SETARA SMA/MA)
              </span>
            </div>
          </div>

          <div className="bg-emerald-900 text-white p-3 rounded-lg text-xs space-y-1">
            <div className="text-amber-300 font-bold">Izin Pendirian Dirjen Pendis Kemenag RI</div>
            <p className="text-emerald-100">
              Nomor 3051 Tahun 2022 | <span className="font-mono text-amber-300 font-bold">NSPDF: 231213060001</span>
            </p>
          </div>

          <p className="text-xs text-slate-700 leading-relaxed">
            Jenjang Pendidikan Diniyah Formal (PDF) Khusus Ulya merupakan Satuan Pendidikan Khusus berbasis <strong>Kitab Kuning</strong> dan penempaan <strong>Life Skill</strong> bagi santri.
          </p>

          <div className="bg-amber-50 border-l-4 border-amber-500 p-2.5 rounded-r text-xs space-y-1">
            <strong className="text-emerald-900 block font-bold">Proporsi Kurikulum PDF:</strong>
            <p className="text-slate-700">
              1/3 Pendidikan Umum & 2/3 Pendidikan Keagamaan Islam. Keistimewaan terletak pada pendalaman pemahaman dan hafalan Kitab Kuning serta Al-Qur'an dan Matan.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
            <div className="bg-emerald-50 p-2.5 rounded border border-emerald-200">
              <strong className="text-emerald-900 block font-bold border-b border-emerald-200 pb-1 mb-1">
                Hafalan Wajib:
              </strong>
              <ol className="list-decimal list-inside space-y-0.5 text-slate-700">
                <li>Al-Qur'an</li>
                <li>Matan Kitab</li>
              </ol>
            </div>

            <div className="bg-emerald-50 p-2.5 rounded border border-emerald-200">
              <strong className="text-emerald-900 block font-bold border-b border-emerald-200 pb-1 mb-1">
                Kajian Malam:
              </strong>
              <div className="grid grid-cols-2 gap-x-1 text-[11px] text-slate-700">
                <span>1. Hadits</span>
                <span>2. Tarikh</span>
                <span>3. Tafsir</span>
                <span>4. Fiqh</span>
                <span>5. Akhlak</span>
                <span>6. Motivasi</span>
              </div>
            </div>
          </div>
        </div>
      );

    case 14:
      // Page 14 (13): Jalur Masuk PDF - Jalur Reguler
      return (
        <div className="space-y-3">
          <div className="flex justify-between items-center border-b border-emerald-800 pb-1">
            <h2 className="text-lg font-bold text-emerald-950 font-serif">Jalur Masuk PDF - Reguler</h2>
            <span className="bg-slate-200 text-slate-800 text-[10px] font-bold px-2 py-0.5 rounded">NON BEASISWA</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
            <div className="bg-slate-50 p-2 rounded border border-slate-200">
              <strong className="text-emerald-900 block font-bold">Syarat & Ketentuan:</strong>
              <p className="text-[11px] text-slate-700 mt-1">Lulus tes yang diselenggarakan</p>
            </div>
            <div className="bg-slate-50 p-2 rounded border border-slate-200">
              <strong className="text-emerald-900 block font-bold">Materi Ujian:</strong>
              <ul className="list-disc list-inside text-[11px] text-slate-700 mt-1 space-y-0.5">
                <li>Tes Tulis: Agama, Ilmu dasar, Qawa'id</li>
                <li>Tes Lisan: Baca Al-Qur'an, Baca Kitab</li>
              </ul>
            </div>
          </div>

          <div className="border border-slate-300 rounded p-2 text-xs space-y-1 bg-slate-50">
            <div className="font-bold text-emerald-900 border-b border-slate-200 pb-0.5">Rincian Biaya PDF Reguler:</div>
            <div className="flex justify-between"><span>A. Pembayaran Awal (Masuk, Daurah, I'dadi, Seragam):</span><span className="font-mono">Rp 9.000.000</span></div>
            <div className="flex justify-between"><span>B. Pembayaran Setiap Awal Tahun:</span><span className="font-mono">Rp 200.000</span></div>
            <div className="flex justify-between"><span>C. Pembayaran Setiap Bulan:</span><span className="font-mono">Rp 1.550.000</span></div>
            <div className="bg-amber-400 text-slate-950 p-1.5 font-bold flex justify-between rounded mt-2">
              <span>Total Keuangan Santri Baru:</span>
              <span className="font-mono text-sm">Rp 10.750.000</span>
            </div>
          </div>
        </div>
      );

    case 15:
      // Page 15 (14): Jalur Kitab PDF
      return (
        <div className="space-y-3">
          <div className="flex justify-between items-center border-b border-emerald-800 pb-1">
            <h2 className="text-lg font-bold text-emerald-950 font-serif">Jalur Kitab PDF</h2>
            <span className="bg-amber-400 text-slate-950 text-[10px] font-bold px-2 py-0.5 rounded">BEASISWA KITAB</span>
          </div>

          <div className="bg-emerald-900 text-white p-3 rounded-lg space-y-1">
            <h3 className="text-sm font-bold text-amber-300">Khusus Calon Santri Mahir Kitab Kuning</h3>
            <p className="text-xs leading-relaxed text-emerald-100">
              Bebas uang masuk bagi santri yang lulus tes kemampuan membaca Kitab Kuning.
            </p>
          </div>

          <div className="border border-emerald-300 bg-emerald-50 p-2.5 rounded text-xs space-y-1">
            <div className="flex justify-between font-semibold"><span>A. Pembayaran Awal (Uang Masuk Rp 0 + Daurah, I'dadi, Seragam):</span><span className="font-mono">Rp 2.000.000</span></div>
            <div className="flex justify-between font-semibold"><span>B. Pembayaran Setiap Awal Tahun:</span><span className="font-mono">Rp 200.000</span></div>
            <div className="flex justify-between font-semibold"><span>C. Pembayaran Setiap Bulan:</span><span className="font-mono">Rp 1.550.000</span></div>
            <div className="flex justify-between font-bold text-emerald-900 border-t border-emerald-200 pt-1">
              <span>Total Keuangan Santri Baru Jalur Kitab:</span>
              <span className="font-mono text-sm text-emerald-900">Rp 3.750.000</span>
            </div>
          </div>

          <div className="bg-amber-100 border border-amber-300 text-slate-800 p-2.5 rounded text-xs font-medium">
            <strong className="text-amber-900 block">Catatan Penting:</strong>
            Anak yang mendaftar di jalur Kitab tapi tidak lulus, maka akan dialihkan secara otomatis ke jalur Reguler.
          </div>
        </div>
      );

    case 16:
      // Page 16 (15): MA'HAD ALY
      return (
        <div className="space-y-4">
          <div className="flex items-center gap-3 border-b-2 border-emerald-800 pb-2">
            <div className="w-8 h-8 rounded-full bg-emerald-800 text-white flex items-center justify-center font-bold text-sm">
              6
            </div>
            <div>
              <h2 className="text-xl font-bold text-emerald-950 font-serif">Ma'had Aly Parabek</h2>
              <span className="inline-block bg-amber-400 text-slate-950 text-[10px] font-bold px-2 py-0.5 rounded">
                PERGURUAN TINGGI S-1 (AKREDITASI B)
              </span>
            </div>
          </div>

          <p className="text-xs text-slate-700 leading-relaxed">
            Ma'had Aly Sumatera Thawalib Parabek adalah salah satu dari 91 Ma'had Aly se-Indonesia yang memperoleh Izin Perdana Pendirian Pendidikan Formal setingkat Strata 1 (S-1) dengan gelar <strong>Sarjana Fikih dan Ushul Fikih (S.F.U.)</strong>.
          </p>

          <div className="bg-emerald-900 text-white p-3 rounded-lg space-y-1 text-xs">
            <div className="text-amber-300 font-bold">SK Dirjend Pendidikan Islam RI No. 3002 Tahun 2016</div>
            <div className="font-mono text-emerald-200">NSMA: 241213060001</div>
            <div className="pt-1 border-t border-emerald-800 text-emerald-100 font-medium">
              Takhasus Fiqh dan Ushul Fiqh | Konsentrasi Qawa'idul Ushuliyyah Lughawiyyah
            </div>
          </div>

          <div className="bg-slate-50 border border-slate-200 p-2.5 rounded flex items-center gap-3 text-xs">
            <div className="w-10 h-10 rounded-full bg-emerald-800 text-white font-bold flex items-center justify-center shrink-0 text-lg">
              🇸🇩
            </div>
            <div>
              <strong className="text-emerald-900 block font-bold">Tenaga Pengajar Asing:</strong>
              <span className="text-slate-800 font-medium">Syekh Yasser Sa'ad Abdalla Abdelhamid Elhaddad (Mesir)</span>
            </div>
          </div>

          <div className="space-y-1.5">
            <h4 className="text-xs font-bold text-emerald-950 uppercase border-b border-slate-200 pb-1">
              Program Unggulan Ma'had Aly:
            </h4>
            <div className="grid grid-cols-2 gap-x-2 gap-y-1 text-[11px] text-slate-700">
              <span>1. KM / KKN (Dalam & Luar Negeri)</span>
              <span>2. Seminar Nasional & Int.</span>
              <span>3. Mudzkarah (Bahtsul Masail)</span>
              <span>4. Khataman Kitab</span>
              <span>5. Tahfizh Al-Quran</span>
              <span>6. Tadabur Alam & Rihlah</span>
              <span>7. Karya Tulis (Skripsi)</span>
              <span>8. Al-Miftah & Ta'liq Kitab</span>
            </div>
          </div>
        </div>
      );

    case 17:
      // Page 17 (16): Fasilitas & Syarat Pendaftaran
      return (
        <div className="space-y-3">
          <div className="border-b border-emerald-800 pb-1">
            <h2 className="text-lg font-bold text-emerald-950 font-serif">Fasilitas & Syarat Pendaftaran</h2>
          </div>

          <div className="space-y-1.5">
            <h3 className="text-xs font-bold text-emerald-900 uppercase tracking-wider bg-emerald-100 p-1 rounded">
              Fasilitas Pesantren:
            </h3>
            <div className="grid grid-cols-2 gap-x-2 gap-y-1 text-xs text-slate-700">
              {[
                "1. Pembinaan 24 Jam", "2. Asrama Putra", "3. Asrama Putri", "4. Hotspot Area",
                "5. Perpustakaan", "6. Masjid Utama", "7. Ruang Dosen", "8. Ruang Administrasi",
                "9. Aula Pertemuan", "10. Pos Kesehatan Pesantren (Poskestren)", "11. Sarana Olahraga"
              ].map((fas, i) => (
                <span key={i} className="text-[11px]">• {fas}</span>
              ))}
            </div>
          </div>

          <div className="space-y-1.5 pt-1">
            <h3 className="text-xs font-bold text-emerald-900 uppercase tracking-wider bg-emerald-100 p-1 rounded">
              Syarat Pendaftaran Ma'had Aly:
            </h3>
            <ol className="list-decimal list-inside text-xs text-slate-700 space-y-1">
              <li>Ijazah MA sederajat + transkrip nilai dilegalisir</li>
              <li>Fotocopy KK & KTP</li>
              <li>Fotocopy Akte Kelahiran</li>
              <li>Mengisi Formulir Pendaftaran Online</li>
              <li>Pas Photo berwarna 3x4</li>
              <li>
                Membayar uang pendaftaran <strong className="text-emerald-900">Rp 250.000</strong> via Virtual Account (VA) BNI:
                <div className="bg-amber-100 text-slate-900 font-mono font-bold p-1 rounded mt-1 text-center">
                  BNI 9888010923112901 a.n. PMB M. ALY SUM. THAWALIB PARABEK
                </div>
              </li>
            </ol>
          </div>
        </div>
      );

    case 18:
      // Page 18 (17): Informasi Ma'had Aly - Prestasi & Keuangan
      return (
        <div className="space-y-3">
          <div className="border-b border-emerald-800 pb-1">
            <h2 className="text-lg font-bold text-emerald-950 font-serif">Prestasi Ma'had Aly & Keuangan</h2>
          </div>

          <div className="space-y-1.5">
            <h3 className="text-xs font-bold text-emerald-900 uppercase tracking-wider">
              Daftar Prestasi Mahasantri:
            </h3>
            <div className="max-h-48 overflow-y-auto space-y-1 pr-1 text-[11px] text-slate-700">
              {[
                "1. Peserta Program Santri Indonesia untuk Perdamaian Dunia ke China",
                "2. Pelatihan Kepengarangan Turats (Mesir) Kemenag RI 2024",
                "3. Santri International Fellowship (Coventry University, Inggris) Kemenag RI 2024",
                "4. Micro Credential at American Islamic College Chicago Kemenag RI 2024",
                "5. Pemenang Pembuatan Logo DEMA AMALI Indonesia",
                "6. Juara 1 Lomba Tilawah Tingkat Nasional",
                "7. Imam Masjid Uni Emirat Arab (UEA)",
                "8. Juara Lomba Essai Mahasantri Ma'had Aly se-Indonesia",
                "9. Juara 2 MQK Mahasiswa se-Sumbar PBA UIN Imam Bonjol",
                "10. Juara 2 Pidato Bahasa Arab Mahasiswa se-Sumbar PBA UIN Imam Bonjol 2024",
                "11. Artikel 'Sejarawan Interpretasi Al-Quran' LOLOS Jurnal Walisongo Dec 2024",
                "12. Finalist MQK International Ke-1 2025 Sengkang Sulsel",
                "13. 15 Terbaik Festival Puisi 3 Negara (Indonesia, Malaysia, Singapura)"
              ].map((p, i) => (
                <div key={i} className="p-1 bg-slate-50 border border-slate-200 rounded">
                  {p}
                </div>
              ))}
            </div>
          </div>

          <div className="border border-emerald-300 bg-emerald-50 p-2 rounded text-xs space-y-1">
            <strong className="text-emerald-900 block font-bold">Rincian Keuangan Ma'had Aly:</strong>
            <div className="flex justify-between py-0.5"><span>1. UKT per Semester</span><span className="font-mono">Rp 600.000</span></div>
            <div className="flex justify-between py-0.5"><span>2. Uang Almamater, KTM & Kartu Perpustakaan</span><span className="font-mono">Rp 250.000</span></div>
            <div className="flex justify-between py-0.5"><span>3. Uang Asrama per Bulan</span><span className="font-mono">Rp 200.000</span></div>
            <div className="flex justify-between py-0.5"><span>4. Uang DEMA per Tahun</span><span className="font-mono">Rp 150.000</span></div>
            <div className="flex justify-between font-bold text-emerald-900 border-t border-emerald-200 pt-1">
              <span>Jumlah Keuangan Awal:</span><span className="font-mono">Rp 1.200.000</span>
            </div>
          </div>
        </div>
      );

    case 19:
      // Page 19 (18): Kehidupan Asrama & Jadwal Harian
      return (
        <div className="space-y-3">
          <div className="flex justify-between items-center border-b border-emerald-800 pb-1">
            <h2 className="text-lg font-bold text-emerald-950 font-serif">Kehidupan di Asrama</h2>
            <span className="bg-emerald-800 text-white text-[10px] font-bold px-2 py-0.5 rounded">WAJIB ASRAMA</span>
          </div>

          <p className="text-[11px] text-slate-700">
            Sejak tahun ajaran 2022/2023 semua santri diwajibkan tinggal di asrama untuk pembiasaan ibadah, kemandirian, dan karakter akhlaqul karimah.
          </p>

          <div className="space-y-1">
            <h4 className="text-xs font-bold text-emerald-950 uppercase border-b border-slate-200 pb-0.5">
              Jadwal Kegiatan Harian Santri:
            </h4>
            <div className="max-h-56 overflow-y-auto space-y-1 pr-1 text-[11px]">
              {[
                { time: "04.00 - 05.00", act: "Shalat tahajud" },
                { time: "05.00 - 06.00", act: "Shalat subuh berjama'ah, Mufradah Shabahiyah, Kultum" },
                { time: "06.00 - 07.00", act: "Mandi, Sarapan pagi, Piket & persiapan sekolah" },
                { time: "07.00 - 12.00", act: "PBM di kelas (Pembelajaran Madrasah)" },
                { time: "12.00 - 13.00", act: "Shalat Zhuhur berjama'ah & makan siang" },
                { time: "13.30 - 14.45", act: "PBM di kelas" },
                { time: "14.45 - 15.45", act: "Pembelajaran sore di madrasah" },
                { time: "15.45 - 16.15", act: "Shalat Ashar berjama'ah" },
                { time: "16.15 - 17.00", act: "Olah raga & kegiatan bebas" },
                { time: "17.00 - 18.00", act: "Mandi sore, makan malam, piket & persiapan" },
                { time: "18.00 - 19.30", act: "Shalat Magrib berjama'ah, Tahfizhul Qur'an, Hafalan Hadits & Doa" },
                { time: "19.30 - 20.00", act: "Shalat Isya berjamaah" },
                { time: "20.00 - 21.30", act: "Belajar Takhasus Kitab / Muhadharah" },
                { time: "21.30 - 22.30", act: "Belajar malam mandiri" },
                { time: "22.30 - 23.00", act: "Pengabsenan santri & kontrol" },
                { time: "23.00 - 04.00", act: "Istirahat malam" },
              ].map((item, idx) => (
                <div key={idx} className="flex gap-2 p-1 bg-slate-50 rounded border border-slate-200">
                  <span className="font-mono font-bold text-emerald-900 shrink-0 w-24">{item.time}</span>
                  <span className="text-slate-800">{item.act}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      );

    case 20:
      // Page 20 (19): Alumni & Ketentuan Pengunduran Diri
      return (
        <div className="space-y-3">
          <div className="border-b border-emerald-800 pb-1">
            <h2 className="text-lg font-bold text-emerald-950 font-serif">Alumni & Pengunduran Diri</h2>
          </div>

          <div className="bg-emerald-900 text-white p-2.5 rounded space-y-1">
            <h3 className="text-xs font-bold text-amber-300">Perguruan Tinggi Alumni:</h3>
            <p className="text-[11px] text-emerald-100 leading-normal">
              Universitas Islam Madinah, Oxford University, McGill University Canada, Univ. Freiburg Germany, Univ. Warsawa Polandia, Necmettin Erbakan Turki, Al-Azhar Mesir, Sudan, UI, ITB, UGM, IPB, ITS, Telkom, UIN, UNP, UNAND, dll.
            </p>
          </div>

          <div className="space-y-2 pt-1">
            <h3 className="text-xs font-bold text-emerald-950 uppercase border-b border-slate-200 pb-0.5">
              Ketentuan Pengunduran Diri Calon Santri:
            </h3>

            <div className="bg-amber-50 border border-amber-300 p-2 rounded text-xs text-amber-900 font-semibold">
              Uang pendaftaran (Rp 250.000) TIDAK DAPAT DIKEMBALIKAN jika mengundurkan diri.
            </div>

            <div className="space-y-1 text-xs">
              <p className="font-bold text-emerald-900">Ketentuan pengembalian Uang Masuk (Daftar Ulang):</p>
              <div className="space-y-1 text-[11px]">
                <div className="p-1.5 bg-slate-50 border border-slate-200 rounded flex justify-between">
                  <span>1. Mengundurkan diri sebelum masuk asrama:</span>
                  <span className="font-bold text-emerald-900">Dikembalikan 50%</span>
                </div>
                <div className="p-1.5 bg-slate-50 border border-slate-200 rounded flex justify-between">
                  <span>2. Mengundurkan diri sejak H +1 masuk Asrama:</span>
                  <span className="font-bold text-emerald-900">Dikembalikan 40%</span>
                </div>
                <div className="p-1.5 bg-slate-50 border border-slate-200 rounded flex justify-between">
                  <span>3. Mengundurkan diri 01 Ags 2026 s/d 31 Ags 2026:</span>
                  <span className="font-bold text-emerald-900">Dikembalikan 30%</span>
                </div>
                <div className="p-1.5 bg-red-50 border border-red-200 text-red-900 rounded flex justify-between font-semibold">
                  <span>4. Mengundurkan diri sejak 1 September 2026 onwards:</span>
                  <span>Tidak Ada Pengembalian</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      );

    case 21:
      // Page 21 (20): Aturan Santri
      return (
        <div className="space-y-3">
          <div className="flex justify-between items-center border-b border-emerald-800 pb-1">
            <h2 className="text-lg font-bold text-emerald-950 font-serif">Aturan & Larangan Santri</h2>
            <span className="bg-red-800 text-white text-[10px] font-bold px-2 py-0.5 rounded">TATA TERTIB</span>
          </div>

          <div className="bg-red-50 border-l-4 border-red-600 p-2 rounded text-xs text-red-900">
            <strong>Sanksi Pelanggaran:</strong> Mulai dari teguran, pemanggilan orang tua, surat perjanjian, hingga <span className="font-bold underline">dikeluarkan dari Pondok Pesantren</span>.
          </div>

          <div className="max-h-64 overflow-y-auto space-y-1 pr-1 text-[11px] text-slate-700">
            {[
              "1. Melakukan tindakan asusila (melanggar norma agama & adat)",
              "2. Menyimpan, mengedarkan, mengonsumsi narkoba & minuman keras",
              "3. Terlibat tawuran & geng kriminal",
              "4. Bergaul melampaui batas sesama jenis",
              "5. Melakukan perbuatan bullying fisik maupun verbal",
              "6. Merokok dan sejenisnya",
              "7. Melenceng dari Aqidah Ahlusunnah Waljama'ah",
              "8. Melawan/meremehkan orang tua, guru, karyawan, pembina asrama",
              "9. Menonton/menyimpan/mengedarkan konten pornografi",
              "10. Membawa, menggunakan & menyimpan Handphone di lingkungan pesantren",
              "11. Merusak fasilitas Pesantren",
              "12. Berkelahi, tato, atau tindik",
              "13. Berjudi (termasuk Judi Game Online)",
              "14. Mengancam, memeras, dan menipu siapapun",
              "15. Mempengaruhi teman untuk melanggar peraturan",
              "16. Memakai pakaian tidak sesuai aturan Pesantren",
              "17. Mencuri"
            ].map((rule, idx) => (
              <div key={idx} className="p-1 bg-slate-50 border border-slate-200 rounded flex items-start gap-1.5">
                <ShieldAlert className="w-3.5 h-3.5 text-red-600 shrink-0 mt-0.5" />
                <span>{rule}</span>
              </div>
            ))}
          </div>
        </div>
      );

    case 22:
      // Page 22 (21): Alur Pendaftaran
      return (
        <div className="space-y-3">
          <div className="border-b border-emerald-800 pb-1">
            <h2 className="text-lg font-bold text-emerald-950 font-serif">Alur Pendaftaran PSMB</h2>
          </div>

          <div className="grid grid-cols-2 gap-2 text-center text-xs font-bold">
            <div className="bg-emerald-900 text-white p-2 rounded">
              Jadwal Pendaftaran:<br />
              <span className="text-amber-300 font-mono text-sm">01 Okt 2026 – 08 Mei 2027</span>
            </div>
            <div className="bg-amber-400 text-slate-950 p-2 rounded">
              Uang Pendaftaran:<br />
              <span className="font-mono text-sm">Rp 250.000</span>
            </div>
          </div>

          <div className="space-y-1.5 text-xs">
            {[
              { step: "01", title: "Pendaftaran Online / Offline", desc: "Isi formulir & penuhi syarat berkas yang telah ditentukan." },
              { step: "02", title: "Pembayaran & Upload Berkas", desc: "Bayar Rp 250.000 ke VA WhatsApp & upload berkas untuk kartu ujian." },
              { step: "03", title: "Gabung Grup WhatsApp CSB", desc: "Masuk grup WA Calon Santri Baru (konfirmasi panitia jika >3 hari)." },
              { step: "04", title: "Mengikuti Tes Seleksi", desc: "Mengikuti tes offline/online sesuai pertimbangan panitia." },
              { step: "05", title: "Pengumuman Hasil Seleksi", desc: "Diumumkan via WA Grup & medsos resmi terkait daftar ulang." }
            ].map((st) => (
              <div key={st.step} className="flex gap-2 p-2 bg-slate-50 border border-slate-200 rounded">
                <div className="bg-emerald-800 text-amber-300 font-mono font-bold px-2 py-1 rounded text-xs h-fit">
                  {st.step}
                </div>
                <div>
                  <strong className="text-emerald-900 block text-xs">{st.title}</strong>
                  <p className="text-[11px] text-slate-600">{st.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      );

    case 23:
      // Page 23 (22): Informasi Kontak & Diskon Saudara
      return (
        <div className="space-y-4">
          <div className="border-b border-emerald-800 pb-1">
            <h2 className="text-lg font-bold text-emerald-950 font-serif">Informasi Kontak Resmi</h2>
          </div>

          <div className="bg-amber-400 text-slate-950 p-3 rounded-lg text-center space-y-1 shadow">
            <div className="text-xs font-bold uppercase tracking-wider">BEASISWA SAUDARA KANDUNG</div>
            <div className="text-base font-extrabold font-serif">
              POTONGAN BIAYA 20% UANG MASUK
            </div>
            <p className="text-[11px] font-medium text-slate-900">
              Bagi calon santri yang memiliki saudara kandung yang sedang mondok di Parabek!
            </p>
          </div>

          <div className="space-y-2 text-xs">
            <div className="bg-emerald-50 border border-emerald-200 p-3 rounded-lg space-y-2">
              <strong className="text-emerald-900 block font-bold text-sm">Nomor Telepon / WhatsApp Panitia:</strong>
              <div className="space-y-1 text-slate-800 font-mono font-semibold">
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-emerald-700" />
                  <span>0812-6095-9820</span> (WA / Telepon)
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-emerald-700" />
                  <span>0831-8251-1042</span> (WA Only)
                </div>
              </div>
            </div>

            <div className="bg-slate-50 border border-slate-200 p-3 rounded-lg space-y-1.5">
              <strong className="text-emerald-900 block font-bold">Media Sosial Resmi:</strong>
              <div className="grid grid-cols-2 gap-1 text-[11px] text-slate-700">
                <span>• Facebook: Sumatera Thawalib Parabek</span>
                <span>• Instagram: Sumatera Thawalib Parabek</span>
                <span>• YouTube: Parabek TV</span>
                <span>• TikTok: Sumatera Thawalib Parabek</span>
              </div>
            </div>
          </div>
        </div>
      );

    case 24:
      // Page 24: Link Pendaftaran & Alamat Kampus
      return (
        <div className="space-y-4 text-center">
          <div className="border-b border-emerald-800 pb-1">
            <h2 className="text-lg font-bold text-emerald-950 font-serif">Link Pendaftaran & Alamat Kampus</h2>
          </div>

          <div className="bg-gradient-to-br from-emerald-900 to-teal-950 text-white p-4 rounded-xl shadow-lg space-y-3">
            <h3 className="text-sm font-bold text-amber-300 uppercase tracking-wider">
              LINK RESMI PENDAFTARAN ONLINE
            </h3>

            <a 
              href={REGISTRATION_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold px-4 py-2.5 rounded-lg transition-transform active:scale-95 shadow-md text-xs sm:text-sm w-full"
            >
              <span>thawalib-parabek.eduvista.co.id</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          <div className="text-left space-y-2 text-xs">
            <h4 className="font-bold text-emerald-950 uppercase border-b border-slate-200 pb-1">
              Lokasi Kampus Pesantren:
            </h4>

            <div className="space-y-2">
              <div className="p-2 bg-slate-50 border border-slate-200 rounded">
                <strong className="text-emerald-900 block font-semibold">KAMPUS 1:</strong>
                <p className="text-slate-600 text-[11px]">
                  Jorong Parabek, Nagari Ladang Laweh, Kecamatan Banuhampu, Kabupaten Agam, Sumatra Barat
                </p>
              </div>

              <div className="p-2 bg-slate-50 border border-slate-200 rounded">
                <strong className="text-emerald-900 block font-semibold">KAMPUS 2:</strong>
                <p className="text-slate-600 text-[11px]">
                  Jorong Jambu Aia, Nagari Taluak IV Suku, Kecamatan Banuhampu, Kabupaten Agam, Sumatra Barat
                </p>
              </div>

              <div className="p-2 bg-slate-50 border border-slate-200 rounded">
                <strong className="text-emerald-900 block font-semibold">KAMPUS 3:</strong>
                <p className="text-slate-600 text-[11px]">
                  Jorong Bangkaweh, Nagari Ladang Laweh, Kecamatan Banuhampu, Kabupaten Agam, Sumatra Barat
                </p>
              </div>
            </div>
          </div>
        </div>
      );

    default:
      return null;
  }
}
