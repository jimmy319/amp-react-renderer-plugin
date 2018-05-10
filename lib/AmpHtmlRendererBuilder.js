const constants = require('../conf/constants.json')

class AmpHtmlRendererBuilder {
  build () {
    const source = `
      const fs = require('fs')
      const path = require('path')
      const React = require('react')
      const ReactDOMServer = require('react-dom/server')

      /*
      * AMP page renderer which will generate a valid AMP Html with given app component element, title, canonical, head tags and runtime styles.
      * @param entryName (required)
      *   name of the entry point of webpack bundle
      * @param AppComponent
      *   application main react element
      * @param title
      *   page title
      * @param canonical
      *   page canonical
      * @param headComponents
      *   collection of react element in html head tag
      * @param runtimeCss
      *   javascript generated inline styles. For example: Styled Components collectStyles
      * @return
      *   AMP HTML page source
      */
      module.exports = function ({entryName, AppComponent, title, canonical, headComponents, runtimeCss = ''}) {
        const HtmlComponent = require('./' + entryName + '-Html.amp.js')

        // check entry name
        if (!HtmlComponent) {
          throw 'Invalid entry name: ' + entryName + '! Please check your webpack configuration or rendering function.'
        }

        let htmlStr = ReactDOMServer.renderToStaticMarkup(HtmlComponent({ AppComponent, title, canonical, headComponents }))
        const inlineCss = fs.readFileSync(path.join(__dirname, './' + entryName + '-Html.amp.css'), 'utf-8')

        htmlStr = htmlStr.replace(
          '#react-amp-inline-style#',
          '${constants.AMP_BOILERPLATE_CODE}' + '<style amp-custom>' + (inlineCss + runtimeCss) + '</style>'
        )

        return '<!doctype html>' + htmlStr
      }
    `

    return source
  }
}

module.exports = AmpHtmlRendererBuilder
