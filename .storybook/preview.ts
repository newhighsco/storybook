import { type Preview } from '@storybook/react-webpack5'

const preview: Preview = {
  parameters: {
    chromatic: { disableSnapshot: true },
    options: { storySort: { order: ['Docs'] } }
  },
  tags: ['autodocs']
}

export default preview
