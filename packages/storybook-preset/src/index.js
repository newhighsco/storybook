import { resolve } from 'path'

import { cssLoaders } from './loaders'

/** @typedef { import('@storybook/react-webpack5').StorybookConfig } StorybookConfig */

/** @type { StorybookConfig['addons'] } */
export const addons = [
  '@storybook/addon-webpack5-compiler-swc',
  '@storybook/addon-a11y',
  '@storybook/addon-actions',
  '@storybook/addon-backgrounds',
  '@storybook/addon-docs',
  '@storybook/addon-links',
  {
    name: '@storybook/addon-styling-webpack',
    options: {
      rules: [
        cssLoaders(),
        cssLoaders(/\.s[ac]ss$/, [
          {
            loader: require.resolve('sass-loader'),
            options: { implementation: require.resolve('sass') }
          }
        ])
      ]
    }
  },
  'storybook-dark-mode',
  '@newhighsco/storybook-addon-svgr',
  {
    name: '@newhighsco/storybook-addon-transpile-modules',
    options: { transpileModules: ['@newhighsco/chipset'] }
  }
]

/** @type { StorybookConfig['core'] } */
export const core = config => ({ ...config, disableTelemetry: true })

/** @type { StorybookConfig['previewAnnotations'] } */
export const previewAnnotations = (entry = []) => [
  ...entry,
  resolve(__dirname, './preview')
]
