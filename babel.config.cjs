// eslint-disable-next-line unicorn/prefer-module
module.exports = {
  presets: [
    ['@babel/preset-env', { targets: { node: 'current' } }],
    '@babel/preset-typescript',
  ],
  overrides: [
    {
      test: /\.(ts|tsx)$/,
      presets: [
        ['@babel/preset-env', { targets: { node: 'current' } }],
        'babel-preset-typescript',
      ],
    },
  ],
}