import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        ink: '#08070c',
        charcoal: '#13121a',
        violet: '#251c39',
        gold: '#b89a63',
        mist: '#d6d2df'
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(184,154,99,0.25), 0 24px 54px rgba(8,7,12,0.6)'
      },
      backgroundImage: {
        'grid-fade':
          'linear-gradient(to right, rgba(214,210,223,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(214,210,223,0.06) 1px, transparent 1px)'
      }
    }
  },
  plugins: []
};

export default config;
