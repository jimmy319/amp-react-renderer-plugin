const React = require('react')

const Application = () => {
  return (
    <React.Fragment>
      <amp-app-banner layout='nodisplay'
        id='banner'>
        <div id='banner-logo'>
          <amp-img src='https://cdn-images-1.medium.com/max/50/1*JLegdtjFMNgqHgnxdd04fg.png'
            width='50'
            height='43'
            layout='fixed' />
        </div>
        <div id='banner-text'>Learn more about AMP in the Medium App.</div>
        <div id='banner-action'>
          <button className='ampstart-btn mr1 caps'
            open-button=''>View in app</button>
        </div>
      </amp-app-banner>
    </React.Fragment>
  )
}

module.exports = Application
