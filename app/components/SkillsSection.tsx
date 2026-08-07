"use client";

import { motion, type Variants } from "framer-motion";
import { useState } from "react";
import Image from "next/image";

// Simple Icons CDN
const si = (slug: string, color = "f0ede6") =>
  `https://cdn.simpleicons.org/${slug}/${color}`;

// Devicons CDN (colored SVGs — fallback for icons not on Simple Icons)
const di = (name: string, variant = "original") =>
  `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${name}/${name}-${variant}.svg`;

type Skill = { name: string; level: number; iconUrl: string };
type Category = { label: string; iconUrl: string; skills: Skill[] };

const categories: Category[] = [
  {
    label: "Frontend",
    iconUrl: si("react", "61DAFB"),
    skills: [
      { name: "React.js",     level: 85, iconUrl: si("react",       "61DAFB") },
      { name: "Next.js",      level: 80, iconUrl: si("nextdotjs",   "f0ede6") },
      { name: "Tailwind CSS", level: 90, iconUrl: si("tailwindcss", "06B6D4") },
    ],
  },
  {
    label: "Backend",
    iconUrl: si("laravel", "FF2D20"),
    skills: [
      { name: "Laravel",  level: 88, iconUrl: si("laravel", "FF2D20") },
      { name: "PHP",      level: 85, iconUrl: si("php",     "777BB4") },
      { name: "REST API", level: 82, iconUrl: si("fastapi", "009688") },
    ],
  },
  {
    label: "Database",
    iconUrl: si("mysql", "4479A1"),
    skills: [
      { name: "Python",       level: 70, iconUrl: si("python",     "3776AB") },
      { name: "MySQL",        level: 82, iconUrl: si("mysql",      "4479A1") },
      { name: "PostgreSQL",   level: 65, iconUrl: si("postgresql", "4169E1") },
      {name: "DBeaver", level: 80, iconUrl: si("dbeaver", "ffffff")},
    ],
  },
  {
    label: "Tools",
    iconUrl: si("git", "F05032"),
    skills: [
      { name: "Git",     level: 85, iconUrl: si("git",    "F05032") },
      { name: "GitHub",  level: 85, iconUrl: si("github", "f0ede6") },
      { name: "Figma",   level: 70, iconUrl: si("figma",  "F24E1E") },
      { name: "VS Code", level: 95, iconUrl: di("vscode") },
    ],
  },
];

