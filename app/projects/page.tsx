import { Metadata } from "next";
import { SITE_CONFIG, SITE_URL } from "../lib/site";
import ProjectsPageClient from "./ProjectsPageClient";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Projects",
  description: `Semua proyek open source dan repositori GitHub milik ${SITE_CONFIG.authorName}. Diambil secara real-time dari GitHub.`,
  alternates: { canonical: `${SITE_URL}/projects` },
  openGraph: {
    title: `Projects | ${SITE_CONFIG.authorName}`,
    description: `Semua proyek open source dan repositori GitHub milik ${SITE_CONFIG.authorName}.`,
    url: `${SITE_URL}/projects`,
  },
};

export default function ProjectsPage() {
  return (
    <div className="min-h-screen flex flex-col font-sans" style={{ background: "var(--bg-primary)", color: "var(--text-primary)" }}>
      <Header />
      <main className="grow pt-16">
        <ProjectsPageClient />
      </main>
      <Footer />
    </div>
  );
}
