import React from 'react'
import { Link } from 'react-router-dom'

const AddSlide = () => {
  return (
    <div className='addSlide box'>
      <Link to='/new-slide'>
        <button className='addSlideButton'>Add Slide</button>
      </Link>
    </div>
  )
}

export default AddSlide
