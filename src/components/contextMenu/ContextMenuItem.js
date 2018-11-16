import React from 'react'

const ContextMenuItem = ({ text, onClick }) => {
  return (
    <div className='context-menu-item' onClick={onClick}>
      <span>{text}</span>
    </div>
  )
}

export default ContextMenuItem
