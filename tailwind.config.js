/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1d6cef",
        dark: "#787779",
        "dark-300": "#212025",
        "dark-500": "#3b333c",
        light: "#f8f8f8",
        lightest: "rgba(255, 255, 255, 0.1)",
      },
      borderRadius: {
        "4xl": "30px",
      },
      fontFamily: {
        "urbanist-light": ["urbanist-light", "sans-serif"],
        "urbanist-regular": ["urbanist-regular", "sans-serif"],
        "urbanist-medium": ["urbanist-medium", "sans-serif"],
        "urbanist-semibold": ["urbanist-semibold", "sans-serif"],
        "urbanist-bold": ["urbanist-bold", "sans-serif"],
        "urbanist-extrabold": ["urbanist-extrabold", "sans-serif"],
      },
    },
  },
  plugins: [],
};
