import React from 'react'
import { Link } from 'react-router-dom'

const ButtonLink = ({ to, text }) => {
  return (
    <div className='addSlide box'>
      <Link to={to}>
        <button className='addSlideButton'>{text}</button>
      </Link>
    </div>
  )
}

export default ButtonLink
