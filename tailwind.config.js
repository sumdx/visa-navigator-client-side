/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'selector',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FCC737', // Custom primary color
        secondary: '#F26B0F', // Custom secondary color
        accent: '#E73879', // Custom accent color
        neutral: '#7E1891', // Custom neutral color
      },

    },
  },
  plugins: [
    require('daisyui'),
  ],
}

