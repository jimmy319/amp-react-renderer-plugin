const React = require('react')
const ampHtmlValidator = require('amphtml-validator')
const Application = require('./Application')
const ampReactRenderer = require('../../../dist/AmpHtmlRenderer.js')

test('render a valid AMP page with amp-app-banner component', async () => {
  // arrangement
  const AppComponent = <Application />
  const title = 'case - amp-app-banner'
  const canonical = 'https://amp-app-banner.test.com.tw'
  const headComponents = [<meta key='source' name='apple-itunes-app' content='app-id=828256236, app-argument=medium://p/9ea61abf530f' />]

  // action
  const htmlString = ampReactRenderer({
    entryName: 'amp-app-banner',
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
