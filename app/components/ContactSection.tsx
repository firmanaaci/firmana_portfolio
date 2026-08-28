"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { FaGithub, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import {
  HiOutlineLocationMarker,
  HiOutlineAcademicCap,
  HiOutlineCode,
  HiOutlineUser,
  HiOutlineDownload,
  HiOutlineMail,
  HiOutlinePaperAirplane,
  HiOutlineCheckCircle,
  HiOutlineExclamationCircle,
} from "react-icons/hi";

// ── EmailJS Config ──────────────────────────────────────────────────────────
// Daftar di https://www.emailjs.com/, buat service + template, lalu isi di bawah:
const EMAILJS_SERVICE_ID  = "service_fuvq6wz";   
const EMAILJS_TEMPLATE_ID = "template_u7oaeca";  
const EMAILJS_PUBLIC_KEY  = "HVATWMXtgn7eC8D_s";   
// ───────────────────────────────────────────────────────────────────────────

// Inisialisasi EmailJS sekali di module level
emailjs.init({ publicKey: EMAILJS_PUBLIC_KEY });

// ── Theme tokens ────────────────────────────────────────────────────────────
// Palet warna bawaan (teal / ivory / gold) dikumpulkan di satu tempat supaya
// konsisten dan gampang diubah tanpa harus berburu ke setiap komponen.
const palette = {
  panelBg: "rgba(28,70,69,0.12)",
  panelBgHover: "rgba(28,70,69,0.20)",
  panelBorder: "rgba(245,158,11,0.12)",
  panelBorderHover: "rgba(245,158,11,0.30)",
  ivory: "#f0ede6",
  gold: "#f59e0b",
  goldDeep: "#e07820",
  teal: "#14b88c",
  tealDeep: "#0d9e78",
  danger: "#ef4444",
  dangerDeep: "#dc2626",
} as const;

// Panel besar (profile card, social card, contact form) — satu class dipakai
// bersama supaya bentuk, warna, dan efek hover-nya selalu konsisten.
const panelClass =
  "rounded-3xl bg-[rgba(28,70,69,0.12)] border border-[rgba(245,158,11,0.12)] " +
  "transition-all duration-300 ease-out hover:-translate-y-1 " +
  "hover:bg-[rgba(28,70,69,0.20)] hover:border-[rgba(245,158,11,0.30)] " +
  "hover:shadow-[0_24px_60px_-28px_rgba(0,0,0,0.55)]";

const panelEyebrowClass = "text-[10px] uppercase tracking-[0.2em] font-medium mb-5 text-[#f59e0b]";

// Kartu info kecil (Lokasi, Pendidikan)
const infoCardClass =
  "flex items-center gap-4 p-5 rounded-2xl transition-all duration-300 ease-out group " +
  "bg-[rgba(28,70,69,0.10)] border border-[rgba(245,158,11,0.08)] " +
  "hover:-translate-y-0.5 hover:bg-[rgba(28,70,69,0.20)] hover:border-[rgba(245,158,11,0.30)] " +
  "hover:shadow-[0_16px_40px_-20px_rgba(0,0,0,0.5)] " +
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f59e0b]/50";

// Field form (nama / email / pesan) — border & background jadi CSS murni
// (focus:) jadi tidak perlu lagi handler onFocus/onBlur manual.
const fieldClass =
  "w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-300 " +
  "bg-[rgba(255,255,255,0.04)] text-[#f0ede6] border border-[rgba(255,255,255,0.08)] " +
  "placeholder:text-[rgba(240,237,230,0.35)] " +
  "focus:border-[rgba(245,158,11,0.40)] focus:bg-[rgba(255,255,255,0.06)] " +
  "focus-visible:ring-2 focus-visible:ring-[#f59e0b]/30";

const fieldLabelClass = "block text-[11px] uppercase tracking-[0.15em] font-medium mb-2 text-[#5a7a79]";

const ctaFocusRing =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f59e0b] " +
  "focus-visible:ring-offset-2 focus-visible:ring-offset-[#050d0c]";

const personalInfo = {
  name: "Firmana Amri Subekhi",
  role: "Fullstack Developer",
  email: "firmanaamri@gmail.com",
  phone: "+62 821-3616-2717",
  whatsapp: "6282136162717",
  location: "Pemalang, Jawa Tengah, Indonesia",
  education: "S1 Teknik Informatika",
  status: "Fresh Graduate",
  cvUrl: "/FirmanaAmriSubekhi_Resume_ID.pdf",
  bio: "Seorang Fullstack Developer yang fokus membangun pengalaman digital yang fungsional dan menarik. Dengan latar belakang yang kuat di Laravel dan React, saya menggabungkan logika backend yang kokoh dengan desain frontend yang modern.",
};

