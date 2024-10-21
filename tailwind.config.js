// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        base: ["Golos Text", "sans-serif"],
      },
      colors: {
        graphite: "#0B2027",
        mint: "#00C08B",
      },
    },
  },
  plugins: [],
};
