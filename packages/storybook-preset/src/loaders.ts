import { type RuleSetRule } from 'webpack'

const filter = (url: string): boolean => {
  if (url.startsWith('/')) return false

  return true
}

export const cssLoaders = (
  test = /\.css$/,
  importLoaders = []
): RuleSetRule => {
  importLoaders = [
    { loader: 'postcss-loader', options: { implementation: 'postcss' } },
    ...importLoaders
  ]

  return {
    test,
    sideEffects: true,
    use: [
      'style-loader',
      {
        loader: 'css-loader',
        options: {
          esModule: false,
          import: { filter },
          importLoaders: importLoaders.length,
          modules: {
            exportLocalsConvention: 'as-is',
            localIdentName: '[name]_[local]__[hash:base64:5]'
          },
          url: { filter }
        }
      },
      ...importLoaders
    ]
  }
}
