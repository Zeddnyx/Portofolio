/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        ls:  ['League Spartan', 'sans-serif'],
        mono: ['Chivo Mono', 'monospace'],
        sans: ['Montserrat', 'sans-serif'],
      },
      colors: {
        cyan:  '#64ffda',
        white: '#fff',
        gray1: '#ccd6f6',
        gray2: '#a8b2d1',
        gray3: '#8892b0',
        bg1:   '#233554',
        bg2:   '#112240',
        bg3:   '#0a192f'
      },
    },
  },
  plugins: [],
}
