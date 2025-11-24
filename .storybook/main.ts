import { type StorybookConfig } from '@storybook/react-webpack5'

const config: StorybookConfig = {
  framework: '@storybook/react-webpack5',
  stories: ['../example'],
  addons: ['@newhighsco/storybook-preset'],
  staticDirs: ['../public']
}

export default config
