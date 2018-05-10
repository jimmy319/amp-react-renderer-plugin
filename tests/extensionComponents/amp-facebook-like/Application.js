const React = require('react')

const Application = () => {
  return (
    <React.Fragment>
      <amp-facebook-like width='90' height='20'
        layout='fixed'
        data-layout='button_count'
        data-href='https://www.facebook.com/testesmegadivertidos/' />
    </React.Fragment>
  )
}

module.exports = Application
