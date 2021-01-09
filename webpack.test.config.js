const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const AmpReactRendererPlugin = require('./index-compiled.js')
const outputPath = path.join(__dirname, './dist')

module.exports = {
  mode: 'development',
  stats: {
    assets: false
  },
  entry: {
    'amp-ad': path.join(__dirname, './tests/extensionComponents/amp-ad/Application.js'),
    'amp-analytics': path.join(__dirname, './tests/extensionComponents/amp-analytics/Application.js'),
    'amp-auto-ads': path.join(__dirname, './tests/extensionComponents/amp-auto-ads/Application.js'),
    'amp-call-tracking': path.join(__dirname, './tests/extensionComponents/amp-call-tracking/Application.js'),
    'amp-experiment': path.join(__dirname, './tests/extensionComponents/amp-experiment/Application.js'),
    'amp-sticky-ad': path.join(__dirname, './tests/extensionComponents/amp-sticky-ad/Application.js'),
    'amp-access-laterpay': path.join(__dirname, './tests/extensionComponents/amp-access-laterpay/Application.js'),
    'amp-access': path.join(__dirname, './tests/extensionComponents/amp-access/Application.js'),
    'amp-bind': path.join(__dirname, './tests/extensionComponents/amp-bind/Application.js'),
    'amp-byside-content': path.join(__dirname, './tests/extensionComponents/amp-byside-content/Application.js'),
    'amp-consent': path.join(__dirname, './tests/extensionComponents/amp-consent/Application.js'),
    'amp-date-picker': path.join(__dirname, './tests/extensionComponents/amp-date-picker/Application.js'),
    'amp-form': path.join(__dirname, './tests/extensionComponents/amp-form/Application.js'),
    'amp-geo': path.join(__dirname, './tests/extensionComponents/amp-geo/Application.js'),
    'amp-gist': path.join(__dirname, './tests/extensionComponents/amp-gist/Application.js'),
    'amp-install-serviceworker': path.join(__dirname, './tests/extensionComponents/amp-install-serviceworker/Application.js'),
    'amp-list': path.join(__dirname, './tests/extensionComponents/amp-list/Application.js'),
    'amp-live-list': path.join(__dirname, './tests/extensionComponents/amp-live-list/Application.js'),
    'amp-mustache': path.join(__dirname, './tests/extensionComponents/amp-mustache/Application.js'),
    'amp-selector': path.join(__dirname, './tests/extensionComponents/amp-selector/Application.js'),
    'amp-user-notification': path.join(__dirname, './tests/extensionComponents/amp-user-notification/Application.js'),
    'amp-web-push': path.join(__dirname, './tests/extensionComponents/amp-web-push/Application.js'),
    'amp-accordion': path.join(__dirname, './tests/extensionComponents/amp-accordion/Application.js'),
    'amp-app-banner': path.join(__dirname, './tests/extensionComponents/amp-app-banner/Application.js'),
    'amp-carousel': path.join(__dirname, './tests/extensionComponents/amp-carousel/Application.js'),
    'amp-fx-flying-carpet': path.join(__dirname, './tests/extensionComponents/amp-fx-flying-carpet/Application.js'),
    'amp-fx-collection': path.join(__dirname, './tests/extensionComponents/amp-fx-collection/Application.js'),
    'amp-iframe': path.join(__dirname, './tests/extensionComponents/amp-iframe/Application.js'),
    'amp-image-lightbox': path.join(__dirname, './tests/extensionComponents/amp-image-lightbox/Application.js'),
    'amp-lightbox': path.join(__dirname, './tests/extensionComponents/amp-lightbox/Application.js'),
    'amp-lightbox-gallery': path.join(__dirname, './tests/extensionComponents/amp-lightbox-gallery/Application.js'),
    'amp-position-observer': path.join(__dirname, './tests/extensionComponents/amp-position-observer/Application.js'),
    'amp-sidebar': path.join(__dirname, './tests/extensionComponents/amp-sidebar/Application.js'),
    'amp-3q-player': path.join(__dirname, './tests/extensionComponents/amp-3q-player/Application.js'),
    'amp-anim': path.join(__dirname, './tests/extensionComponents/amp-anim/Application.js'),
    'amp-apester-media': path.join(__dirname, './tests/extensionComponents/amp-apester-media/Application.js'),
    'amp-audio': path.join(__dirname, './tests/extensionComponents/amp-audio/Application.js'),
    'amp-bodymovin-animation': path.join(__dirname, './tests/extensionComponents/amp-bodymovin-animation/Application.js'),
    'amp-brid-player': path.join(__dirname, './tests/extensionComponents/amp-brid-player/Application.js'),
    'amp-brightcove': path.join(__dirname, './tests/extensionComponents/amp-brightcove/Application.js'),
    'amp-dailymotion': path.join(__dirname, './tests/extensionComponents/amp-dailymotion/Application.js'),
    'amp-hulu': path.join(__dirname, './tests/extensionComponents/amp-hulu/Application.js'),
    'amp-ima-video': path.join(__dirname, './tests/extensionComponents/amp-ima-video/Application.js'),
    'amp-imgur': path.join(__dirname, './tests/extensionComponents/amp-imgur/Application.js'),
    'amp-izlesene': path.join(__dirname, './tests/extensionComponents/amp-izlesene/Application.js'),
    'amp-jwplayer': path.join(__dirname, './tests/extensionComponents/amp-jwplayer/Application.js'),
    'amp-kaltura-player': path.join(__dirname, './tests/extensionComponents/amp-kaltura-player/Application.js'),
    'amp-nexxtv-player': path.join(__dirname, './tests/extensionComponents/amp-nexxtv-player/Application.js'),
    'amp-o2-player': path.join(__dirname, './tests/extensionComponents/amp-o2-player/Application.js'),
    'amp-ooyala-player': path.join(__dirname, './tests/extensionComponents/amp-ooyala-player/Application.js'),
    'amp-playbuzz': path.join(__dirname, './tests/extensionComponents/amp-playbuzz/Application.js'),
    'amp-reach-player': path.join(__dirname, './tests/extensionComponents/amp-reach-player/Application.js'),
    'amp-soundcloud': path.join(__dirname, './tests/extensionComponents/amp-soundcloud/Application.js'),
    'amp-springboard-player': path.join(__dirname, './tests/extensionComponents/amp-springboard-player/Application.js'),
    'amp-video': path.join(__dirname, './tests/extensionComponents/amp-video/Application.js'),
    'amp-vimeo': path.join(__dirname, './tests/extensionComponents/amp-vimeo/Application.js'),
    'amp-wistia-player': path.join(__dirname, './tests/extensionComponents/amp-wistia-player/Application.js'),
    'amp-youtube': path.join(__dirname, './tests/extensionComponents/amp-youtube/Application.js'),
    'amp-animation': path.join(__dirname, './tests/extensionComponents/amp-animation/Application.js'),
    'amp-fit-text': path.join(__dirname, './tests/extensionComponents/amp-fit-text/Application.js'),
    'amp-font': path.join(__dirname, './tests/extensionComponents/amp-font/Application.js'),
    'amp-mathml': path.join(__dirname, './tests/extensionComponents/amp-mathml/Application.js'),
    'amp-story': path.join(__dirname, './tests/extensionComponents/amp-story/Application.js'),
    'amp-timeago': path.join(__dirname, './tests/extensionComponents/amp-timeago/Application.js'),
    'amp-beopinion': path.join(__dirname, './tests/extensionComponents/amp-beopinion/Application.js'),
    'amp-addthis': path.join(__dirname, './tests/extensionComponents/amp-addthis/Application.js'),
    'amp-facebook-comments': path.join(__dirname, './tests/extensionComponents/amp-facebook-comments/Application.js'),
    'amp-facebook-like': path.join(__dirname, './tests/extensionComponents/amp-facebook-like/Application.js'),
    'amp-facebook-page': path.join(__dirname, './tests/extensionComponents/amp-facebook-page/Application.js'),
    'amp-facebook': path.join(__dirname, './tests/extensionComponents/amp-facebook/Application.js'),
    'amp-gfycat': path.join(__dirname, './tests/extensionComponents/amp-gfycat/Application.js'),
    'amp-instagram': path.join(__dirname, './tests/extensionComponents/amp-instagram/Application.js'),
    'amp-pinterest': path.join(__dirname, './tests/extensionComponents/amp-pinterest/Application.js'),
    'amp-reddit': path.join(__dirname, './tests/extensionComponents/amp-reddit/Application.js'),
    'amp-riddle-quiz': path.join(__dirname, './tests/extensionComponents/amp-riddle-quiz/Application.js'),
    'amp-social-share': path.join(__dirname, './tests/extensionComponents/amp-social-share/Application.js'),
    'amp-twitter': path.join(__dirname, './tests/extensionComponents/amp-twitter/Application.js'),
    'amp-vine': path.join(__dirname, './tests/extensionComponents/amp-vine/Application.js'),
    'amp-vk': path.join(__dirname, './tests/extensionComponents/amp-vk/Application.js')
  },
  output: {
    filename: '[name].js',
    path: outputPath
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          {
            loader: 'css-loader',
            options: {
              modules: true,
              localIdentName: '[name]__[local]___[hash:base64:5]'
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css'
    }),
    new AmpReactRendererPlugin()
  ]
}
