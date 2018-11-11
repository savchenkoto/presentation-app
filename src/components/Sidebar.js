import React from 'react'
import SlidesList from './SlidesList'
import AddSlideButton from './AddSlideButton'

const Sidebar = () => {
  return (
    <div className='sidebar sidebar-grid'>
      <AddSlideButton/>
      <SlidesList/>
    </div>
  )
}

export default Sidebar
