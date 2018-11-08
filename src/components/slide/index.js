import React from 'react'
import Header from './Header'
import Description from './Description'

const Slide = ({ slide, selectSlide }) => {

  return (
    <div
      className='slide'
      onClick={() => selectSlide && selectSlide(slide.id)}
    >
      <Header data={slide && slide.header} />
      <Description data={slide && slide.text}/>
    </div>
  )
}

export default Slide
