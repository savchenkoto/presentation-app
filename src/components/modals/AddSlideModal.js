import React from 'react'
import ModalWrapper from './ModalWrapper'
import AddSlideForm from '../AddSlideForm'

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

export default AddSlideModal
