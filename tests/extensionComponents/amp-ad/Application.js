const React = require('react')
const style = require('./Application.css')

const Application = () => {
  return (
    <div className={style['wrapper']}>
      <amp-ad
        width='300'
        height='250'
        type='a9'
        data-aax_size='300x250'
        data-aax_pubname='test123'
        data-aax_src='302'
      />
      <amp-embed
        type='taboola'
        width='400'
        height='300'
        layout='responsive'
        data-publisher='amp-demo'
        data-mode='thumbnails-a'
        data-placement='Ads Example'
        data-article='auto'
      />
    </div>
  )
}

module.exports = Application
