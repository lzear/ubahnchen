/** @type {import('jest').Config} */

module.exports = {
  verbose: true,
  testMatch: ['<rootDir>/**/*.test.ts'],
  collectCoverageFrom: ['<rootDir>/**/src/**/*.{js,jsx,ts,tsx}'],
  transform: {
    '\\.[jt]sx?$': ['ts-jest', { useESM: true }],
  },
  moduleNameMapper: {
    '(.+)\\.js': '$1',
  },
  extensionsToTreatAsEsm: ['.ts'],
}
