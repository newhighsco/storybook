import { type Preview } from '@storybook/react-webpack5'

import { DocsPage } from './components'
import { WithSnapshot } from './decorators/snapshot'
import { modes, useDarkMode, viewports } from './utils'

const [dark, theme] = useDarkMode()

export const decorators: Preview['decorators'] = [WithSnapshot]

export const parameters: Preview['parameters'] = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  chromatic: { modes: modes(['desktopLarge']) },
  controls: { matchers: { color: /(background|color)$/i, date: /Date$/ } },
  docs: {
    canvas: { className: theme.base, withToolbar: true },
    page: DocsPage,
    source: { dark: !dark },
    theme
  },
  viewMode: 'docs',
  viewport: { options: viewports }
}
