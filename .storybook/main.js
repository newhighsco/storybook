const { resolve } = require('path')

module.exports = {
  stories: ['../src/**/*.stories.(js|mdx)'],
  presets: [resolve(__dirname, '../src')]
}
