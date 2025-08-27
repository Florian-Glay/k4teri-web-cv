/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        accent: { DEFAULT: "#7c3aed", soft: "#a78bfa" },
      },
    },
  },
  plugins: [],
};