import type { WebpackConfiguration } from '@storybook/core-webpack'
import { getProjectRoot } from 'storybook/internal/common'

import { type TranspileModulesAddonOptions } from './types'

export const webpackFinal = (
  config: WebpackConfiguration = {},
  options: TranspileModulesAddonOptions = {}
): WebpackConfiguration => {
  const { transpileModules = [] } = options

  if (transpileModules.length) {
    // Find existing rule that handles JSX
    const existing = config.module.rules?.find(({ include }) =>
      include?.toString().includes(getProjectRoot())
    )

    if (existing) {
      // Tell existing rule to not exclude modules that need transpiling
      existing.exclude = [
        new RegExp(`node_modules/(?!(${transpileModules.join('|')})/).*`),
        ...existing.exclude?.filter(
          exclude => !exclude.toString().includes('node_modules')
        )
      ]
    }
  }

  return config
}
