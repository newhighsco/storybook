const { resolve } = require('path')

const addons = [
  '@storybook/addon-actions',
  '@storybook/addon-backgrounds',
  {
    name: '@storybook/addon-docs',
    options: { configureJSX: true, transcludeMarkdown: true }
  },
  '@storybook/addon-links',
  {
    name: '@storybook/addon-postcss',
    options: {
      postcssLoaderOptions: {
        implementation: require('postcss')
      }
    }
  },
  {
    name: '@storybook/preset-scss',
    options: {
      cssLoaderOptions: {
        modules: {
          localIdentName: '[name]_[local]__[hash:base64:5]'
        }
      }
    }
  },
  {
    name: resolve(__dirname, './addons/preset-svgr'),
    options: {
      svgrLoaderOptions: {
        svgoConfig: {
          plugins: [{ prefixIds: false }]
        }
      },
      urlLoaderOptions: {
        limit: 1
      }
    }
  },
  {
    name: resolve(__dirname, './addons/addon-transpile-modules'),
    options: {
      transpileModules: ['@newhighsco/chipset']
    }
  }
]

const config = (entry = []) => [...entry, resolve(__dirname, './preview')]

module.exports = {
  addons,
  config
}
