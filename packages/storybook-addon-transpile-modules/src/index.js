import { getProjectRoot } from 'storybook/internal/common'

/** @typedef { import('@storybook/react-webpack5').StorybookConfig } StorybookConfig */

/** @type { StorybookConfig['webpackFinal'] } */
export const webpackFinal = (config = {}, options = {}) => {
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
