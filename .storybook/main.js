const { resolve } = require('path')

module.exports = {
  core: {
    builder: 'webpack5',
    disableTelemetry: true
  },
  features: {
    storyStoreV7: true
  },
  stories: ['../src'],
  addons: [resolve(__dirname, '../preset')]
}
