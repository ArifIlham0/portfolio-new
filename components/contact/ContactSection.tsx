"use client";

import { useState } from "react";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { Mail, Check, Copy, Globe, ArrowUpRight, MessageSquare } from "lucide-react";
import { CustomLink } from "@/constants/custom_link";

export default function ContactSection() {
  const [copied, setCopied] = useState(false);
  const email = "marifilham999@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="py-20 sm:py-24 border-t border-zinc-800/60 relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-sky-500/5 blur-3xl pointer-events-none -z-10" />
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-mono mb-4">
            <span>GET IN TOUCH</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            Let&apos;s Build Something Impactful Together
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
            I am currently open to full-time, contract, and high-impact mobile development opportunities. Feel free to reach out directly via email, LinkedIn, or WhatsApp.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="p-6 rounded-2xl bg-zinc-900/60 border border-zinc-800/80 hover:border-zinc-700 transition-all flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-500/20 text-sky-400 flex items-center justify-center mb-4">
                <Mail className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white mb-1">Direct Email</h3>
              <p className="text-xs text-zinc-400 mb-4">Fastest response for interviews and inquiries</p>
              <p className="text-sm font-mono text-zinc-200 truncate mb-4 select-all">
                {email}
              </p>
            </div>
            <div className="flex gap-2">
              <button
                onClick={handleCopyEmail}
                className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-xs font-semibold text-zinc-200 transition-colors border border-zinc-700/60 cursor-pointer"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-zinc-400" />
                    <span>Copy</span>
                  </>
                )}
              </button>
              <a
                href={`mailto:${email}`}
                className="inline-flex items-center justify-center p-2 rounded-xl bg-sky-500/10 hover:bg-sky-500/20 text-sky-400 border border-sky-500/30 transition-colors"
                title="Open Mail Client"
              >
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
          <div className="p-6 rounded-2xl bg-zinc-900/60 border border-zinc-800/80 hover:border-zinc-700 transition-all flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center mb-4">
                <FaWhatsapp className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white mb-1">WhatsApp Chat</h3>
              <p className="text-xs text-zinc-400 mb-4">Quick discussion and instant messaging</p>
              <p className="text-sm font-mono text-zinc-200 mb-4">
                (+62) 878-7568-6342
              </p>
            </div>
            <a
              href="https://wa.me/6287875686342"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 py-2 px-3 rounded-xl bg-emerald-950/60 hover:bg-emerald-900/80 text-xs font-semibold text-emerald-300 border border-emerald-500/40 transition-colors"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>
          <div className="p-6 rounded-2xl bg-zinc-900/60 border border-zinc-800/80 hover:border-zinc-700 transition-all flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 flex items-center justify-center mb-4">
                <Globe className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white mb-1">Professional Profiles</h3>
              <p className="text-xs text-zinc-400 mb-4">Explore code repositories and professional background</p>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <a
                href={CustomLink.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-xs font-medium text-zinc-200 transition-colors border border-zinc-700/60"
              >
                <FaLinkedin className="text-sky-400" />
                <span>LinkedIn</span>
              </a>
              <a
                href={CustomLink.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-xs font-medium text-zinc-200 transition-colors border border-zinc-700/60"
              >
                <FaGithub />
                <span>GitHub</span>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-16 pt-8 border-t border-zinc-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <p>© {new Date().getFullYear()} Arif Ilham. Designed with Linear aesthetic.</p>
          <div className="flex items-center gap-4">
            <a href="#about" className="hover:text-zinc-300 transition-colors">About</a>
            <a href="#projects" className="hover:text-zinc-300 transition-colors">Projects</a>
            <a href="#experience" className="hover:text-zinc-300 transition-colors">Experience</a>
            <a href="#skills" className="hover:text-zinc-300 transition-colors">Skills</a>
          </div>
        </div>
      </div>
    </section>
  );
}
