const webpackFinal = (config = {}, options = {}) => {
  const { transpileModules = [] } = options

  if (transpileModules.length) {
    // Find existing rule that handles JSX
    const existing = config.module.rules?.find(rule =>
      rule.exclude?.toString().includes('node_modules')
    )

    if (existing) {
      // Tell existing rule to not exclude modules that need transpiling
      existing.exclude = new RegExp(
        `node_modules/(?!(${transpileModules.join('|')})/).*`
      )
    }
  }

  return config
}

module.exports = {
  webpackFinal
}
