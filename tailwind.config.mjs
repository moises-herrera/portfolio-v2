/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#101d3d',
        secondary: '#EEF0F2',
        'secondary-gray': '#97abca',
        accent: '#3eb2fb',
      },
    },
  },
  plugins: [],
};
