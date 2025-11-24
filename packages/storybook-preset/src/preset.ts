import type { PresetProperty } from 'storybook/internal/types'

import { cssLoaders } from './loaders'

export const addons: PresetProperty<'addons'> = [
  '@storybook/addon-webpack5-compiler-swc',
  '@storybook/addon-a11y',
  '@storybook/addon-docs',
  {
    name: '@storybook/addon-styling-webpack',
    options: {
      rules: [
        cssLoaders(),
        cssLoaders(/\.s[ac]ss$/, [
          { loader: 'sass-loader', options: { implementation: 'sass' } }
        ])
      ]
    }
  },
  '@newhighsco/storybook-addon-svgr',
  {
    name: '@newhighsco/storybook-addon-transpile-modules',
    options: {
      transpileModules: ['@newhighsco/chipset', '@newhighsco/press-start']
    }
  }
]

export const core: PresetProperty<'core'> = config => ({
  ...config,
  disableTelemetry: true,
  enableCrashReports: false
})
