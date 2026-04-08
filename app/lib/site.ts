const rawSiteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com";

export const SITE_URL = rawSiteUrl.replace(/\/$/, "");

export const SITE_CONFIG = {
  siteName: "Portofolio Firmana",
  title: "Firmana Amri Subekhi | Fullstack Developer & UI Designer",
  description:
    "Portofolio resmi Firmana Amri Subekhi, Fullstack Developer & UI Designer. Menampilkan layanan web development, mobile development, UI/UX design, dan proyek unggulan.",
  authorName: "Firmana Amri Subekhi",
  keywords: [
    "Firmana Amri Subekhi",
    "portofolio developer",
    "fullstack developer",
    "jasa pembuatan website",
    "UI UX designer",
    "Next.js developer",
    "web developer indonesia",
  ],
};
