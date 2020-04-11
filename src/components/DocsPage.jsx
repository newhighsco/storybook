import React from 'react'
import { themes } from '@storybook/theming'
import { object } from 'prop-types'
import {
  Description,
  Primary,
  Props,
  Source,
  Stories,
  Subtitle,
  Title
} from '@storybook/addon-docs/blocks'

const DocsPage = ({ theme }) => (
  <>
    <Title />
    <Subtitle />
    <Description />
    <Source id="." dark={theme.base !== themes.dark.base} />
    <Props />
    <Primary />
    <Stories />
  </>
)

DocsPage.propTypes = {
  theme: object
}

export default DocsPage
export { DocsPage }
