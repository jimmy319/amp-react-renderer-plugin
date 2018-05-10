const React = require('react')

const Application = () => {
  return (
    <React.Fragment>
      <amp-iframe width='500'
        title='Netflix House of Cards branding: The Stack'
        height='281'
        layout='responsive'
        sandbox='allow-scripts allow-same-origin allow-popups'
        allowfullscreen=''
        frameborder='0'
        src='https://player.vimeo.com/video/140261016' />
    </React.Fragment>
  )
}

module.exports = Application
