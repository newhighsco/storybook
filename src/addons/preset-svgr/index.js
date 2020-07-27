const svgRegExp = /\.svg$/
const svgUrlRegExp = /\.url\.svg$/

const svgrLoaders = ({ svgrLoaderOptions, urlLoader }) => {
  const svgrLoader = {
    loader: require.resolve('@svgr/webpack'),
    options: svgrLoaderOptions
  }

  return [
    urlLoader && {
      test: svgUrlRegExp,
      use: [svgrLoader, urlLoader]
    },
    {
      test: svgRegExp,
      exclude: svgUrlRegExp,
      use: svgrLoader
    }
  ].filter(r => r)
}

const webpackFinal = (config = {}, options = {}) => {
  const { module = {} } = config
  const { urlLoaderOptions } = options

  // Find existing rule that handles SVGs
  const existingSvgRule =
    module.rules &&
    module.rules.find(rule => rule?.test?.toString().includes('svg'))

  if (existingSvgRule) {
    // Tell existing rule to ignore SVGs
    existingSvgRule.exclude = svgRegExp

    // Use existing loader to load SVG URLs
    options.urlLoader = {
      loader: existingSvgRule.loader,
      ...(urlLoaderOptions
        ? { options: { ...existingSvgRule.options, ...urlLoaderOptions } }
        : { options: existingSvgRule.options })
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
