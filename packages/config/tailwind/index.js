const { fontFamily } = require("tailwindcss/defaultTheme");

const withOpacity =
  (variableName) =>
  ({ opacityValue }) =>
    opacityValue !== undefined
      ? `rgba(var(--${variableName}), ${opacityValue})`
      : `rgb(var(--${variableName}))`;

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          10: `rgb(var(--primary-10))`,
          50: `rgb(var(--primary-50))`,
          100: withOpacity("primary-100"),
          200: withOpacity("primary-200"),
          300: withOpacity("primary-300"),
          400: withOpacity("primary-400"),
          500: withOpacity("primary-500"),
          600: withOpacity("primary-600"),
          700: withOpacity("primary-700"),
          800: withOpacity("primary-800"),
          900: withOpacity("primary-900"),
        },
      },
      fontFamily: {
        primary: ["var(--font-primary)", ...fontFamily.sans],
      },
      borderWidth: {
        default: "1px",
        0: "0",
        2: "2px",
        3: "3px",
        4: "4px",
        5: "5px",
        6: "6px",
        7: "7px",
        8: "8px",
      },
    },
  },
  plugins: [],
};
