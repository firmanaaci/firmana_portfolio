"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// ✏️  EDIT DI SINI — 4 proyek pilihan kamu
//
//  image  → taruh file screenshot di /public, lalu isi
//           misal: "/screenshot-arsip.png"
//           Biarkan "" jika belum ada gambar.
//
//  live   → link demo/deploy (hapus baris jika tidak ada)
//
//  tag    → "Web App" | "AI" | "Mobile" | "Portfolio"
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
type Project = {
  title: string;
  description: string;
  techStack: string[];
  url: string;
  live?: string;
  image: string;
  tag: string;
};

const PROJECTS: Project[] = [
  {
    title: "Resume ATS Maker",
    description:
      "Aplikasi berbasis AI yang membantu membuat resume teroptimasi agar lolos sistem ATS (Applicant Tracking System) secara otomatis menggunakan model AI Groq.",
    techStack: ["Laravel", "PHP", "Groq AI", "PostgreSQL"],
    url: "https://github.com/firmanaamri/ResumeATSMaker",
    image: "/ats.png",          // ← ganti dengan "/resume-maker.png" setelah upload screenshot
    tag: "AI",
  },
  {
    title: "Toko Bangunan",
    description:
      "Sistem Manajemen Inventaris berbasis web untuk pencatatan stok barang, transaksi penjualan, dan pelaporan toko bangunan secara digital.",
    techStack: ["PHP", "MySQL", "Tailwind CSS", "Laravel"],
    url: "https://github.com/firmanaamri/TokoBangunan",
    image: "/TB.png",          // ← ganti dengan "/toko-bangunan.png"
    tag: "Web App",
  },
  {
    title: "Arsip Surat Kemenag",
    description:
      "Aplikasi web Arsiparis Surat untuk tata kelola surat masuk & keluar di Kementerian Agama Kota Surakarta. Dibangun selama masa Praktek Kerja Nyata (PKN).",
    techStack: ["Laravel", "PHP", "MySQL", "Blade"],
    url: "https://github.com/firmanaamri/ArsipSuratKemenagSka",
    image: "/nag.png",          // ← ganti dengan "/arsip-kemenag.png"
    tag: "Web App",
  },
  {
    title: "Porto Annebilla",
    description:
      "Website portofolio personal yang dibangun untuk Annebilla — menampilkan karya, pengalaman, dan profil secara elegan dengan desain modern.",
    techStack: ["Next.js", "Tailwind CSS", "TypeScript"],
    url: "https://github.com/firmanaamri/portoannebilla",  // ← sesuaikan jika nama repo berbeda
    image: "/anne.png",          // ← ganti dengan "/porto-annebilla.png"
    tag: "Portfolio",
  },
];
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

const TAG_STYLE: Record<string, { bg: string; color: string }> = {
  "AI":         { bg: "rgba(245,158,11,0.15)", color: "#f59e0b" },
  "Web App":    { bg: "rgba(20,184,140,0.12)", color: "#14b88c" },
  "Portfolio":  { bg: "rgba(139,92,246,0.12)", color: "#a78bfa" },
  "Mobile":     { bg: "rgba(99,102,241,0.12)", color: "#818cf8" },
};

const PLACEHOLDER_ICON: Record<string, string> = {
  "AI": "🤖", "Web App": "💻", "Portfolio": "🎨", "Mobile": "📱",
};

