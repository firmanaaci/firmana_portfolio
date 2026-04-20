"use client";

import { motion } from "framer-motion";

export default function ExperiencesSection() {
  const services = [
    {
      title: "Praktek Kerja Nyata/Web Developer Intern",
      description:
        "Membangun aplikasi web Arsiparis Surat untuk tata kelola surat di area Kementerian Agama Kota Surakarta.",
      icon: "💻",
      place: "Kementerian Agama Kota Surakarta",
      date: "April-June 2025",
      certificateUrl: "/SertifMagangKemenagSka.jpg",
    },
    {
      title: "Coding Camp Software Engineer by RevoU",
      description:
        "Participated in a Coding Camp organized by RevoU with the theme of Becoming a Software Engineer.",
      icon: "🖥️",
      place: "RevoU Indonesia (Online)",
      date: "6-10 April 2026",
      certificateUrl: "/CodingCampCertificate_FirmanaAmriSubekhi.pdf",
    },
  ];

  return (
    <section
      id="experience"
      className="bg-white w-full py-32 overflow-hidden relative"
    >
      <div className="container mx-auto px-6 lg:px-16">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-[#f59e0b] font-bold uppercase tracking-widest text-sm mb-4">
            Welcome To
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#1c4645] mb-6">
            My{" "}
            <span className="relative">
              Experiences
              <svg
                className="absolute -bottom-2 left-0 w-full"
                viewBox="0 0 100 10"
                preserveAspectRatio="none"
              >
                <path
                  d="M0 5 Q 50 10 100 5"
                  stroke="#f59e0b"
                  strokeWidth="4"
                  fill="transparent"
                />
              </svg>
            </span>
          </h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.2 }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="group relative bg-white p-10 rounded-[2.5rem] border border-gray-100 shadow-2xl shadow-gray-200/40 hover:border-[#1c4645]/20 transition-all duration-500 flex flex-col items-start text-left overflow-hidden"
              variants={{
                hidden: { opacity: 0, scale: 0.9 },
                visible: { opacity: 1, scale: 1 },
              }}
            >
              {/* Efek Cahaya Belakang (Glow) saat Hover */}
              <div className="absolute -right-10 -top-10 w-32 h-32 bg-[#1c4645]/5 rounded-full blur-3xl group-hover:bg-[#f59e0b]/20 transition-all duration-500"></div>

              <div className="w-16 h-16 bg-[#1c464592] text-white rounded-2xl flex items-center justify-center text-3xl mb-8 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500 shadow-xl shadow-[#1c4645]/20">
                {service.icon}
              </div>

              <h3 className="text-2xl font-bold text-[#1c4645] mb-4 group-hover:text-[#f59e0b] transition-colors">
                {service.title}
              </h3>

              <p className="text-gray-500 leading-relaxed mb-8 grow">
                {service.description}
              </p>

              {"place" in service && "date" in service && (
                <div className="w-full space-y-3 mb-8">
                  <div className="flex items-start gap-3 text-sm text-gray-500">
                    <span className="font-semibold text-[#1c4645] min-w-28">
                      Place
                    </span>
                    <span>{service.place}</span>
                  </div>
                  <div className="flex items-start gap-3 text-sm text-gray-500">
                    <span className="font-semibold text-[#1c4645] min-w-28">
                      Period
                    </span>
                    <span>{service.date}</span>
                  </div>
                </div>
              )}

              <a
                href={service.certificateUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-[#1c4645]/15 px-5 py-2 text-sm font-semibold text-[#1c4645] mb-6 transition-colors duration-300 hover:border-[#1c4645] hover:bg-[#1c4645] hover:text-white"
              >
                Lihat Sertifikat
              </a>

              <div className="w-12 h-1 bg-gray-100 group-hover:w-full group-hover:bg-[#1c4645] transition-all duration-500"></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
