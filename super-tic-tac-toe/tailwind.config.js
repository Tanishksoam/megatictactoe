/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        '4xl': '0 10px 10px -15px rgba(0, 0, 0, 0.8)',
      }
    },
  },
  plugins: [],
}