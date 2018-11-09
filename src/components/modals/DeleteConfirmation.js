import React from 'react'
import ModalWrapper from './ModalWrapper'
import './style.css'

function DeleteConfirmation ({ onConfirm, closeModal }) {

  const handleConfirm = () => {
    onConfirm()
    closeModal()
  }

  return (
    <ModalWrapper
      width='20%'
      title='Confirm delete'
      onBackgroundClick={closeModal}
    >
      <div className='section modal-body'>
        <p>Are you sure you want to delete it?</p>
      </div>
      <footer className='section'>
        <button onClick={handleConfirm}>Confirm</button>
        <button onClick={closeModal}>Dismiss</button>
      </footer>
    </ModalWrapper>
  )
}

export default DeleteConfirmation
