const React = require('react')

const Application = () => {
  return (
    <React.Fragment>
      <amp-call-tracking config='https://example.com/calltracking.json'>
        <a href='tel:123456789'>+1 (23) 456-789</a>
      </amp-call-tracking>
    </React.Fragment>
  )
}

module.exports = Application
