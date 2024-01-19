/** @type { import('@storybook/react').Preview } */
const preview = {
  parameters: {
    chromatic: { disableSnapshot: true },
    darkMode: { current: 'light' },
    options: { storySort: { order: ['Docs'] } }
  }
}

export default preview
