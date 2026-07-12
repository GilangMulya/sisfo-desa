import Link from 'next/link';
import { MapPin, Clock, Phone, Mail, ChevronRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#050505] border-t border-white/10 pt-16 pb-8 relative overflow-hidden">
      
      {/* Efek Cahaya Halus di Latar Footer */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-red-500/50 to-transparent"></div>
      
      <div className="container mx-auto max-w-6xl px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8 mb-16">
          
          {/* Kolom 1: Logo & Info */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center p-1.5 border border-white/10">
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Lambang_Kabupaten_Pasaman.png/430px-Lambang_Kabupaten_Pasaman.png" 
                  alt="Logo Nagari" 
                  className="object-contain w-full h-full opacity-90" 
                />
              </div>
              <h2 className="text-xl font-bold tracking-wide text-white">
                NAGARI DEMO
              </h2>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              Portal informasi terintegrasi dan pusat layanan administrasi terpadu bagi warga dan pelaku usaha di lingkungan Nagari Demo, Kabupaten Pasaman.
            </p>
          </div>

          {/* Kolom 2: Navigasi */}
          <div className="md:col-span-3">
            <h3 className="text-white font-bold tracking-widest text-xs uppercase mb-6 border-l-2 border-red-500 pl-3">
              Navigasi Link
            </h3>
            <ul className="space-y-3">
              {['Beranda', 'Profil Desa', 'Layanan Publik', 'Berita Terkini'].map((item, i) => (
                <li key={i}>
                  <Link href="#" className="group flex items-center text-sm text-slate-400 hover:text-red-400 transition-colors">
                    <ChevronRight className="w-4 h-4 mr-2 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                    <span className="transform group-hover:translate-x-1 transition-transform duration-300">{item}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Kolom 3: Kontak */}
          <div className="md:col-span-4">
            <h3 className="text-white font-bold tracking-widest text-xs uppercase mb-6 border-l-2 border-amber-500 pl-3">
              Informasi Kantor
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start text-sm text-slate-400">
                <MapPin className="w-5 h-5 text-red-500/70 mr-3 shrink-0 mt-0.5" />
                <span>Jl. Andilan No. 12, Balai Desa Nagari Demo, Pasaman, Sumatera Barat.</span>
              </li>
              <li className="flex items-center text-sm text-slate-400">
                <Clock className="w-5 h-5 text-amber-500/70 mr-3 shrink-0" />
                <span>Senin - Jumat | 08:00 - 15:00 WIB</span>
              </li>
              <li className="flex items-center text-sm text-slate-400">
                <Phone className="w-5 h-5 text-red-500/70 mr-3 shrink-0" />
                <span>0812-3456-7890</span>
              </li>
              <li className="flex items-center text-sm text-slate-400">
                <Mail className="w-5 h-5 text-amber-500/70 mr-3 shrink-0" />
                <span>kontak@nagaridemo.desa.id</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Copyright */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-500 text-center md:text-left">
            © {new Date().getFullYear()} Pemerintah Nagari Demo. Seluruh Hak Cipta Dilindungi.
          </p>
          <div className="flex gap-4">
            <span className="text-xs text-slate-500 hover:text-slate-300 cursor-pointer transition-colors">Syarat & Ketentuan</span>
            <span className="text-xs text-slate-500 hover:text-slate-300 cursor-pointer transition-colors">Kebijakan Privasi</span>
          </div>
        </div>
      </div>
    </footer>
  );
}