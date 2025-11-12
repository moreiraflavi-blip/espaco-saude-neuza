/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#e5f7f2",
          100: "#b3e9da",
          200: "#80dbc2",
          300: "#4dcdab",
          400: "#1abf93",
          500: "#00a67a", // principal
          600: "#008961", // hover
          700: "#006c4b",
          800: "#004f35",
          900: "#00321f",
        },
      },
    },
  },
  plugins: [],
};
