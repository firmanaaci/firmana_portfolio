"use client";

import { motion, type Variants } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import { useTheme } from "../lib/ThemeContext";

// Simple Icons CDN
const si = (slug: string, color = "f0ede6") =>
  `https://cdn.simpleicons.org/${slug}/${color}`;

// Devicons CDN (colored SVGs — fallback for icons not on Simple Icons)
const di = (name: string, variant = "original") =>
  `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${name}/${name}-${variant}.svg`;

type Skill = { name: string; level: number; iconUrl: (color: string) => string };
type Category = { label: string; iconSlug: string; skills: Skill[] };

const categories: Category[] = [
  {
    label: "Frontend",
    iconSlug: "react",
    skills: [
      { name: "React.js",     level: 85, iconUrl: () => si("react",       "61DAFB") },
      { name: "Next.js",      level: 80, iconUrl: (c) => si("nextdotjs",  c) },
      { name: "Tailwind CSS", level: 90, iconUrl: () => si("tailwindcss", "06B6D4") },
    ],
  },
  {
    label: "Backend",
    iconSlug: "laravel",
    skills: [
      { name: "Laravel",  level: 88, iconUrl: () => si("laravel", "FF2D20") },
      { name: "PHP",      level: 85, iconUrl: () => si("php",     "777BB4") },
      { name: "REST API", level: 82, iconUrl: () => si("fastapi", "009688") },
    ],
  },
  {
    label: "Database",
    iconSlug: "mysql",
    skills: [
      { name: "Python",       level: 70, iconUrl: () => si("python",     "3776AB") },
      { name: "MySQL",        level: 82, iconUrl: () => si("mysql",      "4479A1") },
      { name: "PostgreSQL",   level: 65, iconUrl: () => si("postgresql", "4169E1") },
      { name: "DBeaver",      level: 80, iconUrl: (c) => si("dbeaver",    c) },
    ],
  },
  {
    label: "Tools",
    iconSlug: "git",
    skills: [
      { name: "Git",     level: 85, iconUrl: () => si("git",    "F05032") },
      { name: "GitHub",  level: 85, iconUrl: (c) => si("github", c) },
      { name: "Figma",   level: 70, iconUrl: () => si("figma",  "F24E1E") },
      { name: "VS Code", level: 95, iconUrl: () => di("vscode") },
    ],
  },
];

