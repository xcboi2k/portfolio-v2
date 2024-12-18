const { fontFamily } = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mont: ['var(--font-mont)'],
      },
      colors: {
        dark: "#1b1b1b",
        light: "#f5f5f5",
        primary: "#B63E96", // 240,86,199
        primaryDark: "#58E6D9", // 80,230,217
      },
      screens: {
        xxs: "320px",
        xs: "375px",
        sm: "425px",
        tablet: "768px",
        laptop: "1024px",
        desktop: "1280px",
        "2xl": "1536px"
      }
    },
  },
  plugins: [],
}

