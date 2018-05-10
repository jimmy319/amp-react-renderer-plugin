const React = require('react')

const Application = () => {
  return (
    <React.Fragment>
      <amp-social-share type='linkedin' width='60' height='44'
        data-param-text='Hello world'
        data-param-url='https://example.com/' />
    </React.Fragment>
  )
}

module.exports = Application
