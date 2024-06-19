/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    colors: {
      "background-gray": "#202020",
      textColor: {
        white: "#ffffff",
        black: "#000000",
      },
      gray: {
        100: "#f4f4f5",
        300: "#d4d4d8",
        400: "#9ca3af",
        500: "#71717a",
        600: "#52525b",
        700: "#3f3f46",
        800: "#27272a",
        900: "#18181b",
      },
      red: {
        500: "#ef4444"
      }
    },
  },
  extend: {},
  plugins: [],
};
