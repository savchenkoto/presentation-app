import React from 'react'
import ReactDOM from 'react-dom'
import Presentation from './components/Presentation'
import { BrowserRouter as Router } from 'react-router-dom'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { Provider } from 'react-redux'
import rootReducer from './reducers'
import './index.css'
import './styles/scrollbar.css'


const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(
      thunk
    )
  )
)

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <Presentation/>
    </Provider>
  </Router>,
  document.getElementById('root')
)
