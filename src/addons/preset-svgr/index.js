const svgRegExp = /\.svg$/

const svgrLoaders = ({ svgrLoaderOptions, urlLoader }) => {
  const svgrLoader = {
    loader: require.resolve('@svgr/webpack'),
    options: svgrLoaderOptions
  }

  return [
    {
      test: svgRegExp,
      use: [svgrLoader, urlLoader].filter(Boolean),
      type: 'javascript/auto'
    }
  ]
}

const webpackFinal = (config = {}, options = {}) => {
  const { module = {} } = config
  const { urlLoaderOptions } = options

  // Find existing rule that handles SVGs
  const existing = module.rules?.find(rule =>
    rule.test?.toString().includes('svg')
  )

  if (existing) {
    // Tell existing rule to ignore SVGs
    existing.exclude = svgRegExp

    // Use existing loader to load SVG URLs
    options.urlLoader = {
      loader: require.resolve('url-loader'),
      options: {
        name: existing.generator.filename,
        ...urlLoaderOptions
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
