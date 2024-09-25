/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {},
      backgroundImage: {
        "custom-gradient": "linear-gradient(90deg, #00c4cc, #7d2ae8)",
      },
      fontFamily: {
        "fira-sans-condensed": ['"Fira Sans Condensed"', "sans-serif"],
        poppins: ["Poppins", "sans-serif"], // 'Poppins' doesn't need quotes
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
