module.exports = {
  testEnvironment: 'node', // Specify the test environment as Node.js
  testMatch: ['**/tests/**/*.test.js'], // Define the pattern to match test files
  setupFiles: ['dotenv/config'], // Load environment variables from a .env file before tests
  moduleNameMapper: {
    '^@models/(.*)$': '<rootDir>/models/$1', // Alias for models directory
    '^@controllers/(.*)$': '<rootDir>/controllers/$1', // Alias for controllers directory
  },
  collectCoverage: true, // Enable code coverage collection
  coverageDirectory: 'coverage', // Specify the directory for storing coverage reports
  coveragePathIgnorePatterns: ['/node_modules/', '/tests/'], // Paths to ignore for coverage
};
