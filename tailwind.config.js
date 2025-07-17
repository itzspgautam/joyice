/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      animation: {
        rotate: "rotate 5s linear infinite",
      },
      keyframes: {
        rotate: {
          "0%": { transform: "rotate(0deg) scale(1.1)" },
          "100%": { transform: "rotate(360deg) scale(1.1)" },
        },
      },
    },
  },
  plugins: [],
};
