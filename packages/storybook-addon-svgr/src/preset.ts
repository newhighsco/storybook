import type { WebpackConfiguration } from '@storybook/core-webpack'
import type { RuleSetRule } from 'webpack'

import { type SvgrAddonOptions } from './types'

const svgRegExp = /\.svg$/

const svgrLoaders = ({
  svgrOptions,
  assetLoader
}: SvgrAddonOptions): RuleSetRule[] => {
  const svgrLoader = { loader: '@svgr/webpack', options: svgrOptions }

  return [
    {
      test: svgRegExp,
      oneOf: [
        {
          dependency: { not: ['url'] },
          use: [svgrLoader, assetLoader && 'new-url-loader'].filter(Boolean)
        },
        assetLoader
      ]
    }
  ]
}

export const webpackFinal = (
  config: WebpackConfiguration = {},
  options: SvgrAddonOptions = {}
): WebpackConfiguration => {
  const { module = {} } = config
  const { assetModuleOptions } = options

  // Find existing rule that handles SVGs
  const existing = module.rules?.find(({ test }) => test?.test('.svg'))

  if (existing) {
    // Tell existing rule to ignore SVGs
    existing.exclude = svgRegExp

    // Use existing loader to load SVG URLs
    options.assetLoader = {
      type: existing.type,
      ...assetModuleOptions,
      generator: { ...existing.generator, ...assetModuleOptions?.generator }
    }
  }

  return {
    ...config,
    module: {
      ...module,
      rules: [...(module.rules || []), ...svgrLoaders(options)]
    }
  }
}
