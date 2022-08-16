/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: ["class", '[data-theme="dark"]'],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        mono: ["Menlo", "Monaco", "Lucida Console", "monospace"],
      },
      animation: {
        text: "text 3s ease infinite",
      },
      keyframes: {
        text: {
          "0%, 100%": {
            "background-size": "200% 200%",
            "background-position": "left bottom",
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "right top",
          },
        },
      },
    },
  },
  plugins: [],
};
