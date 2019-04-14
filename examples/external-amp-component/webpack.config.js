const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const AmpReactRendererPlugin = require('amp-react-renderer-plugin')

module.exports = {
  mode: 'production',
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
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          {
            loader: 'css-loader',
            query: {
              modules: true,
              minimize: true,
              localIdentName: '[name]__[local]___[hash:base64:5]'
            }
          }
        ]
      },
      {
        test: /node_modules\/.+\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          {
            loader: 'css-loader'
          }
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
    new AmpReactRendererPlugin()
  ]
}
