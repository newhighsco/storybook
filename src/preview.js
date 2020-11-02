import { DocsPage } from './components'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  docs: {
    page: DocsPage
  },
  viewMode: 'docs'
}
