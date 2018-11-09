import React from 'react'
import Sidebar from '../Sidebar'
import SlidesCarousel from '../SlidesCarousel'
import ModalsSwitcher from '../modals/ModalsSwitcher'

const MainPage = () => {
  return (
    <div className='wrapper'>
      <Sidebar/>
      <SlidesCarousel/>
      <ModalsSwitcher/>
    </div>
  )
}

export default MainPage
