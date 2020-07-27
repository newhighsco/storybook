import presetSass from '../index'
import { createDefaultWebpackConfig } from '@storybook/core/dist/server/preview/base-webpack.config'

describe('preset-sass', () => {
  it('should return webpackFinal', () => {
    const preset = presetSass

    expect(typeof preset.webpackFinal).toEqual('function')
  })

  it('should add Sass loader', () => {
    const webpackConfig = presetSass.webpackFinal()

    expect(webpackConfig.module.rules.length).toEqual(1)
    expect(webpackConfig.module.rules[0].use.length).toEqual(4)
  })

  it('should set Sass loader options', () => {
    const webpackConfig = presetSass.webpackFinal(
      {},
      {
        cssLoaderOptions: {
          modules: true
        },
        sassLoaderOptions: {
          implementation: 'foo'
        }
      }
    )

    expect(webpackConfig.module.rules.length).toEqual(1)
    expect(webpackConfig.module.rules[0].use[1].options).toEqual({
      modules: true
    })
    expect(webpackConfig.module.rules[0].use[2].options).toEqual({
      implementation: 'foo'
    })
  })

  it('should inherit existing CSS loader options', async () => {
    const baseConfig = await createDefaultWebpackConfig(
      { module: { rules: [] } },
      { presetsList: [] }
    )
    const webpackConfig = presetSass.webpackFinal(baseConfig, {
      styleLoaderOptions: {
        foo: 'bar'
      },
      cssLoaderOptions: {
        modules: true
      },
      sassLoaderOptions: {
        implementation: 'foo'
      },
      postcssLoaderOptions: {
        fizz: 'buzz'
      }
    })
    const { rules } = webpackConfig.module
    const { rules: baseConfigRules } = baseConfig.module

    expect(rules[baseConfigRules.length].use[0].options).toEqual({
      foo: 'bar'
    })
    expect(rules[baseConfigRules.length].use[1].options).toEqual({
      importLoaders: 1,
      modules: true
    })
    expect(rules[baseConfigRules.length].use[2].options).toEqual({
      implementation: 'foo'
    })
    expect(rules[baseConfigRules.length].use[3].options).toEqual(
      expect.objectContaining({
        fizz: 'buzz',
        ident: 'postcss',
        postcss: {},
        plugins: expect.any(Function)
      })
    )
  })
})
