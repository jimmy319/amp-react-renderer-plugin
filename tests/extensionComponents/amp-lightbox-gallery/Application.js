const React = require('react')

const Application = () => {
  return (
    <React.Fragment>
      <figure>
        <amp-img lightbox
          src='https://picsum.photos/1600/900?image=1075'
          layout='responsive'
          width='1600'
          height='900'
          alt='Picture of CN tower.' />
        <figcaption className='image'>
      Toronto's CN tower was built in 1976 and was the tallest free-standing structure until 2007.
        </figcaption>
      </figure>
    </React.Fragment>
  )
}

module.exports = Application
