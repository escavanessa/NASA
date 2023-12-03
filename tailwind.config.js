/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./components/**/*.{js,jsx,}",
  ],
  theme: {
    extend: {
      colors: {
        'blue': '#172554',
        'grey': '#71717a',
        'darkgrey': "#27272a",
        'black': '#18181b',
        'white': '#e4e4e7'
      }
    },
  },
  plugins: [],
}

