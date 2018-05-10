const path = require('path')
const express = require('express')
const React = require('react')
const { renderToString } = require('react-dom/server')
const Application = require('./components/Application.js').default
const { ServerStyleSheet } = require('styled-components')

const server = express()

server.get('/', (req, res) => {
  const sheet = new ServerStyleSheet()
  const html = renderToString(sheet.collectStyles(<Application />))
  const runtimeCss = sheet.getStyleElement()[0].props.dangerouslySetInnerHTML.__html
  const ampHtmlRenderer = require('../bundle/AmpHtmlRenderer.js')

  res.send(
    ampHtmlRenderer({
      entryName: 'home',
      AppComponent: <Application />,
      title: 'This is my first AMP page powered by React + styled-components',
      canonical: 'https://jimmy.amp.com',
      headComponents: null,
      runtimeCss
    })
  )
})

if (process.env.NODE_ENV === 'production') {
  server.listen(3000, () => console.log('Example app listening on port 3000!'))
} else {
  module.exports = server
}
