/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens:{
      'vsm': '450px',
      'sm': '640px',
      'vmd':'700px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',

    },
    extend: {
      height:{
        '600' : '70vh',
        '300' : '25vh',
        '500' : '35vh',
      },
      fontSize:{
        'vsm' : '0.6rem',
      }
    },
    
  },
  plugins: [],
  
  
}

