const filter = url => {
  if (url.startsWith('/')) return false

  return true
}

export const cssLoaders = (test = /\.css$/, importLoaders = []) => {
  importLoaders = [
    {
      loader: require.resolve('postcss-loader'),
      options: {
        implementation: require.resolve('postcss')
      }
    },
    ...importLoaders
  ]

  return {
    test,
    sideEffects: true,
    use: [
      require.resolve('style-loader'),
      {
        loader: require.resolve('css-loader'),
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
