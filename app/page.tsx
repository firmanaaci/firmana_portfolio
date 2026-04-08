import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import ServicesSection from "./components/ServicesSection";
import AboutSection from "./components/AboutSection";
import ProjectSection from "./components/ProjectSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import { SITE_CONFIG, SITE_URL } from "./lib/site";

export default function Home() {
  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: SITE_CONFIG.authorName,
    url: SITE_URL,
    jobTitle: "Fullstack Developer & UI Designer",
    description: SITE_CONFIG.description,
    sameAs: [
      "https://github.com/firmanaamri",
      "https://linkedin.com/in/firmanaamri",
      "https://instagram.com/firmana_fir",
    ],
  };

  return (
    <div className="min-h-screen flex flex-col font-sans bg-transparent text-[#1f2a1e]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />

      <Header />

      <main className="flex-grow">
        <HeroSection />

        <div className="relative isolate overflow-hidden bg-linear-to-b from-[#f7f3eb] via-[#f3ede0] to-[#efe7d8]">
          <div className="pointer-events-none absolute -top-32 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-[#6f8f5f]/12 blur-3xl" />
          <div className="pointer-events-none absolute bottom-10 right-10 h-64 w-64 rounded-full bg-[#4f6f44]/8 blur-3xl" />

          <ServicesSection />
          <AboutSection />
          <ProjectSection />
          <ContactSection />
        </div>
      </main>

      <Footer />
    </div>
  );
}
