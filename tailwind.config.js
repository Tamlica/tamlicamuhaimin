/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        mono: ['JetBrains Mono', 'monospace'],
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        journal: {
          paper: '#f8f5f2',
          ink: '#232323',
          accent: '#4a6fa5',
          highlight: '#e9b44c',
          muted: '#9b9b9b',
        },
        darkjournal: {
          paper: '#232323',
          ink: '#f8f5f2',
          accent: '#6d97d8',
          highlight: '#f5c76d',
          muted: '#707070',
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
      },
      backgroundImage: {
        'paper-texture': "url('https://images.pexels.com/photos/4097160/pexels-photo-4097160.jpeg?auto=compress&cs=tinysrgb&w=1600&h=900&dpr=1')",
      },
    },
  },
  plugins: [],
};