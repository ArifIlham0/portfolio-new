"use client";

import Image from "next/image";
import { FaFlutter } from "react-icons/fa6";
import { TbBrandReactNative } from "react-icons/tb";
import { Sparkles } from "lucide-react";

const Photo = () => {
  return (
    <div className="relative flex items-center justify-center">
      <div className="absolute w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-linear-to-tr from-sky-500/20 via-indigo-500/15 to-transparent blur-3xl -z-10" />
      <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-3xl p-2 bg-linear-to-b from-zinc-700/50 via-zinc-800/30 to-zinc-900/80 border border-zinc-700/60 shadow-2xl">
        <div className="relative w-full h-full rounded-2xl overflow-hidden bg-zinc-950">
          <Image
            fill
            priority
            quality={95}
            alt="Arif Ilham - Mobile AI Engineer"
            className="object-cover object-center transition-transform duration-700 hover:scale-105"
            src="/assets/profile_photo.jpeg"
          />
        </div>
        <div className="absolute -bottom-3 -left-3 px-3 py-1.5 rounded-xl bg-zinc-900/90 backdrop-blur-md border border-zinc-700/80 shadow-lg flex items-center gap-2">
          <FaFlutter className="text-sky-400 text-base" />
          <span className="text-xs font-semibold text-white">Flutter Dev</span>
        </div>
        <div className="absolute -top-3 -right-3 px-3 py-1.5 rounded-xl bg-zinc-900/90 backdrop-blur-md border border-zinc-700/80 shadow-lg flex items-center gap-2">
          <TbBrandReactNative className="text-cyan-400 text-base" />
          <span className="text-xs font-semibold text-white">React Native</span>
        </div>
        <div className="hidden sm:flex absolute -right-4 bottom-12 px-2.5 py-1 rounded-lg bg-zinc-900/90 backdrop-blur-md border border-zinc-700/80 shadow-lg items-center gap-1.5">
          <Sparkles className="text-purple-400 text-xs" />
          <span className="text-[10px] font-mono text-zinc-300">AI Integrated</span>
        </div>
      </div>
    </div>
  );
};

export default Photo;