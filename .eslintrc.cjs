const { ESLint } = require('eslint');
module.exports = {
  parser: '@babel/eslint-parser',
  extends: ['prettier'],
  plugins: ['prettier'],
  parserOptions: {
    ecmaVersion: 8,
    requireConfigFile: false
  },
  env: {
    node: true,
    mocha: true,
    es6: true
  },
  rules: {
    'arrow-body-style': ['error', 'as-needed'],
    'no-underscore-dangle': 'off',
    'no-unneeded-ternary': 'off',
    'no-unused-vars': 'error',
    'object-shorthand': 'error',
    'one-var': ['error', { const: 'never' }],
    'prettier/prettier': ['error'],
    'prefer-const': 'error',
    'no-undef': 'error'
  },
  overrides: [
    {
      files: ['*.model.js'],
      rules: {
        'no-use-before-define': 'off'
      }
    },
    {
      files: ['*.schema.js'],
      rules: {
        'no-undefined': 'off'
      }
    },
    {
      files: ['*.test.js'],
      rules: {
        'max-lines-per-function': 'off',
        'no-undef': 'off'
      }
    },
    {
      files: ['api-request-for*.js'],
      rules: {
        'max-lines-per-function': 'off'
      }
    }
  ]
}