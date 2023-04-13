import { resolve } from 'path'

/** @typedef { import('@storybook/react-webpack5').StorybookConfig } StorybookConfig */

/** @type { StorybookConfig['addons'] } */
export const addons = [
  '@storybook/addon-actions',
  '@storybook/addon-backgrounds',
  '@storybook/addon-docs',
  '@storybook/addon-links',
  {
    name: '@storybook/addon-postcss',
    options: {
      postcssLoaderOptions: {
        implementation: require('postcss')
      }
    }
  },
  {
    name: '@storybook/preset-scss',
    options: {
      cssLoaderOptions: {
        modules: {
          localIdentName: '[name]_[local]__[hash:base64:5]'
        }
      }
    }
  },
  'storybook-dark-mode',
  resolve(__dirname, './presets/preset-svgr'),
  {
    name: resolve(__dirname, './addons/addon-transpile-modules'),
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
