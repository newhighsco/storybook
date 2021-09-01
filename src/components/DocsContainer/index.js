import React from 'react'
import { object, node } from 'prop-types'
import { DocsContainer as PureDocsContainer } from '@storybook/addon-docs'
import { themes } from '@storybook/theming'
import { useDarkMode } from 'storybook-dark-mode'

const DocsContainer = ({ context, children }) => {
  const dark = useDarkMode()

  return (
    <PureDocsContainer
      context={{
        ...context,
        parameters: {
          ...context?.parameters,
          docs: {
            ...context?.parameters?.docs,
            theme: dark ? themes.dark : themes.light
          }
        }
      }}
    >
      hello:{children}
    </PureDocsContainer>
  )
}

DocsContainer.propTypes = {
  context: object,
  children: node
}

export default DocsContainer
