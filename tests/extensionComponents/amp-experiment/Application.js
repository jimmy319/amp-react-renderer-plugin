const React = require('react')
const { createJsonScriptElement } = require('react-ampify')

const Application = () => {
  const json = {
    'button-color-experiment': {
      'variants': {
        '0': 30,
        '1': 30,
        '2': 30
      }
    }
  }
  return (
    <React.Fragment>
      <amp-experiment>
        {createJsonScriptElement(json)}
      </amp-experiment>
    </React.Fragment>
  )
}

module.exports = Application
