const { resolve } = require('path')

module.exports = {
  framework: '@storybook/react-webpack5',
  stories: ['../src'],
  addons: [resolve(__dirname, '../preset')],
  docs: { autodocs: true }
}
