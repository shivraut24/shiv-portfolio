/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        myColor:{
        primary: "#cf332b",
        navcolor: "#fefafa",
        },
    },
    keyframes: {
      blink: {
        '0%, 100%': { opacity: 0 },
        '50%': { opacity: 1 },
      }
    },
    animation: {
      blink: 'blink 1s step-end infinite',
    }
    },
  },
  plugins: [],
}