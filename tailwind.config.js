/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        backgroundBlack: '#27272a',
        backagroundWhite: '#e4e4e7',
        textBlack: '#27272a',
        textWhite: '#e4e4e7',
        hoverBlack: '#cbd5e1',
        hoverWhite: '#52525b',
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
