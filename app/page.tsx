"use client";

import { motion, type Variants } from "framer-motion";
import { Button } from "@/components/ui/button";
import { 
  ArrowRight, 
  FileText, 
  Users, 
  ShieldCheck, 
  Sparkles,
  FileSignature,
  Landmark,
  MessageSquare,
  MapPin,
  Music,
  IdCard,
  CalendarDays,
  Quote // <-- Ikon baru untuk kutipan
} from "lucide-react";
import Link from "next/link";

import { 
  // ... (ikon yang sudah ada)
  MessageCircle,
  Mail,
  Headset
} from "lucide-react";

export default function Home() {
  // Animasi Header
  const containerVariants: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants: Variants = {
  hidden: {
    y: 40,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 80,
      damping: 15,
    },
  },
};

  // =========================================================================
  // SIMULASI DATABASE
  // =========================================================================
  const layananUtama = [
    {
      id: 1,
      title: "Surat Pindah / Datang",
      desc: "Layanan penerbitan surat pengantar bagi warga yang pindah domisili keluar desa atau warga baru yang menetap.",
      icon: <MapPin className="w-5 h-5 text-red-400" />,
      image: "https://images.unsplash.com/photo-1577960309990-244e4faec8e7?q=80&w=800&auto=format&fit=crop"
    },
    {
      id: 2,
      title: "Surat Izin Keramaian",
      desc: "Pengantar rekomendasi dari pemerintah desa sebagai syarat pengajuan izin kepolisian untuk acara/hajatan.",
      icon: <Music className="w-5 h-5 text-amber-400" />,
      image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=800&auto=format&fit=crop"
    },
    {
      id: 3,
      title: "Surat Pengantar KTP / KK",
      desc: "Rekomendasi resmi dari desa sebagai prasyarat pencetakan dokumen kependudukan di Kantor Kecamatan.",
      icon: <IdCard className="w-5 h-5 text-red-400" />,
      image: "https://images.unsplash.com/photo-1633265486064-086b219458ce?q=80&w=800&auto=format&fit=crop"
    }
  ];

  const beritaUtama = {
    kategori: "Pemerintahan",
    judul: "Program MBG Digugat ke MK, Sidang Terbuka Digelar",
    excerpt: "Program Makan Bergizi Gratis (MBG) resmi digugat ke Mahkamah Konstitusi. Warga desa diimbau tetap tenang menunggu putusan resmi.",
    tanggal: "17 Juni 2026",
    gambar: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=1000&auto=format&fit=crop"
  };

  const listBerita = [
    {
      id: 1,
      kategori: "Pengumuman",
      judul: "Penyaluran Bantuan Langsung Tunai (BLT) Tahap II Dijadwalkan Ulang",
      excerpt: "Sebanyak 120 Keluarga Penerima Manfaat (KPM) diundang hadir ke Balai Desa...",
      tanggal: "17 Mei 2026",
      gambar: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?q=80&w=600&auto=format&fit=crop"
    },
    {
      id: 2,
      kategori: "Pembangunan",
      judul: "Pembangunan Jalan Usaha Tani Dusun Krajan Rampung 100%",
      excerpt: "Pemerintah desa sukses merampungkan pengaspalan jalan usaha tani sepanjang 2 KM...",
      tanggal: "15 Mei 2026",
      gambar: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=600&auto=format&fit=crop"
    }
  ];

  // TUTORIAL CMS: Data Pesan Wali Nagari
  // Nanti teks dan link foto ini diambil dari pengaturan Profil di Database.
  const pesanWali = {
    nama: "Budi Santoso",
    jabatan: "Wali Nagari Demo 2024-2029",
    pesan: "Teknologi hanyalah alat, namun komitmen kami untuk melayani masyarakat secara transparan, tulus, dan cepat adalah fondasi utama pembangunan Nagari Demo yang maju. Melalui platform digital ini, kami membuka pintu kolaborasi selebar-lebarnya demi kemajuan ekonomi dan kesejahteraan seluruh warga.",
    foto: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop"
  };

  return (
    <main className="relative min-h-screen bg-[#050505] overflow-hidden pt-20 pb-24 font-sans text-slate-300">
      
      {/* Latar Belakang Global */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-red-600/20 rounded-full blur-[120px] mix-blend-screen pointer-events-none z-0"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-amber-600/10 rounded-full blur-[100px] mix-blend-screen pointer-events-none z-0"></div>
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none z-0"></div>

      {/* 1. HERO SECTION */}
      <motion.div className="container relative z-10 mx-auto max-w-6xl px-4 flex flex-col items-center text-center pt-10" variants={containerVariants} initial="hidden" animate="visible">
        <motion.div variants={itemVariants} className="mb-6">
          <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-5 py-2 backdrop-blur-xl shadow-lg">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span className="text-sm font-medium text-slate-300">Sistem Informasi Generasi Baru</span>
          </div>
        </motion.div>
        <motion.div variants={itemVariants} className="max-w-4xl mb-8">
          <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight leading-[1.1]">
            Evolusi Digital <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-red-500 to-amber-500">Nagari Demo</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Meninggalkan birokrasi lama. Kami menghadirkan pelayanan publik yang instan, transparan, dan berbasis data untuk kesejahteraan bersama.
          </p>
        </motion.div>
        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 mb-20">
          <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white shadow-[0_0_20px_rgba(220,38,38,0.4)] transition-all h-14 px-8 rounded-full text-base group">
            Jelajahi Layanan <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>
      </motion.div>

      {/* 2. MENU CEPAT */}
      <div className="container relative z-10 mx-auto max-w-6xl px-4 mb-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link href="/administrasi" className="group block">
            <div className="bg-white/5 backdrop-blur-md border border-white/10 hover:border-red-500/50 p-6 rounded-2xl flex items-center gap-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(220,38,38,0.1)]">
              <div className="p-4 bg-red-500/10 rounded-xl group-hover:bg-red-500/20 transition-colors"><FileSignature className="w-6 h-6 text-red-400" /></div>
              <div>
                <h3 className="font-bold text-white text-lg group-hover:text-red-400 transition-colors">Surat Administrasi</h3>
                <p className="text-sm text-slate-400 mt-1">Ajukan dokumen resmi online.</p>
              </div>
            </div>
          </Link>
          <Link href="/transparansi" className="group block">
            <div className="bg-white/5 backdrop-blur-md border border-white/10 hover:border-amber-500/50 p-6 rounded-2xl flex items-center gap-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(245,158,11,0.1)]">
              <div className="p-4 bg-amber-500/10 rounded-xl group-hover:bg-amber-500/20 transition-colors"><Landmark className="w-6 h-6 text-amber-400" /></div>
              <div>
                <h3 className="font-bold text-white text-lg group-hover:text-amber-400 transition-colors">Transparansi Dana</h3>
                <p className="text-sm text-slate-400 mt-1">Pantau anggaran dana desa.</p>
              </div>
            </div>
          </Link>
          <Link href="/aspirasi" className="group block">
            <div className="bg-white/5 backdrop-blur-md border border-white/10 hover:border-red-500/50 p-6 rounded-2xl flex items-center gap-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(220,38,38,0.1)]">
              <div className="p-4 bg-red-500/10 rounded-xl group-hover:bg-red-500/20 transition-colors"><MessageSquare className="w-6 h-6 text-red-400" /></div>
              <div>
                <h3 className="font-bold text-white text-lg group-hover:text-red-400 transition-colors">Partisipasi Warga</h3>
                <p className="text-sm text-slate-400 mt-1">Sampaikan aspirasi kemajuan.</p>
              </div>
            </div>
          </Link>
        </div>
      </div>

      {/* 3. LAYANAN PUBLIK UTAMA */}
      <div className="container relative z-10 mx-auto max-w-6xl px-4 mb-24">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 border-t border-white/10 pt-16">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-500/10 text-red-400 rounded-md text-xs font-bold tracking-wider uppercase mb-3 border border-red-500/20">Pelayanan Terpadu</div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white">Layanan Publik <span className="text-red-500">Utama</span></h2>
          </div>
          <Link href="/semua-layanan" className="group inline-flex items-center text-sm font-semibold text-red-400 hover:text-red-300 transition-colors">
            Semua Layanan <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {layananUtama.map((layanan) => (
            <div key={layanan.id} className="group relative bg-white/5 border border-white/10 rounded-3xl overflow-hidden hover:border-white/20 transition-all duration-500 hover:-translate-y-2 flex flex-col h-full">
              <div className="absolute top-10 right-4 text-9xl font-black text-white/[0.02] -z-10 group-hover:text-red-500/[0.05] transition-colors duration-500 select-none">{layanan.id}</div>
              <div className="h-48 w-full overflow-hidden relative">
                <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                <div className="absolute top-4 left-4 z-20 bg-black/60 backdrop-blur-md p-2.5 rounded-xl border border-white/10">{layanan.icon}</div>
                <img src={layanan.image} alt={layanan.title} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out" />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-red-400 transition-colors">{layanan.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed mb-6 flex-grow">{layanan.desc}</p>
                <div className="pt-4 border-t border-white/10">
                  <span className="text-sm font-semibold text-slate-300 group-hover:text-white flex items-center transition-colors cursor-pointer">
                    Ajukan Sekarang <ArrowRight className="w-4 h-4 ml-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 4. KABAR BERITA TERKINI */}
      <div className="container relative z-10 mx-auto max-w-6xl px-4 mb-24">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 border-t border-white/10 pt-16">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-500/10 text-amber-400 rounded-md text-xs font-bold tracking-wider uppercase mb-3 border border-amber-500/20">Warta Desa</div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white">Kabar Berita <span className="text-amber-500">Terkini</span></h2>
          </div>
          <Link href="/berita" className="group inline-flex items-center text-sm font-semibold text-amber-400 hover:text-amber-300 transition-colors">
            Semua Berita <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          <Link href="/berita/mbg-digugat" className="lg:col-span-3 group relative rounded-3xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-500 block h-[400px] lg:h-auto">
            <div className="absolute inset-0 z-0">
              <img src={beritaUtama.gambar} alt={beritaUtama.judul} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-in-out" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent z-10 transition-opacity duration-300 group-hover:opacity-90"></div>
            <div className="absolute bottom-0 left-0 w-full p-6 lg:p-8 z-20 flex flex-col justify-end">
              <div className="mb-4"><span className="inline-block px-3 py-1 bg-red-600 text-white text-xs font-bold uppercase tracking-wider rounded-md">{beritaUtama.kategori}</span></div>
              <h3 className="text-2xl lg:text-3xl font-bold text-white mb-3 leading-snug group-hover:text-red-400 transition-colors">{beritaUtama.judul}</h3>
              <p className="text-slate-300 text-sm mb-4 line-clamp-2">{beritaUtama.excerpt}</p>
              <div className="flex items-center text-xs font-medium text-slate-400"><CalendarDays className="w-4 h-4 mr-2 text-red-500" />{beritaUtama.tanggal}</div>
            </div>
          </Link>
          <div className="lg:col-span-2 flex flex-col gap-6">
            {listBerita.map((berita) => (
              <Link href={`/berita/${berita.id}`} key={berita.id} className="group flex flex-row h-full bg-white/5 border border-white/10 rounded-3xl overflow-hidden hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:-translate-y-1">
                <div className="w-2/5 overflow-hidden relative">
                  <div className="absolute top-3 left-3 z-20"><span className="inline-block px-2 py-0.5 bg-red-600/90 backdrop-blur-sm text-white text-[10px] font-bold uppercase tracking-wider rounded">{berita.kategori}</span></div>
                  <img src={berita.gambar} alt={berita.judul} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out" />
                </div>
                <div className="w-3/5 p-5 flex flex-col justify-center">
                  <div className="flex items-center text-[11px] font-medium text-slate-400 mb-2"><CalendarDays className="w-3 h-3 mr-1.5 text-amber-500" />{berita.tanggal}</div>
                  <h3 className="text-base font-bold text-white mb-2 leading-tight group-hover:text-red-400 transition-colors line-clamp-2">{berita.judul}</h3>
                  <p className="text-xs text-slate-400 line-clamp-2">{berita.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* ========================================================= */}
      {/* 5. PESAN PENGABDIAN WALI NAGARI (Animasi Scroll) */}
      {/* ========================================================= */}
      <div className="container relative z-10 mx-auto max-w-6xl px-4 mt-32 mb-10">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative bg-gradient-to-br from-white/10 to-transparent border border-white/10 rounded-[40px] overflow-hidden flex flex-col md:flex-row shadow-2xl group"
        >
          {/* Kolom Kiri: Foto & Badge */}
          <div className="w-full md:w-5/12 h-[450px] md:h-auto relative overflow-hidden">
            <img 
              src={pesanWali.foto} 
              alt={pesanWali.nama}
              className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-1000"
            />
            {/* Gradien untuk membaurkan foto ke teks di kanannya */}
            <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-[#050505] via-[#050505]/40 md:via-transparent to-transparent opacity-90 md:opacity-100"></div>
            
            {/* Badge Nama (Glassmorphism) */}
            <div className="absolute bottom-8 left-8 right-8 md:right-auto bg-black/50 backdrop-blur-md border border-white/10 p-5 rounded-2xl shadow-xl transform group-hover:-translate-y-2 transition-transform duration-500">
              <h4 className="text-xl font-bold text-white mb-1">{pesanWali.nama}</h4>
              <p className="text-sm font-medium text-amber-400">{pesanWali.jabatan}</p>
            </div>
          </div>

          {/* Kolom Kanan: Teks Kutipan */}
          <div className="w-full md:w-7/12 p-10 md:p-14 lg:p-20 relative flex flex-col justify-center">
            {/* Watermark Ikon Quote di Background */}
            <Quote className="absolute top-10 left-10 w-32 h-32 text-white/[0.03] -rotate-12 -z-10 group-hover:text-red-500/[0.05] transition-colors duration-700" />
            
            <p className="text-xl md:text-2xl lg:text-3xl leading-relaxed italic text-slate-200 font-medium relative z-10">
              "{pesanWali.pesan}"
            </p>
            
            <div className="mt-10 flex items-center gap-4">
              <div className="h-[2px] w-12 bg-gradient-to-r from-red-500 to-amber-500 rounded-full"></div>
              <span className="text-xs md:text-sm font-bold tracking-[0.2em] text-slate-400 uppercase">
                Pesan Pengabdian Pemerintah Desa
              </span>
            </div>
          </div>
        </motion.div>
      </div>
            {/* ========================================================= */}
      {/* 6. CALL TO ACTION (Pusat Bantuan) */}
      {/* ========================================================= */}
      <div className="container relative z-10 mx-auto max-w-6xl px-4 mt-10 mb-20">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative bg-gradient-to-r from-red-950/80 to-[#0a0a0a] border border-red-500/20 rounded-[32px] p-8 md:p-12 overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8 group"
        >
          {/* Background Accent & Watermark */}
          <div className="absolute right-0 top-0 w-64 h-64 bg-red-600/10 rounded-full blur-[80px] -z-10 group-hover:bg-red-600/20 transition-colors duration-700"></div>
          <Headset className="absolute -right-10 -bottom-10 w-64 h-64 text-white/[0.03] -rotate-12 -z-10 group-hover:scale-110 transition-transform duration-700" />

          <div className="max-w-xl z-10">
            <span className="text-red-400 font-bold tracking-widest text-xs uppercase mb-3 block">
              Pusat Bantuan Terpadu
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
              Butuh Bantuan Layanan?
            </h2>
            <p className="text-slate-400 text-sm md:text-base leading-relaxed">
              Jika layanan yang Anda cari belum tersedia atau mengalami kendala teknis saat mengunduh formulir, jangan ragu untuk menghubungi admin pelayanan nagari kami.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto shrink-0 z-10">
            <Button className="bg-emerald-500 hover:bg-emerald-600 text-white rounded-full px-8 py-6 h-auto text-base shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_30px_rgba(16,185,129,0.5)] transition-all hover:-translate-y-1">
              <MessageCircle className="w-5 h-5 mr-2" /> WhatsApp Admin
            </Button>
            <Button variant="outline" className="bg-white/5 border-white/10 hover:bg-white/10 text-white rounded-full px-8 py-6 h-auto text-base transition-all hover:-translate-y-1">
              <Mail className="w-5 h-5 mr-2" /> Kirim Email
            </Button>
          </div>
        </motion.div>
      </div>


    </main>
  );
}