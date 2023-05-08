module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    commonjs: true,
  },
  extends: ['ubahnchen'],
  rules: {
    '@typescript-eslint/ban-ts-comment': 0,
    // '@typescript-eslint/no-floating-promises': 2,
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        ignoreRestSiblings: true,
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
        caughtErrorsIgnorePattern: `^_`,
      },
    ],
    // 'import/order': 2,
    'jsx-quotes': 2,
    'object-shorthand': 2,
    'prettier/prettier': 2,
    'unicorn/prevent-abbreviations': [
      'error',
      {
        allowList: {
          dev: true,
          dist: true,
          env: true,
          props: true,
          Props: true,
        },
      },
    ],
    'unicorn/no-null': 0,
  },
}
