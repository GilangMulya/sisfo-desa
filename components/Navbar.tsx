"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Lock } from 'lucide-react';

export default function Navbar() {
  const pathname = usePathname();

  // NAMA MENU DIKEMBALIKAN MENJADI "Berita"
  const menuItems = [
    { name: 'Beranda', path: '/' },
    { name: 'Profil', path: '/profil' },
    { name: 'Layanan', path: '/layanan' },
    { name: 'Berita', path: '/berita' }, 
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#050505]/60 backdrop-blur-xl border-b border-white/5 transition-all duration-300">
      <div className="container mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
        
        {/* Bagian Logo & Nama Desa */}
        <div className="flex items-center gap-3 group cursor-pointer">
          <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center p-1.5 border border-white/10 overflow-hidden group-hover:border-red-500/50 transition-colors">
            <img 
              src="https://tse2.mm.bing.net/th/id/OIP.5x0i0xkw_T5GG8npEeUHUAHaJ_?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
              alt="Logo" 
              className="object-contain w-full h-full opacity-90 group-hover:opacity-100 transition-opacity" 
            />
          </div>
          <div className="flex flex-col">
            <h1 className="text-lg font-bold tracking-wide leading-tight text-white group-hover:text-red-400 transition-colors">
              NAGARI DEMO
            </h1>
            <p className="text-[10px] text-slate-400 font-medium uppercase tracking-widest">
              Kab. Pasaman
            </p>
          </div>
        </div>

        {/* Bagian Menu Navigasi */}
        <div className="hidden md:flex items-center gap-6 bg-white/5 px-6 py-2 rounded-full border border-white/10 shadow-inner backdrop-blur-md">
          {menuItems.map((item) => {
            const isActive = pathname === item.path || (item.path !== '/' && pathname.startsWith(item.path));

            return (
              <Link 
                key={item.name}
                href={item.path} 
                // DITAMBAHKAN: focus:outline-none untuk mematikan kotak putih bawaan browser
                className={`text-sm transition-colors relative focus:outline-none ${
                  isActive 
                    ? "font-semibold text-white after:absolute after:-bottom-1 after:left-0 after:w-full after:h-[2px] after:bg-red-500 after:rounded-full after:shadow-[0_0_8px_rgba(239,68,68,0.8)]" 
                    : "font-medium text-slate-400 hover:text-white"
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </div>

        {/* Bagian Tombol Login Admin */}
        <div className="flex items-center">
          <Button 
            variant="outline" 
            className="bg-red-950/30 border-red-500/30 text-red-400 hover:bg-red-600 hover:text-white hover:border-red-500 transition-all duration-300 rounded-full px-5 py-2 h-auto font-medium text-sm shadow-[0_0_15px_rgba(220,38,38,0.1)] hover:shadow-[0_0_25px_rgba(220,38,38,0.5)]"
          >
            <Lock className="w-4 h-4 mr-2" />
            Portal Admin
          </Button>
        </div>

      </div>
    </nav>
  );
}