const socialLinks = [
  {
    icon: <FaGithub />,
    href: "https://github.com/firmanaamri",
    label: "GitHub",
    username: "@firmanaamri",
    color: "#f0ede6",
  },
  {
    icon: <FaLinkedin />,
    href: "https://linkedin.com/in/firmanaamri",
    label: "LinkedIn",
    username: "firmanaamri",
    color: "#0A66C2",
  },
  {
    icon: <FaWhatsapp />,
    href: `https://wa.me/${personalInfo.whatsapp}?text=Halo%20Firmana%2C%20saya%20ingin%20bekerja%20sama%20dengan%20Anda.`,
    label: "WhatsApp",
    username: personalInfo.phone,
    color: "#25D366",
  },
  {
    icon: <FaInstagram />,
    href: "https://instagram.com/firmana_fir",
    label: "Instagram",
    username: "@firmana_fir",
    color: "#E4405F",
  },
];

const infoCards: { icon: React.ReactNode; label: string; value: string; href: string | null }[] = [
  {
    icon: <HiOutlineLocationMarker className="w-5 h-5" />,
    label: "Lokasi",
    value: personalInfo.location,
    href: null,
  },
  {
    icon: <HiOutlineAcademicCap className="w-5 h-5" />,
    label: "Pendidikan",
    value: personalInfo.education,
    href: null,
  },
];

