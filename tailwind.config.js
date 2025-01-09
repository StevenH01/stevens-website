/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      animation: {
        "grow-stem": "grow-stem 2s ease-in-out forwards",
        "bloom-petal": "bloom-petal 1.5s ease-in-out forwards",
      },
      keyframes: {
        "grow-stem": {
          from: { height: "0" },
          to: { height: "80%" },
        },
        "bloom-petal": {
          from: { transform: "scale(0)", opacity: "0" },
          to: { transform: "scale(1)", opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};
