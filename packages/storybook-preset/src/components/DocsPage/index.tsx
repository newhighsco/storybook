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
import { TabWrapper } from 'storybook/internal/components'

const DocsPage: FC = () => (
  <>
    <Title />
    <Subtitle />
    <Description />
    <Source />
    <TabWrapper>
      <Primary />
    </TabWrapper>
    <Controls />
    <Stories includePrimary={false} />
  </>
)

export default DocsPage
