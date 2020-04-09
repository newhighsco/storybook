const { resolve } = require('path')
const { svgLoaders, svgRegExp } = require('./svg-loaders')

const addons = ['@storybook/addon-docs']

const entries = (entry = []) => [...entry, resolve(__dirname, './preview')]

const managerEntries = (entry = []) => [
  ...entry,
  resolve(__dirname, './manager')
]

const presets = [
  {
    name: '@storybook/preset-scss',
    options: {
      cssLoaderOptions: {
        importLoaders: 1,
        modules: true
      }
    }
  }
]

const webpackFinal = async config => {
  const existingSvgRule = config.module.rules.findIndex(rule =>
    rule.test.toString().includes('svg')
  )

  config.module.rules[existingSvgRule].exclude = svgRegExp
  config.module.rules.push(...svgLoaders())

  return config
}

module.exports = {
  addons,
  entries,
  managerEntries,
  presets,
  webpackFinal
}
