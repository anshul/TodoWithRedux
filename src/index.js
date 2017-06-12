import React from 'react'
import ReactDom from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import RootReducer from './reducers/index';

import App from './components/App'

let store = createStore(RootReducer)

ReactDom.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

// ReactDom.render(
//     <App />,
//   document.getElementById('root')
// )