import { readFile } from 'node:fs/promises'
import { posix } from 'node:path'

import { defineConfig, type Options } from 'tsup'

export default defineConfig(async ({ watch }) => {
  const srcDir = './src'
  const targets: Partial<
    Record<NonNullable<Options['platform']>, Options['target']>
  > = { browser: 'esnext', node: 'node20.19' }
  const { exports = {} } = await readFile('./package.json', 'utf-8').then(
    JSON.parse
  )

  const entries = Object.keys(exports)

  const entry = (
    fileNames: string | string[],
    { format, platform = 'browser', ...options }: Options = {}
  ): Options => {
    if (!Array.isArray(fileNames)) fileNames = [fileNames]

    return {
      clean: !watch,
      entry: fileNames.map(fileName => posix.join(srcDir, fileName)),
      external: ['react', 'react-dom', '@storybook/icons'],
      format: ['esm'],
      platform,
      splitting: true,
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
