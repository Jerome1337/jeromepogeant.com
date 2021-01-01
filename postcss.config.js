// Wait for PostCSS 8 support (https://github.com/cssnano/cssnano/issues/952)
// const cssnano = require('cssnano');
const postcssColorMod = require('postcss-color-mod-function');
const postcssPresetEnv = require('postcss-preset-env');
const postcssImport = require('postcss-import');
const postcssUrl = require('postcss-url');
const purgecss = require('@fullhuman/postcss-purgecss');
const tailwindcss = require('tailwindcss');
const postcssFontMagician = require('postcss-font-magician');

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
    // cssnano({
    //   autoprefixer: false,
    //   preset: ['default'],
    // }),
    production &&
      purgecss({
        content: ['./**/*.html', './**/*.svelte'],
        defaultExtractor: (content) => content.match(/[A-Za-z0-9-_:/]+/g) || [],
      }),
  ],
};
