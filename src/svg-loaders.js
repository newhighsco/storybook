const svgRegExp = /\.svg$/

const svgLoaders = () => [
  {
    test: svgRegExp,
    use: {
      loader: require.resolve('@svgr/webpack'),
      options: {
        svgoConfig: {
          plugins: [{ prefixIds: false }]
        }
      }
    }
  }
]

module.exports = { svgLoaders, svgRegExp }
