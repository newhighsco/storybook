const { resolve } = require('path')

const addons = [
  '@storybook/addon-actions/register',
  { name: '@storybook/addon-docs', options: { configureJSX: true } },
  '@storybook/addon-links/register',
  {
    name: '@storybook/preset-scss',
    options: {
      cssLoaderOptions: {
        modules: true
      },
      sassLoaderOptions: {
        implementation: require('sass')
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
