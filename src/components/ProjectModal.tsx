"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { X, Github, ExternalLink, CheckCircle, Cpu, Layers, AlertCircle, ArrowRight } from "lucide-react";
import { Project } from "@/data/portfolioData";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-black/80 backdrop-blur-md overflow-y-auto animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl my-8 bg-navy-900 border border-brand-purple/30 rounded-2xl shadow-card overflow-hidden text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-surface-border bg-navy-950/80">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs font-semibold text-brand-purple px-2 py-0.5 rounded bg-brand-purple/10 border border-brand-purple/20">
              {project.category}
            </span>
            <span className="text-xs text-slate-400 font-mono">Project {project.number}</span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="max-h-[80vh] overflow-y-auto p-6 sm:p-8 space-y-6">
          
          {/* Title & Tagline */}
          <div>
            <h2 id="modal-project-title" className="text-2xl sm:text-3xl font-bold text-white mb-2">
              {project.title}
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              {project.tagline}
            </p>
          </div>

          {/* Project Media Visual */}
          <div className="relative w-full h-56 sm:h-72 rounded-xl overflow-hidden bg-navy-950 border border-surface-border">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 800px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent" />
            <div className="absolute bottom-3 left-4">
              <span className="px-3 py-1 rounded-full text-xs font-medium bg-black/60 text-white backdrop-blur-md border border-white/10">
                {project.badge}
              </span>
            </div>
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-600/90 hover:bg-emerald-500 text-white backdrop-blur-md border border-emerald-400/40 transition-all flex items-center gap-1 shadow-md hover:scale-105"
                title="Open live website in a new tab"
              >
                <span>Live Website</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            )}
          </div>

          {/* Tech Stack Pills */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2.5 flex items-center gap-1.5">
              <Layers className="w-4 h-4 text-brand-purple" />
              <span>Technology Stack</span>
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech, i) => (
                <span
                  key={i}
                  className="px-2.5 py-1 rounded-md text-xs font-medium bg-brand-purple/10 border border-brand-purple/20 text-purple-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Problem & Solution Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-navy-950/60 border border-surface-border">
              <h4 className="text-xs font-bold uppercase tracking-wider text-rose-400 mb-2 flex items-center gap-1.5">
                <AlertCircle className="w-4 h-4" />
                <span>Problem Addressed</span>
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {project.caseStudy.problem}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-navy-950/60 border border-surface-border">
              <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-400 mb-2 flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4" />
                <span>Engineering Solution</span>
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {project.caseStudy.solution}
              </p>
            </div>
          </div>

          {/* Implemented Features Checklist */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-1.5">
              <Cpu className="w-4 h-4 text-brand-purple" />
              <span>Verified Implemented Features</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {project.caseStudy.coreFeatures.map((feat, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-2.5 p-2.5 rounded-lg bg-surface-card/60 border border-surface-border text-xs sm:text-sm text-slate-200"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-purple mt-1.5 shrink-0" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Architecture & Decisions */}
          <div className="space-y-4">
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                Technical Architecture
              </h4>
              <ul className="list-disc list-inside space-y-1 text-xs sm:text-sm text-slate-300">
                {project.caseStudy.technicalArchitecture.map((arch, aIdx) => (
                  <li key={aIdx}>{arch}</li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                Key Technical Decisions & Lessons
              </h4>
              <ul className="list-disc list-inside space-y-1 text-xs sm:text-sm text-slate-300">
                {project.caseStudy.keyDecisions.map((dec, dIdx) => (
                  <li key={dIdx}>{dec}</li>
                ))}
              </ul>
            </div>
          </div>

        </div>

        {/* Modal Footer with Actions */}
        <div className="flex flex-wrap items-center justify-between gap-3 px-6 py-4 border-t border-surface-border bg-navy-950/80">
          <div className="flex items-center gap-3">
            {project.githubUrl ? (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-semibold text-white bg-slate-800 hover:bg-slate-700 border border-surface-border rounded-lg transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>View on GitHub</span>
              </a>
            ) : (
              <span className="text-xs text-slate-500">Repository available on request</span>
            )}

            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-brand-violet to-brand-electric rounded-lg shadow-glow-sm"
              >
                <span>Live Demo</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
          </div>

          <button
            onClick={onClose}
            className="px-4 py-2 text-xs sm:text-sm font-medium text-slate-300 hover:text-white transition-colors"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
}