const techHighlights = [
  "Laravel",
  "React.js",
  "Next.js",
  "PHP",
  "MySQL",
  "Tailwind CSS",
  "Python",
  "PostgreSQL",
  "Git",
  "REST API",
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

type SendStatus = "idle" | "sending" | "success" | "error";

export default function ContactSection() {
  const formRef = useRef<HTMLFormElement>(null);
  const [sendStatus, setSendStatus] = useState<SendStatus>("idle");
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSendStatus("sending");

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
          title: "Portfolio Contact",
          time: new Date().toLocaleString("id-ID", { dateStyle: "full", timeStyle: "short" }),
        }
      );
      setSendStatus("success");
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setSendStatus("idle"), 4000);
    } catch (err) {
      console.error("EmailJS error:", err);
      setSendStatus("error");
      setTimeout(() => setSendStatus("idle"), 4000);
    }
  };

  return (
    <section id="kontak" className="relative w-full py-32 bg-brand-dark overflow-hidden">
      {/* LENGKUNGAN ATAS (CURVE UP) + STACKED SHADOW */}
      <div className="absolute bottom-full left-0 w-full leading-none z-20 pointer-events-none">
        <svg
          viewBox="0 0 1440 120"
          className="w-full block h-10 md:h-25 overflow-visible"
          preserveAspectRatio="none"
          style={{
            filter: `
              drop-shadow(0px -10px 8px rgba(0, 0, 0, 0.08)) 
              drop-shadow(0px -25px 20px rgba(0, 0, 0, 0.06)) 
              drop-shadow(0px -45px 40px rgba(0, 0, 0, 0.03))
            `,
          }}
        >
          <path d="M0,120 C480,0 960,0 1440,120 Z" fill="#050d0c" />
        </svg>
      </div>

      {/* Ambient glows */}
      <div
        className="pointer-events-none absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full"
        style={{ background: "radial-gradient(ellipse, rgba(20,184,140,0.10) 0%, transparent 70%)" }}
      />
      <div
        className="pointer-events-none absolute -bottom-40 -right-40 w-[450px] h-[450px] rounded-full"
        style={{ background: "radial-gradient(ellipse, rgba(245,158,11,0.06) 0%, transparent 70%)" }}
      />

      {/* Gold top rule */}
      <div
        className="absolute top-0 left-0 w-full h-px"
        style={{ background: "linear-gradient(90deg, transparent, #f59e0b 30%, #f59e0b 70%, transparent)" }}
      />

      <div className="container mx-auto px-6 lg:px-16 relative z-10">

        {/* ── Section Header ── */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="w-9 h-px" style={{ background: "#f59e0b" }} />
            <span
              className="text-[10px] uppercase tracking-[0.25em] font-medium"
              style={{ color: "#f59e0b" }}
            >
              Connect — Contact
            </span>
            <span className="w-9 h-px" style={{ background: "#f59e0b" }} />
          </div>
          <h2
            className="leading-tight mb-4"
            style={{
              fontFamily: "var(--font-playfair), 'Playfair Display', serif",
              fontSize: "clamp(36px, 4.5vw, 54px)",
              fontWeight: 900,
              color: "#f0ede6",
            }}
          >
            Get In{" "}
            <span style={{ color: "#f59e0b", fontStyle: "italic" }}>Touch</span>
          </h2>
          <p
            className="max-w-2xl mx-auto text-base font-light leading-relaxed"
            style={{ color: "#5a7a79" }}
          >
            Saya selalu terbuka untuk mendiskusikan proyek baru, ide kreatif,
            atau peluang kerja sama. Berikut informasi lengkap tentang saya.
          </p>
        </motion.div>

        {/* ── Main Grid: 3 kolom sejajar ── */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">

          {/* ══ KOLOM 1: Profile Card ══ */}
          <motion.div
            className={`relative p-7 overflow-hidden flex flex-col ${panelClass}`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            {/* Inner glow */}
            <div
              className="absolute top-0 right-0 w-52 h-52 rounded-full pointer-events-none"
              style={{
                background: "radial-gradient(circle, rgba(245,158,11,0.07) 0%, transparent 70%)",
                transform: "translate(30%, -30%)",
              }}
            />

            <div className="relative z-10 flex flex-col h-full">
              {/* Avatar + name */}
              <div className="flex items-center gap-4 mb-5">
                <div
                  className="w-16 h-16 rounded-2xl flex-shrink-0 flex items-center justify-center"
                  style={{
                    background: "linear-gradient(135deg, rgba(245,158,11,0.2), rgba(20,184,140,0.2))",
                    border: "1px solid rgba(245,158,11,0.25)",
                  }}
                >
                  <HiOutlineUser className="w-8 h-8" style={{ color: "#f59e0b" }} />
                </div>
                <div className="min-w-0">
                  <h3
                    className="text-lg font-extrabold leading-tight"
                    style={{ color: "#f0ede6", fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}
                  >
                    {personalInfo.name}
                  </h3>
                  <p className="text-xs font-medium mt-0.5 flex items-center gap-1" style={{ color: "#f59e0b" }}>
                    <HiOutlineCode className="w-3.5 h-3.5 flex-shrink-0" />
                    {personalInfo.role}
                  </p>
                </div>
              </div>

              {/* Badge */}
              <span
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[10px] uppercase tracking-[0.12em] font-medium mb-5 self-start"
                style={{
                  background: "rgba(20,184,140,0.12)",
                  border: "1px solid rgba(20,184,140,0.3)",
                  color: "#14b88c",
                }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#14b88c] shadow-[0_0_8px_#14b88c] animate-pulse" />
                Open to work
              </span>

              {/* Bio */}
              <p className="text-sm leading-[1.8] font-light flex-1" style={{ color: "#8fa8a7" }}>
                {personalInfo.bio}
              </p>

              {/* Tech Tags */}
              <div className="flex flex-wrap gap-1.5 mt-5">
                {techHighlights.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded-full text-[10px] font-medium transition-colors duration-200 bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.08)] text-[#8fa8a7] hover:border-[rgba(245,158,11,0.35)] hover:text-[#f0ede6]"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Info chips */}
              <div className="mt-5 space-y-2.5">
                {infoCards.map((card) => (
                  <div
                    key={card.label}
                    className="flex items-center gap-3 px-4 py-2.5 rounded-xl"
                    style={{
                      background: "rgba(255,255,255,0.03)",
                      border: "1px solid rgba(255,255,255,0.06)",
                    }}
                  >
                    <span className="text-[#f59e0b] flex-shrink-0">{card.icon}</span>
                    <span className="text-xs text-[#8fa8a7] truncate">{card.value}</span>
                  </div>
                ))}
              </div>

              {/* Download CV */}
              <motion.a
                href={personalInfo.cvUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-5 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-semibold text-[13px] transition-all duration-300 no-underline bg-transparent text-[#f0ede6] border border-[rgba(240,250,248,0.18)] hover:border-[rgba(240,250,248,0.35)] hover:bg-[rgba(240,250,248,0.06)] ${ctaFocusRing}`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <HiOutlineDownload className="w-4 h-4" />
                Download CV
              </motion.a>
            </div>
          </motion.div>

          {/* ══ KOLOM 2: Social Links ══ */}
          <motion.div
            className={`p-7 flex flex-col ${panelClass}`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <p className={panelEyebrowClass}>Social Media</p>

            <div className="space-y-3 flex-1">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl transition-all duration-300 group no-underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f59e0b]/40"
                  style={{
                    background: "rgba(255,255,255,0.02)",
                    border: "1px solid rgba(255,255,255,0.06)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = social.color + "50";
                    e.currentTarget.style.background = social.color + "0A";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)";
                    e.currentTarget.style.background = "rgba(255,255,255,0.02)";
                  }}
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 text-lg transition-all duration-300 group-hover:scale-110"
                    style={{ background: social.color + "15", color: social.color }}
                  >
                    {social.icon}
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-medium" style={{ color: "#f0ede6" }}>{social.label}</p>
                    <p className="text-xs truncate" style={{ color: "#5a7a79" }}>{social.username}</p>
                  </div>
                  <svg
                    className="w-4 h-4 flex-shrink-0 transition-transform duration-300 group-hover:translate-x-1"
                    style={{ color: "#5a7a79" }}
                    fill="none" viewBox="0 0 24 24" stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              ))}
            </div>
          </motion.div>

          {/* ══ KOLOM 3: Form Kirim Pesan ══ */}
          <motion.div
            className={`p-7 flex flex-col ${panelClass}`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <p className={panelEyebrowClass}>Kirim Pesan</p>

            <form ref={formRef} onSubmit={handleSubmit} className="space-y-3.5 flex flex-col flex-1">
              {/* Name */}
              <div>
                <label htmlFor="contact-name" className={fieldLabelClass}>Nama</label>
                <input
                  id="contact-name"
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Nama lengkap kamu"
                  className={fieldClass}
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="contact-email" className={fieldLabelClass}>Email</label>
                <input
                  id="contact-email"
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="email@kamu.com"
                  className={fieldClass}
                />
              </div>

              {/* Message — flex-1 agar mengisi ruang tersisa */}
              <div className="flex flex-col flex-1">
                <label htmlFor="contact-message" className={fieldLabelClass}>Pesan</label>
                <textarea
                  id="contact-message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Halo Firmana, saya ingin..."
                  className={`${fieldClass} resize-none flex-1`}
                />
              </div>

              {/* Submit */}
              <motion.button
                id="contact-submit"
                type="submit"
                disabled={sendStatus === "sending" || sendStatus === "success"}
                className={`w-full flex items-center justify-center gap-2.5 py-3 rounded-xl font-semibold text-[13px] tracking-[0.02em] transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed hover:shadow-[0_14px_30px_-12px_rgba(245,158,11,0.5)] ${ctaFocusRing}`}
                style={{
                  background:
                    sendStatus === "success"
                      ? `linear-gradient(135deg, ${palette.teal}, ${palette.tealDeep})`
                      : sendStatus === "error"
                      ? `linear-gradient(135deg, ${palette.danger}, ${palette.dangerDeep})`
                      : `linear-gradient(135deg, ${palette.gold}, ${palette.goldDeep})`,
                  color: "#0a0a0a",
                }}
                whileHover={sendStatus === "idle" ? { scale: 1.02 } : {}}
                whileTap={sendStatus === "idle" ? { scale: 0.98 } : {}}
              >
                <AnimatePresence mode="wait">
                  {sendStatus === "idle" && (
                    <motion.span key="idle" className="flex items-center gap-2"
                      initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -6 }} transition={{ duration: 0.2 }}>
                      <HiOutlinePaperAirplane className="w-4 h-4 -rotate-45" />
                      Kirim Pesan
                    </motion.span>
                  )}
                  {sendStatus === "sending" && (
                    <motion.span key="sending" className="flex items-center gap-2"
                      initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -6 }} transition={{ duration: 0.2 }}>
                      <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      Mengirim...
                    </motion.span>
                  )}
                  {sendStatus === "success" && (
                    <motion.span key="success" className="flex items-center gap-2"
                      initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -6 }} transition={{ duration: 0.2 }}>
                      <HiOutlineCheckCircle className="w-4 h-4" />
                      Pesan Terkirim!
                    </motion.span>
                  )}
                  {sendStatus === "error" && (
                    <motion.span key="error" className="flex items-center gap-2"
                      initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -6 }} transition={{ duration: 0.2 }}>
                      <HiOutlineExclamationCircle className="w-4 h-4" />
                      Gagal, coba lagi
                    </motion.span>
                  )}
                </AnimatePresence>
              </motion.button>

              {/* Error note */}
              <AnimatePresence>
                {sendStatus === "error" && (
                  <motion.p
                    initial={{ opacity: 0, y: -4 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                    className="text-xs text-center" style={{ color: "#ef4444" }}
                  >
                    Pastikan EmailJS sudah dikonfigurasi dengan benar.
                  </motion.p>
                )}
              </AnimatePresence>
            </form>
          </motion.div>

        </div>

        {/* ── Bottom Quote ── */}
        <motion.div
          className="text-center mt-20 max-w-xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <div
            className="w-12 h-px mx-auto mb-6"
            style={{ background: "linear-gradient(90deg, transparent, #f59e0b, transparent)" }}
          />
          <p
            className="text-base italic font-light leading-relaxed"
            style={{ color: "#5a7a79" }}
          >
            &ldquo;Mari berkolaborasi dan wujudkan ide digital Anda menjadi kenyataan.&rdquo;
          </p>
          <p className="text-sm mt-3 font-medium" style={{ color: "#f59e0b" }}>
            — {personalInfo.name}
          </p>
        </motion.div>
      </div>
    </section>
  );
}