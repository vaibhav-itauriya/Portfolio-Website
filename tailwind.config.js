/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        paper: '#EEF1F4',
        surface: '#FFFFFF',
        ink: '#14213D',
        muted: '#5B6578',
        rule: '#CBD2DC',
        accent: 'rgb(var(--accent) / <alpha-value>)',
      },
      fontFamily: {
        display: ['"Bricolage Grotesque"', 'system-ui', 'sans-serif'],
        sans: ['"IBM Plex Sans"', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        page: '72rem',
      },
    },
  },
  plugins: [],
};
