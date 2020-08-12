import React from 'react'
import { shallow } from 'enzyme'
import { Source } from '@storybook/addon-docs/blocks'
import { DocsPage } from './DocsPage'

jest.mock('@storybook/addon-docs/dist/blocks/utils', () => ({
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
})
