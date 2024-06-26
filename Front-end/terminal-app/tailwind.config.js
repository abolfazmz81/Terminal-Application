/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        backPurple: '#25123B',
        mediumPurple: '#734FB0',
        lightPurple: '#625095'
      },
      fontFamily: {
        iranyekan: ['IranYekan', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

