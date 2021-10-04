const extendedColors = require("tailwindcss/colors")

module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{js,tsx,ts,jsx}", "./index.html"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        ...extendedColors,
      },
      animation: {
        "spin-slow": "spin 7s linear infinite",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms"), require("tailwindcss-debug-screens"), require("@tailwindcss/line-clamp")],
}
