import { DocsContainer as PureDocsContainer } from '@storybook/addon-docs/blocks'
import { DARK_MODE_EVENT_NAME } from '@vueless/storybook-dark-mode'
import React, { useEffect, useState } from 'react'
import { addons } from 'storybook/internal/preview-api'
import { themes } from 'storybook/theming'

const channel = addons.getChannel()

const DocsContainer: typeof PureDocsContainer = props => {
  const [dark, setDark] = useState(false)

  useEffect(() => {
    channel.on(DARK_MODE_EVENT_NAME, setDark)

    return () => {
      channel.off(DARK_MODE_EVENT_NAME, setDark)
    }
  }, [])

  return (
    <PureDocsContainer {...props} theme={dark ? themes.dark : themes.light} />
  )
}

export default DocsContainer
