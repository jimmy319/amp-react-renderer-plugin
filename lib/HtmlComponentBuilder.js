const transpiler = require('babel-core')
const constants = require('../conf/constants.json')

class HtmlComponentBuilder {
  build (extComponentScripts) {
    const raw = `
      const React = require('react')

      module.exports = function (props) {
        const { AppComponent, title, canonical, headComponents } = props

        return (
          <html amp="">
            <head>
              <meta charSet="utf-8" />
              <meta name="amp-google-client-id-api" content="googleanalytics" />
              <meta name="viewport" content="width=device-width,minimum-scale=1,initial-scale=1" />
              <title>{title}</title>
              <link rel="canonical" href={canonical} />
              {headComponents}
              #react-amp-inline-style#
              <script async="true" src="${constants.AMP_CDN_HOST}/v0.js"></script>
              ${extComponentScripts === null ? '' : extComponentScripts}
            </head>
            <body>
              {AppComponent}
            </body>
          </html>
        )
      }
    `

    return transpiler.transform(raw, { presets: ['react'] }).code
  }
}

module.exports = HtmlComponentBuilder
