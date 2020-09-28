import childProcess from 'child_process';
import commonjs from '@rollup/plugin-commonjs';
import imagemin from 'rollup-plugin-imagemin';
import json from '@rollup/plugin-json';
import livereload from 'rollup-plugin-livereload';
import postcss from 'rollup-plugin-postcss';
import resolve from '@rollup/plugin-node-resolve';
import svelte from 'rollup-plugin-svelte';
import sveltePreprocess from 'svelte-preprocess';
import svelteSVG from 'rollup-plugin-svelte-svg';
import { terser } from 'rollup-plugin-terser';

const production = !process.env.ROLLUP_WATCH;

function serve() {
  let server;

  function toExit() {
    if (server) server.kill(0);
  }

  return {
    writeBundle() {
      if (server) return;

      server = childProcess.spawn('npm', ['run', 'start', '--', '--dev'], {
        stdio: ['ignore', 'inherit', 'inherit'],
        shell: true,
      });

      process.on('SIGTERM', toExit);
      process.on('exit', toExit);
    },
  };
}

export default {
  input: 'src/main.js',
  context: 'window',
  output: {
    sourcemap: true,
    format: 'iife',
    name: 'app',
    file: 'public/build/bundle.js',
  },
  plugins: [
    postcss({
      extract: true,
    }),
    json(),
    svelte({
      preprocess: sveltePreprocess({ postcss: true }),
      dev: !production,
      css: (css) => {
        css.write('bundle.css');
      },
    }),
    svelteSVG(),
    imagemin({
      include: '**/*.jpg',
      fileName: '[name]-op[extname]',
      publicPath: 'images',
    }),
    resolve({
      browser: true,
      dedupe: ['svelte'],
    }),
    commonjs(),
    !production && serve(),
    !production && livereload('public'),
    production && terser(),
  ],
  watch: {
    clearScreen: false,
  },
};
