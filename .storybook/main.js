import { resolve } from 'path'

/** @type { import('@storybook/react-webpack5').StorybookConfig } */
const config = {
  framework: '@storybook/react-webpack5',
  stories: ['../src'],
  addons: [resolve(__dirname, '../preset')],
  docs: { autodocs: true }
}

export default config
