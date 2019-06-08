import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import AppContainer from '../containers/Application.js'

const initState = {
  slides: [
    {
      color: 'blue',
      des: 'This is a blue box.'
    },
    {
      color: 'red',
      des: 'This is a red box.'
    },
    {
      color: 'green',
      des: 'This is a green box.'
    }
  ]
}

const reducer = function (state = initState, action) {
  return initState
}

const store = createStore(reducer)

const Root = () => {
  return (
    <Provider store={store}>
      <AppContainer />
    </Provider>
  )
}

export default Root
