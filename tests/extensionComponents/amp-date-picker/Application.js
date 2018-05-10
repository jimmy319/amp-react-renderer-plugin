const React = require('react')

const Application = () => {
  return (
    <React.Fragment>
      <form
        method='post'
        action-xhr='/form/echo-json/post'
        target='_blank'>
        <amp-date-picker
          mode='overlay'
          layout='container'
          input-selector='[name=deliverydate]'
        >
          <label htmlFor='deliverydate'>Deliver Date:</label>
          <input type='text' name='deliverydate' />
        </amp-date-picker>
      </form>
    </React.Fragment>
  )
}

module.exports = Application
