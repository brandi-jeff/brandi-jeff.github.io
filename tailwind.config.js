/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/*.html"],
  theme: {
    extend: {
      colors: {
        "my-teal": "#093A3A",
        "my-orange": "#eecda3",
      },
      screens: {
        sm: "640px",
        // => @media (min-width: 640px) { ... }

        md: "768px",
        // => @media (min-width: 768px) { ... }

        lg: "1024px",
        // => @media (min-width: 1024px) { ... }

        xl: "1280px",
        // => @media (min-width: 1280px) { ... }

        "2xl": "1440px",
        // => @media (min-width: 1440px) { ... }

        "3xl": "1536px",
        // => @media (min-width: 1536px) { ... }

        "4xl": "1920px",
        // => @media (min-width: 1920px) { ... }
      },
      fontFamily: {
        welcomeFont: [
          "Rubik 80s Fade",
          "cursive",
          "../build/fonts/Rubik_80s_Fade/Rubik80sFade-Regular.ttf",
        ],
        custom: ["Alice", "Georgia"],
      },
    },
  },
  plugins: [],
  head: {
    link: [
      {
        rel: "preload",
        href: "../build/fonts/Rubik_80s_Fade/Rubik80sFade-Regular.ttf",
        as: "font",
        crossorigin: "anonymous",
      },
    ],
  },
};