type TechPill = { name: string; slug: string; color: string; useDi?: boolean };
const techStack: TechPill[] = [
  { name: "React",      slug: "react",       color: "#61DAFB" },
  { name: "Next.js",    slug: "nextdotjs",    color: "#f0ede6" },
  { name: "Laravel",    slug: "laravel",      color: "#FF2D20" },
  { name: "Tailwind",   slug: "tailwindcss",  color: "#06B6D4" },
  { name: "Python",     slug: "python",     color: "#3776AB" },
  { name: "MySQL",      slug: "mysql",        color: "#4479A1" },
  { name: "PostgreSQL", slug: "postgresql",   color: "#4169E1" },
  {name: "DBeaver", slug:"dbeaver", color:"#382923"},
  { name: "PHP",        slug: "php",          color: "#777BB4" },
  { name: "Git",        slug: "git",          color: "#F05032" },
  { name: "Figma",      slug: "figma",        color: "#F24E1E" },
  { name: "VS Code",    slug: "vscode",       color: "#007ACC", useDi: true },
];

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const itemVariants: Variants = {
  hidden:   { opacity: 0, y: 20 },
  visible:  { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

/* Reusable icon component — falls back to a dot if CDN fails */
function TechIcon({ src, alt, size = 18 }: { src: string; alt: string; size?: number }) {
  return (
    <Image
      src={src}
      alt={alt}
      width={size}
      height={size}
      className="object-contain flex-shrink-0"
      unoptimized   // external CDN image
    />
  );
}

export default function SkillsSection() {
  const [activeTab, setActiveTab] = useState(0);
  const active = categories[activeTab];

  return (
    <section
      id="skills"
      className="relative w-full overflow-hidden py-32"
      style={{ background: "#050d0c", color: "#f0ede6" }}
    >

      {/* Ambient glows */}
      <div
        className="pointer-events-none absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full"
        style={{ background: "radial-gradient(ellipse, rgba(20,184,140,0.12) 0%, transparent 70%)" }}
      />
      <div
        className="pointer-events-none absolute -bottom-40 -right-40 w-[450px] h-[450px] rounded-full"
        style={{ background: "radial-gradient(ellipse, rgba(245,158,11,0.08) 0%, transparent 70%)" }}
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
            <span className="text-[10px] uppercase tracking-[0.25em] font-medium" style={{ color: "#f59e0b" }}>
              Competency — Skills
            </span>
            <span className="w-9 h-px" style={{ background: "#f59e0b" }} />
          </div>
          <h2
            className="leading-tight mb-4"
            style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif", fontSize: "clamp(36px, 4.5vw, 54px)", fontWeight: 900 }}
          >
            My{" "}
            <span style={{ color: "#f59e0b", fontStyle: "italic" }}>Technical</span>{" "}
            Skills
          </h2>
          <p className="max-w-xl mx-auto text-base font-light leading-relaxed" style={{ color: "#5a7a79" }}>
            Teknologi dan alat yang saya kuasai untuk membangun produk digital dari konsep hingga produksi.
          </p>
        </motion.div>

        {/* ── Skill Bars (full width, centered) ── */}
        <div className="max-w-2xl mx-auto mb-20">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            {/* Tab pills — scrollable on mobile */}
            <div className="flex gap-2 mb-8 flex-wrap justify-center">
              {categories.map((cat, i) => (
                <button
                  key={cat.label}
                  id={`skill-tab-${cat.label.toLowerCase()}`}
                  onClick={() => setActiveTab(i)}
                  className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 border"
                  style={{
                    background:   activeTab === i ? "rgba(245,158,11,0.15)" : "rgba(28,70,69,0.10)",
                    borderColor:  activeTab === i ? "rgba(245,158,11,0.50)" : "rgba(245,158,11,0.12)",
                    color:        activeTab === i ? "#f59e0b" : "#5a7a79",
                  }}
                >
                  {/* Category icon */}
                  <span
                    className="transition-opacity duration-300"
                    style={{ opacity: activeTab === i ? 1 : 0.5 }}
                  >
                    <TechIcon src={cat.iconUrl} alt={cat.label} size={15} />
                  </span>
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Animated skill bars */}
            <motion.div
              key={activeTab}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="space-y-5"
            >
              {active.skills.map((skill) => (
                <motion.div key={skill.name} variants={itemVariants}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="flex items-center gap-2.5 text-sm font-medium" style={{ color: "#f0ede6" }}>
                      {/* Real brand icon */}
                      <span
                        className="w-6 h-6 rounded-md flex items-center justify-center flex-shrink-0"
                        style={{ background: "rgba(255,255,255,0.06)" }}
                      >
                        <TechIcon src={skill.iconUrl} alt={skill.name} size={15} />
                      </span>
                      {skill.name}
                    </span>
                    <span className="text-xs font-semibold tabular-nums" style={{ color: "#f59e0b" }}>
                      {skill.level}%
                    </span>
                  </div>

                  {/* Progress bar */}
                  <div
                    className="w-full h-1.5 rounded-full overflow-hidden"
                    style={{ background: "rgba(255,255,255,0.06)" }}
                  >
                    <motion.div
                      className="h-full rounded-full"
                      style={{
                        background:   "linear-gradient(90deg, #14b88c, #f59e0b)",
                        boxShadow:    "0 0 8px rgba(20,184,140,0.4)",
                      }}
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 0.9, ease: "easeOut" }}
                    />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* ── Tech Stack Pills with real icons ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-center text-[11px] uppercase tracking-[0.22em] mb-6" style={{ color: "#3a5a59" }}>
            Tech Stack
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {techStack.map((tech, i) => (
              <motion.div
                key={tech.name}
                className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium cursor-default"
                style={{
                  border:     "1px solid rgba(255,255,255,0.07)",
                  background: "rgba(255,255,255,0.03)",
                  color:      "#8fa8a7",
                }}
                initial={{ opacity: 0, scale: 0.85 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04, duration: 0.35 }}
                whileHover={{
                  scale:           1.08,
                  borderColor:     tech.color + "60",
                  color:           "#f0ede6",
                  backgroundColor: tech.color + "12",
                }}
              >
                {/* Icon: Devicons for VS Code, Simple Icons for everything else */}
                <TechIcon
                  src={tech.useDi ? di(tech.slug) : si(tech.slug, tech.color.replace("#", ""))}
                  alt={tech.name}
                  size={14}
                />
                {tech.name}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
