import React from 'react'
import { Example, ExampleChild } from './Example'

import LogoSvg from './logo.svg'
import logoSvgUrl from './logo.url.svg'
import logoPngUrl from './logo.png'

export default {
  title: 'Components/Example',
  component: Example,
  subcomponents: { ExampleChild },
  parameters: {
    componentSubtitle: 'Some subtitle'
  }
}

export const Hidden = () => <Example>Hidden</Example>

Hidden.story = {
  parameters: {
    docs: {
      disable: true
    }
  }
}

export const Text = () => <Example>Text</Example>

export const InlineSVG = () => (
  <Example>
    <LogoSvg />
  </Example>
)

InlineSVG.story = {
  parameters: {
    docs: {
      storyDescription: 'Some story description'
    }
  }
}

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
