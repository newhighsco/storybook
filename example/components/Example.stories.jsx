import React from 'react'

import logoPngUrl from '../images/logo.png'
import logoSvgUrl, { ReactComponent as LogoSvg } from '../images/logo.svg'
import { Example } from './Example'

export default {
  component: Example,
  parameters: { componentSubtitle: 'Some subtitle' }
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

export const CSF3 = { args: { children: 'CSF3' } }

export const Snapshot = {
  render: () =>
    [
      Text,
      InlineSVG,
      ImageSVGSrc,
      ImagePNGSrc,
      BackgroundSVGSrc,
      BackgroundPNGSrc
    ].map((Story, index) => <Story key={index} {...Story.args} />),
  parameters: { chromatic: { disableSnapshot: false } }
}
