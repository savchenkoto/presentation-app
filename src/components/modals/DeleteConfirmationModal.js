import React from 'react'
import { connect } from 'react-redux'
import ModalWrapper from './ModalWrapper'
import { deleteSlide } from '../../actions/slides'
import { changeActiveModalTo } from '../../actions/modals'
import './style.css'

function DeleteConfirmationModal ({ slideIdToDelete, deleteSlide, exit }) {

  const handleConfirm = () => {
    deleteSlide(slideIdToDelete)
    exit()
  }

  return (
    <ModalWrapper
      width='20%'
      title='Confirm delete'
      onBackgroundClick={exit}
      onEscapeClick={exit}
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

const mapStateToProps = (state) => ({
  slideIdToDelete: state.activeModal.data.slide.id,
})

const mapDispatchToProps = (dispatch) => ({
  deleteSlide: (slideId) => dispatch(deleteSlide(slideId)),
  exit: () => dispatch(changeActiveModalTo(null))
})

export default connect(mapStateToProps, mapDispatchToProps)(DeleteConfirmationModal)
