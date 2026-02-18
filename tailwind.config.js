/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // Changed: enable class-based dark mode for keyboard toggle
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
    './helpers.ts',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};