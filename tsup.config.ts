import { posix } from 'node:path'

import { defineConfig, type Options } from 'tsup'

export default defineConfig(async ({ watch }) => {
  const srcDir = './src'
  const dts: Options['dts'] = { resolve: true }
  const targets: Partial<
    Record<NonNullable<Options['platform']>, Options['target']>
  > = { browser: 'esnext', node: 'node20.19' }
  const { exports = {} } = (
    await import('./package.json', { with: { type: 'json' } })
  ).default

  const entries = Object.keys(exports)

  const entry = (
    fileName: string,
    { format, platform = 'browser', ...options }: Options
  ): Options => {
    return {
      clean: !watch,
      entry: [posix.join(srcDir, fileName)],
      external: ['react', 'react-dom', '@storybook/icons'],
      format: ['esm'],
      minify: !watch,
      platform,
      sourcemap: true,
      splitting: false,
      target: targets[platform],
      treeshake: true,
      ...options
    }
  }

  const previewEntries = 'index.ts'

  // if (entries.includes('./preview')) {
  //   previewEntries.push('preview.ts')
  // }

  const configs = [entry(previewEntries, { dts })]

  if (entries.includes('./manager')) {
    configs.push(entry('manager.tsx', {}))
  }

  if (entries.includes('./preset')) {
    configs.push(entry('preset.ts', { platform: 'node' }))
  }

  return configs
})
