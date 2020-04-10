const svgRegExp = /\.svg$/
const svgUrlRegExp = /\.url\.svg$/

const svgrLoaders = ({ svgrLoaderOptions = {}, urlLoaderOptions = {} }) => {
  const svgrLoader = {
    loader: require.resolve('@svgr/webpack'),
    options: {
      ...svgrLoaderOptions
    }
  }

  return [
    {
      test: svgUrlRegExp,
      use: [
        svgrLoader,
        {
          loader: require.resolve('url-loader'),
          options: {
            ...urlLoaderOptions
          }
        }
      ]
    },
    {
      test: svgRegExp,
      exclude: svgUrlRegExp,
      use: svgrLoader
    }
  ]
}

const webpackFinal = (config = {}, options = {}) => {
  const { module = {} } = config
  const { urlLoaderOptions = {} } = options

  // Find existing file-loader rule that handle SVGs
  const existingSvgRule = module.rules.findIndex(rule =>
    rule.test.toString().includes('svg')
  )

  // Tell existing rule to ignore SVGs
  module.rules[existingSvgRule].exclude = svgRegExp

  options.urlLoaderOptions = {
    // Copy file name pattern from existing rule
    name: module.rules[existingSvgRule].query.name,
    ...urlLoaderOptions
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
