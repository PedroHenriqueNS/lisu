/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      dropShadow: {
        lottie: '0 0 0.5em #00c1a2aa'
      },
      colors: {
        lottie: {
          300: "#00c1a2",
          400: "#019d91",
          500: "#005b4c",
          600: "#004336"
        },
      },
    },
  },
  plugins: [],
}

