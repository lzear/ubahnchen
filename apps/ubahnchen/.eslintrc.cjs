// eslint-disable-next-line unicorn/no-empty-file
module.exports = {
  extends: ['@ubahnchen/eslint-config'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: true,
  },
  rules: {
    'tailwindcss/no-custom-classname': 0,
  },
}
