const React = require('react')

const Application = () => {
  return (
    <React.Fragment>
      <amp-web-push
        id='amp-web-push'
        layout='nodisplay'
        helper-iframe-url='https://example.com/helper-iframe.html'
        permission-dialog-url='https://example.com/permission-dialog.html'
        service-worker-url='https://example.com/service-worker.js'
      />

      <amp-web-push-widget visibility='unsubscribed' layout='fixed' width='250' height='80'>
        <button on='tap:amp-web-push.subscribe'>Subscribe to Notifications</button>
      </amp-web-push-widget>
      <amp-web-push-widget visibility='subscribed' layout='fixed' width='250' height='80'>
        <button on='tap:amp-web-push.unsubscribe'>Unsubscribe me from Notifications</button>
      </amp-web-push-widget>
      <amp-web-push-widget visibility='blocked' layout='fixed' width='250' height='80'>
    Looks like you've blocked notifications!
      </amp-web-push-widget>
      <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eget
    ligula eu augue scelerisque sodales. Vivamus consequat consectetur mauris, sed
    mollis justo aliquam feugiat. Phasellus sagittis dui eget posuere pulvinar.
    Curabitur leo urna, auctor in fringilla ut, eleifend in dolor. Aenean
    imperdiet lectus et lectus tincidunt, eu porttitor nisi placerat. Class aptent
    taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
    Praesent pretium tincidunt lectus sit amet semper. Sed egestas vulputate
    ultricies. Nunc vestibulum porta ante sed iaculis.
      </p>
    </React.Fragment>
  )
}

module.exports = Application
