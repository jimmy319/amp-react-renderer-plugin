const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const WriteFilePlugin = require('write-file-webpack-plugin')
const AmpReactRendererPlugin = require('../../index.js')

module.exports = {
  devtool: 'cheap-module-eval-source-map',
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
      },
      {
        test: /\.css$/,
        exclude: /(statics\/css\/[^/]+|node_modules\/.+)\.css$/,
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
      },
      {
        test: /node_modules\/.+\.css$/,
        use: ExtractTextPlugin.extract({
          use: 'css-loader'
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
