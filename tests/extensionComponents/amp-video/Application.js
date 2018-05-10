const React = require('react')

const Application = () => {
  return (
    <React.Fragment>
      <amp-video controls=''
        width='640'
        height='360'
        layout='responsive'
        poster='images/kitten-playing.png'>
        <source src='videos/kitten-playing.webm'
          type='video/webm' />
        <source src='videos/kitten-playing.mp4'
          type='video/mp4' />
        <div fallback=''>
          <p>This browser does not support the video element.</p>
        </div>
      </amp-video>
    </React.Fragment>
  )
}

module.exports = Application
