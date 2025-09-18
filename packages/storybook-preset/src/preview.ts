import { type Preview } from '@storybook/react-webpack5'

// import { DocsContainer, DocsPage } from './components'
import { WithSnapshot } from './decorators/snapshot'

export const decorators: Preview['decorators'] = [WithSnapshot]

export const parameters: Preview['parameters'] = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: { matchers: { color: /(background|color)$/i, date: /Date$/ } },
  darkMode: { stylePreview: true },
  docs: {
    // container: DocsContainer
    // page: DocsPage
  },
  viewMode: 'docs'
}

export const tags: Preview['tags'] = ['autodocs']
