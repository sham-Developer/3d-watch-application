/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'watch-gold': '#D4AF37',
        'watch-silver': '#C0C0C0',
        'watch-rose': '#B76E79',
        'watch-black': '#1a1a1a',
      }
    },
  },
  plugins: [],
}
