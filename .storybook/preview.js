import { create } from '@storybook/theming/create'
import { addParameters } from '@storybook/react'

addParameters({
  options: {
    theme: create({
      base: 'light'
    })
  }
})
