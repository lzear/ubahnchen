module.exports = {
  extends: ['ubahnchen'],
  ignorePatterns: ['!**/*'],
  overrides: [
    {
      files: ['*.ts', '*.tsx', '*.js', '*.jsx'],
      rules: {},

      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        tsconfigRootDir: __dirname,
        project: ['tsconfigg.json'], // Specify it only for TypeScript files
      },
    },
  ],
}
