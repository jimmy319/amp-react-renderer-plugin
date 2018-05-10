import React from 'react'
import style from './Application.css'

const Application = ({ slides = [] }) => {
  return (
    <div>
      <h1>Create AMP app, the React way</h1>
      <amp-carousel height='300'
        layout='fixed-height'
        type='slides'>
        {
          slides.map((slide, index) => {
            const { color, des } = slide
            return (
              <div key={`s${index}`}>
                <div className={style[`${color}-box`]} />
                {des}
              </div>
            )
          })
        }
      </amp-carousel>
      <amp-instagram data-shortcode='1totVhIFXl'
        width='1'
        height='1'
        layout='responsive' />
    </div>
  )
}

export default Application
