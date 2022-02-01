module.exports = {
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.json'],
  },
  parser: '@typescript-eslint/parser',
  env: {
    es6: true,
    browser: true,
  },
  plugins: ['svelte3', 'import', '@typescript-eslint'],
  overrides: [
    {
      files: ['*.svelte'],
      processor: 'svelte3/svelte3',
    },
  ],
  extends: ['airbnb', 'prettier', 'plugin:import/typescript'],
  rules: {
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: true,
      },
    ],
    'import/first': 'off',
    'import/export': 'off',
    'import/no-mutable-exports': 'off',
    'import/extensions': [
      1,
      {
        js: 'never',
        ts: 'never',
        json: 'always',
      },
    ],
    'import/order': [
      'error',
      {
        'groups': ['builtin', 'external', 'internal'],
        'newlines-between': 'always',
        'alphabetize': {
          order: 'asc',
        },
      },
    ],
  },
  settings: {
    'svelte3/typescript': require('typescript'),
    'svelte3/ignore-styles': () => true,
  },
};
