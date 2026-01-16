import { breakpoints } from '@newhighsco/chipset'
import { convert, themes, type ThemeVars } from 'storybook/theming'
import { type Viewport } from 'storybook/viewport'

type Breakpoint = keyof breakpoints

export const useDarkMode = (): [boolean, ThemeVars] => {
  const dark = convert().base === themes.dark.base

  return [dark, dark ? themes.dark : themes.light]
}

export const viewports = Object.entries(
  breakpoints as Record<Breakpoint, string>
).reduce<Record<Breakpoint, Viewport>>((viewports, [name, width]) => {
  viewports[name] = { name, styles: { width: `${width}px`, height: '100%' } }

  return viewports
}, {})

export const modes = Object.keys(viewports).reduce<Record<Breakpoint, string>>(
  (modes, name) => {
    modes[name] = name

    return modes
  },
  {}
)
