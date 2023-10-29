/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'main': '#00A9FF',
        'second': '#89CFF3',
        'third': '#A0E9FF',
        'last': '#CDF5FD',
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
      }

    },
  },
  plugins: [],
}