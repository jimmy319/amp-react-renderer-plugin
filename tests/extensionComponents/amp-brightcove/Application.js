const React = require('react')

const Application = () => {
  return (
    <React.Fragment>
      <amp-brightcove
        data-account='12345'
        data-player='default'
        data-embed='default'
        data-video-id='1234'
        layout='responsive'
        width='480' height='270' />
    </React.Fragment>
  )
}

module.exports = Application
