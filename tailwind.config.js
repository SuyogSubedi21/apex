/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#151515",
        charcoal: "#0b0d0f",
        concrete: "#69706f",
        paper: "#f4f0e8",
        warm: "#fffaf0",
        line: "rgba(255,255,255,0.18)",
        steel: "#263239",
        steelDark: "#11181d",
        gold: "#d99a2b"
      },
      fontFamily: {
        sans: ["Manrope", "Arial", "sans-serif"],
        display: ["Cormorant Garamond", "Georgia", "serif"]
      },
      boxShadow: {
        premium: "0 20px 48px rgba(0, 0, 0, 0.14)"
      }
    }
  },
  plugins: []
};
