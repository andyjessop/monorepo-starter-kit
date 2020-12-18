module.exports = {
  env: {
    es2021: true,
    jest: true,
    node: true,
  },
  extends: ['standard'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'prettier'],
  rules: {
    'comma-dangle': ['error', 'always-multiline'],
    semi: ['error', 'always', { omitLastInOneLineBlock: true }],
    'space-before-function-paren': ['error', 'never'],
    'prettier/prettier': 'error',
  },
};
