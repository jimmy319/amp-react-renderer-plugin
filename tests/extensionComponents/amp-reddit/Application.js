const React = require('react')

const Application = () => {
  return (
    <React.Fragment>
      <amp-reddit
        layout='responsive'
        width='300'
        height='400'
        data-embedtype='post'
        data-src='https://www.reddit.com/r/me_irl/comments/52rmir/me_irl/?ref=share&amp;ref_source=embed' />
    </React.Fragment>
  )
}

module.exports = Application
