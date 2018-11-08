import React from 'react'
import { Link } from 'react-router-dom'

const ButtonLink = ({ to, text }) => {
  return (
    <div className='add-slide box'>
      <Link to={to}>
        <button className='add-slide-button'>{text}</button>
      </Link>
    </div>
  )
}

export default ButtonLink
