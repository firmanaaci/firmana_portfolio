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
      className="w-full py-32 overflow-hidden relative"
      style={{ background: "var(--bg-section)" }}
    >
      {/* Ambient glows */}
      <div
        className="pointer-events-none absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full"
        style={{ background: "radial-gradient(ellipse, var(--ambient-teal) 0%, transparent 70%)" }}
      />
      <div
        className="pointer-events-none absolute -bottom-40 -right-40 w-[450px] h-[450px] rounded-full"
        style={{ background: "radial-gradient(ellipse, var(--ambient-amber) 0%, transparent 70%)" }}
      />

      {/* Gold top rule */}
      <div
        className="absolute top-0 left-0 w-full h-px"
        style={{ background: "linear-gradient(90deg, transparent, var(--accent-amber) 30%, var(--accent-amber) 70%, transparent)" }}
      />

      <div className="container mx-auto px-6 lg:px-16 relative z-10">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <span className="w-9 h-px" style={{ background: "var(--accent-amber)" }} />
            <span className="text-[10px] uppercase tracking-[0.25em] font-semibold" style={{ color: "var(--accent-amber-text)" }}>
              Career Journey
            </span>
            <span className="w-9 h-px" style={{ background: "var(--accent-amber)" }} />
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6" style={{ color: "var(--card-text-main)" }}>
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
                  stroke="var(--accent-amber)"
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
              className="group relative p-10 rounded-[2.5rem] border backdrop-blur-xl shadow-2xl hover:-translate-y-1 transition-all duration-500 flex flex-col items-start text-left overflow-hidden"
              style={{
                background: "var(--card-bg)",
                borderColor: "var(--card-border)",
                boxShadow: `0 25px 50px -12px var(--card-shadow)`,
              }}
              variants={{
                hidden: { opacity: 0, scale: 0.9 },
                visible: { opacity: 1, scale: 1 },
              }}
            >
              {/* Efek Cahaya Belakang (Glow) saat Hover */}
              <div className="absolute -right-10 -top-10 w-32 h-32 bg-brand-green/5 rounded-full blur-3xl group-hover:bg-brand-amber/15 transition-all duration-500"></div>

              <div className="w-16 h-16 bg-[#1c464592] text-white rounded-2xl flex items-center justify-center text-3xl mb-8 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500 shadow-xl shadow-[#1c4645]/20">
                {service.icon}
              </div>

              <h3
                className="text-2xl font-bold mb-4 group-hover:text-brand-amber transition-colors"
                style={{ color: "var(--card-text-main)" }}
              >
                {service.title}
              </h3>

              <p className="leading-relaxed mb-8 grow" style={{ color: "var(--card-text-sub)" }}>
                {service.description}
              </p>

              {"place" in service && "date" in service && (
                <div className="w-full space-y-3 mb-8">
                  <div className="flex items-start gap-3 text-sm" style={{ color: "var(--card-text-sub)" }}>
                    <span className="font-semibold min-w-28" style={{ color: "var(--card-text-main)" }}>
                      Place
                    </span>
                    <span>{service.place}</span>
                  </div>
                  <div className="flex items-start gap-3 text-sm" style={{ color: "var(--card-text-sub)" }}>
                    <span className="font-semibold min-w-28" style={{ color: "var(--card-text-main)" }}>
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
                className="inline-flex items-center justify-center rounded-full px-5 py-2 text-sm font-semibold mb-6 transition-all duration-300 border"
                style={{
                  color: "var(--card-text-main)",
                  borderColor: "var(--card-border)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.background = "var(--card-btn-hover-bg)";
                  (e.currentTarget as HTMLAnchorElement).style.color = "var(--card-btn-hover-text)";
                  (e.currentTarget as HTMLAnchorElement).style.borderColor = "var(--card-btn-hover-border)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.background = "transparent";
                  (e.currentTarget as HTMLAnchorElement).style.color = "var(--card-text-main)";
                  (e.currentTarget as HTMLAnchorElement).style.borderColor = "var(--card-border)";
                }}
              >
                Lihat Sertifikat
              </a>

              <div
                className="w-12 h-1 rounded-full group-hover:w-full transition-all duration-500"
                style={{ background: "var(--card-border)" }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
