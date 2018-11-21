import React from 'react'
import Presentation from './Presentation'
import Provider from 'react-redux/es/components/Provider'

const Root = ({ store }) => {
  return (
    <Provider store={store}>
      <Presentation/>
    </Provider>
  )
}

export default Root
