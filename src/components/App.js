import React from 'react'
import SlidesCarousel from './SlidesCarousel'
import Sidebar from './Sidebar'

const App = () => {
  return (
    <div className='wrapper'>
      <Sidebar/>
      <SlidesCarousel/>
    </div>
  )
}

export default App
