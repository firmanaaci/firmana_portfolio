"use client";

import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative w-full py-24 overflow-hidden border-t border-[#d9d0c0]/30 bg-[#f7f3eb]"
    >
      {/* Ornamen Watermark Background (Inisial Nama) */}
      <div className="absolute top-10 right-10 md:top-20 md:right-20 opacity-[0.03] select-none pointer-events-none z-0">
        <span className="text-[150px] md:text-[250px] font-black text-[#1f2a1e] leading-none">FA.</span>
      </div>

      <div className="container mx-auto px-6 lg:px-16 flex flex-col md:flex-row gap-16 items-center relative z-10">
        
        {/* Kiri: Area Gambar / Kolase (Animasi masuk dari Kiri) */}
        <motion.div
          className="flex-1 relative w-full"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Grid Kolase Foto */}
          <div className="grid grid-cols-2 gap-4">
            {/* Kotak 1: Setup Meja / Laptop */}
            <div className="h-40 md:h-48 bg-[#e8e3d5] border border-[#d9d0c0] rounded-xl overflow-hidden group">
              <img src="/haha.png" alt="Workspace" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out" />
            </div>
            {/* Kotak 2: Cuplikan Kode / Skripsi */}
            <div className="h-40 md:h-48 bg-[#f1ebdf] border border-[#d9d0c0] rounded-xl overflow-hidden group">
              <img src="/hiii.jpg" alt="Coding" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out" />
            </div>
            {/* Kotak 3: Desain UI / Figma */}
            <div className="h-40 md:h-48 bg-[#f1ebdf] border border-[#d9d0c0] rounded-xl overflow-hidden group">
              <img src="/poto.jpeg" alt="UI Design" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out" />
            </div>
            {/* Kotak 4: Foto Candid / Pendadaran */}
            <div className="h-40 md:h-48 bg-[#e8e3d5] border border-[#d9d0c0] rounded-xl overflow-hidden group">
              <img src="/candid.jpeg" alt="Candid" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out" />
            </div>
          </div>

          {/* Badge Pengalaman */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#6f8f5f] text-[#fbf8f1] font-bold px-8 py-5 rounded-2xl text-center shadow-xl shadow-[#6f8f5f]/30 border border-[#88a679]">
            <p className="text-3xl">1+ Years</p>
            <p className="text-sm font-medium tracking-wide mt-1 text-[#e8e3d5]">Experience</p>
          </div>
        </motion.div>

        {/* Kanan: Teks & Skill (Animasi masuk dari Bawah) */}
        <motion.div
          className="flex-1 space-y-6"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#1f2a1e]">
            About <span className="text-[#6f8f5f]">Me</span>
          </h2>
          <h3 className="text-xl text-[#51604b] font-medium">
            Fullstack Developer & UI Designer
          </h3>
          <p className="text-[#5f695b] leading-relaxed text-sm md:text-base">
            Saya menciptakan pengalaman digital yang menggabungkan inovasi
            teknologi dengan desain elegan. Dengan keahlian dalam pengembangan
            frontend dan backend, saya siap menghadirkan solusi dari konsep
            desain Figma hingga menjadi sistem utuh yang siap digunakan.
          </p>

          {/* Bagian Skill dengan desain Badges/Pills */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-6 mt-6 border-t border-[#d9d0c0]">
            {/* Frontend */}
            <div>
              <h4 className="text-[#1f2a1e] font-bold mb-3 flex items-center gap-2">
                <span className="text-[#6f8f5f]">❖</span> Frontend
              </h4>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-[#6f8f5f]/10 text-[#4f6f44] text-sm font-semibold rounded-full border border-[#6f8f5f]/20 hover:bg-[#6f8f5f] hover:text-white transition-colors cursor-default">Next.js</span>
                <span className="px-3 py-1 bg-[#6f8f5f]/10 text-[#4f6f44] text-sm font-semibold rounded-full border border-[#6f8f5f]/20 hover:bg-[#6f8f5f] hover:text-white transition-colors cursor-default">Tailwind CSS</span>
                <span className="px-3 py-1 bg-[#6f8f5f]/10 text-[#4f6f44] text-sm font-semibold rounded-full border border-[#6f8f5f]/20 hover:bg-[#6f8f5f] hover:text-white transition-colors cursor-default">React</span>
              </div>
            </div>

            {/* Backend & Database */}
            <div>
              <h4 className="text-[#1f2a1e] font-bold mb-3 flex items-center gap-2">
                <span className="text-[#6f8f5f]">❖</span> Backend & DB
              </h4>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-[#6f8f5f]/10 text-[#4f6f44] text-sm font-semibold rounded-full border border-[#6f8f5f]/20 hover:bg-[#6f8f5f] hover:text-white transition-colors cursor-default">PHP</span>
                <span className="px-3 py-1 bg-[#6f8f5f]/10 text-[#4f6f44] text-sm font-semibold rounded-full border border-[#6f8f5f]/20 hover:bg-[#6f8f5f] hover:text-white transition-colors cursor-default">Laravel</span>
                <span className="px-3 py-1 bg-[#6f8f5f]/10 text-[#4f6f44] text-sm font-semibold rounded-full border border-[#6f8f5f]/20 hover:bg-[#6f8f5f] hover:text-white transition-colors cursor-default">MySQL</span>
              </div>
            </div>

            {/* Design */}
            <div className="sm:col-span-2">
              <h4 className="text-[#1f2a1e] font-bold mb-3 flex items-center gap-2">
                <span className="text-[#6f8f5f]">❖</span> UI/UX Design
              </h4>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-[#6f8f5f]/10 text-[#4f6f44] text-sm font-semibold rounded-full border border-[#6f8f5f]/20 hover:bg-[#6f8f5f] hover:text-white transition-colors cursor-default">Figma</span>
                <span className="px-3 py-1 bg-[#6f8f5f]/10 text-[#4f6f44] text-sm font-semibold rounded-full border border-[#6f8f5f]/20 hover:bg-[#6f8f5f] hover:text-white transition-colors cursor-default">Wireframing</span>
                <span className="px-3 py-1 bg-[#6f8f5f]/10 text-[#4f6f44] text-sm font-semibold rounded-full border border-[#6f8f5f]/20 hover:bg-[#6f8f5f] hover:text-white transition-colors cursor-default">Prototyping</span>
              </div>
            </div>
          </div>

        </motion.div>
      </div>
    </section>
  );
}