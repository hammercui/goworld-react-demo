/*
 * @Description: 无
 * @version: 1.0.0
 * @Company: sdbean
 * @Author: hammercui
 * @Date: 2018-12-29 16:45:38
 * @LastEditors: jiawen.wang
 * @LastEditTime: 2021-06-07 14:03:05
 */
module.exports = {
  parser: 'babel-eslint',
  extends: ['airbnb', 'prettier', 'plugin:compat/recommended'],
  env: {
    browser: true,
    node: true,
    es6: true,
    mocha: true,
    jest: true,
    jasmine: true,
  },
  globals: {
    APP_TYPE: true,
  },
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
    'react/jsx-wrap-multilines': 0,
    'react/prop-types': 0,
    'react/forbid-prop-types': 0,
    'react/jsx-one-expression-per-line': 0,
    'import/no-unresolved': [0, { ignore: ['^@/', '^umi/'] }],
    'import/no-extraneous-dependencies': [2, { optionalDependencies: true }],
    'jsx-a11y/no-noninteractive-element-interactions': 0,
    'jsx-a11y/click-events-have-key-events': 0,
    'jsx-a11y/no-static-element-interactions': 0,
    'jsx-a11y/anchor-is-valid': 0,
    'react/jsx-indent': 0,
    'react/jsx-indent-props': 'off',
    'linebreak-style': 0,
    'no-console': 0,
    'no-unused-vars': 0,
    'no-else-return': 0,
    'prefer-destructuring': 0,
    'no-plusplus': 0,
    'prefer-default-export': 0,
    'no-param-reassign': 0,
    'guard-for-in': 0,
    'no-restricted-syntax': 0,
    'no-underscore-dangle': 0,
    'func-names': 0,
    'no-throw-literal': 0,
    'vars-on-top': 0,
    'no-var': 0,
    'no-redeclare': 0,
    'block-scoped-var': 0,
    'no-array-constructor': 0,
    'no-undef': 0,
    'no-shadow': 0,
    'no-useless-concat': 0,
    'import/prefer-default-export': 0,
    'spaced-comment': 0,
    camelcase: 0,
    eqeqeq: 'off',
  },
  settings: {
    polyfills: ['fetch', 'promises', 'url'],
  },
};
