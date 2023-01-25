import { DocsContainer as PureDocsContainer } from '@storybook/addon-docs'
import { themes } from '@storybook/theming'
import { node, object } from 'prop-types'
import React from 'react'
import { useDarkMode } from 'storybook-dark-mode'

const DocsContainer = ({ context, children }) => {
  const dark = useDarkMode()

  return (
    <PureDocsContainer
      context={{
        ...context,
        storyById: id => {
          const storyContext = context.storyById(id)

          return {
            ...storyContext,
            parameters: {
              ...storyContext?.parameters,
              docs: {
                ...storyContext?.parameters?.docs,
                theme: dark ? themes.dark : themes.light
              }
            }
          }
        }
      }}
    >
      {children}
    </PureDocsContainer>
  )
}

DocsContainer.propTypes = {
  context: object,
  children: node
}

export default DocsContainer
