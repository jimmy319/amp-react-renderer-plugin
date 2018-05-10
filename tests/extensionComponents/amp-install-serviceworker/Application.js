const React = require('react')

const Application = () => {
  return (
    <React.Fragment>
      <amp-install-serviceworker src='/sw.js'
        data-iframe-src='https://ampbyexample.com/sw.html'
        layout='nodisplay' />
    </React.Fragment>
  )
}

module.exports = Application
