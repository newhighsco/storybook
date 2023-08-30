module.exports = {
  coverageReporters: ['json', 'text-summary'],
  reporters: [
    'default',
    ['jest-junit', { outputDirectory: 'reports', outputName: 'jest.xml' }]
  ],
  transformIgnorePatterns: ['/node_modules/(?!@storybook)']
}
