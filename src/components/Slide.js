import React from 'react'

const Slide = ({ slide }) => {
  console.log('in Slide: ', {slide})
  return (
    <div className='slide'>
      <div className='header'>
        <h1>{slide && slide.header}</h1>
      </div>
      <div className='description'>
        <p>{slide && slide.text}</p>
      </div>
    </div>
  )
}

export default Slide
