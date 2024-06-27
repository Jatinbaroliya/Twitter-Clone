/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.html"],
  theme: {
    extend: {},
  },
  plugins: [],
}

module.exports = {
  theme: {
    extend: {
      screens: {
        'md*': {'max': '768px'}, // Custom breakpoint for less than sm
        'esm':{'min':'495px'}
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