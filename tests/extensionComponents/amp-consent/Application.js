const React = require('react')
const { createJsonScriptElement } = require('react-ampify')

const Application = () => {
  const json = {
    'consents': {
      'my-consent': {
        'checkConsentHref': 'https://foo.com/api/show-consent',
        'promptUI': 'consent-ui'
      }
    }
  }
  return (
    <React.Fragment>
      <amp-consent layout='nodisplay' id='consent-element'>
        {createJsonScriptElement(json)}
        <div id='consent-ui'>
          <button on='tap:consent-element.accept' role='button'>Accept</button>
          <button on='tap:consent-element.reject' role='button'>Reject</button>
          <button on='tap:consent-element.dismiss' role='button'>Dismiss</button>
        </div>
      </amp-consent>
    </React.Fragment>
  )
}

module.exports = Application
