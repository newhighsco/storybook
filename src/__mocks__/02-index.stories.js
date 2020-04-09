import React from 'react'
import { Button } from '@storybook/react/demo'

export default {
  title: 'Components/Button',
  component: Button
}

export const Text = () => <Button>Text</Button>

export const Emoji = () => (
  <Button>
    <span role="img" aria-label="so cool">
      😀 😎 👍 💯
    </span>
  </Button>
)
