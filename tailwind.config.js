/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        lavender: "#f6e6ff",
        gray: "#2c2c2c",
        gainsboro: {
          "100": "#e1e1e1",
          "200": "#d9d9d9",
          "300": "rgba(217, 217, 217, 0)",
        },
        whitesmoke: "#f5f5f5",
        white: "#fff",
        cornflowerblue: "#9ba9ff",
        black: "#000",
        dodgerblue: "#4280ef",
      },
      fontFamily: { "plus-jakarta-sans": "'Plus Jakarta Sans'" },
      borderRadius: { "3xs": "10px", xl: "20px" },
    },
    fontSize: { sm: "14px", base: "16px", "5xl": "24px", "23xl": "42px" },
  },
  corePlugins: { preflight: false },
};
