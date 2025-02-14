export default {
  testEnvironment: 'node',
  testMatch: ['**/tests/**/*.test.js'],
  setupFiles: ['dotenv/config'],
  moduleNameMapper: {
    '^@models/(.*)$': '<rootDir>/models/$1',
    '^@controllers/(.*)$': '<rootDir>/controllers/$1',
  },
  collectCoverage: true,
  coverageDirectory: 'coverage',
  coveragePathIgnorePatterns: ['/node_modules/', '/tests/'],
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
  },
};