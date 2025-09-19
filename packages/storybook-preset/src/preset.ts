import type { StorybookConfig } from '@storybook/react-webpack5'

import { cssLoaders } from './loaders'

export const addons: StorybookConfig['addons'] = [
  '@storybook/addon-webpack5-compiler-swc',
  '@storybook/addon-a11y',
  '@storybook/addon-docs',
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
  '@newhighsco/storybook-addon-svgr',
  {
    name: '@newhighsco/storybook-addon-transpile-modules',
    options: { transpileModules: ['@newhighsco/chipset'] }
  }
]

export const core: StorybookConfig['core'] = config => ({
  ...config,
  disableTelemetry: true,
  enableCrashReports: false
})
