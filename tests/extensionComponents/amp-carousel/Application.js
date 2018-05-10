const React = require('react')

const Application = () => {
  return (
    <React.Fragment>
      <amp-carousel height='300'
        layout='fixed-height'
        type='carousel'>
        <amp-img src='/img/image1.jpg'
          width='400'
          height='300'
          alt='a sample image' />
        <amp-img src='/img/image2.jpg'
          width='400'
          height='300'
          alt='another sample image' />
        <amp-img src='/img/image3.jpg'
          width='400'
          height='300'
          alt='and another sample image' />
      </amp-carousel>
    </React.Fragment>
  )
}

module.exports = Application
