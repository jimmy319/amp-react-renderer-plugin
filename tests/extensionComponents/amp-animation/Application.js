const React = require('react')

const Application = () => {
  const json = {
	  '--delay': '0.5s',
	  '--x': '100px',
	  'animations': [
	    {
	      'selector': '#target1',
	      'delay': 'var(--delay)',
	      '--x': '150px',
	      'keyframes': {'transform': 'translate(var(--x), var(--y, 0px)'}
	    }
	  ]
  }
  return (
    <React.Fragment>
      <amp-animation layout='nodisplay'>
        <script type='application/json' dangerouslySetInnerHTML={{__html: JSON.stringify(json)}} />
      </amp-animation>
    </React.Fragment>
  )
}

module.exports = Application
