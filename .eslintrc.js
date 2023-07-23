module.exports = {
  root: true,
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:eslint-comments/recommended',
    'plugin:prettier/recommended',
    'prettier',
  ],
  plugins: ['node', 'prettier'],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  rules: {
    'no-return-await': ['error'],
    'no-shadow': 'off',
    'no-undef': 'error',
    'no-underscore-dangle': ['error'],
    'prettier/prettier': 'error',
    'no-nested-ternary': 'error',
    'no-param-reassign': ['error'],
    'no-restricted-syntax': ['error', 'ForStatement'],
    'no-multiple-empty-lines': [
      'error',
      {
        max: 1,
        maxBOF: 0,
        maxEOF: 0,
      },
    ],
    'no-console': ['warn'],
    'no-await-in-loop': ['error'],
    'comma-dangle': ['error', 'always-multiline'],
    'eslint-comments/no-unused-disable': 'warn',
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.ts'],
        paths: './',
      },
    },
  },
};
