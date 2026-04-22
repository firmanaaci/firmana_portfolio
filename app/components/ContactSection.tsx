"use client";

import { motion } from "framer-motion";

export default function ContactSection() {
  return (
    <section id="kontak" className="relative w-full py-32 bg-[#050d0c] overflow-visible">
      
      {/* LENGKUNGAN ATAS (CURVE UP) + STACKED SHADOW */}
      {/* Kita letakkan di 'bottom-full' agar dia muncul di atas blok hijau ini */}
      <div className="absolute bottom-full left-0 w-full leading-none z-20 pointer-events-none">
        <svg 
          viewBox="0 0 1440 120" 
          className="w-full block h-[40px] md:h-[100px] overflow-visible" 
          preserveAspectRatio="none"
          style={{
            // Bayangan bertumpuk diarahkan ke atas (nilai Y minus)
            filter: `
              drop-shadow(0px -10px 8px rgba(0, 0, 0, 0.08)) 
              drop-shadow(0px -25px 20px rgba(0, 0, 0, 0.06)) 
              drop-shadow(0px -45px 40px rgba(0, 0, 0, 0.03))
            `
          }}
        >
          {/* Path ini menggambar lengkungan hijau yang menghadap ke atas */}
          <path d="M0,120 C480,0 960,0 1440,120 Z" fill="#050d0c" />
        </svg>
      </div>

      <div className="container mx-auto px-6 lg:px-16 text-center relative z-10">
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <p className="text-[#f59e0b] font-bold uppercase tracking-widest text-sm mb-6">
            Get In Touch
          </p>
          <h3 className="text-4xl md:text-5xl font-extrabold text-[#f59e0b] mb-8 leading-tight">
            Tertarik untuk diskusi lebih lanjut? <br/>
            <span className="text-white/80 text-3xl md:text-4xl font-bold block mt-2">Hubungi Saya</span>
          </h3>
          <p className="text-white/70 mb-12 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Saya selalu terbuka untuk mendiskusikan proyek baru, ide kreatif, atau peluang kerja sama. 
          </p>

          <motion.a
            href="mailto:firmanaamri@gmail.com"
            className="inline-flex items-center gap-4 px-10 py-5 bg-[#f59e0b] text-white text-lg font-bold rounded-full hover:bg-yellow-500 transition-all shadow-xl shadow-black/30"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Kirim Pesan Sekarang
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}