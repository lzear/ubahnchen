// eslint-disable-next-line unicorn/prefer-module
module.exports = {
  presets: [
    ['@babel/preset-env', { targets: { node: 'current' } }],
    '@babel/preset-typescript',
    '@babel/preset-react',
  ],
  // plugins: ['babel-plugin-transform-import-meta'],
  sourceType: 'module',
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
