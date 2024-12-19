/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bgMain: "var(--bg-main)",
        bgCard1: "var(--bg-card1)",
        bgCard2: "var(--bg-card2)",
        borderMain: "var(--border-main)",
        fontMain: "var(--font-main)",
      },
      fontFamily: {
        aeonik: ['"Aeonik"'],
      },
    },
  },
  plugins: [],
}

