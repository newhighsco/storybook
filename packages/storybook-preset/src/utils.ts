import { convert, themes, type ThemeVars } from 'storybook/internal/theming'

export const useDarkMode = (): [boolean, ThemeVars] => {
  const dark = convert().base === themes.dark.base

  return [dark, dark ? themes.dark : themes.light]
}
