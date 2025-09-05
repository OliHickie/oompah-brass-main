import { withDirectives } from 'vue';

/** @type {import('tailwindcss').Config} */
export default {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  content: [],
  theme: {
    extend: {
      fontFamily: {
        header: ['"Fredoka"', 'sans-serif'],
        sans: ['"Lato"', 'sans-serif'],
      },
      colors: {
        pink: '#ff369b',
        black: '#121212',
        white: '#eee'
      }
    },
  },
  plugins: [],
}

