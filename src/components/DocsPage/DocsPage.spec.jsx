/**
 * @jest-environment jsdom
 */

import React, { useContext } from 'react'
import { shallow } from 'enzyme'
import { DocsStory, Primary, Source } from '@storybook/addon-docs'
import { DocsPage } from './DocsPage'

const stories = [
  { id: 'fizz', name: 'Fizz' },
  { id: 'buzz', name: 'Buzz' },
  { id: 'pop', name: 'Pop' }
]

jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useContext: jest.fn().mockImplementation(() => ({
    componentStories: () => stories
  }))
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

    expect(wrapper.find(Primary).prop('name')).toEqual('Fizz')
    expect(wrapper.find(Source).prop('id')).toEqual('fizz')
    expect(wrapper.find(DocsStory).length).toEqual(2)
    expect(wrapper.find(DocsStory).at(0).prop('name')).toEqual('Buzz')
    expect(wrapper.find(DocsStory).at(1).prop('name')).toEqual('Pop')
  })

  it('weee', () => {
    useContext.mockImplementation(() => ({
      componentStories: () => [...stories, { id: 'source', name: 'Source' }]
    }))

    const wrapper = shallow(<DocsPage />)

    expect(wrapper.find(Primary).prop('name')).toEqual('Source')
    expect(wrapper.find(Source).prop('id')).toEqual('source')
    expect(wrapper.find(DocsStory).length).toEqual(3)
    expect(wrapper.find(DocsStory).at(0).prop('name')).toEqual('Fizz')
    expect(wrapper.find(DocsStory).at(1).prop('name')).toEqual('Buzz')
    expect(wrapper.find(DocsStory).at(2).prop('name')).toEqual('Pop')
  })
})
