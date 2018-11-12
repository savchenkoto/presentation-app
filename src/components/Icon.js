import React from 'react'

const Icon = ({ icon, className, viewBox, onClick }) => {
  return (
    <svg viewBox={viewBox} className={className} onClick={onClick}>
      <path d={icon}/>
    </svg>
  )
}

export default Icon
