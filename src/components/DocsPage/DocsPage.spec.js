/**
 * @jest-environment jsdom
 */

import React from 'react'
import { shallow } from 'enzyme'
import { DocsStory, Heading, Source } from '@storybook/addon-docs'
import { getDocsStories } from '@storybook/addon-docs/dist/esm/blocks/utils'
import { DocsPage } from './DocsPage'

jest.mock('@storybook/addon-docs/dist/esm/blocks/utils', () => ({
  getDocsStories: jest.fn(() => [])
}))

describe('Components/DocsPage', () => {
  it('should render <Source /> with dark theme by default', () => {
    const wrapper = shallow(<DocsPage />)

    expect(wrapper.find(Source).prop('dark')).toEqual(true)
  })

  it('should render <Source /> with light theme when theme is dark', () => {
    const wrapper = shallow(<DocsPage theme={{ base: 'dark' }} />)

    expect(wrapper.find(Source).prop('dark')).toEqual(false)
  })

  it('should render the correct number of <DocStory /> components', () => {
    getDocsStories.mockImplementation(() => [{ id: 1 }, { id: 2 }, { id: 3 }])

    const wrapper = shallow(<DocsPage />)

    expect(wrapper.find(Heading).length).toEqual(1)
    expect(wrapper.find(DocsStory).length).toEqual(2)
  })
})
