import React from 'react'

import logoPngUrl from '../images/logo.png'
import logoSvgUrl, { ReactComponent as LogoSvg } from '../images/logo.svg'
import { Example } from './Example'

export default {
  component: Example,
  parameters: { componentSubtitle: 'Some subtitle' }
}

export const Text = { args: { children: 'Text' } }

export const InlineSVG = {
  args: { children: <LogoSvg /> },
  parameters: { docs: { description: { story: 'Some story description' } } }
}

export const ImageSVGSrc = {
  args: { children: <img src={logoSvgUrl} alt="" /> }
}

export const ImagePNGSrc = {
  args: { children: <img src={logoPngUrl} alt="" style={{ width: 64 }} /> }
}

export const BackgroundSVGSrc = { args: { background: 'svg' } }

export const BackgroundPNGSrc = { args: { background: 'png' } }

export const Source = { args: { children: 'Source' } }

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
