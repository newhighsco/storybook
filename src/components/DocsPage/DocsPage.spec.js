import React from 'react'
import { shallow } from 'enzyme'
import { DocsPage } from './DocsPage'
import { Source } from '@storybook/addon-docs/blocks'

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
