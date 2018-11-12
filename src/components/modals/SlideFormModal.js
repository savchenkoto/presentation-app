import React from 'react'
import ModalWrapper from './ModalWrapper'
import AddSlideForm from '../AddSlideForm'
import { addSlide, editSlide } from '../../actions/slides'
import { changeActiveModalTo } from '../../actions/modals'
import { connect } from 'react-redux'

const SlideFormModal = ({ slidesCount, slideToEdit, addSlide, editSlide, exit }) => {

  return (
    <ModalWrapper
      width='40%'
      title={`${slideToEdit ? 'Edit slide' : 'Add new slide'}`}
      onBackgroundClick={exit}
    >
      <AddSlideForm
        slidesCount={slidesCount}
        slideToEdit={slideToEdit}
        addSlide={addSlide}
        editSlide={editSlide}
        exit={exit}
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
    }
  }
}

const mapDispatchToProps = (dispatch) => ({
  addSlide: ({ slide, position }) => dispatch(addSlide({ slide, position })),
  editSlide: ({ slide, position }) => editSlide(dispatch, { slide, position }),
  exit: () => dispatch(changeActiveModalTo(null))
})

export default connect(mapStateToProps, mapDispatchToProps)(SlideFormModal)
