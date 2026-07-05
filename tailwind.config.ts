import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        royal: {
          DEFAULT: "#2E5EFF",
          50: "#EEF2FF",
          100: "#DCE4FF",
          400: "#5C7DFF",
          500: "#2E5EFF",
          600: "#1E44E0",
          700: "#1533AD",
        },
        violet: {
          DEFAULT: "#7C5CFC",
          400: "#9A80FD",
          500: "#7C5CFC",
          600: "#5F3EE0",
        },
        turquoise: {
          DEFAULT: "#2DD4C8",
          400: "#4FE3D8",
          500: "#2DD4C8",
          600: "#1FA89E",
        },
        ink: {
          950: "#0A0B1E",
          900: "#11132C",
          800: "#181B3A",
        },
        emerald: {
          DEFAULT: "#10B981",
        },
        amber: {
          DEFAULT: "#F59E0B",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
      backgroundImage: {
        "mesh-light":
          "radial-gradient(circle at 15% 20%, rgba(46,94,255,0.12), transparent 40%), radial-gradient(circle at 85% 10%, rgba(124,92,252,0.14), transparent 40%), radial-gradient(circle at 50% 80%, rgba(45,212,200,0.12), transparent 45%)",
        "mesh-dark":
          "radial-gradient(circle at 15% 20%, rgba(46,94,255,0.25), transparent 40%), radial-gradient(circle at 85% 10%, rgba(124,92,252,0.28), transparent 40%), radial-gradient(circle at 50% 80%, rgba(45,212,200,0.2), transparent 45%)",
        "cta-gradient": "linear-gradient(135deg, #2E5EFF 0%, #7C5CFC 55%, #2DD4C8 100%)",
      },
      boxShadow: {
        glow: "0 0 60px -15px rgba(124,92,252,0.45)",
        card: "0 8px 30px -12px rgba(17,19,44,0.15)",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-14px)" },
        },
        "float-slow": {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%": { transform: "translateY(-10px) rotate(3deg)" },
        },
        "pulse-glow": {
          "0%, 100%": { opacity: "0.5" },
          "50%": { opacity: "1" },
        },
        "paw-walk": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(100%)" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "float-slow": "float-slow 9s ease-in-out infinite",
        "pulse-glow": "pulse-glow 3s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
