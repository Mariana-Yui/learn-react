module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 13,
    sourceType: 'module',
  },
  globals: {
    module: true,
    require: true,
    __dirname: true,
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'react/display-name': 'off',
    'no-debugger': 'off',
    'no-var': 'error',
    '@typescript-eslint/no-empty-interface': 0,
    '@typescript-eslint/no-var-requires': 0,
  },
};
