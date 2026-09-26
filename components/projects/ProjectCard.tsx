"use client";

import Image from "next/image";
import Link from "next/link";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import { BiLogoPlayStore } from "react-icons/bi";
import { FaAppStore } from "react-icons/fa6";

export type Project = {
  num: string;
  category: string;
  title: string;
  description: string;
  image: string;
  github?: string | null;
  app_store?: string | null;
  play_store?: string | null;
  website?: string | null;
  stack: { name: string }[];
};

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="group relative flex flex-col justify-between overflow-hidden rounded-2xl bg-zinc-900/50 border border-zinc-800/80 hover:border-zinc-700/90 hover:bg-zinc-900/90 transition-all duration-300 hover:shadow-xl hover:shadow-black/50">
      <div>
        <div className="relative h-48 sm:h-56 w-full overflow-hidden bg-zinc-950/60 border-b border-zinc-800/60">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-linear-to-t from-zinc-950 via-zinc-950/30 to-transparent opacity-60" />
          <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
            <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-zinc-950/80 backdrop-blur-md border border-zinc-700/60 text-zinc-300">
              {project.category}
            </span>
            <span className="text-xs font-mono font-bold px-2 py-0.5 rounded-md bg-zinc-950/80 backdrop-blur-md border border-zinc-800 text-sky-400">
              #{project.num}
            </span>
          </div>
        </div>
        <div className="p-5 flex flex-col gap-3">
          <h3 className="text-lg font-bold text-white group-hover:text-sky-400 transition-colors line-clamp-1">
            {project.title}
          </h3>
          <p className="text-zinc-400 text-sm leading-relaxed line-clamp-2">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-1.5 pt-1">
            {project.stack.map((tech, idx) => (
              <span
                key={idx}
                className="text-xs font-mono px-2 py-0.5 rounded-md bg-zinc-800/70 text-zinc-300 border border-zinc-700/40"
              >
                {tech.name}
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className="p-5 pt-0 mt-2">
        <div className="border-t border-zinc-800/80 pt-4 flex items-center justify-between gap-2 flex-wrap">
          <div className="flex items-center gap-2 flex-wrap">
            {project.app_store && (
              <Link
                href={project.app_store}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${project.title} on App Store`}
                className="inline-flex items-center gap-1.5 text-xs font-medium px-2.5 py-1.5 rounded-lg bg-zinc-800/90 text-zinc-200 hover:bg-zinc-700 hover:text-white transition-colors border border-zinc-700/60"
              >
                <FaAppStore className="text-sm text-sky-400" />
                <span>App Store</span>
              </Link>
            )}
            {project.play_store && (
              <Link
                href={project.play_store}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${project.title} on Google Play`}
                className="inline-flex items-center gap-1.5 text-xs font-medium px-2.5 py-1.5 rounded-lg bg-zinc-800/90 text-zinc-200 hover:bg-zinc-700 hover:text-white transition-colors border border-zinc-700/60"
              >
                <BiLogoPlayStore className="text-sm text-emerald-400" />
                <span>Play Store</span>
              </Link>
            )}
            {project.website && (
              <Link
                href={project.website}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit ${project.title} Live Website`}
                className="inline-flex items-center gap-1.5 text-xs font-medium px-2.5 py-1.5 rounded-lg bg-zinc-800/90 text-zinc-200 hover:bg-zinc-700 hover:text-white transition-colors border border-zinc-700/60"
              >
                <BsArrowUpRight className="text-sm text-amber-400" />
                <span>Live Site</span>
              </Link>
            )}
          </div>
          {project.github && (
            <Link
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${project.title} source code on GitHub`}
              className="p-2 rounded-lg bg-zinc-800/90 text-zinc-400 hover:text-white hover:bg-zinc-700 transition-colors border border-zinc-700/60"
              title="GitHub Repository"
            >
              <BsGithub className="text-base" />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
