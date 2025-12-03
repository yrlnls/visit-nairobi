/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'primary-orange': '#FF6B35',
        'dark-bg': '#1a1a1a',
        'dark-text': '#ffffff',
      },
      fontFamily: {
        'heading': ['"Hanover Bold"', 'sans-serif'], 
        'body': ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

