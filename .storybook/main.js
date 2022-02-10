const { resolve } = require('path')

module.exports = {
  core: {
    builder: 'webpack5'
  },
  features: {
    storyStoreV7: true
  },
  stories: ['../src/**/*.stories.@(jsx|mdx)'],
  addons: [resolve(__dirname, '../preset')]
}
