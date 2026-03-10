/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        obsidian: "#000000",
        gold: {
          300: "#f4dc9e",
          400: "#d7b15e",
          500: "#b99341",
          600: "#8c6d2e",
        },
      },
      fontFamily: {
        display: ["Cormorant Garamond", "serif"],
        sans: ["Manrope", "sans-serif"],
      },
      boxShadow: {
        gold: "0 16px 44px rgba(185, 147, 65, 0.20)",
      },
    },
  },
  plugins: [],
};
