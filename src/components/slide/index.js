import React from 'react'
import Header from './Header'
import Description from './Description'

const Slide = ({ slide }) => {
  return (
    <div className='slide'>
      <Header data={slide && slide.header} />
      <Description data={slide && slide.text}/>
    </div>
  )
}

export default Slide
