/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Montserrat", "sans-serif"],
        body: ["Lato", "sans-serif"],
      },
      colors: {
        primary: "#3490dc",
        secondary: "#ffed4a",
        accent: "#38c172",
      },
    },
  },
  plugins: [],
};
