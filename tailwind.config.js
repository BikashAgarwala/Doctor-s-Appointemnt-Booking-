/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        titleFont:["titleFont"],
        bodyFont:["bodyFont"],
        logoFont:["logoFont"],
        heroFont:["heroFont"],
        headingFont:["headingFont"],
        contentFont:["contentFont"],
      },
    },
  },
  plugins: [],
}

