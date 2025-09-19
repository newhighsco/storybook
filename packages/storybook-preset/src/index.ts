import { definePreviewAddon, type PreviewAddon } from 'storybook/internal/csf'

import * as addonAnnotations from './preview'

export default (): PreviewAddon => definePreviewAddon(addonAnnotations)
