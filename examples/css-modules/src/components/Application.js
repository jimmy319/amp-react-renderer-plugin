import React from 'react'

const Application = () => {
  return (
    <div>
      <h1>Create AMP app, the React way</h1>
      <amp-carousel height='300'
        layout='fixed-height'
        type='slides'>
        <div>
          <div className={style['blue-box']} />
        This is a blue box.
        </div>
        <div>
          <div className={style['red-box']} />
        This is a red box.
        </div>
        <div>
          <div className={style['green-box']} />
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
