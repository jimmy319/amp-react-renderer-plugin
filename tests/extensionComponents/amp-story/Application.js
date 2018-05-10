const React = require('react')

const Application = () => {
  return (
    <React.Fragment>
      <amp-story standalone=''>
        <amp-story-page id='my-first-page'>
          <amp-story-grid-layer template='fill'>
            <amp-img src='https://example.ampproject.org/helloworld/bg1.jpg'
              width='900' height='1600' />
          </amp-story-grid-layer>
          <amp-story-grid-layer template='vertical'>
            <h1>Hello, amp-story!</h1>
          </amp-story-grid-layer>
        </amp-story-page>
        <amp-story-page id='my-second-page'>
          <amp-story-grid-layer template='fill'>
            <amp-img src='https://example.ampproject.org/helloworld/bg2.gif'
              width='900' height='1600' />
          </amp-story-grid-layer>
          <amp-story-grid-layer template='vertical'>
            <h1>The End</h1>
          </amp-story-grid-layer>
        </amp-story-page>
      </amp-story>
    </React.Fragment>
  )
}

module.exports = Application
