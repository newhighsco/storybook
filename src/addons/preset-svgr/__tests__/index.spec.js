import presetSvgr from '../index'
import { createDefaultWebpackConfig } from '@storybook/builder-webpack5/dist/esm/preview/base-webpack.config'

describe('preset-svg', () => {
  const options = {
    presets: { apply: () => ({ builder: {} }) },
    presetsList: ['@storybook/addon-postcss']
  }

  it('should return webpackFinal', () => {
    const preset = presetSvgr

    expect(typeof preset.webpackFinal).toEqual('function')
  })

  it('should add SVG loader', () => {
    const webpackConfig = presetSvgr.webpackFinal()

    expect(webpackConfig.module.rules.length).toEqual(1)
    expect(webpackConfig.module.rules[0].oneOf[0].use.options).toEqual(
      undefined
    )
  })

  it('should set SVG loader options', () => {
    const webpackConfig = presetSvgr.webpackFinal(
      {},
      {
        svgrLoaderOptions: { svgoConfig: {} }
      }
    )

    expect(webpackConfig.module.rules.length).toEqual(1)
    expect(webpackConfig.module.rules[0].oneOf[0].use[0].options).toEqual({
      svgoConfig: {}
    })
  })

  it('should override existing SVG asset loader', async () => {
    const baseConfig = await createDefaultWebpackConfig(
      { module: { rules: [] } },
      options
    )
    const { rules: baseConfigRules } = baseConfig.module
    const existingSvgRuleIndex = baseConfigRules.findIndex(rule =>
      rule.test?.toString().includes('svg')
    )
    const webpackConfig = presetSvgr.webpackFinal(baseConfig)
    const { rules } = webpackConfig.module

    expect(rules.length).toEqual(baseConfigRules.length + 1)
    expect(rules[existingSvgRuleIndex].exclude).toEqual(/\.svg$/)
  })

  it('should set SVG asset loader options', async () => {
    const baseConfig = await createDefaultWebpackConfig(
      { module: { rules: [] } },
      options
    )
    const webpackConfig = presetSvgr.webpackFinal(baseConfig, {
      assetLoaderOptions: {
        fizz: 'buzz',
        generator: {
          foo: 'bar'
        }
      }
    })
    const { rules } = webpackConfig.module
    const { rules: baseConfigRules } = baseConfig.module
    const existingSvgRuleIndex = baseConfigRules.findIndex(rule =>
      rule.test?.toString().includes('svg')
    )

    expect(rules[baseConfigRules.length].oneOf[1]).toEqual({
      type: rules[existingSvgRuleIndex].type,
      generator: {
        ...rules[existingSvgRuleIndex].generator,
        foo: 'bar'
      },
      fizz: 'buzz'
    })
  })
})
