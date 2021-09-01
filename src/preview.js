import { DocsContainer, DocsPage } from './components'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  },
  docs: {
    container: DocsContainer,
    page: DocsPage
  },
  viewMode: 'docs'
}
