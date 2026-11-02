"use client";

import React from "react";
import { Calendar, Code2, GraduationCap, Trophy, User } from "lucide-react";
import { PERSONAL_INFO, STATS } from "@/data/portfolioData";

export default function About() {
  const getStatIcon = (icon: string) => {
    switch (icon) {
      case "Calendar":
        return <Calendar className="w-5 h-5 text-brand-purple" />;
      case "Code2":
        return <Code2 className="w-5 h-5 text-brand-electric" />;
      case "GraduationCap":
        return <GraduationCap className="w-5 h-5 text-cyan-400" />;
      case "Trophy":
        return <Trophy className="w-5 h-5 text-amber-400" />;
      default:
        return <User className="w-5 h-5 text-brand-purple" />;
    }
  };

  return (
    <section id="about" className="py-24 md:py-32 bg-navy-950 relative border-t border-surface-border/50 overflow-hidden w-full max-w-full">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Text & CTA */}
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-semibold tracking-widest text-brand-purple uppercase">
              ABOUT ME
            </span>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight">
              Passionate about building for the web
            </h2>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              I&apos;m a fourth-year Software Engineering student at Bahir Dar University in Ethiopia. I enjoy building clean, responsive, and easy-to-use websites and web applications with modern tools.
            </p>

            <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
              I love learning by doing—turning ideas into working projects, exploring new technologies, and improving my development skills with every project I create.
            </p>

            <div className="pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-5 py-3 text-sm font-medium text-white bg-surface-card hover:bg-surface-hover border border-surface-border hover:border-brand-purple/50 rounded-xl transition-all duration-300 hover:-translate-y-0.5"
              >
                <span>View My Projects</span>
                <User className="w-4 h-4 text-brand-purple" />
              </a>
            </div>
          </div>

          {/* Right Column: 2x2 Clean Stat Cards Matching CodeCraft */}
          <div className="lg:col-span-6 grid grid-cols-2 gap-3 sm:gap-5 w-full">
            {STATS.map((stat, idx) => (
              <div
                key={idx}
                className="p-4 sm:p-6 rounded-2xl bg-surface-card/70 border border-surface-border hover:border-brand-purple/40 transition-all duration-300 shadow-card hover:-translate-y-1 group flex flex-col justify-between"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-navy-900 border border-surface-border flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-105 transition-transform shrink-0">
                  {getStatIcon(stat.icon)}
                </div>
                <div>
                  <div className="text-xl sm:text-3xl font-bold text-white mb-0.5 sm:mb-1 tracking-tight">
                    {stat.value}
                  </div>
                  <div className="text-[11px] sm:text-xs md:text-sm text-slate-400 font-medium leading-tight">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
