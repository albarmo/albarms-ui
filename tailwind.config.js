/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",       // semua komponen
    "./.storybook/**/*.{js,ts,jsx,tsx}" // stories
  ],
  theme: { extend: {} },
  plugins: [],
};
