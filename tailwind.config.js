const gradients = require('tailwindcss-plugins/gradients');

module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
  },
  theme: {
    colors: {
      'white': '#ffffff',
      'brown-light': '#a59886',
      'brown': '#8e7f69',
      'yellow': '#d7be90',
      'yellow-dark': '#ebe0cf',
      'blue': '#141e30',
      'blue-dark': '#28416f',
      'gold': '#d69e2e',
      'gold-dark': '#975a16',
      'gray': '#718096',
      'gray-dark': '#2d3748',
    },
    fontFamily: {
      display: ['Roboto-Mono', 'monospace', 'sans-serif'],
      body: ['Roboto-Mono', 'monospace', 'sans-serif'],
    },
    gradients: (theme) => ({
      'gradient-dark': ['-30deg', theme('colors.blue-dark'), theme('colors.blue')],
      'gradient-light': ['-30deg', theme('colors.yellow-dark'), theme('colors.yellow')],
    }),
  },
  variants: {
    cursor: ['first'],
    outline: ['focus'],
    backgroundColor: ['hover'],
  },
  plugins: [gradients],
};
