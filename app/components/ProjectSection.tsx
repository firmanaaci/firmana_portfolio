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
    // ⚠️ GANTI INI DENGAN USERNAME ASLIMU YA!
    const githubUsername = "firmanaamri"; 
    
    fetch(`https://api.github.com/users/${githubUsername}/repos?sort=updated&per_page=4`)
      .then((res) => res.json())
      .then((data) => {
        if (!Array.isArray(data)) {
          console.warn("Limit API GitHub tercapai. Menggunakan data cadangan.");
          // Data cadangan sementara
          setProjects([
            {
              title: "Toko Bangunan",
              client: "Public Repository",
              description: "Sistem Manajemen Inventaris untuk pencatatan stok barang, transaksi, dan pelaporan.",
              techStack: ["PHP"], 
              highlight: "⭐ 0 | 🍴 0",
              url: "#",
            },
            {
              title: "Booking Kos",
              client: "Public Repository",
              description: "Aplikasi pemesanan kamar kos berbasis web dengan fitur pencarian dan filter lokasi.",
              techStack: ["JavaScript"],
              highlight: "⭐ 0 | 🍴 0",
              url: "#",
            }
          ]);
          setIsLoading(false);
          return;
        }

        const formattedProjects = data.map((repo: GitHubRepoResponse) => ({
          title: repo.name.replace(/-/g, ' ').replace(/_/g, ' '), 
          client: repo.visibility === "public" ? "Public Repository" : "Private Repository",
          description: repo.description || "Tidak ada deskripsi yang disertakan pada repositori ini.",
          // Mengambil bahasa utama dari GitHub (misal: PHP, TypeScript, JavaScript)
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
    <section id="projects" className="relative w-full py-24 overflow-hidden border-t border-[#d9d0c0]/30 bg-[#f7f3eb]">
      <div className="container mx-auto px-6 lg:px-16">
        
        {/* Header Section */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <p className="text-sm uppercase tracking-[0.22em] text-[#6f8f5f] font-semibold mb-3">
            Portfolio
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#1f2a1e]">
            Proyek GitHub
          </h2>
          <p className="text-[#5f695b] max-w-2xl mx-auto leading-relaxed">
            Kumpulan *source code* dan repositori publik yang saya kembangkan. Data ditarik secara otomatis secara *real-time* dari GitHub.
          </p>
        </motion.div>

        {/* Loading State */}
        {isLoading ? (
          <div className="text-center text-[#6f8f5f] py-10 font-medium flex justify-center items-center gap-3">
            <span className="w-5 h-5 border-2 border-[#6f8f5f] border-t-transparent rounded-full animate-spin"></span>
            Menyinkronkan data...
          </div>
        ) : (
          
          /* Grid Container Card */
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ staggerChildren: 0.15 }}
          >
            {projects.map((project, index) => (
              <motion.article
                key={project.title + index}
                // Penambahan flex-col dan justify-between agar tinggi card selalu sama
                className="group relative flex flex-col justify-between h-full rounded-2xl border border-[#d9d0c0] bg-[#fbf8f1] p-6 md:p-8 shadow-sm hover:shadow-xl shadow-black/5 hover:-translate-y-1 hover:border-[#88a679]/50 transition-all duration-300 overflow-hidden"
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                {/* Garis Aksen di Atas (Muncul saat di-hover) */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#6f8f5f] to-[#d9d0c0] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Bagian Atas Card (Judul, Tipe, Nomor) */}
                <div>
                  <div className="flex items-start justify-between gap-4 mb-5">
                    <div className="pr-4">
                      <a 
                        href={project.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 group/link"
                        title={`Buka ${project.title} di GitHub`}
                      >
                        <h3 className="text-xl md:text-2xl font-bold text-[#1f2a1e] group-hover/link:text-[#6f8f5f] transition-colors capitalize line-clamp-1">
                          {project.title}
                        </h3>
                        {/* Ikon Tautan Eksternal */}
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4 text-[#88a679] opacity-0 -ml-2 group-hover/link:opacity-100 group-hover/link:ml-0 transition-all duration-300">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                        </svg>
                      </a>
                      <p className="text-xs font-semibold text-[#88a679] mt-1.5 uppercase tracking-widest">
                        {project.client}
                      </p>
                    </div>
                    {/* Nomor Urut */}
                    <span className="shrink-0 text-xs font-bold font-mono tracking-wider w-9 h-9 flex items-center justify-center rounded-full bg-[#edf2e7] text-[#4f6f44] border border-[#d9d0c0]/50">
                      0{index + 1}
                    </span>
                  </div>

                  {/* Deskripsi Project (Dibatasi 3 baris agar rapi) */}
                  <p className="text-[#5f695b] text-sm leading-relaxed mb-6 line-clamp-3">
                    {project.description}
                  </p>
                </div>

                {/* Bagian Bawah Card (Tech Stack & Statistik) */}
                <div className="pt-5 border-t border-[#d9d0c0]/60 flex items-center justify-between gap-4 mt-auto">
                  
                  {/* Badge Bahasa Pemrograman */}
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold border border-[#d9d0c0]/80 text-[#4b5a47] bg-[#f7f3eb]"
                      >
                        {/* Ornamen titik estetik */}
                        <span className="w-1.5 h-1.5 rounded-full bg-[#6f8f5f]"></span>
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Info Star & Fork Github */}
                  <div className="text-xs font-mono font-medium text-[#88a679] whitespace-nowrap bg-[#edf2e7] px-2 py-1 rounded-md">
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