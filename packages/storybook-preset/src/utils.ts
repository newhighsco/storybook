import { breakpoints } from '@newhighsco/chipset'
import { convert, themes, type ThemeVars } from 'storybook/theming'
import { type Viewport } from 'storybook/viewport'

export const useDarkMode = (): [boolean, ThemeVars] => {
  const dark = convert().base === themes.dark.base

  return [dark, dark ? themes.dark : themes.light]
}

export const viewports = Object.entries(
  breakpoints as Record<string, string>
).reduce<Record<string, Viewport>>((viewports, [name, width]) => {
  viewports[name] = { name, styles: { width: `${width}px`, height: '100%' } }

  return viewports
}, {})

export const modes = (
  breakpoints?: string[]
): Record<string, { viewport: string }> =>
  Object.keys(viewports).reduce((modes, viewport) => {
    if (!breakpoints?.length || breakpoints?.includes(viewport)) {
      modes[viewport] = { viewport }
    }

    return modes
  }, {})

// export const modes = Object.keys(viewports).reduce<
//   Record<Breakpoint, { viewport: string }>
// >((modes, viewport) => {
//   modes[viewport] = { viewport }

//   return modes
// }, {})
