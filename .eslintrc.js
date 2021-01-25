module.exports = {
  extends: ['airbnb-typescript-prettier'],
  parserOptions: {
    project: './tsconfig.json',
  },
  rules: {
    'dot-notation': ['off'],
    'import/no-named-as-default': 0,
    'react/destructuring-assignment': 0,
    'react/self-closing-comp': 0,
    'no-use-before-define': ['off'],
    'no-unused-vars': ['warn'],
    '@typescript-eslint/no-unused-vars': 0,
    '@typescript-eslint/no-use-before-define': 0,
    '@typescript-eslint/no-shadow': 0,
    'import/no-cycle': 0,
    'react/no-array-index-key': 0,
  },
};
