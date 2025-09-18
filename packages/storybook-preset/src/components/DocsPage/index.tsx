import {
  Canvas,
  Controls,
  Description,
  DocsContext,
  Heading,
  Source,
  Story,
  Subheading,
  Subtitle,
  Title
} from '@storybook/addon-docs/blocks'
import { useDarkMode } from '@vueless/storybook-dark-mode'
import React, { type FC, Fragment, useContext } from 'react'
import { type Theme, withTheme } from 'storybook/theming'

interface Props {
  theme?: Theme
}

// eslint-disable-next-line tsc/config
const DocsPage: FC<Props> = ({ theme }: Props) => {
  const dark = useDarkMode()
  const { componentStories } = useContext(DocsContext)
  let stories = componentStories().filter(
    story => !story.parameters?.docs?.disable
  )
  const sourceStory =
    stories.find(({ name }) => name === 'Source') || stories[0]
  const { moduleExport: source } = sourceStory

  stories = stories.filter(
    story =>
      story !== sourceStory &&
      story.parameters?.chromatic?.disableSnapshot !== false
  )

  return (
    <>
      <Title />
      <Subtitle />
      <Description />
      <div style={{ display: 'none' }}>
        <Story of={source} />
      </div>
      <Source of={source} dark={!dark} />
      <Controls of={source} />
      {!!stories?.length && (
        <>
          <Heading>Stories</Heading>
          {stories.map(({ id, moduleExport, story }) => (
            <Fragment key={id}>
              <Subheading>{story}</Subheading>
              <Description of={moduleExport} />
              <Canvas of={moduleExport} withToolbar className={theme.base} />
            </Fragment>
          ))}
        </>
      )}
    </>
  )
}

export default withTheme(DocsPage)
