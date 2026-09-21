/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        darkArmy: "#1A241F",
        army: "#4A5D4E",
        pastel: "#FDF3B8",
        electric: "#A3E635",
        offWhite: "#F6F7F5"
      },
      fontFamily: {
        display: ["Inter", "ui-sans-serif", "system-ui"],
        body: ["Inter", "ui-sans-serif", "system-ui"]
      },
      boxShadow: {
        soft: "0 24px 80px rgba(0,0,0,0.22)",
        lift: "0 24px 54px rgba(163,230,53,0.12)"
      }
    }
  },
  plugins: []
};
