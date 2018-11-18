import React from 'react'
import ModalWrapper from './ModalWrapper'
import AddSlideForm from '../AddSlideForm'
import { addSlide, editSlide } from '../../actions/slides'
import { closeActiveModal } from '../../actions/modals'
import { connect } from 'react-redux'

const SlideFormModal = ({ slidesCount, slideToEdit, addSlide, editSlide, exit, position }) => {

  return (
    <ModalWrapper
      width='40%'
      title={`${slideToEdit ? 'Edit slide' : 'Add new slide'}`}
      onBackgroundClick={exit}
      onEscapeClick={exit}
    >
      <AddSlideForm
        slidesCount={slidesCount}
        slideToEdit={slideToEdit}
        addSlide={addSlide}
        editSlide={editSlide}
        exit={exit}
        position={position}
      />
    </ModalWrapper>
  )
}

const mapStateToProps = (state) => {
  const { data } = state.activeModal
  return {
    slidesCount: state.slides.length,
    slideToEdit: data && data.slide && {
      slide: {
        ...data.slide
      },
      position: state.slides.findIndex(item => item.id === data.slide.id) + 1
    },
    position: data.position || state.slides.length
  }
}

const mapDispatchToProps = (dispatch) => ({
  addSlide: ({ slide, position }) => dispatch(addSlide({ slide, position })),
  editSlide: ({ slide, position }) => editSlide(dispatch, { slide, position }),
  exit: () => dispatch(closeActiveModal())
})

export default connect(mapStateToProps, mapDispatchToProps)(SlideFormModal)
