module.exports = {
  root: true,
  extends: [
    'ubahnchen',
    // 'next/core-web-vitals',
    // 'next',
    // 'plugin:react/recommended',
    // 'plugin:react-hooks/recommended',
    // 'plugin:jsx-a11y/recommended',
  ],
  rules: {
    'react/react-in-jsx-scope': 0,
    'react/no-unknown-property': [
      2,
      {
        ignore: ['jsx'],
      },
    ],
  },
}
