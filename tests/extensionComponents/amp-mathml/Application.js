const React = require('react')

const Application = () => {
  return (
    <React.Fragment>
      <amp-mathml layout='container' data-formula='\[x = {-b \pm \sqrt{b^2-4ac} \over 2a}.\]' />
    </React.Fragment>
  )
}

module.exports = Application
