import React from 'react'

const Page1 = () => {
  return (
    <div>
      <h1>Hello! I am page#1</h1>
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
    </div>
  )
}

export default Page1
