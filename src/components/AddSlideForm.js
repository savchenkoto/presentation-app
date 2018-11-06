import React from 'react'
import { connect } from 'react-redux'
import { addSlide } from '../actions/slides'


function AddSlideForm ({ dispatch, slidesCount }) {

  // TODO: add validation
  let positionInput
  let headerInput
  let textInput

  const submit = (e) => {
    e.preventDefault()
    const slide = {
      header: headerInput.value,
      text: textInput.value
    }
    dispatch(addSlide({ slide, position: positionInput.value }))
    clearInputs()
  }

  const clearInputs = () => {
    positionInput.value = ''
    headerInput.value = ''
    textInput.value = ''
  }

  return (
    <form>
      <label>
        Position
        <input
          ref={node => positionInput = node}
          type='number'
          min={1}
          max={slidesCount + 1}
        />
      </label>
      <label>
        Header
        <input
          ref={node => headerInput = node}
          type="text"
        />
      </label>
      <label>
        Text
        <input
          ref={node => textInput = node}
          type="text"
        />
      </label>
      <input type="submit" onClick={submit}/>
    </form>
  )
}

const mapStateToProps = (state) => ({
  slidesCount: state.slides && state.slides.length
})

export default connect(mapStateToProps)(AddSlideForm)
