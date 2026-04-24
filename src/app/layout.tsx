import "./globals.css";
import { siteMetadata } from "@/lib/data/metadata";
import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";
import BackgroundEffect from "@components/layout/BackgroundEffect";
import Navbar from "@components/layout/Navbar";
import LanguageToggle from "@components/layout/LanguageToggle";
import Providers from "@components/layout/Providers";

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "Carlos Martínez — Full-Stack Developer",
  description:
    "Full-Stack Developer specializing in Java, Spring Boot, React, and Next.js. Based in Mexico, open to remote opportunities. Co-founder of NGC Software Solutions.",
  keywords: [
    "full-stack developer",
    "Java developer",
    "Spring Boot",
    "React developer",
    "Next.js",
    "software engineer Mexico",
    "backend developer",
    "remote developer",
  ],
  authors: [{ name: siteMetadata.name }],
  creator: siteMetadata.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteMetadata.url,
    title: siteMetadata.seoTitle,
    description: siteMetadata.seoDescription,
  },
  twitter: {
    card: "summary_large_image",
    title: siteMetadata.seoTitle,
    description: siteMetadata.seoDescription,
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
  alternates: {
    canonical: "https://carlosmtzg.dev",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={cn("font-sans", geist.variable)}>
      <body>
        <Providers>
          <BackgroundEffect />
          <Navbar />
          <LanguageToggle />
          {children}
        </Providers>
      </body>
    </html>
  );
}
