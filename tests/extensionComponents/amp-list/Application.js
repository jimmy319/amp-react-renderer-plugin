const React = require('react')

const Application = () => {
  return (
    <React.Fragment>
      <amp-list width='auto'
        height='100'
        layout='fixed-height'
        src='https://ampbyexample.com/json/examples.json'
        class='m1' />
    </React.Fragment>
  )
}

module.exports = Application
