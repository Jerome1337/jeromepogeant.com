module.exports = {
  theme: {
    extend: {
      fill: () => ({
        'current': 'currentColor',
        'gray-600': '#25282c',
        'gray-800': '#151618',
      }),
    },
    fontFamily: {
      display: ['Roboto-Mono', 'monospace', 'sans-serif'],
      body: ['Roboto-Mono', 'monospace', 'sans-serif'],
    },
  },
  variants: {
    cursor: ['first'],
  },
  plugins: [],
};
