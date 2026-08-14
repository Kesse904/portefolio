/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          900: "#0f2438",
          700: "#33506b",
          500: "#5b7186",
          400: "#7b8ea1",
        },
        teal: {
          50: "#effaf8",
          100: "#d5f2ee",
          200: "#a9e5dc",
          300: "#6fd0c3",
          400: "#31b0a0",
          500: "#149183",
          600: "#0d766b",
        },
        paper: {
          50: "#fbfcfd",
          100: "#f4f7fa",
          200: "#e8eef4",
          300: "#d6e0ea",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "-apple-system", "Segoe UI", "sans-serif"],
      },
      boxShadow: {
        soft: "0 1px 2px rgba(15,36,56,.05), 0 8px 24px -12px rgba(15,36,56,.12)",
        lift: "0 2px 4px rgba(15,36,56,.06), 0 18px 40px -18px rgba(15,36,56,.22)",
      },
      keyframes: {
        float: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
