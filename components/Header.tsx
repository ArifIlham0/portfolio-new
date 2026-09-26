"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import NavBar from "./NavBar";
import MobileNavBar from "./MobileNavBar";
import { FileText, Mail } from "lucide-react";

const Header = () => {
  const pathname = usePathname();

  if (pathname === "/privacy-policy/gurubot") {
    return null;
  }

  return (
    <header className="sticky top-0 z-50 w-full bg-zinc-950/80 backdrop-blur-xl border-b border-zinc-800/60 transition-all duration-200">
      <div className="container mx-auto px-4 lg:px-8 flex justify-between items-center h-16">
        <div className="flex items-center gap-4">
          <Link href="/" className="group flex items-center gap-1.5">
            <span className="text-xl sm:text-2xl font-bold tracking-tight text-white group-hover:text-zinc-200 transition-colors">
              Arif Ilham
            </span>
            <span className="text-sky-400 text-2xl font-black">.</span>
          </Link>
          <div className="hidden sm:inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/40 border border-emerald-500/30 text-emerald-400 text-xs font-medium">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span>Available for Hire</span>
          </div>
        </div>
        <div className="hidden md:flex items-center gap-8">
          <NavBar />
          <div className="flex items-center gap-3">
            <a
              href="/assets/Portfolio Ilham.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-medium px-3.5 py-2 rounded-xl bg-zinc-900 text-zinc-300 hover:text-white hover:bg-zinc-800 border border-zinc-700/80 transition-all cursor-pointer"
            >
              <FileText className="w-3.5 h-3.5 text-sky-400" />
              <span>Resume</span>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-xs font-medium px-3.5 py-2 rounded-xl bg-white text-zinc-950 hover:bg-zinc-200 font-semibold transition-all shadow-sm cursor-pointer"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Get in Touch</span>
            </a>
          </div>
        </div>
        <div className="md:hidden flex items-center gap-2">
          <a
            href="/assets/Portfolio Ilham.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-medium px-2.5 py-1.5 rounded-lg bg-zinc-900 text-zinc-300 border border-zinc-800"
          >
            <FileText className="w-3.5 h-3.5 text-sky-400" />
            <span>CV</span>
          </a>
          <MobileNavBar />
        </div>
      </div>
    </header>
  );
};

export default Header;
