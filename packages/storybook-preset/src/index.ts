import { definePreviewAddon, type PreviewAddon } from 'storybook/internal/csf'

import * as addonAnnotations from './preview'

export { modes, snapshot, viewports } from './utils'
export default (): PreviewAddon => definePreviewAddon(addonAnnotations)
