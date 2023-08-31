import { DocsContainer as PureDocsContainer } from '@storybook/blocks'
import { themes } from '@storybook/theming'
import React from 'react'
import { useDarkMode } from 'storybook-dark-mode'

const DocsContainer = props => {
  const dark = useDarkMode()

  return (
    <PureDocsContainer {...props} theme={dark ? themes.dark : themes.light} />
  )
}

export default DocsContainer
