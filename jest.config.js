module.exports = {
  coverageReporters: ['json', 'text-summary'],
  setupFiles: ['./config/jest/setup-tests.js'],
  transformIgnorePatterns: ['/node_modules/(?!@storybook)']
}
