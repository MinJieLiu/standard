module.exports = {
  extends: [
    'airbnb-base',
    'airbnb-typescript',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'prettier',
  ],
  plugins: ['jest'],
  parser: '@typescript-eslint/parser',
  env: {
    browser: true,
    node: true,
    es6: true,
    mocha: true,
    jest: true,
    jasmine: true,
  },
  rules: {
    'import/prefer-default-export': 0,
    'import/no-extraneous-dependencies': 0,
    'import/extensions': 0,

    'arrow-body-style': 0,
    'class-methods-use-this': 0,
    'max-lines-per-function': [2, { max: 320, skipComments: true, skipBlankLines: true }],
    'no-confusing-arrow': 0,
    'no-console': 2,
    'no-multi-assign': 0,
    'no-nested-ternary': 0,
    'no-promise-executor-return': 0,
    'no-prototype-builtins': 0,

    '@typescript-eslint/consistent-type-imports': 1,
    '@typescript-eslint/no-use-before-define': [
      2,
      { functions: false, classes: true, variables: true, typedefs: true },
    ],

    'react/display-name': 1,
    'react/self-closing-comp': 1,
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    babelOptions: {
      presets: [
        '@babel/preset-env',
        [
          '@babel/preset-react',
          {
            runtime: 'automatic',
          },
        ],
        '@babel/preset-typescript',
      ],
      plugins: [
        ['@babel/plugin-proposal-decorators', { legacy: true }],
        ['@babel/plugin-transform-class-properties', { loose: true }],
      ],
    },
    requireConfigFile: false,
    project: './tsconfig.json',
  },
};
