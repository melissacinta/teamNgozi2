/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          10: '#E5E5E5',
          20: '#495057',
          30: '#6C757D',
          40: '#D4A373',
        },
      },
    },
  },
  plugins: [],
};
