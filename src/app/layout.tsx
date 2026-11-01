import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mahlet Nigussie | Software Engineering Student & Full-Stack Developer",
  description:
    "Portfolio of Mahlet Nigussie, a 4th-year Software Engineering student at Bahir Dar University, Ethiopia. Exploring full-stack and frontend development, practical web platforms, and AI integrations.",
  keywords: [
    "Mahlet Nigussie",
    "Software Engineering Student",
    "Bahir Dar University",
    "Full-Stack Developer",
    "Frontend Developer",
    "Ethiopia",
    "InterConnect",
    "Cognita",
    "React",
    "Next.js",
    "TypeScript"
  ],
  authors: [{ name: "Mahlet Nigussie" }],
  openGraph: {
    title: "Mahlet Nigussie | Software Engineering Student & Developer",
    description: "Building thoughtful digital experiences — Combining frontend craftsmanship with practical full-stack engineering.",
    type: "website",
    locale: "en_US",
    siteName: "Mahlet Nigussie Portfolio"
  },
  icons: {
    icon: [
      { url: "/icon.png", sizes: "512x512", type: "image/png" },
      { url: "/favicon.ico", sizes: "any" }
    ],
    shortcut: "/favicon.ico",
    apple: "/icon.png"
  }
};

export const viewport: Viewport = {
  themeColor: "#070A14",
  width: "device-width",
  initialScale: 1
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth overflow-x-hidden w-full max-w-full">
      <body className="min-h-screen font-sans bg-navy-950 text-slate-100 antialiased selection:bg-brand-purple/30 selection:text-white overflow-x-hidden w-full max-w-full">
        {children}
      </body>
    </html>
  );
}
