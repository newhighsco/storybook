import React from 'react'
import { Button } from '@storybook/react/demo'

export default {
  title: 'Components/Button',
  component: Button,
  parameters: {
    chromatic: { disable: true }
  }
}

export const text = () => <Button>Text</Button>

export const emoji = () => (
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
