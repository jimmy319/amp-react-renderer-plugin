const path = require('path')
const WriteFilePlugin = require('write-file-webpack-plugin')
const AmpReactRendererPlugin = require('amp-react-renderer-plugin')

module.exports = {
  mode: 'development',
  entry: {
    home: path.resolve(__dirname, './src/components/Application.js')
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
    new AmpReactRendererPlugin(),
    new WriteFilePlugin()
  ]
}
