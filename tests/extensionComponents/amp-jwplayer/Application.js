const React = require('react')

const Application = () => {
  return (
    <React.Fragment>
      <amp-jwplayer
        data-player-id='aBcD1234'
        data-media-id='5678WxYz'
        layout='responsive'
        width='16' height='9' />
    </React.Fragment>
  )
}

module.exports = Application
