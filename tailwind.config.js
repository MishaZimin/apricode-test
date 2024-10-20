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
        card: "#F8F9FA",
        graphite: "#0B2027",

        mint: "#00C08B",
        minthover: "#00AB7C",
        mintactive: "#00966D",

        rose: "#F14F4F",
        rosehover: "#DE4949",
        roseactive: "#C94242",
        rose: "#F14F4F",
        sidebar: "#F8F9FA",

        yellow: "#D8F69A",
        yellowhover: "#CEEB93",
        yellowactive: "#C5E08C",

        darkblue: "#003B4C",
        darkbluehover: "#004B61",
        darkblueactive: "#005B75",
      },
    },
  },
  plugins: [],
};
