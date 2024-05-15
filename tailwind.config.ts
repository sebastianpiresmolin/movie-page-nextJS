import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
          'background': "url('/images/background.png')",
      },
      keyframes: {
        upDownSize: {
          '0%, 100%': {
            transform: ' translateY(0) scale(1)',
          },
          '50%': {
            transform: 'translateY(-10px) scale(1.2)',
          },
        },
      },
      animation: {
        upDownSize: 'upDownSize 2s infinite',
      },
    },
  },
  plugins: [],
};
export default config;
