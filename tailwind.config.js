/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        base: ['Permanent Marker', 'cursive'],
        base2:['Yeseva One', 'cursive'],
        base3:['Dela Gothic One', 'cursive'],
        base4:['Roboto', 'sans-serif'],
      
      },
    },
  },
  plugins: [],
}