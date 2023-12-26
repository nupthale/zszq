module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
  },
  parserOptions: {
    ecmaVersion: 12,
    parser: '@typescript-eslint/parser',
  },
  plugins: ['prettier'],
  extends: [
    'plugin:vue/vue3-recommended',
    'airbnb-base',
    'plugin:prettier/recommended',
  ],
  rules: {
    'prettier/prettier': 'error',
    'vue/multi-word-component-names': 'off',
    'import/extensions': 'off',
    'no-unused-vars': [
      'error',
      {
        varsIgnorePattern: '.*',
        args: 'none',
      },
    ],
    'import/prefer-default-export': 'off',
  },
  settings: {
    'import/resolver': {
      typescript: {}, // this loads <rootdir>/tsconfig.json to eslint
    },
  },
};
