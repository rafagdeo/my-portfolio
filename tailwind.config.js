/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx,html}",
  ],
  theme: {
    fontFamily: {
      inter: ['Inter', 'sans-serif']
    },
    extend: {
    colors: {
      brand: "#FD4F00",
      primary: "#1D4ED8",
      secundary: "#B4CAFF",
    }
  },
},
  plugins: [],
}

