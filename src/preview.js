import { addParameters } from '@storybook/react'
import { DocsPage } from './components'

addParameters({
  docs: {
    page: DocsPage
  },
  options: {
    showRoots: true
  }
})
