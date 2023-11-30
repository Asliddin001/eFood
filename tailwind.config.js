/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
        screens: {
          xl: "1160px",
        },
      },
      colors: {
        orange: "#FF6838",
        black: "#363853",
      },
      fontFamily: {
        "segoe-ui": "Segoe UI",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const columnFunctions = {
        ".dfcol": {
          display: "flex",
          flexDirection: "column",
        },
        ".dfcolc": {
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        },
        ".dfrow": {
          display: "flex",
          flexDirection: "row",
        },
        ".dfrowc": {
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
        },
      };

      const boxShadowUtilities = {
        ".bxSh": {
          boxShadow: "0px 22px 40px 0px rgba(255, 104, 56, 0.19)",
        },
      };

      addUtilities(columnFunctions, ["responsive", "hover"]);
      addUtilities(boxShadowUtilities, ["responsive", "hover"]);
    },
  ],
};