type TechPill = { name: string; slug: string; color: string; useDi?: boolean };
const techStack: TechPill[] = [
  { name: "React",      slug: "react",       color: "#61DAFB" },
  { name: "Next.js",    slug: "nextdotjs",    color: "theme-adaptive" },
  { name: "Laravel",    slug: "laravel",      color: "#FF2D20" },
  { name: "Tailwind",   slug: "tailwindcss",  color: "#06B6D4" },
  { name: "Python",     slug: "python",       color: "#3776AB" },
  { name: "MySQL",      slug: "mysql",        color: "#4479A1" },
  { name: "PostgreSQL", slug: "postgresql",   color: "#4169E1" },
  { name: "DBeaver",    slug: "dbeaver",      color: "#382923" },
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
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const iconColor = isDark ? "f0ede6" : "112524";
  const active = categories[activeTab];

  return (
    <section
      id="skills"
      className="relative w-full overflow-hidden py-32"
      style={{ background: "var(--bg-primary)", color: "var(--text-primary)" }}
    >

      {/* Ambient glows */}
      <div
        className="pointer-events-none absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full"
        style={{ background: "radial-gradient(ellipse, var(--ambient-teal) 0%, transparent 70%)" }}
      />
      <div
        className="pointer-events-none absolute -bottom-40 -right-40 w-[450px] h-[450px] rounded-full"
        style={{ background: "radial-gradient(ellipse, var(--ambient-amber) 0%, transparent 70%)" }}
      />

      {/* Gold top rule */}
      <div
        className="absolute top-0 left-0 w-full h-px"
        style={{ background: "linear-gradient(90deg, transparent, var(--accent-amber) 30%, var(--accent-amber) 70%, transparent)" }}
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
            <span className="w-9 h-px" style={{ background: "var(--accent-amber)" }} />
            <span className="text-[10px] uppercase tracking-[0.25em] font-semibold" style={{ color: "var(--accent-amber-text)" }}>
              Competency — Skills
            </span>
            <span className="w-9 h-px" style={{ background: "var(--accent-amber)" }} />
          </div>
          <h2
            className="leading-tight mb-4"
            style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif", fontSize: "clamp(36px, 4.5vw, 54px)", fontWeight: 900, color: "var(--text-heading)" }}
          >
            My{" "}
            <span style={{ color: "var(--accent-amber-text)", fontStyle: "italic" }}>Technical</span>{" "}
            Skills
          </h2>
          <p className="max-w-xl mx-auto text-base font-light leading-relaxed" style={{ color: "var(--text-muted)" }}>
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
                  className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 border cursor-pointer"
                  style={{
                    background:   activeTab === i ? "rgba(245,158,11,0.15)" : "var(--panel-bg)",
                    borderColor:  activeTab === i ? "var(--accent-amber)" : "var(--panel-border)",
                    color:        activeTab === i ? "var(--accent-amber-text)" : "var(--text-muted)",
                    boxShadow:    "0 2px 8px -2px var(--card-shadow)",
                  }}
                >
                  {/* Category icon */}
                  <span
                    className="transition-opacity duration-300"
                    style={{ opacity: activeTab === i ? 1 : 0.6 }}
                  >
                    <TechIcon src={si(cat.iconSlug, activeTab === i ? (isDark ? "f59e0b" : "b45309") : iconColor)} alt={cat.label} size={15} />
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
                    <span className="flex items-center gap-2.5 text-sm font-medium" style={{ color: "var(--text-primary)" }}>
                      {/* Real brand icon */}
                      <span
                        className="w-6 h-6 rounded-md flex items-center justify-center flex-shrink-0"
                        style={{ background: "var(--chip-bg)", border: "1px solid var(--chip-border)" }}
                      >
                        <TechIcon src={skill.iconUrl(iconColor)} alt={skill.name} size={15} />
                      </span>
                      {skill.name}
                    </span>
                    <span className="text-xs font-semibold tabular-nums" style={{ color: "var(--accent-amber-text)" }}>
                      {skill.level}%
                    </span>
                  </div>

                  {/* Progress bar */}
                  <div
                    className="w-full h-1.5 rounded-full overflow-hidden"
                    style={{ background: "var(--skill-track)" }}
                  >
                    <motion.div
                      className="h-full rounded-full"
                      style={{
                        background:   "linear-gradient(90deg, #14b88c, #f59e0b)",
                        boxShadow:    "0 0 8px rgba(20,184,140,0.3)",
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
          <p className="text-center text-[11px] uppercase tracking-[0.22em] mb-6 font-medium" style={{ color: "var(--text-muted)" }}>
            Tech Stack
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {techStack.map((tech, i) => {
              const pillIconColor = tech.color === "theme-adaptive" ? iconColor : tech.color.replace("#", "");
              const pillHoverBorder = tech.color === "theme-adaptive" ? "var(--text-primary)" : tech.color;

              return (
                <motion.div
                  key={tech.name}
                  className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium cursor-default transition-all duration-200"
                  style={{
                    border:     "1px solid var(--tech-pill-border)",
                    background: "var(--tech-pill-bg)",
                    color:      "var(--tech-pill-text)",
                    boxShadow:  "0 2px 8px -2px var(--card-shadow)",
                  }}
                  initial={{ opacity: 0, scale: 0.85 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.04, duration: 0.35 }}
                  whileHover={{
                    scale:           1.06,
                    borderColor:     pillHoverBorder,
                    color:           "var(--text-heading)",
                    backgroundColor: "var(--panel-bg-hover)",
                  }}
                >
                  <TechIcon
                    src={tech.useDi ? di(tech.slug) : si(tech.slug, pillIconColor)}
                    alt={tech.name}
                    size={14}
                  />
                  {tech.name}
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
