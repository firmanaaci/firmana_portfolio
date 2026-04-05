"use client"; // Wajib ditambahkan karena animasi berjalan di browser client

import Button from './Button';
import { FaGithub, FaLinkedin, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <section className="bg-[#121212] w-full overflow-hidden">
      <div className="container mx-auto px-6 lg:px-16 min-h-[80vh] flex flex-col md:flex-row items-center justify-between py-20 gap-12">
        
        {/* Bagian Kiri: Teks & Statistik (Animasi masuk dari Bawah dengan Staggered Delay) */}
        <motion.div 
          className="flex-1 space-y-6"
          initial={{ opacity: 0, y: 50 }} // Posisi awal: transparan & turun sedikit
          whileInView={{ opacity: 1, y: 0 }} // Posisi target: muncul & normal
          viewport={{ once: true, amount: 0.3 }} // Animasi jalan 1x saat 30% elemen terlihat
          transition={{ duration: 0.8, ease: "easeOut" }} // Durasi animasi 0.8 detik, efek easeOut
        >
          {/* Teks Utama */}
          <motion.h1 
            className="text-5xl md:text-6xl font-bold text-white leading-tight"
            transition={{ delay: 0.2 }} // Penundaan muncul
          >
            Hi, Im <span className="text-[#FF8A00]">Firmana Amri Subekhi</span> 👋
          </motion.h1>
          <motion.h2 
            className="text-xl text-gray-300 font-medium"
            transition={{ delay: 0.3 }} // Penundaan muncul bergantian
          >
            Fullstack Developer & UI Designer
          </motion.h2>
          <motion.p 
            className="text-gray-400 max-w-lg leading-relaxed"
            transition={{ delay: 0.4 }} // Penundaan muncul bergantian
          >
            Saya merancang dan membangun solusi digital yang menggabungkan teknologi mutakhir dengan desain antarmuka yang intuitif. Mari wujudkan ide Anda menjadi kenyataan.
          </motion.p>
          
          {/* Tombol & Ikon Sosial */}
          <motion.div 
            className="flex flex-col gap-6 pt-4"
            transition={{ delay: 0.5 }} // Penundaan muncul bergantian
          >
            <div className="flex flex-wrap gap-4">
              <Button text="Contact Me ➔" href="#kontak" type="primary" />
              <Button text="Download CV" href="/CV-Firmana.pdf" type="outline" isDownload={true} />
            </div>

            <div className="flex items-center gap-6">
              <a href="https://github.com/firmanaamri" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#FF8A00] transition-colors text-2xl" aria-label="GitHub"><FaGithub /></a>
              <a href="https://linkedin.com/in/firmanaamri" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#151f7b] transition-colors text-2xl" aria-label="LinkedIn"><FaLinkedin /></a>
              <a href="https://instagram.com/firmana_fir" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#c40a51] transition-colors text-2xl" aria-label="Instagram"><FaInstagram /></a>
              <a href="https://wa.me/6282136162717?text=Halo%20Firmana,%20saya%20tertarik%20bekerja%20sama%20dengan%20Anda." target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#25D366] transition-colors text-2xl" aria-label="WhatsApp"><FaWhatsapp /></a>
            </div>
          </motion.div>

          {/* Statistik */}
          <motion.div 
            className="flex gap-10 pt-10 border-t border-gray-800/50 mt-8"
            transition={{ delay: 0.6 }} // Penundaan muncul bergantian
          >
            <div>
              <p className="text-3xl font-bold text-[#FF8A00]">3+</p>
              <p className="text-sm text-gray-400">Proyek</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-[#FF8A00]">1+</p>
              <p className="text-sm text-gray-400">Tahun Pengalaman</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-[#FF8A00]">2+</p>
              <p className="text-sm text-gray-400">Klien</p>
            </div>
            </motion.div>
        </motion.div>

        {/* Bagian Kanan: Gambar (Animasi masuk dari Kanan) */}
        <motion.div 
          className="flex-1 flex justify-center relative"
          initial={{ opacity: 0, x: 50 }} // Posisi awal: transparan & geser ke kanan sedikit
          whileInView={{ opacity: 1, x: 0 }} // Posisi target: muncul & normal
          viewport={{ once: true, amount: 0.3 }} // Animasi jalan 1x saat 30% elemen terlihat
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }} // Durasi 0.8s, delay 0.3s setelah teks, efek easeOut
        >
          <div className="w-[300px] h-[300px] md:w-[400px] md:h-[400px] bg-gradient-to-tr from-[#FF8A00] to-orange-300 rounded-[30%_70%_70%_30%/30%_30%_70%_70%] shadow-2xl shadow-orange-500/20 overflow-hidden flex items-center justify-center">
            <img src="ok.jpeg" alt="Foto Profil" />
          </div>
        </motion.div>
        
      </div>
    </section>
  );
}