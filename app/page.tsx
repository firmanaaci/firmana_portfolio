import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import ServicesSection from "./components/ExperiencesSection";
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
    jobTitle: "Fullstack Developer",
    description: SITE_CONFIG.description,
    sameAs: [
      "https://github.com/firmanaamri",
      "https://linkedin.com/in/firmanaamri",
      "https://instagram.com/firmana_fir",
    ],
  };

  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_CONFIG.siteName,
    url: SITE_URL,
    description: SITE_CONFIG.description,
    inLanguage: "id-ID",
    author: {
      "@type": "Person",
      name: SITE_CONFIG.authorName,
    },
  };

  return (
    <div className="min-h-screen flex flex-col font-sans bg-transparent text-[#1c4645]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
      />

      <Header />

      <main className="grow">
        <HeroSection />

        <div className="relative isolate overflow-hidden bg-linear-to-b from-[#ffffff] via-[#ffffff] to-[#ffffff]">
          <div className="pointer-events-none absolute -top-32 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-[#1c4645]/12 blur-3xl" />
          <div className="pointer-events-none absolute bottom-10 right-10 h-64 w-64 rounded-full bg-[#1c4645]/8 blur-3xl" />

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
