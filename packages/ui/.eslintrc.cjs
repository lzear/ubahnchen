module.exports = {
  env: {
    node: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2022,
    sourceType: 'module',
  },
  extends: [
    // "next/core-web-vitals",
    'plugin:react/recommended',
    'plugin:i18n-json/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended',
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/recommended',
    'plugin:unicorn/recommended',
    // 'next',
    'next/core-web-vitals',
    'plugin:@next/next/recommended',
    'prettier',
  ],
  rules: {
    'i18n-json/identical-keys': [
      2,
      // {
      //   filePath: {
      //     // 'admin.json': '../../../../src/languages/en.json',
      //     'about.json': './public/locales/de/about.json',
      //     'common.json': './public/locales/en/common.json',
      //   },
      // },
    ],
    'react/self-closing-comp': 2,
    'react/jsx-no-leaked-render': 2,
    '@typescript-eslint/ban-ts-comment': 0,
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
    'import/no-restricted-paths': [
      2,
      {
        zones: [
          { target: './src/ui', from: './src/api' },
          { target: './src/api', from: './src/ui' },
          { target: './src/lib', from: './src/ui' },
          { target: './src/lib', from: './src/api' },
          { target: './pages', from: './src/ui' },
          { target: './src/ssr', from: './src/ui', except: ['./dynamic'] },
          { target: './pages/api', from: './src/ui' },
        ],
      },
    ],
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
}
