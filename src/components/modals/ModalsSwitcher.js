import React from 'react'
import { connect } from 'react-redux'
import { modals} from './Modals'
import DeleteConfirmationModal from './DeleteConfirmationModal'
import { deleteSlide, addSlide } from '../../actions/slides'
import { changeActiveModalTo } from '../../actions/modals'
import AddSlideModal from './AddSlideModal'

const ModalsSwitcher = ({ activeModal, deleteSlide, changeActiveModal, addSlide, slidesCount }) => {
  switch (activeModal.modal) {
    case modals.DELETE_CONFIRMATION: {
      return (
        <DeleteConfirmationModal
          onConfirm={() => deleteSlide(activeModal.data.slide.id)}
          exit={() => changeActiveModal(null)}
        />
      )
    }
    case modals.ADD_NEW_SLIDE: {
      return (
        <AddSlideModal
          slidesCount={slidesCount}
          addSlide={addSlide}
          exit={() => changeActiveModal(null)}
        />
      )
    }
    default: {
      return <div className='modal-background hidden'/>
    }
  }
}

const mapStateToProps = (state) => ({
  activeModal: state.activeModal,
  slidesCount: state.slides.length
})

const mapDispatchToProps = (dispatch) => ({
  deleteSlide: (slideId) => dispatch(deleteSlide(slideId)),
  changeActiveModal: (modal) => dispatch(changeActiveModalTo(modal, null)),
  addSlide: ({ slide, position }) => dispatch(addSlide({ slide, position }))
})

export default connect(mapStateToProps, mapDispatchToProps)(ModalsSwitcher)
