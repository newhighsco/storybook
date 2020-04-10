const { resolve } = require('path')

const addons = [
  { name: '@storybook/addon-docs', options: { configureJSX: true } },
  {
    name: '@storybook/preset-scss',
    options: {
      cssLoaderOptions: {
        importLoaders: 1,
        modules: true
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
  }
]

const entries = (entry = []) => [...entry, resolve(__dirname, './preview')]

const managerEntries = (entry = []) => [
  ...entry,
  resolve(__dirname, './manager')
]

module.exports = {
  addons,
  entries,
  managerEntries
}
