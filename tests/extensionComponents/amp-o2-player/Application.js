const React = require('react')

const Application = () => {
  return (
    <React.Fragment>
      <amp-o2-player
        data-pid='12345'
        data-bcid='5678'
        data-bid='54321'
        data-vid='98765'
        layout='responsive'
        width='480' height='270' />
    </React.Fragment>
  )
}

module.exports = Application
