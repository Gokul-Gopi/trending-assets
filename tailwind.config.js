/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      tomorrow: ["Tomorrow", "sans-serif"],
    },
    colors: {
      background: "rgb(20 23 43)",
      card: "#1c1f34",
    },
    textColor: {
      white: "#fff",
      grey: "#737BAE",
      darkGrey: "#5A5F7D",
      incPercentage: "#00FFA3",
    },
    extend: {
      spacing: {
        24: "6rem",
        "15px": "15px",
      },
    },
  },

  plugins: [],
};
