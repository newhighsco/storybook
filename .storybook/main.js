/** @type { import('@storybook/react-webpack5').StorybookConfig } */
const config = {
  framework: '@storybook/react-webpack5',
  stories: ['../example'],
  addons: ['@newhighsco/storybook-preset'],
  staticDirs: ['../public'],
  docs: { autodocs: true }
}

export default config
