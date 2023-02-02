/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      borderWidth: {
        '0.5': '0.5px'
      },
      colors: {
        white: {
          DEFAULT: "#F9F9F9",
          "50%": "#F9F9F980"
        },
        black: "#252525",
        red: {
          DEFAULT: "#6D071A",
          "50%": "#6D071A80"
        },
        grey: {
          DEFAULT: "#A7A7A7",
          light: "#EFEFEF"
        }
      },
      boxShadow: {
        dropdownlist: "0px 4px 25px -10px rgba(0, 0, 0, 0.25)",
        searchcard: "5px 5px 28px rgba(0, 0, 0, 0.25);"
      },
      transitionProperty: {
        hourbutton: "transform, color"
      },
      invert: {
        25: ".25",
      }
    },
  },
  plugins: [],
}