/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'deep-space': {
          DEFAULT: '#000000',
          50: '#18181b',
          100: '#161618',
          200: '#141415',
          300: '#121212',
          400: '#0f0f0f',
          500: '#0c0c0c',
          600: '#090909',
          700: '#060606',
          800: '#030303',
          900: '#000000'
        }
      },
      animation: {
        'gradient': 'gradient 15s linear infinite',
        'twinkle': 'twinkle 3s ease-in-out infinite',
        'pulse-slow': 'pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'spin-slow': 'spin 10s linear infinite',
      },
      keyframes: {
        gradient: {
          '0%, 100%': {
            'background-size': '400% 400%',
            'background-position': '0% 50%'
          },
          '50%': {
            'background-size': '400% 400%',
            'background-position': '100% 50%'
          },
        },
        twinkle: {
          '0%, 100%': {
            opacity: 0.2,
            transform: 'scale(1)'
          },
          '50%': {
            opacity: 1,
            transform: 'scale(1.2)'
          },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
};