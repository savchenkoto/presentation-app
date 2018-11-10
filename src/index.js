import React from 'react'
import ReactDOM from 'react-dom'
import Presentation from './components/Presentation'
import { createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { Provider } from 'react-redux'
import rootReducer from './reducers'
import './index.css'
import './styles/scrollbar.css'


const store = createStore(
  rootReducer,
  composeWithDevTools()
)

ReactDOM.render(
  <Provider store={store}>
    <Presentation/>
  </Provider>,
  document.getElementById('root')
)
