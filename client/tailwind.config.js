/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        midnight: '#0C1633',
        cream: '#F6F1E7',
        parchment: '#FBF8F1',
        gold: '#B99A5A',
        sage: '#7D998C',
      },
      fontFamily: {
        heading: ['Spectral', 'serif'],
        body: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 10px 30px rgba(12,22,51,0.12), 0 3px 10px rgba(12,22,51,0.08)',
      },
    },
  },
  plugins: [],
};
