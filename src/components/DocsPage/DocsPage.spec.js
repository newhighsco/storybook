/**
 * @jest-environment jsdom
 */

import React from 'react'
import { shallow } from 'enzyme'
import { DocsStory, Heading, Source } from '@storybook/addon-docs'
import { DocsPage } from './DocsPage'

jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useContext: () => ({
    componentStories: () => [{ id: 1 }, { id: 2 }, { id: 3 }]
  })
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
    const wrapper = shallow(<DocsPage />)

    expect(wrapper.find(Heading).length).toEqual(1)
    expect(wrapper.find(DocsStory).length).toEqual(2)
  })
})
