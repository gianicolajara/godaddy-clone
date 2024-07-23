// eslint-disable-next-line @typescript-eslint/no-var-requires, no-undef
const defaultTheme = require("tailwindcss/defaultTheme");
// eslint-disable-next-line @typescript-eslint/no-var-requires, no-undef
const plugin = require("tailwindcss/plugin");

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    fontFamily: {
      gdsherpa: ["gdsherpa", "Hesveltica", "Arial", "sans-serif"],
      "gd-sage": ["gd-sage", "Times New Roman", "Times", "serif"],
    },
    extend: {
      keyframes: {
        blur: {
          "0%": { "backdrop-filter": "blur(0px)" },
          "100%": { "backdrop-filter": "blur(4px)" },
        },
      },
      animation: {
        blur: "blur .3s forwards",
      },
      screens: {
        "2md": "840px",
        "2xl": "1600px",
      },

      fontFamily: {
        gdsherpa: ['"gdsherpa"', ...defaultTheme.fontFamily.sans],
        "gd-sage": ["gd-sage", ...defaultTheme.fontFamily.serif],
      },
      gap: {
        "betweeen-grids-sm": "1rem",
        "betweeen-grids-md": "1.8rem",
        "betweeen-grids": "2.188rem",
      },
      margin: {
        "between-sections-y-sm": "1rem 0 1rem",
        "between-sections-y": "2rem 0 2rem",
        "between-items-menu-y": "2rem 0 2rem",
        "between-items-menu": "2rem",
      },
      padding: {
        "expansion-section-y": "2rem 0 2rem",
        "expansion-section-y-sm": "1rem 0 1rem",
      },
      backgroundColor: {
        gray: "#2B2B2B",
        black: "#111111",
        body: "#FFFFFF",
        "light-gray": "#5E5E5E",
      },
      colors: {
        gray: "#2B2B2B",
        "light-gray": "#5E5E5E",
        "lighter-gray": "#767676",
        mute: "#D6D6D6",
        ocean: "#09757A",
        "ocean-dark": "#085356",
        black: "#111111",
        white: "#FFFFFF",
        "light-blue": "#D8EFEF",
        blue: "#237CD3",
        "white-cake": "#EEE8E3",
        "blue-cake": "#E8EAEB",
        "green-cake": "#E4EBE9",
      },
    },
  },
  plugins: [
    plugin(function ({ addComponents, theme }) {
      addComponents({
        ".expansion-section-y-sm": {
          "padding-top": "1rem",
          "padding-bottom": "1rem",
        },
        ".expansion-section-y": {
          "padding-top": "2rem",
          "padding-bottom": "2rem",
        },
        ".expansion-section-y-lg": {
          "padding-top": "4rem",
          "padding-bottom": "4rem",
        },
        ".title-sm": {
          fontSize: "1.3rem",
          fontWeight: "bold",
        },
        ".title-lg": {
          fontSize: "3rem",
          fontWeight: "bold",
        },
        ".title-md": {
          fontSize: "1.9rem",
          fontWeight: "bold",
        },
        ".title-normal": {
          fontSize: "1.5rem",
          fontWeight: "bold",
        },
        ".title-lg-card": {
          fontSize: "3rem",
          fontWeight: "bold",
        },
        ".title-md-card": {
          fontSize: "1.7rem",
          fontWeight: "bold",
        },
        ".title-normal-card": {
          fontSize: "1.3rem",
          fontWeight: "bold",
        },
        ".title-sm-card": {
          fontSize: "1.2rem",
          fontWeight: "bold",
        },

        ".subtitle-lg": {
          fontSize: "2.5rem",
          fontWeight: "bold",
          fontFamily: "gdsherpa",
          letterSpacing: "0.2rem",
        },
        ".subtitle-md": {
          fontSize: "2rem",
          fontWeight: "bold",
          fontFamily: "gdsherpa",
          letterSpacing: "0.2rem",
        },
        ".subtitle-normal": {
          fontSize: "1.5rem",
          fontFamily: "gdsherpa",
          letterSpacing: "0.2rem",
        },
        ".subtitle-sm": {
          fontSize: ".8rem",
          color: theme("colors.lighter-gray"),
          fontFamily: "gdsherpa",
          letterSpacing: "0.07rem",
          fontWeight: "bold",
        },
        ".subtitle-md-black": {
          fontSize: ".9rem",
          color: theme("colors.black"),
          fontWeight: 600,
        },
        ".card": {
          borderRadius: "2rem",
          width: "100%",
          height: "100%",
          overflow: "hidden",
          padding: "1rem",
          backgroundColor: theme("colors.black"),
        },
        ".wrapper-2xl": {
          "max-width": "1900px",
          margin: "0 auto",
          width: "100%",
          height: "100%",
        },
        ".wrapper-xl": {
          "max-width": "1350px",
          margin: "0 auto",
          width: "100%",
          height: "100%",
        },
        ".wrapper-lg": {
          "max-width": "1000px",
          margin: "0 auto",
          width: "100%",
          height: "100%",
        },
        ".wrapper": {
          "padding-left": "4rem",
          "padding-right": "4rem",
          width: "100%",
          height: "100%",
        },
        ".wrapper-md": {
          "padding-left": "1rem",
          "padding-right": "1rem",
          width: "100%",
          height: "100%",
        },
        ".wrapper-sm": {
          "padding-left": "0.5rem",
          "padding-right": "0.5rem",
          width: "100%",
          height: "100%",
        },
        ".wrapper-menu": {
          padding: "0rem 0.7rem 0rem 0.7rem",
        },
      });
    }),
  ],
};
