const React = require('react')

const Application = () => {
  return (
    <React.Fragment>
      <amp-user-notification id='my-notification'
        layout='nodisplay'>
        <div>This is an amp-user-notification. It uses local storage to store the dismissed state.
          <button on='tap:my-notification.dismiss'
          className='ampstart-btn caps ml1'>I accept</button>
        </div>
      </amp-user-notification>
    </React.Fragment>
  )
}

module.exports = Application
