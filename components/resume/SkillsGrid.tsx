"use client";

import { FaFlutter } from "react-icons/fa6";
import { TbBrandReactNative } from "react-icons/tb";
import { SiDart, SiTypescript, SiFastify, SiLaravel, SiExpress, SiDocker, SiTailwindcss } from "react-icons/si";
import { DiDjango, DiFirebase, DiMysql, DiPostgresql } from "react-icons/di";
import { RiNextjsFill } from "react-icons/ri";
import { Sparkles, Smartphone, Server, Database } from "lucide-react";

export default function SkillsGrid() {
  const skillCategories = [
    {
      category: "Mobile Engineering",
      icon: <Smartphone className="w-5 h-5 text-sky-400" />,
      skills: [
        { name: "Flutter", icon: <FaFlutter className="text-2xl text-sky-400" />, desc: "State management (BLoC/Provider), clean architecture, iOS & Android" },
        { name: "React Native", icon: <TbBrandReactNative className="text-2xl text-cyan-400" />, desc: "Cross-platform mobile apps with React & TypeScript" },
        { name: "Dart", icon: <SiDart className="text-2xl text-blue-400" />, desc: "Type-safe language for high-performance Flutter apps" },
        { name: "TypeScript", icon: <SiTypescript className="text-2xl text-blue-500" />, desc: "Static typing for scalable mobile and web codebases" },
      ],
    },
    {
      category: "Backend & APIs",
      icon: <Server className="w-5 h-5 text-emerald-400" />,
      skills: [
        { name: "Fastify", icon: <SiFastify className="text-2xl text-white" />, desc: "High-throughput, low-overhead Node.js REST API framework" },
        { name: "Django", icon: <DiDjango className="text-2xl text-emerald-500" />, desc: "Robust Python framework for secure web backends & AI services" },
        { name: "Laravel", icon: <SiLaravel className="text-2xl text-red-500" />, desc: "PHP framework with expressive syntax and elegant ORM" },
        { name: "Express.js", icon: <SiExpress className="text-2xl text-zinc-300" />, desc: "Minimalist Node.js framework for fast microservices" },
      ],
    },
    {
      category: "Databases & Cloud",
      icon: <Database className="w-5 h-5 text-amber-400" />,
      skills: [
        { name: "PostgreSQL", icon: <DiPostgresql className="text-2xl text-indigo-400" />, desc: "Advanced relational database for enterprise systems" },
        { name: "MySQL", icon: <DiMysql className="text-2xl text-blue-400" />, desc: "Relational database optimized for production apps" },
        { name: "Firebase", icon: <DiFirebase className="text-2xl text-amber-500" />, desc: "Auth, Firestore, Cloud Messaging & Analytics" },
        { name: "Docker", icon: <SiDocker className="text-2xl text-sky-400" />, desc: "Containerization for consistent deployment environments" },
      ],
    },
    {
      category: "Web & AI Integrations",
      icon: <Sparkles className="w-5 h-5 text-purple-400" />,
      skills: [
        { name: "Next.js", icon: <RiNextjsFill className="text-2xl text-white" />, desc: "Fullstack React framework with App Router & SSR" },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="text-2xl text-cyan-400" />, desc: "Modern utility-first responsive styling" },
        { name: "AI Integration", icon: <Sparkles className="text-2xl text-purple-400" />, desc: "Integrating LLM APIs & AI features into mobile apps" },
      ],
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
      {skillCategories.map((group, gIdx) => (
        <div
          key={gIdx}
          className="p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800/80 hover:border-zinc-700/80 transition-all hover:bg-zinc-900/80"
        >
          <div className="flex items-center gap-3 mb-5 pb-3 border-b border-zinc-800/80">
            <div className="p-2 rounded-xl bg-zinc-800/60 border border-zinc-700/60">
              {group.icon}
            </div>
            <h3 className="text-lg font-bold text-white">{group.category}</h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {group.skills.map((skill, sIdx) => (
              <div
                key={sIdx}
                className="p-3 rounded-xl bg-zinc-950/50 border border-zinc-800/60 hover:border-zinc-700 hover:bg-zinc-800/40 transition-all group flex flex-col gap-1.5"
              >
                <div className="flex items-center gap-2.5">
                  <div className="transition-transform group-hover:scale-110 duration-200">
                    {skill.icon}
                  </div>
                  <span className="text-sm font-semibold text-zinc-200 group-hover:text-white">
                    {skill.name}
                  </span>
                </div>
                <p className="text-xs text-zinc-500 line-clamp-2">
                  {skill.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
