const React = require('react')

const Application = () => {
  return (
    <React.Fragment>
      <amp-audio width='auto'
        height='50'
        src='https://ia801402.us.archive.org/16/items/EDIS-SRP-0197-06/EDIS-SRP-0197-06.mp3'>
        <div fallback=''>
          <p>Your browser doesn’t support HTML5 audio</p>
        </div>
      </amp-audio>
    </React.Fragment>
  )
}

module.exports = Application
