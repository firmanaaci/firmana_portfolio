"use client"; // Wajib ditambahkan karena animasi berjalan di browser client

import { motion } from 'framer-motion';

export default function AboutSection() {
  return (
    <section id="about" className="bg-gradient-to-b from-[#1C1C1C] to-[#261502] w-full py-24 overflow-hidden">
      <div className="container mx-auto px-6 lg:px-16 flex flex-col md:flex-row gap-16 items-center">
        
        {/* Kiri: Area Gambar / Kolase (Animasi masuk dari Kiri) */}
        <motion.div 
          className="flex-1 relative w-full"
          initial={{ opacity: 0, x: -50 }} // Posisi awal: transparan & geser ke kiri 50px
          whileInView={{ opacity: 1, x: 0 }} // Posisi akhir: terlihat jelas & kembali ke tengah
          viewport={{ once: true, amount: 0.3 }} // Animasi jalan 1x saat 30% elemen terlihat
          transition={{ duration: 0.8, ease: "easeOut" }} // Durasi animasi 0.8 detik
        >
          <div className="grid grid-cols-2 gap-4">
            <div className="h-40 bg-[#121212] border border-gray-800 rounded-xl"></div>
            <div className="h-40 bg-[#1a1a1a] border border-gray-800 rounded-xl"></div>
            <div className="h-40 bg-[#1a1a1a] border border-gray-800 rounded-xl"></div>
            <div className="h-40 bg-[#121212] border border-gray-800 rounded-xl"></div>
          </div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#FF8A00] text-black font-bold px-6 py-4 rounded-xl text-center shadow-2xl shadow-orange-900/50">
            <p className="text-2xl">1+ Years</p>
            <p className="text-sm">Experience</p>
          </div>
        </motion.div>

        {/* Kanan: Teks & Skill (Animasi masuk dari Bawah) */}
        <motion.div 
          className="flex-1 space-y-6"
          initial={{ opacity: 0, y: 50 }} // Posisi awal: transparan & turun 50px
          whileInView={{ opacity: 1, y: 0 }} // Posisi akhir: normal
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }} // Ada delay 0.2s biar munculnya bergantian sama gambar
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            About <span className="text-[#FF8A00]">Me</span>
          </h2>
          <h3 className="text-xl text-gray-300 font-medium">Fullstack Developer & UI Designer</h3>
          <p className="text-gray-400 leading-relaxed text-sm">
            Saya menciptakan pengalaman digital yang menggabungkan inovasi teknologi dengan desain elegan. Dengan keahlian dalam pengembangan frontend dan backend, saya siap menghadirkan solusi dari konsep desain Figma hingga menjadi sistem utuh yang siap digunakan.
          </p>

          <div className="grid grid-cols-2 gap-6 pt-6">
            <div>
              <h4 className="text-white font-bold mb-2 flex items-center gap-2">
                <span className="text-[#FF8A00]">❖</span> Frontend
              </h4>
              <p className="text-gray-400 text-sm">Next.js, Tailwind CSS</p>
            </div>
            <div>
              <h4 className="text-white font-bold mb-2 flex items-center gap-2">
                <span className="text-[#FF8A00]">❖</span> Backend & Database
              </h4>
              <p className="text-gray-400 text-sm">PHP, Laravel, MySQL</p>
            </div>
            <div>
              <h4 className="text-white font-bold mb-2 flex items-center gap-2">
                <span className="text-[#FF8A00]">❖</span> Design
              </h4>
              <p className="text-gray-400 text-sm">UI/UX Design, Figma</p>
            </div>
          </div>
        </motion.div>
        
      </div>
    </section>
  );
}