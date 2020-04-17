import presetSvgr from '../index'
import { createDefaultWebpackConfig } from '@storybook/core/dist/server/preview/base-webpack.config'

describe('preset-svg', () => {
  it('should return webpackFinal', () => {
    const preset = presetSvgr

    expect(typeof preset.webpackFinal).toEqual('function')
  })

  it('should add SVG loader', () => {
    const webpackConfig = presetSvgr.webpackFinal()

    expect(webpackConfig.module.rules.length).toEqual(1)
    expect(webpackConfig.module.rules[0].use.options).toEqual(undefined)
  })

  it('should set SVG loader options', () => {
    const webpackConfig = presetSvgr.webpackFinal(
      {},
      {
        svgrLoaderOptions: { svgoConfig: {} }
      }
    )

    expect(webpackConfig.module.rules.length).toEqual(1)
    expect(webpackConfig.module.rules[0].use.options).toEqual({
      svgoConfig: {}
    })
  })

  it('should override existing SVG URL loader', async () => {
    const baseConfig = await createDefaultWebpackConfig(
      { module: { rules: [] } },
      { presetsList: [] }
    )
    const { rules: baseConfigRules } = baseConfig.module
    const existingSvgRuleIndex = baseConfigRules.findIndex(rule =>
      rule.test.toString().includes('svg')
    )
    const webpackConfig = presetSvgr.webpackFinal(baseConfig)
    const { rules } = webpackConfig.module

    expect(rules.length).toEqual(baseConfigRules.length + 2)
    expect(rules[existingSvgRuleIndex].exclude).toEqual(/\.svg$/)
    expect(rules[baseConfigRules.length].use.length).toEqual(2)
    expect(rules[baseConfigRules.length].use[1].loader).toEqual(
      rules[existingSvgRuleIndex].loader
    )
    expect(rules[baseConfigRules.length].use[1].options).toEqual(
      rules[existingSvgRuleIndex].options
    )
  })

  it('should set SVG URL loader options', async () => {
    const baseConfig = await createDefaultWebpackConfig(
      { module: { rules: [] } },
      { presetsList: [] }
    )
    const webpackConfig = presetSvgr.webpackFinal(baseConfig, {
      urlLoaderOptions: {
        inlineLimit: 1
      }
    })
    const { rules } = webpackConfig.module
    const { rules: baseConfigRules } = baseConfig.module
    const existingSvgRuleIndex = baseConfigRules.findIndex(rule =>
      rule.test.toString().includes('svg')
    )

    expect(rules[baseConfigRules.length].use[1].options).toEqual({
      ...rules[existingSvgRuleIndex].options,
      inlineLimit: 1
    })
  })
})
