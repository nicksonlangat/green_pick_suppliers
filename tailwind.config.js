// ./tailwind.config.js

module.exports = {
    purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
     darkMode: false,
     theme: {
       extend: {},
     },
     variants: {
       extend: {},
     },
     plugins: [
      require('flowbite/plugin'),
      require('@tailwindcss/aspect-ratio'),
  ],
  content: [
    "./node_modules/flowbite/**/*.js"
]
   }