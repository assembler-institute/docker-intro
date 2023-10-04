/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: { name: "#A437DB", icon: "#BB84E8", text: "#373a40" },
      fontFamily: { montserrat: "Montserrat", nunito: "Nunito Sans" },
    },
  },
  plugins: [],
};
