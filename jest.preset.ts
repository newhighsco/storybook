import type { Config } from 'jest'

const config: Config = {
  transform: { '^.+\\.(j|t)sx?$': '@swc/jest' },
  transformIgnorePatterns: ['//node_modules/(?!(@newhighsco))']
}

export default config
