"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, BookOpen, Grid, Newspaper, Lock } from 'lucide-react';

export default function Navbar() {
  const pathname = usePathname();

  const menuItems = [
    { name: 'Beranda', path: '/', icon: Home },
    { name: 'Profil', path: '/profil', icon: BookOpen },
    { name: 'Layanan', path: '/layanan', icon: Grid },
    { name: 'Berita', path: '/berita', icon: Newspaper },
  ];

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[92%] md:w-auto animate-fade-in-up transition-all duration-500">
      <div className="bg-white/90 backdrop-blur-2xl border border-gray-200/60 shadow-[0_10px_40px_rgba(0,0,0,0.06)] rounded-full p-1.5 flex items-center justify-between md:justify-center gap-1 md:gap-2">
        
        {/* Bagian Logo (Kiri) */}
        <Link href="/" className="hidden md:flex items-center gap-2.5 pl-5 pr-6 border-r border-gray-200 mr-2 cursor-pointer focus:outline-none group">
           <div className="w-7 h-7 rounded-full shadow-sm flex items-center justify-center overflow-hidden border border-gray-100 bg-white group-hover:scale-110 transition-transform">
              {/* Logo Pasaman */}
              <img 
                src="https://tse2.mm.bing.net/th/id/OIP.5x0i0xkw_T5GG8npEeUHUAHaJ_?r=0&rs=1&pid=ImgDetMain&o=7&rm=3" 
                alt="Logo" 
                className="w-full h-full object-contain p-0.5" 
              />
           </div>
           <span className="font-serif font-bold text-[#1A1A1A] text-lg tracking-tight group-hover:text-[#990000] transition-colors">
             Nagari Demo
           </span>
        </Link>

        {/* Menu Navigasi Tengah */}
        {menuItems.map((item) => {
          const isActive = pathname === item.path || (item.path !== '/' && pathname.startsWith(item.path));
          
          return (
            <Link 
              key={item.name} 
              href={item.path} 
              className={`relative flex items-center px-5 py-2.5 rounded-full text-[13px] font-bold transition-all duration-300 ease-out focus:outline-none ${
                isActive 
                  ? 'bg-[#1A1A1A] text-white shadow-md scale-105' 
                  : 'text-gray-500 hover:text-[#990000] hover:bg-gray-100/80'
              }`}
            >
              <item.icon size={16} className={`md:mr-2 ${isActive ? 'text-[#D4AF37]' : ''}`} />
              <span className={`${isActive ? 'block' : 'hidden md:block'}`}>{item.name}</span>
            </Link>
          );
        })}

        {/* Tombol Portal Admin (Kanan) */}
        <Link href="/admin" className="hidden lg:flex items-center gap-2 ml-2 px-6 py-2.5 rounded-full bg-[#990000] text-white text-[13px] font-bold hover:bg-[#800000] transition-all shadow-[0_4px_15px_rgba(153,0,0,0.2)] hover:shadow-[0_6px_20px_rgba(153,0,0,0.3)] focus:outline-none hover:-translate-y-0.5">
          <Lock size={14} className="text-[#D4AF37]" /> Portal Admin
        </Link>
      </div>
    </nav>
  );
}