/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        primary: {
          light: '#7DB0DE',
          dark: '#24395A',
          50: '#EDF4FA',
          100: '#D2E4F2',
          200: '#A5C9E5',
          300: '#7DB0DE',
          400: '#5697D1',
          500: '#24395A',
          600: '#1D2E48',
          700: '#162236',
          800: '#0F1724',
          900: '#080C12',
        },
      },
    },
  },
  plugins: [],
};