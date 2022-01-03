module.exports = {
  content: ['./src/**/*.svelte'],
  theme: {
    colors: {
      'white': '#ffffff',
      'brown-light': '#a59886',
      'purple': '#161c42',
      'yellow': '#d7be90',
      'yellow-dark': '#ebe0cf',
      'blue': '#3555c0',
      'blue-dark': '#e570b5',
      'gold': '#d69e2e',
      'gold-dark': '#975a16',
      'blue-light': '#8f81a5',
      'gray-dark': '#2d3748',
      'pink': '#e570b5',
    },
    fontFamily: {
      display: ['Roboto-Mono', 'monospace', 'sans-serif'],
      body: ['Roboto-Mono', 'monospace', 'sans-serif'],
    },
  },
  variants: {
    cursor: ['first'],
    outline: ['focus'],
    backgroundColor: ['hover'],
  },
};
