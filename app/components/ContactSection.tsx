"use client";

import { motion } from "framer-motion";
import { FaGithub, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import {
  HiOutlineLocationMarker,
  HiOutlineAcademicCap,
  HiOutlineCode,
  HiOutlineUser,
  HiOutlineDownload,
  HiOutlineMail,
} from "react-icons/hi";

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

export default function ContactSection() {
  return (
    <section id="kontak" className="relative w-full py-32 bg-brand-dark overflow-x-hidden overflow-y-visible">
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
              fontFamily: "'Playfair Display', serif",
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

        {/* ── Main Grid: 2 columns ── */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 max-w-6xl mx-auto">

          {/* ── LEFT COLUMN (3/5): Profile Card + Info Grid ── */}
          <div className="lg:col-span-3 space-y-6">

            {/* Profile Card */}
            <motion.div
              className="relative rounded-3xl p-8 overflow-hidden"
              style={{
                background: "rgba(28,70,69,0.12)",
                border: "1px solid rgba(245,158,11,0.12)",
              }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              {/* Glassmorphism inner glow */}
              <div
                className="absolute top-0 right-0 w-60 h-60 rounded-full pointer-events-none"
                style={{
                  background: "radial-gradient(circle, rgba(245,158,11,0.06) 0%, transparent 70%)",
                  transform: "translate(30%, -30%)",
                }}
              />

              <div className="relative z-10 flex flex-col sm:flex-row gap-6 items-start">
                {/* Avatar placeholder */}
                <div className="flex-shrink-0">
                  <div
                    className="w-20 h-20 rounded-2xl flex items-center justify-center"
                    style={{
                      background: "linear-gradient(135deg, rgba(245,158,11,0.2), rgba(20,184,140,0.2))",
                      border: "1px solid rgba(245,158,11,0.25)",
                    }}
                  >
                    <HiOutlineUser className="w-9 h-9" style={{ color: "#f59e0b" }} />
                  </div>
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 mb-2 flex-wrap">
                    <h3
                      className="text-2xl font-extrabold"
                      style={{ color: "#f0ede6", fontFamily: "'Playfair Display', serif" }}
                    >
                      {personalInfo.name}
                    </h3>
                    {/* Availability badge */}
                    <span
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] uppercase tracking-[0.1em] font-medium"
                      style={{
                        background: "rgba(20,184,140,0.12)",
                        border: "1px solid rgba(20,184,140,0.3)",
                        color: "#14b88c",
                      }}
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#14b88c] shadow-[0_0_8px_#14b88c] animate-pulse" />
                      Open to work
                    </span>
                  </div>

                  <p className="text-sm font-medium mb-3" style={{ color: "#f59e0b" }}>
                    <HiOutlineCode className="inline w-4 h-4 mr-1.5 -mt-0.5" />
                    {personalInfo.role}
                  </p>

                  <p
                    className="text-sm leading-[1.8] font-light"
                    style={{ color: "#8fa8a7" }}
                  >
                    {personalInfo.bio}
                  </p>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-2 mt-5">
                    {techHighlights.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded-full text-[11px] font-medium transition-colors duration-200"
                        style={{
                          background: "rgba(255,255,255,0.04)",
                          border: "1px solid rgba(255,255,255,0.08)",
                          color: "#8fa8a7",
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Info Cards Grid */}
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 gap-3"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {infoCards.map((card) => {
                const Wrapper = card.href ? "a" : "div";
                const wrapperProps = card.href
                  ? {
                      href: card.href,
                      target: card.href.startsWith("http") ? "_blank" as const : undefined,
                      rel: card.href.startsWith("http") ? "noopener noreferrer" : undefined,
                    }
                  : {};

                return (
                  <motion.div key={card.label} variants={itemVariants}>
                    <Wrapper
                      {...wrapperProps}
                      className={`flex items-center gap-4 p-5 rounded-2xl transition-all duration-300 group ${
                        card.href ? "cursor-pointer" : "cursor-default"
                      }`}
                      style={{
                        background: "rgba(28,70,69,0.10)",
                        border: "1px solid rgba(245,158,11,0.08)",
                        textDecoration: "none",
                        display: "flex",
                      }}
                      onMouseEnter={(e: React.MouseEvent<HTMLElement>) => {
                        (e.currentTarget as HTMLElement).style.borderColor = "rgba(245,158,11,0.30)";
                        (e.currentTarget as HTMLElement).style.background = "rgba(28,70,69,0.20)";
                      }}
                      onMouseLeave={(e: React.MouseEvent<HTMLElement>) => {
                        (e.currentTarget as HTMLElement).style.borderColor = "rgba(245,158,11,0.08)";
                        (e.currentTarget as HTMLElement).style.background = "rgba(28,70,69,0.10)";
                      }}
                    >
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
                        style={{
                          background: "rgba(245,158,11,0.10)",
                          color: "#f59e0b",
                        }}
                      >
                        {card.icon}
                      </div>
                      <div className="min-w-0">
                        <p
                          className="text-[10px] uppercase tracking-[0.15em] font-medium mb-0.5"
                          style={{ color: "#5a7a79" }}
                        >
                          {card.label}
                        </p>
                        <p
                          className="text-sm font-medium truncate"
                          style={{ color: "#f0ede6" }}
                        >
                          {card.value}
                        </p>
                      </div>
                    </Wrapper>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 gap-3"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              {/* Email CTA */}
              <motion.a
                href={`mailto:${personalInfo.email}`}
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl font-bold text-[15px] tracking-[0.01em] transition-all duration-300 no-underline"
                style={{
                  background: "linear-gradient(135deg, #f59e0b, #e07820)",
                  color: "#0a0a0a",
                }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <HiOutlineMail className="w-5 h-5" />
                Kirim Email
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path
                    d="M1 7h12M8 2l5 5-5 5"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </motion.a>

              {/* Download CV */}
              <motion.a
                href={personalInfo.cvUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl font-semibold text-[15px] tracking-[0.01em] transition-all duration-300 no-underline"
                style={{
                  background: "transparent",
                  color: "#f0ede6",
                  border: "1px solid rgba(240,250,248,0.18)",
                }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(240,250,248,0.35)";
                  (e.currentTarget as HTMLAnchorElement).style.background = "rgba(240,250,248,0.06)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(240,250,248,0.18)";
                  (e.currentTarget as HTMLAnchorElement).style.background = "transparent";
                }}
              >
                <HiOutlineDownload className="w-5 h-5" />
                Download CV / Resume
              </motion.a>
            </motion.div>
          </div>

          {/* ── RIGHT COLUMN (2/5): Social + CTA ── */}
          <div className="lg:col-span-2 space-y-6">

            {/* Social Links */}
            <motion.div
              className="rounded-3xl p-7"
              style={{
                background: "rgba(28,70,69,0.12)",
                border: "1px solid rgba(245,158,11,0.12)",
              }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              <p
                className="text-[10px] uppercase tracking-[0.2em] font-medium mb-5"
                style={{ color: "#f59e0b" }}
              >
                Social Media
              </p>

              <div className="space-y-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-xl transition-all duration-300 group"
                    style={{
                      background: "rgba(255,255,255,0.02)",
                      border: "1px solid rgba(255,255,255,0.06)",
                      textDecoration: "none",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLAnchorElement).style.borderColor = social.color + "50";
                      (e.currentTarget as HTMLAnchorElement).style.background = social.color + "0A";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(255,255,255,0.06)";
                      (e.currentTarget as HTMLAnchorElement).style.background = "rgba(255,255,255,0.02)";
                    }}
                  >
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 text-lg transition-all duration-300 group-hover:scale-110"
                      style={{
                        background: social.color + "15",
                        color: social.color,
                      }}
                    >
                      {social.icon}
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-sm font-medium" style={{ color: "#f0ede6" }}>
                        {social.label}
                      </p>
                      <p className="text-xs truncate" style={{ color: "#5a7a79" }}>
                        {social.username}
                      </p>
                    </div>
                    <svg
                      className="w-4 h-4 flex-shrink-0 transition-transform duration-300 group-hover:translate-x-1"
                      style={{ color: "#5a7a79" }}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </a>
                ))}
              </div>
            </motion.div>

          </div>
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