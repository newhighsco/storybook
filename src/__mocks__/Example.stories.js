import React from 'react'
import { Example, ExampleChild } from './Example'

import logoSvgUrl, { ReactComponent as LogoSvg } from './logo.svg'
import logoPngUrl from './logo.png'

export default {
  title: 'Components/Example',
  component: Example,
  subcomponents: { ExampleChild },
  parameters: {
    componentSubtitle: 'Some subtitle'
  }
}

const ExampleStory = args => <Example {...args} />

export const Source = ExampleStory.bind({})

Source.args = {
  children: 'Source'
}

export const Text = ExampleStory.bind({})

Text.args = {
  children: 'Text'
}

export const InlineSVG = ExampleStory.bind({})

InlineSVG.args = {
  children: <LogoSvg />
}

InlineSVG.parameters = {
  docs: {
    description: { story: 'Some story description' }
  }
}

export const ImageSVGSrc = ExampleStory.bind({})

ImageSVGSrc.args = {
  children: <img src={logoSvgUrl} alt="" />
}

export const ImagePNGSrc = ExampleStory.bind({})

ImagePNGSrc.args = {
  children: <img src={logoPngUrl} alt="" style={{ width: 64 }} />
}
