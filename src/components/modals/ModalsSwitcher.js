import React from 'react'
import { modals} from './Modals'
import DeleteConfirmationModal from './DeleteConfirmationModal'
import AddSlideModal from './AddSlideModal'
import { connect } from 'react-redux'

const ModalsSwitcher = ({ activeModal }) => {
  switch (activeModal.modal) {
    case modals.DELETE_CONFIRMATION: {
      return <DeleteConfirmationModal/>
    }
    case modals.ADD_NEW_SLIDE: {
      return <AddSlideModal/>
    }
    default: {
      return <div className='modal-background hidden'/>
    }
  }
}

const mapStateToProps = (state) => ({
  activeModal: state.activeModal
})

export default connect(mapStateToProps)(ModalsSwitcher)
