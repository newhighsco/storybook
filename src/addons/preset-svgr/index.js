const svgRegExp = /\.svg$/

const svgrLoaders = ({ svgrLoaderOptions, assetLoader }) => {
  const svgrLoader = {
    loader: require.resolve('@svgr/webpack'),
    options: svgrLoaderOptions
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

const webpackFinal = (config = {}, options = {}) => {
  const { module = {} } = config
  const { assetLoaderOptions } = options

  // Find existing rule that handles SVGs
  const existing = module.rules?.find(rule =>
    rule.test?.toString().includes('svg')
  )

  if (existing) {
    // Tell existing rule to ignore SVGs
    existing.exclude = svgRegExp

    // Use existing loader to load SVG URLs
    options.assetLoader = {
      type: existing.type,
      ...assetLoaderOptions,
      generator: {
        ...existing.generator,
        ...assetLoaderOptions?.generator
      }
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

module.exports = {
  webpackFinal
}
