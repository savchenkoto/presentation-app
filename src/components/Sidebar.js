import React from 'react'
import AddSlide from './AddSlide'
import Slides from './Slides'

const Sidebar = () => {
  return (
    <div className='sidebar sidebarWrapper'>
      <AddSlide/>
      <Slides/>
    </div>
  )
}

export default Sidebar
