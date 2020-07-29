import React, { useContext } from 'react'
import { themes } from '@storybook/theming'
import { object } from 'prop-types'
import {
  CURRENT_SELECTION,
  Description,
  DocsContext,
  DocsStory,
  Heading,
  PRIMARY_STORY,
  Props,
  Source,
  Subtitle,
  Title
} from '@storybook/addon-docs/blocks'
import { getDocsStories } from '@storybook/addon-docs/dist/blocks/utils'

const DocsPage = ({ theme = {} }) => {
  const context = useContext(DocsContext)
  const stories = getDocsStories(context)

  return (
    <>
      <Title />
      <Subtitle />
      <Description />
      <Source id={CURRENT_SELECTION} dark={theme.base !== themes.dark.base} />
      <Props story={PRIMARY_STORY} />
      {!!stories.length && (
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
