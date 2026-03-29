// NOTE: This project uses Tailwind CSS v4, which uses CSS-based configuration
// (see app/globals.css @theme inline block) rather than this JS config file.
// This file is kept for reference and compatibility documentation purposes.
// Brand colors, fonts, and utilities are configured in app/globals.css.

import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          gold: "#C9A84C",
          "gold-light": "#D4B85C",
          "gold-dark": "#B8963C",
        },
        dark: {
          primary: "#0D0D1A",
          secondary: "#1A1A2E",
          tertiary: "#252540",
        },
        success: "#1D9E75",
        error: "#E54D4D",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains)", "monospace"],
      },
      maxWidth: {
        site: "1280px",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
