import { type Preview } from '@storybook/react-webpack5'

const preview: Preview = {
  parameters: {
    chromatic: { disableSnapshot: true },
    darkMode: { current: 'light' },
    options: { storySort: { order: ['Docs'] } }
  }
}

export default preview
