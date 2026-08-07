"use client";

import { FaGithub, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";

export default function HeroSection() {
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  const cvFileUrl = "/FirmanaAmriSubekhi_Resume_ID.pdf";
  const openCvInWeb = () =>
    window.open(cvFileUrl, "_blank", "noopener,noreferrer");

  // Magnetic cursor effect
  const orbRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 80, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 80, damping: 20 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!orbRef.current) return;
      const rect = orbRef.current.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      mouseX.set((e.clientX - cx) * 0.08);
      mouseY.set((e.clientY - cy) * 0.08);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  // Typewriter
  useEffect(() => {
    const titles = ["Fullstack Developer", "Web Developer", "Problem Analyst"];
    const typeSpeed = isDeleting ? 50 : 100;
    const currentTitle = titles[currentTitleIndex];
    const timer = setTimeout(() => {
      if (!isDeleting && currentText === currentTitle) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && currentText === "") {
        setIsDeleting(false);
        setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
      } else {
        setCurrentText(
          currentTitle.substring(0, currentText.length + (isDeleting ? -1 : 1)),
        );
      }
    }, typeSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentTitleIndex]);

  const socialLinks = [
    {
      icon: <FaGithub />,
      href: "https://github.com/firmanaamri",
      label: "GitHub",
    },
    {
      icon: <FaLinkedin />,
      href: "https://linkedin.com/in/firmanaamri",
      label: "LinkedIn",
    },
    {
      icon: <FaWhatsapp />,
      href: "https://wa.me/6282136162717?text=Halo%20Firmana%2C%20saya%20ingin%20bekerja%20sama%20dengan%20Anda.",
      label: "WhatsApp",
    },
    {
      icon: <FaInstagram />,
      href: "https://instagram.com/firmana_fir",
      label: "Instagram",
    },
  ];

  const stats = [{ num: "Pemalang", label: "Asal Saya" }];

  return (
    <section className="font-(family-name:--font-dm) relative w-full min-h-screen overflow-hidden flex items-center bg-brand-dark">
      <div
        className="absolute -top-[20%] -left-[10%] w-150 h-150rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(20,184,140,0.12) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute -bottom-[10%] right-[5%] w-125 h-125 rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(245,158,11,0.08) 0%, transparent 70%)",
        }}
      />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(20,184,140,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(20,184,140,0.04) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Main grid */}
      <div className="relative z-10 mx-auto w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-15 px-6 lg:px-10 pt-25 pb-30 items-center">
        {/* ── LEFT ── */}
        <motion.div
          className="flex flex-col text-center md:text-left"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 self-center md:self-start mb-7 bg-[rgba(20,184,140,0.08)] border border-[rgba(20,184,140,0.25)] rounded-full px-4 py-1.5 text-[11px] font-medium text-brand-green uppercase tracking-[0.08em]">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-green shadow-[0_0_8px_#14b88c] animate-blink" />
            Available for work
          </div>

          {/* Name */}
          <motion.h1
            className="font-(family-name:--font-syne) text-[clamp(38px,5vw,64px)] font-extrabold text-[#f0faf8] leading-[1.05] tracking-[-0.02em] mb-1"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <span
              className="relative"
              style={{
                background:
                  "linear-gradient(135deg, #f59e0b 0%, #f0c060 50%, #e07820 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Firmana Amri
            </span>
            <br />
            Subekhi
          </motion.h1>

          {/* Typewriter */}
          <motion.div
            className="flex items-center gap-2 flex-wrap justify-center md:justify-start mt-4 text-[clamp(16px,2vw,20px)] text-[rgba(240,250,248,0.55)] font-light"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.25 }}
          >
            <span>I&apos;m a</span>
            <span className="font-(family-name:--font-syne) font-semibold text-brand-amber" style={{ minHeight: "1.2em" }}>
              {currentText}
            </span>
            <span className="inline-block w-0.5 h-[1em] bg-brand-amber rounded-[1px] align-middle animate-blink" />
          </motion.div>

          {/* Divider */}
          <div
            className="w-12 h-0.5 rounded-full my-5 self-center md:self-start"
            style={{
              background: "linear-gradient(90deg, #f59e0b, transparent)",
            }}
          />

          {/* Description */}
          <motion.p
            className="text-[15px] text-[rgba(200,230,220,0.65)] leading-[1.8] max-w-120 mb-9 font-light mx-auto md:mx-0"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35 }}
          >
            Fresh Graduate Teknik Informatika dengan pengalaman magang sebagai
            web developer. Memiliki kemampuan membangun aplikasi web fullstack
            menggunakan Laravel, MySQL, dan Tailwind CSS.
          </motion.p>

          {/* Buttons */}
          <motion.div
            className="flex flex-wrap gap-3 mb-9 justify-center md:justify-start"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45 }}
          >
            <a
              href="#kontak"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-full font-(family-name:--font-syne) font-bold text-[13px] tracking-[0.02em] text-[#0a0a0a] shadow-[0_4px_24px_rgba(245,158,11,0.25)] hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(245,158,11,0.38)] transition-all duration-250 cursor-pointer"
              style={{
                background: "linear-gradient(135deg, #f59e0b, #e07820)",
              }}
            >
              Contact Me
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path
                  d="M1 7h12M8 2l5 5-5 5"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
            <button
              type="button"
              onClick={openCvInWeb}
              className="inline-flex items-center gap-2 px-7 py-3 rounded-full font-(family-name:--font-syne) font-semibold text-[13px] tracking-[0.02em] text-[#f0faf8] bg-transparent border border-[rgba(240,250,248,0.18)] hover:bg-[rgba(240,250,248,0.06)] hover:border-[rgba(240,250,248,0.35)] hover:-translate-y-0.5 transition-all duration-250 cursor-pointer"
            >
              Download CV
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path
                  d="M7 1v8M3 9l4 4 4-4M1 13h12"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </motion.div>

          {/* Social icons */}
          <motion.div
            className="flex items-center gap-1 justify-center md:justify-start"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.55 }}
          >
            {socialLinks.map(({ icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex items-center justify-center w-10 h-10 rounded-lg text-[18px] text-[rgba(200,230,220,0.5)] hover:bg-[rgba(20,184,140,0.1)] hover:text-brand-green hover:-translate-y-0.5 transition-all duration-200"
              >
                {icon}
              </a>
            ))}
          </motion.div>

          {/* Stats */}
          <motion.div
            className="flex gap-8 pt-9 mt-9 border-t border-white/6 justify-center md:justify-start"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.65 }}
          >
            {stats.map(({ num, label }) => (
              <div key={label} className="text-center md:text-left">
                <div className="font-(family-name:--font-syne) text-2xl font-extrabold text-[#f0faf8] leading-none">
                  {num}
                </div>
                <div className="text-[11px] text-[rgba(200,230,220,0.4)] uppercase tracking-[0.08em] font-medium mt-1">
                  {label}
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* ── RIGHT ── */}
        <motion.div
          className="flex justify-center items-center relative order-first md:order-last"
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Rotating ring outer */}
          <motion.div
            className="absolute w-[320px] h-80 md:w-105 md:h-105 rounded-full border border-dashed border-[rgba(20,184,140,0.2)]"
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          >
            <span className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-brand-green shadow-[0_0_10px_#14b88c]" />
          </motion.div>

          {/* Rotating ring mid */}
          <motion.div
            className="absolute w-67.5 h-67.5 md:w-90 md:h-90 rounded-full border border-[rgba(245,158,11,0.12)]"
            animate={{ rotate: -360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-brand-amber shadow-[0_0_8px_#f59e0b]" />
          </motion.div>

          {/* Profile image */}
          <motion.div
            ref={orbRef}
            style={{ x: springX, y: springY }}
            className="relative z-10 w-55 h-55 md:w-70 md:h-70 rounded-full overflow-hidden border-[3px] border-[rgba(20,184,140,0.3)] shadow-[0_0_0_8px_rgba(20,184,140,0.06),0_0_60px_rgba(20,184,140,0.15),0_30px_80px_rgba(0,0,0,0.5)]"
          >
            <Image
              src="/formal.png"
              alt="Foto Profil Firmana"
              width={280}
              height={280}
              loading="eager"
              className="w-full h-full object-cover object-top block"
            />
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "linear-gradient(160deg, rgba(20,184,140,0.12) 0%, transparent 50%)",
              }}
            />
          </motion.div>

          {/* Floating tag — top left */}

          {/* Floating tag — bottom right */}
        </motion.div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 w-full leading-none z-10 pointer-events-none">
        <svg
          viewBox="0 0 1440 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className="w-full block h-20"
        >
          <path
            d="M0 80V40C240 0 480 80 720 40C960 0 1200 80 1440 40V80H0Z"
            fill="#ffffff"
          />
        </svg>
      </div>
    </section>
  );
}
