<p align="center"><img width="200" src="https://user-images.githubusercontent.com/1024985/39759272-d02dd7e8-5304-11e8-9805-846dd4e49b6a.png" /><img width="250" src="https://camo.githubusercontent.com/d18f4a7a64244f703efcb322bf298dcb4ca38856/68747470733a2f2f7765627061636b2e6a732e6f72672f6173736574732f69636f6e2d7371756172652d6269672e737667" /></p>

# AMP React Renderer Plugin

[![Component Build](https://github.com/jimmy319/amp-react-renderer-plugin/actions/workflows/component.yaml/badge.svg)](https://github.com/jimmy319/amp-react-renderer-plugin/actions/workflow/component.yaml)
[![Npm Publish](https://github.com/jimmy319/amp-react-renderer-plugin/actions/workflows/publish.yaml/badge.svg)](https://github.com/jimmy319/amp-react-renderer-plugin/actions/workflow/publish.yaml)

This ia a webpack plugin that make it painless to create a React component based AMP (Google Accelerated Mobile Pages) application easily. It can handle these jobs for you:

- **Collect custom CSS:** Move all application required CSS assets into an AMP boilerplate HTML renderer. Renderer will add these styles inside the amp custom style tag of head tag.

- **Load used extension library automatically:** Extract the application used AMP extension component from bundle and generate cooresponding library script tags which will be added to the head tag of AMP HTML renderer.

- **Generate a React based AMP HTML renderer:** Plugin will generate a AMP HTML renderer for each application entry. It's a function that can be invoked with page meta and React application component at server runtime. Be able to render with React component means that plugin produced renderer works well with React ecosystem libraries which can be used on the server side like Redux and React Router. You can refer to the examples for more details and give it a try.

## Demo

![screencast_1080](https://user-images.githubusercontent.com/1024985/39879007-59364bc6-54ac-11e8-9782-c746f01a8407.gif)

## Installation

```
$ npm i -D amp-react-renderer-plugin
```

## Usage

### webpack.config.js

[Note] This plugin need to use together with plugins which can extract all required css modules in chunk into single or mutiple `.css` files such as [ExtractTextPlugin](https://github.com/webpack-contrib/extract-text-webpack-plugin) for webpack 3 or [mini-css-extract-plugin](https://github.com/webpack-contrib/mini-css-extract-plugin) for webpack 4.

```javascript
const AmpReactRendererPlugin = require('amp-react-renderer-plugin')

module.exports = {
  mode: ' development',
  entry: {
    'home': 'index.js'
  },
  output: {
    path: __dirname + '/dist',
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          use: [
            {
              loader: 'css-loader',
              query: {
                minimize: true
              }
            }
          ]
        })
      }
    ]
  },
  plugins: [
    new AmpReactRendererPlugin()
  ]
}
```

This will generate a file `dist/AmpHtmlRenderer.js` which will be used to render AMP page with React application component at server runtime.

### AMP page rendering

Here we use express route handler as example:

```javascript
const ampHtmlRenderer = require('./dist/AmpHtmlRenderer.js')

app.get('/home', function (req ,res) {
  const Application = require('./components/Application')

  res.send(ampHtmlRenderer({
    entryName: 'home',
    AppComponent: <Application />,
    title: 'hello AMP x React',
    canonical: 'https://github.com',
    headComponents: [<meta property="fb:app_id" content="1401488693436528"/>]
  }))
})
```

### Setup for live reload development

- Step 1: Mount [write-file-webpack-plugin](https://github.com/gajus/write-file-webpack-plugin) plugin (you can create another config file `webpack.dev.config` for dev mode)

```javascript
// webpack.dev.config
const WriteFilePlugin = require('write-file-webpack-plugin')

plugins: [
  ...,
  new WriteFilePlugin()
]
```

- Step 2: Mount [webpack-dev-middleware](https://github.com/webpack/webpack-dev-middleware) so that webpack will rebuild renderer once dependcies has changed.
```javascript
const path = require('path')
const webpackConfig = require('../webpack.config.dev.js')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpack = require('webpack')
const compiler = webpack(webpackConfig)
const server = require('./server.js')

// apply webpack dev middleware to enable Amp Html Renderer auto rebuilding
server.use(webpackDevMiddleware(compiler))
```

- Step3: use [nodemon](https://github.com/remy/nodemon) to monitor source changes in application and restart server automatically

```
$ nodemon --watch src/ server.js
```

**[Note] [Examples](https://github.com/jimmy319/amp-react-renderer-plugin/blob/master/examples) demonstrate how to setup it, check it out**

### AmpHtmlRenderer

generate AMP HTML source with options you passed in

**Options**

You need to pass a hash of options to AmpHtmlRenderer

name | type | description
--- | --- | ---
entryName | String | name of the entry point for the bundle which is used to generate renderer
AppComponent | [React Element](https://reactjs.org/docs/rendering-elements.html) | application React element
title | String | page title
canonical | String | canonical link
headComponents | Array | collection of React elements which will be added inside of HTML head tag
runtimeCss | String | javascript generated inline style source. For example: `Styled Components collectStyles()`

## Why component-based AMP 

### More Maintainable

<img width="614" alt="2018-05-10 10 09 16" src="https://user-images.githubusercontent.com/1024985/39873955-ff84c59c-549e-11e8-92cb-434e63027ab1.png">

### Composable

<img width="523" alt="2018-05-10 10 09 28" src="https://user-images.githubusercontent.com/1024985/39873988-1339d15e-549f-11e8-8166-3c815501721f.png">


### Easy to share and reuse

<img width="588" alt="2018-05-10 10 09 46" src="https://user-images.githubusercontent.com/1024985/39874016-24a2a330-549f-11e8-8dba-ebc5a646b521.png">

## Examples

- [global scoped CSS](https://github.com/jimmy319/amp-react-renderer-plugin/blob/master/examples/global-scoped-css)
- [CSS Modules](https://github.com/jimmy319/amp-react-renderer-plugin/blob/master/examples/css-modules)
- [styled components](https://github.com/jimmy319/amp-react-renderer-plugin/blob/master/examples/styled-components)
- [external-amp-component](https://github.com/jimmy319/amp-react-renderer-plugin/blob/master/examples/external-amp-component)
- [redux](https://github.com/jimmy319/amp-react-renderer-plugin/blob/master/examples/redux)

## Unsupported extension list
- amp-ad-exit: Currently renderer doesn't support AMP A4A document
- amp-google-vrview-image: still get [validation error](https://ampbyexample.com/components/amp-google-vrview-image/)
- amp-dynamic-css-classes
- amp-viz-vega

## Related Repositories

- [amp-react-square-img](https://github.com/jimmy319/amp-react-square-img)
- [react-ampify](https://github.com/jimmy319/react-ampify)

## License

[MIT Licensed](https://github.com/jimmy319/amp-react-renderer-plugin/blob/master/LICENSE)
