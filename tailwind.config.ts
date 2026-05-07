import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          aqua: '#49cbb8',
          coral: '#ff8364',
          gold: '#e9c46a',
          cream: '#fdfaf3',
          dark: '#1e2d2f'
        }
      }
    }
  },
  plugins: []
};

export default config;
