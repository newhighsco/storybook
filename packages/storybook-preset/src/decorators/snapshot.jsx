import { Spaced } from '@storybook/components'
import { ensure, ThemeProvider, themes } from '@storybook/theming'
import React from 'react'

export const isSnapshotStory = context => {
  const { parameters, viewMode } = context

  return (
    parameters?.chromatic?.disableSnapshot === false && viewMode === 'story'
  )
}

export const WithSnapshot = (Story, context) => {
  if (!isSnapshotStory(context)) {
    return <Story />
  }

  return (
    <ThemeProvider theme={ensure(themes.normal)}>
      <Spaced>
        <Story />
      </Spaced>
    </ThemeProvider>
  )
}
