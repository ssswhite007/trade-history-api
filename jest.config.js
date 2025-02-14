module.exports = {
  testEnvironment: 'node', // Since you're using Node.js
  testMatch: ['**/tests/**/*.test.js'], // Match test files
  setupFiles: ['dotenv/config'], // Load environment variables
  moduleNameMapper: {
    '^@models/(.*)$': '<rootDir>/models/$1', // Example of aliasing
    '^@controllers/(.*)$': '<rootDir>/controllers/$1',
  },
  collectCoverage: true, // Enable coverage collection
  coverageDirectory: 'coverage', // Directory for coverage reports
  coveragePathIgnorePatterns: ['/node_modules/', '/tests/'], // Ignore these paths
};
