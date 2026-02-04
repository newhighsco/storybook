import { breakpoints } from '@newhighsco/chipset'
import type {
  Decorator,
  Parameters,
  StoryContext,
  StoryObj
} from '@storybook/react-webpack5'
import React, { type ComponentProps, Fragment } from 'react'
import { convert, themes, type ThemeVars } from 'storybook/theming'
import { type Viewport } from 'storybook/viewport'

type Story<T> = StoryObj<ComponentProps<T>>
interface Options<T> {
  args?: ComponentProps<T>
  decorator?: Decorator<T>
  parameters?: Parameters
  tags?: string[]
}

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

export function snapshot<T>(
  story: Story<T> | Array<Story<T>>,
  { args, decorator, parameters, tags = [] }: Options<T> = {}
): Story<T> {
  const stories = Array.isArray(story) ? story : [story]

  return {
    render: (_, context: StoryContext<T>) =>
      stories.map((Story, key) => {
        const props: ComponentProps<T> = { ...Story.args, ...args }
        const Component = context.component
        const children = Story.render?.(props, context) ?? (
          <Component {...props} />
        )

        return (
          <Fragment key={key}>
            {decorator?.(children, context) ?? children}
          </Fragment>
        )
      }),
    parameters: {
      ...parameters,
      chromatic: { ...parameters?.chromatic, disableSnapshot: false }
    },
    tags: [...tags, '!autodocs', '!test']
  } satisfies Story<T>
}
