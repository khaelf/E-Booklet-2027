export interface BookletPage {
  id: number;
  pdfPageNumber: number; // 1 - 24
  bookletPageNumber?: string; // e.g. "01", "02"
  title: string;
  category: string;
  keywords: string[];
  contentSummary: string;
}

export interface TocItem {
  number: string;
  title: string;
  pageNumber: number; // 1 - 24
  category: string;
}

export const REGISTRATION_URL = "https://thawalib-parabek.eduvista.co.id/";

export const TABLE_OF_CONTENTS: TocItem[] = [
  { number: "01", title: "Profil Singkat", pageNumber: 2, category: "Umum" },
  { number: "02", title: "Visi dan Misi", pageNumber: 3, category: "Umum" },
  { number: "03", title: "Kurikulum & Program Unggulan", pageNumber: 4, category: "MTs" },
  { number: "04", title: "Madrasah Tsanawiyah", pageNumber: 4, category: "MTs" },
  { number: "05", title: "Jalur Masuk Madrasah Tsanawiyah", pageNumber: 5, category: "MTs" },
  { number: "06", title: "Jalur Reguler MTs", pageNumber: 5, category: "MTs" },
  { number: "07", title: "Jalur Prestasi MTs", pageNumber: 6, category: "MTs" },
  { number: "08", title: "Jalur Tahfizh MTs", pageNumber: 7, category: "MTs" },
  { number: "09", title: "Jalur Banuhampu MTs", pageNumber: 8, category: "MTs" },
  { number: "10", title: "Jalur Parabek MTs", pageNumber: 9, category: "MTs" },
  { number: "11", title: "Madrasah Aliyah", pageNumber: 10, category: "MA" },
  { number: "12", title: "Jalur Masuk Madrasah Aliyah", pageNumber: 11, category: "MA" },
  { number: "13", title: "Pendidikan Diniyah Formal (PDF)", pageNumber: 13, category: "PDF" },
  { number: "14", title: "Jalur Masuk PDF", pageNumber: 14, category: "PDF" },
  { number: "15", title: "Ma'had Aly", pageNumber: 16, category: "Ma'had Aly" },
  { number: "16", title: "Fasilitas & Syarat Pendaftaran", pageNumber: 17, category: "Pendaftaran" },
  { number: "17", title: "Prestasi Ma'had Aly", pageNumber: 18, category: "Ma'had Aly" },
  { number: "18", title: "Kegiatan Santri di Asrama", pageNumber: 19, category: "Asrama" },
  { number: "19", title: "Pola Pendidikan dan Program Asrama", pageNumber: 19, category: "Asrama" },
  { number: "20", title: "Alumni dan Perguruan Tinggi", pageNumber: 20, category: "Alumni" },
  { number: "21", title: "Ketentuan Pengunduran Diri", pageNumber: 20, category: "Ketentuan" },
  { number: "22", title: "Aturan Santri", pageNumber: 21, category: "Peraturan" },
  { number: "23", title: "Alur Pendaftaran", pageNumber: 22, category: "Pendaftaran" },
  { number: "24", title: "Informasi Kontak", pageNumber: 23, category: "Kontak" },
  { number: "25", title: "Link Pendaftaran & Alamat Kampus", pageNumber: 24, category: "Kontak" },
];

