/** @type {import('jest').Config} */

module.exports = {
  modulePathIgnorePatterns: ['apps'],
  verbose: true,
  testMatch: ['<rootDir>/**/*.test.ts'],
  collectCoverageFrom: ['<rootDir>/**/src/**/*.{js,jsx,ts,tsx}'],
  transform: {
    '\\.[jt]sx?$': ['ts-jest', { useESM: true }],
  },
  moduleNameMapper: {
    // '(.+)\\.js': '$1',
    '^@/(.*)$': '<rootDir>/$1', // for jsdom?
  },
  extensionsToTreatAsEsm: ['.ts'],
}
