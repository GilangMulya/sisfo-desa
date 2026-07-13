"use client";

import React from 'react';
import Link from 'next/link';
import { 
  Users, 
  MapPin, 
  ArrowRight, 
  PieChart, 
  FileText, 
  CalendarDays, 
  ShoppingBag, 
  ArrowUpRight, 
  ShieldCheck 
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
  const wrapperClasses = `block w-full h-full relative group rounded-3xl bg-white/70 hover:bg-white/90 border border-gray-200/60 hover:border-[#990000]/30 backdrop-blur-2xl transition-all duration-500 overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.02)] hover:shadow-[0_20px_40px_rgba(153,0,0,0.06)] animate-fade-in-up ${href ? 'cursor-pointer hover:-translate-y-1.5' : ''} ${className}`;

  const content = (
    <>
      <div className="absolute inset-0 bg-gradient-to-br from-white/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
      <div className="relative z-10 h-full flex flex-col">{children}</div>
    </>
  );

  return href ? (
    <Link href={href} className={wrapperClasses} style={{ animationDelay: delay }}>
      {content}
    </Link>
  ) : (
    <div className={wrapperClasses} style={{ animationDelay: delay }}>
      {content}
    </div>
  );
};

// ==========================================
// HALAMAN BERANDA UTAMA
// ==========================================
export default function Home() {
  const beritaUtama = {
    id: 1,
    kategori: "Pemerintahan",
    judul: "Program MBG Digugat ke MK, Sidang Terbuka Digelar",
    excerpt: "Program Makan Bergizi Gratis (MBG) resmi digugat ke Mahkamah Konstitusi. Warga diimbau untuk tetap tenang...",
    tanggal: "17 Juni 2026",
    gambar: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=1000&auto=format&fit=crop"
  };

  return (
    <main className="relative min-h-screen text-[#1A1A1A] selection:bg-[#990000] selection:text-white pt-32 pb-24 px-4 md:px-6 max-w-[1400px] mx-auto flex flex-col justify-center">
      
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
      <div className="mb-10 flex flex-col md:flex-row justify-between items-end gap-6 px-2 animate-fade-in-up">
        <div>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#990000]/20 bg-[#990000]/5 text-[#990000] text-xs font-bold tracking-widest uppercase mb-4 shadow-sm">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#990000] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#990000]"></span>
            </span>
            Portal Resmi Pemerintahan
          </div>
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-[#1A1A1A] leading-tight tracking-tight">
            Nagari <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#990000] to-[#590000] italic">Demo</span>
          </h1>
        </div>
        <div className="text-left md:text-right">
          <p className="text-gray-600 max-w-md text-sm md:text-base leading-relaxed font-medium mb-3">
            Sistem tata kelola desa berbasis cerdas. Menjaga kemurnian adat Minangkabau dalam bingkai kemajuan teknologi digital.
          </p>
          <div className="flex items-center gap-4 justify-start md:justify-end text-xs font-bold text-[#1A1A1A]">
            <span className="flex items-center gap-1"><Users size={14} className="text-[#990000]"/> 12.540 Warga</span>
            <span className="w-1 h-1 bg-gray-300 rounded-full" />
            <span className="flex items-center gap-1"><MapPin size={14} className="text-[#990000]"/> Pasaman, Sumbar</span>
          </div>
        </div>
      </div>

      {/* ========================================================= */}
      {/* BENTO GRID LAYOUT */}
      {/* ========================================================= */}
      <div className="grid grid-cols-1 md:grid-cols-12 auto-rows-[minmax(180px,auto)] gap-4 md:gap-5 relative z-10">
        
        {/* 1. HERO CARD (Tambo / Sejarah) */}
        <GlassCard href="/profil" delay="0.1s" className="md:col-span-8 md:row-span-2 p-0 bg-[#1A1A1A] hover:bg-[#111] border-none">
          {/* Gambar Background Hero: Diperbarui dengan link gambar modern */}
          <img 
            src="https://media.tampang.com/tm_images/article/202406/desain-tanpa5ojoj3zvgml08ro8.jpg" 
            alt="Desain Rumah Nagari" 
            className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-luminosity group-hover:scale-105 group-hover:opacity-80 transition-all duration-1000" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#990000]/40 to-transparent opacity-90" />
          
          <div className="absolute bottom-0 left-0 p-8 md:p-10 w-full z-10 flex flex-col md:flex-row justify-between items-end gap-6">
            <div>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-3 leading-tight">Adat Basandi Syarak,<br/>Syarak Basandi Kitabullah</h2>
              <p className="text-gray-300 text-sm md:text-base max-w-xl font-medium">Harmoni pembangunan infrastruktur dan pelestarian warisan leluhur di tanah ulayat Pasaman.</p>
            </div>
            <button className="shrink-0 flex items-center gap-3 text-sm font-bold text-[#990000] bg-white px-6 py-3.5 rounded-full group-hover:bg-[#F9F9FB] group-hover:scale-105 transition-all shadow-[0_0_20px_rgba(255,255,255,0.2)]">
              Tambo Nagari <ArrowRight size={18} />
            </button>
          </div>
        </GlassCard>

        {/* 2. TRANSPARANSI CARD */}
        <GlassCard href="/transparansi" delay="0.2s" className="md:col-span-4 md:row-span-1 p-6 flex flex-col justify-between">
          <div className="flex justify-between items-start mb-4">
            <div>
              <p className="text-[10px] font-bold tracking-widest text-[#990000] uppercase mb-1 flex items-center gap-1"><PieChart size={12}/> Transparansi APBDes</p>
              <h3 className="text-xl font-bold text-[#1A1A1A]">Tahun Anggaran 2026</h3>
            </div>
            <span className="bg-[#990000]/10 text-[#990000] text-[10px] font-bold px-2 py-1 rounded-md">Real-time</span>
          </div>
          <div className="space-y-3 mt-auto">
            <div>
              <div className="flex justify-between text-xs font-bold text-gray-600 mb-1"><span>Pembangunan Fisik</span> <span>65%</span></div>
              <div className="w-full bg-gray-200 rounded-full h-1.5"><div className="bg-[#990000] h-1.5 rounded-full" style={{ width: '65%' }}></div></div>
            </div>
            <div>
              <div className="flex justify-between text-xs font-bold text-gray-600 mb-1"><span>Pemberdayaan Masyarakat</span> <span>25%</span></div>
              <div className="w-full bg-gray-200 rounded-full h-1.5"><div className="bg-[#D4AF37] h-1.5 rounded-full" style={{ width: '25%' }}></div></div>
            </div>
          </div>
        </GlassCard>

        {/* 3. LAYANAN PUBLIK CARD */}
        <GlassCard href="/layanan" delay="0.3s" className="md:col-span-2 md:row-span-1 p-6 flex flex-col justify-center items-center text-center bg-gradient-to-br from-white/80 to-[#990000]/5 hover:to-[#990000]/10">
          <div className="w-14 h-14 rounded-2xl bg-white shadow-sm border border-gray-100 flex items-center justify-center mb-4 group-hover:-translate-y-2 group-hover:shadow-md transition-all duration-300 relative">
            <div className="absolute inset-0 bg-[#990000] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <FileText size={26} className="text-[#990000] group-hover:text-white relative z-10 transition-colors duration-300" />
          </div>
          <h3 className="text-lg font-bold text-[#1A1A1A] mb-1">Palayanan</h3>
          <p className="text-[11px] text-gray-500 font-medium">Urus KTP, KK, & Surat</p>
        </GlassCard>

        {/* 4. AGENDA CARD */}
        <GlassCard delay="0.4s" className="md:col-span-2 md:row-span-1 p-5 flex flex-col overflow-hidden">
          <div className="absolute top-0 right-0 w-24 h-24 bg-[#D4AF37]/10 rounded-bl-[100px] -z-10 group-hover:scale-125 transition-transform duration-700" />
          <p className="text-[10px] font-bold tracking-widest text-[#D4AF37] uppercase mb-3 flex items-center gap-1"><CalendarDays size={12}/> Agenda Terdekat</p>
          <div className="flex gap-4 items-center mb-auto">
            <div className="flex flex-col items-center justify-center bg-white border border-gray-200 rounded-xl w-14 h-14 shrink-0 shadow-sm">
              <span className="text-[10px] font-bold text-[#990000] uppercase">Agt</span>
              <span className="text-xl font-black text-[#1A1A1A] leading-none">17</span>
            </div>
            <div>
              <h4 className="text-sm font-bold text-[#1A1A1A] leading-tight mb-1 group-hover:text-[#990000] transition-colors">Upacara Kemerdekaan RI</h4>
              <p className="text-[11px] text-gray-500 flex items-center gap-1"><MapPin size={10}/> Lapangan Nagari</p>
            </div>
          </div>
        </GlassCard>

        {/* 5. UMKM CARD */}
        <GlassCard href="/umkm" delay="0.5s" className="md:col-span-5 md:row-span-1 p-0 flex flex-col justify-end bg-[#1A1A1A]">
          <img src="https://images.unsplash.com/photo-1533630654593-b223d53ba7f5?q=80&w=800&auto=format&fit=crop" alt="UMKM Kerajinan Warga" className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/90 via-[#1A1A1A]/40 to-transparent" />
          
          <div className="relative z-10 p-5 md:p-6 w-full flex justify-between items-end">
            <div>
              <p className="text-[10px] font-bold tracking-widest text-[#D4AF37] uppercase mb-1 flex items-center gap-1 shadow-black"><ShoppingBag size={12}/> Galeri Produk Warga</p>
              <h3 className="text-xl font-bold text-white leading-tight">Pusat Kerajinan<br/>Kain Tenun & Kuliner</h3>
            </div>
            <div className="w-10 h-10 shrink-0 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white group-hover:bg-[#D4AF37] group-hover:text-black transition-colors border border-white/30">
              <ArrowUpRight size={18} />
            </div>
          </div>
        </GlassCard>

        {/* 6. BERITA CARD (Desain Vertikal Mengikuti Halaman Berita) */}
        <GlassCard href={`/berita/${beritaUtama.id}`} delay="0.6s" className="md:col-span-4 md:row-span-1 p-0 flex flex-col h-full group">
          {/* Thumbnail Bagian Atas */}
          <div className="relative h-40 md:h-48 w-full overflow-hidden shrink-0">
            <div className="absolute top-4 left-4 z-20">
              <span className="px-3 py-1 bg-white/90 backdrop-blur-md text-[#990000] text-[10px] font-bold uppercase tracking-widest rounded-lg shadow-sm">
                Kaba Baru
              </span>
            </div>
            <img 
              src={beritaUtama.gambar} 
              alt={beritaUtama.judul} 
              className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>

          {/* Konten Text Bagian Bawah */}
          <div className="p-5 md:p-6 flex flex-col flex-grow bg-white/40">
            <div className="flex items-center justify-between text-[11px] font-bold text-gray-500 mb-2">
              <span className="flex items-center gap-1.5"><CalendarDays size={12} className="text-[#D4AF37]"/> {beritaUtama.tanggal}</span>
            </div>
            <h3 className="text-base font-serif font-bold text-[#1A1A1A] mb-2 leading-snug group-hover:text-[#990000] transition-colors line-clamp-2">
              {beritaUtama.judul}
            </h3>
            <div className="mt-auto pt-3 border-t border-gray-200 flex items-center font-bold text-xs text-[#1A1A1A] group-hover:text-[#990000] transition-colors">
              Baca Selengkapnya <ArrowRight size={14} className="ml-1 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </GlassCard>

        {/* 7. ASPIRASI CARD */}
        <GlassCard href="/aspirasi" delay="0.7s" className="md:col-span-3 md:row-span-1 p-5 md:p-6 flex flex-col justify-center items-center text-center bg-gradient-to-br from-[#990000] to-[#660000] text-white hover:bg-[#800000] border-none shadow-[0_10px_30px_rgba(153,0,0,0.2)]">
          <ShieldCheck size={36} className="mb-4 text-[#D4AF37] group-hover:scale-110 transition-transform" />
          <h4 className="text-base font-bold mb-1">Lapor Wali!</h4>
          <p className="text-xs text-white/70 font-medium">Layanan aduan warga 24 Jam</p>
        </GlassCard>

      </div>
    </main>
  );
}