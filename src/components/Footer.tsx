"use client";

import React from "react";
import { Code2, ArrowUp, Github, Linkedin } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    const contactInfoEl = document.getElementById("contact-info") || document.getElementById("contact");
    if (contactInfoEl) {
      contactInfoEl.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <footer className="border-t border-surface-border/60 bg-navy-950 py-10 text-slate-400 text-xs sm:text-sm overflow-hidden w-full max-w-full">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-6 border-b border-surface-border/40">
          {/* Brand Wordmark */}
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-lg bg-gradient-to-tr from-brand-violet to-brand-electric flex items-center justify-center text-white shadow-glow-sm">
              <Code2 className="w-3.5 h-3.5" />
            </div>
            <span className="font-mono text-base font-semibold text-white">
              <span className="text-brand-purple">&lt;</span>
              Mahlet<span className="text-slate-400">.dev</span>
              <span className="text-brand-purple"> /&gt;</span>
            </span>
          </div>

          {/* Clean Nav Links */}
          <nav className="flex flex-wrap justify-center gap-6 text-xs sm:text-sm font-medium">
            <a href="#home" className="hover:text-white transition-colors">Home</a>
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#skills" className="hover:text-white transition-colors">Skills</a>
            <a href="#projects" className="hover:text-white transition-colors">Projects</a>
            <a href="#certificates" className="hover:text-white transition-colors">Certificates</a>
            <a href="#contact" onClick={scrollToContact} className="hover:text-white transition-colors">Contact</a>
          </nav>

          {/* Social Icons & Back to Top */}
          <div className="flex items-center gap-2">
            <a
              href={PERSONAL_INFO.contacts.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>

            <a
              href={PERSONAL_INFO.contacts.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            <a
              href={PERSONAL_INFO.contacts.telegram}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
              aria-label="Telegram: @I_Aleme21"
              title="Telegram (@I_Aleme21)"
            >
              <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z" />
              </svg>
            </a>

            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors ml-1"
              title="Back to Top"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Bottom Copyright matching CodeCraft */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500 text-xs">
          <p>© {currentYear} Mahlet Nigussie. All rights reserved.</p>
          <p className="text-slate-400">Built by Mahlet Nigussie</p>
        </div>
      </div>
    </footer>
  );
}
