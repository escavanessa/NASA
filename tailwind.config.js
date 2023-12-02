/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./components/**/*.{js,jsx,}",
  ],
  theme: {
    extend: {
      colors: {
        'orange': '#ea580c',
        'grey': '#71717a',
        'darkgrey': "#27272a",
        'black': '#18181b',
        'white': '#e4e4e7'
      }
    },
  },
  plugins: [],
}

