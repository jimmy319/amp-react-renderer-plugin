const React = require('react')
const { createJsonScriptElement } = require('react-ampify')

const Application = () => {
  const json = {
    'ISOCountryGroups': {
      'soccer': [ 'au', 'ca', 'ie', 'nz', 'us', 'za' ],
      'football': [ 'unknown' ]
    }
  }
  return (
    <React.Fragment>
      <amp-geo layout='nodisplay'>
        {createJsonScriptElement(json)}
      </amp-geo>
    </React.Fragment>
  )
}

module.exports = Application
