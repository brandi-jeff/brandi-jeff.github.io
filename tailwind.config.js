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
      'xl': {'max':'1537px'},
      // => @media (max-width: 1537px) { ... }
      
        'lg': {'max':'1024px'},
        // => @media (max-width: 1024px) { ... }
      
        'md': {'max':'640px'},
        // => @media (max-width: 640px) { ... }
      
        'sm': {'max':'425px'},
        // => @media (max-width: 425px) { ... }
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


