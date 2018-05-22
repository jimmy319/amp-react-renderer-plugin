const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const AmpReactRendererPlugin = require('amp-react-renderer-plugin')

module.exports = {
  entry: {
    home: path.resolve(__dirname, './src/components/Root.js')
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
                modules: true,
                minimize: true,
                localIdentName: '[name]__[local]___[hash:base64:5]'
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
    new AmpReactRendererPlugin()
  ]
}
