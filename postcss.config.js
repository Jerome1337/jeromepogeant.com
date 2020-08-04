const cssnano = require("cssnano");
const postcss_color_mod = require("postcss-color-mod-function");
const postcss_preset_env = require("postcss-preset-env");
const postcss_Import = require("postcss-import");
const postcss_Url = require("postcss-url");
const purgecss = require("@fullhuman/postcss-purgecss");

const production = !process.env.ROLLUP_WATCH;

module.exports = {
  plugins: [
    postcss_Import(),
    postcss_Url(),
    require("tailwindcss"),
    require("postcss-font-magician")({
      variants: {
        "Roboto Mono": {
          300: [],
          400: [],
          700: [],
        },
      },
      foundries: ["google"],
      protocol: "https:",
    }),
    postcss_preset_env({
      stage: 0,
      autoprefixer: {
        grid: true,
      },
    }),
    postcss_color_mod(),
    cssnano({
      autoprefixer: false,
      preset: ["default"],
    }),
    production &&
      purgecss({
        content: ["./src/*.html", "./src/*.svelte"],
        defaultExtractor: (content) => content.match(/[A-Za-z0-9-_:/]+/g) || [],
      }),
  ],
};
