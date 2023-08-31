/** @type { import('@storybook/react-webpack5').StorybookConfig } */
const config = {
  framework: '@storybook/react-webpack5',
  stories: ['../stories'],
  addons: ['@newhighsco/storybook-preset'],
  docs: { autodocs: true }
}

export default config
