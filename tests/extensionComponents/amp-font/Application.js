const React = require('react')

const Application = () => {
  return (
    <React.Fragment>
      <amp-font
        layout='nodisplay'
        font-family='My Font'
        timeout='3000'
        on-error-remove-class='my-font-loading'
        on-error-add-class='my-font-missing' />
      <amp-font
        layout='nodisplay'
        font-family='My Other Font'
        timeout='1000'
        on-load-add-class='my-other-font-loaded'
        on-load-remove-class='my-other-font-loading' />
    </React.Fragment>
  )
}

module.exports = Application
