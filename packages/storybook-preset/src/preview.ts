import { type Preview } from '@storybook/react-webpack5'

import { DocsPage } from './components'
import { WithSnapshot } from './decorators/snapshot'

export const decorators: Preview['decorators'] = [WithSnapshot]

export const parameters: Preview['parameters'] = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: { matchers: { color: /(background|color)$/i, date: /Date$/ } },
  docs: { canvas: { withToolbar: true }, page: DocsPage },
  viewMode: 'docs'
}
