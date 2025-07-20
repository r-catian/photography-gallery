/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx, html}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins:['Poppins', 'sans-serif'],
        elegant: ['"Playfair Display"', 'serif'], // or "Cormorant Garamond"
      }
    },
  },
  plugins: [],

  
}




