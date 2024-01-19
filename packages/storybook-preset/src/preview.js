import { DocsContainer, DocsPage } from './components'
import { WithSnapshot } from './decorators/snapshot'

/** @type { import('@storybook/react').Preview } */
const preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: { matchers: { color: /(background|color)$/i, date: /Date$/ } },
    darkMode: { stylePreview: true },
    docs: { container: DocsContainer, page: DocsPage },
    viewMode: 'docs'
  },
  decorators: [WithSnapshot]
}

export default preview
