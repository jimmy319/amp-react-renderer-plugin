const React = require('react')

const Application = () => {
  return (
    <React.Fragment>
      <amp-sticky-ad layout='nodisplay'>
        <amp-ad
          width='320'
          height='50'
          type='doubleclick'
          data-slot='/35096353/amptesting/formats/sticky'
        />
      </amp-sticky-ad>
    </React.Fragment>
  )
}

module.exports = Application
