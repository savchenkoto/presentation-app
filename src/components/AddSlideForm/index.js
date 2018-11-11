import React, { Component } from 'react'
import './style.css'


const modes = {
  EDIT: 'Edit',
  ADD: 'Add'
}

class Index extends Component {

  positionInput
  headerInput
  textInput

  componentDidMount () {
    const { slideToEdit } = this.props
    this.mode = modes.ADD
    if (slideToEdit) {
      this.positionInput.value = slideToEdit.position
      this.headerInput.value = slideToEdit.slide.header
      this.textInput.value = slideToEdit.slide.text
      this.mode = modes.EDIT
    }
  }

  submit = (e) => {
    e.preventDefault()
    const { addSlide, editSlide, slideToEdit, exit } = this.props
    const slide = {
      header: this.headerInput.value,
      text: this.textInput.value
    }
    this.mode === modes.ADD ?
      addSlide({ slide, position: this.positionInput.value - 1 }) :
      editSlide({
        slide: {
          ...slide,
          id: slideToEdit.slide.id,
        },
        position: this.positionInput.value - 1
      })


    this.clearInputs()
    exit()
  }

  clearInputs = () => {
    this.positionInput.value = ''
    this.headerInput.value = ''
    this.textInput.value = ''
  }


  render () {
    let { slidesCount, exit } = this.props
    return (
      <form className='add-slide-form'>
        <div className='grid'>
          <div className='form-input position-grid'>
            <p className='position-label'>#</p>
            <input
              name='position'
              ref={node => this.positionInput = node}
              type='number'
              defaultValue={slidesCount + 1}
              min={1}
              max={slidesCount}
            />
          </div>
          <div className='form-input'>
            <input
              name='header'
              ref={node => this.headerInput = node}
              type="text"
              placeholder='Header'
            />
          </div>
          <div className="form-input text-area">
            <textarea
              id='text'
              name='text'
              ref={node => this.textInput = node}
              placeholder='Type content here...'
            />
          </div>
        </div>
        <footer className='section'>
          <button type='submit' onClick={this.submit}>Submit</button>
          <button onClick={exit}>Cancel</button>
        </footer>
      </form>
    )
  }
}

export default Index
