import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        navy: {
          950: "#040711",
          900: "#070A14",
          850: "#0B0F1E",
          800: "#0F172A",
          700: "#1E293B",
          600: "#334155",
        },
        surface: {
          DEFAULT: "#0E1526",
          card: "#111A30",
          hover: "#172342",
          border: "rgba(255, 255, 255, 0.08)",
          glow: "rgba(139, 92, 246, 0.15)",
        },
        brand: {
          purple: "#8B5CF6",
          violet: "#7C3AED",
          indigo: "#6366F1",
          electric: "#A855F7",
          fuchsia: "#D946EF",
          cyan: "#06B6D4",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "hero-glow": "radial-gradient(circle at 50% 50%, rgba(139, 92, 246, 0.2) 0%, rgba(79, 70, 229, 0.08) 45%, transparent 70%)",
        "card-gradient": "linear-gradient(180deg, rgba(20, 28, 51, 0.7) 0%, rgba(13, 19, 36, 0.95) 100%)",
        "card-gradient-highlight": "linear-gradient(180deg, rgba(30, 41, 74, 0.8) 0%, rgba(15, 23, 42, 0.98) 100%)",
      },
      boxShadow: {
        "card": "0 10px 30px -10px rgba(2, 6, 23, 0.7)",
        "card-hover": "0 20px 40px -15px rgba(139, 92, 246, 0.18)",
        "glow-purple": "0 0 35px -5px rgba(139, 92, 246, 0.4)",
        "glow-sm": "0 0 15px -3px rgba(139, 92, 246, 0.3)",
      },
    },
  },
  plugins: [],
};

export default config;

