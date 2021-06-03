# storybook-preset [![NPM version](https://img.shields.io/npm/v/@newhighsco/storybook-preset.svg)](https://www.npmjs.com/package/@newhighsco/storybook-preset)

New High Score [shareable preset](https://storybook.js.org/docs/presets/introduction/) for [Storybook](https://storybook.js.org/)

## Installation

Install Storybook and `@newhighsco/storybook-preset`:

```
npm install --save-dev babel-loader @storybook/react @storybook/builder-webpack5 @newhighsco/storybook-preset
```

## Usage

Create a `.storybook/main.js` in your project:

```js
// .storybook/main.js
module.exports = {
  core: {
    builder: 'webpack5'
  },
  presets: ['@newhighsco/storybook-preset']
}
```

## [CHANGELOG](CHANGELOG.md)
