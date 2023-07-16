/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        astral: {
          50: '#f4f7fb',
          100: '#e7eef7',
          200: '#cbdbec',
          300: '#9dbddc',
          400: '#689ac8',
          500: '#457db2',
          600: '#396ea7',
          700: '#2a507a',
          800: '#264566',
          900: '#243b56',
          950: '#182639',
        },
      },
      width: {
        60: '3.75rem',
      },
      height: {
        60: '3.75rem',
        100: '6.25rem',
      },
      borderRadius: {
        10: '.625rem',
        30: '1.875rem',
      },
      margin: {
        84: '5.25rem',
      },
    },
  },
  plugins: [],
};
