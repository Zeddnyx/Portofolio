/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
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
        bg3:   '#0a192f',

        bgLight1: '#fff',
        bgLight2: '#ebf5ff',
        bgLight3: '#6e07f3',
        LightCyan: '#5be9b9',
        lightBlue: '#1a8cff',
        LightDark: '#141c3a'
      },
    },
  },
  plugins: [],
}
