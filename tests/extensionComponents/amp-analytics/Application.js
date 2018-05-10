const React = require('react')
const { createJsonScriptElement } = require('react-ampify')

const Application = () => {
  const json = {
    'vars': {
      'apid': 'XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX',
      'apv': '1.0',
      'apn': 'My AMP Website',
      'section': 'Entertainment',
      'segA': 'Music',
      'segB': 'News',
      'segC': 'Google AMP'
    }
  }
  return (
    <div>
      <amp-analytics type='nielsen'>
        {createJsonScriptElement(json)}
      </amp-analytics>
    </div>
  )
}

module.exports = Application
