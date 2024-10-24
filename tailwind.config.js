/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'backgroundColor': '#202227',
        'headColor': '#ffffff',
        'textColor': '#8692a6',
        'buttonColor': {
          DEFAULT: '#5871eb',
          hover: '#2a3255'
        },
        'inputColor': {
          text: '#8692a6',
          bg: '#2b2a2f'
        },
        'dotColor': '#33384f'
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif']
      }
    }
  },
  plugins: [],
}

