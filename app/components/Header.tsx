"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import {
  motion,
  useScroll,
  useMotionValueEvent,
  useSpring,
  AnimatePresence,
} from "framer-motion";
import { useTheme } from "../lib/ThemeContext";

const navLinks = [
  { label: "Experience", href: "/#experience", id: "experience" },
  { label: "About", href: "/#about", id: "about" },
  { label: "Skills", href: "/#skills", id: "skills" },
  { label: "Projects", href: "/#projects", id: "projects" },
  { label: "Contact", href: "/#kontak", id: "kontak" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const pathname = usePathname();
  const { scrollY } = useScroll();
  const { theme, toggleTheme } = useTheme();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 30);
  });

  // Track active section/page automatically on scroll and page load
  useEffect(() => {
    if (pathname === "/projects") {
      setActiveSection("projects");
      return;
    }

    const sections = ["experience", "about", "skills", "projects", "kontak"];

    const handleScroll = () => {
      const firstSection = document.getElementById("experience");

      // 1. Jika masih di area Hero (bagian atas Experience belum naik), tidak ada menu aktif
      if (firstSection) {
        const firstTop = firstSection.getBoundingClientRect().top;
        if (firstTop > window.innerHeight * 0.45) {
          setActiveSection("");
          return;
        }
      } else if (window.scrollY < 300) {
        setActiveSection("");
        return;
      }

      // 2. Cari section yang menempati titik fokus viewport (35% dari atas layar)
      const targetPoint = window.innerHeight * 0.35;
      let currentActive = "";

      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= targetPoint && rect.bottom > targetPoint) {
            currentActive = id;
            break;
          }
        }
      }

      setActiveSection(currentActive);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  return (
    <>
      {/* ── HEADER — selalu visible ── */}
      <header
        className={`font-dm fixed top-0 left-0 w-full z-60 transition-all duration-300 ${
          scrolled
            ? "backdrop-blur-xl border-b shadow-[0_4px_24px_rgba(0,0,0,0.4)]"
            : "backdrop-blur-md border-b border-transparent"
        }`}
        style={{
          background: scrolled
            ? "var(--header-scrolled-bg)"
            : "var(--header-default-bg)",
          borderColor: scrolled ? "var(--panel-border)" : "transparent",
          transition: "background 0.35s ease, border-color 0.35s ease",
        }}
      >
        <div className="mx-auto max-w-300 flex items-center justify-between px-6 h-16">
          {/* Logo */}
          <Link
            href="/#hero"
            className="font-dm font-extrabold text-xl no-underline tracking-[-0.03em] flex items-center"
            style={{ color: "var(--text-heading)" }}
          >
            <span className="text-brand-amber">{"<"}</span>
            Firmana
            <span className="text-brand-amber">{"/>"}</span>
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-brand-green shadow-[0_0_8px_#14b88c] ml-1 mb-3" />
          </Link>

          {/* Desktop Nav */}
          <nav
            className="hidden md:flex items-center gap-1 rounded-full p-1 border"
            style={{
              background: "var(--nav-pill-bg)",
              borderColor: "var(--nav-pill-border)",
            }}
          >
            {navLinks.map(({ label, href, id }) => {
              const isActive =
                activeSection === id ||
                (id === "projects" && pathname === "/projects");

              return (
                <Link
                  key={label}
                  href={href}
                  onClick={() => setActiveSection(id)}
                  className={`px-4.5 py-1.75 text-[13px] rounded-full tracking-[0.01em] whitespace-nowrap transition-all duration-300 no-underline border ${
                    isActive
                      ? "bg-[rgba(20,184,140,0.18)] border-[rgba(20,184,140,0.4)] shadow-[0_0_12px_rgba(20,184,140,0.2)] font-semibold"
                      : "border-transparent font-medium hover:bg-black/5 dark:hover:bg-white/8 hover:border-black/5 dark:hover:border-white/10"
                  }`}
                  style={{
                    color: isActive ? "var(--nav-text-active)" : "var(--nav-text-inactive)",
                  }}
                >
                  {label}
                </Link>
              );
            })}
          </nav>

          {/* Theme Toggle + Desktop CTA */}
          <div className="hidden md:flex items-center gap-2">
            {/* Theme Toggle Button */}
            <motion.button
              onClick={toggleTheme}
              aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
              className="relative w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 border"
              style={{
                background: "var(--nav-pill-bg)",
                borderColor: "var(--nav-pill-border)",
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <AnimatePresence mode="wait">
                {theme === "dark" ? (
                  <motion.svg
                    key="sun"
                    initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
                    animate={{ rotate: 0, opacity: 1, scale: 1 }}
                    exit={{ rotate: 90, opacity: 0, scale: 0.5 }}
                    transition={{ duration: 0.3 }}
                    width="16" height="16" viewBox="0 0 24 24" fill="none"
                    stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="5" />
                    <line x1="12" y1="1" x2="12" y2="3" />
                    <line x1="12" y1="21" x2="12" y2="23" />
                    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                    <line x1="1" y1="12" x2="3" y2="12" />
                    <line x1="21" y1="12" x2="23" y2="12" />
                    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                  </motion.svg>
                ) : (
                  <motion.svg
                    key="moon"
                    initial={{ rotate: 90, opacity: 0, scale: 0.5 }}
                    animate={{ rotate: 0, opacity: 1, scale: 1 }}
                    exit={{ rotate: -90, opacity: 0, scale: 0.5 }}
                    transition={{ duration: 0.3 }}
                    width="15" height="15" viewBox="0 0 24 24" fill="none"
                    stroke="#1c4645" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                  >
                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                  </motion.svg>
                )}
              </AnimatePresence>
            </motion.button>

            <Link
              href="#kontak"
              className="inline-flex items-center gap-2 px-5 py-2.25 rounded-full font-syne font-bold text-[13px] text-[#0a0a0a] no-underline hover:-translate-y-px transition-all duration-200 whitespace-nowrap"
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
          </div>

          {/* Hamburger — mobile only */}
          <button
            className="md:hidden flex flex-col justify-center items-center w-10 h-10 rounded-[10px] cursor-pointer gap-1.25 transition-colors duration-200 border"
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
              className={`block h-[1.5px] bg-[#f0faf8] rounded-sm transition-all duration-300 origin-center ${isOpen ? "w-4 translate-y-[6.5px] rotate-45" : "w-4.5"}`}
            />
            <span
              className={`block h-[1.5px] bg-[#f0faf8] rounded-sm transition-all duration-300 w-3.5 ${isOpen ? "opacity-0 scale-x-0" : "opacity-100"}`}
            />
            <span
              className={`block h-[1.5px] bg-[#f0faf8] rounded-sm transition-all duration-300 origin-center ${isOpen ? "w-4 -translate-y-[6.5px] -rotate-45" : "w-2.5"}`}
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
            <div className="absolute inset-0 bg-brand-dark/95 backdrop-blur-2xl" />

            {/* Content — padding top 80px supaya tidak tertimpa header */}
            <div className="relative z-10 flex flex-col h-full px-8 pt-20 pb-12">
              <nav className="flex flex-col mt-4">
                {navLinks.map(({ label, href, id }, i) => {
                  const isActive =
                    activeSection === id ||
                    (id === "projects" && pathname === "/projects");

                  return (
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
                        className={`font-syne text-[34px] font-bold no-underline tracking-[-0.03em] leading-[1.2] flex items-baseline justify-between py-3 border-b border-white/6 transition-colors duration-200 ${
                          isActive
                            ? "text-[#f59e0b]"
                            : "text-[rgba(200,230,220,0.35)] hover:text-[#f0faf8]"
                        }`}
                      >
                        <span>{label}</span>
                        <span
                          className={`text-[13px] font-syne font-normal ${
                            isActive ? "text-[#f59e0b]" : "text-brand-green"
                          }`}
                        >
                          0{i + 1}
                        </span>
                      </Link>
                    </motion.div>
                  );
                })}
              </nav>

              <motion.div
                className="mt-auto"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.35 }}
              >
                <Link
                  href="/#kontak"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center gap-2 w-full py-4 rounded-full font-syne font-bold text-[16px] text-[#0a0a0a] no-underline"
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
      className="absolute bottom-0 left-0 h-px w-full origin-left shadow-[0_0_6px_rgba(20,184,140,0.4)]"
      style={{
        scaleX: smoothProgress,
        background: "linear-gradient(90deg, #14b88c, #f59e0b)",
      }}
    />
  );
}
