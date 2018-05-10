const React = require('react')
const ampHtmlValidator = require('amphtml-validator')
const Application = require('./Application')
const ampReactRenderer = require('../../../dist/AmpHtmlRenderer.js')

test('render a valid AMP page with amp-access-laterpay component', async () => {
  // arrangement
  const AppComponent = <Application />
  const title = 'case - amp-access-laterpay'
  const canonical = 'https://amp-access-laterpay.test.com.tw'
  const json = {
    'vendor': 'laterpay',
    'laterpay': {
      'articleTitleSelector': '.preview > h3',
      'sandbox': true
    }
  }
  const headComponents = [<script key='test' id='amp-access' type='application/json' dangerouslySetInnerHTML={{__html: JSON.stringify(json)}} />]

  // action
  const htmlString = ampReactRenderer({
    entryName: 'amp-access-laterpay',
    AppComponent,
    title,
    canonical,
    headComponents
  })

  // assertion
  expect.assertions(2)
  expect(htmlString).toMatchSnapshot()
  const validator = await ampHtmlValidator.getInstance()
  const result = validator.validateString(htmlString)
  console.log('amp validation result: ', result)
  expect(result.status).toEqual('PASS')
})
