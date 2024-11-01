import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-poppins)'],
        mono: ['var(--font-roboto-mono)'],
      },
      colors: {
        black: '#010101',
        lightGray: '#bdbdbd',
        gray: '#7b7b7b',
        darkGray: '#2d2d2d',
        white: '#f8f8f7',
        primary: '#8d31be',
        secondary: '#ffede5',
        buttonPrimary: '#f8d958',
        buttonSecondary: '#e96e2a',
      },
    },
  },
  plugins: [],
};
export default config;
