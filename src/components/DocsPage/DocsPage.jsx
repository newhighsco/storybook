import React, { useContext } from 'react'
import { themes } from '@storybook/theming'
import { object } from 'prop-types'
import {
  ArgsTable,
  Description,
  DocsContext,
  DocsStory,
  Heading,
  Primary,
  PRIMARY_STORY,
  Source,
  Subtitle,
  Title
} from '@storybook/addon-docs'

const DocsPage = ({ theme = {} }) => {
  const { componentStories } = useContext(DocsContext)
  let stories = componentStories()
  const sourceStory =
    stories.find(({ name }) => name === 'Source') || stories[0]

  stories = stories.filter(story => story !== sourceStory)

  return (
    <>
      <Title />
      <Subtitle />
      <Description />
      <div style={{ display: 'none' }}>
        <Primary name={sourceStory.name} />
      </div>
      <Source id={sourceStory.id} dark={theme.base !== themes.dark.base} />
      <ArgsTable story={PRIMARY_STORY} />
      {!!stories?.length && (
        <>
          <Heading>Stories</Heading>
          {stories.map(
            story =>
              story && <DocsStory key={story.id} {...story} withToolbar />
          )}
        </>
      )}
    </>
  )
}

DocsPage.propTypes = {
  theme: object
}

export { DocsPage }
