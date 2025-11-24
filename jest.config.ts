import type { Config } from 'jest'

const config: Config = {
  projects: ['<rootDir>/packages/*'],
  coverageReporters: ['json', 'text-summary'],
  reporters: [
    'default',
    [
      'jest-junit',
      {
        addFileAttribute: 'true',
        outputDirectory: 'reports',
        outputName: 'jest.xml'
      }
    ]
  ]
}

export default config
