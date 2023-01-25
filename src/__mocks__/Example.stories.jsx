import React from 'react'

import { Example, ExampleChild } from './Example'
import logoPngUrl from './logo.png'
import logoSvgUrl, { ReactComponent as LogoSvg } from './logo.svg'

export default {
  component: Example,
  subcomponents: { ExampleChild },
  parameters: {
    componentSubtitle: 'Some subtitle',
    darkMode: {
      current: 'dark'
    }
  }
}

const Template = args => <Example {...args} />

export const Text = Template.bind({})
Text.args = { children: 'Text' }

export const InlineSVG = Template.bind({})
InlineSVG.args = { children: <LogoSvg /> }
InlineSVG.parameters = {
  docs: { description: { story: 'Some story description' } }
}

export const ImageSVGSrc = Template.bind({})
ImageSVGSrc.args = { children: <img src={logoSvgUrl} alt="" /> }

export const ImagePNGSrc = Template.bind({})
ImagePNGSrc.args = {
  children: <img src={logoPngUrl} alt="" style={{ width: 64 }} />
}

export const BackgroundSVGSrc = Template.bind({})
BackgroundSVGSrc.args = { background: 'svg' }

export const BackgroundPNGSrc = Template.bind({})
BackgroundPNGSrc.args = { background: 'png' }

export const Source = Template.bind({})
Source.args = { children: 'Source' }
Source.parameters = { chromatic: { disable: true } }
