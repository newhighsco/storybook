import { getProjectRoot } from 'storybook/internal/common'

import * as addon from '..'

describe('addon-transpile-modules', () => {
  it('should return webpackFinal', () => {
    expect(typeof addon.webpackFinal).toEqual('function')
  })

  it("should do nothing if 'transpileModules' is not set", () => {
    const webpackConfig = addon.webpackFinal()

    expect(webpackConfig).toEqual({})
  })

  it('should do nothing existing webpack rule is not found', () => {
    const baseConfig = { module: { rules: [] } }
    const { rules: baseConfigRules } = baseConfig.module
    const webpackConfig = addon.webpackFinal(baseConfig, {
      transpileModules: ['foo', 'bar']
    })
    const { rules } = webpackConfig.module

    expect(rules.length).toEqual(baseConfigRules.length)
  })

  it('should override existing webpack rule', () => {
    const baseConfig = {
      module: {
        rules: [
          { include: [getProjectRoot()], exclude: [/node_modules/, 'other'] }
        ]
      }
    }
    const { rules: baseConfigRules } = baseConfig.module
    const existingRule = baseConfigRules.findIndex(rule =>
      rule.exclude.toString().includes('node_modules')
    )
    const webpackConfig = addon.webpackFinal(baseConfig, {
      transpileModules: ['foo', 'bar']
    })
    const { rules } = webpackConfig.module

    expect(rules[existingRule].exclude).toEqual([
      /node_modules\/(?!(foo|bar)\/).*/,
      'other'
    ])
  })
})
