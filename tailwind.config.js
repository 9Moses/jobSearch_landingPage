/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        sm: "576px", // Small screens
        md: "768px", // Medium screens
        lg: "992px", // Large screens
        xl: "1200px", // Extra-large screens
      },
      colors: {
        blueColor: "#2a68ff",
        greyIsh: "#f1f4f8",
        cardShadow: "#f7f8f9",
        textColor: "#252b36",
      },
    },
  },
  plugins: [],
};
