/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: {
        'time-bg': "url('/src/image/factsbg2.jpg')",
        
        
      },
    },
  },
  plugins: [],
}