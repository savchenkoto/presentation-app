import React from 'react'

const ModalWrapper = ({ width, title, onBackgroundClick, children }) => {

  const handleBackgroundClick = (e) => {
    e.target === e.currentTarget && onBackgroundClick()
  }

  return (
    <div className='modal-background' onClick={handleBackgroundClick}>
      <div className='modal-window' style={{width: width}}>
        <header className='section'>
          <span>{title}</span>
        </header>
        <div className='modal-body'>
          {children}
        </div>
      </div>
    </div>
  )
}

export default ModalWrapper
