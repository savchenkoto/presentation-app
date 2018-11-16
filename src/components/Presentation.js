import React from 'react'
import Sidebar from './Sidebar'
import SlidesCarousel from './SlidesCarousel'
import ModalsSwitcher from './modals/ModalsSwitcher'
import ContextMenuSwitcher from './contextMenu/ContextMenuSwitcher'

const Presentation = () => {
  return (
    <div className='grid'>
      <Sidebar/>
      <SlidesCarousel/>
      <ModalsSwitcher/>
      <ContextMenuSwitcher/>
    </div>
  )
}

export default Presentation
