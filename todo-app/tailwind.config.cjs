/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    letterSpacing: {
      tightest: "-.075em",
      tighter: "-.05em",
      tight: "-.025em",
      normal: "0",
      wide: ".025em",
      wider: ".05em",
      widest: ".1em",
      widest: ".35em",
    },

    extend: {
      display: ["group-hover"],
      backgroundImage: {
        "hero-pattern-light": "url('./src/images/bg-desktop-light.jpg')",
        "hero-pattern-dark": "url('./src/images/bg-desktop-dark.jpg')",
        "hero-mobile-light": "url('./src/images/bg-mobile-light.jpg')",
        "hero-mobile-dark": "url('./src/images/bg-mobile-dark.jpg')",
      },

      colors: {
        // Dark Mode
        veryDarkBlue: "hsl(235, 21%, 11%)",
        veryDarkDesaturatedBlue: "hsl(235, 24%, 19%)",
        lightGrayishBlue: "hsl(234, 39%, 85%)",
        lightGrayishBlueHhover: "hsl(236, 33%, 92%)",
        darkGrayishBlue: "hsl(234, 11%, 52%)",
        veryDarkGrayishBlue: "hsl(233, 14%, 35%)",
        veryDarkGrayBlue: "hsl(237, 14%, 26%)",
        // light Mode
        veryLightGray: "hsl(0, 0%, 98%)",
        veryLightGrayBlue: "hsl(236, 33%, 92%)",
        lightGrayishBlue: "hsl(233, 11%, 84%)",
        darkGrayishBlue: "hsl(236, 9%, 61%)",
        veryDarkGrayishBlue: "hsl(235, 19%, 35%)",
      },
    },
  },
  plugins: [],
};
