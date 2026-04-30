"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

type GitHubProject = {
  title: string;
  client: string;
  description: string;
  techStack: string[];
  highlight: string;
  url: string;
};

type GitHubRepoResponse = {
  name: string;
  visibility: string;
  description: string | null;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  html_url: string;
};

export default function ProjectSection() {
  const [projects, setProjects] = useState<GitHubProject[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // ⚠️ Memakai username GitHub kamu
    const githubUsername = "firmanaamri";

    fetch(
      `https://api.github.com/users/${githubUsername}/repos?sort=updated&per_page=4`,
    )
      .then((res) => res.json())
      .then((data) => {
        if (!Array.isArray(data)) {
          console.warn("Limit API GitHub tercapai. Menggunakan data cadangan.");
          setProjects([
            {
              title: "Toko Bangunan",
              client: "Public Repository",
              description:
                "Sistem Manajemen Inventaris untuk pencatatan stok barang, transaksi, dan pelaporan.",
              techStack: ["PHP"],
              highlight: "⭐ 0 | 🍴 0",
              url: "#",
            },
            {
              title: "Booking Kos",
              client: "Public Repository",
              description:
                "Aplikasi pemesanan kamar kos berbasis web dengan fitur pencarian dan filter lokasi.",
              techStack: ["JavaScript"],
              highlight: "⭐ 0 | 🍴 0",
              url: "#",
            },
          ]);
          setIsLoading(false);
          return;
        }

        const formattedProjects = data.map((repo: GitHubRepoResponse) => ({
          title: repo.name.replace(/-/g, " ").replace(/_/g, " "),
          client:
            repo.visibility === "public"
              ? "Public Repository"
              : "Private Repository",
          description:
            repo.description ||
            "Eksplorasi kode dan arsitektur perangkat lunak. Repositori ini tidak memiliki deskripsi spesifik.",
          techStack: repo.language ? [repo.language] : ["Code"],
          highlight: `⭐ ${repo.stargazers_count} | 🍴 ${repo.forks_count}`,
          url: repo.html_url,
        }));

        setProjects(formattedProjects);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Gagal mengambil data GitHub:", error);
        setIsLoading(false);
      });
  }, []);

  return (
    <section
      id="projects"
      className="relative w-full py-32 overflow-hidden bg-white"
    >
      {/* Ornamen Latar Belakang */}
      <div className="absolute top-40 left-0 w-72 h-72 bg-[#1c4645]/5 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-40 right-0 w-96 h-96 bg-brand-amber/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-6 lg:px-16 relative z-10">
        
        {/* Header Section */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-brand-amber font-bold uppercase tracking-widest text-sm mb-4">
            Showcase
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#1c4645] mb-6">
            Proyek <span className="relative">
              Saya
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0 5 Q 50 10 100 5" stroke="#f59e0b" strokeWidth="4" fill="transparent" />
              </svg>
            </span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg leading-relaxed">
            Kumpulan proyek web, <i>source code</i>, dan eksperimen teknologi yang saya kembangkan sebagai <i>Fullstack Developer</i>. Data ini diambil secara <i>real-time</i> langsung dari GitHub.
          </p>
        </motion.div>

        {/* Loading State */}
        {isLoading ? (
          <div className="text-center text-[#1c4645] py-10 font-medium flex justify-center items-center gap-3">
            <span className="w-6 h-6 border-4 border-[#1c4645]/30 border-t-brand-amber rounded-full animate-spin"></span>
            Menyinkronkan data GitHub...
          </div>
        ) : (
          /* Grid Container Card */
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.2 }}
          >
            {projects.map((project, index) => (
              <motion.article
                key={project.title + index}
                className="group relative flex flex-col justify-between h-full rounded-[2.5rem] border border-gray-100 bg-white/80 backdrop-blur-xl p-8 md:p-10 shadow-2xl shadow-gray-200/50 hover:shadow-[#1c4645]/15 hover:-translate-y-2 transition-all duration-500 overflow-hidden"
                variants={{
                  hidden: { opacity: 0, y: 40 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                {/* Watermark Angka Raksasa di Background */}
                <div className="absolute -top-10 -right-6 text-[150px] font-black text-gray-50 group-hover:text-[#1c4645]/3 transition-colors duration-500 z-0 pointer-events-none select-none leading-none">
                  0{index + 1}
                </div>

                {/* Garis Aksen Vertikal (Muncul saat hover) */}
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-0 bg-brand-amber group-hover:h-1/2 transition-all duration-500 ease-out rounded-r-full z-20"></div>

                {/* Konten Atas */}
                <div className="relative z-10">
                  <div className="flex items-start justify-between gap-4 mb-6">
                    <div className="pr-4">
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 group/link"
                        title={`Buka ${project.title} di GitHub`}
                      >
                        <h3 className="text-2xl md:text-3xl font-extrabold text-[#1c4645] group-hover/link:text-brand-amber transition-colors capitalize line-clamp-1">
                          {project.title}
                        </h3>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={3}
                          stroke="currentColor"
                          className="w-5 h-5 text-brand-amber opacity-0 -ml-3 group-hover/link:opacity-100 group-hover/link:ml-0 transition-all duration-300"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                        </svg>
                      </a>
                      <p className="text-xs font-bold text-[#1c4645]/50 mt-2 uppercase tracking-widest">
                        {project.client}
                      </p>
                    </div>
                  </div>

                  <p className="text-gray-500 text-base leading-relaxed mb-8 line-clamp-3">
                    {project.description}
                  </p>
                </div>

                {/* Konten Bawah (Tech Stack & Statistik) */}
                <div className="relative z-10 pt-6 border-t border-gray-100 flex flex-wrap items-center justify-between gap-4 mt-auto">
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold bg-[#1c4645]/5 text-[#1c4645] group-hover:bg-[#1c4645] group-hover:text-white transition-colors duration-300"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-amber"></span>
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#1c4645] bg-gray-50 px-3 py-2 rounded-xl border border-gray-100 group-hover:border-brand-amber/20 transition-colors">
                    {project.highlight}
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
}