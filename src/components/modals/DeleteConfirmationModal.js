import React from 'react'
import ModalWrapper from './ModalWrapper'
import './style.css'

function DeleteConfirmationModal ({ onConfirm, exit }) {

  const handleConfirm = () => {
    onConfirm()
    exit()
  }

  return (
    <ModalWrapper
      width='20%'
      title='Confirm delete'
      onBackgroundClick={exit}
    >
      <div className='section'>
        <p>Are you sure you want to delete it?</p>
      </div>
      <footer className='section'>
        <button onClick={handleConfirm}>Confirm</button>
        <button onClick={exit}>Dismiss</button>
      </footer>
    </ModalWrapper>
  )
}

export default DeleteConfirmationModal
