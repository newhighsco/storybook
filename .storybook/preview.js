import { addParameters } from '@storybook/react'
import theme from '../src/theme'

addParameters({
  options: {
    showRoots: true,
    theme
  },
  viewMode: 'docs'
})
