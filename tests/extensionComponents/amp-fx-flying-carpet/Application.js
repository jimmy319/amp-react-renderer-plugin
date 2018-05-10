const React = require('react')

const Application = () => {
  return (
    <React.Fragment>
      <div className='amp-flying-carpet-text-border'>Advertising</div>
      <amp-fx-flying-carpet height='300px'>
        <div>my ad</div>
      </amp-fx-flying-carpet>
      <div className='amp-flying-carpet-text-border'>Advertising</div>
    </React.Fragment>
  )
}

module.exports = Application
