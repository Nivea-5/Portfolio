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
        foregroundTransparent: "var(--foreground-transparent)",
        light: "var(--light)",
        lightHover: "var(--light-hover)",
        blue: "var(--blue)",
        blueHover: "var(--blue-hover)",
        dark: "var(--dark)",
        darkHover: "var(--dark-hover)",
      },
    },
  },
  plugins: [],
} satisfies Config;
