const React = require('react')

const Application = () => {
  return (
    <React.Fragment>
      <section amp-access='NOT error AND NOT access' amp-access-hide=''>
        <div id='amp-access-laterpay-dialog' className='amp-access-laterpay' />
      </section>

      <section amp-access='error' amp-access-hide='' className='error-section'>
        Oops... Something broke.
      </section>

      <div amp-access='access' amp-access-hide=''>
        <p>...article content...</p>
      </div>
    </React.Fragment>
  )
}

module.exports = Application
