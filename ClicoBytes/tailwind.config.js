/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'], 
      },
      colors: {
        primary: '#049DD9',   
        secondary: '#0378A6', 
        bg: '#F2F2F2'    
      }
    },
  },
  plugins: [],
}