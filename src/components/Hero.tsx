"use client";

import React from "react";
import Image from "next/image";
import { Download, ArrowUpRight, Terminal } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";

const TECH_BADGES = [
  { name: "HTML", bg: "bg-orange-500/10", border: "border-orange-500/30", text: "text-orange-400" },
  { name: "CSS", bg: "bg-blue-500/10", border: "border-blue-500/30", text: "text-blue-400" },
  { name: "JavaScript", bg: "bg-amber-500/10", border: "border-amber-500/30", text: "text-amber-300" },
  { name: "TypeScript", bg: "bg-blue-600/15", border: "border-blue-500/30", text: "text-blue-400" },
  { name: "React", bg: "bg-cyan-500/10", border: "border-cyan-500/30", text: "text-cyan-400" },
  { name: "Next.js", bg: "bg-black/60", border: "border-slate-700", text: "text-white" },
  { name: "Node.js", bg: "bg-emerald-500/10", border: "border-emerald-500/30", text: "text-emerald-400" },
  { name: "Git", bg: "bg-orange-600/10", border: "border-orange-600/30", text: "text-orange-400" },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative pt-28 pb-20 sm:pt-32 sm:pb-24 md:pt-40 md:pb-32 overflow-hidden bg-navy-950 w-full max-w-full"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] max-w-full h-[500px] bg-gradient-radial from-brand-violet/20 via-brand-indigo/10 to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column matching CodeCraft */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6">
            
            {/* Tag / Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-purple/10 border border-brand-purple/25 text-xs font-semibold text-brand-purple tracking-widest uppercase">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>I&apos;M A SOFTWARE DEVELOPER</span>
            </div>

            {/* Headline matching CodeCraft */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-tight">
                Hi, I&apos;m <span className="text-brand-purple">Mahlet</span>
              </h1>
              <p className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-slate-300 leading-snug">
                I build things for the web.
              </p>
            </div>

            {/* Concise Supporting Statement */}
            <p className="text-base sm:text-lg text-slate-300 max-w-xl leading-relaxed">
              I&apos;m a fourth-year Software Engineering student at Bahir Dar University. I love building practical, responsive web applications and learning new technologies through hands-on projects.
            </p>

            {/* Actions: View My Work & Download CV */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-gradient-to-r from-brand-violet to-brand-electric hover:from-brand-purple hover:to-brand-fuchsia rounded-xl shadow-glow-sm hover:shadow-glow-purple transition-all duration-300 hover:-translate-y-0.5"
              >
                <span>View My Work</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <a
                href={PERSONAL_INFO.contacts.cvUrl}
                download="Mahlet_Nigussie_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3.5 text-sm font-semibold text-slate-200 bg-surface-card hover:bg-surface-hover border border-surface-border hover:border-brand-purple/50 rounded-xl transition-all duration-300 hover:-translate-y-0.5"
              >
                <Download className="w-4 h-4 text-brand-purple" />
                <span>Download CV</span>
              </a>
            </div>

            {/* TECHNOLOGIES I WORK WITH strip */}
            <div className="pt-8 w-full border-t border-surface-border/50">
              <p className="text-xs uppercase font-semibold tracking-widest text-slate-400 mb-3">
                TECHNOLOGIES I WORK WITH
              </p>
              <div className="grid grid-cols-4 gap-1.5 sm:gap-2.5 w-full">
                {TECH_BADGES.map((badge) => (
                  <span
                    key={badge.name}
                    className={`inline-flex items-center justify-center px-1 sm:px-3 py-2 rounded-lg text-[10px] sm:text-xs font-semibold border text-center truncate ${badge.bg} ${badge.border} ${badge.text}`}
                  >
                    {badge.name}
                  </span>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Purple Circle Halo + Portrait + Floating Code Card */}
          <div className="lg:col-span-5 flex justify-center items-center relative w-full max-w-full overflow-hidden">
            <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md flex flex-col items-center">
              
              {/* Large Purple Glowing Backdrop Circle */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full bg-gradient-to-tr from-brand-violet/60 via-brand-purple/40 to-indigo-600/30 blur-2xl -z-10 animate-pulse pointer-events-none" />

              {/* Portrait Frame */}
              <div className="relative p-2 rounded-full bg-gradient-to-tr from-brand-violet via-brand-purple to-indigo-500 shadow-glow-purple">
                <div className="relative w-52 h-52 sm:w-64 sm:h-64 md:w-72 md:h-72 rounded-full overflow-hidden bg-navy-900 border-4 border-navy-950">
                  <Image
                    src="/images/mahlet-portrait.jpg"
                    alt="Mahlet Nigussie"
                    fill
                    priority
                    sizes="(max-width: 640px) 208px, (max-width: 768px) 256px, 288px"
                    className="object-cover object-top filter contrast-105"
                  />
                </div>
              </div>

              {/* Floating Code Card matching CodeCraft */}
              <div className="w-full max-w-full mt-6 bg-navy-900/95 backdrop-blur-md border border-brand-purple/30 rounded-xl p-3.5 sm:p-4 shadow-card text-left font-mono text-xs text-slate-300 hover:border-brand-purple/60 transition-colors overflow-x-auto">
                <div className="flex items-center justify-between pb-2 mb-2 border-b border-surface-border">
                  <div className="flex items-center gap-1.5 text-slate-400">
                    <Terminal className="w-3.5 h-3.5 text-brand-purple" />
                    <span className="text-[11px] font-semibold text-slate-300">&lt;/&gt; Code</span>
                  </div>
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 animate-ping" />
                </div>

                <div className="space-y-1 text-[11px] break-words">
                  <div>
                    <span className="text-brand-purple">const</span> <span className="text-blue-300">developer</span> = &#123;
                  </div>
                  <div className="pl-3 sm:pl-4">
                    <span className="text-slate-400">name:</span> <span className="text-emerald-300">&quot;Mahlet&quot;</span>,
                  </div>
                  <div className="pl-3 sm:pl-4">
                    <span className="text-slate-400">skills:</span> [
                    <span className="text-amber-300">&quot;HTML&quot;</span>,{" "}
                    <span className="text-amber-300">&quot;CSS&quot;</span>,{" "}
                    <span className="text-amber-300">&quot;JS&quot;</span>,{" "}
                    <span className="text-amber-300">&quot;React&quot;</span>],
                  </div>
                  <div className="pl-3 sm:pl-4">
                    <span className="text-slate-400">focus:</span> <span className="text-purple-300">&quot;Web Engineering&quot;</span>
                  </div>
                  <div>&#125;;</div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
