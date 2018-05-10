const React = require('react')
const ampHtmlValidator = require('amphtml-validator')
const Application = require('./Application')
const ampReactRenderer = require('../../../dist/AmpHtmlRenderer.js')

test('render a valid AMP page with amp-access component', async () => {
  // arrangement
  const AppComponent = <Application />
  const title = 'case - amp-access'
  const canonical = 'https://amp-access.test.com.tw'
  const json = {
    'authorization': 'https://ampbyexample.com/components/amp-access/authorization?rid=READER_ID&url=CANONICAL_URL&ref=DOCUMENT_REFERRER&_=RANDOM',
    'pingback': 'https://ampbyexample.com/components/amp-access/authorization?rid=READER_ID&url=CANONICAL_URL&ref=DOCUMENT_REFERRER&_=RANDOM',
    'login': {
      'sign-in': 'https://ampbyexample.com/components/amp-access/login?rid=READER_ID&url=CANONICAL_URL',
      'sign-out': 'https://ampbyexample.com/components/amp-access/logout'
    },
    'authorizationFallbackResponse': {
      'error': true,
      'access': false,
      'subscriber': false
    }
  }
  const headComponents = [<script key='test' id='amp-access' type='application/json' dangerouslySetInnerHTML={{__html: JSON.stringify(json)}} />]

  // action
  const htmlString = ampReactRenderer({
    entryName: 'amp-access',
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
