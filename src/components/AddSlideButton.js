import React from 'react'
import { connect } from 'react-redux'
import { changeActiveModalTo } from '../actions/modals'
import { modals } from './modals/Modals'

const AddSlideButton = ({ openAddSlideModal }) => {

  return (
    <div className='add-slide box'>
      <button className='add-slide-button'
              onClick={openAddSlideModal}
      >
        Add Slide
      </button>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => ({
  openAddSlideModal: () => dispatch(changeActiveModalTo(modals.SLIDE_FORM))
})

export default connect(null, mapDispatchToProps)(AddSlideButton)
