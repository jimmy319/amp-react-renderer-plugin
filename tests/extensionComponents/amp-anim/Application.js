const React = require('react')

const Application = () => {
  return (
    <React.Fragment>
      <amp-anim width={400} height={300} src='my-gif.gif'>
        <amp-img placeholder width={400} height={300} src='my-gif-screencap.jpg' />
      </amp-anim>
    </React.Fragment>
  )
}

module.exports = Application
