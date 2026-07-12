"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Search, 
  FileText, 
  Download, 
  Headset,
  MessageCircle,
  Mail,
  ArrowRight,
  CheckCircle2
} from "lucide-react";
import { Button } from "@/components/ui/button";

// Simulasi Database Layanan
const dataLayanan = [
  {
    id: "pindah-datang",
    title: "Surat Pindah / Datang",
    shortDesc: "Penerbitan surat pengantar pindah domisili keluar/masuk desa.",
    fullDesc: "Layanan administrasi ini wajib dilakukan bagi warga yang ingin memindahkan data kependudukan antar desa, kecamatan, maupun provinsi. Surat pengantar dari Nagari ini merupakan syarat mutlak yang akan diproses lebih lanjut oleh Disdukcapil.",
    persyaratan: [
      "Bawa Fotokopi KTP dan KK asli pemohon.",
      "Minta surat pengantar pindah/datang dari RT dan RW setempat.",
      "Bagi warga datang, sertakan surat keterangan pindah dari desa asal yang dilegalisir.",
      "Serahkan seluruh berkas ke loket pelayanan Balai Desa pada jam kerja operasional."
    ],
    file: "Template_Pindah_Datang.pdf"
  },
  {
    id: "izin-keramaian",
    title: "Surat Izin Keramaian",
    shortDesc: "Rekomendasi syarat pengajuan izin keramaian ke pihak kepolisian.",
    fullDesc: "Rekomendasi ini diperlukan untuk menyelenggarakan acara yang mengumpulkan massa dalam jumlah besar seperti hajatan pernikahan, konser musik, pertandingan olahraga, atau pawai budaya di lingkungan Nagari.",
    persyaratan: [
      "Fotokopi KTP Penanggung Jawab Acara.",
      "Surat Pengantar dari Kepala Dusun / RT setempat.",
      "Proposal kegiatan (khusus untuk acara berskala besar/umum).",
      "Persetujuan tetangga sekitar lokasi acara (minimal 4 tetangga terdekat)."
    ],
    file: "Blanko_Izin_Keramaian.pdf"
  },
  {
    id: "ktp-kk",
    title: "Pengantar KTP / KK",
    shortDesc: "Prasyarat pencetakan dokumen kependudukan di Kecamatan.",
    fullDesc: "Bagi warga yang baru menginjak usia 17 tahun, kehilangan KTP/KK, atau terdapat perubahan data keluarga (kelahiran/kematian), wajib meminta surat pengantar ini sebelum melakukan pencetakan dokumen baru di instansi terkait.",
    persyaratan: [
      "Membawa KK Asli (untuk pembuatan KTP) atau fotokopi KTP orang tua.",
      "Surat Keterangan Kehilangan dari Kepolisian (jika kasusnya hilang).",
      "Fotokopi Akta Kelahiran atau Ijazah Terakhir (untuk penyesuaian data)."
    ],
    file: "Form_Pengantar_KTP_KK.pdf"
  },
  {
    id: "sku",
    title: "Keterangan Usaha (SKU)",
    shortDesc: "Keterangan resmi kepemilikan usaha mikro/kecil aktif di desa.",
    fullDesc: "SKU sering digunakan oleh pelaku UMKM sebagai syarat pencairan Kredit Usaha Rakyat (KUR) di bank, pengajuan bantuan modal pemerintah, atau pendaftaran izin usaha lanjutan.",
    persyaratan: [
      "Fotokopi KTP dan KK pemohon.",
      "Foto tempat/lokasi usaha yang sedang berjalan.",
      "Surat Pengantar dari RT/RW setempat yang membenarkan keberadaan usaha."
    ],
    file: "Formulir_SKU_Nagari.pdf"
  },
  {
    id: "sktm",
    title: "Keterangan Tidak Mampu",
    shortDesc: "Dokumen keringanan biaya pendidikan, kesehatan, & bansos.",
    fullDesc: "SKTM dikeluarkan oleh Pemerintah Nagari setelah melalui proses verifikasi lapangan. Surat ini ditujukan untuk memastikan program bantuan sosial, beasiswa, atau keringanan medis jatuh kepada warga yang benar-benar berhak.",
    persyaratan: [
      "Fotokopi KTP dan KK Kepala Keluarga.",
      "Surat Pengantar dari RT/RW setempat.",
      "Foto kondisi rumah (tampak depan, ruang tamu, dapur).",
      "Bersedia disurvei langsung oleh perangkat desa."
    ],
    file: "Blanko_SKTM_Update.pdf"
  }
];

