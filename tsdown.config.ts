import { readFile } from 'node:fs/promises'
import { posix } from 'node:path'

import { defineConfig, type UserConfig } from 'tsdown'

export default defineConfig(async ({ watch }) => {
  const srcDir = './src'
  const targets: Partial<
    Record<NonNullable<UserConfig['platform']>, UserConfig['target']>
  > = { browser: 'esnext', node: 'node20.19' }
  const { exports = {} } = await readFile('./package.json', 'utf-8').then(
    JSON.parse
  )

  const entries = Object.keys(exports)

  const entry = (
    fileNames: string | string[],
    { dts = false, platform = 'browser', ...options }: UserConfig = {}
  ): UserConfig => {
    if (!Array.isArray(fileNames)) fileNames = [fileNames]

    return {
      clean: !watch,
      deps: {
        neverBundle: ['@storybook/icons', 'react', 'react-dom', 'webpack']
      },
      dts,
      entry: fileNames.map(fileName => posix.join(srcDir, fileName)),
      format: ['esm'],
      platform,
      target: targets[platform],
      treeshake: true,
      ...options
    }
  }

  const previewEntries = ['index.ts']

  if (entries.includes('./preview')) {
    previewEntries.push('preview.ts')
  }

  const configs = [entry(previewEntries, { dts: true })]

  if (entries.includes('./manager')) {
    configs.push(entry('manager.tsx'))
  }

  if (entries.includes('./preset')) {
    configs.push(entry('preset.ts', { platform: 'node' }))
  }

  return configs
})
