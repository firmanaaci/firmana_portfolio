"use client";

import Link from "next/link";
import { useState } from "react";
import {
  motion,
  useScroll,
  useMotionValueEvent,
  useSpring,
  AnimatePresence,
} from "framer-motion";

const navLinks = [
  { label: "Experience", href: "#experience" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("");
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 30);
  });

  return (
    <>
      {/* ── HEADER — selalu visible, tidak hilang saat scroll ── */}
      <header
        className={`font-[family-name:var(--font-dm)] fixed top-0 left-0 w-full z-[60] transition-all duration-300 ${
          scrolled
            ? "bg-[rgba(5,13,12,0.85)] backdrop-blur-xl border-b border-[rgba(20,184,140,0.1)] shadow-[0_4px_24px_rgba(0,0,0,0.4)]"
            : "bg-[rgba(5,13,12,0.4)] backdrop-blur-md border-b border-transparent"
        }`}
      >
        <div className="mx-auto max-w-[1200px] flex items-center justify-between px-6 h-16">
          {/* Logo */}
          <Link
            href="#hero"
            className="font-[family-name:var(--font-syne)] font-extrabold text-xl text-[#f0faf8] no-underline tracking-[-0.03em] flex items-center"
          >
            <span className="text-[#f59e0b]">{"<"}</span>
            Firmana
            <span className="text-[#f59e0b]">{"/>"}</span>
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#14b88c] shadow-[0_0_8px_#14b88c] ml-1 mb-3" />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-0.5 bg-white/[0.04] border border-white/[0.07] rounded-full p-1">
            {navLinks.map(({ label, href }) => (
              <Link
                key={label}
                href={href}
                onClick={() => setActiveLink(href)}
                className={`px-[18px] py-[7px] text-[13px] font-medium rounded-full tracking-[0.01em] whitespace-nowrap transition-all duration-200 no-underline ${
                  activeLink === href
                    ? "text-[#f0faf8] bg-[rgba(20,184,140,0.12)]"
                    : "text-[rgba(200,230,220,0.55)] hover:text-[#f0faf8]"
                }`}
              >
                {label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <Link
            href="#kontak"
            className="hidden md:inline-flex items-center gap-2 px-5 py-[9px] rounded-full font-[family-name:var(--font-syne)] font-bold text-[13px] text-[#0a0a0a] no-underline hover:-translate-y-px transition-all duration-200 whitespace-nowrap"
            style={{ background: "linear-gradient(135deg, #f59e0b, #e07820)" }}
          >
            Let&apos;s Talk
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path
                d="M1 6h10M7 2l4 4-4 4"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>

          {/* Hamburger — mobile only */}
          <button
            className="md:hidden flex flex-col justify-center items-center w-10 h-10 rounded-[10px] cursor-pointer gap-[5px] transition-colors duration-200 border"
            style={{
              background: isOpen
                ? "rgba(20,184,140,0.15)"
                : "rgba(255,255,255,0.06)",
              borderColor: isOpen
                ? "rgba(20,184,140,0.4)"
                : "rgba(255,255,255,0.12)",
            }}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            <span
              className={`block h-[1.5px] bg-[#f0faf8] rounded-sm transition-all duration-300 origin-center ${isOpen ? "w-4 translate-y-[6.5px] rotate-45" : "w-[18px]"}`}
            />
            <span
              className={`block h-[1.5px] bg-[#f0faf8] rounded-sm transition-all duration-300 w-3.5 ${isOpen ? "opacity-0 scale-x-0" : "opacity-100"}`}
            />
            <span
              className={`block h-[1.5px] bg-[#f0faf8] rounded-sm transition-all duration-300 origin-center ${isOpen ? "w-4 -translate-y-[6.5px] -rotate-45" : "w-[10px]"}`}
            />
          </button>
        </div>

        {/* Scroll progress bar */}
        <ScrollProgress />
      </header>

      {/* ── MOBILE MENU OVERLAY ── z-50 (di bawah header z-[60]) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden fixed inset-0 z-50 flex flex-col"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
          >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-[#050d0c]/95 backdrop-blur-2xl" />

            {/* Content — padding top 80px supaya tidak tertimpa header */}
            <div className="relative z-10 flex flex-col h-full px-8 pt-20 pb-12">
              <nav className="flex flex-col mt-4">
                {navLinks.map(({ label, href }, i) => (
                  <motion.div
                    key={label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: 0.05 + i * 0.07,
                      duration: 0.35,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                  >
                    <Link
                      href={href}
                      onClick={() => setIsOpen(false)}
                      className="font-[family-name:var(--font-syne)] text-[34px] font-bold text-[rgba(200,230,220,0.3)] no-underline tracking-[-0.03em] leading-[1.2] flex items-baseline gap-2 py-3 border-b border-white/[0.06] hover:text-[#f0faf8] transition-colors duration-200"
                    >
                      {label}
                      <span className="text-[#14b88c] text-[13px] font-[family-name:var(--font-dm)] font-normal">
                        0{i + 1}
                      </span>
                    </Link>
                  </motion.div>
                ))}
              </nav>

              <motion.div
                className="mt-auto"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.35 }}
              >
                <Link
                  href="#kontak"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center gap-2 w-full py-4 rounded-full font-[family-name:var(--font-syne)] font-bold text-[16px] text-[#0a0a0a] no-underline"
                  style={{
                    background: "linear-gradient(135deg, #f59e0b, #e07820)",
                  }}
                >
                  Let&apos;s Talk
                  <svg width="16" height="16" viewBox="0 0 12 12" fill="none">
                    <path
                      d="M1 6h10M7 2l4 4-4 4"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 24,
    mass: 0.3,
  });

  return (
    <motion.div
      className="absolute bottom-0 left-0 h-[1px] w-full origin-left shadow-[0_0_6px_rgba(20,184,140,0.4)]"
      style={{
        scaleX: smoothProgress,
        background: "linear-gradient(90deg, #14b88c, #f59e0b)",
      }}
    />
  );
}
