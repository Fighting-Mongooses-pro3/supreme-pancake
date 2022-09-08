/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        "spin-slow": "spin 3s linear",
        "spin-fast-once": "spin 0.3s linear",
        "waving-hand": "wave 7s linear infinite",
      },
      backgroundImage: {
        papyr: "url('/images/papyr.jpg')",
      },
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
        wave: {
          "0%": { transform: "rotate(0.0deg)" },
          "10%": { transform: "rotate(14deg)" },
          "20%": { transform: "rotate(-8deg)" },
          "30%": { transform: "rotate(14deg)" },
          "40%": { transform: "rotate(-4deg)" },
          "50%": { transform: "rotate(10.0deg)" },
          "60%": { transform: "rotate(0.0deg)" },
          "100%": { transform: "rotate(0.0deg)" },
        },
      },
      gridTemplateColumns: {
        16: "repeat(16, minmax(0, 1fr))",
      },
      backgroundImage: {
        parchment: 'url("/images/statblockparch.jpg")',
        paper: 'url("/images/paper.jpg")',
        papyr: 'url("/images/papyr.jpg")',
        gunmetal: 'url("/images/gun-metal.png")',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
