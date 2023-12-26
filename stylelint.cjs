module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-css-modules',
    'stylelint-config-recess-order',
  ],
  customSyntax: 'postcss-less',
  plugins: ['stylelint-declaration-block-no-ignored-properties'],
  rules: {
    'at-rule-no-unknown': null,
    'declaration-block-no-redundant-longhand-properties': [
      true,
      {
        ignoreShorthands: ['inset'],
      },
    ],
    'no-descending-specificity': null,
    'function-no-unknown': [
      true,
      {
        ignoreFunctions: ['global'],
      },
    ],
    'import-notation': null,
    'selector-class-pattern': '^[a-z][A-Za-z0-9-]+$',
  },
  ignoreFiles: ['**/*.js', '**/*.jsx', '**/*.tsx', '**/*.ts'],
};
