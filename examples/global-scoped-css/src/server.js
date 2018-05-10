const path = require('path')
const express = require('express')
const React = require('react')
const Application = require('./components/Application.js').default

const server = express()

server.get('/', (req, res) => {
  const ampHtmlRenderer = require('../bundle/AmpHtmlRenderer.js')

  res.send(
    ampHtmlRenderer({
      entryName: 'home',
      AppComponent: <Application />,
      title: 'This is my first AMP page powered by React + CSS modules',
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
