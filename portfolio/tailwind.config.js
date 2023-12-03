export default {
  mode: "jit",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      custom: ["CustomFont", "sans-serif"],
      cursive: ["Cursive", "cursive"],
      fantasy: ["Fantasy", "fantasy"],
      custom: ["Georgia", "serif"],
      sans: ["Helvetica", "Arial", "sans-serif"],
    },
    extend: {
      fontFamily: {
        Poppins: "Poppins",
      },
    },
  },
  variants: {},
  plugins: [],
};
