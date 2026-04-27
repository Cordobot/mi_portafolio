/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./script.js"],
  darkMode: 'class',
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 8s linear infinite',
        'spin-reverse': 'spin-reverse 10s linear infinite',
      },
    },
  },
  plugins: [],
}
