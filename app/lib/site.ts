const rawSiteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com";

export const SITE_URL = rawSiteUrl.replace(/\/$/, "");

export const SITE_CONFIG = {
  siteName: "Portofolio Firmana",
  title: "Firmana Amri Subekhi | Fullstack Developer",
  description:
    "Portofolio resmi Firmana Amri Subekhi, Fullstack Developer di Indonesia yang berfokus pada pengembangan web dan solusi digital responsif.",
  authorName: "Firmana Amri Subekhi",
  keywords: [
    "Firmana Amri Subekhi",
    "portofolio developer",
    "fullstack developer",
    "fullstack developer indonesia",
    "jasa pembuatan website",
    "Next.js developer",
    "web developer indonesia",
    "portfolio fullstack developer",
    "developer portfolio",
  ],
};
