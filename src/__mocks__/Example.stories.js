import React from 'react'
import { Example } from './Example'

import LogoSvg from './logo.svg'
import logoSvgUrl from './logo.url.svg'
import logoPngUrl from './logo.png'

export default {
  title: 'Components/Example',
  component: Example,
  parameters: {
    componentSubtitle: 'Some subtitle'
  }
}

export const Text = () => <Example>Text</Example>

export const InlineSVG = () => (
  <Example>
    <LogoSvg />
  </Example>
)

export const ImageSVGSrc = () => (
  <Example>
    <img src={logoSvgUrl} alt="" />
  </Example>
)

export const ImagePNGSrc = () => (
  <Example>
    <img src={logoPngUrl} alt="" style={{ width: 64 }} />
  </Example>
)
