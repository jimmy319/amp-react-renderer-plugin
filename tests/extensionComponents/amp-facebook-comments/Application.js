const React = require('react')

const Application = () => {
  return (
    <React.Fragment>
      <amp-facebook-comments width='486' height='657'
        layout='responsive'
        data-numposts='5'
        data-href='http://www.directlyrics.com/adele-25-complete-album-lyrics-news.html' />
    </React.Fragment>
  )
}

module.exports = Application
