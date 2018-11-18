import React from 'react'
import '../styles/slidePlaceholder.css'

const SlidePlaceholder = ({ addSlide }) => {
  return (
    <div className='slide-placeholder'>
      <div
        className='bordered'
        onClick={addSlide}
      >
        <span>Click to Add Slide</span>
      </div>
    </div>
  )
}

export default SlidePlaceholder
