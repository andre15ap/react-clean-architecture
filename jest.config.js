// eslint-disable-next-line no-undef
module.exports = {
  roots: ['<rootDir>/src'],
  collectDirectory: ['<rootDir>/src/**/*.{ts,tsx}'],
  coverageDirectory: 'coverage',
  testEnvironment: 'node',
  transform: {
    '.+\\.ts$': 'ts-jest',
  },
};
