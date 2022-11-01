import React from 'react'
import { Button } from '@storybook/react/demo'

export default {
  component: Button,
  parameters: {
    chromatic: { disable: true }
  }
}

export const Text = () => <Button>Text</Button>

export const Emoji = () => (
  <>
    <Button>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
    <Button>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  </>
)
