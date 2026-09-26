"use client";

import { useState } from "react";
import Photo from "@/components/home/Photo";
import Socials from "@/components/home/Socials";
import Stats from "@/components/home/Stats";
import { ProjectLists } from "@/constants/project";
import ProjectCard from "@/components/projects/ProjectCard";
import ProjectFilter from "@/components/projects/ProjectFilter";
import ExperienceTimeline from "@/components/resume/ExperienceTimeline";
import SkillsGrid from "@/components/resume/SkillsGrid";
import ContactSection from "@/components/contact/ContactSection";
import { ArrowDown, FileText, FolderGit2, Briefcase, Wrench } from "lucide-react";

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const allProjects = ProjectLists.data;
  const categories = ["All", "Mobile App", "Mobile App & Web"];

  const counts: Record<string, number> = {
    All: allProjects.length,
    "Mobile App": allProjects.filter((p) => p.category === "Mobile App").length,
    "Mobile App & Web": allProjects.filter((p) => p.category === "Mobile App & Web").length,
  };

  const filteredProjects =
    selectedCategory === "All"
      ? allProjects
      : allProjects.filter((p) => p.category === selectedCategory);

  return (
    <div className="flex flex-col min-h-screen">
      <section id="about" className="relative pt-12 pb-16 sm:pt-20 sm:pb-24 overflow-hidden">
        <div className="absolute top-10 left-1/4 -translate-x-1/2 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none -z-10" />
        <div className="absolute top-32 right-1/4 translate-x-1/2 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none -z-10" />
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-16">
            <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 text-xs text-zinc-300 font-medium mb-6 shadow-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                <span>Available for Full-time &amp; Contract Roles</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-5 leading-[1.1]">
                Hi, I&apos;m <span className="bg-linear-to-r from-sky-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">Arif Ilham</span>
              </h1>
              <p className="text-lg sm:text-xl font-medium text-zinc-300 mb-4">
                Mobile AI Engineer
              </p>
              <p className="text-sm sm:text-base text-zinc-400 max-w-xl mb-8 leading-relaxed">
                With 2+ years of production experience, I build high-performance iOS and Android applications using <span className="text-zinc-200 font-semibold">Flutter</span> and <span className="text-zinc-200 font-semibold">React Native</span>, supported by robust backend architectures with <span className="text-zinc-200 font-semibold">Fastify</span>, <span className="text-zinc-200 font-semibold">Django</span>, and modern AI integrations. Multiple applications successfully shipped to App Store and Google Play.
              </p>
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3.5 mb-8 w-full sm:w-auto">
                <a
                  href="/assets/Portfolio Ilham.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white text-zinc-950 font-bold text-sm hover:bg-zinc-200 transition-all shadow-md shadow-white/5 cursor-pointer"
                >
                  <FileText className="w-4 h-4 text-sky-600" />
                  <span>Download Resume (PDF)</span>
                </a>
                <a
                  href="#projects"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-zinc-900 text-zinc-200 font-semibold text-sm hover:bg-zinc-800 hover:text-white border border-zinc-700/80 transition-all cursor-pointer"
                >
                  <span>View Projects</span>
                  <ArrowDown className="w-4 h-4 text-zinc-400" />
                </a>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono text-zinc-500 uppercase tracking-wider mr-1">
                  Connect:
                </span>
                <Socials />
              </div>
            </div>
            <div className="flex-1 flex justify-center lg:justify-end">
              <Photo />
            </div>
          </div>
          <div className="mt-16 sm:mt-20">
            <Stats />
          </div>
        </div>
      </section>
      <section id="projects" className="py-20 sm:py-24 border-t border-zinc-800/60 bg-zinc-950/40 relative">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-mono mb-4">
              <FolderGit2 className="w-3.5 h-3.5" />
              <span>PRODUCTION WORK</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
              Featured Projects
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
              Real-world applications engineered for public sector, commercial enterprises, and thousands of end users. Verified on the Apple App Store and Google Play Store.
            </p>
          </div>
          <div className="mb-12">
            <ProjectFilter
              categories={categories}
              activeCategory={selectedCategory}
              onSelectCategory={setSelectedCategory}
              counts={counts}
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.num} project={project} />
            ))}
          </div>
        </div>
      </section>
      <section id="experience" className="py-20 sm:py-24 border-t border-zinc-800/60 relative">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono mb-4">
              <Briefcase className="w-3.5 h-3.5" />
              <span>CAREER JOURNEY</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
              Work Experience &amp; Impact
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
              Track record of delivering production-grade mobile applications and collaborating in fast-paced software engineering teams.
            </p>
          </div>
          <ExperienceTimeline />
        </div>
      </section>
      <section id="skills" className="py-20 sm:py-24 border-t border-zinc-800/60 bg-zinc-950/40 relative">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-mono mb-4">
              <Wrench className="w-3.5 h-3.5" />
              <span>TECHNICAL ARSENAL</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
              Skills &amp; Technology Stack
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
              A robust engineering toolkit developed through hands-on architecture, code reviews, API integrations, and mobile releases.
            </p>
          </div>
          <SkillsGrid />
        </div>
      </section>
      <ContactSection />
    </div>
  );
}