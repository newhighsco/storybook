import { resolve } from 'path'

/** @typedef { import('@storybook/react-webpack5').StorybookConfig } StorybookConfig */

/** @type { StorybookConfig['addons'] } */
export const addons = [
  '@storybook/addon-actions',
  '@storybook/addon-backgrounds',
  '@storybook/addon-docs',
  '@storybook/addon-links',
  {
    name: '@storybook/addon-styling',
    options: {
      cssModules: {
        localIdentName: '[name]_[local]__[hash:base64:5]'
      },
      postCss: {
        implementation: require('postcss')
      },
      sass: {
        implementation: require('sass')
      }
    }
  },
  'storybook-dark-mode',
  '@newhighsco/storybook-addon-svgr',
  {
    name: '@newhighsco/storybook-addon-transpile-modules',
    options: {
      transpileModules: ['@newhighsco/chipset']
    }
  }
]

/** @type { StorybookConfig['core'] } */
export const core = config => ({ ...config, disableTelemetry: true })

/** @type { StorybookConfig['previewAnnotations'] } */
export const previewAnnotations = (entry = []) => [
  ...entry,
  resolve(__dirname, './preview')
]
