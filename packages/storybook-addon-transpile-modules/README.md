# storybook-addon-transpile-modules [![NPM version](https://img.shields.io/npm/v/@newhighsco/storybook-addon-transpile-modules.svg)](https://www.npmjs.com/package/@newhighsco/storybook-addon-transpile-modules)

[Storybook](https://storybook.js.org/) addon to transpile and bundle `node_modules`

## Installation

Install Storybook and `@newhighsco/storybook-addon-transpile-modules`:

```
yarn add -D storybook @newhighsco/storybook-addon-transpile-modules @storybook/react-webpack5
```

## Usage

Create a `.storybook/main.js` in your project:

```js
// .storybook/main.js
/** @type { import('@storybook/react-webpack5').StorybookConfig } */
const config = {
  framework: '@storybook/react-webpack5',
  addons: [
    {
      name: '@newhighsco/storybook-addon-transpile-modules',
      options: {
        transpileModules: ['@newhighsco/chipset']
      }
    }
  ]
}

export default config
```

## [CHANGELOG](CHANGELOG.md)
