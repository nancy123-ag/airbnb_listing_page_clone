/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        airbnb: {
          red: '#FF385C',
          darkRed: '#E61E4D',
          hoverRed: '#D70466',
          dark: '#222222',
          gray: '#717171',
          lightGray: '#B0B0B0',
          bgGray: '#F7F7F7',
          border: '#DDDDDD'
        }
      },
      fontFamily: {
        sans: [
          'Circular',
          '-apple-system',
          'BlinkMacSystemFont',
          'Roboto',
          'Helvetica Neue',
          'sans-serif'
        ]
      }
    },
  },
  plugins: [],
}
