const React = require('react')

const Application = () => {
  return (
    <React.Fragment>
      <amp-ima-video id='myVideo'
        width='640'
        height='360'
        layout='responsive'
        data-tag='https://pubads.g.doubleclick.net/gampad/ads?sz=640x480&iu=/124319096/external/ad_rule_samples&ciu_szs=300x250&ad_rule=1&impl=s&gdfp_req=1&env=vp&output=vmap&unviewed_position_start=1&cust_params=deployment%3Ddevsite%26sample_ar%3Dpremidpost&cmsid=496&vid=short_onecue&correlator='
        data-poster='https://ampbyexample.com/img/ima-poster.jpg'>
        <source src='https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'
          type='video/mp4' />
      </amp-ima-video>
    </React.Fragment>
  )
}

module.exports = Application
