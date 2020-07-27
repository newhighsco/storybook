const sassRegExp = /\.s[ca]ss$/

const sassLoaders = ({
  styleLoaderOptions,
  cssLoaderOptions,
  sassLoaderOptions,
  postcssLoaderOptions
}) => {
  return [
    {
      test: sassRegExp,
      use: [
        {
          loader: require.resolve('style-loader'),
          options: styleLoaderOptions
        },
        {
          loader: require.resolve('css-loader'),
          options: cssLoaderOptions
        },
        {
          loader: require.resolve('sass-loader'),
          options: sassLoaderOptions
        },
        {
          loader: require.resolve('postcss-loader'),
          options: postcssLoaderOptions
        }
      ]
    }
  ]
}

const webpackFinal = (config = {}, options = {}) => {
  const { module = {} } = config
  const { cssLoaderOptions, postcssLoaderOptions } = options

  // Find existing rule that handles CSS
  const existingCssRule =
    module.rules &&
    module.rules.find(rule => rule.test.toString().includes('css'))

  if (existingCssRule) {
    // Inherit any existing css-loader options
    const existingCssLoader = existingCssRule.use.find(
      use => use && use.loader && use.loader.includes('/css-loader/')
    )

    options.cssLoaderOptions = {
      ...existingCssLoader.options,
      ...cssLoaderOptions
    }

    // Inherit any existing postcss-loader options
    const existingPostcssLoader = existingCssRule.use.find(
      use => use && use.loader && use.loader.includes('/postcss-loader/')
    )

    options.postcssLoaderOptions = {
      ...existingPostcssLoader.options,
      ...postcssLoaderOptions
    }
  }

  return {
    ...config,
    module: {
      ...module,
      rules: [...(module.rules || []), ...sassLoaders(options)]
    }
  }
}

module.exports = {
  webpackFinal
}
