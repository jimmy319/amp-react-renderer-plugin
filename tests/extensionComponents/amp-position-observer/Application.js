const React = require('react')

const Application = () => {
  return (
    <React.Fragment>
      <div className='fidget-spinner-scene'>
        <amp-position-observer on='scroll:spinAnimation.seekTo(percent=event.percent)'
          intersection-ratios='1'
          layout='nodisplay' />
        <amp-img id='fidgetSpinnerImage'
          width='1024'
          height='1114'
          layout='responsive'
          src='/img/fidget.png'
          alt='Picture of a fidget spinner' />
      </div>
    </React.Fragment>
  )
}

module.exports = Application
