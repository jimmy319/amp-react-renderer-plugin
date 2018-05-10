const React = require('react')

const Application = () => {
  return (
    <React.Fragment>
      <form
        method='GET'
        className='p2'
        action='/components/amp-form/submit-form'
        target='_top'
      >
        <p>Form Submission with Page Reload</p>
        <div className='ampstart-input inline-block relative mb3'>
          <input
            type='search'
            placeholder='Search...'
            name='googlesearch'
          />
        </div>
        <input
          type='submit'
          value='OK'
          className='ampstart-btn caps'
        />
      </form>
    </React.Fragment>
  )
}

module.exports = Application
