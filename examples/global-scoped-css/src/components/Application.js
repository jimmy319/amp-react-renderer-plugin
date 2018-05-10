import React from 'react'

const Application = () => {
  return (
    <div>
      <amp-carousel height='300'
        layout='fixed-height'
        type='slides'>
        <div>
          <div className='blue-box' />
        This is a blue box.
        </div>
        <div>
          <div className='red-box' />
        This is a red box.
        </div>
        <div>
          <div className='green-box' />
        This is a green box.
        </div>
      </amp-carousel>
      <amp-instagram data-shortcode='1totVhIFXl'
        width='1'
        height='1'
        layout='responsive' />
    </div>
  )
}

export default Application
