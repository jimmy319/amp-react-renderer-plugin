const React = require('react')

const Application = () => {
  return (
    <React.Fragment>
      <amp-live-list layout='container'
        data-poll-interval='15000'
        data-max-items-per-page='5'
        id='amp-live-list-insert-blog'>
        <button update=''
          on='tap:amp-live-list-insert-blog.update'
          className='ampstart-btn ml1 caps'>You have updates</button>
        <div items=''>
          <div id='A green landscape with trees.'
            data-sort-time='20180501080946'>
            <div className='card blog'>
              <amp-img src='/img/landscape_green_1280x853.jpg'
                layout='responsive'
                width='1280'
                height='853' />
              <p>A green landscape with trees.</p>
            </div>
          </div>
        </div>
      </amp-live-list>
    </React.Fragment>
  )
}

module.exports = Application
