"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Mail, Phone, Github, Linkedin, Send, CheckCircle2, Copy, Check, Quote, ArrowUpRight } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";

export default function Contact() {
  const { contacts, education } = PERSONAL_INFO;
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [sending, setSending] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [senderName, setSenderName] = useState("");
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [showForm, setShowForm] = useState(true);

  // Check if mobile device
  const isMobileDevice = () => {
    if (typeof window === "undefined") return false;
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  };

  // Smart Phone Interaction: mobile dials, PC copies to clipboard
  const handlePhoneAction = (e: React.MouseEvent) => {
    e.preventDefault();
    if (isMobileDevice()) {
      window.location.href = `tel:${contacts.phone.replace(/\s+/g, "")}`;
    } else {
      navigator.clipboard.writeText(contacts.phone);
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2500);
    }
  };

  // Smart Email Action:
  // On PC: Opens Gmail compose in a new tab via web URL (NEVER pops up Windows "Select an app" modal!)
  // On Mobile: Opens native mobile mail app via mailto:
  const handleEmailAction = (e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    const encodedEmail = encodeURIComponent(contacts.email);
    const encodedSubject = encodeURIComponent("Opportunity / Project Inquiry");
    
    if (isMobileDevice()) {
      window.location.href = `mailto:${contacts.email}?subject=${encodedSubject}`;
    } else {
      const webGmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodedEmail}&su=${encodedSubject}`;
      window.open(webGmailUrl, "_blank", "noopener,noreferrer");
    }
  };

  // Copy Email to Clipboard
  const handleCopyEmail = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(contacts.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  // Clean In-Page Form Submission:
  // Delivers directly to mimisha1513@gmail.com and records in local website inbox
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setSending(true);

    try {
      // 1. Direct delivery to Gmail via FormSubmit AJAX (in the background, zero redirect)
      try {
        await fetch("https://formsubmit.co/ajax/mimisha1513@gmail.com", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            subject: formData.subject || "General Discussion",
            _replyto: formData.email,
            _subject: formData.subject ? `Portfolio [${formData.subject}]: from ${formData.name}` : `New Portfolio Inquiry from ${formData.name}`,
            _captcha: "false",
            message: formData.subject
              ? `[Topic / Subject: ${formData.subject}]\n\n${formData.message}`
              : formData.message,
          }),
        });
      } catch (clientErr) {
        console.warn("Client email forward note:", clientErr);
      }

      // 2. Also persist to local site inbox
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      setSenderName(formData.name);
      setSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch {
      setSenderName(formData.name);
      setSubmitted(true);
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-navy-950 relative border-t border-surface-border/50">
      {/* Background radial glow */}
      <div className="absolute left-1/2 bottom-0 -translate-x-1/2 w-[700px] h-[350px] bg-brand-violet/10 blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* 3-Column Layout Matching CodeCraft Reference */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
          
          {/* Column 1: Let's Work Together */}
          <div className="lg:col-span-4 space-y-4">
            <span className="text-xs font-semibold tracking-widest text-brand-purple uppercase">
              LET&apos;S WORK TOGETHER
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white leading-tight">
              Have a project in mind?
            </h2>
            <p className="text-sm text-slate-300 leading-relaxed">
              I&apos;m always open to discussing new projects, internship opportunities, and collaborative software engineering!
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={() => setShowForm(!showForm)}
                className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-white bg-gradient-to-r from-brand-violet to-brand-electric hover:from-brand-purple hover:to-brand-fuchsia rounded-xl shadow-glow-sm hover:shadow-glow-purple transition-all duration-300 hover:-translate-y-0.5"
              >
                <span>{showForm ? "Hide Form" : "Get In Touch"}</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Column 2: Testimonial / Personal Statement Card Matching Reference */}
          <div className="lg:col-span-5 p-6 rounded-2xl bg-surface-card/60 border border-surface-border hover:border-brand-purple/40 transition-all duration-300 shadow-card">
            <div className="flex items-start gap-3 mb-4">
              <Quote className="w-8 h-8 text-brand-purple shrink-0 fill-brand-purple/20" />
              <p className="text-xs sm:text-sm text-slate-200 italic leading-relaxed">
                &ldquo;{education.availability}&rdquo;
              </p>
            </div>

            <div className="flex items-center gap-3 pt-4 border-t border-surface-border/60">
              <div className="relative w-10 h-10 rounded-full overflow-hidden bg-navy-900 border border-brand-purple/40 shrink-0">
                <Image
                  src="/images/mahlet-avatar.png"
                  alt="Mahlet Nigussie"
                  fill
                  className="object-cover object-center"
                />
              </div>
              <div>
                <p className="text-sm font-bold text-white">Mahlet Nigussie</p>
                <p className="text-xs text-slate-400">Software Engineering Student, BDU</p>
              </div>
            </div>
          </div>

          {/* Column 3: Follow Me & Direct Contacts Matching Reference */}
          <div className="lg:col-span-3 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold tracking-widest text-slate-400 uppercase">
                FOLLOW ME
              </span>
              <a
                href="https://t.me/I_Aleme21"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[11px] font-mono text-brand-purple hover:underline"
              >
                @I_Aleme21
              </a>
            </div>
            
            {/* 3 Social Buttons: GitHub, LinkedIn, Telegram (Equal width, bigger icons, matching borders) */}
            <div className="grid grid-cols-3 gap-2.5 w-full">
              <a
                href={contacts.github}
                target="_blank"
                rel="noopener noreferrer"
                className="py-3 flex items-center justify-center rounded-xl bg-navy-900/60 border border-surface-border/60 hover:border-brand-purple/50 text-slate-300 hover:text-white transition-all duration-200 hover:scale-105 shadow-sm group"
                aria-label="GitHub Profile"
                title="GitHub"
              >
                <Github className="w-5 h-5 text-slate-200 group-hover:text-brand-purple transition-colors" />
              </a>

              <a
                href={contacts.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="py-3 flex items-center justify-center rounded-xl bg-navy-900/60 border border-surface-border/60 hover:border-brand-purple/50 text-slate-300 hover:text-white transition-all duration-200 hover:scale-105 shadow-sm group"
                aria-label="LinkedIn Profile"
                title="LinkedIn"
              >
                <Linkedin className="w-5 h-5 text-blue-400 group-hover:text-blue-300 transition-colors" />
              </a>

              <a
                href="https://t.me/I_Aleme21"
                target="_blank"
                rel="noopener noreferrer"
                className="py-3 flex items-center justify-center rounded-xl bg-navy-900/60 border border-surface-border/60 hover:border-brand-purple/50 text-slate-300 hover:text-white transition-all duration-200 hover:scale-105 shadow-sm group"
                aria-label="Telegram: @I_Aleme21"
                title="Telegram (@I_Aleme21)"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="w-5 h-5 fill-current text-sky-400 group-hover:text-sky-300 transition-colors"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z" />
                </svg>
              </a>
            </div>

            {/* Email */}
            <div className="pt-1 space-y-3 text-xs sm:text-sm text-slate-300">
              <div className="flex items-center justify-between gap-2 p-2.5 rounded-xl bg-navy-900/60 border border-surface-border/60 hover:border-brand-purple/40 transition-colors">
                <button
                  onClick={handleEmailAction}
                  className="flex items-center gap-2.5 hover:text-brand-purple transition-colors text-left truncate"
                  title="Click to write email"
                >
                  <Mail className="w-5 h-5 text-brand-purple shrink-0" />
                  <span className="truncate text-sm font-medium">{contacts.email}</span>
                </button>

                <button
                  onClick={handleCopyEmail}
                  className="p-1 rounded text-slate-400 hover:text-white hover:bg-slate-800 transition-colors shrink-0"
                  title="Copy email address"
                  aria-label="Copy email"
                >
                  {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>

              {/* Phone with Smart Click: dial on mobile, copy on PC */}
              <div className="flex items-center justify-between gap-2 p-2.5 rounded-xl bg-navy-900/60 border border-surface-border/60 hover:border-brand-purple/40 transition-colors relative">
                <button
                  onClick={handlePhoneAction}
                  className="flex items-center gap-2.5 hover:text-brand-purple transition-colors text-left font-mono"
                  title="Click to dial (on mobile) or copy to clipboard (on PC)"
                >
                  <Phone className="w-5 h-5 text-brand-purple shrink-0" />
                  <span className="text-sm font-medium">{contacts.phone}</span>
                </button>

                <button
                  onClick={handlePhoneAction}
                  className="p-1 rounded text-slate-400 hover:text-white hover:bg-slate-800 transition-colors shrink-0"
                  title="Copy phone number"
                  aria-label="Copy phone"
                >
                  {copiedPhone ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                </button>

                {copiedPhone && (
                  <span className="absolute -top-7 left-6 px-2.5 py-1 text-[11px] font-semibold text-emerald-300 bg-navy-900 border border-emerald-500/50 rounded-md shadow-lg animate-fadeIn flex items-center gap-1 z-20">
                    <Check className="w-3 h-3 text-emerald-400" />
                    Copied to clipboard!
                  </span>
                )}
              </div>
            </div>
          </div>

        </div>

        {/* Embedded Clean Form (Submits In-Page Without Redirecting) */}
        {showForm && (
          <div className="p-6 sm:p-8 rounded-2xl bg-surface-card/90 border border-brand-purple/30 shadow-card max-w-2xl mx-auto animate-fadeIn">
            <h3 className="text-xl font-bold text-white mb-2">
              Send a Direct Message
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 mb-6">
              Fill out the form below. Your message will be sent directly to Mahlet (<span className="text-brand-purple font-medium">{contacts.email}</span>).
            </p>

            {submitted ? (
              <div className="p-6 rounded-xl bg-emerald-950/40 border border-emerald-700/60 text-center space-y-4 animate-fadeIn">
                <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto animate-bounce" />
                <div className="space-y-2">
                  <h4 className="text-xl font-bold text-white">Message Sent Successfully!</h4>
                  <p className="text-base text-slate-200 max-w-md mx-auto leading-relaxed">
                    Thank you, <strong className="text-brand-purple">{senderName}</strong>! Your message has been sent successfully.
                  </p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-xs font-medium text-slate-300 mb-1.5">
                      Your Name <span className="text-rose-400">*</span>
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      placeholder="Enter your name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-navy-950 border border-surface-border focus:border-brand-purple focus:ring-1 focus:ring-brand-purple text-sm text-white placeholder-slate-500 outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-xs font-medium text-slate-300 mb-1.5">
                      Your Email <span className="text-rose-400">*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      placeholder="Enter your email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-navy-950 border border-surface-border focus:border-brand-purple focus:ring-1 focus:ring-brand-purple text-sm text-white placeholder-slate-500 outline-none transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-xs font-medium text-slate-300 mb-1.5">
                    Subject
                  </label>
                  <input
                    id="subject"
                    type="text"
                    placeholder="What would you like to discuss?"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-navy-950 border border-surface-border focus:border-brand-purple focus:ring-1 focus:ring-brand-purple text-sm text-white placeholder-slate-500 outline-none transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-medium text-slate-300 mb-1.5">
                    Message <span className="text-rose-400">*</span>
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    placeholder="Write your message here..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-navy-950 border border-surface-border focus:border-brand-purple focus:ring-1 focus:ring-brand-purple text-sm text-white placeholder-slate-500 outline-none transition-colors resize-none"
                  />
                </div>

                <div className="flex items-center gap-3">
                  <button
                    type="submit"
                    disabled={sending}
                    className="inline-flex items-center justify-center gap-2 px-6 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-brand-violet to-brand-electric hover:from-brand-purple hover:to-brand-fuchsia rounded-xl shadow-glow-sm hover:shadow-glow-purple transition-all duration-300 disabled:opacity-50"
                  >
                    <Send className="w-4 h-4" />
                    <span>{sending ? "Sending..." : "Send Message"}</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        )}

      </div>
    </section>
  );
}
