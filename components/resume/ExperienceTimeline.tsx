"use client";

import { Data } from "@/constants/data";
import { Briefcase, GraduationCap, CheckCircle2 } from "lucide-react";

export default function ExperienceTimeline() {
  const experiences = Data.experiences.items;
  const educations = Data.educations.items;

  return (
    <div className="flex flex-col gap-12 max-w-4xl mx-auto">
      <div className="flex flex-col gap-6">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-xl bg-sky-500/10 border border-sky-500/20 text-sky-400">
            <Briefcase className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-white">Work Experience</h3>
            <p className="text-xs text-zinc-400">2+ years of production mobile engineering</p>
          </div>
        </div>

        <div className="relative pl-6 sm:pl-8 border-l border-zinc-800 space-y-8">
          {experiences.map((item, index) => (
            <div key={index} className="relative group">
              <div className="absolute -left-7.75 sm:-left-9.75 top-1.5 w-3.5 h-3.5 rounded-full bg-zinc-900 border-2 border-sky-400 group-hover:scale-125 transition-transform" />

              <div className="p-6 rounded-2xl bg-zinc-900/60 border border-zinc-800/80 hover:border-zinc-700 transition-all hover:bg-zinc-900/90 shadow-sm">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                  <div>
                    <h4 className="text-lg font-bold text-white group-hover:text-sky-300 transition-colors">
                      {item.company}
                    </h4>
                    <p className="text-sm font-medium text-sky-400">
                      {item.position}
                    </p>
                  </div>
                  <span className="self-start sm:self-auto text-xs font-mono px-2.5 py-1 rounded-full bg-zinc-800/90 text-zinc-300 border border-zinc-700/60">
                    {item.duration}
                  </span>
                </div>
                <p className="text-sm text-zinc-400 mb-4 leading-relaxed">
                  {item.description}
                </p>
                {item.highlights && item.highlights.length > 0 && (
                  <div className="space-y-2 mb-4">
                    {item.highlights.map((point, pIdx) => (
                      <div key={pIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300">
                        <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>
                )}
                {item.technologies && item.technologies.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 pt-2 border-t border-zinc-800/80">
                    {item.technologies.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-xs font-mono px-2 py-0.5 rounded-md bg-zinc-800/70 text-zinc-400 border border-zinc-700/40"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-6">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400">
            <GraduationCap className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-white">Education</h3>
            <p className="text-xs text-zinc-400">Formal computer science background</p>
          </div>
        </div>
        <div className="relative pl-6 sm:pl-8 border-l border-zinc-800">
          {educations.map((edu, idx) => (
            <div key={idx} className="relative group">
              <div className="absolute -left-7.75 sm:-left-9.75 top-1.5 w-3.5 h-3.5 rounded-full bg-zinc-900 border-2 border-indigo-400 group-hover:scale-125 transition-transform" />
              <div className="p-6 rounded-2xl bg-zinc-900/60 border border-zinc-800/80 hover:border-zinc-700 transition-all">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                  <h4 className="text-lg font-bold text-white">{edu.institution}</h4>
                  <span className="self-start sm:self-auto text-xs font-mono px-2.5 py-1 rounded-full bg-zinc-800 text-zinc-300 border border-zinc-700">
                    {edu.duration}
                  </span>
                </div>
                <p className="text-sm font-medium text-indigo-400">{edu.degree}</p>
                <p className="text-sm text-zinc-400 mt-2 leading-relaxed">
                  Graduated with a solid foundation in software engineering, mobile systems, and data structures.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
