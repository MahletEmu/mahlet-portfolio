"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Award, CheckCircle2, ExternalLink, Eye, X, Download, ShieldCheck } from "lucide-react";
import { CERTIFICATIONS, Certification } from "@/data/portfolioData";

export default function Certificates() {
  const [selectedCert, setSelectedCert] = useState<Certification | null>(null);

  const handleSeeProject = (e: React.MouseEvent, projectId: string) => {
    e.preventDefault();

    // 1. Dispatch event to Projects component to switch filter and activate highlight
    if (typeof window !== "undefined") {
      const event = new CustomEvent("portfolio:scroll-to-project", {
        detail: { projectId },
      });
      window.dispatchEvent(event);
    }

    // 2. Direct smooth scroll to the exact project card
    const targetEl = document.getElementById(projectId);
    if (targetEl) {
      targetEl.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <section id="certificates" className="py-24 md:py-32 bg-navy-950 relative border-t border-surface-border/50">
      {/* Background ambient lighting */}
      <div className="absolute left-1/3 top-1/3 w-96 h-96 bg-brand-violet/10 blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header matching CodeCraft */}
        <div className="flex flex-col items-center text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-purple/10 border border-brand-purple/30 text-brand-purple text-xs font-semibold tracking-widest uppercase mb-3">
            <Award className="w-3.5 h-3.5" />
            <span>CERTIFICATES &amp; ACCREDITATIONS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
            Verified Frontend Credentials
          </h2>
          <p className="text-sm sm:text-base text-slate-400 max-w-2xl leading-relaxed">
            Professional certifications awarded for practical frontend engineering, responsive web architecture, live REST API integration, and generative AI interfaces.
          </p>
        </div>

        {/* 3-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CERTIFICATIONS.map((cert) => (
            <div
              key={cert.id}
              className="group rounded-2xl bg-card-gradient border border-surface-border hover:border-brand-purple/50 transition-all duration-300 shadow-card hover:shadow-card-hover flex flex-col justify-between overflow-hidden hover:-translate-y-1.5"
            >
              <div>
                {/* Certificate Preview Card */}
                <div 
                  onClick={() => setSelectedCert(cert)}
                  className="relative w-full h-56 bg-navy-900 cursor-pointer overflow-hidden border-b border-surface-border/80 group/img"
                  title="Click to expand certificate"
                >
                  <Image
                    src={cert.image}
                    alt={cert.title}
                    fill
                    className="object-cover object-center group-hover/img:scale-105 transition-transform duration-500 filter contrast-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-950/30 to-transparent opacity-80 group-hover/img:opacity-50 transition-opacity" />

                  {/* Issuer Pill */}
                  <div className="absolute top-4 left-4">
                    <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-white px-2.5 py-1 rounded-lg bg-black/60 backdrop-blur-md border border-white/10">
                      <ShieldCheck className="w-3 h-3 text-brand-purple" />
                      {cert.issuer}
                    </span>
                  </div>

                  {/* Verified Badge */}
                  <div className="absolute top-4 right-4">
                    <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-300 px-2.5 py-1 rounded-lg bg-emerald-950/80 backdrop-blur-md border border-emerald-500/30">
                      <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                      Verified
                    </span>
                  </div>

                  {/* Hover Overlay Button */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/img:opacity-100 transition-opacity bg-black/40 backdrop-blur-xs">
                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-brand-violet text-white text-xs font-semibold shadow-glow-sm">
                      <Eye className="w-3.5 h-3.5" />
                      Preview Certificate
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 space-y-1.5">
                  <div className="flex items-center justify-between text-xs font-mono text-brand-purple">
                    <span>{cert.program}</span>
                    <span className="text-slate-400 font-sans text-[11px]">{cert.issueDate}</span>
                  </div>
                  <h3 className="text-lg font-bold text-white group-hover:text-brand-purple transition-colors">
                    {cert.title}
                  </h3>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="p-5 pt-0 border-t border-surface-border/40 mt-3 flex items-center justify-between">
                <button
                  onClick={() => setSelectedCert(cert)}
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-brand-purple hover:text-white transition-colors"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>View Certificate</span>
                </button>

                <button
                  onClick={(e) => handleSeeProject(e, cert.projectId)}
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-slate-300 hover:text-white group/btn transition-colors"
                  title={`Jump directly to ${cert.projectTitle}`}
                >
                  <span className="group-hover/btn:underline">See Project</span>
                  <ExternalLink className="w-3.5 h-3.5 text-brand-purple group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* High-Resolution Certificate Modal */}
      {selectedCert && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
          <div className="relative w-full max-w-4xl bg-navy-900 border border-brand-purple/40 rounded-2xl shadow-card overflow-hidden">
            
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-surface-border bg-navy-950">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-brand-purple/20 border border-brand-purple/40 flex items-center justify-center">
                  <Award className="w-5 h-5 text-brand-purple" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white">{selectedCert.title}</h3>
                  <p className="text-xs text-slate-400">{selectedCert.issuer} • Issued {selectedCert.issueDate}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <a
                  href={selectedCert.image}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-lg text-slate-300 hover:text-white bg-navy-800 hover:bg-slate-700 border border-surface-border transition-colors inline-flex items-center gap-1.5 text-xs font-semibold"
                  title="Open full size certificate image in new tab"
                >
                  <Download className="w-3.5 h-3.5 text-brand-purple" />
                  <span>View Original Image</span>
                </a>
                <button
                  onClick={() => setSelectedCert(null)}
                  className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Modal Certificate Image */}
            <div className="p-4 sm:p-6 bg-navy-950/90 flex items-center justify-center max-h-[72vh] overflow-auto">
              <div className="relative w-full aspect-[3508/2479] max-w-3xl rounded-xl overflow-hidden border border-brand-purple/30 shadow-2xl bg-white">
                <Image
                  src={selectedCert.image}
                  alt={selectedCert.title}
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>

            {/* Modal Footer Info */}
            <div className="px-6 py-4 border-t border-surface-border bg-navy-950 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>
                  Awarded to <strong className="text-white">{selectedCert.recipient}</strong> • {selectedCert.issuerBadge}
                </span>
              </div>
              <button
                onClick={() => setSelectedCert(null)}
                className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-medium transition-colors"
              >
                Close Preview
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}
