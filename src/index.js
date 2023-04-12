const { resolve } = require('path')

const addons = [
  '@storybook/addon-actions',
  '@storybook/addon-backgrounds',
  '@storybook/addon-docs',
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
  'storybook-dark-mode',
  resolve(__dirname, './addons/preset-svgr'),
  {
    name: resolve(__dirname, './addons/addon-transpile-modules'),
    options: {
      transpileModules: ['@newhighsco/chipset']
    }
  }
]

const previewAnnotations = (entry = []) => [
  ...entry,
  resolve(__dirname, './preview')
]

const core = config => ({ ...config, disableTelemetry: true })

module.exports = {
  addons,
  previewAnnotations,
  core
}
