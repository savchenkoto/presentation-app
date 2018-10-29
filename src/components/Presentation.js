import React from 'react'
import { Route } from 'react-router'
import MainPage from './pages/MainPage'
import AddSlidePage from './pages/AddSlidePage'

const Presentation = () => {
  return (
    <div>
      <Route exact path='/' component={MainPage}/>
      <Route exact path='/new-slide' component={AddSlidePage}/>
    </div>
  )
}

export default Presentation
