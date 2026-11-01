"use client";

import React from "react";
import { GraduationCap, MapPin, Calendar, Briefcase, Sparkles, CheckCircle } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";

export default function Education() {
  const { education } = PERSONAL_INFO;

  return (
    <section id="education" className="py-20 md:py-28 bg-navy-900/40 border-t border-surface-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12 sm:mb-16">
          <span className="text-xs font-semibold tracking-wider text-brand-purple uppercase px-3 py-1 rounded-full bg-brand-purple/10 border border-brand-purple/20 mb-3">
            ACADEMIC FOUNDATION
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white max-w-xl">
            Education & Career Aspirations
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* University Card */}
          <div className="lg:col-span-6 p-6 sm:p-8 rounded-2xl bg-card-gradient border border-surface-border hover:border-brand-purple/40 transition-all duration-300 shadow-card flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-brand-purple/10 border border-brand-purple/25 flex items-center justify-center text-brand-purple">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-mono font-medium text-brand-purple px-2 py-0.5 rounded bg-brand-purple/10 border border-brand-purple/20">
                    {education.level}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">
                    {education.degree}
                  </h3>
                </div>
              </div>

              <div className="space-y-2 pt-2 text-sm text-slate-300">
                <p className="text-base font-semibold text-slate-100">
                  {education.institution}
                </p>
                <div className="flex items-center gap-2 text-slate-400">
                  <MapPin className="w-4 h-4 text-brand-purple" />
                  <span>{education.location}</span>
                </div>
                <div className="flex items-center gap-2 text-slate-400">
                  <Calendar className="w-4 h-4 text-brand-purple" />
                  <span>{education.expectedGraduation}</span>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-surface-border space-y-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Core Academic Focus Areas
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-slate-300 pt-1">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-3.5 h-3.5 text-brand-purple" />
                    <span>Data Structures & Algorithms</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-3.5 h-3.5 text-brand-purple" />
                    <span>Software Architecture & Design</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-3.5 h-3.5 text-brand-purple" />
                    <span>Database Management Systems</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-3.5 h-3.5 text-brand-purple" />
                    <span>Web & Distributed Systems</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Opportunities / Availability Card */}
          <div className="lg:col-span-6 p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-brand-violet/15 via-navy-900 to-navy-950 border border-brand-purple/30 shadow-card flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-brand-violet to-brand-electric flex items-center justify-center text-white shadow-glow-sm">
                <Briefcase className="w-6 h-6" />
              </div>

              <div>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 mb-3">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  Currently Available for Internships
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
                  Open to Opportunities & Collaborations
                </h3>
              </div>

              <blockquote className="p-4 rounded-xl bg-navy-950/70 border border-surface-border text-sm sm:text-base text-slate-200 italic leading-relaxed">
                &ldquo;{education.availability}&rdquo;
              </blockquote>

              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Interested in teams developing software with real impact, whether in frontend engineering, full-stack application development, or modern AI integration workflows.
              </p>
            </div>

            <div className="pt-6">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3 text-sm font-semibold text-white bg-gradient-to-r from-brand-violet to-brand-electric hover:from-brand-purple hover:to-brand-fuchsia rounded-xl shadow-glow-sm transition-all duration-300"
              >
                <span>Discuss an Opportunity</span>
                <span className="font-mono">→</span>
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

