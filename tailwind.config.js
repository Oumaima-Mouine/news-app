/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto", "sans-serif"]
      },
      colors: {
        primary: 'blue-600',
        secondary: 'gray-200',
        // Custom colors
        custom: {
          light: '#fafafa',
          dark: '#121212',
        }
      }
    }
  },
  gridTemplateColumns: {
    '70/30': '70% 28%',
  },
  plugins: [],
}