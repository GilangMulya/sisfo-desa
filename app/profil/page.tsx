"use client";

import { useState } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { 
  History, 
  Target, 
  Network, 
  MapPin, 
  Users,
  Map,
  Quote,
  Phone,
  Mail
} from "lucide-react";

export default function ProfilDesa() {
  const [activeTab, setActiveTab] = useState("sejarah");

  const tabContentVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.3,
    },
  },
};

  // Data Struktur Organisasi (Bisa dihubungkan ke Database nanti)
  const strukturPemerintahan = [
    {
      id: 1,
      nama: "Budi Santoso",
      jabatan: "Wali Nagari Demo 2024-2029",
      foto: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop",
      telp: "0812-3456-7890",
      email: "budi@nagari.go.id",
      level: "utama"
    },
    {
      id: 2,
      nama: "Siti Aminah",
      jabatan: "SEKRETARIS NAGARI",
      foto: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop",
      telp: "0812-9876-5432",
      email: "siti@nagari.go.id",
      level: "menengah"
    },
    {
      id: 3,
      nama: "Suryono",
      jabatan: "KAUR PELAYANAN",
      foto: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=800&auto=format&fit=crop",
      telp: "0812-3456-2233",
      email: "suryono@nagari.go.id",
      level: "dasar"
    },
    {
      id: 4,
      nama: "Andi Saputra",
      jabatan: "KAUR PEMERINTAHAN",
      foto: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=800&auto=format&fit=crop",
      telp: "0812-3456-4455",
      email: "andi@nagari.go.id",
      level: "dasar"
    }
  ];

  return (
    <main className="relative min-h-screen bg-[#050505] overflow-hidden pt-20 pb-24 font-sans text-slate-300">
      
      {/* 1. HERO SECTION */}
      <div className="relative h-[45vh] lg:h-[60vh] w-full flex items-center justify-center">
        <div className="absolute inset-0 z-0 bg-[#050505]">
          <img 
            src="https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?q=80&w=2070&auto=format&fit=crop" 
            alt="Lanskap Pasaman" 
            className="w-full h-full object-cover opacity-40" 
          />
        </div>
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-[#050505]/90 via-transparent to-[#050505]"></div>

        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="relative z-20 text-center px-4 mt-10">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-5 py-1.5 backdrop-blur-md mb-4 shadow-xl">
            <span className="text-xs font-bold tracking-widest text-white uppercase">Profil Desa</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight drop-shadow-2xl">
            Selayang <span className="text-red-500">Pandang</span>
          </h1>
        </motion.div>
      </div>

      {/* 2. FLOATING TABS NAVIGATION */}
      <div className="container relative z-30 mx-auto max-w-4xl px-4 -mt-8 flex justify-center">
        <div className="bg-[#0a0a0a]/80 backdrop-blur-xl border border-white/10 p-1.5 rounded-full flex items-center shadow-2xl w-full max-w-2xl">
          <button onClick={() => setActiveTab("sejarah")} className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-full text-sm font-semibold transition-all duration-300 ${activeTab === "sejarah" ? "bg-red-600 text-white shadow-lg shadow-red-600/30" : "text-slate-400 hover:text-white hover:bg-white/5"}`}>
            <History className="w-4 h-4" /> <span className="hidden sm:inline">Sejarah Desa</span><span className="sm:hidden">Sejarah</span>
          </button>
          <button onClick={() => setActiveTab("visi")} className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-full text-sm font-semibold transition-all duration-300 ${activeTab === "visi" ? "bg-red-600 text-white shadow-lg shadow-red-600/30" : "text-slate-400 hover:text-white hover:bg-white/5"}`}>
            <Target className="w-4 h-4" /> Visi & Misi
          </button>
          <button onClick={() => setActiveTab("struktur")} className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-full text-sm font-semibold transition-all duration-300 ${activeTab === "struktur" ? "bg-red-600 text-white shadow-lg shadow-red-600/30" : "text-slate-400 hover:text-white hover:bg-white/5"}`}>
            <Network className="w-4 h-4" /> <span className="hidden sm:inline">Struktur Organisasi</span><span className="sm:hidden">Struktur</span>
          </button>
        </div>
      </div>

      {/* 3. DYNAMIC CONTENT SECTION */}
      <div className="container mx-auto max-w-6xl px-4 mt-16 min-h-[60vh]">
        <AnimatePresence mode="wait">
          
          {/* ============================== */}
          {/* TAB 1: SEJARAH DESA (Bento Grid) */}
          {/* ============================== */}
          {activeTab === "sejarah" && (
            <motion.div key="sejarah" variants={tabContentVariants} initial="hidden" animate="visible" exit="exit" className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
              
              {/* Kiri: Teks Sejarah & Statistik */}
              <div className="flex flex-col gap-8">
                <div>
                  <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6">Sejarah Desa</h2>
                  <div className="space-y-4 text-slate-400 leading-relaxed text-lg">
                    <p>
                      Nagari Demo 1111 didirikan pada tahun 1932 oleh sekelompok petani pelopor yang dipimpin oleh Budi Santoso. Berawal dari pemukiman agraris kecil di kaki pegunungan, wilayah ini lambat laun bertransformasi menjadi salah satu lumbung pangan andalan wilayah kabupaten berkat kesuburan tanah dan budaya gotong royong warganya yang lestari hingga kini.
                    </p>
                  </div>
                </div>
                
                {/* Kotak Statistik */}
                <div className="grid grid-cols-2 gap-4 mt-2">
                  <div className="bg-white/5 border border-white/10 rounded-3xl p-6 flex flex-col items-center justify-center text-center hover:bg-white/10 transition-colors">
                    <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center mb-4 text-blue-400">
                      <Users className="w-6 h-6" />
                    </div>
                    <h3 className="text-3xl font-extrabold text-white mb-1">12.540</h3>
                    <p className="text-xs font-bold tracking-widest text-slate-500 uppercase">Total Penduduk</p>
                  </div>
                  <div className="bg-white/5 border border-white/10 rounded-3xl p-6 flex flex-col items-center justify-center text-center hover:bg-white/10 transition-colors">
                    <div className="w-12 h-12 bg-emerald-500/20 rounded-full flex items-center justify-center mb-4 text-emerald-400">
                      <Map className="w-6 h-6" />
                    </div>
                    <h3 className="text-3xl font-extrabold text-white mb-1">18.4 <span className="text-xl">km²</span></h3>
                    <p className="text-xs font-bold tracking-widest text-slate-500 uppercase">Luas Wilayah</p>
                  </div>
                </div>
              </div>

              {/* Kanan: Peta & Galeri Kecil */}
              <div className="flex flex-col gap-4">
                <div className="relative h-[300px] md:h-[400px] rounded-3xl overflow-hidden border border-white/10 group">
                  <img src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=1000&auto=format&fit=crop" alt="Peta Nagari" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000" />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500"></div>
                  
                  {/* Floating Coordinate Card */}
                  <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md rounded-2xl p-4 flex items-center gap-4 shadow-2xl">
                    <div className="bg-red-100 p-3 rounded-full text-red-600">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-slate-400 tracking-wider uppercase mb-0.5">Titik Koordinat</p>
                      <p className="text-sm font-bold text-slate-800 font-mono">0° 12' 34" N, 100° 23' 45" E</p>
                    </div>
                  </div>
                </div>
                
                {/* Thumbnail Galeri */}
                <div className="grid grid-cols-2 gap-4 h-[120px]">
                  <div className="rounded-2xl overflow-hidden border border-white/10"><img src="https://images.unsplash.com/photo-1592663481284-c68e9e19d2b2?q=80&w=600&auto=format&fit=crop" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" alt="Galeri 1" /></div>
                  <div className="rounded-2xl overflow-hidden border border-white/10"><img src="https://images.unsplash.com/photo-1542361345-89e58247f2d5?q=80&w=600&auto=format&fit=crop" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" alt="Galeri 2" /></div>
                </div>
              </div>

            </motion.div>
          )}

          {/* ============================== */}
          {/* TAB 2: VISI & MISI */}
          {/* ============================== */}
          {activeTab === "visi" && (
            <motion.div key="visi" variants={tabContentVariants} initial="hidden" animate="visible" exit="exit" className="grid grid-cols-1 lg:grid-cols-5 gap-8">
              
              {/* Kiri: Blok Visi Merah Premium */}
              <div className="lg:col-span-2 bg-gradient-to-br from-red-700 to-red-950 rounded-[40px] p-10 md:p-12 relative overflow-hidden flex flex-col justify-center border border-red-500/30 shadow-[0_0_40px_rgba(220,38,38,0.15)]">
                <Quote className="absolute top-10 left-10 w-40 h-40 text-white/[0.05] -rotate-12" />
                <span className="inline-block px-4 py-1.5 bg-black/20 rounded-full text-white text-xs font-bold tracking-widest uppercase w-max mb-8 backdrop-blur-md border border-white/10">Visi Desa</span>
                <p className="text-2xl md:text-3xl lg:text-4xl leading-snug italic text-white font-medium relative z-10 drop-shadow-md">
                  "Mewujudkan Nagari Demo yang mandiri, sejahtera, berakhlak mulia, dan unggul dalam pelayanan publik berbasis teknologi informasi 1."
                </p>
              </div>

              {/* Kanan: List Misi */}
              <div className="lg:col-span-3 bg-white/5 border border-white/10 rounded-[40px] p-8 md:p-12">
                <span className="inline-block px-4 py-1.5 bg-red-500/10 text-red-400 rounded-full text-xs font-bold tracking-widest uppercase mb-8 border border-red-500/20">Misi Utama</span>
                
                <div className="space-y-8">
                  {[
                    "Meningkatkan tata kelola pemerintahan desa yang bersih, transparan, dan akuntabel 1.",
                    "Mengembangkan infrastruktur pertanian dan transportasi pedesaan guna meningkatkan roda ekonomi warga.",
                    "Memberikan layanan administrasi publik yang prima, cepat, dan mudah diakses melalui platform digital.",
                    "Mendorong kreativitas dan keterlibatan aktif warga dalam pelestarian budaya dan lingkungan."
                  ].map((misi, idx) => (
                    <div key={idx} className="flex gap-6 items-start group">
                      <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0 text-xl font-black text-slate-500 group-hover:bg-red-600 group-hover:text-white group-hover:border-red-500 transition-all duration-300 shadow-lg">
                        {idx + 1}
                      </div>
                      <p className="text-slate-300 text-lg leading-relaxed mt-2 group-hover:text-white transition-colors">
                        {misi}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

            </motion.div>
          )}

          {/* ============================== */}
          {/* TAB 3: STRUKTUR ORGANISASI */}
          {/* ============================== */}
          {activeTab === "struktur" && (
            <motion.div key="struktur" variants={tabContentVariants} initial="hidden" animate="visible" exit="exit" className="flex flex-col items-center">
              
              <div className="text-center mb-16">
                <span className="inline-block px-4 py-1.5 bg-red-500/10 text-red-400 rounded-full text-xs font-bold tracking-widest uppercase mb-4 border border-red-500/20">Aparatur Desa</span>
                <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4">Struktur Pemerintahan</h2>
                <p className="text-slate-400 max-w-2xl mx-auto">Mengenal lebih dekat sosok-sosok yang mengabdi untuk kemajuan dan kesejahteraan masyarakat desa.</p>
              </div>

              {/* Grid Hirarki Struktur (Flex Column -> Grid) */}
              <div className="w-full flex flex-col items-center gap-12">
                
                {/* Level 1: Wali Nagari */}
                <div className="flex justify-center w-full">
                  <OrgCard person={strukturPemerintahan[0]} />
                </div>

                {/* Level 2: Sekretaris */}
                <div className="flex justify-center w-full relative">
                  {/* Garis penghubung vertikal simulasi */}
                  <div className="absolute -top-12 left-1/2 w-[2px] h-12 bg-white/10"></div>
                  <OrgCard person={strukturPemerintahan[1]} />
                </div>

                {/* Level 3: Kaur (Grid 2 Kolom) */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-3xl relative">
                   {/* Garis penghubung simulasi */}
                  <div className="absolute -top-12 left-1/4 right-1/4 h-[2px] bg-white/10 hidden md:block"></div>
                  <div className="absolute -top-12 left-1/4 w-[2px] h-12 bg-white/10 hidden md:block"></div>
                  <div className="absolute -top-12 right-1/4 w-[2px] h-12 bg-white/10 hidden md:block"></div>

                  <OrgCard person={strukturPemerintahan[2]} />
                  <OrgCard person={strukturPemerintahan[3]} />
                </div>

              </div>
            </motion.div>
          )}

        </AnimatePresence>
      </div>

    </main>
  );
}

// Komponen Card Struktur Organisasi dengan Efek Hover Reveal Kontak
function OrgCard({ person }: { person: any }) {
  return (
    <div className="group relative w-[280px] h-[360px] bg-white/5 border border-white/10 rounded-[40px] overflow-hidden cursor-pointer shadow-xl">
      {/* Foto Profil */}
      <img src={person.foto} alt={person.nama} className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110" />
      
      {/* Overlay Gelap Bawah (Default) */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent flex flex-col justify-end p-6 items-center text-center transition-opacity duration-300 group-hover:opacity-0">
        <h3 className="text-xl font-bold text-white mb-2">{person.nama}</h3>
        <span className="px-4 py-1.5 bg-red-600 rounded-full text-[10px] font-extrabold tracking-widest text-white uppercase shadow-lg">
          {person.jabatan}
        </span>
      </div>

      {/* Overlay Hover (Reveals Contact Info) */}
      <div className="absolute inset-0 bg-[#0a0a0a]/95 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col items-center justify-center p-6 border border-red-500/50 rounded-[40px]">
        <span className="px-3 py-1 bg-red-600 rounded-full text-[10px] font-bold tracking-widest text-white uppercase mb-6">Info Kontak</span>
        <div className="flex flex-col gap-4 text-center">
          <div className="flex items-center justify-center gap-3 text-slate-300 hover:text-amber-400 transition-colors">
            <Phone className="w-5 h-5 text-amber-500" />
            <span className="font-medium text-sm">{person.telp}</span>
          </div>
          <div className="flex items-center justify-center gap-3 text-slate-300 hover:text-amber-400 transition-colors">
            <Mail className="w-5 h-5 text-amber-500" />
            <span className="font-medium text-sm">{person.email}</span>
          </div>
        </div>
        
        {/* Mengulangi Nama di dalam hover agar tetap tahu ini siapa */}
        <div className="absolute bottom-6">
           <h3 className="text-sm font-bold text-white/50">{person.nama}</h3>
        </div>
      </div>
    </div>
  );
}