import addonTranspileModules from '../index'
import { createDefaultWebpackConfig } from '@storybook/builder-webpack5/dist/esm/preview/base-webpack.config'

describe('addon-transpile-modules', () => {
  const options = {
    presets: { apply: () => ({ builder: {} }) },
    presetsList: ['@storybook/addon-postcss']
  }

  it('should return webpackFinal', () => {
    const addon = addonTranspileModules

    expect(typeof addon.webpackFinal).toEqual('function')
  })

  it("should do nothing if 'transpileModules' is not set", async () => {
    const webpackConfig = addonTranspileModules.webpackFinal()

    expect(webpackConfig).toEqual({})
  })

  it('should do nothing existing webpack rule is not found', async () => {
    const baseConfig = await createDefaultWebpackConfig(
      {
        module: { rules: [] }
      },
      options
    )
    const { rules: baseConfigRules } = baseConfig.module
    const webpackConfig = addonTranspileModules.webpackFinal(baseConfig, {
      transpileModules: ['foo', 'bar']
    })
    const { rules } = webpackConfig.module

    expect(rules.length).toEqual(baseConfigRules.length)
  })

  it('should override existing webpack rule', async () => {
    const baseConfig = await createDefaultWebpackConfig(
      {
        module: { rules: [{ exclude: ['node_modules'] }] }
      },
      options
    )
    const { rules: baseConfigRules } = baseConfig.module
    const existingRule = baseConfigRules.findIndex(rule =>
      rule.exclude.toString().includes('node_modules')
    )
    const webpackConfig = addonTranspileModules.webpackFinal(baseConfig, {
      transpileModules: ['foo', 'bar']
    })
    const { rules } = webpackConfig.module

    expect(rules[existingRule].exclude).toEqual(
      /node_modules\/(?!(foo|bar)\/).*/
    )
  })
})
