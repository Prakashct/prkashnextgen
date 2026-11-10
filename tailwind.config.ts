import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#FFF8F1",
        "bg-secondary": "#F3E8DD",
        "primary-text": "#22201F",
        charcoal: {
          DEFAULT: "#292524",
          dark: "#1A1817",
          deep: "#141211",
          light: "#3F3A36",
        },
        bronze: {
          DEFAULT: "#B87320",
          dark: "#9B5D14",
          light: "#CF882E",
          hover: "#A36317",
        },
        gold: {
          DEFAULT: "#D69A42",
          light: "#F0B865",
          soft: "#D7A257",
          border: "#D7A257",
          subtle: "#EED7B5",
        },
        cream: {
          50: "#FFFCF9",
          100: "#FFF8F1",
          200: "#FDF3E7",
          300: "#F7EBDC",
          400: "#F3E8DD",
        },
      },
      fontFamily: {
        sans: ["var(--font-plus-jakarta-sans)", "sans-serif"],
        script: ["var(--font-caveat)", "cursive"],
      },
      boxShadow: {
        gold: "0 10px 25px -5px rgba(184, 115, 32, 0.3), 0 8px 10px -6px rgba(184, 115, 32, 0.2)",
        "gold-sm": "0 4px 14px 0 rgba(184, 115, 32, 0.25)",
        subtle: "0 4px 20px -2px rgba(41, 37, 36, 0.06)",
      },
    },
  },
  plugins: [],
};

export default config;
