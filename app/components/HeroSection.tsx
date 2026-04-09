"use client"; // Wajib ditambahkan karena animasi berjalan di browser client

import Button from "./Button";
import { FaGithub, FaLinkedin, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative w-full overflow-hidden bg-linear-to-b from-[#f7f3eb] via-[#f4efe5] to-[#efe8da]"
    >
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
            className="text-5xl md:text-6xl font-bold text-[#1f2a1e] leading-tight"
            transition={{ delay: 0.2 }} // Penundaan muncul
          >
            Hi, Im <span className="text-[#6f8f5f]">Firmana Amri Subekhi</span>{" "}
            👋
          </motion.h1>
          <motion.h2
            className="text-xl text-[#51604b] font-medium"
            transition={{ delay: 0.3 }} // Penundaan muncul bergantian
          >
            Fullstack Developer
          </motion.h2>
          <motion.p
            className="text-[#5f695b] max-w-lg leading-relaxed text-justify"
            transition={{ delay: 0.4 }} // Penundaan muncul bergantian
          >
            Fresh Graduate dari jurusan Teknik Informatika yang berdedikasi
            merancang dan mengembangkan sistem perangkat lunak yang fungsional.
            Berbekal pengalaman dari proyek pengembangan aplikasi dan pengujian
            sistem semasa kuliah, saya terbiasa bekerja secara mandiri maupun
            dalam tim. Komunikatif, adaptif, dan siap memberikan solusi
            teknologi yang efisien untuk menjawab tantangan di dunia kerja
            profesional.
          </motion.p>

          {/* Tombol & Ikon Sosial */}
          <motion.div
            className="flex flex-col gap-6 pt-4"
            transition={{ delay: 0.5 }} // Penundaan muncul bergantian
          >
            <div className="flex flex-wrap gap-4">
              <Button text="Contact Me ➔" href="#kontak" type="primary" />
              <Button
                text="Download CV"
                href="/Resume_Firmana_Amri_Subekhi.pdf"
                type="outline"
                isDownload={true}
              />
            </div>

            <div className="flex items-center gap-6">
              <a
                href="https://github.com/firmanaamri"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#74806f] hover:text-red-500 transition-colors text-2xl"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>
              <a
                href="https://linkedin.com/in/firmanaamri"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#74806f] hover:text-[#0b3460] transition-colors text-2xl"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://instagram.com/firmana_fir"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#74806f] hover:text-[#dc2052] transition-colors text-2xl"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
              <a
                href="https://wa.me/6282136162717?text=Halo%20Firmana,%20saya%20tertarik%20bekerja%20sama%20dengan%20Anda."
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#74806f] hover:text-[#10a426] transition-colors text-2xl"
                aria-label="WhatsApp"
              >
                <FaWhatsapp />
              </a>
            </div>
          </motion.div>

          {/* Info singkat */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-8 border-t border-[#d9d0c0] mt-8"
            transition={{ delay: 0.6 }} // Penundaan muncul bergantian
          >
            <div className="rounded-2xl border border-[#d9d0c0] bg-[#fbf8f1]/90 backdrop-blur-sm px-5 py-4 shadow-sm shadow-black/5 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md">
              <p className="text-[11px] uppercase tracking-[0.2em] text-[#6b7565]">
                Asal
              </p>
              <p className="mt-2 text-lg md:text-xl font-bold text-[#3c4a36] leading-snug">
                Kabupaten Pemalang
              </p>
            </div>
            <div className="rounded-2xl border border-[#d9d0c0] bg-[#fbf8f1]/90 backdrop-blur-sm px-5 py-4 shadow-sm shadow-black/5 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md">
              <p className="text-[11px] uppercase tracking-[0.2em] text-[#6b7565]">
                Universitas
              </p>
              <p className="mt-2 text-lg md:text-xl font-bold text-[#3c4a36] leading-snug">
                Universitas Muhammadiyah Surakarta
              </p>
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
          <div className="w-[300px] h-[300px] md:w-[400px] md:h-[400px] bg-gradient-to-tr from-[#6f8f5f] via-[#88a679] to-[#d8e0cc] rounded-[30%_70%_70%_30%/30%_30%_70%_70%] shadow-2xl shadow-[#6f8f5f]/20 overflow-hidden flex items-center justify-center ring-1 ring-[#d9d0c0]">
            <Image
              src="/saya.jpeg"
              alt="Foto profil Firmana Amri Subekhi"
              width={400}
              height={400}
              className="w-full h-full object-cover"
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
