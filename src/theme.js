import { create } from '@storybook/theming/create'
import packageConfig from '../package.json'

const { config = {}, homepage, name } = packageConfig
const { title, logo, theme } = config

export default create({
  base: theme,
  brandTitle: title || name,
  brandUrl: homepage,
  brandImage: logo
})
