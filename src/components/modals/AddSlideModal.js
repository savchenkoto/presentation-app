import React from 'react'
import ModalWrapper from './ModalWrapper'
import AddSlideForm from '../AddSlideForm'
import { addSlide } from '../../actions/slides'
import { changeActiveModalTo } from '../../actions/modals'
import { connect } from 'react-redux'

const AddSlideModal = ({ slidesCount, addSlide, exit }) => {

  return (
    <ModalWrapper
      width='40%'
      title='Add new slide'
      onBackgroundClick={exit}
    >
      <AddSlideForm
        slidesCount={slidesCount}
        addSlide={addSlide}
        exit={exit}
      />
    </ModalWrapper>
  )
}

const mapStateToProps = (state) => ({
  slidesCount: state.slides.length
})

const mapDispatchToProps = (dispatch) => ({
  addSlide: ({ slide, position }) => dispatch(addSlide({ slide, position })),
  exit: () => dispatch(changeActiveModalTo(null))
})

export default connect(mapStateToProps, mapDispatchToProps)(AddSlideModal)
