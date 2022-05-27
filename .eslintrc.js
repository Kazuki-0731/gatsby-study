// Reference: https://github.com/eslint/eslint
// Reference: https://qiita.com/awakia/items/3a05edfa135762d7952c
module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'standard', 'plugin:prettier/recommended', 'prettier/react', 'prettier'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    version: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint', 'prettier'],
  rules: {
    'prettier/prettier': 'error',
  },
}
