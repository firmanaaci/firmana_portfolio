"use client"; // Wajib ditambahkan agar tombol bisa diklik di Next.js

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  // State untuk menyimpan status menu: terbuka (true) atau tertutup (false)
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="flex justify-between items-center px-8 py-6 bg-[#121212]/90 backdrop-blur-md sticky top-0 z-50 border-b border-gray-800 relative">
      {/* Logo */}
      <div className="text-2xl font-bold tracking-tighter text-white">
        Dev<span className="text-[#FF8A00]">Portfolio</span>
      </div>

      {/* Navigasi Desktop (Hanya muncul di layar PC/Tablet) */}
      <nav className="hidden md:flex gap-8 font-medium text-gray-300 text-sm items-center">
        <Link href="#services" className="hover:text-[#FF8A00] transition-colors">Services</Link>
        <Link href="#about" className="hover:text-[#FF8A00] transition-colors">About Me</Link>
        <Link href="#projects" className="hover:text-[#FF8A00] transition-colors">Projects</Link>
        
        <Link href="#kontak" className="ml-4 px-5 py-2 bg-[#FF8A00] text-white rounded-full hover:bg-[#e67a00] transition-all text-sm font-semibold shadow-lg shadow-orange-500/20">
          Lets Talk
        </Link>
      </nav>

      {/* Tombol Hamburger Mobile (Hanya muncul di layar HP) */}
      <button 
        className="md:hidden text-gray-300 hover:text-white p-2"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle Menu"
      >
        {isOpen ? (
          // Ikon Silang (X) jika menu terbuka
          <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          // Ikon Hamburger (Garis 3) jika menu tertutup
          <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        )}
      </button>

      {/* Menu Dropdown Mobile (Muncul jika isOpen = true) */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-[#1A1A1A] border-b border-gray-800 flex flex-col p-6 gap-6 md:hidden shadow-2xl">
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
            Lets Talk
          </Link>
        </div>
      )}
    </header>
  );
}