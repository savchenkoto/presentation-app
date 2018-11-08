import React from 'react'
import ButtonLink from './ButtonLink'
import SlidesList from './SlidesList'


const Sidebar = () => {
  return (
    <div className='sidebar sidebar-wrapper'>
      <ButtonLink to='/new-slide' text='Add Slide'/>
      <SlidesList/>
    </div>
  )
}

export default Sidebar
