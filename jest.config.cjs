// import path from 'node:path'
// import url from 'node:url'

const url = require('url')
const path = require('path')
// import { pathsToModuleNameMapper } from 'ts-jest'
// import pkg from './tsconfig.json' assert { type: 'json' }

/** @type {import('jest').Config} */
// export default {
module.exports = {
  // setupFilesAfterEnv: [
  //   path.join(
  //     path.dirname(url.fileURLToPath(import.meta.url)),
  //     'packages/core/test/setup.ts',
  //   ),
  // ],
  // testEnvironment: 'jsdom',
  // testPathIgnorePatterns: [
  //   '.+/(types|__snapshots__)/.+',
  //   '<rootDir>/node_modules/',
  // ],
  // modulePathIgnorePatterns: ['dist', 'cypress'],
  // moduleNameMapper: {
  //   '^react$': '<rootDir>/node_modules/react',
  // },
  // collectCoverageFrom: [
  //   '<rootDir>/packages/{animated,core,rafz,shared}/src/*.{ts,tsx}',
  //   '<rootDir>/targets/{web}/src/*.{ts,tsx}',
  // ],
  // coverageDirectory: './coverage',
  // coverageThreshold: {
  //   global: {
  //     statements: 80,
  //     branches: 74,
  //     functions: 71,
  //     lines: 82,
  //   },
  // },
  // moduleFileExtensions: ['js', 'ts', 'tsx'],
  // coverageReporters: ['json', 'html', 'text'],
  // fakeTimers: { enableGlobally: true },
  // transform: {
  //   '^.+\\.(t|j)sx?$': '@swc/jest',
  // },

  // preset: 'ts-jest',
  // testEnvironment: 'node',
  // transform: {
  //   '\\.ts$': 'babel-jest',
  // },
  // moduleNameMapper: {
  //   '^@/(.*)$': '<rootDir>/src/$1',
  // },
  // globals: {
  //   'ts-jest': {
  //     tsconfig: 'tsconfig.json',
  //   },
  // },
  // testMatch: ['**/*.test.(ts|js)'],
  // rootDirectory: path.resolve(path.dirname(url.fileURLToPath(import.meta.url))),
  rootDir: path.resolve(__dirname),
  verbose: true,
  // preset: 'ts-jest/presets/default-esm',
  preset: 'ts-jest/presets/js-with-ts-esm',

  // moduleNameMapper: pathsToModuleNameMapper(pkg.compilerOptions.paths, {
  //   prefix: '<rootDir>/',
  // }),
  testEnvironment: 'node',
  testMatch: ['<rootDir>/**/*.test.ts'],
  // transform: {
  //   '^.+\\.(t|j)sx?$': ['ts-jest', { useESM: true }],
  // },

  transform: {
    '^.+\\.tsx?$': 'babel-jest',
  },
  collectCoverageFrom: [
    '<rootDir>/**/src/**/*.{ts,tsx}',
  ]
  // setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
}
