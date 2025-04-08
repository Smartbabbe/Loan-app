import type { Config } from 'tailwindcss';

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        primary: '#064749',
        neutral: '#E2F1E8',
        'background-secondary': 'var(--background-secondary)',
        accent: 'var(--color-accent)',
      },
      fontFamily: {
        heading: ['var(--font-lato)', 'var(--font-biryani)', 'sans-serif'],
        sans: ['var(--font-biryani)', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config;
