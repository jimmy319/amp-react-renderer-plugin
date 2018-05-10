const React = require('react')

const Application = () => {
  return (
    <React.Fragment>
      <amp-image-lightbox id='lightbox1' layout='nodisplay' />
      <amp-img on='tap:lightbox1'
        role='button'
        tabindex='0'
        src='/img/frog.jpg'
        layout='responsive'
        width='360' height='360' />

      <amp-img on='tap:lightbox1'
        role='button'
        tabindex='0'
        src='/img/cat.jpg'
        layout='responsive'
        width='360' height='360' />
    </React.Fragment>
  )
}

module.exports = Application
