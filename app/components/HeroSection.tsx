"use client";

import { FaGithub, FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function HeroSection() {
  // --- LOGIKA EFEK MENGETIK (TYPEWRITER) ---
  const titles = ["Fullstack Developer", "Web Developer", "Problem Analyst"];
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    // Kecepatan ngetik (100ms) dan kecepatan hapus (50ms)
    const typeSpeed = isDeleting ? 50 : 100;
    const currentTitle = titles[currentTitleIndex];

    const timer = setTimeout(() => {
      if (!isDeleting && currentText === currentTitle) {
        // Kalau teks udah utuh, kasih jeda 2 detik sebelum mulai menghapus
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && currentText === "") {
        // Kalau teks udah habis terhapus, lanjut ke kata berikutnya
        setIsDeleting(false);
        setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
      } else {
        // Proses ngetik atau menghapus huruf per huruf
        setCurrentText(
          currentTitle.substring(0, currentText.length + (isDeleting ? -1 : 1))
        );
      }
    }, typeSpeed);

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentTitleIndex]);

  return (
    <section className="bg-[#1c4645] w-full relative pt-12 pb-24 md:pb-36 z-10 overflow-visible">
      <div className="container mx-auto px-6 lg:px-16 flex flex-col md:flex-row items-center justify-between gap-12 relative z-10">
        
        {/* Bagian Kiri: Teks */}
        <motion.div 
          className="flex-1 space-y-6"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div transition={{ delay: 0.1 }} className="flex items-center gap-2 text-[#f59e0b] text-sm font-bold">
            <span>★★★★★</span>
            <span className="text-white/80 font-normal">(Based On Experience)</span>
          </motion.div>

          <motion.h1 transition={{ delay: 0.2 }} className="text-5xl md:text-6xl font-bold text-white leading-tight">
           <span className="relative inline-block text-[#f59e0b] pb-1 group">
  Firmana Amri Subekhi
  {/* Rel garis bawah transparan */}
  <span className="absolute bottom-0 left-0 w-full h-[4px] bg-[#f59e0b]/20 rounded-full overflow-hidden">
    {/* Cahaya laser yang bergerak mondar-mandir */}
    <motion.span 
      className="absolute top-0 left-0 h-full w-1/3 bg-[#f59e0b] rounded-full shadow-[0_0_8px_#f59e0b]"
      animate={{ x: ["-100%", "300%"] }}
      transition={{ 
        duration: 2, 
        repeat: Infinity, 
        repeatType: "mirror", // Bikin gerakannya bolak-balik
        ease: "linear" 
      }}
    />
  </span>
</span>
          </motion.h1>
          
          {/* 👇 BAGIAN ANIMASI TYPEWRITER 👇 */}
          <motion.h2 transition={{ delay: 0.3 }} className="text-xl md:text-2xl text-white/90 font-medium h-8 flex items-center">
            Saya seorang <span className="text-[#f59e0b] font-bold ml-2">{currentText}</span>
            {/* Efek Kursor Kedap-Kedip */}
            <span className="inline-block w-[3px] h-[1.2em] bg-[#f59e0b] ml-1 animate-pulse"></span>
          </motion.h2>

        

          <motion.p transition={{ delay: 0.4 }} className="text-[#e7ebe5] max-w-lg leading-relaxed pt-2">
            Fresh Graduate lulusa Teknik Informatika dengan pengalaman magang sebagai web developer. Saya memiliki kemampuan dalam membangun aplikasi web fullstack menggunakan Laravel, MySQL, dan Tailwind CSS.
          </motion.p>
          
          <motion.div transition={{ delay: 0.5 }} className="flex flex-col gap-6 pt-4">
            <div className="flex flex-wrap gap-4">
              <a href="#kontak" className="px-6 py-3 rounded-full font-bold transition-all duration-300 bg-[#f59e0b] text-white hover:bg-yellow-500 shadow-lg shadow-orange-500/30">
                Contact Me ➔
              </a>
              <a href="/Resume_Firmana_Amri_Subekhi.pdf" download className="px-6 py-3 rounded-full font-bold transition-all duration-300 border-2 border-white/30 text-white hover:bg-white hover:text-[#1c4645]">
                Download CV
              </a>
            </div>

            <div className="flex items-center gap-6">
              {/* Pastikan link ini sudah pakai username yang benar ya */}
              <a href="https://github.com/firmanaamri" target="_blank" rel="noopener noreferrer" className="text-[#dad9d9] hover:text-[#fcfcfc] transition-colors text-2xl"><FaGithub /></a>
              <a href="https://linkedin.com/in/firmanaamri" target="_blank" rel="noopener noreferrer" className="text-[#e7ebe5] hover:text-[#3a99c86e] transition-colors text-2xl"><FaLinkedin /></a>
              <a href="https://wa.me/6282136162717?text=Halo%20Firmana%2C%20saya%20ingin%20bekerja%20sama%20dengan%20Anda." target="_blank" rel="noopener noreferrer" className="text-[#e7ebe5] hover:text-[#0a7a4f] transition-colors text-2xl"><FaWhatsapp /></a>
              <a href="https://instagram.com/@firmana_fir" target="_blank" rel="noopener noreferrer" className="text-[#e7ebe5] hover:text-[#ce2074] transition-colors text-2xl"><FaInstagram /></a>
            </div>
          </motion.div>
        </motion.div>

        {/* Bagian Kanan: Gambar */}
        <motion.div 
          className="flex-1 flex justify-center relative"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        >
          <div className="w-[300px] h-[300px] md:w-[450px] md:h-[450px] bg-white/10 rounded-full flex items-center justify-center border-4 border-white/20 relative">
             <div className="absolute top-10 left-10 text-[#f59e0b] text-3xl animate-pulse">✦</div>
             <div className="absolute bottom-20 right-10 text-white/50 text-2xl animate-pulse delay-75">✦</div>
             
            <img src="/saya.jpeg" alt="Foto Profil" className="w-[90%] h-[90%] object-cover rounded-full" />
          </div>
        </motion.div>
      </div>

      {/* LENGKUNGAN BAWAH HIJAU MENGGANTUNG + SHADOW BERTUMPUK (STACKED) */}
      <div className="absolute top-full left-0 w-full leading-none z-10">
        <svg 
          viewBox="0 0 1440 120" 
          className="w-full block h-[40px] md:h-[120px] overflow-visible" 
          preserveAspectRatio="none"
          style={{
            filter: `
              drop-shadow(0px 8px 6px rgba(0, 0, 0, 0.12)) 
              drop-shadow(0px 22px 18px rgba(0, 0, 0, 0.08)) 
              drop-shadow(0px 40px 35px rgba(0, 0, 0, 0.04))
            `
          }}
        >
          <path d="M0,0 C480,120 960,120 1440,0 Z" fill="#1c4645" />
        </svg>
      </div>
    </section>
  );
}