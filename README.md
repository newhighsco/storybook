# storybook-preset [![NPM version](https://img.shields.io/npm/v/@newhighsco/storybook-preset.svg)](https://www.npmjs.com/package/@newhighsco/storybook-preset)

New High Score [shareable preset](https://storybook.js.org/docs/presets/introduction/) for [Storybook](https://storybook.js.org/)

## Installation

Install Storybook and `@newhighsco/storybook-preset`:

```
yarn add -D storybook @newhighsco/storybook-preset @storybook/react-webpack5
```

## Usage

Create a `.storybook/main.js` in your project:

```js
// .storybook/main.js
/** @type { import('@storybook/react-webpack5').StorybookConfig } */
const config = {
  framework: '@storybook/react-webpack5',
  presets: ['@newhighsco/storybook-preset']
}

export default config
```

## [CHANGELOG](CHANGELOG.md)
