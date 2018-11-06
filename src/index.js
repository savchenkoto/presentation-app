import React from 'react'
import ReactDOM from 'react-dom'
import Presentation from './components/Presentation'
import { BrowserRouter as Router } from 'react-router-dom'
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
  <Router>
    <Provider store={store}>
      <Presentation/>
    </Provider>
  </Router>,
  document.getElementById('root')
)
