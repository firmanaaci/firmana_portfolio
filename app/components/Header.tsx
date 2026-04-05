"use client";

import Link from 'next/link';
import { useState } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';

export default function Header() {
  // State untuk menu mobile
  const [isOpen, setIsOpen] = useState(false);
  
  // State untuk visibilitas header (muncul/sembunyi)
  const [isHidden, setIsHidden] = useState(false);
  
  // Fitur dari Framer Motion untuk membaca posisi scroll
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    // Ambil posisi scroll sebelumnya
    const previous = scrollY.getPrevious() || 0;
    
    // Jika posisi sekarang LEBIH BESAR dari sebelumnya (berarti scroll ke bawah)
    // dan sudah melewati jarak 100px dari atas...
    if (latest > previous && latest > 100) {
      setIsHidden(true);    // Sembunyikan header
      setIsOpen(false);     // Tutup juga menu mobile-nya kalau lagi terbuka
    } else {
      // Jika scroll ke atas
      setIsHidden(false);   // Munculkan kembali header
    }
  });

  return (
    <motion.header 
      // Atur variasi animasi
      variants={{
        visible: { y: 0 },         // Posisi normal
        hidden: { y: "-100%" }     // Naik ke atas sejauh ukuran headernya (sembunyi)
      }}
      animate={isHidden ? "hidden" : "visible"}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      
      // Class Tailwind (tetap sama seperti sebelumnya)
      className="flex justify-between items-center px-8 py-6 bg-[#121212]/90 backdrop-blur-md sticky top-0 z-50 border-b border-gray-800"
    >
      {/* Logo */}
      <div className="text-2xl font-bold tracking-tighter text-white z-50">
        Dev<span className="text-[#FF8A00]">Portfolio</span>
      </div>

      {/* Navigasi Desktop (Hanya muncul di PC/Tablet) */}
      <nav className="hidden md:flex gap-8 font-medium text-gray-300 text-sm items-center">
        <Link href="#services" className="hover:text-[#FF8A00] transition-colors">Services</Link>
        <Link href="#about" className="hover:text-[#FF8A00] transition-colors">About Me</Link>
        <Link href="#projects" className="hover:text-[#FF8A00] transition-colors">Projects</Link>
        
        <Link href="#kontak" className="ml-4 px-5 py-2 bg-[#FF8A00] text-white rounded-full hover:bg-[#e67a00] transition-all text-sm font-semibold shadow-lg shadow-orange-500/20">
          Let&apos;s Talk
        </Link>
      </nav>

      {/* Tombol Hamburger Mobile */}
      <button 
        className="md:hidden text-gray-300 hover:text-white p-2 z-50"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle Menu"
      >
        <div className={`transition-transform duration-300 ease-in-out ${isOpen ? 'rotate-90 scale-110' : 'rotate-0'}`}>
          {isOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-[#FF8A00]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </div>
      </button>

      {/* Menu Dropdown Mobile dengan Animasi Halus */}
      <div 
        className={`absolute top-full left-0 w-full bg-[#1A1A1A] border-b border-gray-800 flex flex-col p-6 gap-6 md:hidden shadow-2xl transition-all duration-500 ease-in-out origin-top
          ${isOpen 
            ? 'opacity-100 translate-y-0 visible' 
            : 'opacity-0 -translate-y-5 invisible'
          }
        `}
      >
        <Link href="#services" onClick={() => setIsOpen(false)} className="text-gray-300 hover:text-[#FF8A00] font-medium transition-colors text-lg">
          Services
        </Link>
        <Link href="#about" onClick={() => setIsOpen(false)} className="text-gray-300 hover:text-[#FF8A00] font-medium transition-colors text-lg">
          About Me
        </Link>
        <Link href="#projects" onClick={() => setIsOpen(false)} className="text-gray-300 hover:text-[#FF8A00] font-medium transition-colors text-lg">
          Projects
        </Link>
        
        <Link href="#kontak" onClick={() => setIsOpen(false)} className="text-center px-5 py-3 bg-[#FF8A00] text-white rounded-full hover:bg-[#e67a00] transition-all font-semibold mt-4">
          Let&apos;s Talk
        </Link>
      </div>
    </motion.header>
  );
}