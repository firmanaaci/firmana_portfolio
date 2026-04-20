"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() || 0;
    if (latest > previous && latest > 100) {
      setIsHidden(true);
      setIsOpen(false);
    } else {
      setIsHidden(false);
    }
  });

  return (
    <motion.header
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={isHidden ? "hidden" : "visible"}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      // Background diubah menjadi Hijau Pekat
      className="flex justify-between items-center px-8 py-6 bg-[#1c4645] sticky top-0 z-50 border-b border-white/10"
    >
      {/* KIRI: Logo (Lebar 1/3) */}
      <div className="w-1/3">
        <Link
          href="#hero"
          className="text-2xl font-bold tracking-tighter text-white z-50"
        >
          Dev<span className="text-[#f59e0b]">Portfolio</span>
        </Link>
      </div>

      {/* TENGAH: Navigasi Desktop (Lebar 1/3, posisi ditengah) */}
      <nav className="hidden md:flex w-1/3 justify-center gap-8 font-medium text-white/80 text-sm items-center">
        <Link href="#experience" className="hover:text-white transition-colors">
          Experiences
        </Link>
        <Link href="#about" className="hover:text-white transition-colors">
          About Me
        </Link>
        <Link href="#projects" className="hover:text-white transition-colors">
          Projects
        </Link>
      </nav>

      {/* KANAN: Tombol PC & Hamburger Mobile (Lebar 1/3, rata kanan) */}
      <div className="w-1/3 flex justify-end">
        {/* Tombol Desktop */}
        <Link
          href="#kontak"
          className="hidden md:inline-block px-5 py-2 bg-[#f59e0b] text-white rounded-full hover:bg-yellow-500 transition-all text-sm font-semibold shadow-lg shadow-orange-500/20"
        >
          Let&apos;s Talk
        </Link>

        {/* Tombol Hamburger Mobile */}
        <button
          className="md:hidden text-white/80 hover:text-white p-2 z-50"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          <div
            className={`transition-transform duration-300 ease-in-out ${isOpen ? "rotate-90 scale-110" : "rotate-0"}`}
          >
            {isOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-[#f59e0b]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </div>
        </button>
      </div>

      {/* Menu Dropdown Mobile */}
      <div
        className={`absolute top-full left-0 w-full bg-[#1c4645] border-b border-white/10 flex flex-col p-6 gap-6 md:hidden shadow-2xl transition-all duration-500 ease-in-out origin-top
          ${
            isOpen
              ? "opacity-100 translate-y-0 visible"
              : "opacity-0 -translate-y-5 invisible"
          }
        `}
      >
        <Link href="#experience" onClick={() => setIsOpen(false)} className="text-white/80 hover:text-white font-medium transition-colors text-lg">
          Experiences
        </Link>
        <Link href="#about" onClick={() => setIsOpen(false)} className="text-white/80 hover:text-white font-medium transition-colors text-lg">
          About Me
        </Link>
        <Link href="#projects" onClick={() => setIsOpen(false)} className="text-white/80 hover:text-white font-medium transition-colors text-lg">
          Projects
        </Link>
        <Link href="#kontak" onClick={() => setIsOpen(false)} className="text-center px-5 py-3 bg-[#f59e0b] text-white rounded-full hover:bg-yellow-500 transition-all font-semibold mt-4">
          Let&apos;s Talk
        </Link>
      </div>
    </motion.header>
  );
}