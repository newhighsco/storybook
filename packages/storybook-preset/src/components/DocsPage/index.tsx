import {
  Controls,
  Description,
  Primary,
  Source,
  Stories,
  Subtitle,
  Title
} from '@storybook/addon-docs/blocks'
import React, { type FC } from 'react'

const DocsPage: FC = () => (
  <>
    <Title />
    <Subtitle />
    <Description />
    <Source dark />
    <div style={{ display: 'none' }}>
      <Primary />
    </div>
    <Controls />
    <Stories includePrimary={false} />
  </>
)

export default DocsPage
