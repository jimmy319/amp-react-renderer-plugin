const React = require('react')

const Application = () => {
  return (
    <React.Fragment>
      <amp-lightbox id='my-lightbox'
        layout='nodisplay'>
        <div className='lightbox'
          on='tap:my-lightbox.close'
          role='button'
          tabIndex='0'>
          <h1>Hello World!</h1>
        </div>
      </amp-lightbox>
    </React.Fragment>
  )
}

module.exports = Application
