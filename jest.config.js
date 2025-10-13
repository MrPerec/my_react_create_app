/** @type {import('ts-jest').JestConfigWithTsJest} **/
module.exports = {
  testEnvironment: 'node',
  transform: {
    '^.+.tsx?$': ['ts-jest', {}],
  },
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  moduleNameMapper: { '\\.(css)': 'identity-obj-proxy' },
  preset: 'ts-jest',
  snapshotSerializers: ['enzyme-to-json/serializer'],
};
