/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        slowspin: "spin 3s linear infinite",
        marquee: "marquee 25s linear infinite",
        "slide-in": "slide-in 0.5s ease-out",
        "slide-out": "slide-out 0.5s ease-out",
        "modal-pop": "modal-pop 0.3s ease-out forwards",
      },
      keyframes: {
        "modal-pop": {
          "0%": { transform: "scale(0.95)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        "slide-in": {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0)" },
        },
        "slide-out": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(100%)" },
        },
        marquee: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: "#2A0E61",
        secondary: "#03001417",
        dark: "#030014",
        light: "#ffffff",
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui"],
        "dancing-script": ["Dancing Script", "cursive"],
        cedarville: ["Cedarville Cursive", "cursive"],
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("daisyui")],
  daisyui: {
    themes: [
      {
        light: {
          ...require("daisyui/src/theming/themes")["light"],
          primary: "#2A0E61",
          secondary: "#03001417",
        },
        dark: {
          ...require("daisyui/src/theming/themes")["dark"],
          primary: "#2A0E61",
          secondary: "#03001417",
        },
      },
    ],
  },
};
