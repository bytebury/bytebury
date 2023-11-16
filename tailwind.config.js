/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "16px",
        screens: {
          lg: "1024px",
        },
      },
      colors: {
        primary: "#0069dc",
        "primary-dark": "#0058b8",
        "primary-darker": "#004998",
      },
    },
  },
  plugins: [],
};
