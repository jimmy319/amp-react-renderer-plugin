const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const WriteFilePlugin = require('write-file-webpack-plugin')
const AmpReactRendererPlugin = require('amp-react-renderer-plugin')

module.exports = {
  entry: {
    page1: [
      path.resolve(__dirname, './src/styles/global.css'),
      path.resolve(__dirname, './src/components/Page1.js')
    ],
    page2: [
      path.resolve(__dirname, './src/styles/global.css'),
      path.resolve(__dirname, './src/components/Page2.js')
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
    new ExtractTextPlugin({
      filename: '[name].css',
      disable: false,
      allChunks: false
    }),
    new AmpReactRendererPlugin(),
    new WriteFilePlugin()
  ]
}
