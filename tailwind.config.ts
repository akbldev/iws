import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        oxanium: ["var(--font-oxanium)"],
        oxygen: ["var(--font-oxygen)"],
      },
      colors: {
        primary: {
          DEFAULT: "hsl(var(--primary), <alpha-value>)",
          dark: "hsl(var(--primary-dark), <alpha-value>)",
          light: "hsl(var(--primary-light), <alpha-value>)",
          lighter: "hsl(var(--primary-lighter), <alpha-value>)",
        },
        background: "hsl(var(--background), <alpha-value>)",
        foreground: "hsl(var(--foreground), <alpha-value>)",
      },
    },
  },
  plugins: [],
};
export default config;
