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
          modules: { localIdentName: '[name]_[local]__[hash:base64:5]' },
          importLoaders: importLoaders.length
        }
      },
      ...importLoaders
    ]
  }
}
