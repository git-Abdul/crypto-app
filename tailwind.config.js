/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {      
      fontFamily: {
        "bridge": ["Bricolage Grotesque"],
        "poppins": ["Poppins"],
        "kanit": ["Kanit"],
        "borel": ["Borel"],
        "bebas": ["Bebas Neue"]
      },
      spacing: {
        "128": "32rem" 
      }
    },
  },
  plugins: [],
}
