/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["var(--font-montserrat)"],
      },
      colors: {
        primary: "#81b64c",
        primaryLight: "#a3d160",
        primaryDark: "#45754C",
      },
    },
  },
  plugins: [],
};
