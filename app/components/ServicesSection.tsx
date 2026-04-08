"use client"; // Wajib ditambahkan karena animasi berjalan di browser client

import { motion } from "framer-motion";

export default function ServicesSection() {
  const services = [
    {
      title: "Web Development",
      description:
        "Membangun aplikasi web kustom mulai dari sistem manajemen kompleks hingga website responsif dengan performa optimal.",
      icon: "💻",
    },
    {
      title: "Mobile Development",
      description:
        "Pengembangan aplikasi mobile yang mulus dan intuitif untuk memberikan pengalaman terbaik di berbagai perangkat genggam.",
      icon: "📱",
    },
    {
      title: "UI/UX Design",
      description:
        "Merancang antarmuka pengguna (UI) yang estetis dan fungsional dengan fokus pada kenyamanan pengguna (User Experience).",
      icon: "🎨",
    },
  ];

  return (
    <section id="services" className="relative w-full py-24 overflow-hidden">
      <div className="container mx-auto px-6 lg:px-16">
        {/* Judul Section (Animasi masuk dari Bawah) */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }} // Posisi awal: transparan & turun sedikit
          whileInView={{ opacity: 1, y: 0 }} // Posisi target: muncul & normal
          viewport={{ once: true, amount: 0.3 }} // Animasi jalan 1x saat 30% elemen terlihat
          transition={{ duration: 0.8, ease: "easeOut" }} // Durasi 0.8s, efek easeOut
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#1f2a1e] mb-2">
            My <span className="text-[#6f8f5f]">Services</span>
          </h2>
          <p className="text-[#5f695b]">
            Solusi digital komprehensif yang disesuaikan dengan kebutuhan Anda.
          </p>
        </motion.div>

        {/* Container Kartu (Animasi Staggered Delay untuk Anak-anaknya) */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          initial="hidden" // Keadaan awal container: tersembunyi
          whileInView="visible" // Keadaan target container: terlihat
          viewport={{ once: true, amount: 0.3 }} // Animasi jalan 1x saat 30% terlihat
          transition={{ staggerChildren: 0.2 }} // Setiap anak motion.div akan muncul bergantian dengan delay 0.2s
        >
          {services.map((service, index) => (
            // Bungkus *setiap* kartu dengan motion.div untuk animasi staggered
            <motion.div
              key={index}
              className="bg-[#fbf8f1] border border-[#d9d0c0] p-8 rounded-2xl hover:border-[#6f8f5f] transition-all duration-300 group shadow-sm shadow-black/5"
              variants={{
                // Tentukan variasi keadaan untuk anak motion.div
                hidden: { opacity: 0, y: 30 }, // Keadaan tersembunyi anak: transparan & turun sedikit
                visible: { opacity: 1, y: 0 }, // Keadaan terlihat anak: muncul & normal
              }}
              transition={{ duration: 0.6, ease: "easeOut" }} // Durasi animasi anak 0.6s, efek easeOut
            >
              <div className="w-12 h-12 bg-[#edf2e7] group-hover:bg-[#6f8f5f]/10 rounded-xl flex items-center justify-center text-2xl mb-6 text-[#6f8f5f]">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-[#1f2a1e] mb-3">
                {service.title}
              </h3>
              <p className="text-[#5f695b] text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
