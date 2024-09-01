/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#0a1019",
        secondary: "#9bbaf0",
        tertiary: "#151030",
        surface: "#1e2536",
        onSurface: "#34405b",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
        "white-primary": "#eceff1",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg3.jpg')",
      },
    },
  },
  plugins: [],
};
