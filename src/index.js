import React from 'react'
import ReactDOM from 'react-dom'
import Presentation from './components/Presentation'
import { BrowserRouter as Router } from 'react-router-dom'
import './index.css'
import './styles/scrollbar.css'


ReactDOM.render(
  <Router>
    <Presentation/>
  </Router>,
  document.getElementById('root')
)
