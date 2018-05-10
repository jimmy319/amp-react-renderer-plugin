const React = require('react')

const Application = () => {
  return (
    <React.Fragment>
      <amp-bodymovin-animation layout='fixed'
        width='200'
        height='200'
        src='https://tw.example.com/json/bodymovin_red_circle.json' />
    </React.Fragment>
  )
}

module.exports = Application
