/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Montserrat"],
        "sans-bold": ["Montserrat-bold"],
        body: ["Lato"],
      },
      colors: {
        "primary-green": "#2E7D32",
        "secondary-green": "#8BBD75",
        "primary-red": "#E63E3E",
        "primary-blue": "#2445EF",
        "body-gray": "#F0F0F0",
        "primary-gray": "#323236",
        "secondary-gray": "#83848B",
        "icon-gray": "#EFF1F7",
        "icon-blue": "#02A8B9",
        "icon-purple": "#B602B9",
      },
      boxShadow: {
        navbar: "0 10px 10px 4px rgb(0, 0, 0)",
      },
    },
  },
  plugins: [],
};
