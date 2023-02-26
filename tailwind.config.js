/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./index.html",
  "./node_modules/flowbite/**/*.js", "./build/**/*.html"],
  theme: {
    extend: {
      colors: {
        "my-teal": "#093A3A",
        "my-orange": "#eecda3",
      },
    },
    screens: {
      'sm': '640px',
    // => @media (min-width: 640px) { ... }

    'md': '768px',
    // => @media (min-width: 768px) { ... }

    'lg': '1024px',
    // => @media (min-width: 1024px) { ... }

    'xl': '1280px',
    // => @media (min-width: 1280px) { ... }

    '2xl': {min:'1536px', max: "1915px"},
    // => @media (min-width: 1536px) { ... }

    '3xl': '1920px',
    // => @media (min-width: 1920px) { ... }
    },
    fontFamily: {
      welcomeFont: ["Rubik 80s Fade", "cursive"],
      custom: ["Alice", "Georgia"],
      turned: ['Archivo Black'],
    },
  },
  plugins: [
    require('flowbite/plugin')
  ]
};
