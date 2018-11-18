import React from 'react'
import '../styles/addSlidePlaceholder.css'

const AddSlidePlaceholder = ({ addSlide }) => {
  return (
    <div className='slide-icon grid'>
      <div/>
      <div
        className='add-placeholder'
        onClick={addSlide}
      />
    </div>
  )
}

export default AddSlidePlaceholder
