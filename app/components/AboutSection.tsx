"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export default function AboutSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = ["/candid.jpeg", "/POTO.jpeg", "/Firmana.png"];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [images.length]);

  const skills = [
    {
      title: "Logic",
      desc: "Arsitektur backend kokoh dengan Laravel, MySQL, dan alur data terstruktur.",
      iconBg: "rgba(20, 184, 140, 0.12)",
      icon: (
        <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: "var(--accent-amber-text)" }}>
          <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
        </svg>
      ),
    },
    {
      title: "Visual",
      desc: "Tampilan modern dengan Tailwind CSS dan pendekatan desain yang konsisten.",
      iconBg: "rgba(245,158,11,0.12)",
      icon: (
        <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: "var(--accent-amber-text)" }}>
          <path d="M12 20h9" /><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
        </svg>
      ),
    },
    {
      title: "Frontend",
      desc: "React, Next.js, dan animasi interaktif untuk pengalaman pengguna terbaik.",
      iconBg: "rgba(20, 184, 140, 0.12)",
      icon: (
        <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: "var(--accent-amber-text)" }}>
          <rect x="2" y="3" width="20" height="14" rx="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" />
        </svg>
      ),
    },
    {
      title: "Backend",
      desc: "API RESTful, database management, dan sistem scalable siap produksi.",
      iconBg: "rgba(245,158,11,0.12)",
      icon: (
        <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: "var(--accent-amber-text)" }}>
          <ellipse cx="12" cy="5" rx="9" ry="3" />
          <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
          <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
        </svg>
      ),
    },
  ];

  return (
    <section
      id="about"
      className="relative w-full overflow-hidden"
      style={{ background: "var(--bg-primary)", color: "var(--text-primary)", fontFamily: "var(--font-dm), sans-serif" }}
    >

      {/* Radial teal glows — matches section atmosphere */}
      <div className="absolute top-0 left-0 w-150 h-150 rounded-full pointer-events-none z-0"
        style={{ background: "radial-gradient(ellipse, var(--ambient-teal) 0%, transparent 70%)", transform: "translate(-30%, -30%)" }} />
      <div className="absolute bottom-0 right-0 w-125 h-125 rounded-full pointer-events-none z-0"
        style={{ background: "radial-gradient(ellipse, var(--ambient-teal) 0%, transparent 70%)", transform: "translate(20%, 20%)" }} />

      {/* Gold accent line */}
      <div className="absolute top-0 left-0 w-full h-px z-10"
        style={{ background: "linear-gradient(90deg, transparent, var(--accent-amber) 30%, var(--accent-amber) 70%, transparent)" }} />

      {/* Two-column grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen relative z-10">

        {/* ── LEFT: Image Panel ── */}
        <motion.div
          className="relative overflow-hidden"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <div className="relative w-full h-120 lg:h-full min-h-120 group"
            style={{ background: "var(--bg-primary)" }}>

            {/* ✦ Sparkle stars */}
            <motion.span className="absolute top-15 right-20 text-2xl z-20 pointer-events-none"
              style={{ color: "var(--accent-amber)" }}
              animate={{ opacity: [1, 0.3, 1], scale: [1, 0.6, 1] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}>✦</motion.span>
            <motion.span className="absolute bottom-20 right-10 text-xl z-20 pointer-events-none"
              style={{ color: "var(--accent-amber)" }}
              animate={{ opacity: [1, 0.3, 1], scale: [1, 0.6, 1] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}>✦</motion.span>

            {/* Slideshow */}
            <AnimatePresence>
              <motion.img
                key={currentIndex}
                src={images[currentIndex]}
                alt={`Photo ${currentIndex + 1}`}
                className="absolute inset-0 w-full h-full object-cover"
                style={{ filter: "grayscale(15%) contrast(1.05)" }}
                initial={{ opacity: 0, scale: 1.04 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
              />
            </AnimatePresence>

            {/* Right fade into bg (desktop) */}
            <div className="absolute inset-0 hidden lg:block pointer-events-none"
              style={{ background: "var(--about-img-fade-r)" }} />
            {/* Bottom fade (mobile) */}
            <div className="absolute bottom-0 left-0 right-0 h-2/5 pointer-events-none lg:hidden"
              style={{ background: "var(--about-img-fade-b)" }} />

            {/* Available badge */}
            <div className="absolute top-7 left-6 flex items-center gap-2 px-4 py-2 rounded-full z-20"
              style={{ background: "var(--about-bg-badge)", backdropFilter: "blur(10px)", border: "1px solid var(--panel-border)" }}>
              <motion.span className="w-1.5 h-1.5 rounded-full" style={{ background: "var(--accent-amber)" }}
                animate={{ opacity: [1, 0.3, 1], scale: [1, 0.6, 1] }}
                transition={{ duration: 2, repeat: Infinity }} />
              <span className="text-[10px] uppercase tracking-[0.15em] font-semibold"
                style={{ color: "var(--accent-amber-text)" }}>Available for work</span>
            </div>

            {/* Slide indicator dots */}
            <div className="absolute bottom-7 left-6 flex gap-1.5 items-center z-20">
              {images.map((_, i) => (
                <button key={i} onClick={() => setCurrentIndex(i)}
                  className="h-0.5 rounded-full transition-all duration-300 border-none outline-none p-0 cursor-pointer"
                  style={{
                    width: i === currentIndex ? "36px" : "18px",
                    background: i === currentIndex ? "var(--accent-amber)" : "var(--panel-border)",
                  }} />
              ))}
            </div>
          </div>
        </motion.div>

        {/* ── RIGHT: Content Panel ── */}
        <motion.div
          className="flex flex-col justify-center gap-9 px-8 sm:px-12 lg:px-16 py-20 lg:py-24"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          {/* Section label */}
          <div className="flex items-center gap-4">
            <span className="w-9 h-px" style={{ background: "var(--accent-amber)" }} />
            <span className="text-[10px] uppercase tracking-[0.25em] font-semibold"
              style={{ color: "var(--accent-amber-text)" }}>Discovery — About</span>
          </div>

          {/* Heading */}
          <div>
            <h2 className="leading-[1.05] mb-3"
              style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif", fontSize: "clamp(38px, 4.5vw, 52px)", fontWeight: 900, color: "var(--text-heading)" }}>
              Firmana<br />
              <span style={{ color: "var(--accent-amber-text)", fontStyle: "italic" }}>Amri Subekhi.</span>
            </h2>
            <span className="inline-block text-[11px] uppercase tracking-[0.18em] px-4 py-1.5 rounded-full font-medium"
              style={{ color: "var(--text-muted2)", border: "1px solid var(--panel-border)", background: "var(--chip-bg)" }}>
              Fullstack Developer
            </span>
          </div>

          {/* Bio text */}
          <p className="text-base leading-[1.85] font-light max-w-100 text-justify" style={{ color: "var(--text-muted2)" }}>
            Saya <strong style={{ color: "var(--text-heading)", fontWeight: 600 }}>Firmana Amri Subekhi</strong>,
            seorang <strong style={{ color: "var(--text-heading)", fontWeight: 600 }}>Fullstack Developer</strong>{" "}
            yang fokus membangun pengalaman digital yang fungsional dan menarik. Dengan latar belakang yang kuat di{" "}
            <strong style={{ color: "var(--text-heading)", fontWeight: 600 }}>Laravel</strong> dan{" "}
            <strong style={{ color: "var(--text-heading)", fontWeight: 600 }}>React</strong>, saya menggabungkan logika backend yang kokoh dengan desain frontend yang modern.
          </p>

          {/* Amber divider */}
          <div className="w-full h-px" style={{ background: "var(--panel-border)" }} />

          {/* Skill cards */}
          <div className="grid grid-cols-2 gap-3.5">
            {skills.map((s) => (
              <div key={s.title}
                className="p-5 rounded-2xl cursor-default transition-all duration-300"
                style={{ border: "1px solid var(--panel-border)", background: "var(--panel-bg)", boxShadow: "0 4px 20px -6px var(--card-shadow)" }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLDivElement).style.borderColor = "var(--panel-border-hover)";
                  (e.currentTarget as HTMLDivElement).style.background = "var(--panel-bg-hover)";
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLDivElement).style.borderColor = "var(--panel-border)";
                  (e.currentTarget as HTMLDivElement).style.background = "var(--panel-bg)";
                }}
              >
                <div className="w-9.5 h-9.5 rounded-[10px] flex items-center justify-center mb-3"
                  style={{ background: s.iconBg }}>{s.icon}</div>
                <p className="text-[13.5px] font-semibold mb-1.5 tracking-[0.02em]"
                  style={{ color: "var(--text-heading)" }}>{s.title}</p>
                <p className="text-[12px] leading-relaxed" style={{ color: "var(--text-muted)" }}>{s.desc}</p>
              </div>
            ))}
          </div>

          {/* Bottom: stats + CTA */}
          <div className="flex items-center justify-between">


            
          </div>
        </motion.div>
      </div>
    </section>
  );
}