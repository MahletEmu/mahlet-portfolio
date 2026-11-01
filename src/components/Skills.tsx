"use client";

import React from "react";
import { MASTERED_SKILLS } from "@/data/portfolioData";
import { 
  Code, 
  FileCode2, 
  Globe, 
  Layers, 
  Cpu, 
  GitBranch, 
  Terminal, 
  Sparkles, 
  Box 
} from "lucide-react";

export default function Skills() {
  const getSkillIcon = (icon: string) => {
    switch (icon) {
      case "html":
        return (
          <div className="w-8 h-8 rounded-lg bg-orange-500/10 border border-orange-500/25 flex items-center justify-center text-orange-400 font-bold text-xs">
            5
          </div>
        );
      case "css":
        return (
          <div className="w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-500/25 flex items-center justify-center text-blue-400 font-bold text-xs">
            3
          </div>
        );
      case "js":
        return (
          <div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/25 flex items-center justify-center text-amber-300 font-bold text-xs">
            JS
          </div>
        );
      case "react":
        return (
          <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/25 flex items-center justify-center text-cyan-400 font-bold text-xs">
            ⚛
          </div>
        );
      case "next":
        return (
          <div className="w-8 h-8 rounded-lg bg-slate-800 border border-slate-600 flex items-center justify-center text-white font-bold text-xs font-mono">
            N
          </div>
        );
      case "ts":
        return (
          <div className="w-8 h-8 rounded-lg bg-blue-600/15 border border-blue-500/30 flex items-center justify-center text-blue-400 font-bold text-xs">
            TS
          </div>
        );
      case "node":
        return (
          <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/25 flex items-center justify-center text-emerald-400 font-bold text-xs">
            <Terminal className="w-4 h-4" />
          </div>
        );
      case "tailwind":
        return (
          <div className="w-8 h-8 rounded-lg bg-sky-500/10 border border-sky-500/25 flex items-center justify-center text-sky-400 font-bold text-xs">
            <Sparkles className="w-4 h-4" />
          </div>
        );
      case "git":
        return (
          <div className="w-8 h-8 rounded-lg bg-orange-600/10 border border-orange-600/25 flex items-center justify-center text-orange-400 font-bold text-xs">
            <GitBranch className="w-4 h-4" />
          </div>
        );
      default:
        return (
          <div className="w-8 h-8 rounded-lg bg-purple-500/10 border border-purple-500/25 flex items-center justify-center text-purple-400 font-bold text-xs">
            <Code className="w-4 h-4" />
          </div>
        );
    }
  };

  return (
    <section id="skills" className="py-24 md:py-32 bg-navy-950 relative overflow-hidden w-full max-w-full">
      {/* Background ambient radial glow matching CodeCraft */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] max-w-full h-[400px] bg-gradient-radial from-brand-violet/10 via-brand-indigo/5 to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* Section Header exactly like CodeCraft */}
        <div className="flex flex-col items-center text-center mb-16 md:mb-20">
          <span className="text-xs font-semibold tracking-widest text-brand-purple uppercase mb-2">
            MY SKILLS
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
            Technologies I Master
          </h2>
        </div>

        {/* 3 Columns Grid with Progress Bars */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-10">
          {MASTERED_SKILLS.map((skill, index) => (
            <div key={index} className="flex flex-col space-y-3 group">
              
              {/* Icon, Name & Percentage */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  {getSkillIcon(skill.icon)}
                  <span className="text-base font-semibold text-slate-100 group-hover:text-brand-purple transition-colors">
                    {skill.name}
                  </span>
                </div>
                <span className="text-sm font-semibold text-slate-400 font-mono">
                  {skill.percentage}%
                </span>
              </div>

              {/* Glowing Purple Progress Track */}
              <div className="relative w-full h-2 rounded-full bg-navy-900 border border-slate-800/80 overflow-hidden">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-brand-indigo via-brand-violet to-brand-electric shadow-glow-sm transition-all duration-1000 ease-out"
                  style={{ width: `${skill.percentage}%` }}
                />
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
