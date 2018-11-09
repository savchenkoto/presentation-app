import React from 'react'
import { connect } from 'react-redux'
import { modals} from './Modals'
import DeleteConfirmation from './DeleteConfirmation'
import { deleteSlide } from '../../actions/slides'
import { changeActiveModalTo } from '../../actions/modals'

const ModalsSwitcher = ({ activeModal, deleteSlide, changeActiveModal }) => {
  switch (activeModal.modal) {
    case modals.DELETE_CONFIRMATION: {
      return (
        <DeleteConfirmation
          onConfirm={() => deleteSlide(activeModal.data.slide.id)}
          closeModal={() => changeActiveModal(null)}
        />
      )
    }
    default: {
      return <div className='modal-background hidden'/>
    }
  }
}

const mapStateToProps = (state) => ({
    activeModal: state.activeModal
})

const mapDispatchToProps = (dispatch) => ({
  deleteSlide: (slideId) => dispatch(deleteSlide(slideId)),
  changeActiveModal: (modal) => dispatch(changeActiveModalTo(modal, null))
})

export default connect(mapStateToProps, mapDispatchToProps)(ModalsSwitcher)
