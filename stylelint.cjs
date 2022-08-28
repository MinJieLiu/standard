module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-css-modules',
    'stylelint-config-recess-order',
    'stylelint-config-prettier',
  ],
  customSyntax: 'postcss-less',
  plugins: ['stylelint-declaration-block-no-ignored-properties'],
  rules: {
    'no-descending-specificity': null,
    'function-no-unknown': null,
    'selector-class-pattern': '^[a-z][A-Za-z0-9-]+$',
  },
  ignoreFiles: ['**/*.js', '**/*.jsx', '**/*.tsx', '**/*.ts'],
};
