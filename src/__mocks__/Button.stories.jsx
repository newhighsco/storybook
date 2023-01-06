import React from 'react'
import { Button } from '@storybook/react/demo'

export default {
  component: Button,
  parameters: { chromatic: { disable: true } }
}

const Template = args => <Button {...args} />

export const Text = Template.bind()
Text.args = { children: 'Text' }

export const Emoji = Template.bind()
Emoji.args = {
  children: (
    <span role="img" aria-label="so cool">
      😀 😎 👍 💯
    </span>
  )
}
