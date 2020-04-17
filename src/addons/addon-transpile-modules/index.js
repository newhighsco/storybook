const webpackFinal = (config = {}, options = {}) => {
  const { transpileModules = [] } = options

  if (transpileModules.length) {
    // Find existing rule that handles JSX
    const existingJsxRuleIndex =
      config.module.rules &&
      config.module.rules.findIndex(
        rule => rule.exclude && rule.exclude.toString().includes('node_modules')
      )

    if (existingJsxRuleIndex >= 0) {
      const existingJsxRule = config.module.rules[existingJsxRuleIndex]

      // Tell existing rule to not exclude modules that need transpiling
      existingJsxRule.exclude = new RegExp(
        `node_modules/(?!(${transpileModules.join('|')})/).*`
      )
    }
  }

  return config
}

module.exports = {
  webpackFinal
}
