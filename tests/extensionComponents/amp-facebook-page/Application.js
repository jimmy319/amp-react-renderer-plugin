const React = require('react')

const Application = () => {
  return (
    <React.Fragment>
      <amp-facebook-page width='340' height='130'
        layout='fixed'
        data-hide-cover='true'
        data-href='https://www.facebook.com/imdb/' />
    </React.Fragment>
  )
}

module.exports = Application
