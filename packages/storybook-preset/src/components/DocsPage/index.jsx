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
} from '@storybook/blocks'
import { withTheme } from '@storybook/theming'
import { object } from 'prop-types'
import React, { Fragment, useContext } from 'react'
import { useDarkMode } from 'storybook-dark-mode'

const DocsPage = ({ theme = {} }) => {
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

DocsPage.propTypes = {
  theme: object
}

export default withTheme(DocsPage)
