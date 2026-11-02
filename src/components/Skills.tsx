"use client";

import React from "react";
import { TECH_SKILLS } from "@/data/portfolioData";

export default function Skills() {
  const renderSkillLogo = (icon: string) => {
    switch (icon) {
      case "html":
        return (
          <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none">
            <path d="M4.5 3L5.8 18.5L12 20.5L18.2 18.5L19.5 3H4.5Z" fill="#E44D26" />
            <path d="M12 4.5V19L17 17.4L18.1 4.5H12Z" fill="#F16529" />
            <path
              d="M8.5 7.5H15.5L15.3 9.8H11.8L12 12.2H15L14.7 15.5L12 16.3L9.3 15.5L9.1 13.5H7.3L7.7 17.2L12 18.4L16.3 17.2L16.9 10.8L17.1 7.5H8.5V7.5Z"
              fill="#FFFFFF"
            />
          </svg>
        );

      case "css":
        return (
          <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none">
            <path d="M4.5 3L5.8 18.5L12 20.5L18.2 18.5L19.5 3H4.5Z" fill="#1572B6" />
            <path d="M12 4.5V19L17 17.4L18.1 4.5H12Z" fill="#33A9DC" />
            <path
              d="M8.5 7.5H15.5L15.3 9.8H12V12.2H15L14.7 15.5L12 16.3L9.3 15.5L9.1 13.5H7.3L7.7 17.2L12 18.4L16.3 17.2L17.1 7.5H8.5V7.5Z"
              fill="#FFFFFF"
            />
          </svg>
        );

      case "js":
        return (
          <svg className="w-7 h-7 rounded" viewBox="0 0 24 24" fill="none">
            <rect width="24" height="24" rx="4" fill="#F7DF1E" />
            <path
              d="M7.5 16.5C8 17.3 8.8 17.8 9.9 17.8C11 17.8 11.8 17.1 11.8 15.8V10.5H9.8V15.7C9.8 16.3 9.4 16.5 9 16.5C8.6 16.5 8.2 16.2 8 15.7L7.5 16.5ZM13.4 16.8C14 17.5 14.9 17.9 16.1 17.9C17.6 17.9 18.7 17 18.7 15.4C18.7 13.9 17.9 13.3 16.5 12.7L16 12.5C15.2 12.1 14.7 11.7 14.7 11.1C14.7 10.5 15.2 10.1 15.9 10.1C16.6 10.1 17.1 10.4 17.4 11.1L18.5 10.4C17.8 9.3 16.9 8.8 15.9 8.8C14.4 8.8 13.3 9.7 13.3 11.2C13.3 12.6 14.1 13.2 15.4 13.8L15.9 14C16.8 14.4 17.3 14.9 17.3 15.6C17.3 16.3 16.6 16.7 16 16.7C15.2 16.7 14.6 16.3 14.3 15.5L13.4 16.8Z"
              fill="#000000"
            />
          </svg>
        );

      case "ts":
        return (
          <svg className="w-7 h-7 rounded" viewBox="0 0 24 24" fill="none">
            <rect width="24" height="24" rx="4" fill="#3178C6" />
            <path
              d="M5.5 10.2H12.5V12H9.9V18.5H8.1V12H5.5V10.2ZM13.8 17.1C14.3 17.6 15.1 18 16.1 18C17.5 18 18.4 17.2 18.4 15.9C18.4 14.6 17.6 14.1 16.4 13.6L16 13.4C15.2 13.1 14.8 12.8 14.8 12.2C14.8 11.7 15.2 11.3 15.9 11.3C16.5 11.3 17 11.6 17.4 12.1L18.4 11.2C17.7 10.3 16.9 9.9 15.9 9.9C14.5 9.9 13.4 10.8 13.4 12.2C13.4 13.4 14.2 14.1 15.4 14.6L15.8 14.8C16.6 15.1 17 15.5 17 16.1C17 16.7 16.5 17.1 15.8 17.1C15.1 17.1 14.6 16.7 14.2 16.1L13.8 17.1Z"
              fill="#FFFFFF"
            />
          </svg>
        );

      case "react":
        return (
          <svg className="w-7 h-7" viewBox="-11.5 -10.23174 23 20.46348" fill="none">
            <circle cx="0" cy="0" r="2.05" fill="#61DAFB" />
            <g stroke="#61DAFB" strokeWidth="1" fill="none">
              <ellipse rx="11" ry="4.2" />
              <ellipse rx="11" ry="4.2" transform="rotate(60)" />
              <ellipse rx="11" ry="4.2" transform="rotate(120)" />
            </g>
          </svg>
        );

      case "next":
        return (
          <svg className="w-7 h-7" viewBox="0 0 180 180" fill="none">
            <mask id="mask-next-logo" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="180" height="180">
              <circle cx="90" cy="90" r="90" fill="black" />
            </mask>
            <g mask="url(#mask-next-logo)">
              <circle cx="90" cy="90" r="90" fill="black" />
              <path
                d="M149.508 157.438L69.102 54.3H54V125.7H66.6V70.218L139.752 164.718C143.208 162.528 146.466 160.104 149.508 157.438Z"
                fill="white"
              />
              <rect x="114" y="54" width="12.6" height="71.7" fill="white" />
            </g>
          </svg>
        );

      case "node":
        return (
          <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none">
            <path d="M12 2L3.5 6.9V16.8L12 21.7L20.5 16.8V6.9L12 2Z" fill="#339933" />
            <path d="M12 4.5L18.5 8.2V15.7L12 19.4L5.5 15.7V8.2L12 4.5Z" fill="#215732" />
            <path d="M12 6.8L16.2 9.2V14.1L12 16.5L7.8 14.1V9.2L12 6.8Z" fill="#5FA04E" />
          </svg>
        );

      case "git":
        return (
          <svg className="w-7 h-7" viewBox="0 0 24 24" fill="#F05032">
            <path d="M21.6 10.9L13.1 2.4C12.6 1.9 11.7 1.9 11.2 2.4L9.3 4.3L11.8 6.8C12.4 6.6 13.1 6.8 13.6 7.3C14.1 7.8 14.2 8.6 14 9.2L16.4 11.6C17 11.4 17.8 11.5 18.3 12C19 12.7 19 13.8 18.3 14.5C17.6 15.2 16.5 15.2 15.8 14.5C15.3 14 15.1 13.2 15.4 12.6L13.1 10.3V15.4C13.3 15.6 13.4 15.9 13.4 16.3C13.4 17.4 12.5 18.3 11.4 18.3C10.3 18.3 9.4 17.4 9.4 16.3C9.4 15.4 10 14.7 10.8 14.4V9.3C10 9 9.4 8.3 9.4 7.4C9.4 7 9.5 6.7 9.7 6.4L7.2 3.9L2.4 8.7C1.9 9.2 1.9 10.1 2.4 10.6L10.9 19.1C11.4 19.6 12.3 19.6 12.8 19.1L21.6 10.3C22.1 10.5 22.1 9.6 21.6 10.9Z" />
          </svg>
        );

      default:
        return (
          <div className="w-7 h-7 rounded bg-brand-purple/20 flex items-center justify-center text-brand-purple font-mono font-bold text-xs">
            &lt;/&gt;
          </div>
        );
    }
  };

  return (
    <section id="skills" className="py-24 md:py-32 bg-navy-950 relative overflow-hidden w-full max-w-full">
      {/* Background ambient radial glow matching CodeCraft */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] max-w-full h-[400px] bg-gradient-radial from-brand-violet/10 via-brand-indigo/5 to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12 sm:mb-16">
          <span className="text-xs font-semibold tracking-widest text-brand-purple uppercase mb-2">
            MY SKILLS
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
            Technologies &amp; Tools
          </h2>
          <p className="text-sm sm:text-base text-slate-400 max-w-xl mx-auto leading-relaxed">
            Core programming languages, frameworks, and developer tools I use to build modern digital products.
          </p>
        </div>

        {/* Clean 8-Card Grid in foundational sequence (HTML -> CSS -> JS -> TS -> React -> Next.js -> Node.js -> Git) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-6 w-full">
          {TECH_SKILLS.map((skill) => (
            <div
              key={skill.name}
              className="group p-4 sm:p-5 rounded-2xl bg-card-gradient border border-surface-border hover:border-brand-purple/50 transition-all duration-300 shadow-card hover:shadow-card-hover hover:-translate-y-1 flex items-center gap-3.5 sm:gap-4"
            >
              {/* Brand Logo Container */}
              <div
                className={`w-11 h-11 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center shrink-0 ${skill.bgColor} border ${skill.borderColor} group-hover:scale-110 transition-transform duration-300 shadow-sm`}
              >
                {renderSkillLogo(skill.icon)}
              </div>

              {/* Tech Details */}
              <div className="min-w-0 flex-1">
                <h3 className="text-sm sm:text-base font-bold text-white group-hover:text-brand-purple transition-colors truncate">
                  {skill.name}
                </h3>
                <p className="text-[11px] sm:text-xs text-slate-400 font-medium truncate mt-0.5">
                  {skill.category}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
