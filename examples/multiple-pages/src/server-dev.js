require('@babel/register')({
  babelrc: false,
  presets: ["@babel/env", "@babel/react"]
})

const webpackConfig = require('../webpack.config.dev.js')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpack = require('webpack')
const compiler = webpack(webpackConfig)
const server = require('./server.js')

// apply webpack dev middleware to enable Amp Html Renderer auto rebuilding
server.use(webpackDevMiddleware(compiler))

server.listen(3000, () => console.log('Example app listening on port 3000!'))
