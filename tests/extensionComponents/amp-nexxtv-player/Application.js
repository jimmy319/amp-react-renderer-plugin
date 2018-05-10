const React = require('react')

const Application = () => {
  return (
    <React.Fragment>
      <amp-nexxtv-player
        data-mediaid='71QQG852413DU7J'
        data-client='761'
        data-streamtype='video'
        data-seek-to='2'
        data-mode='static'
        data-origin='https://embed.nexx.cloud/'
        data-disable-ads='1'
        data-streaming-filter='nxp-bitrate-2500'
        layout='responsive'
        width='480' height='270' />
    </React.Fragment>
  )
}

module.exports = Application