export default function LayananPublik() {
  const [searchTerm, setSearchTerm] = useState("");
  // Default langsung memilih layanan pertama agar layar kanan tidak kosong
  const [activeLayananId, setActiveLayananId] = useState<string>(dataLayanan[0].id); 

  const filteredLayanan = dataLayanan.filter(layanan => 
    layanan.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
    layanan.shortDesc.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Mendapatkan data lengkap dari layanan yang sedang aktif
  const activeData = dataLayanan.find(l => l.id === activeLayananId) || dataLayanan[0];

  return (
    <main className="relative min-h-screen bg-[#050505] overflow-hidden pt-32 pb-24 font-sans text-slate-300">
      
      {/* Background Ambient */}
      <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-red-600/10 rounded-full blur-[150px] mix-blend-screen pointer-events-none z-0"></div>
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none z-0"></div>

      <div className="container relative z-10 mx-auto max-w-7xl px-4">
        
        {/* HEADER */}
        <div className="mb-12">
          <span className="inline-block px-4 py-1.5 bg-red-500/10 text-red-400 rounded-full text-xs font-bold tracking-widest uppercase mb-4 border border-red-500/20">
            Sistem Administrasi Terpadu
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Portal Layanan <span className="text-red-500">Publik</span>
          </h1>
        </div>

        {/* ========================================================= */}
        {/* SPLIT-VIEW COMMAND CENTER LAYOUT */}
        {/* ========================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-24">
          
          {/* KOLOM KIRI: Search & Daftar Layanan (Scrollable) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Search Bar */}
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-slate-400 group-focus-within:text-red-500 transition-colors" />
              </div>
              <input
                type="text"
                placeholder="Cari layanan (mis: KTP, Pindah)..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-white/5 border border-white/10 text-white rounded-2xl py-4 pl-12 pr-4 focus:outline-none focus:border-red-500/50 focus:bg-white/10 transition-all shadow-lg backdrop-blur-md"
              />
            </div>

            {/* List Layanan */}
            <div className="flex flex-col gap-3 max-h-[600px] overflow-y-auto pr-2 custom-scrollbar">
              {filteredLayanan.length > 0 ? (
                filteredLayanan.map((layanan) => {
                  const isActive = activeLayananId === layanan.id;
                  
                  return (
                    <div 
                      key={layanan.id}
                      onClick={() => setActiveLayananId(layanan.id)}
                      className={`cursor-pointer p-5 rounded-2xl border transition-all duration-300 flex items-center justify-between group ${
                        isActive 
                          ? "bg-red-500/10 border-red-500/50 shadow-[0_0_20px_rgba(220,38,38,0.1)]" 
                          : "bg-white/5 border-white/5 hover:border-white/20 hover:bg-white/10"
                      }`}
                    >
                      <div className="flex items-center gap-4">
                        <div className={`p-2.5 rounded-xl transition-colors ${isActive ? "bg-red-600 text-white" : "bg-white/5 text-slate-400 group-hover:text-white"}`}>
                          <FileText className="w-5 h-5" />
                        </div>
                        <div>
                          <h3 className={`font-bold text-base transition-colors ${isActive ? "text-white" : "text-slate-300 group-hover:text-white"}`}>
                            {layanan.title}
                          </h3>
                          <p className="text-xs text-slate-500 mt-1 line-clamp-1">{layanan.shortDesc}</p>
                        </div>
                      </div>
                      {isActive && (
                        <motion.div layoutId="activeIndicator" className="w-1.5 h-8 bg-red-500 rounded-full" />
                      )}
                    </div>
                  );
                })
              ) : (
                <div className="text-center py-10">
                  <Search className="w-8 h-8 text-slate-600 mx-auto mb-3" />
                  <p className="text-slate-400 text-sm">Layanan tidak ditemukan.</p>
                </div>
              )}
            </div>
          </div>

          {/* KOLOM KANAN: Panel Detail Dinamis */}
          <div className="lg:col-span-7">
            <div className="bg-white/5 border border-white/10 rounded-[32px] p-8 md:p-10 backdrop-blur-xl h-full relative overflow-hidden">
              
              {/* Efek Garis Kaca di Kanan Panel */}
              <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-white/[0.02] to-transparent pointer-events-none"></div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeData.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="relative z-10 h-full flex flex-col"
                >
                  <div className="flex items-start justify-between gap-4 mb-8 border-b border-white/10 pb-8">
                    <div>
                      <span className="px-3 py-1 bg-red-500/10 text-red-400 rounded-md text-[10px] font-extrabold tracking-widest uppercase mb-4 inline-block">
                        Detail Layanan
                      </span>
                      <h2 className="text-3xl font-bold text-white mb-3">{activeData.title}</h2>
                      <p className="text-slate-400 text-sm leading-relaxed max-w-xl">
                        {activeData.fullDesc}
                      </p>
                    </div>
                  </div>

                  <div className="flex-grow">
                    <h4 className="text-xs font-bold tracking-widest text-slate-500 uppercase mb-5">
                      Persyaratan Wajib
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {activeData.persyaratan.map((syarat, idx) => (
                        <div key={idx} className="flex gap-4 items-start bg-white/5 border border-white/5 p-4 rounded-2xl hover:bg-white/10 hover:border-white/10 transition-colors">
                          <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                          <p className="text-sm text-slate-300">{syarat}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Panel Download di Bagian Bawah */}
                  <div className="mt-10 bg-gradient-to-r from-[#0a0a0a] to-transparent border border-white/10 rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-6">
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-red-500/20 rounded-xl text-red-500">
                        <FileText className="w-6 h-6" />
                      </div>
                      <div>
                        <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">Dokumen Lampiran</p>
                        <p className="text-sm font-bold text-white truncate max-w-[200px]">{activeData.file}</p>
                      </div>
                    </div>
                    <Button className="w-full sm:w-auto bg-white text-black hover:bg-slate-200 rounded-xl font-bold px-6 py-5">
                      <Download className="w-4 h-4 mr-2" /> Unduh Formulir
                    </Button>
                  </div>

                </motion.div>
              </AnimatePresence>

            </div>
          </div>

        </div>

        {/* PUSAT BANTUAN */}
        <div className="relative bg-gradient-to-r from-red-950/80 to-[#0a0a0a] border border-red-500/20 rounded-[32px] p-8 md:p-12 overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8 group">
          <div className="absolute right-0 top-0 w-64 h-64 bg-red-600/10 rounded-full blur-[80px] -z-10 group-hover:bg-red-600/20 transition-colors duration-700"></div>
          <Headset className="absolute -right-10 -bottom-10 w-64 h-64 text-white/[0.03] -rotate-12 -z-10 group-hover:scale-110 transition-transform duration-700" />
          <div className="max-w-xl z-10 text-center md:text-left">
            <span className="text-red-400 font-bold tracking-widest text-xs uppercase mb-3 block">Pusat Bantuan Terpadu</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">Butuh Bantuan Layanan?</h2>
            <p className="text-slate-400 text-sm md:text-base leading-relaxed">Jika layanan yang Anda cari belum tersedia atau mengalami kendala teknis, jangan ragu untuk menghubungi admin kami.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto shrink-0 z-10">
            <Button className="bg-emerald-500 hover:bg-emerald-600 text-white rounded-full px-8 py-6 h-auto text-base transition-all hover:-translate-y-1">
              <MessageCircle className="w-5 h-5 mr-2" /> WhatsApp
            </Button>
            <Button variant="outline" className="bg-white/5 border-white/10 hover:bg-white/10 text-white rounded-full px-8 py-6 h-auto text-base transition-all hover:-translate-y-1">
              <Mail className="w-5 h-5 mr-2" /> Email
            </Button>
          </div>
        </div>

      </div>
    </main>
  );
}