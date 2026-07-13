"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Search, 
  CalendarDays, 
  Eye, 
  Flame, 
  Zap,
  ArrowRight,
  Newspaper
} from "lucide-react";
import Link from "next/link";

// --- BACKGROUND COMPONENT (Premium Light) ---
const ElegantBackground = () => (
  <div className="fixed inset-0 z-[-1] bg-[#F9F9FB] overflow-hidden">
    <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-[#990000]/10 blur-[120px] rounded-full mix-blend-multiply animate-pulse-slow" />
    <div className="absolute bottom-[-10%] right-[-10%] w-[70%] h-[70%] bg-[#D4AF37]/10 blur-[150px] rounded-full mix-blend-multiply animate-pulse-slow" style={{ animationDelay: '2s' }} />
    <div className="absolute top-[40%] left-[50%] w-[40%] h-[40%] bg-blue-900/5 blur-[120px] rounded-full mix-blend-multiply" />
    <div 
      className="absolute inset-0 opacity-[0.4] mix-blend-color-burn pointer-events-none" 
      style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
    />
  </div>
);

// --- REUSABLE PREMIUM GLASS CARD ---
const GlassCard = ({ children, className = "", href, delay = "0s" }: any) => {
  const classes = `relative group rounded-3xl bg-white/70 hover:bg-white/90 border border-gray-200/60 hover:border-[#990000]/30 backdrop-blur-2xl transition-all duration-500 overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.02)] hover:shadow-[0_20px_40px_rgba(153,0,0,0.06)] animate-fade-in-up ${href ? 'cursor-pointer hover:-translate-y-1.5' : ''} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes} style={{ animationDelay: delay }}>
        <div className="absolute inset-0 bg-gradient-to-br from-white/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
        <div className="relative z-10 h-full">{children}</div>
      </Link>
    );
  }

  return (
    <div className={classes} style={{ animationDelay: delay }}>
      <div className="absolute inset-0 bg-gradient-to-br from-white/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
      <div className="relative z-10 h-full">{children}</div>
    </div>
  );
};

// ==========================================
// DATABASE BERITA (Tetap Menggunakan Data Lama)
// ==========================================
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
    <main className="relative min-h-screen text-[#1A1A1A] selection:bg-[#990000] selection:text-white pt-32 pb-24 px-4 md:px-6 max-w-[1400px] mx-auto">
      
      {/* Injecting CSS Animations & Fonts */}
      <style dangerouslySetInnerHTML={{__html: `
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;0,800;1,600&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');
        .font-serif { font-family: 'Playfair Display', serif; }
        .font-sans { font-family: 'Plus Jakarta Sans', sans-serif; }
        @keyframes fadeInUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
        .animate-fade-in-up { opacity: 0; animation: fadeInUp 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        @keyframes pulseSlow { 0%, 100% { transform: scale(1); opacity: 0.6; } 50% { transform: scale(1.05); opacity: 0.3; } }
        .animate-pulse-slow { animation: pulseSlow 8s infinite ease-in-out; }
      `}} />

      <ElegantBackground />

      {/* ========================================================= */}
      {/* HEADER: KABA NAGARI */}
      {/* ========================================================= */}
      <div className="mb-10 text-center animate-fade-in-up mt-10">
        <p className="text-xs font-bold tracking-[0.3em] text-[#990000] uppercase mb-3">Pusat Informasi</p>
        <h2 className="text-5xl md:text-7xl font-serif font-bold text-[#1A1A1A] mb-6">Warta Desa</h2>
        <div className="w-24 h-1 bg-gradient-to-r from-[#990000] to-[#D4AF37] mx-auto rounded-full mb-10" />
        
        {/* PENCARIAN & FILTER KATEGORI */}
        <div className="w-full max-w-4xl mx-auto bg-white/70 border border-gray-200/60 p-2 md:p-3 rounded-3xl md:rounded-full backdrop-blur-md flex flex-col md:flex-row gap-4 items-center shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
          
          {/* Kolom Cari */}
          <div className="relative w-full md:w-1/3 shrink-0">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input 
              type="text" 
              placeholder="Cari berita..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white/80 border border-gray-200 text-[#1A1A1A] rounded-full py-2.5 pl-11 pr-4 text-sm font-medium focus:outline-none focus:border-[#990000]/50 transition-colors placeholder:text-gray-400"
            />
          </div>

          {/* Kategori Horizontal */}
          <div className="flex-1 w-full overflow-x-auto flex items-center gap-2 pb-2 md:pb-0 px-2 md:px-0 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            {daftarKategori.map((kategori) => (
              <button
                key={kategori}
                onClick={() => setActiveCategory(kategori)}
                className={`shrink-0 px-4 py-2 rounded-full text-sm font-bold transition-all duration-300 ${
                  activeCategory === kategori 
                    ? "bg-[#1A1A1A] text-white shadow-md" 
                    : "bg-transparent text-gray-500 hover:text-[#990000] hover:bg-gray-100"
                }`}
              >
                {kategori}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-5 relative z-10">

        {/* ========================================================= */}
        {/* SEKSI ATAS: TERKINI & TERPOPULER (Hanya tampil di Tab "Semua") */}
        {/* ========================================================= */}
        {activeCategory === "Semua" && searchQuery === "" && (
          <>
            {/* Terkini Card */}
            <GlassCard href={`/berita/${beritaUtama.id}`} delay="0.1s" className="md:col-span-8 p-0 bg-[#1A1A1A] hover:bg-[#111] border-none group relative overflow-hidden h-[450px]">
              <img 
                src={beritaUtama.gambar} 
                alt={beritaUtama.judul} 
                className="absolute inset-0 w-full h-full object-cover opacity-80 mix-blend-luminosity group-hover:scale-105 group-hover:opacity-100 transition-all duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#1A1A1A]/50 to-transparent opacity-90" />
              
              <div className="absolute top-6 left-6">
                <span className="bg-[#990000] text-white text-[10px] font-bold px-3 py-1.5 rounded-lg uppercase tracking-widest shadow-sm">
                  {beritaUtama.kategori}
                </span>
              </div>

              <div className="absolute bottom-0 left-0 p-8 md:p-10 w-full z-10 flex flex-col justify-end">
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-3 leading-snug group-hover:text-[#D4AF37] transition-colors">
                  {beritaUtama.judul}
                </h2>
                <div className="flex items-center gap-4 text-xs font-bold text-gray-300 mb-4">
                  <span className="flex items-center gap-1.5"><CalendarDays size={14}/> {beritaUtama.tanggal}</span>
                  <span className="w-1 h-1 bg-gray-500 rounded-full" />
                  <span className="flex items-center gap-1.5"><Eye size={14}/> {beritaUtama.views} Kali dibaca</span>
                </div>
                <p className="text-gray-300 text-sm max-w-2xl line-clamp-2 leading-relaxed">
                  {beritaUtama.excerpt}
                </p>
              </div>
            </GlassCard>

            {/* Terpopuler Widget */}
            <GlassCard delay="0.2s" className="md:col-span-4 p-6 md:p-8 flex flex-col justify-between h-[450px]">
              <div className="flex items-center gap-2 mb-6 border-b border-gray-200 pb-4">
                <Flame size={20} className="text-[#990000]" />
                <h3 className="text-xl font-serif font-bold text-[#1A1A1A]">Terpopuler</h3>
              </div>
              
              <div className="flex flex-col gap-6 overflow-y-auto pr-2 custom-scrollbar">
                {trendingBerita.map((berita, index) => (
                  <Link href={`/berita/${berita.id}`} key={berita.id} className="group flex items-start gap-4">
                    <div className="text-4xl font-black text-gray-100 group-hover:text-[#990000]/10 transition-colors duration-500 mt-1">
                      0{index + 1}
                    </div>
                    <div>
                      <span className="text-[10px] font-bold text-[#D4AF37] uppercase tracking-widest block mb-1">
                        {berita.kategori}
                      </span>
                      <h4 className="text-sm font-bold text-gray-800 leading-snug group-hover:text-[#990000] transition-colors line-clamp-2 mb-1">
                        {berita.judul}
                      </h4>
                      <p className="text-[10px] text-gray-500 flex items-center gap-1">
                        <Eye size={10} /> {berita.views} Kali dibaca
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </GlassCard>
          </>
        )}

        {/* ========================================================= */}
        {/* GRID SEMUA BERITA (Merespons Filter) */}
        {/* ========================================================= */}
        <div className="md:col-span-12 mt-8 mb-4 border-t border-gray-200 pt-8 flex items-center gap-3">
          <Newspaper size={24} className="text-[#990000]" />
          <h3 className="text-2xl font-serif font-bold text-[#1A1A1A]">
            {searchQuery ? `Hasil: "${searchQuery}"` : activeCategory === "Semua" ? "Daftar Berita" : `Kategori: ${activeCategory}`}
          </h3>
        </div>

        <motion.div layout className="md:col-span-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          <AnimatePresence>
            {filteredBerita.length > 0 ? (
              filteredBerita.map((berita, idx) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  key={berita.id}
                >
                  <GlassCard href={`/berita/${berita.id}`} delay={`0.${idx}s`} className="p-0 flex flex-col h-full group">
                    {/* Thumbnail */}
                    <div className="relative h-56 w-full overflow-hidden rounded-t-3xl">
                      <div className="absolute top-4 left-4 z-20">
                        <span className="px-3 py-1 bg-white/90 backdrop-blur-md text-[#990000] text-[10px] font-bold uppercase tracking-widest rounded-lg shadow-sm">
                          {berita.kategori}
                        </span>
                      </div>
                      <img 
                        src={berita.gambar} 
                        alt={berita.judul} 
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out" 
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </div>

                    {/* Konten Text */}
                    <div className="p-6 flex flex-col flex-grow bg-white/40">
                      <div className="flex items-center justify-between text-[11px] font-bold text-gray-500 mb-3">
                        <span className="flex items-center gap-1.5"><CalendarDays size={12} className="text-[#D4AF37]"/> {berita.tanggal}</span>
                        <span className="flex items-center gap-1"><Eye size={12}/> {berita.views}</span>
                      </div>
                      
                      <h3 className="text-lg font-serif font-bold text-[#1A1A1A] mb-3 leading-snug group-hover:text-[#990000] transition-colors line-clamp-2">
                        {berita.judul}
                      </h3>
                      
                      <p className="text-sm text-gray-500 line-clamp-3 mb-6 flex-grow leading-relaxed">
                        {berita.excerpt}
                      </p>
                      
                      <div className="mt-auto pt-4 border-t border-gray-200 flex items-center font-bold text-xs text-[#1A1A1A] group-hover:text-[#990000] transition-colors">
                        Baca Selengkapnya <ArrowRight size={14} className="ml-1 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </GlassCard>
                </motion.div>
              ))
            ) : (
              <div className="col-span-full py-20 text-center flex flex-col items-center justify-center bg-white/50 rounded-3xl border border-gray-200/60 shadow-sm">
                <Search className="w-12 h-12 text-gray-300 mb-4" />
                <h3 className="text-xl font-bold text-[#1A1A1A] mb-2">Tidak Ditemukan</h3>
                <p className="text-gray-500 text-sm max-w-md">Tidak ada berita yang cocok dengan kriteria pencarian atau kategori ini.</p>
              </div>
            )}
          </AnimatePresence>
        </motion.div>

      </div>
    </main>
  );
}