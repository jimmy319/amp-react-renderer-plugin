const path = require('path')
const express = require('express')
const React = require('react')
const Page1 = require('./components/Page1.js').default
const Page2 = require('./components/Page2.js').default
const ampHtmlRenderer = require('../bundle/AmpHtmlRenderer.js')

const server = express()

server.get('/page1', (req, res) => {
  res.send(
    ampHtmlRenderer({
      entryName: 'page1',
      AppComponent: <Page1 />,
      title: 'This is AMP page#1',
      canonical: 'https://jimmy.amp.com',
      headComponents: null
    })
  )
})

server.get('/page2', (req, res) => {
  res.send(
    ampHtmlRenderer({
      entryName: 'page2',
      AppComponent: <Page2 />,
      title: 'This is AMP page#2',
      canonical: 'https://jimmy.amp.com',
      headComponents: null
    })
  )
})

if (process.env.NODE_ENV === 'production') {
  server.listen(3000, () => console.log('Example app listening on port 3000!'))
} else {
  module.exports = server
}
