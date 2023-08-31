# storybook-addon-svgr [![NPM version](https://img.shields.io/npm/v/@newhighsco/storybook-addon-svgr.svg)](https://www.npmjs.com/package/@newhighsco/storybook-addon-svgr)

[Storybook](https://storybook.js.org/) addon for transforming SVGs into React components using [SVGR](https://react-svgr.com/)

## Installation

Install Storybook and `@newhighsco/storybook-addon-svgr`:

```
yarn add -D storybook @newhighsco/storybook-addon-svgr @storybook/react-webpack5
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
      name: '@newhighsco/storybook-addon-svgr',
      options: {
        svgrOptions: {
          /* config options here */
        }
      }
    }
  ]
}

export default config
```

In your code:

```jsx
import starUrl, { ReactComponent as Star } from './star.svg'

const App = () => (
  <>
    <img src={starUrl} alt="star" />
    <Star />
  </>
)
```

## Options

[See options supported by SVGR](https://react-svgr.com/docs/options/). Alternatively create a [SVGR configuration file](https://react-svgr.com/docs/configuration-files/) in your project:

## [CHANGELOG](CHANGELOG.md)