export default function ProjectsPageClient() {
  return (
    <section
      className="relative min-h-screen w-full overflow-hidden py-20 px-6 lg:px-16"
    >

      {/* Glows */}
      <div className="pointer-events-none absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full"
        style={{ background: "radial-gradient(ellipse, rgba(20,184,140,0.10) 0%, transparent 70%)" }} />
      <div className="pointer-events-none absolute -bottom-40 -right-40 w-[450px] h-[450px] rounded-full"
        style={{ background: "radial-gradient(ellipse, rgba(245,158,11,0.07) 0%, transparent 70%)" }} />

      {/* Gold top rule */}
      <div className="absolute top-0 left-0 w-full h-px"
        style={{ background: "linear-gradient(90deg, transparent, #f59e0b 30%, #f59e0b 70%, transparent)" }} />

      <div className="max-w-6xl mx-auto relative z-10">

        {/* Header */}
        <motion.div
          className="mb-14"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-sm mb-6 no-underline transition-colors hover:opacity-80"
            style={{ color: "#5a7a79" }}
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M10 12L6 8l4-4" stroke="currentColor" strokeWidth="1.8"
                strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Kembali ke Portofolio
          </Link>

          <div className="flex items-center gap-4 mb-4">
            <span className="w-9 h-px" style={{ background: "#f59e0b" }} />
            <span className="text-[10px] uppercase tracking-[0.25em] font-medium" style={{ color: "#f59e0b" }}>
              Featured Projects
            </span>
          </div>

          <h1
            className="mb-3 leading-tight"
            style={{
              fontFamily: "var(--font-playfair), 'Playfair Display', serif",
              fontSize: "clamp(32px, 5vw, 56px)",
              fontWeight: 900,
            }}
          >
            Proyek{" "}
            <span style={{ color: "#f59e0b", fontStyle: "italic" }}>Pilihan</span>{" "}
            Saya
          </h1>
          <p className="text-base font-light max-w-lg" style={{ color: "#5a7a79" }}>
            Empat proyek terbaik yang saya kerjakan — dari sistem informasi hingga aplikasi berbasis AI.
          </p>
        </motion.div>

        {/* Grid 2 kolom */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
        >
          {PROJECTS.map((project, index) => {
            const tagStyle = TAG_STYLE[project.tag] ?? TAG_STYLE["Web App"];
            const placeholderIcon = PLACEHOLDER_ICON[project.tag] ?? "💻";

            return (
              <motion.div
                key={project.title}
                className="group flex flex-col rounded-2xl overflow-hidden transition-all duration-300"
                style={{
                  background: "rgba(28,70,69,0.08)",
                  border: "1px solid rgba(245,158,11,0.08)",
                }}
                variants={{
                  hidden:  { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                }}
                whileHover={{
                  y: -5,
                  borderColor: "rgba(245,158,11,0.30)",
                  backgroundColor: "rgba(28,70,69,0.18)",
                }}
              >
                {/* ── Thumbnail ── */}
                <div className="relative w-full h-52 overflow-hidden flex-shrink-0"
                  style={{ background: "rgba(28,70,69,0.15)" }}>
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={`Screenshot ${project.title}`}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  ) : (
                    <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
                      <div
                        className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl"
                        style={{ background: tagStyle.bg }}
                      >
                        {placeholderIcon}
                      </div>
                      <span className="text-xs font-medium" style={{ color: "#3a5a59" }}>
                        Screenshot segera hadir
                      </span>
                    </div>
                  )}

                  {/* Overlay gradien bawah */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050d0c]/40 to-transparent pointer-events-none" />

                  {/* Nomor & Tag */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                    {/* Tag */}
                    <span
                      className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest"
                      style={{
                        background: "rgba(5,13,12,0.7)",
                        backdropFilter: "blur(8px)",
                        border: `1px solid ${tagStyle.color}40`,
                        color: tagStyle.color,
                      }}
                    >
                      {project.tag}
                    </span>
                    {/* Index number */}
                    <span
                      className="text-xs font-mono font-bold px-2.5 py-1 rounded-lg"
                      style={{ background: "rgba(5,13,12,0.7)", color: "#3a5a59", backdropFilter: "blur(8px)" }}
                    >
                      0{index + 1}
                    </span>
                  </div>
                </div>

                {/* ── Konten ── */}
                <div className="flex flex-col flex-grow p-6">
                  {/* Judul */}
                  <div className="flex items-start justify-between gap-2 mb-3">
                    <h2
                      className="text-lg font-bold leading-snug transition-colors duration-200 group-hover:text-amber-400"
                      style={{ color: "#f0ede6" }}
                    >
                      {project.title}
                    </h2>
                  </div>

                  {/* Deskripsi */}
                  <p className="text-sm leading-relaxed mb-5 flex-grow line-clamp-3" style={{ color: "#5a7a79" }}>
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-lg text-[11px] font-medium"
                        style={{
                          background: "rgba(255,255,255,0.05)",
                          border: "1px solid rgba(245,158,11,0.12)",
                          color: "#8fa8a7",
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Buttons */}
                  <div className="flex items-center gap-3 pt-4"
                    style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}>
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold no-underline transition-all duration-200"
                      style={{
                        background: "rgba(245,158,11,0.10)",
                        border: "1px solid rgba(245,158,11,0.25)",
                        color: "#f59e0b",
                      }}
                    >
                      {/* GitHub icon */}
                      <svg viewBox="0 0 16 16" width="13" height="13" fill="currentColor">
                        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8Z"/>
                      </svg>
                      GitHub
                    </a>

                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold no-underline transition-all duration-200"
                        style={{
                          background: "rgba(20,184,140,0.10)",
                          border: "1px solid rgba(20,184,140,0.25)",
                          color: "#14b88c",
                        }}
                      >
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                          <path d="M2 6h8M6 2l4 4-4 4" stroke="currentColor" strokeWidth="1.6"
                            strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Footer CTA ke GitHub */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <a
            href="https://github.com/firmanaamri?tab=repositories"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold no-underline transition-all duration-300 hover:-translate-y-0.5"
            style={{
              border:     "1px solid rgba(245,158,11,0.3)",
              color:      "#f59e0b",
              background: "rgba(245,158,11,0.05)",
            }}
          >
            Lihat semua repositori di GitHub
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M1 7h12M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.8"
                strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
