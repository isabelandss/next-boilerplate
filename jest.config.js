module.exports = {
  testMatch: ['<rootDir>/src/**/*.spec.tsx'],
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts'],
  testEnvironment: 'jsdom',
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.ts(x)'],
  // testPathIgnorePatterns: ['/node_modules/', '/next/'],
}
