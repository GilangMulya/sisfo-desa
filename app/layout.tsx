import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar"; // Pastikan path ini benar
import Footer from "@/components/Footer"; // <-- WAJIB DI-IMPORT DI SINI

export const metadata: Metadata = {
  title: "Sistem Informasi Desa (SID) - Nagari Demo",
  description: "Portal resmi pelayanan publik dan informasi Nagari Demo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      {/* Warna dasar body disesuaikan dengan tema Dark Mode kita */}
      <body className="bg-[#050505] text-slate-300 antialiased font-sans">
        <Navbar />
        
        {/* Ini adalah tempat page.tsx (Beranda) di-render */}
        <main>
          {children}
        </main>
        
        <Footer /> {/* <-- WAJIB DIPANGGIL DI BAWAH MAIN */}
      </body>
    </html>
  );
}