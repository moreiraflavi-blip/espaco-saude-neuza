import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#f1fbf7",
          100: "#dbf5ea",
          200: "#b7ead5",
          300: "#86d9bb",
          400: "#4ec3a0",
          500: "#2aa588",
          600: "#1d8270",
          700: "#19685c",
          800: "#16544c",
          900: "#12463f"
        }
      }
    }
  },
  plugins: []
};

export default config;
