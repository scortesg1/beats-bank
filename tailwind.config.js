/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "main-color": "#1F2330",
        "accent-color": "#FF5722",
        "white-color": "#EFEFEF",
        "gray-color": "#D6D6D6",
      },
      fontFamily: {
        body: ["Comfortaa", "Inter"],
        sans: ["Fredoka", "sans-serif"],
      },
      dropShadow: {
        xl: "0 10px 30px rgba(239, 239, 239, 0.10)",
      },
    },
  },
  plugins: [],
};
