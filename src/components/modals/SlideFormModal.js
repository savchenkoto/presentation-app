import React from 'react'
import ModalWrapper from './ModalWrapper'
import AddSlideForm from '../SlideForm'
import { addSlide, updateSlide } from '../../actions/slides'
import { closeActiveModal } from '../../actions/modals'
import { connect } from 'react-redux'

const SlideFormModal = ({ slidesCount, slideToEdit, addSlide, updateSlide, exit, position }) => {

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
        updateSlide={updateSlide}
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
    position: typeof data.position === 'undefined' ?
      state.slides.length :
      data.position
  }
}

const mapDispatchToProps = (dispatch) => ({
  addSlide: ({ slide, position }) => dispatch(addSlide({ slide, position })),
  updateSlide: (slide, position) => dispatch(updateSlide(slide, position)),
  exit: () => dispatch(closeActiveModal())
})

export default connect(mapStateToProps, mapDispatchToProps)(SlideFormModal)
