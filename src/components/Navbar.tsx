"use client";

import React, { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight, Code2 } from "lucide-react";

const NAV_LINKS = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Certificates", href: "#certificates" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = NAV_LINKS.map((link) => link.href.substring(1));
      const scrollPosition = window.scrollY + 120;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const formEl = document.getElementById("contact-form");
    if (formEl) {
      formEl.scrollIntoView({ behavior: "smooth", block: "center" });
      setTimeout(() => {
        document.getElementById("name")?.focus();
      }, 350);
    } else {
      const sectionEl = document.getElementById("contact");
      sectionEl?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 w-full max-w-full overflow-x-hidden transition-all duration-300 ${
        isScrolled
          ? "bg-navy-950/80 backdrop-blur-md border-b border-surface-border shadow-lg"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex items-center justify-between h-20 w-full">
          {/* Brand Wordmark */}
          <a
            href="#home"
            className="group flex items-center gap-2 sm:gap-2.5 text-base sm:text-lg font-semibold tracking-tight text-white focus:outline-none focus:ring-2 focus:ring-brand-purple rounded-lg px-1 py-0.5 min-w-0 shrink"
          >
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-brand-violet to-brand-electric flex items-center justify-center text-white shadow-glow-sm shrink-0">
              <Code2 className="w-4 h-4" />
            </div>
            <span className="font-mono text-sm sm:text-lg truncate">
              <span className="text-brand-purple">&lt;</span>
              <span className="text-white group-hover:text-brand-purple transition-colors">Mahlet</span>
              <span className="text-slate-400">.dev</span>
              <span className="text-brand-purple"> /&gt;</span>
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={link.name === "Contact" ? scrollToContact : undefined}
                  className={`px-3.5 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                    isActive
                      ? "text-brand-purple bg-brand-purple/10 border border-brand-purple/20 shadow-sm"
                      : "text-slate-300 hover:text-white hover:bg-slate-800/50"
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Desktop Action Button */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="#contact"
              onClick={scrollToContact}
              className="group inline-flex items-center gap-1.5 px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-brand-violet to-brand-electric hover:from-brand-purple hover:to-brand-fuchsia rounded-lg shadow-glow-sm transition-all duration-300 hover:shadow-glow-purple hover:-translate-y-0.5"
            >
              <span>Hire Me</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>

          {/* Mobile Menu Button - explicit shrink-0 and positioning */}
          <div className="flex md:hidden shrink-0 ml-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800/60 focus:outline-none focus:ring-2 focus:ring-brand-purple transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-navy-900/95 backdrop-blur-xl border-b border-surface-border px-4 pt-3 pb-6 space-y-2 animate-fadeIn w-full max-w-full overflow-hidden">
          {NAV_LINKS.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  if (link.name === "Contact") {
                    scrollToContact(e);
                  } else {
                    setMobileMenuOpen(false);
                  }
                }}
                className={`block px-4 py-2.5 rounded-lg text-base font-medium transition-colors ${
                  isActive
                    ? "text-brand-purple bg-brand-purple/15 font-semibold"
                    : "text-slate-300 hover:text-white hover:bg-slate-800/50"
                }`}
              >
                {link.name}
              </a>
            );
          })}
          <div className="pt-3 border-t border-surface-border">
            <a
              href="#contact"
              onClick={scrollToContact}
              className="flex items-center justify-center gap-2 w-full py-2.5 text-center text-sm font-medium text-white bg-gradient-to-r from-brand-violet to-brand-electric rounded-lg shadow-glow-sm"
            >
              <span>Hire Me</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
