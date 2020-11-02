import addons from '@storybook/addons'
import { create } from '@storybook/theming/create'

addons.setConfig({
  showRoots: false,
  theme: create({ base: 'light' })
})
