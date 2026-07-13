"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Search,
  Clock,
  ChevronRight,
  ArrowRight,
  FileBadge,
  ShoppingBag,
  ShieldCheck,
  HeartHandshake,
  FileText
} from 'lucide-react';

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
// DATABASE LAYANAN (Diadaptasi dari kode lama)
// ==========================================
const dataLayanan = [
  {
    id: "pindah-datang",
    title: "Surat Pindah / Datang",
    shortDesc: "Layanan penerbitan surat pengantar bagi warga yang akan pindah domisili keluar desa atau warga baru yang datang ke desa.",
    time: "2 Hari Kerja",
    icon: ArrowRight,
  },
  {
    id: "izin-keramaian",
    title: "Surat Izin Keramaian",
    shortDesc: "Surat pengantar rekomendasi dari pemerintah desa sebagai syarat pengajuan izin keramaian ke pihak kepolisian (Polsek/Polres).",
    time: "2 Hari Kerja",
    icon: ShieldCheck,
  },
  {
    id: "ktp-kk",
    title: "Pengantar KTP / KK",
    shortDesc: "Surat rekomendasi resmi dari desa sebagai prasyarat pencetakan dokumen kependudukan di Kantor Kecamatan/Disdukcapil.",
    time: "1 Hari Kerja",
    icon: FileBadge,
  },
  {
    id: "sku",
    title: "Keterangan Usaha (SKU)",
    shortDesc: "Surat keterangan resmi yang menerangkan bahwa pemohon memiliki usaha mikro/kecil aktif di wilayah administrasi desa.",
    time: "1 Hari Kerja",
    icon: ShoppingBag,
  },
  {
    id: "sktm",
    title: "Keterangan Tidak Mampu",
    shortDesc: "Dokumen keringanan biaya untuk keperluan pendidikan, kesehatan, maupun jaminan sosial bagi keluarga prasejahtera.",
    time: "1 Hari Kerja",
    icon: HeartHandshake,
  }
];

export default function LayananPublik() {
  const [searchTerm, setSearchTerm] = useState("");

  // Logika Pencarian Layanan
  const filteredLayanan = dataLayanan.filter(layanan => 
    layanan.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
    layanan.shortDesc.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
      {/* HEADER SECTION */}
      {/* ========================================================= */}
      <div className="mb-10 text-center animate-fade-in-up mt-10">
        <p className="text-xs font-bold tracking-[0.3em] text-[#990000] uppercase mb-3">Portal Warga</p>
        <h2 className="text-5xl md:text-7xl font-serif font-bold text-[#1A1A1A] mb-6">Layanan Administrasi</h2>
        <div className="w-24 h-1 bg-gradient-to-r from-[#990000] to-[#D4AF37] mx-auto rounded-full" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-5 auto-rows-min relative z-10">
        
        {/* ========================================================= */}
        {/* PENCARIAN & ACTION BANNER */}
        {/* ========================================================= */}
        <GlassCard delay="0.1s" className="md:col-span-12 p-3 bg-white/90 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex-1 w-full relative">
            <Search size={22} className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-400" />
            <input 
              type="text" 
              placeholder="Cari layanan administrasi... (misal: Surat Pindah, KTP)" 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-16 pr-6 py-4 bg-transparent border-none outline-none text-[#1A1A1A] text-lg font-medium placeholder:text-gray-400 focus:ring-0"
            />
          </div>
          <button className="w-full md:w-auto px-10 py-4 bg-[#1A1A1A] hover:bg-[#990000] text-white rounded-2xl font-bold transition-all shadow-[0_10px_20px_rgba(0,0,0,0.1)] hover:shadow-[0_10px_20px_rgba(153,0,0,0.2)] whitespace-nowrap m-1">
            Cek Status Permohonan
          </button>
        </GlassCard>

        {/* ========================================================= */}
        {/* ALUR PROSEDUR PENGURUSAN */}
        {/* ========================================================= */}
        <div className="md:col-span-12 mt-8 mb-4 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <h3 className="text-xl font-bold text-[#1A1A1A] mb-5">Prosedur Pengurusan Online</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {['Pilih Layanan & Isi Form', 'Unggah Syarat (KTP/KK)', 'Verifikasi Perangkat Nagari', 'Dokumen Selesai/Diambil'].map((step, i) => (
              <div key={i} className="bg-white/60 backdrop-blur-md border border-gray-200/60 rounded-2xl p-5 flex items-center gap-4 relative shadow-sm">
                <div className="w-10 h-10 rounded-full bg-[#990000]/10 text-[#990000] flex items-center justify-center font-black text-lg shrink-0">
                  {i + 1}
                </div>
                <span className="text-sm font-bold text-gray-800 leading-snug">{step}</span>
                {i < 3 && <ChevronRight size={18} className="text-gray-300 absolute -right-3 hidden md:block z-10 bg-[#F9F9FB] rounded-full" />}
              </div>
            ))}
          </div>
        </div>

        {/* ========================================================= */}
        {/* GRID KARTU LAYANAN */}
        {/* ========================================================= */}
        {filteredLayanan.length > 0 ? (
          filteredLayanan.map((srv, idx) => (
            <GlassCard 
              key={srv.id} 
              href={`/layanan/${srv.id}`} 
              delay={`0.${3 + idx}s`} 
              className="md:col-span-4 p-8 flex flex-col group hover:bg-white transition-colors"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="w-14 h-14 rounded-2xl bg-gray-100 group-hover:bg-[#990000] flex items-center justify-center transition-colors duration-300">
                  <srv.icon size={26} className="text-gray-500 group-hover:text-white transition-colors duration-300" />
                </div>
                <div className="flex items-center gap-1.5 text-[10px] font-bold text-[#D4AF37] bg-[#D4AF37]/10 px-3 py-1.5 rounded-lg border border-[#D4AF37]/20">
                  <Clock size={12} /> {srv.time}
                </div>
              </div>
              <h4 className="text-xl font-bold text-[#1A1A1A] mb-3">{srv.title}</h4>
              <p className="text-sm text-gray-500 leading-relaxed mb-8 flex-1">
                {srv.shortDesc}
              </p>
              <div className="pt-5 border-t border-gray-100">
                <div className="w-full py-3 bg-gray-50 group-hover:bg-[#990000]/5 text-gray-600 group-hover:text-[#990000] border border-gray-200 rounded-xl text-sm font-bold transition-colors flex justify-center items-center gap-2">
                  Urus Online <ArrowRight size={16} />
                </div>
              </div>
            </GlassCard>
          ))
        ) : (
          /* Empty State Jika Pencarian Tidak Ditemukan */
          <div className="md:col-span-12 py-20 text-center animate-fade-in-up">
             <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search size={32} className="text-gray-400" />
             </div>
             <h3 className="text-2xl font-bold text-[#1A1A1A] mb-2">Layanan Tidak Ditemukan</h3>
             <p className="text-gray-500">Coba gunakan kata kunci pencarian yang lain.</p>
          </div>
        )}

      </div>
    </main>
  );
}