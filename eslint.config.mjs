import config from '@newhighsco/eslint-config'
import { defineConfig } from 'eslint/config'

export default defineConfig([
  { extends: [config] },
  {
    files: ['**/*.ts?(x)'],
    languageOptions: { parserOptions: { project: './tsconfig.eslint.json' } },
    rules: { 'tsc/config': ['error', { configFile: './tsconfig.eslint.json' }] }
  }
])
