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
        'custom-bg': "url('https://th.bing.com/th/id/R.d0f5a0fb0ee7713c2af4bc77c239d01c?rik=7ZMPxt8tmyVGPg&pid=ImgRaw&r=0')",
      },
    },
  },
  plugins: [],
}