"use client";

import React from 'react';
import { 
  Target, 
  Award, 
  Landmark, 
  Users, 
  Map, 
  Phone, 
  Mail, 
  CheckCircle2,
  CalendarDays,
  MapPin
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
const GlassCard = ({ children, className = "", delay = "0s" }: any) => (
  <div 
    className={`relative group rounded-3xl bg-white/70 hover:bg-white/90 border border-gray-200/60 hover:border-[#990000]/30 backdrop-blur-2xl transition-all duration-500 overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.02)] hover:shadow-[0_20px_40px_rgba(153,0,0,0.06)] animate-fade-in-up ${className}`}
    style={{ animationDelay: delay }}
  >
    <div className="absolute inset-0 bg-gradient-to-br from-white/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
    <div className="relative z-10 h-full">{children}</div>
  </div>
);

// ==========================================
// DATA APARATUR DESA (Dari versi sebelumnya)
// ==========================================
const strukturPemerintahan = [
  {
    id: 1,
    nama: "Budi Santoso",
    jabatan: "Wali Nagari Demo 2024-2029",
    foto: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop",
    telp: "0812-3456-7890",
    email: "budi@nagari.go.id",
    color: "text-[#8B0000]",
    iconColor: "border-[#8B0000] text-[#8B0000]"
  },
  {
    id: 2,
    nama: "Siti Aminah",
    jabatan: "Sekretaris Nagari",
    foto: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop",
    telp: "0812-9876-5432",
    email: "siti@nagari.go.id",
    color: "text-[#D4AF37]",
    iconColor: "border-[#D4AF37] text-[#D4AF37]"
  },
  {
    id: 3,
    nama: "Suryono",
    jabatan: "Kaur Pelayanan",
    foto: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=800&auto=format&fit=crop",
    telp: "0812-3456-2233",
    email: "suryono@nagari.go.id",
    color: "text-blue-700",
    iconColor: "border-blue-700 text-blue-700"
  },
  {
    id: 4,
    nama: "Andi Saputra",
    jabatan: "Kaur Pemerintahan",
    foto: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=800&auto=format&fit=crop",
    telp: "0812-3456-4455",
    email: "andi@nagari.go.id",
    color: "text-emerald-700",
    iconColor: "border-emerald-700 text-emerald-700"
  }
];

export default function ProfilDesa() {
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
        <p className="text-xs font-bold tracking-[0.3em] text-[#990000] uppercase mb-3">Selayang Pandang</p>
        <h2 className="text-5xl md:text-7xl font-serif font-bold text-[#1A1A1A] mb-6">Profil Nagari Demo</h2>
        <div className="w-24 h-1 bg-gradient-to-r from-[#990000] to-[#D4AF37] mx-auto rounded-full" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-5 auto-rows-min">
        
        {/* ========================================================= */}
        {/* VISI & MISI CARD (Dark Crimson) */}
        {/* ========================================================= */}
        <GlassCard delay="0.1s" className="md:col-span-4 p-8 md:p-10 bg-gradient-to-br from-[#990000] to-[#660000] text-white border-none shadow-xl flex flex-col justify-center relative overflow-hidden">
          <div className="absolute top-[-20%] right-[-20%] w-64 h-64 border-[40px] border-white/5 rounded-full" />
          <Target size={40} className="text-[#D4AF37] mb-6" />
          <h3 className="text-3xl md:text-4xl font-serif font-bold mb-4">Visi Nagari</h3>
          <p className="text-white/90 text-sm leading-relaxed mb-8 italic font-medium">
            "Mewujudkan Nagari Demo yang mandiri, sejahtera, berakhlak mulia, dan unggul dalam pelayanan publik berbasis teknologi informasi 1."
          </p>
          
          <h4 className="text-lg font-bold mb-4 flex items-center gap-2">
            <Award size={18} className="text-[#D4AF37]" /> Misi Utama
          </h4>
          <ul className="space-y-4 text-sm text-white/90">
            <li className="flex items-start gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] mt-1.5 shrink-0" /> 
              Meningkatkan tata kelola pemerintahan desa yang bersih, transparan, dan akuntabel 1.
            </li>
            <li className="flex items-start gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] mt-1.5 shrink-0" /> 
              Mengembangkan infrastruktur pertanian dan transportasi pedesaan guna meningkatkan roda ekonomi warga.
            </li>
            <li className="flex items-start gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] mt-1.5 shrink-0" /> 
              Memberikan layanan administrasi publik yang prima, cepat, dan mudah diakses melalui platform digital.
            </li>
            <li className="flex items-start gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] mt-1.5 shrink-0" /> 
              Mendorong kreativitas dan keterlibatan aktif warga dalam pelestarian budaya dan lingkungan.
            </li>
          </ul>
        </GlassCard>

        {/* ========================================================= */}
        {/* SEJARAH & ASAL USUL CARD */}
        {/* ========================================================= */}
        <GlassCard delay="0.2s" className="md:col-span-8 p-8 md:p-12 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Landmark size={32} className="text-[#990000]" />
              <h3 className="text-3xl md:text-4xl font-serif font-bold text-[#1A1A1A]">Sejarah Desa</h3>
            </div>
            <div className="prose prose-sm md:prose-base text-gray-600 max-w-none space-y-5 leading-relaxed">
              <p>
                Nagari Demo 1111 didirikan pada tahun 1932 oleh sekelompok petani pelopor yang dipimpin oleh Budi Santoso. Berawal dari pemukiman agraris kecil di kaki pegunungan, wilayah ini lambat laun bertransformasi menjadi salah satu lumbung pangan andalan wilayah kabupaten berkat kesuburan tanah dan budaya gotong royong warganya yang lestari hingga kini.
              </p>
            </div>
          </div>
          
          {/* Statistik Info Desa */}
          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-gray-200/60">
            <div>
              <p className="text-4xl font-black text-[#1A1A1A] mb-1 font-serif">1932</p>
              <p className="text-[10px] font-bold text-[#990000] uppercase tracking-widest flex items-center gap-1"><CalendarDays size={12}/> Tahun Berdiri</p>
            </div>
            <div>
              <p className="text-4xl font-black text-[#1A1A1A] mb-1 font-serif">18.4<span className="text-xl text-gray-400">km²</span></p>
              <p className="text-[10px] font-bold text-[#990000] uppercase tracking-widest flex items-center gap-1"><Map size={12}/> Luas Wilayah</p>
            </div>
            <div>
              <p className="text-4xl font-black text-[#1A1A1A] mb-1 font-serif">12.540</p>
              <p className="text-[10px] font-bold text-[#990000] uppercase tracking-widest flex items-center gap-1"><Users size={12}/> Total Penduduk</p>
            </div>
            <div>
              <p className="text-sm font-mono font-bold text-[#1A1A1A] mb-1 tracking-tighter leading-tight mt-1">0° 12' 34" N<br/>100° 23' 45" E</p>
              <p className="text-[10px] font-bold text-[#990000] uppercase tracking-widest flex items-center gap-1 mt-2.5"><MapPin size={12}/> Titik Koordinat</p>
            </div>
          </div>
        </GlassCard>

        {/* ========================================================= */}
        {/* STRUKTUR PEMERINTAHAN (Aparatur Desa) */}
        {/* ========================================================= */}
        <div className="md:col-span-12 mt-12 mb-4 animate-fade-in-up text-center md:text-left" style={{ animationDelay: '0.3s' }}>
          <h3 className="text-3xl md:text-4xl font-serif font-bold text-[#1A1A1A] mb-3">Struktur Pemerintahan</h3>
          <p className="text-sm md:text-base text-gray-500">
            Mengenal lebih dekat sosok-sosok yang mengabdi untuk kemajuan dan kesejahteraan masyarakat desa.
          </p>
        </div>

        {/* Grid Aparatur Berdasarkan Desain Baru */}
        {strukturPemerintahan.map((person, idx) => (
          <GlassCard key={person.id} delay={`0.${4 + idx}s`} className="col-span-1 md:col-span-6 lg:col-span-3 p-6 flex flex-col items-start group">
            
            {/* Foto Profil Circle & Border */}
            <div className={`w-14 h-14 rounded-full bg-white shadow-sm flex items-center justify-center mb-5 border overflow-hidden group-hover:scale-110 transition-transform ${person.iconColor}`}>
              <img src={person.foto} alt={person.nama} className="w-full h-full object-cover object-top" />
            </div>
            
            <h4 className="text-xl font-bold text-[#1A1A1A] mb-2">{person.nama}</h4>
            <p className="text-[11px] font-extrabold uppercase tracking-widest text-gray-400 mb-4 leading-relaxed line-clamp-2">
              {person.jabatan}
            </p>
            
            {/* Info Kontak Ringkas */}
            <div className="w-full pt-4 mt-auto border-t border-gray-100 flex flex-col gap-2">
              <div className="flex items-center gap-2 text-[11px] font-medium text-gray-500">
                <Phone size={12} className={person.color} /> {person.telp}
              </div>
              <div className="flex items-center gap-2 text-[11px] font-medium text-gray-500">
                <Mail size={12} className={person.color} /> {person.email}
              </div>
            </div>
            
          </GlassCard>
        ))}

      </div>
    </main>
  );
}