import * as preset from '..'

const baseConfig = {
  module: {
    rules: [
      {
        test: /\.(svg|ico|jpg|jpeg|png|apng|gif|eot|otf|webp|ttf|woff|woff2|cur|ani|pdf)(\?.*)?$/,
        type: 'asset/resource',
        generator: { filename: 'static/media/[path][name][ext]' }
      },
      {
        test: /\.(mp4|webm|wav|mp3|m4a|aac|oga)(\?.*)?$/,
        type: 'asset',
        parser: { dataUrlCondition: { maxSize: 10000 } },
        generator: { filename: 'static/media/[path][name][ext]' }
      }
    ]
  }
}

describe('preset-svg', () => {
  it('should return webpackFinal', () => {
    expect(typeof preset.webpackFinal).toEqual('function')
  })

  it('should add SVG loader', () => {
    const webpackConfig = preset.webpackFinal()

    expect(webpackConfig.module.rules.length).toEqual(1)
    expect(webpackConfig.module.rules[0].oneOf[0].use.options).toEqual(
      undefined
    )
  })

  it('should set SVG loader options', () => {
    const webpackConfig = preset.webpackFinal(
      {},
      { svgrOptions: { svgoConfig: {} } }
    )

    expect(webpackConfig.module.rules.length).toEqual(1)
    expect(webpackConfig.module.rules[0].oneOf[0].use[0].options).toEqual({
      svgoConfig: {}
    })
  })

  it('should override existing SVG asset loader', () => {
    const { rules: baseConfigRules } = baseConfig.module
    const existingSvgRuleIndex = baseConfigRules.findIndex(rule =>
      rule.test?.toString().includes('svg')
    )
    const webpackConfig = preset.webpackFinal(baseConfig)
    const { rules } = webpackConfig.module

    expect(rules.length).toEqual(baseConfigRules.length + 1)
    expect(rules[existingSvgRuleIndex].exclude).toEqual(/\.svg$/)
  })

  it('should set SVG asset loader options', () => {
    const webpackConfig = preset.webpackFinal(baseConfig, {
      assetModuleOptions: { fizz: 'buzz', generator: { foo: 'bar' } }
    })
    const { rules } = webpackConfig.module
    const { rules: baseConfigRules } = baseConfig.module
    const existingSvgRuleIndex = baseConfigRules.findIndex(rule =>
      rule.test?.toString().includes('svg')
    )

    expect(rules[baseConfigRules.length].oneOf[1]).toEqual({
      type: rules[existingSvgRuleIndex].type,
      generator: { ...rules[existingSvgRuleIndex].generator, foo: 'bar' },
      fizz: 'buzz'
    })
  })
})
