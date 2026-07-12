"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Search, 
  CalendarDays, 
  Eye, 
  Flame, 
  Zap,
  ArrowRight
} from "lucide-react";
import Link from "next/link";

// Simulasi Database Berita
const dataBerita = [
  {
    id: 1,
    kategori: "Pemerintahan",
    judul: "Program MBG Digugat ke MK, Muhammadiyah Minta Penghentian Sementara",
    excerpt: "Program Makan Bergizi Gratis (MBG) resmi digugat ke Mahkamah Konstitusi. Masyarakat diimbau untuk tetap tenang menunggu putusan resmi dari pusat.",
    tanggal: "17 Juni 2026",
    views: 522,
    gambar: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 2,
    kategori: "Sosialisasi",
    judul: "Program Digitalisasi Desa: Layanan Administrasi Mandiri Mulai Diuji Coba",
    excerpt: "Memperkenalkan portal Sisfo-Desa untuk mempercepat pengurusan dokumen administrasi kependudukan warga tanpa harus antre di Balai Desa.",
    tanggal: "10 Mei 2026",
    views: 337,
    gambar: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 3,
    kategori: "Pengumuman",
    judul: "Penyaluran Bantuan Langsung Tunai (BLT) Tahap II Dijadwalkan Ulang",
    excerpt: "Sebanyak 120 Keluarga Penerima Manfaat (KPM) diundang hadir ke Balai Desa mulai pukul 08.00 WIB dengan membawa fotokopi KK dan KTP.",
    tanggal: "17 Mei 2026",
    views: 285,
    gambar: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 4,
    kategori: "Pembangunan",
    judul: "Pembangunan Jalan Usaha Tani Dusun Krajan Rampung 100%",
    excerpt: "Pemerintah desa sukses merampungkan pengaspalan jalan usaha tani sepanjang 1.2 KM guna mempermudah akses distribusi panen warga.",
    tanggal: "15 Mei 2026",
    views: 190,
    gambar: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 5,
    kategori: "Kegiatan",
    judul: "Persiapan Lomba Desa Tingkat Provinsi, Warga Gotong Royong Massal",
    excerpt: "Seluruh warga dari 4 RW bahu-membahu membersihkan selokan dan menghias gapura menjelang kedatangan tim penilai lomba desa tingkat provinsi.",
    tanggal: "12 Mei 2026",
    views: 150,
    gambar: "https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=800&auto=format&fit=crop",
  }
];

const daftarKategori = ["Semua", "Pemerintahan", "Pembangunan", "Pengumuman", "Sosialisasi", "Kegiatan"];

