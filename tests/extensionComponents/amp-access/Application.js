const React = require('react')

const Application = () => {
  return (
    <React.Fragment>
      <section amp-access='access'>
        <p>This section is visible to users if the authorization response contains:
        <code>"access": true</code>. This is usually the main content of the article.</p>
      </section>
      <section amp-access='NOT access'>
        <p>This section is only visible to users if the authorization response does not contain
          <code>access</code> or contains
          <code>"access": false</code>.</p>
      </section>
    </React.Fragment>
  )
}

module.exports = Application
