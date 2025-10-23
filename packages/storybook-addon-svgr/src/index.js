/** @typedef { import('@storybook/react-webpack5').StorybookConfig } StorybookConfig */

const svgRegExp = /\.svg$/

const svgrLoaders = ({ svgrOptions, assetLoader }) => {
  const svgrLoader = {
    loader: require.resolve('@svgr/webpack'),
    options: svgrOptions
  }

  return [
    {
      test: svgRegExp,
      oneOf: [
        {
          dependency: { not: ['url'] },
          use: [
            svgrLoader,
            assetLoader && require.resolve('new-url-loader')
          ].filter(Boolean)
        },
        assetLoader
      ]
    }
  ]
}

/** @type { StorybookConfig['webpackFinal'] } */
export const webpackFinal = (config = {}, options = {}) => {
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
