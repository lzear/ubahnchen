module.exports = {
  extends: [
    // "next/core-web-vitals",
    'eslint:recommended',
    'plugin:import/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended',
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:unicorn/recommended',
    // 'next',
    // 'next/core-web-vitals',
    'plugin:@next/next/recommended',
    'prettier',
  ],
  settings: {
    react: {
      version: 'detect',
    },
  },
  overrides: [
    {
      files: ['*.json'],
      rules: {
        'unicorn/numeric-separators-style': 0,
        'unicorn/no-null': 0,
      },
    },
  ],
  rules: {
    'import/order': 2,
    'jsx-quotes': 2,
    'object-shorthand': 2,
    'react/jsx-curly-brace-presence': [2, 'never'],
    'prettier/prettier': 2,
    '@typescript-eslint/ban-ts-comment': 0,
    '@typescript-eslint/no-unused-vars': [
      'error',
      { ignoreRestSiblings: true },
    ],
    'unicorn/prevent-abbreviations': [
      2,
      {
        allowList: {
          dev: true,
          props: true,
          Props: true,
        },
      },
    ],
  },
  plugins: ['prettier'],
}
