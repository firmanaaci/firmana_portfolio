import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SITE_CONFIG, SITE_URL } from "./lib/site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_CONFIG.title,
    template: "%s | Firmana Amri Subekhi",
  },
  description: SITE_CONFIG.description,
  keywords: SITE_CONFIG.keywords,
  applicationName: SITE_CONFIG.siteName,
  category: "portfolio",
  classification: "Personal Portfolio",
  authors: [{ name: SITE_CONFIG.authorName, url: SITE_URL }],
  creator: SITE_CONFIG.authorName,
  publisher: SITE_CONFIG.authorName,
  alternates: {
    canonical: "/",
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: SITE_URL,
    title: SITE_CONFIG.title,
    description: SITE_CONFIG.description,
    siteName: SITE_CONFIG.siteName,
    images: [
      {
        url: "/ok.jpeg",
        width: 1200,
        height: 630,
        alt: "Portofolio Firmana Amri Subekhi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_CONFIG.title,
    description: SITE_CONFIG.description,
    images: ["/ok.jpeg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION,
  },
  other: {
    "theme-color": "#1c4645",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth scroll-pt-24`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
