const { resolve } = require('path')

module.exports = {
  core: {
    builder: 'webpack5'
  },
  stories: ['../src/**/*.stories.@(js|mdx)'],
  addons: [resolve(__dirname, '../preset')]
}
