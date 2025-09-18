import { readFile } from 'node:fs/promises'
import { posix } from 'node:path'

import {
  BROWSER_TARGETS,
  NODE_TARGET
} from 'storybook/internal/builder-manager'
import { globalPackages as managerExternals } from 'storybook/internal/manager/globals'
import { globalPackages as previewExternals } from 'storybook/internal/preview/globals'
import { defineConfig, type Options } from 'tsup'

export default defineConfig(async ({ watch }) => {
  const srcDir = './src'
  const dts: Options['dts'] = { resolve: true }
  const targets: Partial<
    Record<NonNullable<Options['platform']>, Options['target']>
  > = {
    browser: BROWSER_TARGETS
  }
  const { exports = {} } = await readFile('./package.json', 'utf-8').then(
    JSON.parse
  )

  const entries = Object.keys(exports)

  const entry = (
    fileName: string,
    { format = ['esm', 'cjs'], platform = 'neutral', ...options }: Options
  ): Options => {
    return {
      clean: !watch,
      entry: [posix.join(srcDir, fileName)],
      format,
      minify: !watch,
      platform,
      sourcemap: true,
      splitting: false,
      target: targets[platform] ?? NODE_TARGET,
      treeshake: true,
      ...options
    }
  }

  const configs = [
    entry('index.ts', {
      dts,
      external: [managerExternals, previewExternals].flat()
    })
  ]

  if (entries.includes('./preset')) {
    configs.push(entry('preset.ts', { format: 'cjs', platform: 'node' }))
  }

  if (entries.includes('./manager')) {
    configs.push(
      entry('manager.tsx', {
        external: managerExternals,
        format: 'esm',
        outExtension: () => ({ js: '.js' }),
        platform: 'browser'
      })
    )
  }

  if (entries.includes('./preview')) {
    configs.push(
      entry('preview.ts', {
        dts,
        external: previewExternals,
        platform: 'browser'
      })
    )
  }

  return configs
})
