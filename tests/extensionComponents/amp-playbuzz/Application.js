const React = require('react')

const Application = () => {
  return (
    <React.Fragment>
      <amp-playbuzz
        src='https://www.playbuzz.com/HistoryUK/10-classic-christmas-movies'
        height='500'
        data-item-info='true'
        data-share-buttons='true'
        data-comments='true' />
    </React.Fragment>
  )
}

module.exports = Application
