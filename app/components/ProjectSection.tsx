"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

// Tipe data untuk struktur portofolio kita
type GitHubProject = {
  title: string;
  client: string;
  description: string;
  techStack: string[];
  highlight: string;
  url: string;
};

// 👇 TAMBAHAN BARU: Tipe data khusus untuk balasan mentah dari GitHub API
type GitHubRepoResponse = {
  name: string;
  visibility: string;
  description: string | null; // Bisa null kalau kamu gak ngisi deskripsi di github
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  html_url: string;
};

export default function ProjectSection() {
  const [projects, setProjects] = useState<GitHubProject[]>([]);
  const [isLoading, setIsLoading] = useState(true);

 useEffect(() => {
    // ⚠️ Pastikan ini username aslimu!
    const githubUsername = "firmanaamri"; 
    
    fetch(`https://api.github.com/users/${githubUsername}/repos?sort=updated&per_page=4`)
      .then((res) => res.json())
      .then((data) => {
        
        // JIKA KENA LIMIT GITHUB / ERROR
        if (!Array.isArray(data)) {
          console.warn("Limit API GitHub tercapai. Menggunakan data cadangan.");
          // Masukkan data manual sebagai cadangan sementara
          setProjects([
            {
              title: "Sistem Manajemen Inventaris",
              client: "Toko Bangunan Jaya Prana",
              description: "Aplikasi pencatatan stok barang, transaksi, dan pelaporan yang dirancang khusus untuk operasional toko bangunan. Diuji menggunakan Black Box Testing dan System Usability Scale.",
              techStack: ["Laravel", "MySQL", "Bootstrap"],
              highlight: "Website Offline / Local",
              url: "https://github.com/firmanaamri",
            },
            {
              title: "Integrasi Machine Learning",
              client: "Proyek Riset",
              description: "Eksplorasi penerapan algoritma machine learning pada sistem manajemen gudang untuk optimasi stok dan otomatisasi pencatatan.",
              techStack: ["Python", "React", "API"],
              highlight: "Proyek Riset",
              url: "https://github.com/firmanaamri",
            }
          ]);
          setIsLoading(false);
          return; // Hentikan proses fetch di sini
        }

        // JIKA BERHASIL MENGAMBIL DATA DARI GITHUB
        const formattedProjects = data.map((repo: GitHubRepoResponse) => ({
          title: repo.name.replace(/-/g, ' ').replace(/_/g, ' '), 
          client: repo.visibility === "public" ? "Public Repository" : "Private Repository",
          description: repo.description || "Tidak ada deskripsi yang disertakan pada repositori ini.",
          techStack: repo.language ? [repo.language] : ["Code"], 
          highlight: `⭐ ${repo.stargazers_count} Stars | 🍴 ${repo.forks_count} Forks`,
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
      className="relative w-full py-24 overflow-hidden border-t border-white/5"
    >
      <div className="container mx-auto px-6 lg:px-16">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <p className="text-sm uppercase tracking-[0.22em] text-[#6f8f5f] mb-3">
            Portfolio
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-3 text-[#1f2a1e]">
            Proyek Unggulan
          </h2>
          <p className="text-[#5f695b] max-w-2xl mx-auto">
            Beberapa karya yang merepresentasikan pendekatan saya dalam
            membangun produk digital: cepat, terukur, dan fokus pada kebutuhan
            pengguna. Data di bawah ini diambil secara otomatis dari GitHub.
          </p>
        </motion.div>

        {/* Menampilkan teks loading saat data masih ditarik dari GitHub */}
        {isLoading ? (
          <div className="text-center text-[#5f695b] py-10 font-medium">
            <div className="animate-pulse">Menyelaraskan data dengan GitHub...</div>
          </div>
        ) : (
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-7"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ staggerChildren: 0.18 }}
          >
            {projects.map((project, index) => (
              <motion.article
                key={project.title + index}
                className="relative rounded-2xl border border-[#d9d0c0] bg-[#fbf8f1] p-7 md:p-8 shadow-lg shadow-black/5 group transition-all duration-300 hover:-translate-y-1 hover:border-[#6f8f5f]/60"
                variants={{
                  hidden: { opacity: 0, y: 28 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <div className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-[#6f8f5f] via-[#88a679] to-transparent opacity-60 rounded-t-2xl" />

                <div className="flex items-start justify-between gap-4 mb-5">
              <div>
                {/* Mengubah Judul menjadi Link (Tautan) yang Mengarah ke GitHub */}
                <a
                  href={project.url} // Memanggil link URL dari data GitHub
                  target="_blank" // Membuka link di tab/jendela baru
                  rel="noopener noreferrer" // Praktik keamanan terbaik untuk target="_blank"
                  className="inline-block group-hover:text-[#6f8f5f] transition-colors"
                  title={`Lihat repositori ${project.title} di GitHub`} // Menambahkan keterangan saat kursor diarahkan (hover)
                >
                  <h3 className="text-2xl font-bold text-[#1f2a1e] flex items-center gap-2">
                    <span className="capitalize">{project.title}</span>
                    {/* Ikon panah kecil sebagai indikator link eksternal */}
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      viewBox="0 0 20 20" 
                      fill="currentColor" 
                      className="w-5 h-5 opacity-0 -ml-2 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300"
                    >
                      <path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd" />
                    </svg>
                  </h3>
                </a>
                <p className="text-sm font-medium text-[#6f8f5f] mt-1">
                  {project.client}
                </p>
              </div>
              <span className="shrink-0 text-xs font-semibold tracking-wide rounded-full px-3 py-1 bg-[#edf2e7] text-[#4f6f44] border border-[#d9d0c0]">
                0{index + 1}
              </span>
            </div>
              </motion.article>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
}