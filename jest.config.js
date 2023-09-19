const nextJest = require('next/jest');
const createJestConfig = nextJest({
  dir: './',
});
const customJestConfig = {
  moduleDirectories: ['node_modules', '<rootDir>/', '../node_modules'],
  moduleNameMapper: {
    '^~(.*)$': '<rootDir>/app/$1',
  },
  testEnvironment: 'jsdom',
  collectCoverage: true,
  collectCoverageFrom: ['./**/*.{ts,tsx}'],
};
module.exports = createJestConfig(customJestConfig);
