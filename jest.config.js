module.exports = {
  projects: ['<rootDir>/packages/*'],
  coverageReporters: ['json', 'text-summary'],
  reporters: [
    'default',
    ['jest-junit', { outputDirectory: 'reports', outputName: 'jest.xml' }]
  ]
}
