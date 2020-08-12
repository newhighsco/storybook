import React from 'react'
import { themes } from '@storybook/theming'
import { object } from 'prop-types'
import {
  ArgsTable,
  CURRENT_SELECTION,
  Description,
  Primary,
  PRIMARY_STORY,
  Source,
  Stories,
  Subtitle,
  Title
} from '@storybook/addon-docs/blocks'

const DocsPage = ({ theme = {} }) => (
  <>
    <Title />
    <Subtitle />
    <Description />
    <div style={{ display: 'none' }}>
      <Primary />
    </div>
    <Source id={CURRENT_SELECTION} dark={theme.base !== themes.dark.base} />
    <ArgsTable story={PRIMARY_STORY} />
    <Stories />
  </>
)

DocsPage.propTypes = {
  theme: object
}

export { DocsPage }
