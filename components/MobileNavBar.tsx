"use client";

import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from "./ui/sheet";
import { Menu, FileText, Mail } from "lucide-react";
import { useState } from "react";
import { Route } from "@/constants/route";
import Socials from "./home/Socials";

const MobileNavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <button
          aria-label="Open Mobile Navigation Menu"
          className="p-2 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white transition-colors"
        >
          <Menu className="w-5 h-5" />
        </button>
      </SheetTrigger>
      <SheetContent side="right" className="bg-zinc-950/95 border-l border-zinc-800/80 backdrop-blur-xl flex flex-col justify-between p-6">
        <div>
          <SheetHeader className="text-left mb-8">
            <SheetTitle className="text-2xl font-bold text-white flex items-center gap-1">
              <span>Arif Ilham</span>
              <span className="text-sky-400">.</span>
            </SheetTitle>
            <p className="text-xs text-zinc-400">Mobile AI Engineer</p>
          </SheetHeader>

          <nav className="flex flex-col gap-2">
            {Route.links.map((item, index) => (
              <a
                key={index}
                href={item.path}
                onClick={() => setIsOpen(false)}
                className="px-4 py-3 rounded-xl text-base font-medium text-zinc-300 hover:text-white hover:bg-zinc-900 border border-transparent hover:border-zinc-800 transition-all"
              >
                {item.name}
              </a>
            ))}
          </nav>
        </div>

        <div className="flex flex-col gap-4 pt-6 border-t border-zinc-800/80">
          <a
            href="/assets/Portfolio Ilham.pdf"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsOpen(false)}
            className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-zinc-900 text-zinc-200 border border-zinc-700/80 text-sm font-semibold hover:bg-zinc-800 transition-colors"
          >
            <FileText className="w-4 h-4 text-sky-400" />
            <span>Download Resume (PDF)</span>
          </a>

          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-white text-zinc-950 text-sm font-semibold hover:bg-zinc-200 transition-colors"
          >
            <Mail className="w-4 h-4" />
            <span>Get in Touch</span>
          </a>

          <div className="pt-2 flex justify-center">
            <Socials
              containerStyles="flex gap-4"
              iconStyles="w-9 h-9 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white hover:border-zinc-700 transition-colors"
            />
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNavBar;