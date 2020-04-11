import React from 'react'
import { addParameters } from '@storybook/react'
import { DocsPage } from '../src/components/DocsPage'
import theme from '../src/theme'

addParameters({
  docs: {
    page: () => <DocsPage theme={theme} />
  },
  options: {
    showRoots: true,
    theme
  }
})
