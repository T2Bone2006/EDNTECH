/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {

    
    extend: {
      fontFamily: {
        "audiowide": ["var(--font-audiowide)"],
        "inter": ["var(--font-inter)"]
      },
      colors: {
        "brand-deep-blue": "#02001C",
        "brand-dark-blue": "#000AFF",
        "brand-blue": "#000AFF",
        "brand-light-blue": "#00FFF9",
        "brand-purple": "#9600FF",
        "brand-pink": "#FF00C1",
      },
    },
  },
  plugins: [],
}