"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

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
      setIsHidden(true); // Sembunyikan header
      setIsOpen(false); // Tutup juga menu mobile-nya kalau lagi terbuka
    } else {
      // Jika scroll ke atas
      setIsHidden(false); // Munculkan kembali header
    }
  });

  return (
    <motion.header
      // Atur variasi animasi
      variants={{
        visible: { y: 0 }, // Posisi normal
        hidden: { y: "-100%" }, // Naik ke atas sejauh ukuran headernya (sembunyi)
      }}
      animate={isHidden ? "hidden" : "visible"}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      // Class Tailwind (tetap sama seperti sebelumnya)
      className="flex justify-between items-center px-8 py-6 bg-[#f7f3eb]/85 backdrop-blur-md sticky top-0 z-50 border-b border-[#d9d0c0]"
    >
      {/* Logo */}
      <Link
        href="#hero"
        className="text-2xl font-bold tracking-tighter text-[#1f2a1e] z-50"
      >
        Dev<span className="text-[#6f8f5f]">Portfolio</span>
      </Link>

      {/* Navigasi Desktop (Hanya muncul di PC/Tablet) */}
      <nav className="hidden md:flex gap-8 font-medium text-[#4b5a47] text-sm items-center">
        <Link
          href="#services"
          className="hover:text-[#6f8f5f] transition-colors"
        >
          Services
        </Link>
        <Link href="#about" className="hover:text-[#6f8f5f] transition-colors">
          About Me
        </Link>
        <Link
          href="#projects"
          className="hover:text-[#6f8f5f] transition-colors"
        >
          Projects
        </Link>

        <Link
          href="#kontak"
          className="ml-4 px-5 py-2 bg-[#6f8f5f] text-[#f7f3eb] rounded-full hover:bg-[#5d7d4c] transition-all text-sm font-semibold shadow-lg shadow-[#6f8f5f]/20"
        >
          Let&apos;s Talk
        </Link>
      </nav>

      {/* Tombol Hamburger Mobile */}
      <button
        className="md:hidden text-[#4b5a47] hover:text-[#1f2a1e] p-2 z-50"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle Menu"
      >
        <div
          className={`transition-transform duration-300 ease-in-out ${isOpen ? "rotate-90 scale-110" : "rotate-0"}`}
        >
          {isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7 text-[#6f8f5f]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </div>
      </button>

      {/* Menu Dropdown Mobile dengan Animasi Halus */}
      <div
        className={`absolute top-full left-0 w-full bg-[#f7f3eb] border-b border-[#d9d0c0] flex flex-col p-6 gap-6 md:hidden shadow-2xl transition-all duration-500 ease-in-out origin-top
          ${
            isOpen
              ? "opacity-100 translate-y-0 visible"
              : "opacity-0 -translate-y-5 invisible"
          }
        `}
      >
        <Link
          href="#services"
          onClick={() => setIsOpen(false)}
          className="text-[#4b5a47] hover:text-[#6f8f5f] font-medium transition-colors text-lg"
        >
          Services
        </Link>
        <Link
          href="#about"
          onClick={() => setIsOpen(false)}
          className="text-[#4b5a47] hover:text-[#6f8f5f] font-medium transition-colors text-lg"
        >
          About Me
        </Link>
        <Link
          href="#projects"
          onClick={() => setIsOpen(false)}
          className="text-[#4b5a47] hover:text-[#6f8f5f] font-medium transition-colors text-lg"
        >
          Projects
        </Link>

        <Link
          href="#kontak"
          onClick={() => setIsOpen(false)}
          className="text-center px-5 py-3 bg-[#6f8f5f] text-[#f7f3eb] rounded-full hover:bg-[#5d7d4c] transition-all font-semibold mt-4"
        >
          Let&apos;s Talk
        </Link>
      </div>
    </motion.header>
  );
}
