import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        // Rilke — dark navy family shared with Technoforme, slightly stronger gold
        night: '#07131f',
        deep: '#091725',
        strip: '#0a1926',
        panel: '#0e2233',
        'card-top': '#102537',
        'card-bottom': '#0b1b29',
        paper: '#f7f8fa',
        muted: '#b8c3cd',
        line: 'rgba(255,255,255,0.13)',
        field: '#334657',
        gold: '#d79a43',
        'gold-light': '#efb35d',
        'gold-dim': 'rgba(215,154,67,0.14)'
      },
      fontFamily: {
        sora: ['var(--font-sora)', 'sans-serif'],
        inter: ['var(--font-inter)', 'sans-serif']
      },
      letterSpacing: {
        tightest: '-0.04em'
      },
      maxWidth: {
        content: '1260px'
      },
      transitionTimingFunction: {
        'out-expo': 'cubic-bezier(0.16, 1, 0.3, 1)'
      }
    }
  },
  plugins: []
};

export default config;
