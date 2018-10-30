import React from 'react'
import AddSlide from './AddSlide'
import SlidesList from './SlidesList'


const Sidebar = () => {
  return (
    <div className='sidebar sidebarWrapper'>
      <AddSlide/>
      <SlidesList/>
    </div>
  )
}

export default Sidebar