export const BOOKLET_PAGES_DATA: BookletPage[] = [
  {
    id: 1,
    pdfPageNumber: 1,
    title: "Sampul Utama Booklet PSMB 2027/2028",
    category: "Cover",
    keywords: ["cover", "psmb", "2027", "2028", "sampul", "penerimaan santri baru", "thawalib parabek"],
    contentSummary: "Penerimaan Santri & Mahasantri Baru Tahun Ajaran 2027/2028 Pondok Pesantren Sumatera Thawalib Parabek."
  },
  {
    id: 2,
    pdfPageNumber: 2,
    bookletPageNumber: "01",
    title: "Profil Singkat",
    category: "Umum",
    keywords: ["profil", "sejarah", "inyiak parabek", "1910", "1408 santri", "154 mahasantri", "pendidikan integratif", "kitab kuning", "kaderisasi ulama"],
    contentSummary: "Didirikan oleh Syekh Ibrahim Musa (Inyiak Parabek) pada 20 September 1910. Salah satu pesantren tertua di Indonesia. Kampusnya Para Ulama dengan 1408 santri & 154 mahasantri."
  },
  {
    id: 3,
    pdfPageNumber: 3,
    bookletPageNumber: "02",
    title: "Visi dan Misi",
    category: "Umum",
    keywords: ["visi", "misi", "khairu ummah", "kader ulama", "umara", "aghniya", "intelektual", "dakwah islam"],
    contentSummary: "Visi: Pusat pendidikan Islam unggulan yang membangun generasi khairu ummah. 4 Misi utama pembentukan kader ulama dan intelektual."
  },
  {
    id: 4,
    pdfPageNumber: 4,
    bookletPageNumber: "03",
    title: "Program Pendidikan - Madrasah Tsanawiyah (Akreditasi A)",
    category: "MTs",
    keywords: ["mts", "madrasah tsanawiyah", "akreditasi a", "kampus 1 putra", "kampus 3 putri", "qawaid hebat", "tahfizh excellent", "matematika hebat", "almiftah", "ksm"],
    contentSummary: "Madrasah Tsanawiyah terakreditasi A setara SMP, memisahkan lokasi belajar putra (Kampus 1 Parabek) dan putri (Kampus 3 Bangkaweh) dengan 12 program unggulan."
  },
  {
    id: 5,
    pdfPageNumber: 5,
    bookletPageNumber: "04",
    title: "Jalur Masuk MTs - Jalur Reguler / Umum",
    category: "MTs",
    keywords: ["jalur reguler", "biaya mts", "15.750.000", "spp 650.000", "asrama 200.000", "makan 700.000", "1.550.000 bulanan", "tes tulis mtk agama", "baca al-quran"],
    contentSummary: "Jalur Reguler MTs: Biaya awal Rp 14.000.000, awal tahun Rp 200.000, bulanan Rp 1.550.000. Total Keuangan Santri Baru: Rp 15.750.000."
  },
  {
    id: 6,
    pdfPageNumber: 6,
    bookletPageNumber: "05",
    title: "Jalur Masuk MTs - Jalur Prestasi",
    category: "MTs",
    keywords: ["jalur prestasi", "beasiswa prestasi", "grade a 3.250.000", "grade b 7.250.000", "grade c 9.500.000", "rapor 80", "olimpiade provinsi"],
    contentSummary: "Jalur Prestasi MTs: Rapor kelas 5 smt 2 minimal 80 atau Juara 1-3 Olimpiade Provinsi. Potongan Uang Masuk hingga 100% (Grade A: Rp 3.250.000, Grade B: Rp 7.250.000, Grade C: Rp 9.500.000)."
  },
  {
    id: 7,
    pdfPageNumber: 7,
    bookletPageNumber: "06",
    title: "Jalur Masuk MTs - Jalur Tahfizh",
    category: "MTs",
    keywords: ["jalur tahfizh", "hafalan 2 juz", "grade a 4 juz", "grade b 3 juz", "grade c 2 juz", "diskon 100%", "beasiswa tahfizh"],
    contentSummary: "Jalur Tahfizh MTs: Syarat hafalan min 2 juz. Grade A (min 4 juz dhabit) bayar Rp 3.250.000, Grade B (3 juz) Rp 7.250.000, Grade C (2 juz) Rp 9.500.000."
  },
  {
    id: 8,
    pdfPageNumber: 8,
    bookletPageNumber: "07",
    title: "Jalur Masuk MTs - Jalur Banuhampu",
    category: "MTs",
    keywords: ["jalur banuhampu", "sktm", "potongan 50%", "9.500.000", "kuota 4 orang per nagari"],
    contentSummary: "Jalur Banuhampu MTs: Untuk warga Banuhampu dengan SKTM. Beasiswa potongan uang masuk 50% menjadi Rp 9.500.000 total. Kuota 4 orang per Nagari."
  },
  {
    id: 9,
    pdfPageNumber: 9,
    bookletPageNumber: "08",
    title: "Jalur Masuk MTs - Jalur Parabek",
    category: "MTs",
    keywords: ["jalur parabek", "asli parabek", "potongan 60%", "7.900.000", "spp 300.000", "bulanan 1.200.000"],
    contentSummary: "Jalur Parabek MTs: Warga asli Parabek Kubu nan Tujuah. Beasiswa potongan uang masuk 60%. SPP Rp 300.000/bln, Total Keuangan Santri Baru Rp 7.900.000."
  },
  {
    id: 10,
    pdfPageNumber: 10,
    bookletPageNumber: "09",
    title: "Madrasah Aliyah (Akreditasi A)",
    category: "MA",
    keywords: ["madrasah aliyah", "ma", "akreditasi a", "taffaquh fiddin", "keagamaan", "ipa", "ips", "3 jurusan", "aesac", "go to campus"],
    contentSummary: "Madrasah Aliyah setara SMA dengan 3 Jurusan (Keagamaan, IPA, IPS) & 3 Kurikulum. Melatih santri Taffaquh Fiddin dengan 13 program unggulan."
  },
  {
    id: 11,
    pdfPageNumber: 11,
    bookletPageNumber: "10",
    title: "Jalur Masuk MA - Jalur Reguler",
    category: "MA",
    keywords: ["jalur reguler ma", "biaya ma", "10.750.000", "uang i'dadi 500.000", "spp 650.000", "bulanan 1.550.000"],
    contentSummary: "Jalur Reguler MA: Biaya awal Rp 9.000.000 (termasuk I'dadi Rp 500k), awal tahun Rp 200.000, bulanan Rp 1.550.000. Total Keuangan Santri Baru: Rp 10.750.000."
  },
  {
    id: 12,
    pdfPageNumber: 12,
    bookletPageNumber: "11",
    title: "Jalur Masuk MA - Jalur Tahfizh",
    category: "MA",
    keywords: ["jalur tahfizh ma", "hafalan 10 juz", "beasiswa ma", "3.750.000", "bebas uang masuk"],
    contentSummary: "Jalur Tahfizh MA: Syarat hafalan minimal 10 juz. Potongan uang masuk 60% (bebas uang masuk). Total Keuangan Santri Baru: Rp 3.750.000."
  },
  {
    id: 13,
    pdfPageNumber: 13,
    bookletPageNumber: "12",
    title: "Pendidikan Diniyah Formal (PDF)",
    category: "PDF",
    keywords: ["pdf", "pendidikan diniyah formal", "ulya", "nspdf 231213060001", "kitab kuning", "life skill", "kajian malam"],
    contentSummary: "PDF Tingkat Ulya (setara SMA/MA) berbasis Kitab Kuning & Life Skill. Izin Dirjen Pendis No 3051 Tahun 2022. Kurikulum 2/3 Keagamaan Islam & Kajian Malam."
  },
  {
    id: 14,
    pdfPageNumber: 14,
    bookletPageNumber: "13",
    title: "Jalur Masuk PDF - Jalur Reguler",
    category: "PDF",
    keywords: ["jalur reguler pdf", "biaya pdf", "10.750.000", "tes baca kitab", "qawaid"],
    contentSummary: "Jalur Reguler PDF: Tes Tulis (Agama, Ilmu dasar, Qawa'id) & Tes Lisan (Baca Quran, Baca Kitab). Total Keuangan Santri Baru: Rp 10.750.000."
  },
  {
    id: 15,
    pdfPageNumber: 15,
    bookletPageNumber: "14",
    title: "Jalur Masuk PDF - Jalur Kitab",
    category: "PDF",
    keywords: ["jalur kitab pdf", "beasiswa kitab", "3.750.000", "bebas uang masuk kitab", "dialihkan ke reguler"],
    contentSummary: "Jalur Kitab PDF: Beasiswa bagi yang bisa membaca kitab kuning. Total biaya awal Rp 3.750.000. Jika tidak lulus, otomatis dialihkan ke jalur Reguler."
  },
  {
    id: 16,
    pdfPageNumber: 16,
    bookletPageNumber: "15",
    title: "Ma'had Aly (Akreditasi B)",
    category: "Ma'had Aly",
    keywords: ["mahad aly", "s1", "sarjana fikih", "s.f.u", "sk dirjend 3002", "fiqh dan ushul fiqh", "dosen mesir", "syekh yasser"],
    contentSummary: "Perguruan Tinggi S1 Gelar Sarjana Fikih dan Ushul Fikih (S.F.U.). Takhasus Fiqh & Ushul Fiqh. Dosen Tamu Asing Syekh Yasser Sa'ad Abdalla (Mesir)."
  },
  {
    id: 17,
    pdfPageNumber: 17,
    bookletPageNumber: "16",
    title: "Fasilitas & Syarat Pendaftaran Ma'had Aly",
    category: "Pendaftaran",
    keywords: ["fasilitas", "syarat pendaftaran", "ijazah ma", "kk", "ktp", "va bni", "9888010923112901", "250.000"],
    contentSummary: "11 Fasilitas lengkap pesantren & 7 Syarat Pendaftaran online Ma'had Aly dengan biaya pendaftaran Rp 250.000 via VA BNI."
  },
  {
    id: 18,
    pdfPageNumber: 18,
    bookletPageNumber: "17",
    title: "Prestasi Ma'had Aly & Rincian Keuangan",
    category: "Ma'had Aly",
    keywords: ["prestasi mahad aly", "china", "mesir", "inggris", "chicago", "mqk", "1.200.000", "ukt 600.000"],
    contentSummary: "13 Prestasi Nasional & Internasional Mahasantri Ma'had Aly. Biaya UKT Rp 600.000/smt, Total Keuangan Awal Mahasantri: Rp 1.200.000."
  },
  {
    id: 19,
    pdfPageNumber: 19,
    bookletPageNumber: "18",
    title: "Asrama & Kegiatan Harian Santri",
    category: "Asrama",
    keywords: ["asrama", "wajib asrama", "jadwal harian", "tahajud 04.00", "pbm 07.00", "tahfizh 18.00", "istirahat 23.00", "pola pendidikan"],
    contentSummary: "Wajib tinggal di asrama. Jadwal kegiatan terstruktur 24 jam dari Tahajud 04.00, PBM, Tahfizh & Kitab hingga Istirahat 23.00."
  },
  {
    id: 20,
    pdfPageNumber: 20,
    bookletPageNumber: "19",
    title: "Alumni & Ketentuan Pengunduran Diri",
    category: "Ketentuan",
    keywords: ["alumni", "universitas madinah", "oxford", "mcgill", "al-azhar", "ui", "itb", "ugm", "unand", "pengunduran diri", "50%", "40%", "30%"],
    contentSummary: "Alumni tersebar di kampus ternama dunia (Madinah, Oxford, Al-Azhar, UI, ITB, UGM). Ketentuan persentase pengembalian uang masuk jika mengundurkan diri."
  },
  {
    id: 21,
    pdfPageNumber: 21,
    bookletPageNumber: "20",
    title: "Aturan & Larangan Santri",
    category: "Peraturan",
    keywords: ["aturan santri", "larangan", "asusila", "narkoba", "tawuran", "bullying", "hp", "sanksi dikeluarkan"],
    contentSummary: "21 Poin Larangan Santri di lingkungan pesantren (termasuk dilarang bawa HP, merokok, bullying) beserta sanksi tegas hingga dikeluarkan."
  },
  {
    id: 22,
    pdfPageNumber: 22,
    bookletPageNumber: "21",
    title: "Alur Pendaftaran PSMB 2027/2028",
    category: "Pendaftaran",
    keywords: ["alur pendaftaran", "01 oktober 2026", "08 mei 2027", "250.000", "grup wa", "tes seleksi", "kartu peserta"],
    contentSummary: "Jadwal pendaftaran 01 Oktober 2026 s/d 08 Mei 2027. Biaya pendaftaran Rp 250.000. 6 Langkah pendaftaran dari upload berkas hingga pengumuman."
  },
  {
    id: 23,
    pdfPageNumber: 23,
    bookletPageNumber: "22",
    title: "Informasi Kontak & Diskon Saudara Kandung",
    category: "Kontak",
    keywords: ["kontak", "081260959820", "083182511042", "facebook", "instagram", "youtube parabek tv", "potongan 20% saudara"],
    contentSummary: "Kontak WA/Telp (0812-6095-9820 / 0831-8251-1042), media sosial resmi Parabek TV, dan informasi Potongan Biaya 20% bagi yang memiliki saudara kandung di pesantren."
  },
  {
    id: 24,
    pdfPageNumber: 24,
    title: "Alamat Kampus & Link Pendaftaran Online",
    category: "Kontak",
    keywords: ["alamat", "kampus 1 parabek", "kampus 2 jambu aia", "kampus 3 bangkaweh", "thawalib-parabek.eduvista.co.id", "link pendaftaran"],
    contentSummary: "Alamat lengkap Kampus 1 (Parabek), Kampus 2 (Jambu Aia), dan Kampus 3 (Bangkaweh) Agam, Sumatera Barat. Link resmi pendaftaran: thawalib-parabek.eduvista.co.id."
  }
];
