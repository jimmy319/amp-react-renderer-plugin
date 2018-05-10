import React from 'react'
import styled from 'styled-components'

const Slide = styled.div`
  width: 100%;
  height: 280px;
`

const BlueSlide = styled(Slide)`
  background-color: blue;
`

const RedSlide = styled(Slide)`
  background-color: red;
`

const GreenSlide = styled(Slide)`
  background-color: green;
`

const Application = () => {
  return (
    <div>
      <amp-carousel height='300'
        layout='fixed-height'
        type='slides'>
        <div>
          <BlueSlide />
        💅This is a blue box.
        </div>
        <div>
          <RedSlide />
        💅This is a red box.
        </div>
        <div>
          <GreenSlide />
        💅This is a green box.
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
