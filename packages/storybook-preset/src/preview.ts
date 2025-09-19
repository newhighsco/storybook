import { type Preview } from '@storybook/react-webpack5'

import { DocsPage } from './components'
import { WithSnapshot } from './decorators/snapshot'
import { useDarkMode } from './utils'

const [dark, theme] = useDarkMode()

export const decorators: Preview['decorators'] = [WithSnapshot]

export const parameters: Preview['parameters'] = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: { matchers: { color: /(background|color)$/i, date: /Date$/ } },
  docs: {
    canvas: { withToolbar: true },
    page: DocsPage,
    source: { dark: !dark },
    theme
  },
  viewMode: 'docs'
}
