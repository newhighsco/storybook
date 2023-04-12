import {
  ArgTypes,
  Description,
  DocsContext,
  DocsStory,
  Heading,
  Source,
  Subtitle,
  Title
} from '@storybook/blocks'
import { themes } from '@storybook/theming'
import { object } from 'prop-types'
import React, { useContext } from 'react'

const DocsPage = ({ theme = {} }) => {
  const { componentStories } = useContext(DocsContext)
  let stories = componentStories().filter(
    story => !story.parameters?.docs?.disable
  )
  const sourceStory =
    stories.find(({ name }) => name === 'Source') || stories[0]

  stories = stories.filter(story => story !== sourceStory)

  return (
    <>
      <Title />
      <Subtitle />
      <Description />
      <div style={{ display: 'none' }}>
        <DocsStory of={sourceStory.moduleExport} />
      </div>
      <Source
        of={sourceStory.moduleExport}
        dark={theme.base !== themes.dark.base}
      />
      <ArgTypes of={sourceStory.moduleExport} />
      {!!stories?.length && (
        <>
          <Heading>Stories</Heading>
          {stories.map(
            story =>
              story && (
                <DocsStory key={story.id} of={story.moduleExport} withToolbar />
              )
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
