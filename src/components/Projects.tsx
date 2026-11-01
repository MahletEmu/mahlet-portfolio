"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { ArrowUpRight, Github, ExternalLink, Award } from "lucide-react";
import { PROJECTS, Project } from "@/data/portfolioData";
import ProjectModal from "./ProjectModal";

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<"All" | "Full Stack" | "Frontend">("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [highlightedId, setHighlightedId] = useState<string | null>(null);

  useEffect(() => {
    const handleScrollToProject = (e: Event) => {
      const customEvent = e as CustomEvent<{ projectId: string }>;
      const pId = customEvent.detail?.projectId;
      if (!pId) return;

      // Always ensure the project is visible by switching to All filter
      setActiveFilter("All");
      setHighlightedId(pId);

      setTimeout(() => {
        const el = document.getElementById(pId);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "center" });
        }
      }, 80);

      setTimeout(() => {
        setHighlightedId(null);
      }, 3000);
    };

    window.addEventListener("portfolio:scroll-to-project", handleScrollToProject);
    return () => {
      window.removeEventListener("portfolio:scroll-to-project", handleScrollToProject);
    };
  }, []);

  const filteredProjects = PROJECTS.filter((project) => {
    if (activeFilter === "All") return true;
    return project.category === activeFilter;
  });

  return (
    <section id="projects" className="py-24 md:py-32 bg-navy-950 relative border-t border-surface-border/50 overflow-hidden w-full max-w-full">
      {/* Background ambient lighting */}
      <div className="absolute right-1/4 top-1/4 w-96 max-w-full h-96 bg-brand-violet/10 blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* Section Header exactly like CodeCraft */}
        <div className="flex flex-col items-center text-center mb-12 sm:mb-16">
          <span className="text-xs font-semibold tracking-widest text-brand-purple uppercase mb-2">
            FEATURED PROJECTS
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">
            Some of My Recent Work
          </h2>

          {/* Clean Category Filters */}
          <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 p-1 sm:p-1.5 bg-surface-card/80 backdrop-blur-md rounded-2xl border border-surface-border max-w-full">
            {(["All", "Full Stack", "Frontend"] as const).map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-3.5 sm:px-5 py-1.5 sm:py-2 text-xs sm:text-sm font-semibold rounded-xl transition-all duration-300 ${
                  activeFilter === filter
                    ? "bg-gradient-to-r from-brand-violet to-brand-electric text-white shadow-glow-sm"
                    : "text-slate-400 hover:text-white hover:bg-slate-800/40"
                }`}
              >
                {filter === "All" ? "All Projects" : filter}
              </button>
            ))}
          </div>
        </div>

        {/* 3-Card Grid Matching CodeCraft Reference */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              id={project.id}
              className={`group rounded-2xl bg-card-gradient border transition-all duration-500 shadow-card flex flex-col justify-between overflow-hidden hover:-translate-y-1.5 scroll-mt-28 ${
                highlightedId === project.id
                  ? "border-brand-purple ring-2 ring-brand-purple shadow-glow-purple scale-[1.03] -translate-y-2 z-20"
                  : "border-surface-border hover:border-brand-purple/50 hover:shadow-card-hover"
              }`}
            >
              <div>
                {/* Project Image & Number Badge */}
                <div className="relative w-full h-52 bg-navy-900 overflow-hidden border-b border-surface-border/80">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500 filter contrast-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-950/20 to-transparent" />
                  
                  {/* Top Number Badge like Reference '01', '02', '03' */}
                  <div className="absolute top-4 left-4">
                    <span className="font-mono text-xs font-bold text-white px-2.5 py-1 rounded-lg bg-black/60 backdrop-blur-md border border-white/10">
                      {project.number}
                    </span>
                  </div>

                  {/* Category Pill */}
                  <div className="absolute top-4 right-4">
                    <span className="text-[11px] font-medium text-slate-300 px-2.5 py-1 rounded-lg bg-black/60 backdrop-blur-md border border-white/10">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-3">
                  <h3 className="text-xl font-bold text-white group-hover:text-brand-purple transition-colors">
                    {project.title}
                  </h3>

                  {project.certificateId && (
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-lg bg-amber-950/40 border border-amber-500/40 text-amber-300 text-[11px] font-semibold">
                      <Award className="w-3.5 h-3.5 text-amber-400" />
                      <span>SheCodes Certified Project</span>
                    </div>
                  )}

                  <p className="text-sm text-slate-400 line-clamp-2 leading-relaxed">
                    {project.shortDescription}
                  </p>
                </div>
              </div>

              {/* Action Buttons: 'View Project' and 'Live Demo' */}
              <div className="p-6 pt-0 flex items-center justify-between border-t border-surface-border/40 mt-4">
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="inline-flex items-center gap-1 text-xs sm:text-sm font-semibold text-brand-purple hover:text-white transition-colors"
                  >
                    <span>View Project</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>

                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs sm:text-sm font-semibold text-emerald-400 hover:text-emerald-300 transition-colors"
                      title="Open live website"
                    >
                      <span>Live Demo</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>

                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                    title="View GitHub Repository"
                    aria-label="GitHub Repository"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Case Study Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
