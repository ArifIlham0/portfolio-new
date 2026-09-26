import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "Arif Ilham | Mobile AI Engineer",
  description: "Mobile AI Engineer specializing in React Native, Flutter, Django and AI Integrations with 2+ years of production experience.",
  keywords: ["Arif Ilham", "Mobile Developer", "Flutter", "React Native", "Fullstack Developer", "AI Developer", "Portfolio", "AI Engineer", "Mobile Engineer"],
  authors: [{ name: "Arif Ilham" }],
  openGraph: {
    title: "Arif Ilham | Mobile AI Engineer",
    description: "Mobile AI Engineer specializing in React Native,  Flutter, Django, and AI Integrations.",
    type: "website",
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
