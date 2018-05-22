const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const AmpReactRendererPlugin = require('amp-react-renderer-plugin')

module.exports = {
  entry: {
    home: [
      path.resolve(__dirname, './src/components/Application.js')
    ]
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'bundle')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader'
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin({
      filename: '[name].css',
      disable: false,
      allChunks: false
    }),
    new AmpReactRendererPlugin()
  ]
}
