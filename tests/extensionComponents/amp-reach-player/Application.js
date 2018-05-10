const React = require('react')

const Application = () => {
  return (
    <React.Fragment>
      <amp-reach-player
        data-embed-id='default'
        layout='responsive'
        width='560'
        height='315' />
    </React.Fragment>
  )
}

module.exports = Application
