import type { Config } from '@svgr/core'
import type { RuleSetRule } from 'webpack'

export interface SvgrAddonOptions {
  assetModuleOptions?: RuleSetRule
  svgrOptions?: Config
}
