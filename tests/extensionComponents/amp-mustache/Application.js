const React = require('react')
const { createMustacheTemplate } = require('react-ampify')

const Application = () => {
  const templateString = 'Hello {{world}}!'
  return (
    <React.Fragment>
      <template type='amp-mustache' dangerouslySetInnerHTML={{__html: templateString}} />
    </React.Fragment>
  )
}

module.exports = Application
