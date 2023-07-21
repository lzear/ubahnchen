const config = {
  displayName: 'gtfs-to-sqlite',
  preset: '../../jest.preset.cjs',
  transform: {
    '^.+\\.[tj]s$': [
      'ts-jest',
      {
        tsconfig: '<rootDir>/tsconfig.spec.json',
      },
    ],
  },
  moduleFileExtensions: ['ts', 'js', 'html'],
  // coverageDirectory: '../../coverage/libs/gtfs-to-sqlite',
}

export default config
