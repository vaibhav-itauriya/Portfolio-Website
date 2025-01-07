/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#ff5722',
          dark: '#d84315',
          light: '#ff7043'
        },
        secondary: {
          DEFAULT: '#ff9800',
          dark: '#f57c00',
          light: '#ffb74d'
        },
        dark: {
          DEFAULT: '#171717',
          lighter: '#262626',
          darker: '#0a0a0a'
        },
        accent: {
          blue: '#60a5fa',
          purple: '#a78bfa',
          pink: '#f472b6'
        }
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'shine': 'shine 3s infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        shine: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        }
      }
    },
  },
  plugins: [],
};