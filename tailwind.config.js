/** @type {import('tailwindcss').Config} */
import typography from '@tailwindcss/typography';
import forms from '@tailwindcss/forms';
import aspectRatio from '@tailwindcss/aspect-ratio';

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#7c4d7b',
        secondary: '#b07a7a',
        accent: '#6d5477',
        background: '#f8f5fa',
        navbar: '#f6efe1',
        dark: '#2c3a4b',
        lightBackground: '#e7e0f0',
        purple: {
          50: '#f8f5fa',
          100: '#ede7f6',
          200: '#d1c4e9',
          300: '#b39ddb',
          400: '#9575cd',
          500: '#7e57c2',
          600: '#673ab7',
          700: '#5e35b1',
          800: '#512da8',
          900: '#4527a0',
        },
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 4px 24px 0 rgba(124, 77, 123, 0.08)',
      },
    },
  },
  plugins: [
    typography,
    forms,
    aspectRatio,
  ],
}

