/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.html"],
  theme: {
    extend: {},
  },
  theme: {
    extend: {
      screens: {
        'md*': {'max': '768px'}, // Custom breakpoint for less than sm
        'esm':{'min':'495px'},
        'ud':{'min':'666px'}
      },
    },
  },
  variants: {
    extend: {
      alignItems: ['max-sm'], // Enable custom variant for alignItems utility
    },
  },
  plugins: [],
}

