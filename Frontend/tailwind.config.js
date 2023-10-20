/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./index.html"
  ],
  theme: {
    screens: {
      mobile: '280px',
      lg: '1024px',
    },
    extend: {
      backgroundImage: {
        'background-meal': "url('./assets/main-background.jpg')",
      }
    },
  },
  plugins: [],
  jit: true,
}

