import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "var(--primary)",
      },
      animation: {
        "grid-fade": "grid-fade 20s linear infinite",
        "profile-fade": "fade-up 1s ease forwards",
        "title": "fade-up 1s ease forwards 0.2s",
        "fade": "fade-up 1s ease forwards 0.4s",
        "wave": "wave 2s linear infinite",
        "blink": "blink 1s step-end infinite",
        "fade-slide": "fade-slide 0.6s ease forwards",
        "slideRight": "slideRight 1s ease-out forwards",
        "gradient": "gradient 15s ease infinite",
        "grid-flow": "grid-flow 20s linear infinite",
      },
      keyframes: {
        "grid-fade": {
          "0%, 100%": { opacity: "0.02" },
          "50%": { opacity: "0.08" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "wave": {
          "0%": { transform: "rotate(0deg)" },
          "20%": { transform: "rotate(30deg)" },
          "40%": { transform: "rotate(15deg)" },
          "60%": { transform: "rotate(30deg)" },
          "80%": { transform: "rotate(15deg)" },
          "100%": { transform: "rotate(0deg)" },
        },
        "blink": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
        "fade-slide": {
          "0%": { 
            opacity: "0",
            transform: "translateX(-20px)",
          },
          "100%": { 
            opacity: "1",
            transform: "translateX(0)",
          },
        },
        slideRight: {
          '0%': { width: '0%' },
          '100%': { width: '100%' },
        },
        "gradient": {
          "0%, 100%": {
            "background-size": "200% 200%",
            "background-position": "left center"
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "right center"
          }
        },
        "grid-flow": {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(80px)" }
        }
      },
      transitionProperty: {
        colors: "color, background-color, border-color, text-decoration-color, fill, stroke",
      },
    },
  },
  plugins: [],
} satisfies Config;
