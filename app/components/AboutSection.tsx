"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export default function AboutSection() {
  // State untuk melacak gambar mana yang sedang aktif
  const [currentIndex, setCurrentIndex] = useState(0);

  // Daftar 4 gambar yang akan digilir (pastikan file ini ada di folder public ya!)
  const images = [
    "/candid.jpeg",
    "/nag.png",
    "/POTO.jpeg",
    "/haha.png"
  ];

  // Efek untuk mengganti gambar otomatis setiap 4 detik
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000); // 4000 ms = 4 detik

    // Bersihkan timer kalau komponen ditutup
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="about" className="relative w-full overflow-hidden bg-[#f9fafb] flex flex-col lg:block">
      
      {/* Watermark FA. Raksasa */}
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-between px-10 opacity-[0.03] select-none pointer-events-none z-0">
        <span className="text-[20vw] font-black text-[#1c4645]">F</span>
        <span className="text-[20vw] font-black text-[#1c4645]">A</span>
      </div>

      {/* GAMBAR FULL-BLEED (Kiri Mentok, Atas-Bawah Mentok) */}
      <motion.div
        className="relative lg:absolute lg:top-0 lg:left-0 lg:bottom-0 w-[95%] sm:w-[85%] lg:w-[45%] xl:w-[45%] h-[400px] md:h-[500px] lg:h-full z-10"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        {/* Pembungkus D-Shape: Sisi kanan dibuat melengkung besar */}
        <div className="w-full h-full bg-[#1c4645] rounded-br-[150px] rounded-tr-[150px] lg:rounded-br-[350px] lg:rounded-tr-[350px] overflow-hidden shadow-[30px_0_60px_rgba(0,0,0,0.1)] group border-r-[12px] md:border-r-[20px] border-white/20 relative">
           
           {/* SLIDESHOW GAMBAR DENGAN ANIMASI FADE */}
           <AnimatePresence>
             <motion.img 
               key={currentIndex}
               src={images[currentIndex]} 
               alt={`Portfolio slide ${currentIndex + 1}`} 
               // Animasi transisi antar gambar
               initial={{ opacity: 0, scale: 1.05 }}
               animate={{ opacity: 1, scale: 1 }}
               exit={{ opacity: 0 }}
               transition={{ duration: 1.5, ease: "easeInOut" }}
               // Efek grayscale bawaan yang akan hilang saat di-hover
               className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000"
             />
           </AnimatePresence>
           
           {/* Gradient overlay agar gambar tidak terlalu terang */}
           <div className="absolute inset-0 bg-gradient-to-t from-[#1c4645]/80 via-transparent to-transparent opacity-60 group-hover:opacity-20 transition-opacity z-10 pointer-events-none"></div>
        </div>

        {/* Floating Experience Badge */}
        <motion.div 
          className="absolute bottom-10 lg:bottom-24 right-0 translate-x-1/4 lg:translate-x-1/2 bg-[#f59e0b] text-white px-8 py-6 rounded-3xl shadow-2xl z-30 border-4 border-white flex flex-col items-center"
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <span className="text-4xl font-black block">1+</span>
          <span className="text-[10px] uppercase tracking-widest font-bold text-white/90 text-center mt-1">Years<br/>Experience</span>
        </motion.div>
      </motion.div>

      {/* KONTEN TEKS KANAN */}
      <div className="container mx-auto px-6 lg:px-16 flex justify-end relative z-10">
        <motion.div
          className="w-full lg:w-1/2 lg:pl-10 xl:pl-20 py-16 lg:py-32 space-y-10"
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <div className="space-y-6">
            <div className="inline-flex items-center gap-3">
               <span className="w-12 h-[2px] bg-[#f59e0b]"></span>
               <span className="text-[#1c4645] text-xs font-black tracking-[0.3em] uppercase">Discovery</span>
            </div>
            <h2 className="text-4xl md:text-5xl xl:text-6xl font-black text-[#1c4645] leading-[1.1]">
              Tentang <br/> 
              <span className="text-[#f59e0b]">Firmana Amri Subekhi.</span>
            </h2>
            <p className="text-gray-600 text-lg md:text-xl leading-relaxed">
              Saya <b>Firmana Amri Subekhi</b>, seorang <i>Fullstack Developer</i> dari Indonesia. Fokus saya adalah membangun website responsif, arsitektur backend yang rapi, dan aplikasi web yang siap dipakai.
            </p>
          </div>

          {/* Skill Feature List */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
             <div className="flex gap-5 items-start p-2">
                <div className="shrink-0 w-12 h-12 bg-[#1c4645] text-[#f59e0b] rounded-2xl flex items-center justify-center text-2xl shadow-lg shadow-[#1c4645]/20">
                   🚀
                </div>
                <div>
                   <h4 className="font-bold text-[#1c4645] text-lg">Logic</h4>
                   <p className="text-sm text-gray-500">Membangun arsitektur backend yang kokoh dengan Laravel, MySQL, dan alur data yang terstruktur.</p>
                </div>
             </div>
             <div className="flex gap-5 items-start p-2">
                <div className="shrink-0 w-12 h-12 bg-[#f59e0b] text-white rounded-2xl flex items-center justify-center text-2xl shadow-lg shadow-orange-500/20">
                   🎨
                </div>
                <div>
                   <h4 className="font-bold text-[#1c4645] text-lg">Visual</h4>
                   <p className="text-sm text-gray-500">Merancang tampilan modern menggunakan Tailwind CSS dan pendekatan desain yang konsisten.</p>
                </div>
             </div>
          </div>
        </motion.div>
      </div>

    </section>
  );
}