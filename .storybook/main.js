const { resolve } = require('path')

module.exports = {
  stories: ['../src/**/*.stories.@(js|mdx)'],
  addons: [resolve(__dirname, '../preset')]
}
