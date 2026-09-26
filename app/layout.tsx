import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";

export const metadata: Metadata = {
  metadataBase: new URL("https://arifilham.my.id"),
  title: {
    default: "Arif Ilham | Mobile AI Engineer",
    template: "%s | Arif Ilham",
  },
  description:
    "Portfolio of Arif Ilham, a Mobile AI Engineer & Full-Stack Developer specializing in Flutter, React Native, Fastify, Django, and modern AI integrations.",
  keywords: [
    "Arif Ilham",
    "Muhammad Arif Ilham",
    "Mobile AI Engineer",
    "Mobile Developer",
    "Flutter Developer",
    "React Native Developer",
    "Full-Stack Engineer",
    "AI Engineer",
    "Portfolio Arif Ilham",
    "Fastify",
    "Django",
    "Software Engineer Indonesia",
  ],
  authors: [{ name: "Arif Ilham", url: "https://arifilham.my.id" }],
  creator: "Arif Ilham",
  publisher: "Arif Ilham",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Arif Ilham | Mobile AI Engineer",
    description:
      "Mobile AI Engineer & Full-Stack Developer specializing in Flutter, React Native, and AI integrations with 2+ years of production experience.",
    url: "https://arifilham.my.id",
    siteName: "Arif Ilham Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/assets/profile_photo.jpeg",
        width: 800,
        height: 800,
        alt: "Arif Ilham - Mobile AI Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Arif Ilham | Mobile AI Engineer",
    description:
      "Mobile AI Engineer & Full-Stack Developer specializing in Flutter, React Native, and AI integrations.",
    images: ["/assets/profile_photo.jpeg"],
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen bg-[#09090b] text-zinc-100 antialiased selection:bg-sky-500/20 selection:text-sky-300 font-sans">
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
