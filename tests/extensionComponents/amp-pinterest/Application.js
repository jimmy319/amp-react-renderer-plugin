const React = require('react')

const Application = () => {
  return (
    <React.Fragment>
      <amp-pinterest
        height='20'
        width='40'
        data-do='buttonPin'
        data-url='http://www.flickr.com/photos/kentbrew/6851755809/'
        data-media='http://farm8.staticflickr.com/7027/6851755809_df5b2051c9_z.jpg'
        data-description='Next stop: Pinterest' />
    </React.Fragment>
  )
}

module.exports = Application
