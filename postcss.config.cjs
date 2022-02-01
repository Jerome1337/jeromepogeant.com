const cssnano = require('cssnano');
const postcssColorMod = require('postcss-color-mod-function');
const postcssFontMagician = require('postcss-font-magician');
const postcssImport = require('postcss-import');
const postcssPresetEnv = require('postcss-preset-env');
const postcssUrl = require('postcss-url');
const tailwindcss = require('tailwindcss');

const production = !process.env.ROLLUP_WATCH;

module.exports = {
  plugins: [
    postcssFontMagician({
      variants: {
        'Roboto Mono': {
          300: [],
          400: [],
          700: [],
        },
      },
      foundries: 'google',
      protocol: 'https:',
    }),
    postcssImport(),
    postcssUrl(),
    tailwindcss(),
    postcssPresetEnv({
      stage: 0,
      autoprefixer: {
        grid: false,
      },
      features: {
        'focus-within-pseudo-class': false,
      },
    }),
    postcssColorMod(),
    cssnano({
      autoprefixer: false,
      preset: ['default'],
    }),
  ],
};
