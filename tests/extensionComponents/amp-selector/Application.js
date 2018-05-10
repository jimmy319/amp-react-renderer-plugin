const React = require('react')

const Application = () => {
  return (
    <React.Fragment>
      <button on='tap:mySelector.clear'>Clear Selection</button>
      <amp-selector id='mySelector' layout='container' multiple=''>
        <div>Option One</div>
        <div>Option Two</div>
        <div>Option Three</div>
      </amp-selector>
    </React.Fragment>
  )
}

module.exports = Application
