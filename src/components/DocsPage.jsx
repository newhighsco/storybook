import React from 'react'
import { bool } from 'prop-types'
import {
  Description,
  Primary,
  Props,
  Source,
  Stories,
  Subtitle,
  Title
} from '@storybook/addon-docs/blocks'

const DocsPage = ({ dark }) => (
  <>
    <Title />
    <Subtitle />
    <Description />
    <Source id="." dark={dark} />
    <Props />
    <Primary />
    <Stories />
  </>
)

DocsPage.propTypes = {
  dark: bool
}

export default DocsPage
export { DocsPage }