export default function WartaDesa() {
  const [activeCategory, setActiveCategory] = useState("Semua");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredBerita = dataBerita.filter((berita) => {
    const matchCategory = activeCategory === "Semua" || berita.kategori === activeCategory;
    const matchSearch = berita.judul.toLowerCase().includes(searchQuery.toLowerCase()) || 
                        berita.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCategory && matchSearch;
  });

  const beritaUtama = dataBerita[0]; 
  const trendingBerita = [...dataBerita].sort((a, b) => b.views - a.views).slice(0, 3); 

  return (
    <main className="relative min-h-screen bg-[#050505] overflow-hidden pt-32 pb-24 font-sans text-slate-300">
      
      {/* Background Ambient Clean */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-red-900/10 rounded-full blur-[150px] mix-blend-screen pointer-events-none z-0"></div>
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 pointer-events-none z-0"></div>

      <div className="container relative z-10 mx-auto max-w-6xl px-4">
        
        {/* ========================================================= */}
        {/* HEADER: WARTA DESA */}
        {/* ========================================================= */}
        <div className="flex flex-col items-center text-center mb-12">
          <span className="text-red-500 font-bold tracking-widest text-xs uppercase mb-4">
            Pusat Informasi
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight mb-6">
            Warta <span className="text-red-500">Desa</span>
          </h1>
          <p className="text-slate-400 max-w-2xl text-base mb-10 leading-relaxed">
            Dapatkan pembaruan langsung, cepat, dan terpercaya mengenai agenda nagari, pengumuman darurat, serta progres pembangunan.
          </p>

          {/* SEARCH BAR (Minimalist) */}
          <div className="relative w-full max-w-md mb-8 group">
            <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 group-focus-within:text-red-500 transition-colors" />
            <input 
              type="text" 
              placeholder="Cari judul atau isi berita..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white/5 border border-white/10 text-white rounded-full py-3 pl-12 pr-6 text-sm focus:outline-none focus:border-red-500/50 focus:bg-white/10 transition-all shadow-sm placeholder:text-slate-600"
            />
          </div>

          {/* KATEGORI TABS (Scrollbar Disembunyikan) */}
          <div className="w-full max-w-3xl flex items-center justify-start md:justify-center overflow-x-auto gap-2 pb-2 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            {daftarKategori.map((kategori) => (
              <button
                key={kategori}
                onClick={() => setActiveCategory(kategori)}
                className={`shrink-0 px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 border ${
                  activeCategory === kategori 
                    ? "bg-red-600/10 border-red-500/50 text-red-400" 
                    : "bg-transparent border-transparent text-slate-500 hover:text-slate-300 hover:bg-white/5"
                }`}
              >
                {kategori}
              </button>
            ))}
          </div>
        </div>

        {/* ========================================================= */}
        {/* SEKSI ATAS: TERKINI & TERPOPULER */}
        {/* ========================================================= */}
        {activeCategory === "Semua" && searchQuery === "" && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20">
            
            {/* Terkini */}
            <div className="lg:col-span-8 flex flex-col">
              <h2 className="text-lg font-bold text-white mb-5 flex items-center gap-2 tracking-wide">
                <Zap className="w-4 h-4 text-red-500" /> Terkini
              </h2>
              <Link href={`/berita/${beritaUtama.id}`} className="group relative h-[450px] rounded-3xl overflow-hidden border border-white/10 block">
                <img 
                  src={beritaUtama.gambar} 
                  alt={beritaUtama.judul} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000 ease-out opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
                
                <div className="absolute bottom-0 left-0 w-full p-8 z-10 flex flex-col justify-end">
                  <span className="inline-block px-3 py-1 bg-white/10 backdrop-blur-md text-red-400 border border-red-500/20 text-[10px] font-bold uppercase tracking-wider rounded-md w-max mb-3">
                    {beritaUtama.kategori}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 leading-tight group-hover:text-red-400 transition-colors">
                    {beritaUtama.judul}
                  </h3>
                  <div className="flex items-center gap-4 text-[11px] font-medium text-slate-400">
                    <span className="flex items-center"><CalendarDays className="w-3 h-3 mr-1.5" /> {beritaUtama.tanggal}</span>
                    <span className="flex items-center"><Eye className="w-3 h-3 mr-1.5" /> {beritaUtama.views} kali dibaca</span>
                  </div>
                </div>
              </Link>
            </div>

            {/* Terpopuler */}
            <div className="lg:col-span-4 flex flex-col">
              <h2 className="text-lg font-bold text-white mb-5 flex items-center gap-2 tracking-wide">
                <Flame className="w-4 h-4 text-amber-500" /> Terpopuler
              </h2>
              <div className="bg-white/5 border border-white/10 rounded-3xl p-6 flex flex-col gap-6 h-[450px]">
                {trendingBerita.map((berita, index) => (
                  <Link href={`/berita/${berita.id}`} key={berita.id} className="group flex items-start gap-4 p-2 rounded-xl transition-colors">
                    <div className="text-3xl font-black text-white/10 group-hover:text-red-500/20 transition-colors duration-500 select-none mt-1">
                      0{index + 1}
                    </div>
                    <div>
                      <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block mb-1 group-hover:text-red-400 transition-colors">
                        {berita.kategori}
                      </span>
                      <h4 className="text-sm font-bold text-slate-200 mb-2 leading-snug group-hover:text-white transition-colors line-clamp-2">
                        {berita.judul}
                      </h4>
                      <div className="text-[10px] text-slate-500">
                        {berita.tanggal}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ========================================================= */}
        {/* GRID SEMUA BERITA */}
        {/* ========================================================= */}
        <div className="border-t border-white/5 pt-12">
          <h2 className="text-xl font-bold text-white mb-8 tracking-wide">
            {searchQuery ? `Hasil Pencarian: "${searchQuery}"` : activeCategory === "Semua" ? "Daftar Berita" : `Kategori: ${activeCategory}`}
          </h2>

          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence>
              {filteredBerita.length > 0 ? (
                filteredBerita.map((berita) => (
                  <motion.div
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                    key={berita.id}
                  >
                    <Link href={`/berita/${berita.id}`} className="group flex flex-col bg-white/5 border border-white/5 rounded-3xl overflow-hidden hover:bg-white/10 hover:border-white/10 transition-all duration-300 h-full">
                      
                      {/* Thumbnail */}
                      <div className="relative h-48 w-full overflow-hidden">
                        <img 
                          src={berita.gambar} 
                          alt={berita.judul} 
                          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-in-out opacity-80 group-hover:opacity-100" 
                        />
                        <div className="absolute inset-0 bg-black/10 transition-colors duration-500"></div>
                      </div>

                      {/* Konten */}
                      <div className="p-6 flex flex-col flex-grow">
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-[10px] font-bold text-red-500 uppercase tracking-widest">
                            {berita.kategori}
                          </span>
                          <span className="text-[10px] text-slate-500">{berita.tanggal}</span>
                        </div>
                        
                        <h3 className="text-base font-bold text-slate-200 mb-3 leading-snug group-hover:text-white transition-colors line-clamp-2">
                          {berita.judul}
                        </h3>
                        <p className="text-sm text-slate-500 line-clamp-2 mb-6 flex-grow leading-relaxed">
                          {berita.excerpt}
                        </p>
                        
                        <div className="mt-auto flex items-center text-xs font-semibold text-slate-400 group-hover:text-red-400 transition-colors">
                          Baca Artikel <ArrowRight className="w-3 h-3 ml-2" />
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))
              ) : (
                <div className="col-span-full py-20 text-center">
                  <Search className="w-10 h-10 text-slate-600 mx-auto mb-4 opacity-50" />
                  <h3 className="text-lg font-bold text-white mb-2">Tidak Ditemukan</h3>
                  <p className="text-slate-500 text-sm">Tidak ada warta yang cocok dengan pencarian ini.</p>
                </div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>

      </div>
    </main>
  );
}